import Link from 'next/link';
import type { ReactNode } from 'react';

interface QuickAction {
  label: string;
  href: string;
  icon: ReactNode;
  description: string;
}

interface HeroProps {
  title?: string;
  subtitle?: string;
  quickActions?: QuickAction[];
}

const defaultQuickActions: QuickAction[] = [
  {
    label: 'Apply to Committee',
    href: '/get-involved',
    description: 'Join a student committee',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    label: 'View Minutes',
    href: '/governance/minutes',
    description: 'Read meeting minutes',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    label: 'Request Funding',
    href: '/funding/request',
    description: 'Apply for organization funding',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
      </svg>
    )
  }
];

export function Hero({ 
  title = "Your Voice. Your Campus. Your Future.",
  subtitle = "The Associated Students of Grossmont College represents and serves over 20,000 students. Join us in creating positive change and building a stronger campus community.",
  quickActions = defaultQuickActions
}: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-[var(--asgc-neutral-50)] to-[var(--asgc-neutral-100)] section-spacing">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main headline */}
          <h1 className="text-h1 text-[var(--color-foreground)] mb-6">
            {title.split('. ').map((part, index) => (
              <span key={index}>
                {index === 1 ? (
                  <span className="text-[var(--asgc-primary)]">{part}.</span>
                ) : (
                  part + (index < title.split('. ').length - 1 ? '. ' : '')
                )}
                {index === 0 && <br />}
                {index === 1 && <br />}
              </span>
            ))}
          </h1>
          
          {/* Subtitle */}
          <p className="text-body text-[var(--color-muted-foreground)] mb-12 max-w-2xl mx-auto">
            {subtitle}
          </p>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {quickActions.map((action, index) => (
              <Link
                key={index}
                href={action.href}
                className="group asgc-card p-6 text-left hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--asgc-accent)] focus:ring-offset-2"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[var(--asgc-primary)] bg-opacity-10 rounded-lg flex items-center justify-center text-[var(--asgc-primary)] group-hover:bg-[var(--asgc-primary)] group-hover:text-white transition-all duration-200">
                    {action.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--color-foreground)] group-hover:text-[var(--asgc-primary)] transition-colors duration-200">
                      {action.label}
                    </h3>
                    <p className="text-sm text-[var(--color-muted-foreground)] mt-1">
                      {action.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-involved"
              className="btn-primary"
            >
              Get Involved
            </Link>
            <Link
              href="/governance/meetings"
              className="btn-secondary"
            >
              Attend a Meeting
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
