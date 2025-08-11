# Copilot Instructions for ASGC Website

Use this guide to be productive immediately in this repo. Keep responses short and practical. Prefer concrete edits with verification over high‑level advice.

## System overview (what matters)
- Monorepo with three parts:
  - `frontend/`: Next.js 14 App Router + TypeScript + Tailwind. Prisma schema present; NextAuth planned with Cognito. Motion via `framer-motion` with shared presets.
  - `infra/`: AWS CDK (TypeScript) provisioning Cognito, S3, CloudFront, Aurora Serverless (Postgres + pgvector), API Gateway, and Lambdas.
  - `lambdas/`: Upload presign (Node), RAG ingest/query (Python 3.12) using Amazon Titan embeddings and Claude via Bedrock.
- Data flow
  1) Frontend requests `POST /upload/presign` → multipart upload directly to S3.
  2) After upload, frontend calls `POST /rag/ingest` to index text and embeddings in Aurora (pgvector).
  3) Queries hit `POST /rag/query` → embed question → pgvector similarity → Claude generates answer.

## Conventions and sharp edges
- Hydration-safe dates: always use `lib/date.ts` (`formatDateUTC`, `formatWeekdayShortUTC`) instead of `toLocaleDateString`.
- Motion: import from `components/motion/presets.ts` and wrap with `respectReducedMotion(...)`.
- Tailwind editor warnings for `@tailwind`/`@apply` are expected; builds are clean.
- API client: `lib/api.ts` centralizes calls. Provide JWT from NextAuth once Cognito is wired (currently returns null token).
- Auth: `lib/auth.ts` has a Cognito OAuth skeleton. Don’t over-type `session` until augmentation is added; see temporary narrowing used there.
- Content: temporary mock content under `lib/content/`. Replace with real sources or CMS later.

## Build, run, test
- Frontend
  - Dev: from repo root or `frontend/`
    - `npm run dev --workspace=frontend`
  - Build: `npm run build --workspace=frontend`
  - Lint: `npm run lint --workspace=frontend`
- Infra (AWS CDK)
  - Bootstrap once: `cd infra && npx cdk bootstrap`
  - Deploy: `npx cdk deploy`
  - Useful outputs: `ApiBaseUrl`, `S3UploadBucket`, `CloudFrontDomain`, `CognitoUserPoolId`, `CognitoUserPoolClientId`, `DatabaseSecretArn`.
- Lambdas
  - Node presign: `lambdas/presign-upload/index.ts`
  - Python RAG: `lambdas/rag-ingest/app.py`, `lambdas/rag-query/app.py` (Bedrock Titan + Claude).

## Environment wiring
- Frontend `.env.local` keys (see README):
  - `NEXT_PUBLIC_API_BASE_URL` → API Gateway URL from CDK output.
  - NextAuth/Cognito: `NEXTAUTH_URL`, `NEXTAUTH_SECRET`, `COGNITO_ISSUER`, `COGNITO_CLIENT_ID`, `COGNITO_CLIENT_SECRET`.
  - S3/Region/DB: `AWS_REGION`, `S3_UPLOAD_BUCKET`, `CLOUDFRONT_PUBLIC_DOMAIN`, `DATABASE_URL`.
- Next config: `frontend/next.config.mjs` sets headers and exposes NextAuth envs.

## Patterns to copy
- UTC date usage in pages and components (e.g., events/governance) to avoid hydration mismatches.
- Motion + reduced-motion wrapper in `app/page.tsx` and feature sections.
- API client usage example: `apiClient.presignUpload({...})` with typed request/response.

## When adding features
- New pages: add under `frontend/app/` using App Router; keep server-safe code on the server and browser APIs in client components (`'use client'`).
- Server interactions: prefer calling the API Gateway via `lib/api.ts`; don’t import Lambdas directly.
- File uploads: call `presignUpload` → do multipart upload → optionally call `rag/ingest` with the S3 key.
- Database schema: adjust `frontend/prisma/schema.prisma`; run `npx prisma migrate dev` locally; remember Aurora needs `pgvector` (see CDK comment for enabling).

## Gotchas
- Until Cognito is wired into the frontend, API calls requiring auth will fail in production; the dev API client passes no token.
- Lambdas assume Bedrock availability in `us-west-2` and a VPC‑reachable database; update regions/VPC rules if you change stacks.
- CDK sets generous CORS and destructive removal policies for dev; tighten for prod.

## File map you’ll reference a lot
- Frontend: `app/page.tsx`, `components/`, `lib/api.ts`, `lib/date.ts`, `components/motion/presets.ts`, `styles/globals.css`.
- Infra: `infra/lib/infra-stack.ts` (single source of truth for AWS resources).
- Lambdas: `lambdas/presign-upload/index.ts`, `lambdas/rag-ingest/app.py`, `lambdas/rag-query/app.py`.

## Example snippets
- Presign + ingest
```ts
const { data } = await apiClient.presignUpload({ fileName, contentType, fileSize, partCount });
// PUT parts to data.presignedUrls[] … then
await apiClient.ingestDocument({ s3_key: data!.key, title, doc_type: 'BYLAWS' });
```
- Hydration‑safe date
```ts
import { formatDateUTC } from '@/lib/date';
const when = formatDateUTC('2025-05-01');
```

Keep outputs concise, propose diffs, and validate with build/lint before finishing.
