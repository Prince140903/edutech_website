'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ComponentProps, ReactNode, useRef } from 'react';
import { cn } from '@/lib/cn';

type Props = {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'gold' | 'ghost';
  strength?: number;
} & Omit<ComponentProps<typeof motion.button>, 'children'>;

const SPRING = { stiffness: 400, damping: 28, mass: 0.5 } as const;

export default function MagneticButton({
  children,
  className,
  variant = 'primary',
  strength = 0.22,
  ...rest
}: Props) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, SPRING);
  const sy = useSpring(y, SPRING);

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
      style={{ x: sx, y: sy, willChange: 'transform' }}
      className={cn(base, className)}
      {...rest}
    >
      <span className="pointer-events-none inline-flex items-center gap-2">
        {children}
      </span>
    </motion.button>
  );
}
