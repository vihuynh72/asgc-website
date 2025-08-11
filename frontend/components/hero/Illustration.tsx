"use client";

import { motion } from 'framer-motion';
import { respectReducedMotion } from '../motion/presets';

export function Illustration() {
  return (
    <div className="relative aspect-[4/3] md:aspect-[5/4] w-full max-w-lg mx-auto">
      {/* Background ring */}
      <motion.svg
        {...respectReducedMotion({ initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.8 } })}
        viewBox="0 0 400 320"
        className="absolute inset-0 w-full h-full"
        aria-hidden
      >
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--asgc-accent)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="var(--asgc-primary)" stopOpacity="0.25" />
          </linearGradient>
        </defs>
        <circle cx="200" cy="160" r="140" fill="url(#grad)" />
      </motion.svg>

      {/* Floating shapes */}
      <motion.div
  {...respectReducedMotion({ initial: { y: 10 }, animate: { y: -10 }, transition: { repeat: Infinity, repeatType: "reverse" as const, duration: 4, ease: [0.42, 0, 0.58, 1] as [number, number, number, number] } })}
        className="absolute left-6 top-6"
      >
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden>
          <rect x="0" y="0" width="80" height="80" rx="16" fill="var(--color-card)" stroke="var(--color-border)" />
          <circle cx="40" cy="40" r="18" fill="var(--asgc-primary)" opacity="0.2" />
          <circle cx="40" cy="40" r="8" fill="var(--asgc-primary)" />
        </svg>
      </motion.div>

      <motion.div
  {...respectReducedMotion({ initial: { y: -8 }, animate: { y: 8 }, transition: { repeat: Infinity, repeatType: "reverse" as const, duration: 5, ease: [0.42, 0, 0.58, 1] as [number, number, number, number], delay: 0.4 } })}
        className="absolute right-4 bottom-8"
      >
        <svg width="120" height="90" viewBox="0 0 120 90" fill="none" aria-hidden>
          <rect x="6" y="8" width="108" height="72" rx="12" fill="var(--color-card)" stroke="var(--color-border)" />
          <rect x="18" y="22" width="48" height="10" rx="5" fill="var(--asgc-primary)" />
          <rect x="18" y="38" width="84" height="8" rx="4" fill="var(--asgc-accent)" opacity="0.3" />
          <rect x="18" y="52" width="72" height="8" rx="4" fill="var(--asgc-accent)" opacity="0.2" />
        </svg>
      </motion.div>

      <motion.div
  {...respectReducedMotion({ initial: { rotate: -5 }, animate: { rotate: 5 }, transition: { repeat: Infinity, repeatType: "reverse" as const, duration: 6, ease: [0.42, 0, 0.58, 1] as [number, number, number, number], delay: 0.2 } })}
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
      >
        <svg width="140" height="140" viewBox="0 0 140 140" fill="none" aria-hidden>
          <rect x="10" y="10" width="120" height="120" rx="28" fill="var(--color-card)" stroke="var(--color-border)" />
          <path d="M36 74h68" stroke="var(--asgc-primary)" strokeWidth="10" strokeLinecap="round" />
          <path d="M36 54h44" stroke="var(--asgc-accent)" strokeWidth="8" strokeLinecap="round" opacity="0.6" />
        </svg>
      </motion.div>
    </div>
  );
}
