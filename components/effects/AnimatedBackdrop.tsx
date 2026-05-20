'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

type Particle = {
  id: number;
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
};

export default function AnimatedBackdrop() {
  // Generate once per mount — stable positions, no per-frame JS.
  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: 10 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 2 + Math.random() * 3,
        delay: Math.random() * 5,
        duration: 8 + Math.random() * 6,
      })),
    [],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 aurora opacity-90" />
      <div className="absolute inset-0 grid-bg" />

      {/* Two ambient blobs (down from 3). Long durations → low per-frame cost. */}
      <motion.div
        className="absolute -top-32 -left-20 h-[28rem] w-[28rem] rounded-full bg-royal/25 blur-3xl will-change-transform"
        animate={{ x: [0, 30, -10, 0], y: [0, -20, 10, 0] }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute top-40 right-[-6rem] h-[26rem] w-[26rem] rounded-full bg-gold/30 blur-3xl will-change-transform"
        animate={{ x: [0, -25, 15, 0], y: [0, 25, -15, 0] }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* CSS-driven particles — render once, the browser handles the loop. */}
      <div className="absolute inset-0">
        {particles.map((p) => (
          <span
            key={p.id}
            className="particle"
            style={
              {
                left: `${p.left}%`,
                top: `${p.top}%`,
                width: p.size,
                height: p.size,
                '--dur': `${p.duration}s`,
                '--delay': `${p.delay}s`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
    </div>
  );
}
