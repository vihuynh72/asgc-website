export default function GetInvolvedPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Get Involved with ASGC</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Join ASGC and make a difference in student life at Grossmont College. 
          There are many ways to get involved, from joining committees to running for office.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <h2 className="text-2xl font-semibold mb-4">Why Join ASGC?</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start space-x-3">
              <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Represent student interests and advocate for positive change</span>
            </li>
            <li className="flex items-start space-x-3">
              <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Develop leadership skills and gain valuable experience</span>
            </li>
            <li className="flex items-start space-x-3">
              <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Network with fellow students and campus administrators</span>
            </li>
            <li className="flex items-start space-x-3">
              <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Build your resume with meaningful extracurricular involvement</span>
            </li>
            <li className="flex items-start space-x-3">
              <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Shape campus policies and student services</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border">
          <h2 className="text-2xl font-semibold mb-4">Available Roles</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-900">Elected Positions</h3>
              <p className="text-sm text-gray-600">President, Vice President, Senators</p>
              <p className="text-sm text-gray-500">Time commitment: 10-15 hours/week</p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-gray-900">Committee Members</h3>
              <p className="text-sm text-gray-600">Budget, Student Life, Academic Affairs</p>
              <p className="text-sm text-gray-500">Time commitment: 3-5 hours/week</p>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibent text-gray-900">Volunteers</h3>
              <p className="text-sm text-gray-600">Event helpers, outreach assistants</p>
              <p className="text-sm text-gray-500">Time commitment: Flexible</p>
            </div>
            
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-semibold text-gray-900">Appointed Roles</h3>
              <p className="text-sm text-gray-600">Committee chairs, liaisons</p>
              <p className="text-sm text-gray-500">Time commitment: 5-8 hours/week</p>
            </div>
          </div>
        </div>
      </div>

      {/* Interest Form */}
      <div className="bg-white p-6 rounded-lg shadow-md border mb-8">
        <h2 className="text-2xl font-semibold mb-4">Express Your Interest</h2>
        <p className="text-gray-600 mb-6">
          Let us know you're interested in getting involved with ASGC. We'll contact you with 
          information about current opportunities and upcoming events.
        </p>
        
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="student-id" className="block text-sm font-medium text-gray-700 mb-1">
              Student ID
            </label>
            <input
              type="text"
              id="student-id"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div className="md:col-span-2">
            <label htmlFor="interests" className="block text-sm font-medium text-gray-700 mb-1">
              Areas of Interest
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
              {[
                'Student Senate',
                'Budget Committee',
                'Student Life',
                'Academic Affairs',
                'Elections',
                'Events Planning',
                'Community Outreach',
                'Other'
              ].map((interest) => (
                <label key={interest} className="flex items-center space-x-2 text-sm">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span>{interest}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Tell us about yourself and why you want to get involved
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Share your interests, experience, and goals..."
            />
          </div>
          
          <div className="md:col-span-2">
            <button
              type="submit"
              disabled
              className="bg-gray-400 text-white px-6 py-2 rounded-md cursor-not-allowed"
            >
              Submit Interest (Coming Soon)
            </button>
            <p className="text-sm text-gray-500 mt-2">
              Form submission will be available after database setup is complete.
            </p>
          </div>
        </form>
      </div>

      {/* Committees Link */}
      <div className="text-center">
        <a 
          href="/get-involved/committees" 
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
        >
          View Available Committees
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  )
}
