'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ComponentProps, ReactNode, useRef } from 'react';
import { cn } from '@/lib/cn';

type Props = {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'gold' | 'ghost';
  strength?: number;
} & Omit<ComponentProps<typeof motion.button>, 'children'>;

export default function MagneticButton({
  children,
  className,
  variant = 'primary',
  strength = 0.35,
  ...rest
}: Props) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.6 });
  const rotX = useTransform(sy, [-30, 30], [6, -6]);
  const rotY = useTransform(sx, [-30, 30], [-6, 6]);

  const onMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    x.set(dx * strength);
    y.set(dy * strength);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    variant === 'gold'
      ? 'btn-gold'
      : variant === 'ghost'
      ? 'btn-ghost'
      : 'btn-primary';

  return (
    <motion.button
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy, rotateX: rotX, rotateY: rotY }}
      className={cn(base, className)}
      {...rest}
    >
      <motion.span
        style={{ x: useTransform(sx, (v) => v * 0.4), y: useTransform(sy, (v) => v * 0.4) }}
        className="pointer-events-none inline-flex items-center gap-2"
      >
        {children}
      </motion.span>
    </motion.button>
  );
}
