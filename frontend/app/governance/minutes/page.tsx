import { formatDateUTC } from '../../../lib/date'
import { UtilityBar } from '../../../components/governance/UtilityBar'

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

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'approved':
        return 'badge-success'
      case 'draft':
        return 'badge-warning'
      default:
        return 'badge-info'
    }
  }

  return (
    <div className="container section-spacing">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold mb-4">Meeting Minutes</h1>
          <p className="text-lg text-[var(--asgc-muted)]">
            Access official records of ASGC meetings and decisions.
          </p>
        </div>

        <UtilityBar downloadHref="/governance/minutes" />

        {/* Filter and Search */}
        <div className="asgc-card mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search meeting minutes..."
                className="form-input"
              />
            </div>
            <select className="form-input md:w-56">
              <option value="">All Councils</option>
              <option value="general-assembly">General Assembly</option>
              <option value="student-senate">Student Senate</option>
              <option value="budget-committee">Budget Committee</option>
              <option value="judiciary">Judiciary Committee</option>
            </select>
            <input
              type="date"
              className="form-input md:w-56"
            />
          </div>
        </div>

        {/* Approved Minutes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Official Meeting Minutes</h2>
          <div className="space-y-6">
            {approvedMinutes.map((minutes) => (
              <div key={minutes.id} className="asgc-card overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-semibold">
                          {minutes.title}
                        </h3>
                        <span className={`badge ${getStatusClass(minutes.status)} text-xs`}>
                          {minutes.status.charAt(0).toUpperCase() + minutes.status.slice(1)}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--asgc-muted)] mb-3">
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {formatDateUTC(minutes.meetingDate, { year: 'numeric', month: 'long', day: 'numeric' })}
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
                          <span className="text-xs text-[var(--asgc-muted)]">
                            Approved {formatDateUTC(minutes.approvedAt)}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button 
                        className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled
                      >
                        Download PDF
                      </button>
                      <button className="btn-ghost">
                        View Full Minutes
                      </button>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Meeting Summary</h4>
                    <p className="text-[var(--asgc-muted)]">{minutes.summary}</p>
                  </div>

                  <div className="asgc-card-compact">
                    <h4 className="font-medium mb-3">Key Decisions & Actions</h4>
                    <ul className="space-y-2">
                      {minutes.keyDecisions.map((decision, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-4 h-4 text-[var(--asgc-accent)] mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{decision}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {minutes.documentsUrl && (
                    <div className="mt-4 asgc-card-compact flex items-center justify-between">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-[var(--asgc-muted)] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-sm">Official Meeting Minutes PDF</span>
                      </div>
                      <button 
                        className="btn-ghost text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
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
            <div className="asgc-card">
              <h2 className="text-xl font-semibold mb-4">Draft Minutes</h2>
              <p className="text-[var(--asgc-muted)] mb-4">
                The following minutes are awaiting approval and may be subject to changes.
              </p>
              <div className="space-y-4">
                {draftMinutes.map((minutes) => (
                  <div key={minutes.id} className="asgc-card-compact">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-semibold">{minutes.title}</h3>
                          <span className={`badge ${getStatusClass(minutes.status)} text-xs`}>
                            Draft
                          </span>
                        </div>
                        <div className="flex items-center space-x-3 text-sm text-[var(--asgc-muted)] mb-2">
                          <span>
                            {formatDateUTC(minutes.meetingDate, { year: 'numeric', month: 'long', day: 'numeric' })}
                          </span>
                          <span>•</span>
                          <span>{minutes.council}</span>
                          <span>•</span>
                          <span>{minutes.attendees}/{minutes.totalMembers} attended</span>
                        </div>
                        <p className="text-[var(--asgc-muted)] text-sm">{minutes.summary}</p>
                      </div>
                      <button 
                        className="btn-secondary px-3 py-1 text-sm disabled:cursor-not-allowed"
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
          <div className="asgc-card text-center">
            <h3 className="text-lg font-semibold mb-2">Meeting Archive</h3>
            <p className="text-[var(--asgc-muted)] mb-4">
              Browse historical meeting minutes from previous years.
            </p>
            <button 
              className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
              disabled
            >
              View Archive
            </button>
          </div>

          <div className="asgc-card text-center">
            <h3 className="text-lg font-semibold mb-2">Request Clarification</h3>
            <p className="text-[var(--asgc-muted)] mb-4">
              Have questions about a specific meeting or decision?
            </p>
            <a 
              href="/contact" 
              className="btn-primary inline-block"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
