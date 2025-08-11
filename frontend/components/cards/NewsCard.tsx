"use client";
// OVERHAUL PLAN: News card with image, featured badge, and clean meta; subtle hover lift and skeleton on load.

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { scaleOnHover, respectReducedMotion, skeletonPulse } from "../motion/presets";
import { formatDateUTC } from "../../lib/date";

interface NewsCardProps {
  title: string;
  excerpt: string;
  publishedAt: string;
  author: string;
  href: string;
  imageUrl?: string;
  featured?: boolean;
  loading?: boolean;
  className?: string;
}

export function NewsCard({
  title,
  excerpt,
  publishedAt,
  author,
  href,
  imageUrl,
  featured = false,
  loading = false,
  className = "",
}: NewsCardProps) {
  if (loading) {
    return (
      <motion.div
        {...respectReducedMotion(skeletonPulse)}
        className={`
          rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)]
          shadow-sm overflow-hidden ${className}
        `}
      >
        <div className="aspect-video bg-[var(--asgc-neutral-50)]"></div>
        <div className="p-6 space-y-4">
          <div className="space-y-3">
            <div className="h-6 bg-[var(--asgc-neutral-50)] rounded w-3/4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-[var(--asgc-neutral-50)] rounded"></div>
              <div className="h-4 bg-[var(--asgc-neutral-50)] rounded w-5/6"></div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="h-4 bg-[var(--asgc-neutral-50)] rounded w-20"></div>
            <div className="h-4 bg-[var(--asgc-neutral-50)] rounded w-16"></div>
          </div>
        </div>
      </motion.div>
    );
  }

  const formatDate = (dateString: string) => formatDateUTC(dateString);

  return (
    <motion.div {...respectReducedMotion(scaleOnHover)}>
      <Link
        href={href}
        className={`
          group block rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)]
          shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden
          focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]
          ${featured ? "ring-2 ring-[var(--asgc-primary)]/20" : ""}
          ${className}
        `}
      >
        {/* Image */}
        {imageUrl && (
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={imageUrl}
              alt=""
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        <div className="p-6">
          {/* Featured badge */}
          {featured && (
            <div className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-[var(--asgc-primary)]/10 text-[var(--asgc-primary)] mb-3">
              Featured
            </div>
          )}

          {/* Title */}
          <h3 className="font-semibold text-[var(--color-foreground)] mb-3 group-hover:text-[var(--asgc-primary)] transition-colors line-clamp-2">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-4 line-clamp-3">
            {excerpt}
          </p>

          {/* Meta */}
          <div className="flex items-center justify-between text-xs text-[var(--color-muted)]">
            <span>{author}</span>
            <span>{formatDate(publishedAt)}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
