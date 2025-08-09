interface ApiResponse<T = any> {
  data?: T
  error?: string
  message?: string
}

interface PresignUploadRequest {
  fileName: string
  contentType: string
  fileSize: number
  partCount: number
}

interface PresignUploadResponse {
  uploadId: string
  key: string
  presignedUrls: string[]
}

interface RagIngestRequest {
  s3_key: string
  title?: string
  doc_type?: 'BYLAWS' | 'MINUTES' | 'POLICY' | 'OTHER'
}

interface RagIngestResponse {
  documentId: string
  chunks: number
}

interface RagQueryRequest {
  question: string
  topK?: number
}

interface Citation {
  documentId: string
  title: string
  chunkIndex: number
}

interface RagQueryResponse {
  answer: string
  citations: Citation[]
}

class ApiClient {
  private baseUrl: string
  private getAuthToken: () => string | null

  constructor(baseUrl: string, getAuthToken: () => string | null) {
    this.baseUrl = baseUrl
    this.getAuthToken = getAuthToken
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const token = this.getAuthToken()
    
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
    })

    if (!response.ok) {
      return { error: `HTTP ${response.status}: ${response.statusText}` }
    }

    const data = await response.json()
    return { data }
  }

  async presignUpload(request: PresignUploadRequest): Promise<ApiResponse<PresignUploadResponse>> {
    return this.request<PresignUploadResponse>('/upload/presign', {
      method: 'POST',
      body: JSON.stringify(request),
    })
  }

  async ingestDocument(request: RagIngestRequest): Promise<ApiResponse<RagIngestResponse>> {
    return this.request<RagIngestResponse>('/rag/ingest', {
      method: 'POST',
      body: JSON.stringify(request),
    })
  }

  async queryRag(request: RagQueryRequest): Promise<ApiResponse<RagQueryResponse>> {
    return this.request<RagQueryResponse>('/rag/query', {
      method: 'POST',
      body: JSON.stringify(request),
    })
  }
}

// TODO: Replace with actual token getter when NextAuth is configured
export const apiClient = new ApiClient(
  process.env.NEXT_PUBLIC_API_BASE_URL || '',
  () => null // TODO: Get JWT token from NextAuth session
)
