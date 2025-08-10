'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

interface NavItem {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
}

const navigationItems: NavItem[] = [
  {
    label: 'Governance',
    href: '/governance',
    children: [
      {
        label: 'Meetings',
        href: '/governance/meetings',
        description: 'Board meetings and public sessions'
      },
      {
        label: 'Agendas',
        href: '/governance/agendas',
        description: 'Upcoming meeting agendas'
      },
      {
        label: 'Minutes',
        href: '/governance/minutes',
        description: 'Meeting minutes and records'
      },
      {
        label: 'Bylaws',
        href: '/governance/bylaws',
        description: 'Constitution and governing documents'
      },
      {
        label: 'Resolutions',
        href: '/governance/resolutions',
        description: 'Passed resolutions and policies'
      }
    ]
  },
  {
    label: 'Elections',
    href: '/elections',
    children: [
      {
        label: 'Current Election',
        href: '/elections',
        description: 'Timeline and candidate information'
      },
      {
        label: 'How to Vote',
        href: '/elections#voting',
        description: 'Voting process and eligibility'
      },
      {
        label: 'Run for Office',
        href: '/elections#candidates',
        description: 'Information for potential candidates'
      }
    ]
  },
  {
    label: 'Get Involved',
    href: '/get-involved',
    children: [
      {
        label: 'Committees',
        href: '/get-involved#committees',
        description: 'Join student committees'
      },
      {
        label: 'Volunteer',
        href: '/get-involved#volunteer',
        description: 'Campus volunteer opportunities'
      },
      {
        label: 'Leadership',
        href: '/get-involved#leadership',
        description: 'Leadership development programs'
      }
    ]
  },
  {
    label: 'Funding',
    href: '/funding',
    children: [
      {
        label: 'Request Funding',
        href: '/funding/request',
        description: 'Apply for student organization funding'
      },
      {
        label: 'Guidelines',
        href: '/funding#guidelines',
        description: 'Funding criteria and process'
      },
      {
        label: 'Budget',
        href: '/funding#budget',
        description: 'ASGC budget transparency'
      }
    ]
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      {
        label: 'Events',
        href: '/services/events',
        description: 'Campus events and activities'
      },
      {
        label: 'Jobs',
        href: '/services/jobs',
        description: 'Student employment opportunities'
      },
      {
        label: 'Resources',
        href: '/services#resources',
        description: 'Student support resources'
      }
    ]
  },
  {
    label: 'News',
    href: '/news'
  },
  {
    label: 'About',
    href: '/about'
  }
];

export function GlobalNav() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // Small delay to allow moving to dropdown
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <nav className="flex items-center space-x-8" role="navigation" aria-label="Main navigation">
      {navigationItems.map((item) => (
        <div
          key={item.label}
          className="relative"
          onMouseEnter={() => item.children && handleMouseEnter(item.label)}
          onMouseLeave={handleMouseLeave}
        >
          <Link
            href={item.href}
            className="flex items-center space-x-1 text-[var(--color-foreground)] hover:text-[var(--asgc-accent)] focus:outline-none focus:text-[var(--asgc-accent)] transition-colors duration-200 py-2 px-1 rounded focus:ring-2 focus:ring-[var(--asgc-accent)] focus:ring-offset-2"
          >
            <span className="font-medium">{item.label}</span>
            {item.children && (
              <svg 
                className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === item.label ? 'rotate-180' : ''
                }`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </Link>

          {/* Dropdown Menu */}
          {item.children && activeDropdown === item.label && (
            <div className="absolute top-full left-0 z-50 mt-1 w-64 bg-[var(--color-card)] border border-[var(--color-border)] rounded-lg shadow-lg py-2">
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block px-4 py-3 text-sm text-[var(--color-foreground)] hover:bg-[var(--asgc-neutral-100)] hover:text-[var(--asgc-accent)] transition-colors duration-200 focus:outline-none focus:bg-[var(--asgc-neutral-100)] focus:text-[var(--asgc-accent)]"
                >
                  <div className="font-medium">{child.label}</div>
                  {child.description && (
                    <div className="text-xs text-[var(--color-muted-foreground)] mt-1">
                      {child.description}
                    </div>
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}
