'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Laptop2, Mailbox, Wrench } from 'lucide-react';
import GlowCard from '@/components/ui/GlowCard';
import Reveal from '@/components/ui/Reveal';
import {
  distancePrograms,
  onlinePrograms,
  vocationalPrograms,
} from '@/lib/data';

const tracks = [
  {
    href: '/online',
    label: 'Online Education',
    description:
      'UGC-approved online degrees from NAAC A++ institutions. Flexible 24/7 access.',
    icon: Laptop2,
    badges: ['UGC', 'WES Recognised'],
    count: onlinePrograms.length,
    accent: '#3B82F6',
  },
  {
    href: '/distance',
    label: 'Distance Education',
    description:
      'UGC-DEB approved degrees from Tilak Maharashtra Vidyapeeth & partners.',
    icon: Mailbox,
    badges: ['UGC-DEB', 'NAAC B++'],
    count: distancePrograms.length,
    accent: '#E7B94C',
  },
  {
    href: '/vocational',
    label: 'Vocational Courses',
    description:
      '1-year industry-ready diplomas through Board of Open Schooling & Skill Education.',
    icon: Wrench,
    badges: ['BOSSE', 'Hands-on'],
    count: vocationalPrograms.length,
    accent: '#3B82F6',
  },
];

export default function ProgramsPreview() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.4em] text-royal">
              Programs
            </span>
            <h2 className="heading-display mt-3 text-4xl md:text-5xl text-balance text-navy">
              Online, Distance &{' '}
              <span className="gold-text">Vocational</span> — your way.
            </h2>
            <p className="mt-4 text-muted">
              Three flexible pathways into accredited degrees and industry-ready
              certifications.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {tracks.map((t, i) => (
            <Reveal key={t.href} delay={i * 0.08}>
              <GlowCard className="h-full p-7" float={i === 1}>
                <div className="flex items-start justify-between">
                  <span
                    className="inline-flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-glow"
                    style={{
                      background: `linear-gradient(135deg, ${t.accent}, #0B1F4D)`,
                    }}
                  >
                    <t.icon className="h-5 w-5" />
                  </span>
                  <span className="rounded-full bg-pearl px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-royal">
                    {t.count} programs
                  </span>
                </div>

                <h3 className="heading-display mt-5 text-xl text-navy">
                  {t.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {t.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {t.badges.map((b) => (
                    <span
                      key={b}
                      className="rounded-full border border-royal/15 bg-white/70 px-2.5 py-1 text-[10px] font-semibold text-navy"
                    >
                      {b}
                    </span>
                  ))}
                </div>

                <Link
                  href={t.href}
                  className="mt-6 inline-flex items-center justify-between gap-2 rounded-2xl border border-royal/15 bg-white/60 px-4 py-3 text-sm font-medium text-navy transition-all hover:border-royal/40 hover:bg-white hover:shadow-glow"
                >
                  View all programs
                  <motion.span whileHover={{ rotate: 45 }} className="inline-block">
                    <ArrowUpRight className="h-4 w-4" />
                  </motion.span>
                </Link>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
