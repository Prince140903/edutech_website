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
  tiltStrength = 6,
  ...rest
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    el.style.setProperty('--mx', `${x}%`);
    el.style.setProperty('--my', `${y}%`);
    const rx = (y - 50) / 50;
    const ry = (50 - x) / 50;
    el.style.setProperty('--rx', `${rx * tiltStrength}deg`);
    el.style.setProperty('--ry', `${ry * tiltStrength}deg`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
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
