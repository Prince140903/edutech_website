'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

const stories = [
  {
    quote:
      'The team helped me shortlist colleges, prepared all documents and got me admitted to a B.Tech program I genuinely wanted. The support was 24/7 — even on weekends.',
    name: 'Priya R.',
    role: 'B.Tech · DY Patil University',
    initials: 'PR',
    accent: '#3B82F6',
  },
  {
    quote:
      'I was confused between online MBA and regular MBA. The career guidance session was eye-opening — and within 3 weeks, my admission was confirmed.',
    name: 'Aditya M.',
    role: 'MBA · Online Program',
    initials: 'AM',
    accent: '#E7B94C',
  },
  {
    quote:
      'As a working professional pursuing MCA online, the flexibility and continuous support made finishing my degree actually feasible. UGC-approved, globally recognised.',
    name: 'Ritika S.',
    role: 'MCA · Data Analytics (TCS)',
    initials: 'RS',
    accent: '#3B82F6',
  },
  {
    quote:
      'From a tier-3 city, I never imagined an MBBS seat was possible. The medical admissions desk guided every single step — paperwork to seat allotment.',
    name: 'Rohit K.',
    role: 'MBBS · NMC Approved',
    initials: 'RK',
    accent: '#E7B94C',
  },
];

const logos = [
  'UGC Approved',
  'AICTE',
  'NMC',
  'BCI',
  'NCTE',
  'PCI',
  'WES Recognised',
  'NAAC A++',
];

export default function Stories() {
  return (
    <section id="stories" className="relative py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs uppercase tracking-[0.4em] text-royal">
              Student stories
            </span>
            <h2 className="heading-display mt-3 text-4xl md:text-5xl text-balance text-navy">
              Real admissions.{' '}
              <span className="gold-text">Real futures.</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {stories.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group relative h-full overflow-hidden rounded-3xl border border-royal/15 bg-white/70 p-8 backdrop-blur-xl transition-shadow duration-500 hover:shadow-glow-lg"
              >
                <Quote className="absolute right-6 top-6 h-12 w-12 text-royal/10" />

                <p className="relative text-lg leading-relaxed text-navy">
                  "{s.quote}"
                </p>

                <div className="mt-8 flex items-center gap-4 border-t border-royal/10 pt-5">
                  <div
                    className="inline-flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-semibold text-white shadow-glow"
                    style={{
                      background: `linear-gradient(135deg, ${s.accent}, #0B1F4D)`,
                    }}
                  >
                    {s.initials}
                  </div>
                  <div>
                    <p className="heading-display text-base text-navy">
                      {s.name}
                    </p>
                    <p className="text-xs text-muted">{s.role}</p>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Marquee of partner logos */}
        <Reveal delay={0.2}>
          <div className="mt-16">
            <p className="mb-6 text-center text-xs uppercase tracking-[0.4em] text-muted">
              Programs accredited & recognised by
            </p>
            <div className="relative overflow-hidden blur-mask-fade">
              <div className="marquee">
                {[...logos, ...logos].map((logo, i) => (
                  <div
                    key={`${logo}-${i}`}
                    className="heading-display flex shrink-0 items-center px-10 text-2xl md:text-3xl text-navy/40 transition-colors hover:text-navy"
                  >
                    {logo}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
