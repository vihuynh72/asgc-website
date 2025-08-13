'use client';
// Modern, lightly-animated action/info tile used across the homepage
import Link from 'next/link';
import { motion } from 'framer-motion';
import { scaleOnHover, respectReducedMotion, skeletonPulse } from '../motion/presets';

interface InfoCardProps {
  title: string;
  description: string;
  href?: string;
  icon?: React.ReactNode;
  loading?: boolean;
  className?: string;
}

export function InfoCard({
  title,
  description,
  href,
  icon,
  loading = false,
  className = '',
}: InfoCardProps) {
  // Skeleton state
  if (loading) {
    return (
      <motion.div
        {...respectReducedMotion(skeletonPulse)}
        className={`relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)]/80 p-6 ${className}`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--asgc-primary)]/5 to-transparent" />
        <div className="flex items-start space-x-4 relative">
          <div className="w-12 h-12 bg-[var(--asgc-neutral-50)] rounded-xl" />
          <div className="flex-1 space-y-3">
            <div className="h-5 bg-[var(--asgc-neutral-50)] rounded w-3/4" />
            <div className="space-y-2">
              <div className="h-4 bg-[var(--asgc-neutral-50)] rounded" />
              <div className="h-4 bg-[var(--asgc-neutral-50)] rounded w-5/6" />
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Shared content layout: single row, space-between
  const content = (
    <div className="relative z-10 flex items-center justify-between gap-4">
      <div className="flex items-center gap-3 min-w-0">
        {icon && (
          <div
            className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl grid place-items-center text-[var(--asgc-primary)]
                       bg-white ring-1 ring-inset ring-[var(--asgc-primary)]/25"
          >
            {icon}
          </div>
        )}
        <h3 className="truncate text-[clamp(16px,1.1rem,18px)] font-semibold tracking-tight text-[var(--color-foreground)]">
          {title}
        </h3>
      </div>
      <p className="hidden sm:block text-right text-sm text-[var(--color-muted)] max-w-xs truncate">
        {description}
      </p>
    </div>
  );

  // Tile chrome (gradient wash + top shimmer line)
  const chrome = (
    <>
      {/* Background wash */}
      <div className="pointer-events-none absolute inset-0 opacity-90 bg-gradient-to-br from-[var(--color-card)] to-[var(--asgc-primary)]/7" />
      {/* Animated glow border (via conic gradient overlay) */}
      <div className="pointer-events-none absolute -inset-px rounded-[22px] opacity-0 group-hover:opacity-60 transition-opacity duration-300" style={{
        background:
          'conic-gradient(from 140deg at 50% 50%, rgba(34,197,94,0.28), rgba(99,102,241,0.25), rgba(16,185,129,0.28), rgba(34,197,94,0.28))'
      }} />
      {/* Soft top highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--asgc-primary)]/40 to-transparent" />
      {/* Diagonal sheen */}
      <div className="pointer-events-none absolute -left-8 -top-10 h-28 w-56 rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </>
  );

  const baseClass = `
    group relative block overflow-hidden rounded-2xl border border-[var(--color-border)]
    bg-[var(--color-card)]/80 backdrop-blur-[1px] p-4 md:p-5 shadow-sm hover:shadow-[0_8px_30px_rgba(2,6,23,0.08)]
    transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2
    focus-visible:outline-[var(--color-accent)] max-w-xl mx-auto ${className}
  `;

  if (href) {
    return (
      <motion.div {...respectReducedMotion(scaleOnHover)}>
        <Link href={href} className={baseClass}>
          {chrome}
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div {...respectReducedMotion(scaleOnHover)} className={baseClass}>
      {chrome}
      {content}
    </motion.div>
  );
}
