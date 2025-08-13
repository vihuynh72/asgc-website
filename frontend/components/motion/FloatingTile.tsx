"use client";

import React from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
  className?: string;
};

// A light, accessible 3D tilt + spotlight wrapper. Disables effects when reduced motion is preferred.
export function FloatingTile({ children, className = '' }: Props) {
  // Avoid SSR/CSR mismatch: compute motion enablement after mount
  const prefersReduced = useReducedMotion();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  const enableMotion = mounted && !prefersReduced;

  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const rX = useSpring(mvX, { stiffness: 150, damping: 15, mass: 0.2 });
  const rY = useSpring(mvY, { stiffness: 150, damping: 15, mass: 0.2 });

  const [spot, setSpot] = React.useState<{ x: number; y: number } | null>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enableMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const mx = (e.clientX - rect.left) / rect.width; // 0..1
    const my = (e.clientY - rect.top) / rect.height; // 0..1
    const maxTilt = 8; // degrees
  mvX.set((0.5 - my) * maxTilt);
  mvY.set((mx - 0.5) * maxTilt);
    setSpot({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const onLeave = () => {
    if (!enableMotion) return;
  mvX.set(0);
  mvY.set(0);
    setSpot(null);
  };

  return (
    <div className={`relative [perspective:1000px] group ${className}`} onMouseMove={onMove} onMouseLeave={onLeave}>
      {/* Spotlight glow following the cursor - always render to keep SSR/CSR structure identical */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[22px] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={{
          background:
            spot && enableMotion
              ? `radial-gradient(240px circle at ${spot.x}px ${spot.y}px, var(--asgc-primary)/12, transparent 60%)`
              : 'none',
        }}
      />

      <motion.div
        className="will-change-transform"
        style={enableMotion ? { rotateX: rX, rotateY: rY } : undefined}
        whileHover={enableMotion ? { scale: 1.02, boxShadow: '0 12px 40px rgba(2,6,23,0.12)' } : undefined}
        transition={{ type: 'spring', stiffness: 200, damping: 18, mass: 0.3 }}
      >
        {/* Ensure nested card keeps its own rounding/shadow */}
        <div className="group relative">{children}</div>
      </motion.div>
    </div>
  );
}

export default FloatingTile;
    