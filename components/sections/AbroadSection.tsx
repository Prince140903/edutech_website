'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, GraduationCap, MapPin } from 'lucide-react';
import {
  AM,
  AU,
  BD,
  CA,
  DE,
  EG,
  GB,
  GE,
  IE,
  KG,
  KZ,
  NP,
  NZ,
  PH,
  RU,
  SG,
  UZ,
  US,
} from 'country-flag-icons/react/3x2';
import { useCallback, useEffect, useRef, useState } from 'react';
import Reveal from '@/components/ui/Reveal';
import { useLeadPopup } from '@/components/providers/LeadCaptureProvider';
import {
  type AbroadCountry,
  mbbsAbroad,
  studyAbroad,
} from '@/lib/abroadData';

type Flag = (props: { className?: string; title?: string }) => JSX.Element;

const FLAGS: Record<string, Flag> = {
  RU,
  GE,
  KZ,
  KG,
  EG,
  UZ,
  PH,
  BD,
  NP,
  AM,
  US,
  GB,
  CA,
  AU,
  DE,
  IE,
  SG,
  NZ,
};

const TABS = [
  { id: 'mbbs', label: 'MBBS Abroad', data: mbbsAbroad },
  { id: 'study', label: 'Study Abroad', data: studyAbroad },
] as const;

type TabId = (typeof TABS)[number]['id'];

export default function AbroadSection() {
  const [tab, setTab] = useState<TabId>('mbbs');
  const [activeIdx, setActiveIdx] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const { openPopup } = useLeadPopup();

  const currentTab = TABS.find((t) => t.id === tab)!;
  const countries = currentTab.data;
  const country = countries[activeIdx] ?? countries[0];

  // Reset active country when tab changes
  useEffect(() => {
    setActiveIdx(0);
    scrollerRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
  }, [tab]);

  const scrollBy = useCallback((dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 280, behavior: 'smooth' });
  }, []);

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-gold/15 blur-3xl" />
        <div className="absolute -bottom-20 right-0 h-80 w-80 rounded-full bg-royal/15 blur-3xl" />
      </div>

      <div className="container-x">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs uppercase tracking-[0.4em] text-royal">
              Abroad admissions
            </span>
            <h2 className="heading-display mt-3 text-3xl sm:text-4xl md:text-5xl text-balance text-navy">
              Study Abroad.{' '}
              <span className="gold-text-vibrant font-bold">
                Shape your tomorrow.
              </span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-muted">
              We help you secure admissions to NMC-recognised medical
              universities and Ivy-league research institutions across the
              world.
            </p>
          </div>
        </Reveal>

        {/* Tab toggle */}
        <Reveal delay={0.08}>
          <div className="mt-8 flex justify-center">
            <div
              role="tablist"
              aria-label="Abroad type"
              className="inline-flex rounded-full border border-royal/15 bg-white/70 p-1 backdrop-blur-xl"
            >
              {TABS.map((t) => (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={tab === t.id}
                  onClick={() => setTab(t.id)}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors sm:px-5 sm:py-2.5 ${
                    tab === t.id ? 'text-white' : 'text-navy/70 hover:text-navy'
                  }`}
                >
                  {tab === t.id && (
                    <motion.span
                      layoutId="abroad-tab-pill"
                      className="absolute inset-0 -z-0 rounded-full bg-navy shadow-glow"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  )}
                  <span className="relative z-10">{t.label}</span>
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Country picker — horizontal scroll with snap */}
        <Reveal delay={0.14}>
          <div className="relative mt-10">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Previous countries"
              className="absolute left-0 top-1/2 z-10 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-royal/15 bg-white shadow-soft hover:shadow-glow md:inline-flex"
            >
              <ChevronLeft className="h-5 w-5 text-navy" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Next countries"
              className="absolute right-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-royal/15 bg-white shadow-soft hover:shadow-glow md:inline-flex"
            >
              <ChevronRight className="h-5 w-5 text-navy" />
            </button>

            <div
              ref={scrollerRef}
              className="scrollbar-hide flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth px-1 pb-2 sm:gap-4"
            >
              {countries.map((c, i) => (
                <CountryChip
                  key={c.code}
                  country={c}
                  active={i === activeIdx}
                  onClick={() => setActiveIdx(i)}
                />
              ))}
            </div>
          </div>
        </Reveal>

        {/* Country detail + university grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${tab}-${country.code}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10"
          >
            <div className="rounded-3xl border border-royal/15 bg-white/70 p-6 backdrop-blur-xl md:p-8">
              <div className="flex flex-col items-start justify-between gap-4 border-b border-royal/10 pb-5 md:flex-row md:items-end">
                <div className="flex items-center gap-4">
                  <FlagBadge code={country.code} large />
                  <div>
                    <h3 className="heading-display text-2xl text-navy">
                      {country.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{country.blurb}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    openPopup(
                      `${currentTab.label} · ${country.name}`,
                    )
                  }
                  className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-shadow hover:shadow-glow-lg"
                >
                  Get in Touch
                </button>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {country.universities.map((u, i) => (
                  <motion.button
                    key={u.name}
                    type="button"
                    onClick={() =>
                      openPopup(`${u.name} · ${country.name}`)
                    }
                    whileHover={{ y: -3 }}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.35,
                      delay: Math.min(i * 0.04, 0.3),
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-royal/15 bg-white p-5 text-left shadow-soft transition-shadow hover:shadow-glow-lg"
                  >
                    {/* Header strip with flag tint */}
                    <div className="relative -mx-5 -mt-5 mb-4 h-24 overflow-hidden bg-gradient-to-br from-navy via-[#1e3a8a] to-royal">
                      <div className="absolute inset-0 opacity-25 mix-blend-screen">
                        <FlagBadge code={country.code} fill />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                      <div className="absolute left-4 top-4">
                        <FlagBadge code={country.code} />
                      </div>
                      <span className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-md">
                        <GraduationCap className="h-4 w-4" />
                      </span>
                    </div>

                    <h4 className="heading-display text-sm text-navy leading-snug line-clamp-2">
                      {u.name}
                    </h4>
                    {u.city && (
                      <p className="mt-1 inline-flex items-center gap-1 text-[11px] text-muted">
                        <MapPin className="h-3 w-3" />
                        {u.city}
                      </p>
                    )}
                    {u.tag && (
                      <span className="mt-3 inline-block self-start rounded-full bg-pearl px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-royal">
                        {u.tag}
                      </span>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function CountryChip({
  country,
  active,
  onClick,
}: {
  country: AbroadCountry;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`group relative flex shrink-0 snap-start flex-col items-center gap-2 rounded-2xl border bg-white/80 px-4 py-3 text-center backdrop-blur-xl transition-all ${
        active
          ? 'border-royal/50 shadow-glow-lg ring-2 ring-royal/15'
          : 'border-royal/15 hover:border-royal/30 hover:shadow-glow'
      }`}
      style={{ minWidth: 110 }}
    >
      <FlagBadge code={country.code} />
      <span
        className={`text-sm font-medium ${
          active ? 'text-navy' : 'text-ink/80 group-hover:text-navy'
        }`}
      >
        {country.name}
      </span>
    </button>
  );
}

function FlagBadge({
  code,
  large,
  fill,
}: {
  code: string;
  large?: boolean;
  fill?: boolean;
}) {
  const Flag = FLAGS[code];
  if (!Flag) {
    return (
      <span
        className={`inline-flex items-center justify-center rounded-md bg-pearl text-xs font-semibold text-navy ${
          large ? 'h-12 w-16' : 'h-9 w-12'
        }`}
      >
        {code}
      </span>
    );
  }

  if (fill) {
    return (
      <Flag className="absolute inset-0 h-full w-full object-cover" />
    );
  }

  return (
    <span
      className={`relative inline-flex overflow-hidden rounded-md shadow-soft ring-1 ring-black/5 ${
        large ? 'h-12 w-16' : 'h-9 w-12'
      }`}
    >
      <Flag className="h-full w-full object-cover" title={code} />
    </span>
  );
}
