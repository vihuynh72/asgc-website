'use client';

import { useState } from 'react';
import Link from 'next/link';
import { navigationItems, NavItem } from './GlobalNav';

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
        className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Mobile menu */}
      <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl z-50 md:hidden">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
            <button
              onClick={onClose}
              className="p-2 -mr-2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md"
              aria-label="Close menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
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

          {/* Footer */}
          <div className="border-t border-gray-200 p-4">
            <Link
              href="/contact"
              onClick={handleLinkClick}
              className="block w-full text-center py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Contact Us
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
        className="block py-3 px-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-3 px-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-expanded={isExpanded}
      >
        {item.label}
        <svg
          className={`h-5 w-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
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
            className="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Overview
          </Link>
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={onLinkClick}
              className="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
