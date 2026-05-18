'use client';

import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Linkedin, Star } from 'lucide-react';
import { useState } from 'react';
import Reveal from '@/components/ui/Reveal';

const mentors = [
  {
    name: 'Engineering Admissions Cell',
    role: 'B.Tech · M.Tech · Diploma',
    bio: 'End-to-end guidance across engineering streams — from college shortlisting and JEE/CET counselling to document verification and seat allotment.',
    initials: 'EN',
    rating: 4.9,
    tags: ['B.Tech', 'M.Tech', 'Diploma'],
    accent: '#3B82F6',
  },
  {
    name: 'Medical Admissions Desk',
    role: 'MBBS · MD · Allied Health',
    bio: 'Specialised counselling for medical aspirants targeting reputed Indian and overseas institutions with NMC-approved programs.',
    initials: 'MD',
    rating: 5.0,
    tags: ['MBBS', 'MD', 'NMC'],
    accent: '#E7B94C',
  },
  {
    name: 'Management Programs Team',
    role: 'BBA · MBA · MBA-ACCA',
    bio: 'Mentors for future business leaders. Helping students choose between regular, online and distance MBA paths suited to their goals.',
    initials: 'MG',
    rating: 4.9,
    tags: ['BBA', 'MBA', 'ACCA'],
    accent: '#3B82F6',
  },
  {
    name: 'Law & Legal Studies',
    role: 'LLB · LLM · Integrated Law',
    bio: 'Guidance for legal education aspirants — covering BCI-recognised colleges, integrated five-year programs and entrance preparation.',
    initials: 'LL',
    rating: 4.8,
    tags: ['LLB', 'LLM', 'BCI'],
    accent: '#E7B94C',
  },
  {
    name: 'Pharmacy & Allied Sciences',
    role: 'B.Pharm · M.Pharm · D.Pharm',
    bio: 'PCI-approved program advisors with deep insight into pharmacy admissions, industry alignment and career outcomes.',
    initials: 'PH',
    rating: 4.9,
    tags: ['B.Pharm', 'M.Pharm', 'PCI'],
    accent: '#3B82F6',
  },
];

export default function Mentors() {
  const [index, setIndex] = useState(0);
  const visible = 3;
  const max = mentors.length - visible;

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(max, i + 1));

  return (
    <section id="mentors" className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-royal/20 blur-3xl" />
      </div>

      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.4em] text-royal">
              Vocational & Counselling Cells
            </span>
            <h2 className="heading-display mt-3 text-4xl md:text-5xl text-balance text-navy">
              Dedicated experts for{' '}
              <span className="gold-text">every stream</span>.
            </h2>
            <p className="mt-4 text-muted">
              Stream-specific counselling desks that handle eligibility,
              shortlisting, applications and documentation — so you focus only
              on your future.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex gap-2">
              <button
                onClick={prev}
                disabled={index === 0}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-royal/20 bg-white/70 text-navy backdrop-blur-xl transition-all hover:border-royal/40 hover:shadow-glow disabled:opacity-40"
                aria-label="Previous cell"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                disabled={index >= max}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-royal/20 bg-white/70 text-navy backdrop-blur-xl transition-all hover:border-royal/40 hover:shadow-glow disabled:opacity-40"
                aria-label="Next cell"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 overflow-hidden">
          <motion.div
            animate={{ x: `${-(index * (100 / visible))}%` }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex gap-6"
            style={{ width: `${(mentors.length * 100) / visible}%` }}
          >
            {mentors.map((m) => (
              <div
                key={m.name}
                className="basis-full md:basis-1/3 lg:basis-1/3"
                style={{ flex: '0 0 calc(100% / 3 - 1rem)' }}
              >
                <MentorCard mentor={m} />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-6 flex justify-center gap-2 md:hidden">
          {Array.from({ length: max + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? 'w-6 bg-navy' : 'w-1.5 bg-muted/40'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function MentorCard({
  mentor,
}: {
  mentor: (typeof mentors)[number];
}) {
  return (
    <div className="group relative h-full overflow-hidden rounded-3xl border border-royal/15 bg-white/70 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-glow-lg">
      <div
        className="absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-30 blur-3xl transition-opacity group-hover:opacity-60"
        style={{ background: mentor.accent }}
      />

      <div className="flex items-start gap-4">
        <div
          className="relative inline-flex h-16 w-16 items-center justify-center rounded-2xl text-lg font-semibold text-white shadow-glow"
          style={{
            background: `linear-gradient(135deg, ${mentor.accent}, #0B1F4D)`,
          }}
        >
          {mentor.initials}
          <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-white bg-emerald-400" />
        </div>
        <div>
          <h3 className="heading-display text-lg text-navy">{mentor.name}</h3>
          <p className="text-xs text-muted">{mentor.role}</p>
          <div className="mt-1 inline-flex items-center gap-1 text-xs text-navy">
            <Star className="h-3.5 w-3.5 fill-gold text-gold" />
            <span className="font-semibold">{mentor.rating}</span>
            <span className="text-muted">(verified intake)</span>
          </div>
        </div>
      </div>

      <p className="mt-5 text-sm leading-relaxed text-muted">{mentor.bio}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {mentor.tags.map((t) => (
          <span
            key={t}
            className="rounded-full bg-pearl px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-royal"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-royal/10 pt-4">
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-navy hover:text-royal"
        >
          <Linkedin className="h-3.5 w-3.5" />
          LinkedIn
        </a>
        <a
          href="tel:+917400140759"
          className="inline-flex items-center gap-1 text-xs font-semibold text-royal hover:text-navy"
        >
          Talk to a counsellor →
        </a>
      </div>
    </div>
  );
}
