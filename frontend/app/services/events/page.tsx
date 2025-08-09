export default function EventsPage() {
  // TODO: Replace with actual API call to fetch events
  const mockEvents = [
    {
      id: '1',
      title: 'Fall Welcome Back Mixer',
      date: new Date('2025-08-25'),
      time: '6:00 PM - 9:00 PM',
      location: 'Student Union Ballroom',
      category: 'Social',
      description: 'Join ASGC for our annual welcome back mixer! Meet fellow students, enjoy food and music, and learn about student government opportunities.',
      status: 'upcoming',
      rsvpRequired: true,
      capacity: 200,
      registered: 87,
    },
    {
      id: '2',
      title: 'Student Town Hall: Campus Safety',
      date: new Date('2025-08-30'),
      time: '7:00 PM - 8:30 PM',
      location: 'Main Auditorium',
      category: 'Town Hall',
      description: 'Open forum discussion about campus safety initiatives and student concerns. Administration and security officials will be present.',
      status: 'upcoming',
      rsvpRequired: false,
      capacity: null,
      registered: null,
    },
    {
      id: '3',
      title: 'Student Organization Fair',
      date: new Date('2025-09-05'),
      time: '11:00 AM - 3:00 PM',
      location: 'Campus Quad',
      category: 'Fair',
      description: 'Discover student organizations and clubs! Over 100 groups will be represented with information booths and activities.',
      status: 'upcoming',
      rsvpRequired: false,
      capacity: null,
      registered: null,
    },
    {
      id: '4',
      title: 'ASGC General Assembly Meeting',
      date: new Date('2025-08-15'),
      time: '7:00 PM - 9:00 PM',
      location: 'Student Government Chambers',
      category: 'Meeting',
      description: 'Monthly general assembly meeting. Open to all students. Agenda includes budget discussions and new policy proposals.',
      status: 'completed',
      rsvpRequired: false,
      capacity: null,
      registered: null,
    },
  ]

  const upcomingEvents = mockEvents.filter(event => event.status === 'upcoming')
  const pastEvents = mockEvents.filter(event => event.status === 'completed')

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Social': return 'bg-purple-100 text-purple-800'
      case 'Town Hall': return 'bg-blue-100 text-blue-800'
      case 'Meeting': return 'bg-green-100 text-green-800'
      case 'Fair': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">ASGC Events</h1>
          <p className="text-lg text-gray-600">
            Attend ASGC events to engage with student government and your campus community.
          </p>
        </div>

        {/* Event Submission CTA */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-blue-900 mb-2">Have an Event to Share?</h2>
            <p className="text-blue-700 mb-4">
              Student organizations can submit their events to be featured on our calendar.
            </p>
            <button 
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
              disabled
            >
              Submit Event
            </button>
            <p className="text-xs text-blue-600 mt-2">
              Event submission will be available after authentication setup.
            </p>
          </div>
        </div>

        {/* Upcoming Events */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Upcoming Events</h2>
            <div className="flex space-x-2">
              <select className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="">All Categories</option>
                <option value="social">Social</option>
                <option value="meeting">Meeting</option>
                <option value="town-hall">Town Hall</option>
                <option value="fair">Fair</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md border overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(event.category)}`}>
                      {event.category}
                    </span>
                    {event.rsvpRequired && (
                      <span className="text-xs text-orange-600 font-medium">RSVP Required</span>
                    )}
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {event.title}
                  </h3>

                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>
                        {event.date.toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                    
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{event.time}</span>
                    </div>

                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">
                    {event.description}
                  </p>

                  {event.capacity && event.registered !== null && (
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Registration</span>
                        <span>{event.registered}/{event.capacity}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                        />
                      </div>
                    </div>
                  )}

                  <div className="flex space-x-2">
                    <button 
                      className="flex-1 bg-blue-600 text-white text-sm py-2 px-3 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                      disabled
                    >
                      {event.rsvpRequired ? 'RSVP' : 'Add to Calendar'}
                    </button>
                    <button className="text-blue-600 hover:text-blue-800 text-sm py-2 px-3 border border-blue-600 rounded-md hover:bg-blue-50">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Past Events */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Past Events</h2>
          <div className="space-y-4">
            {pastEvents.map((event) => (
              <div key={event.id} className="bg-gray-50 rounded-lg border p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {event.title}
                      </h3>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(event.category)}`}>
                        {event.category}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                      <span>
                        {event.date.toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                      <span>{event.time}</span>
                      <span>{event.location}</span>
                    </div>
                    
                    <p className="text-gray-600">
                      {event.description}
                    </p>
                  </div>
                  
                  <div className="flex space-x-2 ml-4">
                    <button 
                      className="text-blue-600 hover:text-blue-800 text-sm py-2 px-3 border border-blue-600 rounded-md hover:bg-blue-50 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:border-gray-400 disabled:text-gray-500"
                      disabled
                    >
                      View Photos
                    </button>
                    <button 
                      className="text-blue-600 hover:text-blue-800 text-sm py-2 px-3 border border-blue-600 rounded-md hover:bg-blue-50 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:border-gray-400 disabled:text-gray-500"
                      disabled
                    >
                      Summary
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Event Calendar CTA */}
        <div className="bg-gray-50 border rounded-lg p-6 mt-8 text-center">
          <h3 className="text-lg font-semibold mb-2">View Full Calendar</h3>
          <p className="text-gray-600 mb-4">
            See all ASGC events in our interactive calendar view.
          </p>
          <button 
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled
          >
            Open Calendar
          </button>
        </div>
      </div>
    </div>
  )
}
