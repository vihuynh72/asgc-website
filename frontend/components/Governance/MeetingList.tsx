'use client'

import { useState } from 'react'

// TODO: Replace with actual API call when backend is deployed
const mockMeetings = [
  {
    id: '1',
    council: { name: 'Executive Council' },
    date: new Date('2025-08-15T14:00:00Z'),
    location: 'Student Center Room 200',
    livestream: 'https://zoom.us/j/123456789',
    publicNote: 'Public comment period: 2:00-2:15 PM. Please register to speak at asgc.edu/speak',
  },
  {
    id: '2',
    council: { name: 'Student Senate' },
    date: new Date('2025-08-22T15:00:00Z'),
    location: 'Library Conference Room',
    livestream: null,
    publicNote: 'Open to all students. Public comment welcome.',
  },
  {
    id: '3',
    council: { name: 'Budget Committee' },
    date: new Date('2025-08-29T16:00:00Z'),
    location: 'ASGC Office',
    livestream: null,
    publicNote: 'Budget review meeting. Public welcome.',
  },
]

export default function MeetingList() {
  const [selectedCouncil, setSelectedCouncil] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredMeetings = mockMeetings.filter(meeting => {
    const matchesCouncil = selectedCouncil === 'all' || meeting.council.name.toLowerCase().includes(selectedCouncil.toLowerCase())
    const matchesSearch = meeting.council.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         meeting.location?.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCouncil && matchesSearch
  })

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="bg-white p-4 rounded-lg border space-y-4 md:space-y-0 md:flex md:items-center md:space-x-4">
        <div className="flex-1">
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
            Search meetings
          </label>
          <input
            type="text"
            id="search"
            placeholder="Search by council or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div>
          <label htmlFor="council" className="block text-sm font-medium text-gray-700 mb-1">
            Council
          </label>
          <select
            id="council"
            value={selectedCouncil}
            onChange={(e) => setSelectedCouncil(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All Councils</option>
            <option value="executive">Executive Council</option>
            <option value="senate">Student Senate</option>
            <option value="budget">Budget Committee</option>
          </select>
        </div>
      </div>

      {/* Meetings List */}
      <div className="space-y-4">
        {filteredMeetings.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No meetings found matching your criteria.
          </div>
        ) : (
          filteredMeetings.map((meeting) => (
            <div key={meeting.id} className="bg-white p-6 rounded-lg border hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {meeting.council.name}
                    </h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {meeting.date > new Date() ? 'Upcoming' : 'Past'}
                    </span>
                  </div>
                  
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>
                        {meeting.date.toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: 'numeric',
                          minute: '2-digit',
                        })}
                      </span>
                    </div>
                    
                    {meeting.location && (
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{meeting.location}</span>
                      </div>
                    )}
                    
                    {meeting.livestream && (
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        <a 
                          href={meeting.livestream} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 underline"
                        >
                          Join Livestream
                        </a>
                      </div>
                    )}
                  </div>
                  
                  {meeting.publicNote && (
                    <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded">
                      <p className="text-sm text-yellow-800">
                        <strong>Public Participation:</strong> {meeting.publicNote}
                      </p>
                    </div>
                  )}
                </div>
                
                <div className="mt-4 md:mt-0 md:ml-4 flex flex-col space-y-2">
                  <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed" disabled>
                    View Agenda
                  </button>
                  <button className="px-4 py-2 text-sm bg-green-600 text-white rounded hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed" disabled>
                    View Minutes
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-yellow-800">Database Setup Required</h3>
        <p className="text-yellow-700">
          Meeting data will be loaded from the database once AWS infrastructure is deployed.
          Currently showing sample data.
        </p>
      </div>
    </div>
  )
}
