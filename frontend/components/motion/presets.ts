// OVERHAUL PLAN: Centralize subtle motion presets with consistent easing/timing and a11y helpers.
// Motion presets for ASGC design system using precise easing and timing.

// OVERHAUL START
// no imports needed

// Spec-mandated exports
export const ease = [0.22, 1, 0.36, 1] as const;
export const fadeUp = (d = 0) => ({ initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease, delay: d } } });
export const cardHover = { whileHover: { scale: 1.01, transition: { duration: 0.2, ease } } };
export const stagger = (s = 0.05, d = 0) => ({ initial: 'hidden', animate: 'show', variants: { hidden: {}, show: { transition: { staggerChildren: s, delayChildren: d } } } });

// Back-compat aliases used across the codebase
export const scaleOnHover = cardHover;

// Slide in from side (for mobile nav, drawers)
export const slideInFromLeft = (delay = 0) => ({
  initial: { x: -300, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.4, ease, delay } },
  exit: { x: -300, opacity: 0, transition: { duration: 0.3, ease } },
});

// Loading skeleton fade
export const skeletonPulse = {
  animate: { opacity: [0.5, 0.8, 0.5], transition: { duration: 1.5, ease, repeat: Infinity } },
};

// Respect reduced motion: disable transforms/animations
export const respectReducedMotion = <T extends Record<string, unknown>>(animation: T): Partial<T> => {
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return {};
  }
  return animation;
};
// OVERHAUL END
