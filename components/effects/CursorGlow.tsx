'use client';

import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced-motion users — skip the constant rAF loop.
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let raf = 0;
    let dirty = false;
    let visible = false;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      dirty = true;
      if (!visible) {
        el.style.opacity = '1';
        visible = true;
      }
    };

    const onLeave = () => {
      el.style.opacity = '0';
      visible = false;
    };

    const tick = () => {
      if (dirty) {
        currentX += (targetX - currentX) * 0.18;
        currentY += (targetY - currentY) * 0.18;
        // Stop scheduling work once we're within 0.5px — saves continuous frames.
        if (
          Math.abs(targetX - currentX) < 0.5 &&
          Math.abs(targetY - currentY) < 0.5
        ) {
          currentX = targetX;
          currentY = targetY;
          dirty = false;
        }
        el.style.transform = `translate3d(${currentX - 210}px, ${currentY - 210}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseleave', onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="cursor-glow"
      style={{ opacity: 0 }}
      aria-hidden
    />
  );
}
