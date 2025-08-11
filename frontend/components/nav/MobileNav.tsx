// OVERHAUL PLAN: Mobile drawer with search and hierarchical nav; keyboard and aria-expanded states included.
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { navigationItems, NavItem } from './GlobalNav';
import { SearchBar } from './SearchBar';

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
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Mobile menu drawer */}
      <div className="fixed inset-y-0 right-0 max-w-sm w-full bg-[var(--color-background)] border-l border-[var(--color-border)] shadow-xl z-50 lg:hidden">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-[var(--color-border)]">
            <h2 className="text-lg font-semibold text-[var(--color-foreground)]">Navigation</h2>
            <button
              onClick={onClose}
              className="p-2 -mr-2 text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] focus-ring rounded-md"
              aria-label="Close menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Search */}
          <div className="p-4 border-b border-[var(--color-border)]">
            <SearchBar onSearch={() => handleLinkClick()} />
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-4 overflow-y-auto" role="navigation" aria-label="Mobile navigation">
            <div className="space-y-1">
              {navigationItems.map((item) => (
                <MobileNavItem
                  key={item.label}
                  item={item}
                  isExpanded={expandedSections.has(item.label)}
                  onToggle={() => toggleSection(item.label)}
                  onLinkClick={handleLinkClick}
                />
              ))}
            </div>
          </nav>

          {/* Footer CTA */}
          <div className="border-t border-[var(--color-border)] p-4">
            <Link
              href="/get-involved"
              onClick={handleLinkClick}
              className="btn-primary w-full justify-center"
            >
              Join ASGC
            </Link>
          </div>
        </div>
      </div>
    </>
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
        className="block py-3 px-3 text-base font-medium text-[var(--color-foreground)] hover:text-[var(--asgc-primary)] hover:bg-[var(--color-muted)] rounded-lg transition-colors focus-ring"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-3 px-3 text-base font-medium text-[var(--color-foreground)] hover:text-[var(--asgc-primary)] hover:bg-[var(--color-muted)] rounded-lg transition-colors focus-ring"
        aria-expanded={isExpanded}
      >
        {item.label}
        <svg
          className={`h-5 w-5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isExpanded && (
        <div className="ml-4 mt-1 space-y-1">
          <Link
            href={item.href}
            onClick={onLinkClick}
            className="block py-2 px-3 text-sm text-[var(--color-muted-foreground)] hover:text-[var(--asgc-primary)] hover:bg-[var(--color-muted)] rounded-lg transition-colors focus-ring"
          >
            Overview
          </Link>
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={onLinkClick}
              className="block py-2 px-3 text-sm text-[var(--color-muted-foreground)] hover:text-[var(--asgc-primary)] hover:bg-[var(--color-muted)] rounded-lg transition-colors focus-ring"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
