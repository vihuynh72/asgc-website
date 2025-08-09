export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Welcome to ASGC
            </h1>
            <p className="mt-6 text-xl leading-8">
              Associated Student Government Council - Your voice in campus governance
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/get-involved"
                className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-blue-600 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get Involved
              </a>
              <a href="/governance/meetings" className="text-lg font-semibold leading-6 text-white hover:text-gray-200">
                View Meetings <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Quick Access
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="/governance" className="group bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-2m-2 0H7m5 0H5.5M14 8V5" />
                </svg>
                <h3 className="text-lg font-semibold text-gray-900">Governance</h3>
              </div>
              <p className="text-gray-600 text-sm group-hover:text-gray-800">
                Access meetings, agendas, minutes, and bylaws
              </p>
            </a>

            <a href="/elections" className="group bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                <h3 className="text-lg font-semibold text-gray-900">Elections</h3>
              </div>
              <p className="text-gray-600 text-sm group-hover:text-gray-800">
                Vote in elections and view candidate information
              </p>
            </a>

            <a href="/funding" className="group bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-yellow-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                <h3 className="text-lg font-semibold text-gray-900">Funding</h3>
              </div>
              <p className="text-gray-600 text-sm group-hover:text-gray-800">
                Apply for student organization funding
              </p>
            </a>

            <a href="/services/events" className="group bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <h3 className="text-lg font-semibold text-gray-900">Events</h3>
              </div>
              <p className="text-gray-600 text-sm group-hover:text-gray-800">
                Upcoming ASGC events and activities
              </p>
            </a>
          </div>
        </div>
      </div>

      {/* Main Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Your Student Government Platform
              </h2>
              <p className="text-lg text-gray-600">
                Transparent governance, student services, and opportunities to make your voice heard
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Governance Features */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  Transparent Governance
                </h3>
                <div className="space-y-4">
                  <a href="/governance/meetings" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <h4 className="font-semibold text-gray-900">Meetings</h4>
                    <p className="text-sm text-gray-600">View upcoming meetings and livestreams</p>
                  </a>
                  <a href="/governance/agendas" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <h4 className="font-semibold text-gray-900">Agendas</h4>
                    <p className="text-sm text-gray-600">Meeting agendas and discussion items</p>
                  </a>
                  <a href="/governance/minutes" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <h4 className="font-semibold text-gray-900">Minutes</h4>
                    <p className="text-sm text-gray-600">Official meeting records and decisions</p>
                  </a>
                  <a href="/governance/resolutions" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <h4 className="font-semibold text-gray-900">Resolutions</h4>
                    <p className="text-sm text-gray-600">Track resolutions and their impact</p>
                  </a>
                </div>
              </div>

              {/* Student Services */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Student Services
                </h3>
                <div className="space-y-4">
                  <a href="/services/events" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <h4 className="font-semibold text-gray-900">Events</h4>
                    <p className="text-sm text-gray-600">ASGC events and activities</p>
                  </a>
                  <a href="/services/jobs" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <h4 className="font-semibold text-gray-900">Jobs</h4>
                    <p className="text-sm text-gray-600">Student government positions</p>
                  </a>
                  <a href="/news" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <h4 className="font-semibold text-gray-900">News</h4>
                    <p className="text-sm text-gray-600">Latest ASGC news and updates</p>
                  </a>
                  <a href="/get-involved" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <h4 className="font-semibold text-gray-900">Get Involved</h4>
                    <p className="text-sm text-gray-600">Ways to participate in student government</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Recent Activity
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md border p-6">
              <div className="flex items-center mb-4">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span className="text-sm text-gray-500">August 15, 2025</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Mental Health Resolution Passed</h3>
              <p className="text-sm text-gray-600">Resolution R2025-05 approved to expand campus mental health resources.</p>
              <a href="/governance/resolutions" className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-2 inline-block">
                View Details →
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-md border p-6">
              <div className="flex items-center mb-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span className="text-sm text-gray-500">August 25, 2025</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Fall Welcome Back Mixer</h3>
              <p className="text-sm text-gray-600">Join us for our annual welcome back event in the Student Union.</p>
              <a href="/services/events" className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-2 inline-block">
                RSVP Now →
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-md border p-6">
              <div className="flex items-center mb-4">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                <span className="text-sm text-gray-500">September 15, 2025</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Funding Applications Due</h3>
              <p className="text-sm text-gray-600">Fall semester funding applications deadline approaching.</p>
              <a href="/funding" className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-2 inline-block">
                Apply Now →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-blue-600">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Have Questions or Concerns?
            </h2>
            <p className="text-xl mb-8">
              We're here to help. Contact ASGC for assistance with any student government matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="/governance/bylaws"
                className="border border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
              >
                View Bylaws
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
