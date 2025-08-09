#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AsgcStack } from '../lib/infra-stack';

const app = new cdk.App();
new AsgcStack(app, 'AsgcStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: 'us-west-2',
  },
});
