import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as cognito from 'aws-cdk-lib/aws-cognito';
import * as rds from 'aws-cdk-lib/aws-rds';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as iam from 'aws-cdk-lib/aws-iam';

export class AsgcStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // S3 bucket for file uploads
    const uploadsBucket = new s3.Bucket(this, 'AsgcUploadsBucket', {
      bucketName: `asgc-uploads-${this.account}-${this.region}`,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      objectOwnership: s3.ObjectOwnership.BUCKET_OWNER_PREFERRED,
      cors: [
        {
          allowedHeaders: ['*'],
          allowedMethods: [s3.HttpMethods.GET, s3.HttpMethods.PUT, s3.HttpMethods.POST],
          allowedOrigins: ['*'], // TODO: Restrict to actual frontend domain
          exposedHeaders: ['ETag'],
        },
      ],
      removalPolicy: cdk.RemovalPolicy.DESTROY, // TODO: Change for production
    });

    // TODO: Create separate public assets bucket for CloudFront
    const publicAssetsBucket = new s3.Bucket(this, 'AsgcPublicAssetsBucket', {
      bucketName: `asgc-public-assets-${this.account}-${this.region}`,
      publicReadAccess: false,
      removalPolicy: cdk.RemovalPolicy.DESTROY, // TODO: Change for production
    });

    // CloudFront distribution for public assets
    const distribution = new cloudfront.CloudFrontWebDistribution(this, 'AsgcDistribution', {
      originConfigs: [
        {
          s3OriginSource: {
            s3BucketSource: publicAssetsBucket,
          },
          behaviors: [{ isDefaultBehavior: true }],
        },
      ],
    });

    // Cognito User Pool
    const userPool = new cognito.UserPool(this, 'AsgcUserPool', {
      userPoolName: 'asgc-users',
      signInAliases: {
        email: true,
      },
      autoVerify: {
        email: true,
      },
      passwordPolicy: {
        minLength: 8,
        requireLowercase: true,
        requireUppercase: true,
        requireDigits: true,
        requireSymbols: true,
      },
      removalPolicy: cdk.RemovalPolicy.DESTROY, // TODO: Change for production
    });

    const userPoolClient = new cognito.UserPoolClient(this, 'AsgcUserPoolClient', {
      userPool,
      generateSecret: true,
      oAuth: {
        flows: {
          authorizationCodeGrant: true,
        },
        scopes: [cognito.OAuthScope.OPENID, cognito.OAuthScope.EMAIL, cognito.OAuthScope.PROFILE],
        callbackUrls: ['http://localhost:3000/api/auth/callback/cognito'], // TODO: Add production URL
      },
    });

    // VPC for RDS
    const vpc = new ec2.Vpc(this, 'AsgcVpc', {
      maxAzs: 2,
      natGateways: 1,
    });

    // Database credentials secret
    const dbSecret = new secretsmanager.Secret(this, 'AsgcDbSecret', {
      description: 'ASGC Aurora database credentials',
      generateSecretString: {
        secretStringTemplate: JSON.stringify({ username: 'asgc_admin' }),
        generateStringKey: 'password',
        excludeCharacters: '"@/\\\\',
      },
    });

    // Aurora Serverless v2 cluster
    const dbCluster = new rds.DatabaseCluster(this, 'AsgcDatabase', {
      engine: rds.DatabaseClusterEngine.auroraPostgres({
        version: rds.AuroraPostgresEngineVersion.VER_15_4,
      }),
      credentials: rds.Credentials.fromSecret(dbSecret),
      defaultDatabaseName: 'asgc',
      serverlessV2MinCapacity: 0.5,
      serverlessV2MaxCapacity: 2,
      vpc,
      enableDataApi: true, // Optional: for easier Lambda access
      removalPolicy: cdk.RemovalPolicy.DESTROY, // TODO: Change for production
    });

    // Enable pgvector extension - TODO: Add custom resource to run this SQL
    // CREATE EXTENSION IF NOT EXISTS vector;

    // IAM role for Lambda functions
    const lambdaRole = new iam.Role(this, 'AsgcLambdaRole', {
      assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
      managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName('service-role/AWSLambdaBasicExecutionRole'),
      ],
    });

    // Grant S3 permissions to Lambda
    uploadsBucket.grantReadWrite(lambdaRole);

    // Grant Secrets Manager access
    dbSecret.grantRead(lambdaRole);

    // Grant Bedrock permissions
    lambdaRole.addToPolicy(new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      actions: [
        'bedrock:InvokeModel',
        'bedrock:InvokeModelWithResponseStream',
      ],
      resources: [
        `arn:aws:bedrock:${this.region}::foundation-model/anthropic.claude-3-5-sonnet-20241022-v2:0`,
        `arn:aws:bedrock:${this.region}::foundation-model/amazon.titan-embed-text-v1`,
      ],
    }));

    // Presign upload Lambda (Node.js)
    const presignUploadLambda = new lambda.Function(this, 'PresignUploadLambda', {
      runtime: lambda.Runtime.NODEJS_20_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset('../lambdas/presign-upload'),
      role: lambdaRole,
      environment: {
        UPLOAD_BUCKET: uploadsBucket.bucketName,
      },
    });

    // RAG ingest Lambda (Python)
    const ragIngestLambda = new lambda.Function(this, 'RagIngestLambda', {
      runtime: lambda.Runtime.PYTHON_3_12,
      handler: 'app.handler',
      code: lambda.Code.fromAsset('../lambdas/rag-ingest'),
      role: lambdaRole,
      timeout: cdk.Duration.minutes(5),
      environment: {
        UPLOAD_BUCKET: uploadsBucket.bucketName,
        DB_SECRET_ARN: dbSecret.secretArn,
      },
    });

    // RAG query Lambda (Python)
    const ragQueryLambda = new lambda.Function(this, 'RagQueryLambda', {
      runtime: lambda.Runtime.PYTHON_3_12,
      handler: 'app.handler',
      code: lambda.Code.fromAsset('../lambdas/rag-query'),
      role: lambdaRole,
      timeout: cdk.Duration.minutes(1),
      environment: {
        DB_SECRET_ARN: dbSecret.secretArn,
      },
    });

    // Grant RDS access to Lambdas
    dbCluster.connections.allowDefaultPortFrom(ragIngestLambda);
    dbCluster.connections.allowDefaultPortFrom(ragQueryLambda);

    // API Gateway
    const api = new apigateway.RestApi(this, 'AsgcApi', {
      restApiName: 'ASGC API',
      description: 'API for ASGC platform',
      defaultCorsPreflightOptions: {
        allowOrigins: apigateway.Cors.ALL_ORIGINS, // TODO: Restrict to actual frontend domain
        allowMethods: apigateway.Cors.ALL_METHODS,
        allowHeaders: ['Content-Type', 'Authorization'],
      },
    });

    // TODO: Add Cognito authorizer
    const cognitoAuthorizer = new apigateway.CognitoUserPoolsAuthorizer(this, 'CognitoAuthorizer', {
      cognitoUserPools: [userPool],
    });

    // API routes
    const uploadResource = api.root.addResource('upload');
    uploadResource.addResource('presign').addMethod('POST', 
      new apigateway.LambdaIntegration(presignUploadLambda),
      {
        authorizer: cognitoAuthorizer,
        authorizationType: apigateway.AuthorizationType.COGNITO,
      }
    );

    const ragResource = api.root.addResource('rag');
    ragResource.addResource('ingest').addMethod('POST',
      new apigateway.LambdaIntegration(ragIngestLambda),
      {
        authorizer: cognitoAuthorizer,
        authorizationType: apigateway.AuthorizationType.COGNITO,
      }
    );
    ragResource.addResource('query').addMethod('POST',
      new apigateway.LambdaIntegration(ragQueryLambda),
      {
        authorizer: cognitoAuthorizer,
        authorizationType: apigateway.AuthorizationType.COGNITO,
      }
    );

    // Stack outputs
    new cdk.CfnOutput(this, 'ApiBaseUrl', {
      value: api.url,
      description: 'API Gateway base URL',
    });

    new cdk.CfnOutput(this, 'S3UploadBucket', {
      value: uploadsBucket.bucketName,
      description: 'S3 uploads bucket name',
    });

    new cdk.CfnOutput(this, 'CloudFrontDomain', {
      value: distribution.distributionDomainName,
      description: 'CloudFront distribution domain',
    });

    new cdk.CfnOutput(this, 'CognitoUserPoolId', {
      value: userPool.userPoolId,
      description: 'Cognito User Pool ID',
    });

    new cdk.CfnOutput(this, 'CognitoUserPoolClientId', {
      value: userPoolClient.userPoolClientId,
      description: 'Cognito User Pool Client ID',
    });

    new cdk.CfnOutput(this, 'DatabaseSecretArn', {
      value: dbSecret.secretArn,
      description: 'Database credentials secret ARN',
    });
  }
}
