"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type Photo = {
  src: string;
  alt: string;
};

interface PhotoCarouselProps {
  photos?: Photo[];
  title?: string;
}

// Minimal, looped marquee carousel. If no photos are provided, render stylish placeholders
// so staff can drop images later without layout shifts.
export function PhotoCarousel({ photos = [], title = "Campus & ASGC" }: PhotoCarouselProps) {
  const reduced = useReducedMotion();

  // Fallback placeholder cards
  const placeholders: Photo[] = Array.from({ length: 6 }).map((_, i) => ({
    src: "", // empty means render placeholder frame
    alt: `Placeholder ${i + 1}`,
  }));

  const items = (photos.length ? photos : placeholders).slice(0, 8);
  const duplicated = [...items, ...items]; // for seamless loop

  return (
    <section aria-label={`${title} photo showcase`} className="relative">
      <div className="max-w-[var(--container-max-width)] mx-auto px-4 md:px-6">
        <div className="mb-4 flex items-end justify-between">
          <h2 className="text-base font-semibold text-[var(--color-muted)] tracking-wide">
            {title}
          </h2>
          <div className="text-xs text-[var(--color-muted)]">Add or replace images anytime</div>
        </div>

        {/* Masked edges for a nice fade-out */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[var(--color-background)] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[var(--color-background)] to-transparent" />

          {/* Track */}
          <div className="overflow-hidden">
            {!reduced ? (
              <motion.div
                role="list"
                className="flex gap-4 will-change-transform"
                // Animate a slow, infinite marquee; respect reduced motion
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 25, ease: "linear", repeat: Infinity }}
              >
                {duplicated.map((p, idx) => (
                  <figure
                    role="listitem"
                    key={idx}
                    className="relative h-40 w-64 shrink-0 overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] shadow-sm"
                  >
                    {p.src ? (
                      <Image
                        src={p.src}
                        alt={p.alt}
                        fill
                        className="object-cover"
                        sizes="256px"
                        priority={idx < 2}
                      />
                    ) : (
                      <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(200px_120px_at_30%_20%,rgba(14,165,233,0.10),transparent)]">
                        <div className="text-xs font-medium text-[var(--color-muted)]">
                          Add Photo
                        </div>
                      </div>
                    )}
                  </figure>
                ))}
              </motion.div>
            ) : (
              <div role="list" className="flex gap-4">
                {items.map((p, idx) => (
                  <figure
                    role="listitem"
                    key={idx}
                    className="relative h-40 w-64 shrink-0 overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] shadow-sm"
                  >
                    {p.src ? (
                      <Image src={p.src} alt={p.alt} fill className="object-cover" sizes="256px" />
                    ) : (
                      <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(200px_120px_at_30%_20%,rgba(14,165,233,0.10),transparent)]">
                        <div className="text-xs font-medium text-[var(--color-muted)]">Add Photo</div>
                      </div>
                    )}
                  </figure>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
