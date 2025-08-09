import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { S3Client, CreateMultipartUploadCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { UploadPartCommand } from '@aws-sdk/client-s3';

const s3Client = new S3Client({ region: process.env.AWS_REGION });
const UPLOAD_BUCKET = process.env.UPLOAD_BUCKET!;

// Allowed file types
const ALLOWED_MIME_TYPES = [
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'image/png',
  'image/jpeg',
  'video/mp4',
];

const MAX_FILE_SIZE = 250 * 1024 * 1024; // 250MB

interface PresignRequest {
  fileName: string;
  contentType: string;
  fileSize: number;
  partCount: number;
}

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    // TODO: Extract user ID from JWT token in authorization header
    const userId = 'user123'; // Placeholder - get from Cognito JWT

    if (!event.body) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'Request body is required' }),
      };
    }

    const request: PresignRequest = JSON.parse(event.body);
    const { fileName, contentType, fileSize, partCount } = request;

    // Validate input
    if (!fileName || !contentType || !fileSize || !partCount) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    if (!ALLOWED_MIME_TYPES.includes(contentType)) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'File type not allowed' }),
      };
    }

    if (fileSize > MAX_FILE_SIZE) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'File size exceeds maximum allowed' }),
      };
    }

    if (partCount < 1 || partCount > 10000) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'Invalid part count' }),
      };
    }

    // Generate S3 key: uploads/{userId}/{yyyy-mm}/randomKey.ext
    const now = new Date();
    const yearMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    const randomKey = Math.random().toString(36).substring(2, 15);
    const fileExtension = fileName.split('.').pop() || '';
    const s3Key = `uploads/${userId}/${yearMonth}/${randomKey}.${fileExtension}`;

    // Create multipart upload
    const createCommand = new CreateMultipartUploadCommand({
      Bucket: UPLOAD_BUCKET,
      Key: s3Key,
      ContentType: contentType,
    });

    const createResponse = await s3Client.send(createCommand);
    const uploadId = createResponse.UploadId!;

    // Generate presigned URLs for each part
    const presignedUrls: string[] = [];
    for (let partNumber = 1; partNumber <= partCount; partNumber++) {
      const uploadPartCommand = new UploadPartCommand({
        Bucket: UPLOAD_BUCKET,
        Key: s3Key,
        PartNumber: partNumber,
        UploadId: uploadId,
      });

      const presignedUrl = await getSignedUrl(s3Client, uploadPartCommand, {
        expiresIn: 3600, // 1 hour
      });

      presignedUrls.push(presignedUrl);
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        uploadId,
        key: s3Key,
        presignedUrls,
      }),
    };
  } catch (error) {
    console.error('Error creating presigned upload:', error);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};
