'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Hero } from '../components/hero/Hero';
import { InfoCard } from '../components/cards/InfoCard';
import { NewsCard } from '../components/cards/NewsCard';
import { EventCard } from '../components/cards/EventCard';
import { fadeUp, stagger, respectReducedMotion } from '../components/motion/presets';

// TODO: Replace with real data from API/CMS
const quickActions = [
  {
    title: 'Join a Committee',
    description: 'Apply to student committees and make your voice heard',
    href: '/get-involved/committees',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: 'Request Funding',
    description: 'Apply for funding for your organization or event',
    href: '/funding',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
      </svg>
    )
  },
  {
    title: 'View Documents',
    description: 'Access meeting minutes, agendas, and bylaws',
    href: '/governance',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  }
];

const recentNews = [
  {
    title: 'ASGC Elections Open for Spring 2025',
    excerpt: 'Applications now open for student government positions. Run for office and represent your fellow students.',
    publishedAt: '2024-02-15',
    author: 'ASGC Communications',
    href: '/news/spring-2025-elections-open',
    featured: true
  },
  {
    title: 'New Student Funding Guidelines Approved',
    excerpt: 'Updated policies make it easier for student organizations to request funding.',
    publishedAt: '2024-02-10',
    author: 'ASGC Finance Committee',
    href: '/news/new-funding-guidelines',
    featured: false
  },
  {
    title: 'Student Mental Health Initiative Launched',
    excerpt: 'ASGC partners with campus counseling to provide new mental health resources.',
    publishedAt: '2024-02-08',
    author: 'ASGC Health Committee',
    href: '/news/mental-health-initiative',
    featured: false
  }
];

const upcomingEvents = [
  {
    title: 'ASGC Council Meeting',
    description: 'Monthly student government meeting open to all students.',
    date: '2024-03-01',
    time: '2:00 PM',
    location: 'Student Center Room 201',
    category: 'governance' as const,
    href: '/governance/meetings'
  },
  {
    title: 'Spring Career Fair',
    description: 'Connect with local employers and explore career opportunities.',
    date: '2024-03-15',
    time: '10:00 AM',
    location: 'Campus Quad',
    category: 'academic' as const,
    href: '/services/events/career-fair'
  }
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Quick Actions Section */}
      <section className="py-12 md:py-20">
        <div className="container max-w-[var(--container-max-width)] mx-auto px-4 md:px-6">
          <motion.div 
            {...respectReducedMotion(stagger(0.06, 0.2))}
            className="text-center mb-12"
          >
            <motion.h2 
              {...respectReducedMotion(fadeUp(0))}
              className="text-2xl md:text-3xl font-semibold text-[var(--color-foreground)] mb-4 tracking-tight"
            >
              Get Started
            </motion.h2>
            <motion.p 
              {...respectReducedMotion(fadeUp(0.1))}
              className="text-lg text-[var(--color-muted)] max-w-2xl mx-auto"
            >
              Explore ways to get involved and make your voice heard on campus
            </motion.p>
          </motion.div>

          <motion.div 
            {...respectReducedMotion(stagger(0.1, 0.3))}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {quickActions.map((action, index) => (
              <motion.div key={action.title} {...respectReducedMotion(fadeUp(index * 0.1))}>
                <InfoCard {...action} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-12 md:py-20 bg-[var(--asgc-neutral-50)]">
        <div className="container max-w-[var(--container-max-width)] mx-auto px-4 md:px-6">
          <motion.div 
            {...respectReducedMotion(stagger(0.06, 0.2))}
            className="flex items-center justify-between mb-12"
          >
            <div>
              <motion.h2 
                {...respectReducedMotion(fadeUp(0))}
                className="text-2xl md:text-3xl font-semibold text-[var(--color-foreground)] mb-2 tracking-tight"
              >
                Latest News
              </motion.h2>
              <motion.p 
                {...respectReducedMotion(fadeUp(0.1))}
                className="text-lg text-[var(--color-muted)]"
              >
                Stay updated with ASGC announcements and initiatives
              </motion.p>
            </div>
            <motion.div {...respectReducedMotion(fadeUp(0.2))}>
              <Link 
                href="/news" 
                className="inline-flex items-center text-sm font-medium text-[var(--asgc-primary)] hover:text-[var(--asgc-primary)]/80 transition-colors"
              >
                View All News
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            {...respectReducedMotion(stagger(0.1, 0.3))}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {recentNews.map((article, index) => (
              <motion.div key={article.title} {...respectReducedMotion(fadeUp(index * 0.1))}>
                <NewsCard {...article} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-12 md:py-20">
        <div className="container max-w-[var(--container-max-width)] mx-auto px-4 md:px-6">
          <motion.div 
            {...respectReducedMotion(stagger(0.06, 0.2))}
            className="flex items-center justify-between mb-12"
          >
            <div>
              <motion.h2 
                {...respectReducedMotion(fadeUp(0))}
                className="text-2xl md:text-3xl font-semibold text-[var(--color-foreground)] mb-2 tracking-tight"
              >
                Upcoming Events
              </motion.h2>
              <motion.p 
                {...respectReducedMotion(fadeUp(0.1))}
                className="text-lg text-[var(--color-muted)]"
              >
                Join us for meetings, activities, and campus events
              </motion.p>
            </div>
            <motion.div {...respectReducedMotion(fadeUp(0.2))}>
              <Link 
                href="/services/events" 
                className="inline-flex items-center text-sm font-medium text-[var(--asgc-primary)] hover:text-[var(--asgc-primary)]/80 transition-colors"
              >
                View All Events
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            {...respectReducedMotion(stagger(0.1, 0.3))}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {upcomingEvents.map((event, index) => (
              <motion.div key={event.title} {...respectReducedMotion(fadeUp(index * 0.1))}>
                <EventCard {...event} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-[radial-gradient(600px_400px_at_50%_50%,rgba(20,83,45,0.05),transparent)]">
        <div className="container max-w-[var(--container-max-width)] mx-auto px-4 md:px-6">
          <motion.div 
            {...respectReducedMotion(stagger(0.06, 0.2))}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h2 
              {...respectReducedMotion(fadeUp(0))}
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[var(--color-foreground)] mb-6 tracking-tight"
            >
              Ready to Make a Difference?
            </motion.h2>
            <motion.p 
              {...respectReducedMotion(fadeUp(0.1))}
              className="text-lg text-[var(--color-muted)] mb-8"
            >
              Join thousands of students who are actively shaping their college experience through ASGC.
            </motion.p>
            
            <motion.div 
              {...respectReducedMotion(fadeUp(0.2))}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/get-involved"
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-medium text-white bg-[var(--asgc-primary)] hover:opacity-90 active:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] transition-all shadow-sm hover:shadow-md"
              >
                Get Involved Today
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-medium text-[var(--color-foreground)] border border-[var(--color-border)] bg-[var(--color-card)] hover:bg-[var(--asgc-neutral-50)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] transition-all shadow-sm hover:shadow-md"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
