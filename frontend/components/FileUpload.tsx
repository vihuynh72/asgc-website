'use client'

import { useState } from 'react'
import { apiClient } from '../lib/api'

interface FileUploadProps {
  onUploadComplete?: (key: string) => void
}

export default function FileUpload({ onUploadComplete }: FileUploadProps) {
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      setError(null)
    }
  }

  const uploadFile = async () => {
    if (!file) return

    setUploading(true)
    setError(null)
    setProgress(0)

    try {
      // Calculate parts for multipart upload (5MB per part)
      const PART_SIZE = 5 * 1024 * 1024
      const partCount = Math.ceil(file.size / PART_SIZE)

      // Get presigned URLs
      const presignResponse = await apiClient.presignUpload({
        fileName: file.name,
        contentType: file.type,
        fileSize: file.size,
        partCount: partCount,
      })

      if (presignResponse.error || !presignResponse.data) {
        throw new Error(presignResponse.error || 'Failed to get presigned URLs')
      }

      const { uploadId, key, presignedUrls } = presignResponse.data

      // Upload parts
      const uploadPromises = []
      for (let i = 0; i < partCount; i++) {
        const start = i * PART_SIZE
        const end = Math.min(start + PART_SIZE, file.size)
        const part = file.slice(start, end)
        
        const uploadPromise = fetch(presignedUrls[i], {
          method: 'PUT',
          body: part,
        }).then(response => {
          if (!response.ok) {
            throw new Error(`Failed to upload part ${i + 1}`)
          }
          setProgress((i + 1) / partCount * 100)
          return {
            ETag: response.headers.get('ETag'),
            PartNumber: i + 1,
          }
        })
        
        uploadPromises.push(uploadPromise)
      }

      await Promise.all(uploadPromises)

      // TODO: Complete multipart upload
      // This would require another API endpoint to complete the upload

      setProgress(100)
      onUploadComplete?.(key)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed')
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto p-6 border border-gray-300 rounded-lg">
      <h3 className="text-lg font-medium mb-4">Upload File</h3>
      
      <div className="mb-4">
        <input
          type="file"
          onChange={handleFileSelect}
          accept=".pdf,.docx,.png,.jpg,.jpeg,.mp4"
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
      </div>

      {file && (
        <div className="mb-4 text-sm text-gray-600">
          <p>Selected: {file.name}</p>
          <p>Size: {(file.size / 1024 / 1024).toFixed(2)} MB</p>
        </div>
      )}

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-700">
          {error}
        </div>
      )}

      {uploading && (
        <div className="mb-4">
          <div className="bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-gray-600 mt-1">{progress.toFixed(0)}% uploaded</p>
        </div>
      )}

      <button
        onClick={uploadFile}
        disabled={!file || uploading}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {uploading ? 'Uploading...' : 'Upload File'}
      </button>
    </div>
  )
}
