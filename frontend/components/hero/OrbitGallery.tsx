"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { useReducedMotion, motion, useSpring } from "framer-motion";
import type { GalleryPhoto } from "../../lib/content/gallery";

interface OrbitGalleryProps {
  photos?: GalleryPhoto[];
  title?: string;
  onAddPhotos?: () => void;
}

// Orbital carousel with three cards rotating around a center point
export function OrbitGallery({ photos = [], title = "Around Campus • ASGC in Action", onAddPhotos }: OrbitGalleryProps) {
  const reduced = useReducedMotion();

  // Ensure at least 3 items with placeholders.
  const placeholders: GalleryPhoto[] = Array.from({ length: 6 }).map((_, i) => ({ 
    src: `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjOTNDNUZEIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMzc0MUI4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5QbGFjZWhvbGRlciAke2kgKyAxfTwvdGV4dD4KPC9zdmc+Cg==`, 
    alt: `Placeholder ${i+1}`,
    title: `Placeholder Image ${i+1}`,
    description: "This is a placeholder image. Add real photos to see the carousel in action!"
  }));
  const source = (photos.length ? photos : placeholders);

  // Orbit configuration
  const radius = 150; // Distance from center to cards
  const baseAngles = [0, 120, 240]; // Starting angles for 3 cards (120° apart)
  const [theta, setTheta] = useState(0); // Current rotation angle
  const [slotIdx, setSlotIdx] = useState([0, 1, 2]); // Which source images are in each slot
  const [nextImageIndex, setNextImageIndex] = useState(3); // Track the next image to load

  // Keep the base card size consistent
  const size = { w: 320, h: 200 };

  // Make side cards nearly the same size as the front card
  const slotStyle = (angleDeg: number) => {
    const rad = (angleDeg * Math.PI) / 180;
    const cos = Math.cos(rad);
    // 0.85 … 1.0 instead of 0.75 … 1.0
    const scale = 0.85 + 0.15 * ((cos + 1) / 2);
    const opacity = 0.6 + 0.4 * ((cos + 1) / 2);
    const zIndex = cos > 0.6 ? 12 : 7;
    const transform = `translate(-50%, -50%) rotate(${angleDeg}deg) translateX(${radius}px) rotate(${-angleDeg}deg) scale(${scale})`;
    const front = cos > 0.6;
    return { transform, opacity, zIndex, front } as const;
  };

  // Auto-rotation
  useEffect(() => {
    if (reduced) return;
    
    const timer = setInterval(() => {
      setTheta(prev => (prev + 120) % 360); // Rotate +120° for true clockwise: [1]→[2]→[3]→[1]
      
      // After each rotation, replace the image that just moved to the back (position 3)
      setSlotIdx(prev => {
        const newSlotIdx = [...prev];
        // Find which slot just moved to the back (240° position after this rotation)
        const rotationCount = Math.floor((theta + 120) / 120) % 3;
        const backSlotIndex = (rotationCount + 2) % 3; // Slot that moved to back position
        
        // Load the next new image
        newSlotIdx[backSlotIndex] = nextImageIndex % source.length;
        return newSlotIdx;
      });
      
      // Increment to next image for next rotation
      setNextImageIndex(prev => (prev + 1) % source.length);
    }, 7000); // 7 second cycle
    
    return () => clearInterval(timer);
  }, [reduced, theta, source.length, nextImageIndex]);

  // Manual rotation function
  const handleNext = useCallback(() => {
    setTheta(prev => {
      const newTheta = (prev + 120) % 360; // Rotate +120° for true clockwise: [1]→[2]→[3]→[1]
      
      // After each rotation, replace the image that just moved to the back (position 3)
      setSlotIdx(prevSlot => {
        const newSlotIdx = [...prevSlot];
        // Find which slot just moved to the back (240° position after this rotation)
        const rotationCount = Math.floor(newTheta / 120) % 3;
        const backSlotIndex = (rotationCount + 2) % 3; // Slot that moved to back position
        
        // Load the next new image
        newSlotIdx[backSlotIndex] = nextImageIndex % source.length;
        return newSlotIdx;
      });
      
      // Increment to next image for next rotation
      setNextImageIndex(prev => (prev + 1) % source.length);
      
      return newTheta;
    });
  }, [source.length, nextImageIndex]);

  // Reset when source changes
  useEffect(() => {
    setSlotIdx([0, 1, 2]);
    setNextImageIndex(3);
    setTheta(0);
  }, [source.length]);

  // Get the currently featured photo (front card)
  const frontSlot = [0, 1, 2].find(k => {
    const ang = (theta + baseAngles[k]) % 360;
    const rad = (ang * Math.PI) / 180;
    const cos = Math.cos(rad);
    return cos > 0.6;
  }) ?? 0;
  const activePhoto = source[slotIdx[frontSlot]];
  return (
    <section className="relative">
      <div className="max-w-[var(--container-max-width)] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(620px,1.2fr)_minmax(340px,1fr)] items-center gap-10">
          {/* Left: Orbit */}
          {/* Remove `mx-auto` so the carousel aligns to the left like the text */}
          <div className="relative h-[24rem] md:h-[28rem] w-full max-w-5xl lg:mx-0">
            {[0, 1, 2].map((k) => {
              const ang = (theta + baseAngles[k]) % 360;
              const { transform, opacity, zIndex, front } = slotStyle(ang);
              const p = source[slotIdx[k]];
              return (
                <figure
                  key={k}
                  role="listitem"
                  className="absolute transition-all duration-1000 ease-in-out"
                  /* Anchor the orbit at the middle of its container */
                  style={{ top: '50%', left: '50%', transform, zIndex }}
                >
                  <div
                    className={`relative overflow-hidden rounded-2xl border bg-[var(--color-card)] ${
                      front ? 'shadow-xl border-[var(--asgc-primary)]/25' : 'shadow-md border-[var(--color-border)]'
                    }`}
                    style={{ width: size.w, height: size.h, opacity }}
                  >
                    {p?.src ? (
                      <Image
                        src={p.src}
                        alt={p.alt}
                        fill
                        className="object-cover"
                        sizes="320px"
                        priority={front}
                      />
                    ) : (
                      <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(260px_180px_at_30%_20%,rgba(14,165,233,0.10),transparent)]">
                        <div className="text-sm font-medium text-[var(--color-muted)]">Add Photo</div>
                      </div>
                    )}
                  </div>
                </figure>
              );
            })}
          </div>

          {/* Right: Title + metadata for the active/front photo */}
          <aside className="lg:pl-4">
            <div className="mb-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[var(--color-foreground)]">{title}</h2>
            </div>
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-[var(--color-foreground)] mb-2">{activePhoto?.title || 'Featured moment'}</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                {activePhoto?.description || 'Add a title and description to your gallery items to show context for the photo currently in focus.'}
              </p>
              {activePhoto?.credit && (
                <div className="mt-3 text-xs text-[var(--color-muted)]">© {activePhoto.credit}</div>
              )}
              
              {/* Controls */}
              <div className="mt-4 flex gap-3">
                <button
                  onClick={handleNext}
                  className="group relative px-4 py-2 bg-[var(--asgc-primary)] text-white rounded-lg font-medium transition-all duration-200 ease-out hover:bg-[var(--asgc-primary-dark)] hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[var(--asgc-primary)] focus:ring-offset-2 active:scale-95"
                  aria-label="View next photo in gallery"
                >
                  <span className="relative z-10">Next Photo</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg transform -skew-x-12"></div>
                </button>
                {onAddPhotos && (
                  <button
                    onClick={onAddPhotos}
                    className="group relative px-4 py-2 bg-[var(--color-card)] text-[var(--color-foreground)] border border-[var(--color-border)] rounded-lg font-medium transition-all duration-200 ease-out hover:bg-[var(--color-muted)]/10 hover:border-[var(--asgc-primary)]/30 hover:shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[var(--asgc-primary)] focus:ring-offset-2 active:scale-95"
                    aria-label="Add more photos to gallery"
                  >
                    <span className="relative z-10">Add Photos</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--asgc-primary)]/5 via-[var(--asgc-primary)]/10 to-[var(--asgc-primary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                  </button>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
