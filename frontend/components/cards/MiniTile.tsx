"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export interface MiniTileProps {
  title: string;
  href: string;
  icon?: React.ReactNode;
  className?: string;
}

export default function MiniTile({ title, href, icon, className = "" }: MiniTileProps) {
  return (
  <motion.div className={`group relative inline-block rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)]/95 backdrop-blur-sm p-6 shadow-sm transition-all duration-200 ${className}`}>
      {/* Glow ring */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[22px] opacity-0 group-hover:opacity-60 transition-opacity duration-300"
        style={{
          background:
            "conic-gradient(from 140deg at 50% 50%, rgba(16,185,129,0.42), rgba(99,102,241,0.30), rgba(16,185,129,0.42))",
        }}
      />
      {/* Soft wash */}
      <div className="pointer-events-none absolute inset-0 rounded-[22px] opacity-90 bg-gradient-to-br from-[var(--color-card)] to-[var(--asgc-primary)]/7" />
      {/* Top highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--asgc-primary)]/40 to-transparent" />

      <Link href={href} className="relative z-10 block">
        <div className="flex items-center justify-between gap-5 w-full h-[128px] md:h-[136px]">
          <h3 className="text-[clamp(20px,1.4rem,24px)] font-semibold tracking-tight text-[var(--color-foreground)] truncate">
            {title}
          </h3>
          {icon && (
            <div className="relative overflow-hidden w-14 h-14 md:w-16 md:h-16 rounded-full grid place-items-center bg-white ring-1 ring-inset ring-[var(--asgc-primary)]/25 transition-colors duration-500">
              {/* Fill effect */}
              <span aria-hidden className="absolute inset-0 scale-x-0 origin-left bg-[var(--asgc-primary)] transition-transform duration-500 ease-out group-hover:scale-x-100" />
              <div className="relative z-10 transition-colors duration-500 text-[var(--asgc-primary)] group-hover:text-white">
                {icon}
              </div>
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
