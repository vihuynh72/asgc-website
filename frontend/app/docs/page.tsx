export default function DocsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Document Search</h1>
      <div className="max-w-4xl">
        <p className="text-gray-600 mb-8">
          Search through ASGC documents using AI-powered natural language queries.
        </p>
        
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <h3 className="text-lg font-semibold text-red-800">AWS Setup Required</h3>
          <p className="text-red-700">
            Document search requires AWS Bedrock and the database to be set up. 
            This feature will be available after completing the infrastructure deployment.
          </p>
        </div>
        
        <div className="bg-white border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Search Documents</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                Ask a question about ASGC documents
              </label>
              <textarea
                id="search"
                placeholder="Example: What are the voting procedures for ASGC elections?"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                rows={3}
                disabled
              />
            </div>
            <button 
              className="bg-gray-400 text-white px-6 py-2 rounded-md cursor-not-allowed"
              disabled
            >
              Search (Coming Soon)
            </button>
          </div>
          
          <div className="mt-8 border-t pt-6">
            <h3 className="text-lg font-semibold mb-4">Recent Documents</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <span className="text-gray-600">No documents uploaded yet</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
