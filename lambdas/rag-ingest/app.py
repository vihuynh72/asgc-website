import json
import boto3
import psycopg2
import numpy as np
from pypdf import PdfReader
from io import BytesIO
import uuid
import os
from typing import List, Dict, Any

# AWS clients
s3_client = boto3.client('s3')
secrets_client = boto3.client('secretsmanager')
bedrock_client = boto3.client('bedrock-runtime', region_name='us-west-2')

def get_db_credentials():
    """Retrieve database credentials from Secrets Manager"""
    secret_arn = os.environ['DB_SECRET_ARN']
    response = secrets_client.get_secret_value(SecretId=secret_arn)
    return json.loads(response['SecretString'])

def extract_text_from_pdf(pdf_bytes: bytes) -> str:
    """Extract text from PDF bytes"""
    try:
        pdf_reader = PdfReader(BytesIO(pdf_bytes))
        text = ""
        for page in pdf_reader.pages:
            text += page.extract_text() + "\n"
        return text.strip()
    except Exception as e:
        print(f"Error extracting text from PDF: {e}")
        raise

def chunk_text(text: str, chunk_size: int = 1500, overlap: int = 200) -> List[str]:
    """Split text into overlapping chunks"""
    if len(text) <= chunk_size:
        return [text]
    
    chunks = []
    start = 0
    
    while start < len(text):
        end = start + chunk_size
        if end >= len(text):
            chunks.append(text[start:])
            break
        
        # Try to break at a sentence boundary
        last_period = text.rfind('.', start, end)
        if last_period > start:
            end = last_period + 1
        
        chunks.append(text[start:end])
        start = end - overlap
    
    return chunks

def get_embeddings(text: str) -> List[float]:
    """Get embeddings from Amazon Titan"""
    try:
        body = json.dumps({
            "inputText": text
        })
        
        response = bedrock_client.invoke_model(
            modelId='amazon.titan-embed-text-v1',
            body=body,
            contentType='application/json'
        )
        
        response_body = json.loads(response['body'].read())
        return response_body['embedding']
    except Exception as e:
        print(f"Error getting embeddings: {e}")
        raise

def store_document_and_embeddings(
    db_conn,
    document_id: str,
    title: str,
    doc_type: str,
    file_id: str,
    chunks: List[str],
    embeddings: List[List[float]]
) -> int:
    """Store document and embeddings in database"""
    cursor = db_conn.cursor()
    
    try:
        # Insert document
        cursor.execute("""
            INSERT INTO documents (id, title, type, "fileId", "createdAt")
            VALUES (%s, %s, %s, %s, NOW())
        """, (document_id, title, doc_type, file_id))
        
        # Insert embeddings
        for i, (chunk, embedding) in enumerate(zip(chunks, embeddings)):
            embedding_vector = '[' + ','.join(map(str, embedding)) + ']'
            cursor.execute("""
                INSERT INTO embeddings (id, "documentId", "chunkIndex", content, embedding)
                VALUES (%s, %s, %s, %s, %s::vector)
            """, (str(uuid.uuid4()), document_id, i, chunk, embedding_vector))
        
        db_conn.commit()
        return len(chunks)
    except Exception as e:
        db_conn.rollback()
        raise e
    finally:
        cursor.close()

def handler(event, context):
    """Lambda handler for RAG document ingestion"""
    try:
        # Parse request body
        if isinstance(event.get('body'), str):
            body = json.loads(event['body'])
        else:
            body = event.get('body', event)
        
        s3_key = body.get('s3_key')
        title = body.get('title', 'Untitled Document')
        doc_type = body.get('doc_type', 'OTHER')
        
        if not s3_key:
            return {
                'statusCode': 400,
                'headers': {'Content-Type': 'application/json'},
                'body': json.dumps({'error': 'Missing s3_key parameter'})
            }
        
        # Get upload bucket from environment
        bucket_name = os.environ['UPLOAD_BUCKET']
        
        # Download file from S3
        try:
            response = s3_client.get_object(Bucket=bucket_name, Key=s3_key)
            file_content = response['Body'].read()
        except Exception as e:
            return {
                'statusCode': 404,
                'headers': {'Content-Type': 'application/json'},
                'body': json.dumps({'error': f'File not found in S3: {str(e)}'})
            }
        
        # Extract text from PDF
        try:
            text = extract_text_from_pdf(file_content)
            if not text.strip():
                return {
                    'statusCode': 400,
                    'headers': {'Content-Type': 'application/json'},
                    'body': json.dumps({'error': 'No text extracted from PDF'})
                }
        except Exception as e:
            return {
                'statusCode': 400,
                'headers': {'Content-Type': 'application/json'},
                'body': json.dumps({'error': f'Error processing PDF: {str(e)}'})
            }
        
        # Chunk text
        chunks = chunk_text(text)
        
        # Get embeddings for all chunks
        embeddings = []
        for chunk in chunks:
            try:
                embedding = get_embeddings(chunk)
                embeddings.append(embedding)
            except Exception as e:
                return {
                    'statusCode': 500,
                    'headers': {'Content-Type': 'application/json'},
                    'body': json.dumps({'error': f'Error getting embeddings: {str(e)}'})
                }
        
        # Connect to database
        try:
            db_creds = get_db_credentials()
            db_conn = psycopg2.connect(
                host=db_creds.get('host'),
                port=db_creds.get('port', 5432),
                database=db_creds.get('dbname', 'asgc'),
                user=db_creds.get('username'),
                password=db_creds.get('password')
            )
        except Exception as e:
            return {
                'statusCode': 500,
                'headers': {'Content-Type': 'application/json'},
                'body': json.dumps({'error': f'Database connection failed: {str(e)}'})
            }
        
        # Store in database
        try:
            document_id = str(uuid.uuid4())
            # TODO: Get actual file_id from Files table
            file_id = str(uuid.uuid4())  # Placeholder
            
            chunk_count = store_document_and_embeddings(
                db_conn, document_id, title, doc_type, file_id, chunks, embeddings
            )
            
            return {
                'statusCode': 200,
                'headers': {'Content-Type': 'application/json'},
                'body': json.dumps({
                    'documentId': document_id,
                    'chunks': chunk_count
                })
            }
        except Exception as e:
            return {
                'statusCode': 500,
                'headers': {'Content-Type': 'application/json'},
                'body': json.dumps({'error': f'Database error: {str(e)}'})
            }
        finally:
            if 'db_conn' in locals():
                db_conn.close()
    
    except Exception as e:
        print(f"Unexpected error: {e}")
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'Internal server error'})
        }
