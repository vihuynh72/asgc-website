import Link from 'next/link';
import { Event } from '../../lib/content/types';

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  const getCategoryColor = (category: Event['category']) => {
    switch (category) {
      case 'social':
        return 'var(--asgc-accent)';
      case 'academic':
        return 'var(--asgc-primary)';
      case 'governance':
        return 'var(--asgc-secondary)';
      case 'service':
        return '#10B981'; // emerald-500
      default:
        return 'var(--asgc-primary)';
    }
  };

  const getCategoryLabel = (category: Event['category']) => {
    switch (category) {
      case 'social':
        return 'Social';
      case 'academic':
        return 'Academic';
      case 'governance':
        return 'Governance';
      case 'service':
        return 'Service';
      default:
        return 'Event';
    }
  };

  return (
    <article className="asgc-card overflow-hidden hover:shadow-lg transition-shadow duration-200">
      {event.imageUrl && (
        <div className="aspect-w-16 aspect-h-9 bg-gray-200">
          <img
            src={event.imageUrl}
            alt=""
            className="w-full h-32 object-cover"
            loading="lazy"
          />
        </div>
      )}
      
      <div className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <div className="mb-2">
              <span 
                className="inline-block px-2 py-1 text-xs font-semibold text-white rounded-md"
                style={{ backgroundColor: getCategoryColor(event.category) }}
              >
                {getCategoryLabel(event.category)}
              </span>
              {event.featured && (
                <span className="ml-2 inline-block px-2 py-1 text-xs font-semibold bg-yellow-400 text-yellow-900 rounded-md">
                  Featured
                </span>
              )}
            </div>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
              {event.title}
            </h3>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {event.description}
        </p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <time dateTime={`${event.date}T${event.time}`}>
              {new Date(event.date).toLocaleDateString('en-US', {
                weekday: 'short',
                month: 'short',
                day: 'numeric'
              })} at {event.time}
            </time>
          </div>
          
          <div className="flex items-center text-sm text-gray-500">
            <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="line-clamp-1">{event.location}</span>
          </div>
        </div>
        
        {event.registrationUrl && (
          <Link
            href={event.registrationUrl}
            className="inline-flex items-center text-sm font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
            style={{ color: getCategoryColor(event.category) }}
          >
            Register Now
            <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
        )}
      </div>
    </article>
  );
}
