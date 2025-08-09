export default function FundingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Student Organization Funding</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          ASGC provides funding opportunities to support student organizations and events 
          that enhance campus life and student engagement.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h2 className="text-2xl font-semibold mb-4">Funding Programs</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900">Student Organization Funding</h3>
                <p className="text-gray-600 mt-2">
                  General funding for registered student organizations to support activities, 
                  events, and operational needs.
                </p>
                <div className="mt-3 space-y-1 text-sm text-gray-600">
                  <p><strong>Maximum Award:</strong> $5,000 per semester</p>
                  <p><strong>Application Deadline:</strong> 4th Friday of each month</p>
                  <p><strong>Review Period:</strong> 2-3 weeks</p>
                </div>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900">Event Funding</h3>
                <p className="text-gray-600 mt-2">
                  Specific funding for student-organized events that benefit the broader 
                  campus community.
                </p>
                <div className="mt-3 space-y-1 text-sm text-gray-600">
                  <p><strong>Maximum Award:</strong> $2,000 per event</p>
                  <p><strong>Application Deadline:</strong> 30 days before event</p>
                  <p><strong>Requirements:</strong> Open to all students</p>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900">Conference & Travel</h3>
                <p className="text-gray-600 mt-2">
                  Support for students attending academic conferences, competitions, 
                  or educational travel.
                </p>
                <div className="mt-3 space-y-1 text-sm text-gray-600">
                  <p><strong>Maximum Award:</strong> $1,500 per student</p>
                  <p><strong>Application Deadline:</strong> 45 days before travel</p>
                  <p><strong>Requirements:</strong> Academic relevance required</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h2 className="text-2xl font-semibold mb-4">How to Apply</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold">Review Requirements</h3>
                  <p className="text-gray-600 text-sm">
                    Ensure your organization is registered and in good standing. 
                    Review funding guidelines and eligibility criteria.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold">Complete Application</h3>
                  <p className="text-gray-600 text-sm">
                    Fill out the online application form with detailed budget 
                    information and supporting documentation.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold">Submit Documents</h3>
                  <p className="text-gray-600 text-sm">
                    Upload required attachments including budget breakdown, 
                    quotes, and organizational information.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold">Attend Presentation</h3>
                  <p className="text-gray-600 text-sm">
                    Present your request to the Budget Committee during their 
                    monthly meeting (optional but recommended).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <a 
                href="/funding/request" 
                className="block w-full bg-blue-600 text-white py-3 px-4 rounded-md text-center hover:bg-blue-700"
              >
                Apply for Funding
              </a>
              
              <a 
                href="/funding/policies" 
                className="block w-full bg-green-600 text-white py-3 px-4 rounded-md text-center hover:bg-green-700"
              >
                View Policies
              </a>
              
              <button 
                className="w-full bg-gray-400 text-white py-3 px-4 rounded-md cursor-not-allowed"
                disabled
              >
                Check Application Status
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h2 className="text-xl font-semibold mb-4">Important Dates</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Next Application Deadline:</span>
                <span className="font-medium">Aug 30, 2025</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Budget Committee Meeting:</span>
                <span className="font-medium">Sep 6, 2025</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Funding Decisions Released:</span>
                <span className="font-medium">Sep 13, 2025</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h2 className="text-xl font-semibold mb-4">Resources</h2>
            <div className="space-y-2">
              <a href="#" className="block text-blue-600 hover:text-blue-800 text-sm">
                📄 Funding Guidelines (PDF)
              </a>
              <a href="#" className="block text-blue-600 hover:text-blue-800 text-sm">
                📊 Budget Template (Excel)
              </a>
              <a href="#" className="block text-blue-600 hover:text-blue-800 text-sm">
                📋 Application Checklist (PDF)
              </a>
              <a href="#" className="block text-blue-600 hover:text-blue-800 text-sm">
                💰 Previous Award Examples
              </a>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h3 className="font-semibold text-yellow-800 mb-2">Need Help?</h3>
            <p className="text-yellow-700 text-sm mb-3">
              Contact the Budget Committee for assistance with your application.
            </p>
            <div className="text-sm text-yellow-700">
              <p>Email: budget@asgc.edu</p>
              <p>Office Hours: Mon-Fri 9AM-4PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
