export default function AgendasPage() {
  // TODO: Replace with actual API call to fetch agendas
  const mockAgendas = [
    {
      id: '1',
      title: 'ASGC General Assembly Meeting',
      meetingDate: new Date('2025-08-30'),
      council: 'General Assembly',
      status: 'published',
      publishedAt: new Date('2025-08-23'),
      items: [
        'Call to Order',
        'Roll Call',
        'Approval of Previous Minutes',
        'President Report',
        'Budget Committee Report',
        'Old Business: Campus Safety Initiative',
        'New Business: Mental Health Resources Proposal',
        'Student Organization Funding Requests',
        'Committee Reports',
        'Public Comments',
        'Adjournment',
      ],
    },
    {
      id: '2',
      title: 'Student Senate Meeting',
      meetingDate: new Date('2025-09-06'),
      council: 'Student Senate',
      status: 'draft',
      publishedAt: null,
      items: [
        'Call to Order',
        'Approval of Agenda',
        'Vice President Report',
        'Committee Updates',
        'New Legislation: Student Dining Improvements',
        'Budget Allocation Discussion',
        'Open Forum',
        'Next Meeting Date',
        'Adjournment',
      ],
    },
    {
      id: '3',
      title: 'Budget Committee Meeting',
      meetingDate: new Date('2025-08-25'),
      council: 'Budget Committee',
      status: 'published',
      publishedAt: new Date('2025-08-18'),
      items: [
        'Call to Order',
        'Review of Current Budget Status',
        'Student Organization Funding Requests',
        '- Drama Club: $2,500 for Fall Production',
        '- Environmental Club: $1,200 for Earth Day Event',
        '- International Students Association: $800 for Cultural Night',
        'Emergency Fund Allocation Guidelines',
        'Q2 Budget Report Preparation',
        'Next Meeting Schedule',
        'Adjournment',
      ],
    },
  ]

  const publishedAgendas = mockAgendas.filter(agenda => agenda.status === 'published')
  const draftAgendas = mockAgendas.filter(agenda => agenda.status === 'draft')

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800'
      case 'draft': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Meeting Agendas</h1>
          <p className="text-lg text-gray-600">
            View upcoming meeting agendas and stay informed about ASGC discussions.
          </p>
        </div>

        {/* Filter and Search */}
        <div className="bg-white rounded-lg shadow-md border p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search agendas..."
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
            <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="">All Status</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>
          </div>
        </div>

        {/* Upcoming Meetings */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Upcoming Meetings</h2>
          <div className="space-y-6">
            {publishedAgendas.map((agenda) => (
              <div key={agenda.id} className="bg-white rounded-lg shadow-md border overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {agenda.title}
                        </h3>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(agenda.status)}`}>
                          {agenda.status.charAt(0).toUpperCase() + agenda.status.slice(1)}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {agenda.meetingDate.toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          {agenda.council}
                        </span>
                        {agenda.publishedAt && (
                          <span className="text-xs text-gray-500">
                            Published {agenda.publishedAt.toLocaleDateString()}
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
                        View Meeting
                      </button>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-3">Agenda Items</h4>
                    <ol className="space-y-2">
                      {agenda.items.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-800 text-xs font-medium rounded-full mr-3 mt-0.5 flex-shrink-0">
                            {index + 1}
                          </span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
                    <span>
                      Meeting begins at 7:00 PM in Student Government Chambers
                    </span>
                    <a 
                      href="#" 
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Join livestream →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Draft Agendas (for authenticated users) */}
        {draftAgendas.length > 0 && (
          <section className="mb-8">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-yellow-900 mb-4">Draft Agendas</h2>
              <p className="text-yellow-800 mb-4">
                The following agendas are in draft status and may be subject to change.
              </p>
              <div className="space-y-4">
                {draftAgendas.map((agenda) => (
                  <div key={agenda.id} className="bg-white rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900">{agenda.title}</h3>
                        <div className="flex items-center space-x-3 text-sm text-gray-600 mt-1">
                          <span>
                            {agenda.meetingDate.toLocaleDateString('en-US', {
                              weekday: 'long',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </span>
                          <span>•</span>
                          <span>{agenda.council}</span>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(agenda.status)}`}>
                            Draft
                          </span>
                        </div>
                      </div>
                      <button 
                        className="text-yellow-700 hover:text-yellow-900 px-3 py-1 border border-yellow-300 rounded-md hover:bg-yellow-100 disabled:cursor-not-allowed"
                        disabled
                      >
                        Preview
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Submit Agenda Item */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Submit an Agenda Item</h3>
          <p className="text-blue-700 mb-4">
            Students can request items to be added to upcoming meeting agendas.
          </p>
          <button 
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled
          >
            Submit Request
          </button>
          <p className="text-xs text-blue-600 mt-2">
            Agenda item submission will be available after authentication setup.
          </p>
        </div>
      </div>
    </div>
  )
}
