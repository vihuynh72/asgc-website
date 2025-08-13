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

// Three-position carousel with clockwise rotation [1] -> [2] -> [3] -> [1]
// Only loads new image when moving from position [3] to position [1]
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

  // Track which image index is at each position
  // positions: 0 = position [1], 1 = position [2], 2 = position [3]
  const [imageIndices, setImageIndices] = useState<number[]>([0, 1, 2]);
  
  // Track which position is currently active (front/featured)
  const [activePosition, setActivePosition] = useState<number>(0);
  
  // Track the next image index to load when [3] -> [1]
  const [nextImageIndex, setNextImageIndex] = useState<number>(3 % source.length);

  // Define the fixed positions for the three slots - horizontal staggered layout
  const positions = [
    { top: "50%", left: "50%" },   // Position [1]: center (main)
    { top: "50%", left: "75%" },   // Position [2]: right
    { top: "50%", left: "25%" }    // Position [3]: left
  ];
  
  // Image sizes and styles for each position
  const styles = [
    { scale: 1.0, zIndex: 30, opacity: 1.0, translateZ: 0 },       // Position [1]: front/center
    { scale: 0.85, zIndex: 20, opacity: 0.8, translateZ: -40 },    // Position [2]: right
    { scale: 0.85, zIndex: 10, opacity: 0.8, translateZ: -40 }     // Position [3]: left
  ];

  // Rotate images clockwise: [1] -> [2], [2] -> [3], [3] -> [1] (with new image)
  useEffect(() => {
    if (reduced) return;
    
    const timer = setInterval(() => {
      // Shift active position clockwise
      setActivePosition(prev => (prev + 1) % 3);
      
      // Rotate images clockwise
      setImageIndices(prev => {
        const newIndices = [...prev];
        
        // Clockwise rotation: [1] -> [2], [2] -> [3], [3] -> [1]
        newIndices[1] = prev[0]; // [1] moves to [2]
        newIndices[2] = prev[1]; // [2] moves to [3]
        newIndices[0] = nextImageIndex; // [3] moves to [1] with NEW image
        
        return newIndices;
      });
      
      // Update the next image index for next cycle
      setNextImageIndex(current => (current + 1) % source.length);
      
    }, 7000); // 7 second cycle
    
    return () => clearInterval(timer);
  }, [reduced, source.length, nextImageIndex]);

  // Reset when source changes
  useEffect(() => {
    setImageIndices([0, 1, 2]);
    setNextImageIndex(3 % source.length);
    setActivePosition(0);
  }, [source.length]);

  // Manual rotation function
  const handleNext = useCallback(() => {
    // Shift active position clockwise
    setActivePosition(prev => (prev + 1) % 3);
    
    // Rotate images clockwise
    setImageIndices(prev => {
      const newIndices = [...prev];
      
      // Clockwise rotation: [1] -> [2], [2] -> [3], [3] -> [1]
      newIndices[1] = prev[0]; // [1] moves to [2]
      newIndices[2] = prev[1]; // [2] moves to [3]
      newIndices[0] = nextImageIndex; // [3] moves to [1] with NEW image
      
      return newIndices;
    });
    
    // Update the next image index for next cycle
    setNextImageIndex(current => (current + 1) % source.length);
  }, [nextImageIndex, source.length]);

  // Get the currently featured photo
  const activePhoto = source[imageIndices[activePosition]];

  return (
    <section className="relative">
      <div className="max-w-[var(--container-max-width)] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(340px,1fr)_minmax(620px,1.2fr)] items-center gap-10">
          {/* Left: Staggered Image Carousel */}
          <div className="relative mx-auto h-[24rem] md:h-[28rem] w-full max-w-lg lg:mx-0" style={{ perspective: '1000px' }}>
            <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
              {/* Render the 3 positions */}
              {[0, 1, 2].map((position) => {
                const imageIndex = imageIndices[position];
                const photo = source[imageIndex];
                const isActive = position === activePosition;
              
              return (
                <motion.figure
                  key={`position-${position}-img-${imageIndex}`}
                  role="listitem"
                  className="absolute transition-all duration-1000 ease-in-out"
                  style={{
                    top: positions[position].top,
                    left: positions[position].left,
                    transform: `translate(-50%, -50%) scale(${styles[position].scale}) translateZ(${styles[position].translateZ}px)`,
                    opacity: styles[position].opacity,
                    zIndex: styles[position].zIndex,
                    transformStyle: "preserve-3d"
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: styles[position].opacity, scale: styles[position].scale }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <div
                    className={`relative overflow-hidden rounded-lg border bg-[var(--color-card)] ${
                      isActive ? 'shadow-xl border-[var(--asgc-primary)]/25' : 'shadow-md border-[var(--color-border)]'
                    }`}
                    style={{ width: isActive ? 320 : 240, height: isActive ? 200 : 150 }}
                  >
                    {photo?.src ? (
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-cover"
                        sizes={isActive ? "320px" : "240px"}
                        priority={isActive}
                      />
                    ) : (
                      <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(260px_180px_at_30%_20%,rgba(14,165,233,0.10),transparent)]">
                        <div className="text-sm font-medium text-[var(--color-muted)]">Add Photo</div>
                      </div>
                    )}
                  </div>
                </motion.figure>
              );
            })}
            </div>
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
                  className="px-4 py-2 bg-[var(--asgc-primary)] hover:bg-[var(--asgc-primary-dark)] text-white rounded-lg font-medium transition-colors"
                >
                  Next Photo
                </button>
                {onAddPhotos && (
                  <button
                    onClick={onAddPhotos}
                    className="px-4 py-2 bg-[var(--color-card)] hover:bg-[var(--color-border)] text-[var(--color-foreground)] border border-[var(--color-border)] rounded-lg font-medium transition-colors"
                  >
                    Add Photos
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
