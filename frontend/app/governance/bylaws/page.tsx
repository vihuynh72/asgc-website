import { formatDateUTC } from '../../../lib/date'
import { UtilityBar } from '../../../components/governance/UtilityBar'

export default function BylawsPage() {
  // TODO: Replace with actual API call to fetch bylaws and constitution
  const mockDocuments = [
    {
      id: '1',
      title: 'ASGC Constitution',
      type: 'Constitution',
      version: '2025.1',
      lastUpdated: new Date('2025-01-15'),
      effectiveDate: new Date('2025-02-01'),
      status: 'current',
      description: 'The foundational document establishing the structure, purpose, and fundamental principles of the Associated Student Government Council.',
      url: '/documents/asgc-constitution-2025.pdf',
      sections: [
        'Preamble',
        'Article I: Name and Purpose', 
        'Article II: Membership',
        'Article III: Executive Branch',
        'Article IV: Legislative Branch',
        'Article V: Judicial Branch',
        'Article VI: Elections',
        'Article VII: Amendments',
      ],
    },
    {
      id: '2',
      title: 'ASGC Bylaws',
      type: 'Bylaws',
      version: '2025.2',
      lastUpdated: new Date('2025-08-01'),
      effectiveDate: new Date('2025-08-15'),
      status: 'current',
      description: 'Detailed operational procedures and guidelines for ASGC governance, meetings, and administration.',
      url: '/documents/asgc-bylaws-2025.pdf',
      sections: [
        'Chapter 1: General Provisions',
        'Chapter 2: Meeting Procedures',
        'Chapter 3: Committee Structure',
        'Chapter 4: Financial Procedures',
        'Chapter 5: Student Organization Relations',
        'Chapter 6: Disciplinary Procedures',
        'Chapter 7: Amendment Procedures',
      ],
    },
    {
      id: '3',
      title: 'Student Organization Charter Guidelines',
      type: 'Guidelines',
      version: '2025.1',
      lastUpdated: new Date('2025-07-10'),
      effectiveDate: new Date('2025-08-01'),
      status: 'current',
      description: 'Requirements and procedures for student organizations to obtain and maintain official recognition.',
      url: '/documents/organization-charter-guidelines-2025.pdf',
      sections: [
        'Recognition Requirements',
        'Charter Application Process',
        'Annual Renewal Procedures',
        'Compliance Standards',
        'Appeals Process',
      ],
    },
    {
      id: '4',
      title: 'Funding Allocation Policies',
      type: 'Policy',
      version: '2025.1',
      lastUpdated: new Date('2025-06-15'),
      effectiveDate: new Date('2025-07-01'),
      status: 'current',
      description: 'Comprehensive policies governing the allocation of student activity fees and emergency funding.',
      url: '/documents/funding-allocation-policies-2025.pdf',
      sections: [
        'General Funding Principles',
        'Application Procedures',
        'Review Criteria',
        'Appeals Process',
        'Financial Accountability',
        'Audit Requirements',
      ],
    },
    {
      id: '5',
      title: 'ASGC Constitution (Previous Version)',
      type: 'Constitution',
      version: '2024.3',
      lastUpdated: new Date('2024-11-20'),
      effectiveDate: new Date('2024-12-01'),
      status: 'archived',
      description: 'Previous version of the ASGC Constitution, superseded by the 2025.1 version.',
      url: '/documents/asgc-constitution-2024.pdf',
      sections: [],
    },
  ]

  const currentDocuments = mockDocuments.filter(doc => doc.status === 'current')
  const archivedDocuments = mockDocuments.filter(doc => doc.status === 'archived')

  const getTypeClass = (type: string) => {
    switch (type) {
      case 'Constitution':
        return 'badge-info'
      case 'Bylaws':
        return 'badge-success'
      case 'Policy':
        return 'badge-warning'
      case 'Guidelines':
        return 'badge-info'
      default:
        return 'badge-info'
    }
  }

  return (
    <div className="container section-spacing">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold mb-4">Bylaws & Constitution</h1>
          <p className="text-lg text-[var(--asgc-muted)]">
            Access the foundational documents that govern ASGC operations and student rights.
          </p>
        </div>

        <UtilityBar downloadHref="/governance/bylaws" />

        {/* Search and Filter */}
        <div className="asgc-card mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search documents..."
                className="form-input"
              />
            </div>
            <select className="form-input md:w-64">
              <option value="">All Document Types</option>
              <option value="constitution">Constitution</option>
              <option value="bylaws">Bylaws</option>
              <option value="policy">Policies</option>
              <option value="guidelines">Guidelines</option>
            </select>
          </div>
        </div>

        {/* Current Documents */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Current Documents</h2>
          <div className="space-y-6">
            {currentDocuments.map((document) => (
              <div key={document.id} className="asgc-card overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-semibold">
                          {document.title}
                        </h3>
                        <span className={`badge ${getTypeClass(document.type)} text-xs`}>{document.type}</span>
                        <span className="badge badge-success text-xs">v{document.version}</span>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--asgc-muted)] mb-3">
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          Last updated: {formatDateUTC(document.lastUpdated)}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Effective: {formatDateUTC(document.effectiveDate)}
                        </span>
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
                        View Online
                      </button>
                    </div>
                  </div>

                  <p className="text-[var(--asgc-muted)] mb-4">
                    {document.description}
                  </p>

                  {document.sections.length > 0 && (
                    <div className="asgc-card-compact">
                      <h4 className="font-medium mb-3">Contents</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {document.sections.map((section, index) => (
                          <div key={index} className="flex items-center">
                            <svg className="w-4 h-4 text-[var(--asgc-accent)] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6" />
                            </svg>
                            <span className="text-sm">{section}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center text-sm text-[var(--asgc-muted)]">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span>Document ID: {document.id}</span>
                    </div>
                    <div className="flex space-x-2">
                      <button 
                        className="btn-ghost text-sm disabled:cursor-not-allowed"
                        disabled
                      >
                        Print
                      </button>
                      <button 
                        className="btn-ghost text-sm disabled:cursor-not-allowed"
                        disabled
                      >
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Amendment Process Information */}
        <section className="mb-8">
          <div className="asgc-card">
            <h2 className="text-xl font-semibold mb-4">Amendment Process</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-2">Constitutional Amendments</h3>
                <ul className="text-sm text-[var(--asgc-muted)] space-y-1">
                  <li>• Require 2/3 majority vote in Student Senate</li>
                  <li>• Must be published for 2-week comment period</li>
                  <li>• Require student body referendum</li>
                  <li>• Need 51% approval from voting students</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">Bylaw Changes</h3>
                <ul className="text-sm text-[var(--asgc-muted)] space-y-1">
                  <li>• Require simple majority in Student Senate</li>
                  <li>• 1-week public notice required</li>
                  <li>• Take effect immediately upon passage</li>
                  <li>• Can be vetoed by Student Body President</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 text-center">
              <button 
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                disabled
              >
                Propose Amendment
              </button>
              <p className="text-xs text-[var(--asgc-muted)] mt-2">
                Amendment proposals will be available after authentication setup.
              </p>
            </div>
          </div>
        </section>

        {/* Archived Documents */}
        {archivedDocuments.length > 0 && (
          <section className="mb-8">
            <div className="asgc-card">
              <h2 className="text-xl font-semibold mb-4">Archived Documents</h2>
              <p className="text-[var(--asgc-muted)] mb-4">
                Previous versions of ASGC governing documents for historical reference.
              </p>
              <div className="space-y-3">
                {archivedDocuments.map((document) => (
                  <div key={document.id} className="asgc-card-compact flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className={`badge ${getTypeClass(document.type)} text-xs`}>{document.type}</span>
                      <div>
                        <h3 className="font-medium">{document.title}</h3>
                        <p className="text-sm text-[var(--asgc-muted)]">
                          v{document.version} • Effective {formatDateUTC(document.effectiveDate)}
                        </p>
                      </div>
                    </div>
                    <button 
                      className="btn-ghost text-sm disabled:cursor-not-allowed"
                      disabled
                    >
                      View
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Help and Contact */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="asgc-card text-center">
            <h3 className="text-lg font-semibold mb-2">Need Help Understanding?</h3>
            <p className="text-[var(--asgc-muted)] mb-4">
              Our staff can help explain any provisions in our governing documents.
            </p>
            <a 
              href="/contact" 
              className="btn-primary inline-block"
            >
              Ask a Question
            </a>
          </div>

          <div className="asgc-card text-center">
            <h3 className="text-lg font-semibold mb-2">Suggest Changes</h3>
            <p className="text-[var(--asgc-muted)] mb-4">
              Have ideas for improving our governing documents? We welcome your input.
            </p>
            <button 
              className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
              disabled
            >
              Submit Suggestion
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
