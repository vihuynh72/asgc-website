import dynamic from 'next/dynamic'

const UploadClient = dynamic(() => import('./UploadClient'), { ssr: false })

export default function UploadsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">File Uploads</h1>
      <div className="max-w-2xl">
        <p className="text-gray-600 mb-8">
          Upload documents to the ASGC platform. Supported formats: PDF, DOCX, PNG, JPG, MP4.
          Maximum file size: 250MB.
        </p>
        
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <h3 className="text-lg font-semibold text-red-800">AWS Setup Required</h3>
          <p className="text-red-700">
            File uploads require AWS infrastructure to be deployed. The upload functionality 
            will be available after running the CDK deployment.
          </p>
        </div>
        
  <UploadClient />
      </div>
    </div>
  )
}
