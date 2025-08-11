import Link from 'next/link';
import { Meeting } from '../../lib/content/types';
import { formatDateUTC } from '../../lib/date';

interface MeetingListProps {
  meetings: Meeting[];
  showFilters?: boolean;
}

export function MeetingList({ meetings, showFilters = true }: MeetingListProps) {
  // TODO: Implement filtering functionality
  
  return (
    <div className="space-y-6">
      {showFilters && <FilterBar />}
      
      <div className="space-y-4">
        {meetings.map((meeting) => (
          <MeetingRow key={meeting.id} meeting={meeting} />
        ))}
      </div>
      
      {meetings.length === 0 && (
        <div className="text-center py-12">
          <div className="mx-auto h-12 w-12 text-[var(--asgc-muted)] mb-4">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-[var(--asgc-neutral-900)] mb-2">No meetings found</h3>
          <p className="text-[var(--asgc-muted)]">Try adjusting your filters or check back later.</p>
        </div>
      )}
    </div>
  );
}

interface MeetingRowProps {
  meeting: Meeting;
}

function MeetingRow({ meeting }: MeetingRowProps) {
  const getStatusColor = (status: Meeting['status']) => {
    switch (status) {
      case 'upcoming':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeLabel = (type: Meeting['type']) => {
    switch (type) {
      case 'council':
        return 'Council';
      case 'committee':
        return 'Committee';
      case 'board':
        return 'Board';
      default:
        return 'Meeting';
    }
  };

  return (
    <div className="asgc-card p-6 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-lg font-semibold text-[var(--asgc-neutral-900)]">
              {meeting.title}
            </h3>
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(meeting.status)}`}>
              {meeting.status}
            </span>
            <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">
              {getTypeLabel(meeting.type)}
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-[var(--asgc-muted)]">
            <div className="flex items-center">
              <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
                <time dateTime={`${meeting.date}T${meeting.time}`}>
                  {formatDateUTC(meeting.date, {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
            </div>
            
            <div className="flex items-center">
              <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{meeting.time}</span>
            </div>
            
            <div className="flex items-center">
              <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{meeting.location}</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2 ml-4">
          {meeting.agendaUrl && (
            <Link
              href={meeting.agendaUrl}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-[var(--asgc-accent)] hover:text-[color:var(--asgc-accent)]/80 hover:bg-[var(--asgc-neutral-50)] rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--asgc-accent)] focus:ring-offset-2"
            >
              <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Agenda
            </Link>
          )}
          
          {meeting.minutesUrl && (
            <Link
              href={meeting.minutesUrl}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-[var(--asgc-primary)] hover:bg-[var(--asgc-neutral-50)] rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--asgc-primary)] focus:ring-offset-2"
            >
              <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Minutes
            </Link>
          )}
          
          {meeting.videoUrl && (
            <Link
              href={meeting.videoUrl}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-[var(--asgc-secondary)] hover:bg-[var(--asgc-neutral-50)] rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--asgc-secondary)] focus:ring-offset-2"
            >
              <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H15M9 10v4a2 2 0 002 2h2a2 2 0 002-2v-4M9 10V9a2 2 0 012-2h2a2 2 0 012 2v1" />
              </svg>
              Video
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

function FilterBar() {
  // TODO: Implement filter state and handlers
  
  return (
    <div className="asgc-card p-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label htmlFor="search" className="sr-only">Search meetings</label>
          <input
            type="search"
            id="search"
            placeholder="Search meetings..."
            className="form-input py-2"
          />
        </div>
        
        <div className="flex gap-3">
          <select className="form-input py-2 text-sm">
            <option value="">All Types</option>
            <option value="council">Council</option>
            <option value="committee">Committee</option>
            <option value="board">Board</option>
          </select>
          
          <select className="form-input py-2 text-sm">
            <option value="">All Status</option>
            <option value="upcoming">Upcoming</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
          
          <select className="form-input py-2 text-sm">
            <option value="">All Semesters</option>
            <option value="fall-2025">Fall 2025</option>
            <option value="spring-2025">Spring 2025</option>
            <option value="fall-2024">Fall 2024</option>
          </select>
        </div>
      </div>
    </div>
  );
}
