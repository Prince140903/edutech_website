'use client';

import { motion } from 'framer-motion';
import { ComponentProps, ReactNode, useRef } from 'react';
import { cn } from '@/lib/cn';

type Props = {
  children: ReactNode;
  className?: string;
  float?: boolean;
  tiltStrength?: number;
} & Omit<ComponentProps<typeof motion.div>, 'children'>;

export default function GlowCard({
  children,
  className,
  float = false,
  tiltStrength = 5,
  ...rest
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const pending = useRef<{ x: number; y: number } | null>(null);

  const flush = () => {
    const el = ref.current;
    const p = pending.current;
    rafRef.current = null;
    pending.current = null;
    if (!el || !p) return;
    el.style.setProperty('--mx', `${p.x}%`);
    el.style.setProperty('--my', `${p.y}%`);
    const rx = (p.y - 50) / 50;
    const ry = (50 - p.x) / 50;
    el.style.setProperty('--rx', `${rx * tiltStrength}deg`);
    el.style.setProperty('--ry', `${ry * tiltStrength}deg`);
  };

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    pending.current = {
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
    };
    if (rafRef.current === null) {
      rafRef.current = requestAnimationFrame(flush);
    }
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    pending.current = null;
    el.style.setProperty('--rx', `0deg`);
    el.style.setProperty('--ry', `0deg`);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn(
        'group relative overflow-hidden rounded-3xl glass glow-border transition-transform duration-500 ease-out',
        float && 'animate-float-glow',
        className,
      )}
      style={{
        transform:
          'perspective(1000px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))',
        willChange: 'transform',
      }}
      {...rest}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(420px circle at var(--mx,50%) var(--my,50%), rgba(59,130,246,0.18), transparent 60%)',
        }}
      />
      <div className="relative">{children}</div>
    </motion.div>
  );
}
