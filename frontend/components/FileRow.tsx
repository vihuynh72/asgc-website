interface FileRowProps {
  fileName: string
  fileSize?: string
  fileType?: string
  uploadDate?: Date
  downloadUrl?: string
  description?: string
  isPublic?: boolean
  downloadCount?: number
  className?: string
}

export default function FileRow({
  fileName,
  fileSize,
  fileType = 'pdf',
  uploadDate,
  downloadUrl,
  description,
  isPublic = true,
  downloadCount,
  className = '',
}: FileRowProps) {
  const getFileIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'pdf':
        return (
          <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8.267 14.68c-.184 0-.308.018-.372.036v1.178c.076.018.171.023.302.023.479 0 .774-.242.774-.651 0-.366-.254-.586-.704-.586zm3.487.012c-.2 0-.33.018-.407.036v2.61c.077.018.201.018.313.018.817.006 1.349-.444 1.349-1.396.006-.83-.479-1.268-1.255-1.268z"/>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
            <path d="M14,9V2l6,7H14z"/>
          </svg>
        )
      case 'doc':
      case 'docx':
        return (
          <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
            <path d="M14,9V2l6,7H14z"/>
          </svg>
        )
      case 'xls':
      case 'xlsx':
        return (
          <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
            <path d="M14,9V2l6,7H14z"/>
          </svg>
        )
      default:
        return (
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        )
    }
  }

  const formatFileSize = (sizeStr?: string) => {
    if (!sizeStr) return null
    
    // Handle if it's already formatted
    if (sizeStr.includes('KB') || sizeStr.includes('MB') || sizeStr.includes('GB')) {
      return sizeStr
    }
    
    // Convert bytes to readable format
    const bytes = parseInt(sizeStr, 10)
    if (isNaN(bytes)) return sizeStr
    
    if (bytes < 1024) return `${bytes} B`
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
    if (bytes < 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
    return `${(bytes / (1024 * 1024 * 1024)).toFixed(1)} GB`
  }

  const handleDownload = () => {
    if (!downloadUrl) {
      console.log('Download would be triggered for:', fileName)
      return
    }
    
    // In a real implementation, this would trigger the download
    window.open(downloadUrl, '_blank')
  }

  return (
    <div className={`flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors ${className}`}>
      <div className="flex items-center space-x-3 flex-1 min-w-0">
        {/* File Icon */}
        <div className="flex-shrink-0">
          {getFileIcon(fileType)}
        </div>

        {/* File Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2">
            <h4 className="text-sm font-medium text-gray-900 truncate">
              {fileName}
            </h4>
            {!isPublic && (
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Private
              </span>
            )}
          </div>
          
          {description && (
            <p className="text-xs text-gray-600 mt-1 truncate">
              {description}
            </p>
          )}
          
          <div className="flex items-center space-x-4 mt-1">
            {fileSize && (
              <span className="text-xs text-gray-500">
                {formatFileSize(fileSize)}
              </span>
            )}
            
            {uploadDate && (
              <span className="text-xs text-gray-500">
                {uploadDate.toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </span>
            )}
            
            {downloadCount !== undefined && (
              <span className="text-xs text-gray-500 flex items-center">
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                {downloadCount} downloads
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-2 flex-shrink-0">
        <button
          onClick={handleDownload}
          className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
          disabled={!isPublic && !downloadUrl}
          title={!isPublic && !downloadUrl ? 'Login required to download' : 'Download file'}
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download
        </button>
        
        <button
          className="inline-flex items-center px-2 py-1.5 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          title="Copy link to file"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </button>
      </div>
    </div>
  )
}
