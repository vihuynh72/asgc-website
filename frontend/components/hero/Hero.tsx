// OVERHAUL PLAN: Headline, description, stats, and audience CTAs; illustration on the left; gallery below.
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeUp, stagger, respectReducedMotion, scaleOnHover } from '../motion/presets';
import { Illustration } from './Illustration';
import { OrbitGallery } from './OrbitGallery';
import { campusGallery } from '../../lib/content/gallery';

interface HeroStats { value: string; label: string }
interface HeroProps { stats?: HeroStats[] }

const defaultStats: HeroStats[] = [
  { value: '20,000+', label: 'Students Represented' },
  { value: '$50k+', label: 'Funding Distributed' },
  { value: '15+', label: 'Active Committees' }
];

export function Hero({ stats = defaultStats }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(1200px_600px_at_50%_-20%,rgba(14,165,233,0.08),transparent),linear-gradient(#FAFAF9,#FFFFFF)]">
      <div className="container max-w-[var(--container-max-width)] mx-auto px-4 md:px-6 py-12 md:py-20">
        <motion.div {...respectReducedMotion(stagger(0.06, 0.2))} className="grid lg:grid-cols-2 items-center gap-10 max-w-6xl mx-auto">
          {/* Left: Headline, description, stats, CTAs */}
          <div className="flex flex-col items-center lg:items-start order-first">
            <motion.h1 {...respectReducedMotion(fadeUp(0))} className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[var(--color-foreground)] mb-6 leading-tight tracking-tight text-center lg:text-left">
              Your Voice.{" "}
              <span className="text-[var(--asgc-primary)]">Your Campus.</span>{" "}
              Your Future.
            </motion.h1>

            <motion.p {...respectReducedMotion(fadeUp(0.1))} className="text-lg md:text-xl text-[var(--color-muted)] mb-6 max-w-3xl mx-auto lg:mx-0 leading-relaxed text-center lg:text-left">
              The Associated Students of Grossmont College represents over 20,000 students, advocating for your needs and creating opportunities that enhance your college experience.
            </motion.p>

            {/* Stats under description */}
            <motion.div {...respectReducedMotion(fadeUp(0.2))} className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl w-full mb-8">
              {stats.map((stat, i) => (
                <motion.div key={stat.label} {...respectReducedMotion(fadeUp(0.3 + i * 0.05))} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[var(--asgc-primary)] mb-1">{stat.value}</div>
                  <div className="text-sm text-[var(--color-muted)] font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Audience CTAs */}
            <motion.div {...respectReducedMotion(fadeUp(0.3))} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full">
              <motion.div {...respectReducedMotion(scaleOnHover)} className="w-full sm:w-auto">
                <Link href="/get-involved" className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl px-4 py-2.5 text-white bg-[var(--asgc-primary)] hover:opacity-95 active:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--asgc-accent)] transition whitespace-nowrap">
                  I want to get involved
                  <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
              <motion.div {...respectReducedMotion(scaleOnHover)} className="w-full sm:w-auto">
                <Link href="/services" className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl px-4 py-2.5 border border-[var(--asgc-border)] text-[var(--asgc-neutral-900)] hover:bg-[var(--asgc-neutral-50)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--asgc-accent)] whitespace-nowrap">
                  I need ASGC services
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Illustration (hidden on small) */}
          <motion.div {...respectReducedMotion(fadeUp(0.1))} className="hidden lg:block order-last">
            <Illustration />
          </motion.div>
        </motion.div>
      </div>

      {/* Gallery section under hero */}
      <div className="pb-10 md:pb-14">
        <OrbitGallery title="Moments from Campus & ASGC" photos={campusGallery} />
      </div>
    </section>
  );
}
