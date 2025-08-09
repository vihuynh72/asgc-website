export default function JobsPage() {
  // TODO: Replace with actual API call to fetch job postings
  const mockJobs = [
    {
      id: '1',
      title: 'Student Senate Representative',
      department: 'Student Government',
      type: 'Elected Position',
      commitment: '8-12 hours/week',
      compensation: 'Stipend: $500/semester',
      deadline: new Date('2025-09-15'),
      status: 'open',
      description: 'Represent your fellow students in the Student Senate. Vote on resolutions, serve on committees, and advocate for student interests.',
      requirements: [
        'Enrolled full-time student',
        'Minimum 2.5 GPA',
        'Previous leadership experience preferred',
        'Strong communication skills',
      ],
      responsibilities: [
        'Attend weekly Senate meetings',
        'Serve on at least one committee',
        'Hold office hours for constituents',
        'Participate in campus events',
      ],
    },
    {
      id: '2',
      title: 'Communications Assistant',
      department: 'ASGC Communications',
      type: 'Work-Study',
      commitment: '10-15 hours/week',
      compensation: '$12/hour',
      deadline: new Date('2025-08-30'),
      status: 'open',
      description: 'Help manage ASGC social media, create content, and assist with communications strategy.',
      requirements: [
        'Current student',
        'Experience with social media platforms',
        'Basic graphic design skills',
        'Strong writing abilities',
      ],
      responsibilities: [
        'Create social media content',
        'Update website content',
        'Design promotional materials',
        'Assist with event marketing',
      ],
    },
    {
      id: '3',
      title: 'Budget Committee Member',
      department: 'ASGC Finance',
      type: 'Volunteer Position',
      commitment: '5-8 hours/week',
      compensation: 'Volunteer',
      deadline: new Date('2025-08-25'),
      status: 'open',
      description: 'Review funding requests from student organizations and help allocate student activity fees.',
      requirements: [
        'Enrolled student',
        'Interest in finance/budgeting',
        'Ability to review documents objectively',
        'Commitment to confidentiality',
      ],
      responsibilities: [
        'Review funding applications',
        'Attend committee meetings',
        'Interview organization representatives',
        'Make funding recommendations',
      ],
    },
    {
      id: '4',
      title: 'Event Coordinator Intern',
      department: 'Student Life',
      type: 'Internship',
      commitment: '12-16 hours/week',
      compensation: 'Academic Credit + $300 stipend',
      deadline: new Date('2025-08-20'),
      status: 'closed',
      description: 'Gain hands-on experience planning and executing campus events while earning academic credit.',
      requirements: [
        'Junior or Senior standing',
        'Event planning or communications major preferred',
        'Previous event experience helpful',
        'Flexible schedule including evenings/weekends',
      ],
      responsibilities: [
        'Assist with event planning',
        'Coordinate with vendors',
        'Manage event logistics',
        'Support day-of-event operations',
      ],
    },
  ]

  const openJobs = mockJobs.filter(job => job.status === 'open')
  const closedJobs = mockJobs.filter(job => job.status === 'closed')

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Elected Position': return 'bg-blue-100 text-blue-800'
      case 'Work-Study': return 'bg-green-100 text-green-800'
      case 'Volunteer Position': return 'bg-purple-100 text-purple-800'
      case 'Internship': return 'bg-orange-100 text-orange-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const isDeadlineSoon = (deadline: Date) => {
    const now = new Date()
    const daysUntilDeadline = Math.ceil((deadline.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
    return daysUntilDeadline <= 7 && daysUntilDeadline > 0
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Student Government Jobs & Opportunities</h1>
          <p className="text-lg text-gray-600">
            Get involved in student government and gain valuable leadership experience.
          </p>
        </div>

        {/* Job Alert Signup */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-blue-900 mb-2">Stay Informed</h2>
            <p className="text-blue-700 mb-4">
              Get notified when new student government positions become available.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-2 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button 
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                disabled
              >
                Subscribe
              </button>
            </div>
            <p className="text-xs text-blue-600 mt-2">
              Job alerts will be available after database setup.
            </p>
          </div>
        </div>

        {/* Filter/Search Bar */}
        <div className="bg-white rounded-lg shadow-md border p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search positions..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="">All Types</option>
              <option value="elected">Elected Position</option>
              <option value="work-study">Work-Study</option>
              <option value="volunteer">Volunteer Position</option>
              <option value="internship">Internship</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="">All Departments</option>
              <option value="student-government">Student Government</option>
              <option value="communications">Communications</option>
              <option value="finance">Finance</option>
              <option value="student-life">Student Life</option>
            </select>
          </div>
        </div>

        {/* Open Positions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Open Positions</h2>
          <div className="space-y-6">
            {openJobs.map((job) => (
              <div key={job.id} className="bg-white rounded-lg shadow-md border overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {job.title}
                        </h3>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(job.type)}`}>
                          {job.type}
                        </span>
                        {isDeadlineSoon(job.deadline) && (
                          <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
                            Deadline Soon
                          </span>
                        )}
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-2m-2 0H7m5 0H5.5M14 8V5" />
                          </svg>
                          {job.department}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {job.commitment}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                          </svg>
                          {job.compensation}
                        </span>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-sm text-gray-600 mb-2">Application Deadline</div>
                      <div className={`text-sm font-medium ${isDeadlineSoon(job.deadline) ? 'text-red-600' : 'text-gray-900'}`}>
                        {job.deadline.toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">
                    {job.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Requirements</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Responsibilities</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {job.responsibilities.map((resp, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button 
                      className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                      disabled
                    >
                      Apply Now
                    </button>
                    <button className="text-blue-600 hover:text-blue-800 px-6 py-2 border border-blue-600 rounded-md hover:bg-blue-50">
                      Learn More
                    </button>
                    <button className="text-gray-600 hover:text-gray-800 px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                      Share
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Closed Positions */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Recently Closed Positions</h2>
          <div className="space-y-4">
            {closedJobs.map((job) => (
              <div key={job.id} className="bg-gray-50 rounded-lg border p-6 opacity-75">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-700">
                        {job.title}
                      </h3>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(job.type)}`}>
                        {job.type}
                      </span>
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-200 text-gray-600">
                        Closed
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                      <span>{job.department}</span>
                      <span>{job.commitment}</span>
                      <span>Deadline: {job.deadline.toLocaleDateString()}</span>
                    </div>
                    
                    <p className="text-gray-600">
                      {job.description}
                    </p>
                  </div>
                  
                  <div className="ml-4">
                    <button 
                      className="text-gray-500 hover:text-gray-700 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 disabled:cursor-not-allowed"
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

        {/* Get Involved CTA */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8 text-center">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Don't See a Position That Fits?</h3>
          <p className="text-blue-700 mb-4">
            There are many ways to get involved with student government. Contact us to learn about volunteer opportunities.
          </p>
          <div className="flex justify-center space-x-3">
            <a 
              href="/contact" 
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
            >
              Contact Us
            </a>
            <a 
              href="/get-involved" 
              className="text-blue-600 hover:text-blue-800 px-6 py-2 border border-blue-600 rounded-md hover:bg-blue-50"
            >
              Other Ways to Get Involved
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
