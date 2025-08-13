// Modern, accessible desktop navigation with data-driven dropdown menus
'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { navigationConfig, type NavItem } from '../../lib/navigation';

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
  <nav className="flex items-center gap-2 lg:gap-3 xl:gap-4 whitespace-nowrap" role="navigation" aria-label="Main navigation">
      {navigationConfig.map((item) => (
        <div
          key={item.label}
          className="relative"
          onMouseEnter={() => item.children && handleMouseEnter(item.label)}
          onMouseLeave={handleMouseLeave}
        >
          <Link
            href={item.href}
            id={`nav-${item.label.toLowerCase().replace(/\s+/g,'-')}`}
            className="flex items-center gap-1 text-[var(--color-foreground)] hover:text-[var(--asgc-primary)] focus:outline-none focus:text-[var(--asgc-primary)] transition-colors duration-150 py-2 px-1 lg:px-2 rounded focus:ring-2 focus:ring-[var(--asgc-accent)] focus:ring-offset-2"
            aria-expanded={item.children ? activeDropdown === item.label : undefined}
            aria-haspopup={item.children ? 'true' : undefined}
          >
            <span className="font-medium text-sm lg:text-base">{item.label}</span>
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
            <div
              role="menu"
              aria-labelledby={`nav-${item.label.toLowerCase().replace(/\s+/g,'-')}`}
              className="absolute top-full left-1/2 transform -translate-x-1/2 z-50 mt-1 w-72 lg:w-80 xl:w-84 bg-[var(--color-card)] border border-[var(--color-border)] rounded-lg shadow-lg py-2 max-h-96 overflow-y-auto"
              style={{
                left: item.label === 'Services' ? '50%' : 
                      item.label === 'News & Events' ? '25%' : '50%'
              }}
            >
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
          className="block px-4 py-3 text-sm text-[var(--color-foreground)] hover:bg-[var(--asgc-neutral-50)] hover:text-[var(--asgc-primary)] transition-colors duration-150 focus:outline-none focus:bg-[var(--asgc-neutral-50)] focus:text-[var(--asgc-primary)]"
                >
                  <div className="font-medium leading-tight break-words">{child.label}</div>
                  {child.description && (
                    <div className="text-xs text-[var(--color-muted-foreground)] mt-1 leading-relaxed break-words">
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
