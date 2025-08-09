export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">ASGC Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <h2 className="text-xl font-semibold mb-4">Document Management</h2>
          <p className="text-gray-600 mb-4">Upload and manage ASGC documents</p>
          <a href="/uploads" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Go to Uploads
          </a>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <h2 className="text-xl font-semibold mb-4">Document Search</h2>
          <p className="text-gray-600 mb-4">AI-powered search through documents</p>
          <a href="/docs" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Search Documents
          </a>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <h2 className="text-xl font-semibold mb-4">User Management</h2>
          <p className="text-gray-600 mb-4">Manage student accounts and roles</p>
          <button className="bg-gray-400 text-white px-4 py-2 rounded cursor-not-allowed" disabled>
            Coming Soon
          </button>
        </div>
      </div>
      
      <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-yellow-800">Setup Required</h3>
        <p className="text-yellow-700">
          AWS infrastructure needs to be deployed before full functionality is available. 
          Check the README.md for deployment instructions.
        </p>
      </div>
    </div>
  )
}
