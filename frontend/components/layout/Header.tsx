// OVERHAUL PLAN: Sticky, minimal header with desktop nav, search, CTA, and theme toggle; mobile drawer handled below.
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { GlobalNav } from '../nav/GlobalNav';
import { MobileNav } from '../nav/MobileNav';
import { SearchBar } from '../nav/SearchBar';
import { ThemeToggle } from '../theme/ThemeToggle';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
  <header className="sticky top-0 z-50 w-full border-b border-[var(--color-border)] bg-[var(--color-background)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--color-background)]/60">
      <div className="container max-w-[var(--container-max-width)]">
  <div className="flex h-14 md:h-16 items-center justify-between gap-2 md:gap-3">
          {/* Logo and branding */}
          <div className="flex items-center gap-3 min-w-0 shrink-0">
            <Link 
              href="/" 
              className="flex items-center gap-2 focus-ring rounded-lg p-1 shrink-0"
              aria-label="ASGC Home"
            >
              {/* Logo placeholder - circular with ASGC initials */}
              <div className="flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-full bg-[var(--asgc-primary)] text-white font-bold text-sm md:text-base">
                A
              </div>
              <div className="hidden sm:block truncate">
                <div className="text-base md:text-lg font-semibold leading-tight text-[var(--color-foreground)]">ASGC</div>
                <div className="text-[10px] md:text-xs text-[var(--color-muted)] -mt-0.5 hidden xl:block">Grossmont College</div>
              </div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-5 flex-1 min-w-0 justify-center">
            <GlobalNav />
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-2 md:gap-3 shrink-0">
            {/* Search - hidden on small screens */}
            <div className="hidden md:block w-40 lg:w-52 xl:w-60">
              <SearchBar />
            </div>

            {/* Theme toggle */}
            <ThemeToggle />

            {/* CTA Button */}
            <Link
              href="/get-involved"
              className="hidden sm:inline-flex btn-primary text-sm px-3 py-2 whitespace-nowrap leading-none shrink-0"
            >
              Join ASGC
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-[var(--asgc-neutral-50)] focus-ring"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                // Close icon
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Menu icon
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      <MobileNav 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </header>
  );
}
