import { Breadcrumbs } from '../../components/nav/Breadcrumbs';
import { MeetingList } from '../../components/governance/MeetingList';
import { ErrorBoundary } from '../../components/ErrorBoundary';
import { upcomingMeetings } from '../../lib/content/data';
import { UtilityBar } from '../../components/governance/UtilityBar';

export const metadata = {
  title: 'Governance',
  description: 'ASGC governance information including meetings, agendas, minutes, bylaws, and resolutions.',
};

export default function GovernancePage() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[var(--color-background)]">
        <div className="container py-8">
          <ErrorBoundary fallback={<div className="p-4 text-[var(--color-muted)]">Navigation temporarily unavailable</div>}>
            <Breadcrumbs />
          </ErrorBoundary>
          <div className="mt-4 mb-6">
            <UtilityBar />
          </div>
          
          <div className="mt-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-foreground)] mb-4">
                Governance
              </h1>
            <p className="text-base leading-relaxed text-[var(--color-muted)] max-w-3xl mx-auto">
              Stay informed about ASGC decisions and participate in the democratic process. 
              Access meeting information, official documents, and governance resources.
            </p>
          </div>

          {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <a 
              href="/governance/meetings"
        className="asgc-card p-6 hover:shadow-lg transition-shadow duration-200 text-center group"
            >
              <div className="mb-4">
                <div 
                  className="w-12 h-12 mx-auto rounded-lg flex items-center justify-center text-white"
                  style={{ backgroundColor: 'var(--asgc-primary)' }}
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-foreground)] mb-2 group-hover:text-[var(--asgc-accent)] transition-colors">
                Meetings
              </h3>
              <p className="text-sm text-[var(--color-muted)]">
                View upcoming and past meetings
              </p>
            </a>

            <a 
              href="/governance/agendas"
              className="asgc-card p-6 hover:shadow-lg transition-shadow duration-200 text-center group"
            >
              <div className="mb-4">
                <div 
                  className="w-12 h-12 mx-auto rounded-lg flex items-center justify-center text-white"
                  style={{ backgroundColor: 'var(--asgc-secondary)' }}
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
              </div>
                            <h3 className="text-lg font-semibold text-[var(--color-foreground)] mb-2 group-hover:text-[var(--asgc-accent)] transition-colors">
                Resolutions
              </h3>
              <p className="text-sm text-[var(--color-muted)]">
                Download meeting agendas
              </p>
            </a>

            <a 
              href="/governance/minutes"
              className="asgc-card p-6 hover:shadow-lg transition-shadow duration-200 text-center group"
            >
              <div className="mb-4">
                <div 
                  className="w-12 h-12 mx-auto rounded-lg flex items-center justify-center text-white"
                  style={{ backgroundColor: 'var(--asgc-accent)' }}
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-foreground)] mb-2 group-hover:text-[var(--asgc-accent)] transition-colors">
                Minutes
              </h3>
              <p className="text-sm text-[var(--color-muted)]">
                Read meeting minutes and decisions
              </p>
            </a>

            <a 
              href="/governance/bylaws"
              className="asgc-card p-6 hover:shadow-lg transition-shadow duration-200 text-center group"
            >
              <div className="mb-4">
                <div className="w-12 h-12 mx-auto rounded-lg bg-gray-600 flex items-center justify-center text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-foreground)] mb-2 group-hover:text-[var(--asgc-accent)] transition-colors">
                Bylaws
              </h3>
              <p className="text-sm text-[var(--color-muted)]">
                Access ASGC governing documents
              </p>
            </a>
          </div>

          {/* Recent Meetings */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-foreground)] mb-8">Recent Meetings</h2>
            <ErrorBoundary fallback={<div className="p-4 text-gray-500">Meeting list temporarily unavailable</div>}>
              <MeetingList meetings={upcomingMeetings} showFilters={false} />
            </ErrorBoundary>
          </div>
        </div>
      </div>
    </div>
    </ErrorBoundary>
  );
}
