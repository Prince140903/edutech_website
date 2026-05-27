'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Stars } from 'lucide-react';
import AnimatedBackdrop from '@/components/effects/AnimatedBackdrop';
import MagneticButton from '@/components/ui/MagneticButton';
import Reveal from '@/components/ui/Reveal';
import { useLeadPopup } from '@/components/providers/LeadCaptureProvider';

export default function Hero() {
  const { openPopup } = useLeadPopup();
  return (
    <section className="relative isolate overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-24 md:pt-44 md:pb-32">
      <AnimatedBackdrop />

      <div className="container-x relative z-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-royal/25 bg-white/60 px-3 py-1.5 text-[10px] sm:text-xs font-medium tracking-wide text-navy backdrop-blur-xl">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              MBBS Abroad ·{' '}
              <span className="gold-text font-semibold">Study Abroad</span> ·
              Direct Admissions
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="heading-display mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-balance text-navy">
              <span className="gold-text-vibrant font-bold">
                Shape Your Tomorrow
              </span>
              .
              <br className="hidden md:block" /> Admissions to top{' '}
              <span className="royal-text">universities</span>.
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.4em] text-royal">
              Study Abroad · MBBS Abroad · India admissions
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-5 sm:mt-6 max-w-xl text-balance text-sm sm:text-base md:text-lg text-muted">
              Trusted admission consultants for medical, engineering, law,
              education and pharmacy colleges across India and overseas. Fill
              the short form — our team gets back within a working hour.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
              <MagneticButton
                variant="primary"
                className="!px-7 !py-3.5"
                onClick={() => openPopup()}
              >
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                Get in Touch
              </MagneticButton>
              <MagneticButton
                variant="ghost"
                className="!px-7 !py-3.5"
                onClick={() => {
                  document
                    .getElementById('get-in-touch')
                    ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                See more
              </MagneticButton>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-muted">
              <Trust label="UGC Approved" />
              <Trust label="100+ Partner Institutes" />
              <Trust label="4.9 ★ Rated" />
              <Trust label="24/7 Support" />
            </div>
          </Reveal>
        </div>

        {/* Floating preview card */}
        <Reveal delay={0.45}>
          <div className="relative mx-auto mt-20 max-w-5xl">
            <FloatingHeroCard />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Trust({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <Stars className="h-3.5 w-3.5 text-gold" />
      {label}
    </span>
  );
}

function FloatingHeroCard() {
  return (
    <motion.div
      initial={{ y: 30 }}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      className="relative"
    >
      <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-royal/20 blur-3xl" />
      <div className="rounded-[2rem] border border-royal/20 bg-white/70 p-2.5 shadow-glow-lg backdrop-blur-2xl">
        <div className="rounded-[1.6rem] bg-gradient-to-br from-pearl via-white to-ice p-6 md:p-8">
          <div className="flex items-center justify-between border-b border-royal/10 pb-4">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-gold/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
              <span className="ml-3 text-xs text-muted">
                glideeducation.in — admissions
              </span>
            </div>
            <span className="text-xs text-muted">Live</span>
          </div>

          <div className="mt-6 grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-4 space-y-3">
              <SidebarItem active label="Overview" />
              <SidebarItem label="My Application" />
              <SidebarItem label="Documents" />
              <SidebarItem label="Partner Universities" />
              <SidebarItem label="Messages" />
            </div>

            <div className="col-span-12 md:col-span-8 space-y-4">
              <div className="rounded-2xl border border-royal/15 bg-white/80 p-5 shadow-glow">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted">
                      Admission status
                    </p>
                    <h3 className="heading-display mt-1 text-xl text-navy">
                      B.Tech · DY Patil University
                    </h3>
                  </div>
                  <span className="rounded-full bg-gold-gradient px-3 py-1 text-xs font-semibold text-navy">
                    Verified
                  </span>
                </div>
                <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-pearl">
                  <motion.div
                    initial={{ width: '0%' }}
                    animate={{ width: '72%' }}
                    transition={{ duration: 2, delay: 0.6 }}
                    className="h-full rounded-full bg-royal-gradient"
                  />
                </div>
                <p className="mt-2 text-xs text-muted">
                  72% — Documents under final review
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <MiniStat label="Documents verified" value="6 / 8" />
                <MiniStat label="Response time" value="< 1 hr" gold />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SidebarItem({ label, active }: { label: string; active?: boolean }) {
  return (
    <div
      className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors ${
        active
          ? 'bg-royal/10 text-navy shadow-glow'
          : 'text-muted hover:bg-pearl'
      }`}
    >
      <span
        className={`h-2 w-2 rounded-full ${
          active ? 'bg-royal' : 'bg-muted/40'
        }`}
      />
      {label}
    </div>
  );
}

function MiniStat({
  label,
  value,
  gold,
}: {
  label: string;
  value: string;
  gold?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-royal/15 bg-white/80 p-4">
      <p className="text-xs uppercase tracking-widest text-muted">{label}</p>
      <p
        className={`heading-display mt-1 text-2xl ${
          gold ? 'gold-text' : 'text-navy'
        }`}
      >
        {value}
      </p>
    </div>
  );
}
