// Site Homepage composed with the new Hero and key sections
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, stagger, respectReducedMotion } from "../../components/motion/presets";
import { Hero } from "../../components/hero/Hero";
import MiniTile from "../../components/cards/MiniTile";
import { EventCard } from "../../components/cards/EventCard";
import { NewsCard } from "../../components/cards/NewsCard";

export default function SiteHomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-background)]">
      <Hero />

      {/* Quick actions (stacked rows; container left/right alternating, description opposite) */}
      <section className="py-[2.8rem] md:py-[3.2rem]">
        <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10 space-y-[2rem] md:space-y-[2.4rem]">
          {/* Row 1: Tile left, description right */}
          <motion.div {...respectReducedMotion(fadeUp(0))}>
            <div className="group w-full mx-auto grid grid-cols-1 md:grid-cols-[0.3fr_0.7fr] items-center md:justify-items-stretch gap-[1.6rem]">
              <div className="justify-self-start">
                <MiniTile
                  title="Apply to a Committee"
                  href="/get-involved#committees"
                  icon={
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 4h6a2 2 0 012 2v12a2 2 0 01-2 2H9a2 2 0 01-2-2V6a2 2 0 012-2z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 4h6v2H9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                    </svg>
                  }
                />
              </div>
              <div className="md:justify-self-stretch w-full text-right pr-[calc((100vw-100%)/2)] opacity-0 translate-y-1 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <p className="mt-1 block w-full text-right text-[clamp(28px,3.2vw,48px)] leading-tight tracking-tight font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-foreground)] via-[var(--asgc-primary)] to-[var(--color-foreground)] [background-size:340%_100%] animate-shimmer motion-reduce:animate-none motion-reduce:transform-none filter drop-shadow-[0_1px_0_rgba(0,0,0,0.05)] transition-[opacity,transform,filter] duration-300 ease-out group-hover:brightness-110 group-hover:scale-[1.01]">
                  Shape campus decisions.
                </p>
              </div>
            </div>
          </motion.div>   

          {/* Row 2: Description left, Tile right */}
          <motion.div {...respectReducedMotion(fadeUp(0.05))}>
            <div className="group w-full mx-auto grid grid-cols-1 md:grid-cols-[0.7fr_0.3fr] items-center md:justify-items-end gap-[1.6rem]">
              <div className="justify-self-stretch w-full text-left order-2 md:order-1 opacity-0 translate-y-1 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <p className="w-full text-left text-[clamp(26px,3vw,44px)] leading-tight tracking-tight font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-foreground)] via-[var(--asgc-primary)] to-[var(--color-foreground)] [background-size:320%_100%] animate-shimmer motion-reduce:animate-none motion-reduce:transform-none filter drop-shadow-[0_1px_0_rgba(0,0,0,0.05)]">
                  Get funding for your club
                </p>
              </div>
              <div className="justify-self-end order-1 md:order-2">
                <MiniTile
                  title="Request Funding"
                  href="/funding/request"
                  icon={<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .9-3 2s1.343 2 3 2 3 .9 3 2-1.343 2-3 2m0-8V4m0 12v4"/><path strokeLinecap="round" strokeLinejoin="round" d="M19 10v4m2-2h-4"/></svg>}
                />
              </div>
            </div>
          </motion.div>

          {/* Row 3: Tile left, Description right */}
          <motion.div {...respectReducedMotion(fadeUp(0.1))}>
            <div className="group w-full mx-auto grid grid-cols-1 md:grid-cols-[0.3fr_0.7fr] items-center md:justify-items-end gap-[1.6rem]">
              <div className="justify-self-start">
                <MiniTile
                  title="Attend a Meeting"
                  href="/governance/meetings"
                  icon={<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3M3 8h18M5 21h14a2 2 0 002-2V8H3v11a2 2 0 002 2z"/><path strokeLinecap="round" strokeLinejoin="round" d="M9 14l2 2 4-4"/></svg>}
                />
              </div>
              <div className="justify-self-end w-full text-right opacity-0 translate-y-1 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <p className="mt-1 w-full text-right text-[clamp(28px,3.2vw,48px)] leading-tight tracking-tight font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-foreground)] via-[var(--asgc-primary)] to-[var(--color-foreground)] [background-size:340%_100%] animate-shimmer motion-reduce:animate-none motion-reduce:transform-none filter drop-shadow-[0_1px_0_rgba(0,0,0,0.05)] opacity-0 translate-y-[2px] transition-[opacity,transform,filter] duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:brightness-110 group-hover:scale-[1.01]">
                  See agendas & minutes
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Events */}
      <section className="section-spacing border-t border-[var(--color-border)]">
        <div className="container">
          <div className="flex items-end justify-between mb-6">
            <h2 className="font-semibold tracking-tight text-[clamp(28px,3vw,40px)] section-header">Upcoming Events</h2>
            <Link href="/services/events" className="link-primary">View all</Link>
          </div>
          <p className="text-sm text-[var(--color-muted)] mb-4">Sample events shown. Confirm dates and details on the official calendar.</p>
          <motion.div {...respectReducedMotion(stagger(0.08, 0.1))} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div {...respectReducedMotion(fadeUp(0))}>
              <EventCard
                title="Welcome Week Social"
                description="Kick off the semester with music, snacks, and campus orgs."
                date="2025-08-25"
                time="11:00 AM"
                location="Main Quad"
                category="social"
                href="#"
              />
            </motion.div>
            <motion.div {...respectReducedMotion(fadeUp(0.05))}>
              <EventCard
                title="Budget Committee Meeting"
                description="Public session reviewing requests and allocations."
                date="2025-08-28"
                time="3:00 PM"
                location="Room 201"
                category="governance"
                href="#"
              />
            </motion.div>
            <motion.div {...respectReducedMotion(fadeUp(0.1))}>
              <EventCard
                title="Study Night: Math Focus"
                description="Tutors, snacks, and quiet space to prep for midterms."
                date="2025-09-10"
                time="6:00 PM"
                location="Library"
                category="academic"
                href="#"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* News */}
      <section className="section-spacing border-t border-[var(--color-border)]">
        <div className="container">
          <div className="flex items-end justify-between mb-6">
            <h2 className="font-semibold tracking-tight text-[clamp(28px,3vw,40px)] section-header">Latest News</h2>
            <Link href="/news" className="link-primary">Read more</Link>
          </div>
          <p className="text-sm text-[var(--color-muted)] mb-4">Sample announcements for demo. Refer to official channels for updates.</p>
          <motion.div {...respectReducedMotion(stagger(0.08, 0.1))} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div {...respectReducedMotion(fadeUp(0))}>
              <NewsCard
                title="ASGC Launches Micro‑Grant Program"
                excerpt="Student orgs can now apply for flexible micro‑grants to pilot new ideas this fall."
                publishedAt="2025-08-05"
                author="ASGC Communications"
                href="#"
              />
            </motion.div>
            <motion.div {...respectReducedMotion(fadeUp(0.05))}>
              <NewsCard
                title="New Hours for Student Center"
                excerpt="Extended evening hours are available during midterms and finals weeks."
                publishedAt="2025-08-02"
                author="Student Services"
                href="#"
              />
            </motion.div>
            <motion.div {...respectReducedMotion(fadeUp(0.1))}>
              <NewsCard
                title="Fall Elections Timeline Posted"
                excerpt="Key dates for candidacy, campaigning, and voting are now live."
                publishedAt="2025-07-30"
                author="Elections Committee"
                href="#"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
