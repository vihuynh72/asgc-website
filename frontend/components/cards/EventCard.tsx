// OVERHAUL PLAN: Event card with category badge, compact meta, and optional registration; hover scale and skeleton states.
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { scaleOnHover, respectReducedMotion, skeletonPulse } from '../motion/presets';
import { formatWeekdayShortUTC } from '../../lib/date';

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: 'social' | 'academic' | 'governance' | 'service';
  href?: string;
  registrationUrl?: string;
  featured?: boolean;
  loading?: boolean;
  className?: string;
}

const categoryStyles = {
  social: 'bg-blue-100 text-blue-700',
  academic: 'bg-green-100 text-green-700',
  governance: 'bg-purple-100 text-purple-700',
  service: 'bg-orange-100 text-orange-700'
};

export function EventCard({ 
  title, 
  description, 
  date, 
  time, 
  location, 
  category, 
  href, 
  registrationUrl, 
  featured = false,
  loading = false,
  className = '' 
}: EventCardProps) {
  if (loading) {
    return (
      <motion.div 
        {...respectReducedMotion(skeletonPulse)}
        className={`
          rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] 
          shadow-sm p-6 ${className}
        `}
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="h-6 bg-[var(--asgc-neutral-50)] rounded w-20"></div>
            <div className="h-4 bg-[var(--asgc-neutral-50)] rounded w-16"></div>
          </div>
          <div className="space-y-3">
            <div className="h-6 bg-[var(--asgc-neutral-50)] rounded w-3/4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-[var(--asgc-neutral-50)] rounded"></div>
              <div className="h-4 bg-[var(--asgc-neutral-50)] rounded w-5/6"></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-[var(--asgc-neutral-50)] rounded w-24"></div>
            <div className="h-4 bg-[var(--asgc-neutral-50)] rounded w-32"></div>
          </div>
        </div>
      </motion.div>
    );
  }

  const formatDate = (dateString: string) => formatWeekdayShortUTC(dateString);

  const content = (
    <>
      <div className="flex items-center justify-between mb-4">
        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${categoryStyles[category]}`}>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </span>
        {featured && (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-[var(--asgc-primary)]/10 text-[var(--asgc-primary)]">
            Featured
          </span>
        )}
      </div>

      <h3 className="font-semibold text-[var(--color-foreground)] mb-3 group-hover:text-[var(--asgc-primary)] transition-colors">
        {title}
      </h3>

      <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-4 line-clamp-2">
        {description}
      </p>

      <div className="space-y-2 text-sm text-[var(--color-muted)]">
        <div className="flex items-center">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {formatDate(date)} at {time}
        </div>
        <div className="flex items-center">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {location}
        </div>
      </div>

      {registrationUrl && (
        <div className="mt-4 pt-4 border-t border-[var(--color-border)]">
          <Link
            href={registrationUrl}
            className="inline-flex items-center text-sm font-medium text-[var(--asgc-primary)] hover:text-[var(--asgc-primary)]/80 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            Register Now
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
        </div>
      )}
    </>
  );

  if (href) {
    return (
      <motion.div {...respectReducedMotion(scaleOnHover)}>
        <Link
          href={href}
          className={`
            group block rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] 
            shadow-sm hover:shadow-md transition-all duration-200 p-6
            focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]
            ${className}
          `}
        >
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div 
      {...respectReducedMotion(scaleOnHover)}
      className={`
        rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] 
        shadow-sm hover:shadow-md transition-all duration-200 p-6 group
        ${className}
      `}
    >
      {content}
    </motion.div>
  );
}
