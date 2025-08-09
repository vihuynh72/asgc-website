# ASGC Website Platform

A modern, full-stack web platform for the Associated Students of Grossmont College (ASGC) with AI-powered document search and cloud-based file management.

## Architecture

- **Frontend**: Next.js 14 with TypeScript, Tailwind CSS, and shadcn/ui
- **Backend**: AWS Lambda functions with API Gateway
- **Database**: Aurora Serverless v2 (PostgreSQL 15) with pgvector
- **Auth**: NextAuth.js with AWS Cognito
- **Storage**: Amazon S3 with CloudFront
- **AI**: AWS Bedrock (Claude 3.5 Sonnet + Amazon Titan embeddings)
- **Infrastructure**: AWS CDK (TypeScript)

## Project Structure

```
asgc-website/
├── package.json              # Root package.json with workspaces
├── .gitignore                # Git ignore rules
├── TODO.txt                  # Setup checklist
├── README.md                 # This file
├── .github/workflows/        # CI/CD pipeline
│   └── ci.yml
├── frontend/                 # Next.js application
│   ├── app/                  # App Router pages
│   ├── components/           # React components
│   ├── lib/                  # Utilities and API client
│   ├── prisma/               # Database schema
│   ├── styles/               # CSS styles
│   └── package.json
├── infra/                    # AWS CDK infrastructure
│   ├── bin/infra.ts          # CDK app entry point
│   ├── lib/infra-stack.ts    # Main stack definition
│   ├── cdk.json              # CDK configuration
│   └── package.json
└── lambdas/                  # Lambda functions
    ├── presign-upload/       # Node.js presigned upload
    ├── rag-ingest/          # Python document ingestion
    └── rag-query/           # Python RAG query
```

## Setup Instructions

### Prerequisites

- Node.js 20+
- Python 3.12+
- AWS CLI configured
- AWS CDK CLI installed (`npm install -g aws-cdk`)

### 1. Initial Setup

```bash
# Clone and install dependencies
git clone <your-repo-url>
cd asgc-website
npm install

# Install workspace dependencies
npm install --workspaces
```

### 2. AWS Setup

```bash
# Bootstrap CDK (one-time setup)
cd infra
npx cdk bootstrap

# Deploy infrastructure
npx cdk deploy
```

### 3. Environment Configuration

Copy the example environment file and fill in the values from CDK outputs:

```bash
cd frontend
cp .env.example .env.local
```

Update `.env.local` with actual values:

```env
NEXT_PUBLIC_API_BASE_URL=https://your-api-id.execute-api.us-west-2.amazonaws.com
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-random-secret-here
COGNITO_ISSUER=https://cognito-idp.us-west-2.amazonaws.com/us-west-2_YourPoolId
COGNITO_CLIENT_ID=your-client-id
COGNITO_CLIENT_SECRET=your-client-secret
AWS_REGION=us-west-2
S3_UPLOAD_BUCKET=your-bucket-name
CLOUDFRONT_PUBLIC_DOMAIN=your-cloudfront-domain.cloudfront.net
DATABASE_URL=postgresql://user:password@host:port/database
```

### 4. Database Setup

```bash
cd frontend

# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate deploy

# (Optional) Seed database
npx prisma db seed
```

### 5. Local Development

```bash
# Start frontend development server
npm run dev

# Or from root directory
npm run dev --workspace=frontend
```

Visit http://localhost:3000

## Deployment

### Frontend (Vercel)

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Backend (AWS)

Backend deploys automatically via GitHub Actions when pushing to main branch.

Manual deployment:

```bash
cd infra
npx cdk deploy
```

## Usage

### File Upload

1. Navigate to `/uploads`
2. Select a PDF, DOCX, PNG, JPG, or MP4 file (max 250MB)
3. Upload will be handled via S3 multipart upload

### Document Ingestion

After uploading, ingest documents for AI search:

```bash
curl -X POST "https://your-api.execute-api.us-west-2.amazonaws.com/rag/ingest" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "s3_key": "uploads/user123/2024-01/abc123.pdf",
    "title": "ASGC Bylaws 2024",
    "doc_type": "BYLAWS"
  }'
```

### RAG Query

Search documents with AI:

```bash
curl -X POST "https://your-api.execute-api.us-west-2.amazonaws.com/rag/query" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "question": "What are the voting procedures for ASGC elections?",
    "topK": 5
  }'
```

## API Endpoints

- `POST /upload/presign` - Get presigned URLs for multipart upload
- `POST /rag/ingest` - Ingest document for AI search
- `POST /rag/query` - Query documents with AI

## Database Schema

- **users**: User accounts with roles (STUDENT, OFFICER, ADVISOR, ADMIN)
- **files**: File metadata and S3 keys
- **documents**: Document metadata linked to files
- **embeddings**: Vector embeddings for RAG search
- **events**: ASGC events and meetings
- **applications**: Student applications

## Development

### Adding New Components

```bash
cd frontend
npx shadcn-ui@latest add button  # Example: add shadcn button component
```

### Database Changes

```bash
cd frontend
# Modify prisma/schema.prisma
npx prisma migrate dev --name your-migration-name
```

### Lambda Development

Lambda functions are in the `lambdas/` directory. Deploy changes via CDK:

```bash
cd infra
npx cdk deploy
```

## Monitoring

- CloudWatch logs for Lambda functions
- API Gateway metrics and logs
- Database performance insights

## Security

- All S3 buckets have blocked public access
- API endpoints require Cognito JWT authentication
- Lambda functions have least-privilege IAM permissions
- Database is in private VPC with security groups

## TODO

See `TODO.txt` for a detailed setup checklist and remaining tasks.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make changes and test locally
4. Submit a pull request

## Support

For issues and questions, please create a GitHub issue or contact the ASGC technical team.
A student-built website for the Associated Students of Grossmont College (ASGC)
