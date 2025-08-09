export default function ElectionsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">ASGC Elections</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h2 className="text-xl font-semibold mb-4">Election Information</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">Next Election</h3>
                <p className="text-gray-600">Spring 2026 ASGC Elections</p>
                <p className="text-sm text-gray-500">Candidate filing opens: March 1, 2026</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900">Key Dates</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Candidate filing: March 1-15, 2026</li>
                  <li>• Campaign period: March 16 - April 4, 2026</li>
                  <li>• Voting: April 5-7, 2026</li>
                  <li>• Results announced: April 8, 2026</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h2 className="text-xl font-semibold mb-4">Eligibility Requirements</h2>
            <div className="space-y-3 text-sm">
              <div>
                <h4 className="font-medium">To Run for Office:</h4>
                <ul className="text-gray-600 space-y-1 ml-4">
                  <li>• Currently enrolled student (minimum 6 units)</li>
                  <li>• Cumulative GPA of 2.5 or higher</li>
                  <li>• Good academic and disciplinary standing</li>
                  <li>• Completed at least one semester at Grossmont College</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium">To Vote:</h4>
                <ul className="text-gray-600 space-y-1 ml-4">
                  <li>• Currently enrolled student</li>
                  <li>• Valid student ID required</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h2 className="text-xl font-semibold mb-4">Candidate Resources</h2>
            <div className="space-y-3">
              <a href="#" className="block p-3 border border-gray-200 rounded hover:bg-gray-50">
                <div className="font-medium text-blue-600">Campaign Guidelines</div>
                <div className="text-sm text-gray-600">Rules and regulations for campaigning</div>
              </a>
              
              <a href="#" className="block p-3 border border-gray-200 rounded hover:bg-gray-50">
                <div className="font-medium text-blue-600">Candidate Handbook</div>
                <div className="text-sm text-gray-600">Complete guide to running for ASGC office</div>
              </a>
              
              <a href="#" className="block p-3 border border-gray-200 rounded hover:bg-gray-50">
                <div className="font-medium text-blue-600">Filing Forms</div>
                <div className="text-sm text-gray-600">Candidate declaration and petition forms</div>
              </a>
              
              <a href="#" className="block p-3 border border-gray-200 rounded hover:bg-gray-50">
                <div className="font-medium text-blue-600">Position Descriptions</div>
                <div className="text-sm text-gray-600">Duties and responsibilities of each office</div>
              </a>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h2 className="text-xl font-semibold mb-4">Get Started</h2>
            <div className="space-y-4">
              <p className="text-gray-600 text-sm">
                Interested in running for ASGC office? Start by attending an information session 
                and reviewing the candidate requirements.
              </p>
              
              <div className="space-y-2">
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                  Attend Info Session
                </button>
                <button className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
                  Download Candidate Packet
                </button>
                <a href="/elections/results" className="block w-full bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 text-center">
                  View Past Results
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">Questions?</h3>
        <p className="text-blue-700 mb-4">
          Contact the ASGC Election Committee for questions about the election process, 
          candidate requirements, or voting procedures.
        </p>
        <div className="space-y-1 text-sm text-blue-700">
          <p>Email: elections@asgc.edu</p>
          <p>Phone: (619) 644-7320</p>
          <p>Office: Student Center, Room 110</p>
        </div>
      </div>
    </div>
  )
}
