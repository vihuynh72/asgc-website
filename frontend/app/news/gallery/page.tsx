import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Photo Gallery | ASGC',
  description: 'Browse photos from ASGC events, activities, and campus life at Grossmont College.',
};

interface GalleryEvent {
  id: string;
  title: string;
  date: string;
  description: string;
  photos: number;
  coverImage: string;
}

const galleryEvents: GalleryEvent[] = [
  {
    id: 'welcome-week-2025',
    title: 'Welcome Week 2025',
    date: '2025-08-19',
    description: 'New student orientation and campus activities to kick off the fall semester.',
    photos: 24,
    coverImage: '/api/placeholder/400/300'
  },
  {
    id: 'spring-festival-2025',
    title: 'Spring Festival',
    date: '2025-04-15',
    description: 'Annual spring celebration with food, music, and student organization booths.',
    photos: 36,
    coverImage: '/api/placeholder/400/300'
  },
  {
    id: 'election-night-2025',
    title: 'Student Election Night',
    date: '2025-03-20',
    description: 'Results announcement and celebration for the 2025 ASGC elections.',
    photos: 18,
    coverImage: '/api/placeholder/400/300'
  },
  {
    id: 'leadership-retreat-2025',
    title: 'Leadership Retreat',
    date: '2025-02-28',
    description: 'Annual board retreat for team building and strategic planning.',
    photos: 15,
    coverImage: '/api/placeholder/400/300'
  },
  {
    id: 'winter-social-2024',
    title: 'Winter Social',
    date: '2024-12-10',
    description: 'End-of-semester celebration with holiday activities and community building.',
    photos: 28,
    coverImage: '/api/placeholder/400/300'
  },
  {
    id: 'club-fair-2024',
    title: 'Fall Club Fair',
    date: '2024-09-18',
    description: 'Student organizations showcase with interactive booths and recruitment.',
    photos: 42,
    coverImage: '/api/placeholder/400/300'
  }
];

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 text-[var(--color-foreground)]">
          Photo Gallery
        </h1>
        <p className="text-lg text-[var(--color-muted-foreground)] max-w-3xl mx-auto">
          Explore moments from ASGC events, campus activities, and student life at Grossmont College.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <button className="px-4 py-2 bg-[var(--asgc-primary)] text-white rounded-md text-sm font-medium">
          All Events
        </button>
        <button className="px-4 py-2 bg-[var(--color-muted)] text-[var(--color-muted-foreground)] rounded-md text-sm font-medium hover:bg-[var(--asgc-primary)] hover:text-white transition-colors">
          2025
        </button>
        <button className="px-4 py-2 bg-[var(--color-muted)] text-[var(--color-muted-foreground)] rounded-md text-sm font-medium hover:bg-[var(--asgc-primary)] hover:text-white transition-colors">
          2024
        </button>
        <button className="px-4 py-2 bg-[var(--color-muted)] text-[var(--color-muted-foreground)] rounded-md text-sm font-medium hover:bg-[var(--asgc-primary)] hover:text-white transition-colors">
          Elections
        </button>
        <button className="px-4 py-2 bg-[var(--color-muted)] text-[var(--color-muted-foreground)] rounded-md text-sm font-medium hover:bg-[var(--asgc-primary)] hover:text-white transition-colors">
          Social Events
        </button>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {galleryEvents.map((event) => (
          <div 
            key={event.id}
            className="bg-[var(--color-card)] rounded-lg border border-[var(--color-border)] overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
          >
            {/* Cover Image */}
            <div className="relative h-48 bg-gradient-to-br from-[var(--asgc-primary)] to-[var(--asgc-secondary)] overflow-hidden">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium">{event.photos} Photos</p>
                </div>
              </div>
            </div>

            <div className="p-4">
              <div className="mb-2">
                <h3 className="text-lg font-semibold text-[var(--color-foreground)] mb-1">
                  {event.title}
                </h3>
                <p className="text-sm text-[var(--asgc-primary)] font-medium">
                  {new Date(event.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>

              <p className="text-sm text-[var(--color-muted-foreground)] mb-4 leading-relaxed">
                {event.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-xs text-[var(--color-muted-foreground)]">
                  {event.photos} photos
                </span>
                <button className="text-sm text-[var(--asgc-primary)] hover:opacity-75 transition-opacity font-medium">
                  View Gallery →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Highlights */}
      <div className="bg-[var(--color-card)] p-6 rounded-lg border border-[var(--color-border)] mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-[var(--color-foreground)]">Featured Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="h-32 bg-gradient-to-br from-[var(--asgc-primary)] to-[var(--asgc-accent)] rounded-lg mb-3 flex items-center justify-center">
              <div className="text-white">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832L14 10.202a1 1 0 000-1.404l-4.445-2.63z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm font-medium">Video Highlights</p>
              </div>
            </div>
            <h3 className="font-semibold text-[var(--color-foreground)]">Event Recaps</h3>
            <p className="text-sm text-[var(--color-muted-foreground)]">Watch highlights from major events</p>
          </div>

          <div className="text-center">
            <div className="h-32 bg-gradient-to-br from-[var(--asgc-secondary)] to-[var(--asgc-primary)] rounded-lg mb-3 flex items-center justify-center">
              <div className="text-white">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm font-medium">Behind the Scenes</p>
              </div>
            </div>
            <h3 className="font-semibold text-[var(--color-foreground)]">Planning Process</h3>
            <p className="text-sm text-[var(--color-muted-foreground)]">See how events come together</p>
          </div>

          <div className="text-center">
            <div className="h-32 bg-gradient-to-br from-[var(--asgc-accent)] to-[var(--asgc-secondary)] rounded-lg mb-3 flex items-center justify-center">
              <div className="text-white">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm font-medium">Student Spotlights</p>
              </div>
            </div>
            <h3 className="font-semibold text-[var(--color-foreground)]">Student Stories</h3>
            <p className="text-sm text-[var(--color-muted-foreground)]">Celebrating student achievements</p>
          </div>
        </div>
      </div>

      {/* Submission Guidelines */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-[var(--color-card)] p-6 rounded-lg border border-[var(--color-border)]">
          <h2 className="text-xl font-semibold mb-4 text-[var(--color-foreground)]">Submit Your Photos</h2>
          <div className="space-y-3 text-[var(--color-muted-foreground)]">
            <p>
              Have great photos from ASGC events? We'd love to feature them in our gallery!
            </p>
            <div className="space-y-2">
              <h3 className="font-semibold text-[var(--color-foreground)]">Submission Guidelines:</h3>
              <ul className="text-sm space-y-1">
                <li>• High-resolution images (minimum 1920x1080)</li>
                <li>• Original photos only (you own the rights)</li>
                <li>• Include event name and date</li>
                <li>• Get permission from people in photos</li>
                <li>• No inappropriate or offensive content</li>
              </ul>
            </div>
            <div className="pt-4">
              <a 
                href="/contact" 
                className="inline-block bg-[var(--asgc-primary)] text-white px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
              >
                Submit Photos
              </a>
            </div>
          </div>
        </div>

        <div className="bg-[var(--asgc-neutral-50)] border border-[var(--asgc-primary)] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-[var(--asgc-primary)]">Follow Us</h2>
          <p className="text-[var(--color-muted-foreground)] mb-4">
            Stay up to date with the latest photos and events by following our social media accounts.
          </p>
          <div className="space-y-3">
            <a 
              href="#" 
              className="flex items-center space-x-3 text-[var(--color-muted-foreground)] hover:text-[var(--asgc-primary)] transition-colors"
            >
              <div className="w-8 h-8 bg-[var(--asgc-primary)] rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">IG</span>
              </div>
              <span>@asgc_grossmont</span>
            </a>
            <a 
              href="#" 
              className="flex items-center space-x-3 text-[var(--color-muted-foreground)] hover:text-[var(--asgc-primary)] transition-colors"
            >
              <div className="w-8 h-8 bg-[var(--asgc-secondary)] rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">FB</span>
              </div>
              <span>ASGC Grossmont College</span>
            </a>
            <a 
              href="#" 
              className="flex items-center space-x-3 text-[var(--color-muted-foreground)] hover:text-[var(--asgc-primary)] transition-colors"
            >
              <div className="w-8 h-8 bg-[var(--asgc-accent)] rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">TW</span>
              </div>
              <span>@asgc_grossmont</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
