"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

type Variant = 'committee' | 'funding' | 'meeting';

export interface ActionTileProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
  variant?: Variant;
  expandSide?: 'left' | 'right';
  className?: string;
  ctaLabel?: string;
}

const gradients: Record<Variant, { ring: string; chip: string; wash: string }> = {
  committee: {
    ring: 'from-emerald-500/50 via-green-500/40 to-emerald-500/50',
    chip: 'from-emerald-500 to-green-600',
    wash: 'from-white to-emerald-50',
  },
  funding: {
    ring: 'from-lime-500/50 via-emerald-500/40 to-amber-500/45',
    chip: 'from-emerald-500 to-amber-500',
    wash: 'from-white to-amber-50',
  },
  meeting: {
    ring: 'from-emerald-500/50 via-sky-500/40 to-indigo-500/45',
    chip: 'from-emerald-500 to-sky-500',
    wash: 'from-white to-sky-50',
  },
};

export default function ActionTile({ title, description, href, icon, variant = 'committee', expandSide = 'right', className = '', ctaLabel = 'Open' }: ActionTileProps) {
  const g = gradients[variant];


  return (
    <motion.div>
      <Link
        href={href}
        className={`group relative block w-full max-w-xl mx-auto rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)]/95 backdrop-blur-sm p-4 md:p-5 min-h-[88px] shadow-sm transition-all duration-200 ${expandSide === 'left' ? 'origin-right' : 'origin-left'} ${className}`}
      >
        {/* Gradient ring */}
        <div
          className={`pointer-events-none absolute -inset-px rounded-[22px] opacity-0 group-hover:opacity-60 transition-opacity duration-300`}
          style={{ background: 'conic-gradient(from 140deg at 50% 50%, rgba(16,185,129,0.42), rgba(99,102,241,0.30), rgba(16,185,129,0.42))' }}
        />
        {/* Soft wash */}
        <div className={`pointer-events-none absolute inset-0 rounded-[22px] opacity-95 bg-gradient-to-br ${g.wash}`} />
        {/* Top highlight */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--asgc-primary)]/40 to-transparent"/>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          {/* Left column */}
          <div className="flex flex-col justify-between min-h-[96px]">
            <div className="flex items-center gap-3 min-w-0">
              {icon && (
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl grid place-items-center text-[var(--asgc-primary)] bg-white ring-1 ring-inset ring-[var(--asgc-primary)]/25">
                  {icon}
                </div>
              )}
              <h3 className="truncate text-[clamp(18px,1.2rem,22px)] font-semibold tracking-tight text-[var(--color-foreground)]">
                {title}
              </h3>
            </div>
            {/* Bottom-left accent */}
            <div className="mt-4 w-28 h-7 rounded-xl bg-[var(--asgc-primary)]/10 ring-1 ring-inset ring-[var(--asgc-primary)]/20" />
          </div>

          {/* Right column */}
          <div className="flex flex-col items-start md:items-end gap-3 text-right">
            <p className="text-sm text-[var(--color-muted)] leading-relaxed max-w-sm md:line-clamp-3">
              {description}
            </p>
            <span className="inline-flex items-center justify-center rounded-lg px-4 py-2 bg-[var(--asgc-primary)] text-white text-sm font-semibold shadow-sm">
              {ctaLabel}
            </span>
            {/* Subtle underline accent */}
            <div className="w-24 h-[3px] rounded-full bg-[var(--asgc-primary)]/25" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
