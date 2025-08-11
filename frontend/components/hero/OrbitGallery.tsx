"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import type { GalleryPhoto } from "../../lib/content/gallery";

interface OrbitGalleryProps {
  photos?: GalleryPhoto[];
  title?: string;
}

// 3-layer spherical carousel with continuous XY-plane orbit.
// - Layer 1: Foreground photo (on top)
// - Layer 2: Blurry sphere (middle)
// - Layer 3: Two photos rotating behind the sphere, then cycling forward
export function OrbitGallery({ photos = [], title = "Around Campus • ASGC in Action" }: OrbitGalleryProps) {
  const reduced = useReducedMotion();

  // Ensure at least 3 items with placeholders.
  const placeholders: GalleryPhoto[] = Array.from({ length: 6 }).map((_, i) => ({ src: "", alt: `Placeholder ${i+1}` }));
  const source = (photos.length ? photos : placeholders);

  // Angle state (degrees). We animate from 0..360 repeatedly.
  const [theta, setTheta] = useState(0);

  // For 3 orbiting items, maintain the photo index for each slot.
  const [slotIdx, setSlotIdx] = useState<[number, number, number]>([0, 1 % source.length, 2 % source.length]);
  const lastWasBack = useRef<[boolean, boolean, boolean]>([false, false, false]);

  const baseAngles = useMemo(() => [0, 120, 240], []); // degrees offsets
  const radius = 190; // px
  const size = { w: 320, h: 200 }; // larger frames

  // Pulse animation: rotate once then stop, repeat after a pause
  useEffect(() => {
    if (reduced) return; // static frame if reduced motion preferred
    let raf = 0;
    let timeout: number | undefined;
    const duration = 650; // ms to spin once (120°)
    const pause = 2200; // ms between spins

    const easeInOut = (t: number) => t < 0.5 ? 2*t*t : -1 + (4 - 2*t)*t; // simple ease

    const cycle = () => {
      const start = performance.now();
      const startTheta = theta;
      const target = (startTheta + 120) % 360; // rotate 1/3 of the circle
      const step = (now: number) => {
        const elapsed = now - start;
        const t = Math.min(1, elapsed / duration);
        const eased = easeInOut(t);
        // Interpolate across wrap by using delta
        const delta = ((target - startTheta + 540) % 360) - 180; // shortest path
        const next = (startTheta + delta * eased + 360) % 360;
        setTheta(next);
        if (t < 1) {
          raf = requestAnimationFrame(step);
        } else {
          timeout = window.setTimeout(() => {
            cycle();
          }, pause) as unknown as number;
        }
      };
      raf = requestAnimationFrame(step);
    };

    cycle();
    return () => {
      cancelAnimationFrame(raf);
      if (timeout) clearTimeout(timeout);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced]);

  // Swap photos when a slot crosses the back (near 180deg) so a new one
  // emerges as it comes around the front.
  useEffect(() => {
    if (source.length === 0) return;
    const nextFrom = (n: number) => (n + 1) % source.length;
    const newFlags: [boolean, boolean, boolean] = [...lastWasBack.current];
    let changed = false;

    const updatedIndices: [number, number, number] = [...slotIdx];

    for (let k = 0; k < 3; k++) {
      const a = (theta + baseAngles[k]) % 360;
      const nearBack = Math.abs(a - 180) < 12; // within 12° of back
      if (nearBack && !lastWasBack.current[k]) {
        // Back crossing — swap to next image while occluded by the sphere
        updatedIndices[k] = nextFrom(updatedIndices[k]);
        newFlags[k] = true;
        changed = true;
      } else if (!nearBack && lastWasBack.current[k]) {
        newFlags[k] = false;
        changed = true;
      }
    }
    if (changed) {
      lastWasBack.current = newFlags;
      setSlotIdx(updatedIndices);
    }
  }, [theta, baseAngles, slotIdx, source.length]);

  // Helper to compute transform/appearance per slot
  const slotStyle = (angleDeg: number) => {
    const rad = (angleDeg * Math.PI) / 180;
    const cos = Math.cos(rad);
  const scale = 0.75 + 0.25 * ((cos + 1) / 2); // 0.75 .. 1.0, bigger front
  const opacity = 0.5 + 0.5 * ((cos + 1) / 2); // 0.5 .. 1
  // zIndex to keep front-most on top; no sphere layer now
  const z = cos > 0.6 ? 12 : 7;
    const transform = `translate(-50%, -50%) rotate(${angleDeg}deg) translateX(${radius}px) rotate(${-angleDeg}deg) scale(${scale})`;
    const front = cos > 0.6;
    return { transform, opacity, zIndex: z, front } as const;
  };

  // Determine the currently front-most slot to show metadata on the right
  const frontIndex = useMemo(() => {
    let best = 0;
    let bestCos = -Infinity;
    for (let k = 0; k < 3; k++) {
      const ang = (theta + baseAngles[k]) % 360;
      const cos = Math.cos((ang * Math.PI) / 180);
      if (cos > bestCos) { bestCos = cos; best = k; }
    }
    return best;
  }, [theta, baseAngles]);
  const activePhoto = source[slotIdx[frontIndex]];

  return (
    <section className="relative">
      <div className="max-w-[var(--container-max-width)] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(620px,1.2fr)_minmax(340px,1fr)] items-center gap-10">
          {/* Left: Orbit */}
          <div className="relative mx-auto h-[24rem] md:h-[28rem] w-full max-w-5xl lg:mx-0">
            {/* Layer 3: Back photos */}
            {[0,1,2].map((k) => {
              const ang = (theta + baseAngles[k]) % 360;
              const { transform, opacity, zIndex, front } = slotStyle(ang);
              const p = source[slotIdx[k]];
              return (
                <figure key={k} role="listitem" className="absolute" style={{ top: "50%", left: "36%", transform, zIndex }}>
                  <div className={`relative overflow-hidden rounded-2xl border bg-[var(--color-card)] ${front ? 'shadow-xl border-[var(--asgc-primary)]/25' : 'shadow-md border-[var(--color-border)]'}`}
                       style={{ width: size.w, height: size.h, opacity }}
                  >
                    {p?.src ? (
                      <Image src={p.src} alt={p.alt} fill className="object-cover" sizes={`${size.w}px`} priority={k===0} />
                    ) : (
                      <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(260px_180px_at_30%_20%,rgba(14,165,233,0.10),transparent)]">
                        <div className="text-sm font-medium text-[var(--color-muted)]">Add Photo</div>
                      </div>
                    )}
                  </div>
                </figure>
              );
            })}
            {/* Sphere removed per request */}
          </div>

          {/* Right: Title + metadata for the active/front photo */}
          <aside className="lg:pl-4">
            <div className="mb-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[var(--color-foreground)]">{title}</h2>
            </div>
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-[var(--color-foreground)] mb-2">{activePhoto?.title || 'Featured moment'}</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                {activePhoto?.description || 'Add a title and description to your gallery items to show context for the photo currently at the front of the sphere.'}
              </p>
              {activePhoto?.credit && (
                <div className="mt-3 text-xs text-[var(--color-muted)]">© {activePhoto.credit}</div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
