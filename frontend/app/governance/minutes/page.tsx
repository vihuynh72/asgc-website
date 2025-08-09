export default function MinutesPage() {
  // TODO: Replace with actual API call to fetch meeting minutes
  const mockMinutes = [
    {
      id: '1',
      title: 'ASGC General Assembly Meeting Minutes',
      meetingDate: new Date('2025-08-15'),
      council: 'General Assembly',
      status: 'approved',
      approvedAt: new Date('2025-08-22'),
      attendees: 28,
      totalMembers: 32,
      summary: 'Discussion of campus safety initiatives, approval of budget allocations for student organizations, and new mental health resources proposal.',
      keyDecisions: [
        'Approved $5,000 emergency funding for Campus Safety Initiative',
        'Passed Resolution 2025-03: Mental Health Resource Expansion',
        'Approved funding for 3 student organizations totaling $8,200',
        'Established Ad-Hoc Committee on Dining Services',
      ],
      documentsUrl: '/documents/minutes/2025-08-15-general-assembly.pdf',
    },
    {
      id: '2',
      title: 'Student Senate Meeting Minutes',
      meetingDate: new Date('2025-08-08'),
      council: 'Student Senate',
      status: 'approved',
      approvedAt: new Date('2025-08-15'),
      attendees: 15,
      totalMembers: 18,
      summary: 'Review of new student orientation feedback, discussion of parking concerns, and committee assignments for fall semester.',
      keyDecisions: [
        'Approved amendment to Student Organization Constitution guidelines',
        'Allocated $2,000 for Student Orientation improvements',
        'Referred parking concerns to Facilities Committee',
        'Confirmed committee chair appointments',
      ],
      documentsUrl: '/documents/minutes/2025-08-08-student-senate.pdf',
    },
    {
      id: '3',
      title: 'Budget Committee Meeting Minutes',
      meetingDate: new Date('2025-08-01'),
      council: 'Budget Committee',
      status: 'draft',
      approvedAt: null,
      attendees: 7,
      totalMembers: 8,
      summary: 'Review of Q1 budget performance, evaluation of student organization funding requests, and preparation for fall budget cycle.',
      keyDecisions: [
        'Recommended approval for Drama Club funding request',
        'Requested additional documentation from Environmental Club',
        'Set deadline for fall semester funding applications',
        'Approved budget tracking software upgrade',
      ],
      documentsUrl: null,
    },
  ]

  const approvedMinutes = mockMinutes.filter(minutes => minutes.status === 'approved')
  const draftMinutes = mockMinutes.filter(minutes => minutes.status === 'draft')

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-800'
      case 'draft': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Meeting Minutes</h1>
          <p className="text-lg text-gray-600">
            Access official records of ASGC meetings and decisions.
          </p>
        </div>

        {/* Filter and Search */}
        <div className="bg-white rounded-lg shadow-md border p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search meeting minutes..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="">All Councils</option>
              <option value="general-assembly">General Assembly</option>
              <option value="student-senate">Student Senate</option>
              <option value="budget-committee">Budget Committee</option>
              <option value="judiciary">Judiciary Committee</option>
            </select>
            <input
              type="date"
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Approved Minutes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Official Meeting Minutes</h2>
          <div className="space-y-6">
            {approvedMinutes.map((minutes) => (
              <div key={minutes.id} className="bg-white rounded-lg shadow-md border overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {minutes.title}
                        </h3>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(minutes.status)}`}>
                          {minutes.status.charAt(0).toUpperCase() + minutes.status.slice(1)}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {minutes.meetingDate.toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          {minutes.council}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                          </svg>
                          {minutes.attendees}/{minutes.totalMembers} attended
                        </span>
                        {minutes.approvedAt && (
                          <span className="text-xs text-green-600">
                            Approved {minutes.approvedAt.toLocaleDateString()}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button 
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                        disabled
                      >
                        Download PDF
                      </button>
                      <button className="text-blue-600 hover:text-blue-800 px-4 py-2 border border-blue-600 rounded-md hover:bg-blue-50">
                        View Full Minutes
                      </button>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Meeting Summary</h4>
                    <p className="text-gray-600">{minutes.summary}</p>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-medium text-green-900 mb-3">Key Decisions & Actions</h4>
                    <ul className="space-y-2">
                      {minutes.keyDecisions.map((decision, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-4 h-4 text-green-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-green-800">{decision}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {minutes.documentsUrl && (
                    <div className="mt-4 flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-sm text-gray-700">Official Meeting Minutes PDF</span>
                      </div>
                      <button 
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium disabled:text-gray-400 disabled:cursor-not-allowed"
                        disabled
                      >
                        Download →
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Draft Minutes (for authenticated users) */}
        {draftMinutes.length > 0 && (
          <section className="mb-8">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-yellow-900 mb-4">Draft Minutes</h2>
              <p className="text-yellow-800 mb-4">
                The following minutes are awaiting approval and may be subject to changes.
              </p>
              <div className="space-y-4">
                {draftMinutes.map((minutes) => (
                  <div key={minutes.id} className="bg-white rounded-lg border p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-semibold text-gray-900">{minutes.title}</h3>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(minutes.status)}`}>
                            Draft
                          </span>
                        </div>
                        <div className="flex items-center space-x-3 text-sm text-gray-600 mb-2">
                          <span>
                            {minutes.meetingDate.toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </span>
                          <span>•</span>
                          <span>{minutes.council}</span>
                          <span>•</span>
                          <span>{minutes.attendees}/{minutes.totalMembers} attended</span>
                        </div>
                        <p className="text-gray-600 text-sm">{minutes.summary}</p>
                      </div>
                      <button 
                        className="text-yellow-700 hover:text-yellow-900 px-3 py-1 border border-yellow-300 rounded-md hover:bg-yellow-100 disabled:cursor-not-allowed"
                        disabled
                      >
                        Review
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Archive and Search Options */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 border rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Meeting Archive</h3>
            <p className="text-gray-600 mb-4">
              Browse historical meeting minutes from previous years.
            </p>
            <button 
              className="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
              disabled
            >
              View Archive
            </button>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Request Clarification</h3>
            <p className="text-blue-700 mb-4">
              Have questions about a specific meeting or decision?
            </p>
            <a 
              href="/contact" 
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 inline-block"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
