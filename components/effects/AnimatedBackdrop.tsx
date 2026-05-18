'use client';

import { motion } from 'framer-motion';

export default function AnimatedBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 aurora opacity-90" />
      <div className="absolute inset-0 grid-bg" />

      {/* Blobs */}
      <motion.div
        className="absolute -top-32 -left-20 h-[28rem] w-[28rem] rounded-full bg-royal/25 blur-3xl"
        animate={{ x: [0, 30, -10, 0], y: [0, -20, 10, 0], scale: [1, 1.08, 0.96, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-40 right-[-6rem] h-[26rem] w-[26rem] rounded-full bg-gold/30 blur-3xl"
        animate={{ x: [0, -25, 15, 0], y: [0, 25, -15, 0], scale: [1, 0.95, 1.08, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-8rem] left-1/3 h-[32rem] w-[32rem] rounded-full bg-navy/15 blur-3xl"
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0], scale: [1, 1.12, 0.92, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Glowing line patterns */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.35]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="line-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
            <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.line
          x1="0%"
          y1="20%"
          x2="100%"
          y2="22%"
          stroke="url(#line-grad)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: 'easeInOut' }}
        />
        <motion.line
          x1="0%"
          y1="68%"
          x2="100%"
          y2="64%"
          stroke="url(#line-grad)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 0.3, ease: 'easeInOut' }}
        />
      </svg>

      {/* Floating particles */}
      <Particles />
    </div>
  );
}

function Particles() {
  const particles = Array.from({ length: 18 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: 2 + Math.random() * 4,
    delay: Math.random() * 4,
    duration: 6 + Math.random() * 8,
  }));

  return (
    <div className="absolute inset-0">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-royal/50"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            boxShadow: '0 0 12px rgba(59,130,246,0.7)',
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 0.9, 0.2],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
