// Simple mobile dropdown navigation - follows grossmont.edu pattern
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { navigationConfig, type NavItem } from '../../lib/navigation';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const toggleSection = (label: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(label)) {
      newExpanded.delete(label);
    } else {
      newExpanded.add(label);
    }
    setExpandedSections(newExpanded);
  };

  const handleLinkClick = () => {
    onClose();
    setExpandedSections(new Set());
  };

  if (!isOpen) return null;

  return (
    <div className="lg:hidden bg-[var(--color-background)] border-b border-[var(--color-border)] shadow-lg">
      <div className="container max-w-[var(--container-max-width)]">
        <nav className="py-2" role="navigation" aria-label="Mobile navigation">
          {/* Navigation Items */}
          <div className="divide-y divide-[var(--color-border)]">
            {navigationConfig.map((item) => (
              <MobileNavItem
                key={item.label}
                item={item}
                isExpanded={expandedSections.has(item.label)}
                onToggle={() => toggleSection(item.label)}
                onLinkClick={handleLinkClick}
              />
            ))}
          </div>

          {/* Quick Actions and Search */}
          <div className="pt-4 space-y-3">
            <div className="flex gap-2 px-4">
              <Link
                href="/get-involved/join"
                onClick={handleLinkClick}
                className="flex-1 bg-[var(--asgc-primary)] text-white py-2 px-4 rounded-md text-sm font-medium text-center hover:opacity-90 transition-opacity"
              >
                Join ASGC
              </Link>
              <Link
                href="/contact"
                onClick={handleLinkClick}
                className="flex-1 border border-[var(--asgc-primary)] text-[var(--asgc-primary)] py-2 px-4 rounded-md text-sm font-medium text-center hover:bg-[var(--asgc-primary)] hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>

            {/* Search Bar */}
            <div className="px-4">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search ASGC..."
                  className="w-full pl-10 pr-4 py-2 bg-[var(--color-card)] border border-[var(--color-border)] rounded-lg text-sm text-[var(--color-foreground)] placeholder:text-[var(--color-muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--asgc-primary)] focus:border-transparent"
                  aria-label="Search ASGC website"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <svg className="h-4 w-4 text-[var(--color-muted-foreground)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

interface MobileNavItemProps {
  item: NavItem;
  isExpanded: boolean;
  onToggle: () => void;
  onLinkClick: () => void;
}

function MobileNavItem({ item, isExpanded, onToggle, onLinkClick }: MobileNavItemProps) {
  if (!item.children) {
    return (
      <Link
        href={item.href}
        onClick={onLinkClick}
        className="block py-3 px-4 text-base font-medium text-[var(--color-foreground)] hover:bg-[var(--asgc-neutral-50)] hover:text-[var(--asgc-primary)] transition-colors"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div>
      {/* Main Section Header */}
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-3 px-4 text-base font-medium text-[var(--color-foreground)] hover:bg-[var(--asgc-neutral-50)] hover:text-[var(--asgc-primary)] transition-colors"
        aria-expanded={isExpanded}
        aria-controls={`mobile-section-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
      >
        <span>{item.label}</span>
        <svg
          className={`h-4 w-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Expanded Section */}
      {isExpanded && (
        <div 
          id={`mobile-section-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
          className="bg-[var(--asgc-neutral-50)]"
        >
          {/* Overview Link */}
          <Link
            href={item.href}
            onClick={onLinkClick}
            className="block py-2 px-8 text-sm font-medium text-[var(--asgc-primary)] hover:bg-[var(--color-background)] transition-colors"
          >
            • {item.label} Overview
          </Link>

          {/* Sub-items */}
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={onLinkClick}
              className="block py-2 px-8 text-sm text-[var(--color-muted-foreground)] hover:text-[var(--asgc-primary)] hover:bg-[var(--color-background)] transition-colors"
            >
              • {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
