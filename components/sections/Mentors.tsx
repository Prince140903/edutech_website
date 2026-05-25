'use client';

import { ChevronLeft, ChevronRight, Linkedin, Star } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import Reveal from '@/components/ui/Reveal';
import { contact } from '@/lib/data';

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
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateState = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const cardWidth = (el.firstElementChild as HTMLElement | null)?.offsetWidth ?? 0;
    const gap = 16;
    const stride = cardWidth + gap;
    setActive(stride ? Math.round(el.scrollLeft / stride) : 0);
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateState();
    el.addEventListener('scroll', updateState, { passive: true });
    window.addEventListener('resize', updateState);
    return () => {
      el.removeEventListener('scroll', updateState);
      window.removeEventListener('resize', updateState);
    };
  }, [updateState]);

  const scrollByCard = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const cardWidth = (el.firstElementChild as HTMLElement | null)?.offsetWidth ?? el.clientWidth;
    el.scrollBy({ left: (cardWidth + 16) * direction, behavior: 'smooth' });
  };

  const goTo = (i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const cardWidth = (el.firstElementChild as HTMLElement | null)?.offsetWidth ?? el.clientWidth;
    el.scrollTo({ left: (cardWidth + 16) * i, behavior: 'smooth' });
  };

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
              Counselling Cells
            </span>
            <h2 className="heading-display mt-3 text-3xl sm:text-4xl md:text-5xl text-balance text-navy">
              Dedicated experts for{' '}
              <span className="gold-text">every stream</span>.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-muted">
              Stream-specific counselling desks that handle eligibility,
              shortlisting, applications and documentation — so you focus only
              on your future.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex gap-2">
              <button
                onClick={() => scrollByCard(-1)}
                disabled={!canPrev}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-royal/20 bg-white/70 text-navy backdrop-blur-xl transition-all hover:border-royal/40 hover:shadow-glow disabled:opacity-40"
                aria-label="Previous counselling cell"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => scrollByCard(1)}
                disabled={!canNext}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-royal/20 bg-white/70 text-navy backdrop-blur-xl transition-all hover:border-royal/40 hover:shadow-glow disabled:opacity-40"
                aria-label="Next counselling cell"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </Reveal>
        </div>

        {/* Scroll-snap carousel. Bleeds out to the section edges so the peek
            card on mobile feels natural and tap targets stay full width.
            One card visible on mobile, two on sm, three on lg. */}
        <div
          ref={scrollerRef}
          className="scrollbar-hide -mx-6 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-6 pb-4 md:-mx-10 md:gap-6 md:px-10"
          aria-label="Counselling cells carousel"
        >
          {mentors.map((m) => (
            <div
              key={m.name}
              className="snap-start shrink-0 basis-[88%] sm:basis-[calc((100%-1.5rem)/2)] lg:basis-[calc((100%-3rem)/3)]"
            >
              <MentorCard mentor={m} />
            </div>
          ))}
        </div>

        {/* Dots — only show on mobile where they're useful */}
        <div className="mt-6 flex justify-center gap-1.5 sm:hidden">
          {mentors.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to card ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === active ? 'w-6 bg-navy' : 'w-1.5 bg-muted/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function MentorCard({ mentor }: { mentor: (typeof mentors)[number] }) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-royal/15 bg-white/80 p-5 sm:p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-glow-lg">
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-30 blur-3xl transition-opacity group-hover:opacity-60"
        style={{ background: mentor.accent }}
      />

      <div className="flex items-start gap-4">
        <div
          className="relative inline-flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl text-base sm:text-lg font-semibold text-white shadow-glow"
          style={{
            background: `linear-gradient(135deg, ${mentor.accent}, #0B1F4D)`,
          }}
        >
          {mentor.initials}
          <span className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-400" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="heading-display text-base sm:text-lg text-navy leading-tight">
            {mentor.name}
          </h3>
          <p className="mt-0.5 text-xs text-muted">{mentor.role}</p>
          <div className="mt-1.5 inline-flex items-center gap-1 text-xs text-navy">
            <Star className="h-3.5 w-3.5 fill-gold text-gold" />
            <span className="font-semibold">{mentor.rating}</span>
            <span className="text-muted">· verified</span>
          </div>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted">{mentor.bio}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {mentor.tags.map((t) => (
          <span
            key={t}
            className="rounded-full bg-pearl px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-royal"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-5">
        <div className="flex items-center justify-between gap-3 border-t border-royal/10 pt-4">
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
            href={contact.phoneHref}
            className="inline-flex items-center gap-1 whitespace-nowrap text-xs font-semibold text-royal hover:text-navy"
          >
            Talk to counsellor →
          </a>
        </div>
      </div>
    </div>
  );
}
