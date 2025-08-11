// OVERHAUL PLAN: Legacy modern header adjusted to use GlobalNav; kept for compatibility.
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { GlobalNav } from '../nav/GlobalNav';
import { MobileNav } from '../nav/MobileNav';
import { SearchBar } from '../nav/SearchBar';
import { ThemeToggle } from '../theme/ThemeToggle';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="skip-link"
      >
        Skip to main content
      </a>
      
      <header className="sticky top-0 z-50 w-full bg-[var(--color-card)] border-b border-[var(--color-border)] backdrop-blur-sm bg-opacity-95">
        <div className="container-base">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link 
                href="/" 
                className="flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-[var(--asgc-accent)] focus:ring-offset-2 rounded-lg p-1"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-[var(--asgc-primary)] to-[var(--asgc-primary-light)] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <div className="hidden sm:block">
                  <div className="text-lg font-semibold text-[var(--color-foreground)]">ASGC</div>
                  <div className="text-xs text-[var(--color-muted-foreground)] -mt-1">Grossmont College</div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <GlobalNav />
            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {/* Search - hidden on small screens */}
              <div className="hidden md:block">
                <SearchBar />
              </div>

              {/* Theme toggle */}
              <ThemeToggle />

              {/* CTA Button */}
              <Link
                href="/get-involved"
                className="hidden md:inline-flex btn-primary text-sm"
              >
                Join ASGC
              </Link>

              {/* Mobile menu toggle */}
              <button
                type="button"
                className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-[var(--asgc-neutral-300)] bg-[var(--color-card)] hover:bg-[var(--asgc-neutral-100)] focus:outline-none focus:ring-2 focus:ring-[var(--asgc-accent)] focus:ring-offset-2 transition-all duration-200"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? (
                  <svg className="w-5 h-5 text-[var(--color-foreground)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-[var(--color-foreground)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <MobileNav 
          isOpen={mobileMenuOpen} 
          onClose={() => setMobileMenuOpen(false)} 
        />
      </header>
    </>
  );
}
