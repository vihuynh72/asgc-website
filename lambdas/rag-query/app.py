import json
import boto3
import psycopg2
import numpy as np
import os
from typing import List, Dict, Any

# AWS clients
secrets_client = boto3.client('secretsmanager')
bedrock_client = boto3.client('bedrock-runtime', region_name='us-west-2')

def get_db_credentials():
    """Retrieve database credentials from Secrets Manager"""
    secret_arn = os.environ['DB_SECRET_ARN']
    response = secrets_client.get_secret_value(SecretId=secret_arn)
    return json.loads(response['SecretString'])

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

def search_similar_chunks(db_conn, query_embedding: List[float], top_k: int = 5) -> List[Dict]:
    """Search for similar chunks using cosine similarity"""
    cursor = db_conn.cursor()
    
    try:
        # Convert embedding to vector format
        embedding_vector = '[' + ','.join(map(str, query_embedding)) + ']'
        
        # Query with cosine similarity (using 1 - cosine distance)
        cursor.execute("""
            SELECT 
                e.content,
                e."chunkIndex",
                d.id as document_id,
                d.title,
                d.type,
                1 - (e.embedding <=> %s::vector) as similarity
            FROM embeddings e
            JOIN documents d ON e."documentId" = d.id
            ORDER BY e.embedding <=> %s::vector
            LIMIT %s
        """, (embedding_vector, embedding_vector, top_k))
        
        results = []
        for row in cursor.fetchall():
            results.append({
                'content': row[0],
                'chunkIndex': row[1],
                'documentId': row[2],
                'title': row[3],
                'type': row[4],
                'similarity': float(row[5])
            })
        
        return results
    finally:
        cursor.close()

def generate_answer(question: str, context_chunks: List[Dict]) -> str:
    """Generate answer using Claude 3.5 Sonnet"""
    try:
        # Prepare context
        context = "\n\n".join([
            f"Document: {chunk['title']} (Type: {chunk['type']})\n"
            f"Content: {chunk['content']}"
            for chunk in context_chunks
        ])
        
        prompt = f"""Based on the following context from ASGC documents, please answer the question. 
If the answer is not contained in the context, say so clearly.

Context:
{context}

Question: {question}

Please provide a clear, accurate answer based only on the information provided in the context. 
Include references to the source documents when possible."""

        body = json.dumps({
            "anthropic_version": "bedrock-2023-05-31",
            "max_tokens": 1000,
            "messages": [
                {
                    "role": "user",
                    "content": prompt
                }
            ]
        })
        
        response = bedrock_client.invoke_model(
            modelId='anthropic.claude-3-5-sonnet-20241022-v2:0',
            body=body,
            contentType='application/json'
        )
        
        response_body = json.loads(response['body'].read())
        return response_body['content'][0]['text']
    except Exception as e:
        print(f"Error generating answer: {e}")
        raise

def handler(event, context):
    """Lambda handler for RAG query"""
    try:
        # Parse request body
        if isinstance(event.get('body'), str):
            body = json.loads(event['body'])
        else:
            body = event.get('body', event)
        
        question = body.get('question')
        top_k = body.get('topK', 5)
        
        if not question:
            return {
                'statusCode': 400,
                'headers': {'Content-Type': 'application/json'},
                'body': json.dumps({'error': 'Missing question parameter'})
            }
        
        # Get embeddings for the question
        try:
            query_embedding = get_embeddings(question)
        except Exception as e:
            return {
                'statusCode': 500,
                'headers': {'Content-Type': 'application/json'},
                'body': json.dumps({'error': f'Error getting question embeddings: {str(e)}'})
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
        
        # Search for similar chunks
        try:
            similar_chunks = search_similar_chunks(db_conn, query_embedding, top_k)
            
            if not similar_chunks:
                return {
                    'statusCode': 200,
                    'headers': {'Content-Type': 'application/json'},
                    'body': json.dumps({
                        'answer': 'No relevant documents found for your question.',
                        'citations': []
                    })
                }
        except Exception as e:
            return {
                'statusCode': 500,
                'headers': {'Content-Type': 'application/json'},
                'body': json.dumps({'error': f'Search error: {str(e)}'})
            }
        finally:
            if 'db_conn' in locals():
                db_conn.close()
        
        # Generate answer
        try:
            answer = generate_answer(question, similar_chunks)
            
            # Prepare citations
            citations = [
                {
                    'documentId': chunk['documentId'],
                    'title': chunk['title'],
                    'chunkIndex': chunk['chunkIndex']
                }
                for chunk in similar_chunks
            ]
            
            return {
                'statusCode': 200,
                'headers': {'Content-Type': 'application/json'},
                'body': json.dumps({
                    'answer': answer,
                    'citations': citations
                })
            }
        except Exception as e:
            return {
                'statusCode': 500,
                'headers': {'Content-Type': 'application/json'},
                'body': json.dumps({'error': f'Error generating answer: {str(e)}'})
            }
    
    except Exception as e:
        print(f"Unexpected error: {e}")
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json'},
            'body': json.dumps({'error': 'Internal server error'})
        }
