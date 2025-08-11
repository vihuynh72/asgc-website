import { formatDateUTC } from '../../../lib/date'
import { UtilityBar } from '../../../components/governance/UtilityBar'

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
    <div className="min-h-screen bg-[var(--color-background)]">
      {/* Hero Section */}
      <div className="hero-section py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-[var(--color-foreground)]">
              Shape Your Campus Future
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-[var(--color-muted)]">
              Every decision starts here. View meeting agendas for upcoming meetings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#upcoming-meetings"
                className="btn-primary inline-flex"
              >
                📋 View Next Meeting
              </a>
              <button 
                className="btn-ghost"
                disabled
              >
                ✨ Submit Agenda Item
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <UtilityBar downloadHref="/governance/agendas" />
        <div className="max-w-4xl mx-auto">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 -mt-8">
            <div className="asgc-card p-6 text-center">
              <div className="text-3xl font-bold text-[var(--color-foreground)] mb-2">3</div>
              <div className="text-[var(--color-muted)]">Upcoming Meetings</div>
            </div>
            <div className="asgc-card p-6 text-center">
              <div className="text-3xl font-bold text-[var(--color-foreground)] mb-2">24</div>
              <div className="text-[var(--color-muted)]">Agenda Items This Month</div>
            </div>
            <div className="asgc-card p-6 text-center">
              <div className="text-3xl font-bold text-[var(--color-foreground)] mb-2">100%</div>
              <div className="text-[var(--color-muted)]">Open & Transparent</div>
            </div>
          </div>

          {/* Get Started Section */}
          <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-2xl p-8 mb-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">🚀 Get Started Now!</h2>
              <p className="text-xl mb-6 text-green-50">
                Your voice matters! Join the conversation and make a real impact on campus life.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                  <div className="text-2xl mb-2">👀</div>
                  <h3 className="font-semibold mb-2">Explore Agendas</h3>
                  <p className="text-sm text-green-50">See what's being discussed in upcoming meetings</p>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                  <div className="text-2xl mb-2">💡</div>
                  <h3 className="font-semibold mb-2">Submit Ideas</h3>
                  <p className="text-sm text-green-50">Propose agenda items for student issues you care about</p>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                  <div className="text-2xl mb-2">🎯</div>
                  <h3 className="font-semibold mb-2">Attend Meetings</h3>
                  <p className="text-sm text-green-50">Show up and be part of the decision-making process</p>
                </div>
              </div>
            </div>
          </div>

        {/* Filter and Search */}
  <div className="asgc-card p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search agendas..."
    className="form-input"
              />
            </div>
      <select className="form-input py-2">
              <option value="">All Councils</option>
              <option value="general-assembly">General Assembly</option>
              <option value="student-senate">Student Senate</option>
              <option value="budget-committee">Budget Committee</option>
              <option value="judiciary">Judiciary Committee</option>
            </select>
      <select className="form-input py-2">
              <option value="">All Status</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>
          </div>
        </div>

        {/* Upcoming Meetings */}
        <section id="upcoming-meetings" className="mb-12">
          {/* Next Meeting Alert */}
          <div className="asgc-card bg-[radial-gradient(400px_300px_at_0%_0%,rgba(14,165,233,0.08),transparent)] rounded-xl p-6 mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-[var(--color-card)] text-[var(--color-foreground)] rounded-full p-2 mr-4">
                  🔥
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-foreground)]">Next Meeting: This Friday!</h3>
                  <p className="text-[var(--color-muted)]">ASGC General Assembly - August 30th at 7:00 PM</p>
                </div>
              </div>
              <button className="btn-secondary">
                Set Reminder
              </button>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-6">📅 All Upcoming Meetings</h2>
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
                          {formatDateUTC(agenda.meetingDate, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          {agenda.council}
                        </span>
                        {agenda.publishedAt && (
                          <span className="text-xs text-gray-500">
                            Published {formatDateUTC(agenda.publishedAt)}
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
                            {formatDateUTC(agenda.meetingDate, { weekday: 'long', month: 'long', day: 'numeric' })}
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
    </div>
  )
}
