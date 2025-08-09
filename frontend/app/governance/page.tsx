export default function GovernancePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">ASGC Governance</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <h2 className="text-xl font-semibold mb-4">Meetings</h2>
          <p className="text-gray-600 mb-4">
            View upcoming meetings, agendas, and public participation information.
          </p>
          <a href="/governance/meetings" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            View Meetings
          </a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border">
          <h2 className="text-xl font-semibold mb-4">Agendas</h2>
          <p className="text-gray-600 mb-4">
            Access meeting agendas organized by council and date.
          </p>
          <a href="/governance/agendas" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            View Agendas
          </a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border">
          <h2 className="text-xl font-semibold mb-4">Minutes</h2>
          <p className="text-gray-600 mb-4">
            Review meeting minutes and decisions made by ASGC.
          </p>
          <a href="/governance/minutes" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
            View Minutes
          </a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border">
          <h2 className="text-xl font-semibold mb-4">Bylaws</h2>
          <p className="text-gray-600 mb-4">
            Read ASGC bylaws and governing documents.
          </p>
          <a href="/governance/bylaws" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
            View Bylaws
          </a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border">
          <h2 className="text-xl font-semibold mb-4">Resolutions</h2>
          <p className="text-gray-600 mb-4">
            Browse resolutions and voting records.
          </p>
          <a href="/governance/resolutions" className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700">
            View Resolutions
          </a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border">
          <h2 className="text-xl font-semibold mb-4">Transparency</h2>
          <p className="text-gray-600 mb-4">
            Access public records and accountability information.
          </p>
          <button className="bg-gray-400 text-white px-4 py-2 rounded cursor-not-allowed" disabled>
            Coming Soon
          </button>
        </div>
      </div>
    </div>
  )
}
