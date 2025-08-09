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

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Constitution': return 'bg-blue-100 text-blue-800'
      case 'Bylaws': return 'bg-green-100 text-green-800'
      case 'Policy': return 'bg-purple-100 text-purple-800'
      case 'Guidelines': return 'bg-orange-100 text-orange-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Bylaws & Constitution</h1>
          <p className="text-lg text-gray-600">
            Access the foundational documents that govern ASGC operations and student rights.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-md border p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search documents..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
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
              <div key={document.id} className="bg-white rounded-lg shadow-md border overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {document.title}
                        </h3>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(document.type)}`}>
                          {document.type}
                        </span>
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                          v{document.version}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          Last updated: {document.lastUpdated.toLocaleDateString()}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Effective: {document.effectiveDate.toLocaleDateString()}
                        </span>
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
                        View Online
                      </button>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">
                    {document.description}
                  </p>

                  {document.sections.length > 0 && (
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-3">Contents</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {document.sections.map((section, index) => (
                          <div key={index} className="flex items-center">
                            <svg className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6" />
                            </svg>
                            <span className="text-sm text-gray-700">{section}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span>Document ID: {document.id}</span>
                    </div>
                    <div className="flex space-x-2">
                      <button 
                        className="text-gray-500 hover:text-gray-700 text-sm px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-50 disabled:cursor-not-allowed"
                        disabled
                      >
                        Print
                      </button>
                      <button 
                        className="text-gray-500 hover:text-gray-700 text-sm px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-50 disabled:cursor-not-allowed"
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
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">Amendment Process</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-blue-900 mb-2">Constitutional Amendments</h3>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Require 2/3 majority vote in Student Senate</li>
                  <li>• Must be published for 2-week comment period</li>
                  <li>• Require student body referendum</li>
                  <li>• Need 51% approval from voting students</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-blue-900 mb-2">Bylaw Changes</h3>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Require simple majority in Student Senate</li>
                  <li>• 1-week public notice required</li>
                  <li>• Take effect immediately upon passage</li>
                  <li>• Can be vetoed by Student Body President</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 text-center">
              <button 
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                disabled
              >
                Propose Amendment
              </button>
              <p className="text-xs text-blue-600 mt-2">
                Amendment proposals will be available after authentication setup.
              </p>
            </div>
          </div>
        </section>

        {/* Archived Documents */}
        {archivedDocuments.length > 0 && (
          <section className="mb-8">
            <div className="bg-gray-50 border rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Archived Documents</h2>
              <p className="text-gray-600 mb-4">
                Previous versions of ASGC governing documents for historical reference.
              </p>
              <div className="space-y-3">
                {archivedDocuments.map((document) => (
                  <div key={document.id} className="flex items-center justify-between p-3 bg-white border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(document.type)}`}>
                        {document.type}
                      </span>
                      <div>
                        <h3 className="font-medium text-gray-900">{document.title}</h3>
                        <p className="text-sm text-gray-500">
                          v{document.version} • Effective {document.effectiveDate.toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <button 
                      className="text-gray-500 hover:text-gray-700 text-sm px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-50 disabled:cursor-not-allowed"
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
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold text-green-900 mb-2">Need Help Understanding?</h3>
            <p className="text-green-700 mb-4">
              Our staff can help explain any provisions in our governing documents.
            </p>
            <a 
              href="/contact" 
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 inline-block"
            >
              Ask a Question
            </a>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold text-purple-900 mb-2">Suggest Changes</h3>
            <p className="text-purple-700 mb-4">
              Have ideas for improving our governing documents? We welcome your input.
            </p>
            <button 
              className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
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
