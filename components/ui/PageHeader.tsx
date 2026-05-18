'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import AnimatedBackdrop from '@/components/effects/AnimatedBackdrop';
import Reveal from '@/components/ui/Reveal';

type Crumb = { label: string; href?: string };

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  badges?: string[];
  crumbs?: Crumb[];
  children?: React.ReactNode;
};

export default function PageHeader({
  eyebrow,
  title,
  description,
  badges,
  crumbs,
  children,
}: Props) {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
      <AnimatedBackdrop />

      <div className="container-x relative z-10">
        {/* Breadcrumbs */}
        {crumbs && crumbs.length > 0 && (
          <Reveal>
            <nav
              aria-label="Breadcrumb"
              className="mb-7 inline-flex items-center gap-1.5 rounded-full border border-royal/15 bg-white/60 px-3.5 py-1.5 text-xs text-muted backdrop-blur-xl"
            >
              <Link
                href="/"
                className="inline-flex items-center gap-1 text-navy hover:text-royal"
              >
                <Home className="h-3.5 w-3.5" />
                Home
              </Link>
              {crumbs.map((c, i) => (
                <span key={i} className="inline-flex items-center gap-1.5">
                  <ChevronRight className="h-3 w-3 opacity-50" />
                  {c.href ? (
                    <Link
                      href={c.href}
                      className="text-navy/80 hover:text-royal"
                    >
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-navy">{c.label}</span>
                  )}
                </span>
              ))}
            </nav>
          </Reveal>
        )}

        <div className="max-w-4xl">
          {eyebrow && (
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-royal/25 bg-white/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-royal backdrop-blur-xl">
                {eyebrow}
              </span>
            </Reveal>
          )}

          <Reveal delay={0.05}>
            <motion.h1 className="heading-display mt-5 text-4xl md:text-6xl text-balance text-navy">
              {title}
            </motion.h1>
          </Reveal>

          {description && (
            <Reveal delay={0.12}>
              <p className="mt-5 max-w-2xl text-balance text-base md:text-lg text-muted">
                {description}
              </p>
            </Reveal>
          )}

          {badges && badges.length > 0 && (
            <Reveal delay={0.18}>
              <div className="mt-7 flex flex-wrap gap-2">
                {badges.map((b) => (
                  <span
                    key={b}
                    className="inline-flex items-center gap-1.5 rounded-full border border-royal/20 bg-pearl px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-navy"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </Reveal>
          )}

          {children && (
            <Reveal delay={0.22}>
              <div className="mt-8">{children}</div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
