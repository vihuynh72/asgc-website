import Link from 'next/link';
import { QuickAction } from '../../lib/content/types';

interface HeroProps {
  quickActions: QuickAction[];
}

export function Hero({ quickActions }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-teal-50 to-blue-50 py-16 md:py-24">
      <div className="absolute inset-0 bg-white/70" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main headline */}
          <h1 className="asgc-h1 text-gray-900 mb-6">
            Your Voice.<br />
            <span style={{ color: 'var(--asgc-primary)' }}>Your Campus.</span><br />
            Your Future.
          </h1>
          
          {/* Subheading */}
          <p className="asgc-body max-w-3xl mx-auto text-gray-600 mb-8">
            The Associated Students of Grossmont College (ASGC) represents over 20,000 students, 
            advocating for your needs and creating opportunities that enhance your college experience.
          </p>

          {/* Call to action */}
          <div className="mb-12">
            <Link
              href="/get-involved"
              className="asgc-button-primary inline-flex items-center text-lg px-8 py-4"
              style={{ backgroundColor: 'var(--asgc-primary)' }}
            >
              Get Involved Today
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Quick actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {quickActions.map((action) => (
              <QuickActionCard key={action.href} action={action} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface QuickActionCardProps {
  action: QuickAction;
}

function QuickActionCard({ action }: QuickActionCardProps) {
  const getColorClass = (color: QuickAction['color']) => {
    switch (color) {
      case 'primary':
        return 'var(--asgc-primary)';
      case 'secondary':
        return 'var(--asgc-secondary)';
      case 'accent':
        return 'var(--asgc-accent)';
      default:
        return 'var(--asgc-primary)';
    }
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'users':
        return (
          <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      case 'document-text':
        return (
          <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      case 'currency-dollar':
        return (
          <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
          </svg>
        );
      default:
        return (
          <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
    }
  };

  return (
    <Link href={action.href} className="group">
      <div className="asgc-card p-6 h-full transition-all duration-200 group-hover:shadow-lg group-hover:-translate-y-1 group-focus-within:ring-2 group-focus-within:ring-blue-500 group-focus-within:ring-offset-2">
        <div className="flex flex-col items-center text-center">
          <div 
            className="mb-4 p-3 rounded-full text-white"
            style={{ backgroundColor: getColorClass(action.color) }}
          >
            {getIcon(action.icon)}
          </div>
          <h3 className="asgc-h5 text-gray-900 mb-2">
            {action.title}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {action.description}
          </p>
          <div className="mt-4 text-sm font-medium group-hover:underline" style={{ color: getColorClass(action.color) }}>
            Learn more →
          </div>
        </div>
      </div>
    </Link>
  );
}
