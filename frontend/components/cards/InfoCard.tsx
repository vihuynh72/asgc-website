'use client';
// OVERHAUL PLAN: Standardized action/info card with hover scale and skeleton loading; uses global tokens and focus rings.
import Link from 'next/link';
import { motion } from 'framer-motion';
import { scaleOnHover, respectReducedMotion, skeletonPulse } from '../motion/presets';
interface InfoCardProps {  title: string;  description: string;  href?: string;  icon?: React.ReactNode;  loading?: boolean;  className?: string;}
export function InfoCard({   title,   description,   href,   icon,   loading = false,  className = '' }: InfoCardProps) {  if (loading) {    return (      <motion.div         {...respectReducedMotion(skeletonPulse)}        className={`          rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)]           shadow-sm p-6 ${className}        `}      >        <div className="flex items-start space-x-4">          <div className="w-12 h-12 bg-[var(--asgc-neutral-50)] rounded-lg"></div>          <div className="flex-1 space-y-3">            <div className="h-5 bg-[var(--asgc-neutral-50)] rounded w-3/4"></div>            <div className="space-y-2">              <div className="h-4 bg-[var(--asgc-neutral-50)] rounded"></div>              <div className="h-4 bg-[var(--asgc-neutral-50)] rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  const content = (
    <div className="flex items-start space-x-4">
      {icon && (
        <div className="flex-shrink-0 w-12 h-12 bg-[var(--asgc-primary)]/10 rounded-lg flex items-center justify-center text-[var(--asgc-primary)] transition-colors group-hover:bg-[var(--asgc-primary)] group-hover:text-white">
          {icon}
        </div>
      )}
      <div className="flex-1">
        <h3 className="font-semibold text-[var(--color-foreground)] mb-2 group-hover:text-[var(--asgc-primary)] transition-colors">
          {title}
        </h3>
        <p className="text-sm text-[var(--color-muted)] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
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
