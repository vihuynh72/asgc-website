import { formatDateUTC } from '../../../lib/date'
import { UtilityBar } from '../../../components/governance/UtilityBar'

export default function ResolutionsPage() {
  // TODO: Replace with actual API call to fetch resolutions
  const mockResolutions = [
    {
      id: '1',
      number: 'R2025-05',
      title: 'Mental Health Resource Expansion Initiative',
      status: 'passed',
      passedDate: new Date('2025-08-15'),
      introducedDate: new Date('2025-08-01'),
      sponsor: 'Health & Wellness Committee',
      votes: { yes: 24, no: 3, abstain: 2 },
      summary: 'Resolution to expand mental health resources on campus including extended counseling hours, peer support programs, and mental health awareness campaigns.',
      impact: 'Allocated $15,000 for mental health initiatives and established ongoing partnership with counseling center.',
      category: 'Health & Wellness',
      url: '/documents/resolutions/R2025-05.pdf',
    },
    {
      id: '2',
      number: 'R2025-04',
      title: 'Campus Safety and Security Enhancement',
      status: 'passed',
      passedDate: new Date('2025-08-01'),
      introducedDate: new Date('2025-07-15'),
      sponsor: 'Safety Committee',
      votes: { yes: 26, no: 1, abstain: 1 },
      summary: 'Comprehensive resolution addressing campus safety concerns including improved lighting, emergency call stations, and enhanced security patrols.',
      impact: 'Led to installation of 15 new emergency call stations and extended security patrol hours.',
      category: 'Safety & Security',
      url: '/documents/resolutions/R2025-04.pdf',
    },
    {
      id: '3',
      number: 'R2025-03',
      title: 'Sustainable Campus Initiative',
      status: 'under review',
      passedDate: null,
      introducedDate: new Date('2025-08-20'),
      sponsor: 'Environmental Committee',
      votes: null,
      summary: 'Resolution to implement comprehensive sustainability measures including waste reduction, renewable energy adoption, and campus-wide recycling program improvements.',
      impact: null,
      category: 'Environment',
      url: '/documents/resolutions/R2025-03-draft.pdf',
    },
    {
      id: '4',
      number: 'R2025-02',
      title: 'Student Organization Funding Reform',
      status: 'failed',
      passedDate: null,
      introducedDate: new Date('2025-07-01'),
      sponsor: 'Budget Committee',
      votes: { yes: 12, no: 15, abstain: 1 },
      summary: 'Proposed changes to student organization funding allocation process and criteria.',
      impact: 'Resolution failed; current funding procedures remain in effect.',
      category: 'Finance',
      url: '/documents/resolutions/R2025-02.pdf',
    },
    {
      id: '5',
      number: 'R2025-01',
      title: 'Academic Calendar Adjustment Request',
      status: 'passed',
      passedDate: new Date('2025-06-15'),
      introducedDate: new Date('2025-06-01'),
      sponsor: 'Academic Affairs Committee',
      votes: { yes: 21, no: 4, abstain: 3 },
      summary: 'Request to administration for adjustments to academic calendar to better align with student needs and federal holidays.',
      impact: 'Administration adopted 3 of 5 proposed calendar changes for next academic year.',
      category: 'Academic Affairs',
      url: '/documents/resolutions/R2025-01.pdf',
    },
  ]

  const passedResolutions = mockResolutions.filter(res => res.status === 'passed')
  const underReviewResolutions = mockResolutions.filter(res => res.status === 'under review')
  const failedResolutions = mockResolutions.filter(res => res.status === 'failed')

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'passed': return 'bg-green-100 text-green-800'
      case 'under review': return 'bg-yellow-100 text-yellow-800'
      case 'failed': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Health & Wellness': return 'bg-blue-100 text-blue-800'
      case 'Safety & Security': return 'bg-red-100 text-red-800'
      case 'Environment': return 'bg-green-100 text-green-800'
      case 'Finance': return 'bg-yellow-100 text-yellow-800'
      case 'Academic Affairs': return 'bg-purple-100 text-purple-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="container section-spacing">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold mb-4 text-[var(--color-foreground)]">Resolutions</h1>
          <p className="text-lg text-[var(--color-muted)]">
            Track ASGC resolutions and their impact on campus policy and student life.
          </p>
        </div>
        <UtilityBar downloadHref="/governance/resolutions" />

        {/* Filter and Search */}
  <div className="asgc-card p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search resolutions..."
    className="form-input"
              />
            </div>
      <select className="form-input py-2">
              <option value="">All Categories</option>
              <option value="health">Health & Wellness</option>
              <option value="safety">Safety & Security</option>
              <option value="environment">Environment</option>
              <option value="finance">Finance</option>
              <option value="academic">Academic Affairs</option>
            </select>
      <select className="form-input py-2">
              <option value="">All Status</option>
              <option value="passed">Passed</option>
              <option value="under-review">Under Review</option>
              <option value="failed">Failed</option>
            </select>
          </div>
        </div>

        {/* Submit Resolution CTA */}
        <div className="asgc-card p-6 mb-8">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-[var(--color-foreground)] mb-2">Have an Idea for a Resolution?</h2>
            <p className="text-[var(--color-muted)] mb-4">
              Students can propose resolutions to address campus issues and improvements.
            </p>
            <button 
              className="btn-primary disabled:opacity-60"
              disabled
            >
              Submit Resolution
            </button>
            <p className="text-xs text-[var(--color-muted)] mt-2">
              Resolution submission will be available after authentication setup.
            </p>
          </div>
        </div>

        {/* Under Review Resolutions */}
        {underReviewResolutions.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[var(--color-foreground)]">Under Review</h2>
            <div className="space-y-4">
              {underReviewResolutions.map((resolution) => (
                <div key={resolution.id} className="asgc-card">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-[var(--color-foreground)]">
                          {resolution.number}: {resolution.title}
                        </h3>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(resolution.status)}`}>
                          Under Review
                        </span>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(resolution.category)}`}>
                          {resolution.category}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-[var(--color-muted)] mb-3">
                        <span>Introduced: {formatDateUTC(resolution.introducedDate)}</span>
                        <span>•</span>
                        <span>Sponsor: {resolution.sponsor}</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button className="btn-secondary" disabled>View Draft</button>
                    </div>
                  </div>

                  <p className="text-[var(--color-foreground)] mb-4">
                    {resolution.summary}
                  </p>

                  <div className="asgc-card bg-transparent">
                    <p className="text-[var(--color-muted)] text-sm">
                      This resolution is currently under review by the appropriate committee. 
                      Public input period ends on September 15, 2025.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Passed Resolutions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-[var(--color-foreground)]">Passed Resolutions</h2>
          <div className="space-y-6">
            {passedResolutions.map((resolution) => (
              <div key={resolution.id} className="asgc-card overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-semibold text-[var(--color-foreground)]">
                          {resolution.number}: {resolution.title}
                        </h3>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(resolution.status)}`}>
                          Passed
                        </span>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(resolution.category)}`}>
                          {resolution.category}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--color-muted)] mb-3">
                        <span>Passed: {resolution.passedDate ? formatDateUTC(resolution.passedDate) : ''}</span>
                        <span>•</span>
                        <span>Sponsor: {resolution.sponsor}</span>
                        {resolution.votes && (
                          <>
                            <span>•</span>
                            <span>
                              Vote: {resolution.votes.yes} Yes, {resolution.votes.no} No, {resolution.votes.abstain} Abstain
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button className="btn-primary disabled:opacity-60" disabled>Download PDF</button>
                      <button className="btn-secondary">View Details</button>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium text-[var(--color-foreground)] mb-2">Summary</h4>
                    <p className="text-[var(--color-muted)]">{resolution.summary}</p>
                  </div>

                  {resolution.impact && (
                    <div className="asgc-card bg-transparent p-4 mb-4">
                      <h4 className="font-medium text-[var(--color-foreground)] mb-2">Impact & Implementation</h4>
                      <p className="text-[var(--color-muted)]">{resolution.impact}</p>
                    </div>
                  )}

                  {resolution.votes && (
                    <div className="asgc-card bg-transparent p-4">
                      <h4 className="font-medium text-[var(--color-foreground)] mb-3">Voting Results</h4>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-[var(--color-foreground)]">{resolution.votes.yes}</div>
                          <div className="text-sm text-[var(--color-muted)]">Yes</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-red-600">{resolution.votes.no}</div>
                          <div className="text-sm text-gray-600">No</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-600">{resolution.votes.abstain}</div>
                          <div className="text-sm text-gray-600">Abstain</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Failed Resolutions */}
        {failedResolutions.length > 0 && (
          <section className="mb-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold">Failed Resolutions</h2>
              <p className="text-gray-600">Resolutions that did not pass but remain part of the public record.</p>
            </div>
            <div className="space-y-4">
              {failedResolutions.map((resolution) => (
                <div key={resolution.id} className="bg-gray-50 rounded-lg border p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {resolution.number}: {resolution.title}
                        </h3>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(resolution.status)}`}>
                          Failed
                        </span>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(resolution.category)}`}>
                          {resolution.category}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                        <span>Introduced: {formatDateUTC(resolution.introducedDate)}</span>
                        <span>•</span>
                        <span>Sponsor: {resolution.sponsor}</span>
                        {resolution.votes && (
                          <>
                            <span>•</span>
                            <span>
                              Vote: {resolution.votes.yes} Yes, {resolution.votes.no} No, {resolution.votes.abstain} Abstain
                            </span>
                          </>
                        )}
                      </div>
                      
                      <p className="text-gray-600 mb-2">{resolution.summary}</p>
                      
                      {resolution.impact && (
                        <p className="text-sm text-gray-500 italic">{resolution.impact}</p>
                      )}
                    </div>
                    
                    <div className="ml-4">
                      <button 
                        className="text-gray-500 hover:text-gray-700 px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100 disabled:cursor-not-allowed"
                        disabled
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Resolution Process Information */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">Resolution Process</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-blue-900 mb-2">How Resolutions Work</h4>
              <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
                <li>Student or committee introduces resolution</li>
                <li>Resolution reviewed by appropriate committee</li>
                <li>Public comment period (minimum 1 week)</li>
                <li>Committee recommendation to full Senate</li>
                <li>Senate debate and voting</li>
                <li>Implementation if passed</li>
              </ol>
            </div>
            <div>
              <h4 className="font-medium text-blue-900 mb-2">Get Involved</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Attend committee meetings</li>
                <li>• Submit public comments</li>
                <li>• Propose your own resolutions</li>
                <li>• Contact your representatives</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
