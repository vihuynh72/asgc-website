'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigationItems: NavItem[] = [
  {
    label: 'Governance',
    href: '/governance',
    children: [
      { label: 'Meetings', href: '/governance/meetings' },
      { label: 'Agendas', href: '/governance/agendas' },
      { label: 'Minutes', href: '/governance/minutes' },
      { label: 'Bylaws', href: '/governance/bylaws' },
      { label: 'Resolutions', href: '/governance/resolutions' },
    ],
  },
  {
    label: 'Elections',
    href: '/elections',
    children: [
      { label: 'Timeline', href: '/elections' },
      { label: 'Resources', href: '/elections/resources' },
      { label: 'Results', href: '/elections/results' },
    ],
  },
  {
    label: 'Get Involved',
    href: '/get-involved',
    children: [
      { label: 'Committees', href: '/get-involved/committees' },
      { label: 'Join ASGC', href: '/get-involved' },
    ],
  },
  {
    label: 'Funding',
    href: '/funding',
    children: [
      { label: 'Policies', href: '/funding/policies' },
      { label: 'Request Funding', href: '/funding/request' },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Events', href: '/services/events' },
      { label: 'Jobs', href: '/services/jobs' },
    ],
  },
  { label: 'News', href: '/news' },
  { label: 'About', href: '/about' },
];

interface MegaMenuProps {
  item: NavItem;
  isOpen: boolean;
  onToggle: () => void;
}

function MegaMenu({ item, isOpen, onToggle }: MegaMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onToggle();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onToggle]);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={onToggle}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onToggle();
          }
        }}
        className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md inline-flex items-center"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {item.label}
        <svg
          className={`ml-1 h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <div className="py-2">
            <Link
              href={item.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
            >
              Overview
            </Link>
            <div className="border-t border-gray-100 my-1" />
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function GlobalNav() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const handleMenuToggle = (label: string) => {
    setOpenMenu(openMenu === label ? null : label);
  };

  return (
    <nav className="hidden md:flex items-center space-x-1" role="navigation" aria-label="Main navigation">
      {navigationItems.map((item) => (
        <MegaMenu
          key={item.label}
          item={item}
          isOpen={openMenu === item.label}
          onToggle={() => handleMenuToggle(item.label)}
        />
      ))}
    </nav>
  );
}
