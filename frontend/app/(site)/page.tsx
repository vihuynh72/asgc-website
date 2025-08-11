// Site Homepage composed with the new Hero and key sections
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, stagger, respectReducedMotion } from "../../components/motion/presets";
import { Hero } from "../../components/hero/Hero";
import { InfoCard } from "../../components/cards/InfoCard";
import { EventCard } from "../../components/cards/EventCard";
import { NewsCard } from "../../components/cards/NewsCard";

export default function SiteHomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-background)]">
      <Hero />

      {/* Quick actions (3 cards) */}
      <section className="section-spacing">
        <div className="container">
          <motion.div
            {...respectReducedMotion(stagger(0.08, 0.15))}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <motion.div {...respectReducedMotion(fadeUp(0))}>
              <InfoCard
                title="Apply to a Committee"
                description="Serve on a student committee and shape campus decisions."
                href="/get-involved#committees"
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6M9 5h6a2 2 0 012 2v12a2 2 0 01-2 2H9a2 2 0 01-2-2V7a2 2 0 012-2z" />
                  </svg>
                }
              />
            </motion.div>

            <motion.div {...respectReducedMotion(fadeUp(0.05))}>
              <InfoCard
                title="Request Funding"
                description="Apply for student org funding to launch events or projects."
                href="/funding/request"
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V4m0 12v4" />
                  </svg>
                }
              />
            </motion.div>

            <motion.div {...respectReducedMotion(fadeUp(0.1))}>
              <InfoCard
                title="Attend a Meeting"
                description="See agendas, minutes, and attend upcoming sessions."
                href="/governance/meetings"
                icon={
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                }
              />
            </motion.div>
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
