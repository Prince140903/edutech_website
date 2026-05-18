'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  Award,
  Briefcase,
  Cpu,
  GraduationCap,
  HeartPulse,
  Languages,
  Laptop,
  Palette,
  Scissors,
  School,
  ShieldCheck,
  UtensilsCrossed,
} from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import GlowCard from '@/components/ui/GlowCard';

type Program = {
  title: string;
  duration: string;
  fee?: string;
  category: string;
};

type Track = {
  id: string;
  label: string;
  description: string;
  badges: string[];
  programs: Program[];
};

const tracks: Track[] = [
  {
    id: 'online',
    label: 'Online Education',
    description:
      'Advance your career through flexible online education. UGC-approved degrees recognised globally and by WES for international higher studies.',
    badges: ['UGC Approved', 'NAAC A++', 'WES Recognised', '94% Placement'],
    programs: [
      { title: 'BBA', duration: '3 years', fee: '₹35,000/yr', category: 'Management' },
      { title: 'MBA', duration: '2 years', fee: '₹45,000/yr', category: 'Management' },
      { title: 'MBA-ACCA', duration: '2 years', fee: '₹55,000/yr', category: 'Management' },
      { title: 'BCA', duration: '3 years', fee: '₹35,000/yr', category: 'Computer Applications' },
      { title: 'BCA (TCS) Data Analytics', duration: '3 years', fee: '₹40,000/yr', category: 'Computer Applications' },
      { title: 'MCA', duration: '2 years', fee: '₹45,000/yr', category: 'Computer Applications' },
      { title: 'MCA (TCS) ML / AR-VR', duration: '2 years', fee: '₹50,000/yr', category: 'Computer Applications' },
      { title: 'B.Com', duration: '3 years', fee: '₹35,000/yr', category: 'Commerce' },
      { title: 'B.Com-ACCA', duration: '3 years', fee: '₹45,000/yr', category: 'Commerce' },
      { title: 'M.Com-FM', duration: '2 years', fee: '₹45,000/yr', category: 'Commerce' },
      { title: 'BA', duration: '3 years', fee: '₹35,000/yr', category: 'Arts & Media' },
      { title: 'BA-JMC', duration: '3 years', fee: '₹40,000/yr', category: 'Arts & Media' },
      { title: 'MA-JMC / Psychology', duration: '2 years', fee: '₹45,000/yr', category: 'Arts & Media' },
      { title: 'M.Sc Data Science', duration: '2 years', fee: '₹50,000/yr', category: 'Data & Tech' },
    ],
  },
  {
    id: 'distance',
    label: 'Distance Education',
    description:
      'Achieve your goals through flexible distance learning. UGC-DEB approved degrees from Tilak Maharashtra Vidyapeeth (NAAC B++) and other accredited institutions.',
    badges: ['UGC-DEB', 'NAAC B++', 'WES Recognised', 'Tilak Maharashtra'],
    programs: [
      { title: 'BA', duration: '3 years', category: 'Undergraduate' },
      { title: 'B.Com', duration: '3 years', category: 'Undergraduate' },
      { title: 'BBA', duration: '3 years', category: 'Undergraduate' },
      { title: 'BCA', duration: '3 years', category: 'Undergraduate' },
      { title: 'BA-JMC', duration: '3 years', category: 'Undergraduate' },
      { title: 'BA-Vernacular', duration: '3 years', category: 'Undergraduate' },
      { title: 'MA', duration: '2 years', category: 'Postgraduate' },
      { title: 'M.Com', duration: '2 years', category: 'Postgraduate' },
      { title: 'MBA', duration: '2 years', category: 'Postgraduate' },
      { title: 'MCA', duration: '2 years', category: 'Postgraduate' },
      { title: 'M.Sc', duration: '2 years', category: 'Postgraduate' },
      { title: 'M.Sc-IT', duration: '2 years', category: 'Postgraduate' },
      { title: 'MA-JMC', duration: '2 years', category: 'Postgraduate' },
      { title: 'MA-PPG', duration: '2 years', category: 'Postgraduate' },
      { title: 'PGDBM', duration: '1 year', category: 'Diploma' },
      { title: 'PGDCA', duration: '1 year', category: 'Diploma' },
    ],
  },
  {
    id: 'vocational',
    label: 'Vocational Courses',
    description:
      'Industry-ready vocational training facilitated through the Board of Open Schooling & Skill Education (BOSSE). One-year diplomas with annual examinations.',
    badges: ['BOSSE', 'Industry Certified', '1-year Diploma', 'Hands-on'],
    programs: [
      { title: 'Medical Lab Technology', duration: '1 year', category: 'Healthcare' },
      { title: 'X-Ray Technology', duration: '1 year', category: 'Healthcare' },
      { title: 'Radiology & Medical Imaging', duration: '1 year', category: 'Healthcare' },
      { title: 'Optometry Technology', duration: '1 year', category: 'Healthcare' },
      { title: 'Patient Care Management', duration: '1 year', category: 'Healthcare' },
      { title: 'Hospital Management', duration: '1 year', category: 'Healthcare' },
      { title: 'Geriatric Care Aide (GCA)', duration: '1 year', category: 'Healthcare' },
      { title: 'Dietetics & Nutrition', duration: '1 year', category: 'Healthcare' },
      { title: 'Front Office Operations', duration: '1 year', category: 'Hospitality' },
      { title: 'Food & Beverage', duration: '1 year', category: 'Hospitality' },
      { title: 'Food Production', duration: '1 year', category: 'Hospitality' },
      { title: 'Graphics Designing', duration: '1 year', category: 'Creative Arts' },
      { title: 'Animation & VFX', duration: '1 year', category: 'Creative Arts' },
      { title: 'Fashion Designing', duration: '1 year', category: 'Creative Arts' },
      { title: 'Hair Dressing', duration: '1 year', category: 'Beauty & Wellness' },
      { title: 'Beauty Therapy', duration: '1 year', category: 'Beauty & Wellness' },
      { title: 'Makeup Artistry', duration: '1 year', category: 'Beauty & Wellness' },
      { title: 'Pre-Primary Teachers (Montessori)', duration: '1 year', category: 'Education' },
    ],
  },
];

const categoryIcons: Record<string, React.ElementType> = {
  Management: Briefcase,
  'Computer Applications': Laptop,
  Commerce: Award,
  'Arts & Media': Languages,
  'Data & Tech': Cpu,
  Undergraduate: GraduationCap,
  Postgraduate: GraduationCap,
  Diploma: Award,
  Healthcare: HeartPulse,
  Hospitality: UtensilsCrossed,
  'Creative Arts': Palette,
  'Beauty & Wellness': Scissors,
  Education: School,
};

export default function Programs() {
  const [active, setActive] = useState<string>('online');
  const track = tracks.find((t) => t.id === active)!;

  return (
    <section id="online" className="relative py-20 md:py-28">
      {/* Section anchors for the other tabs share this section's scroll target */}
      <span id="distance" className="absolute -top-24" aria-hidden />
      <span id="vocational" className="absolute -top-24" aria-hidden />

      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.4em] text-royal">
              All programs
            </span>
            <h2 className="heading-display mt-3 text-4xl md:text-5xl text-balance text-navy">
              Online, Distance &{' '}
              <span className="gold-text">Vocational</span> — all in one place.
            </h2>
            <p className="mt-4 text-muted">
              Browse the full catalogue of degrees, diplomas and certifications
              we help students get admitted to.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="inline-flex rounded-full border border-royal/15 bg-white/70 p-1 backdrop-blur-xl">
              {tracks.map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setActive(t.id);
                    if (typeof window !== 'undefined') {
                      history.replaceState(null, '', `#${t.id}`);
                    }
                  }}
                  className={`relative rounded-full px-4 py-2 text-xs font-medium transition-colors ${
                    active === t.id
                      ? 'text-white'
                      : 'text-navy/70 hover:text-navy'
                  }`}
                >
                  {active === t.id && (
                    <motion.span
                      layoutId="pill"
                      className="absolute inset-0 -z-0 rounded-full bg-navy shadow-glow"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{t.label}</span>
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={track.id}
            initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10"
          >
            <GlowCard className="p-7 md:p-10">
              <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
                <div className="max-w-2xl">
                  <h3 className="heading-display text-2xl md:text-3xl text-navy">
                    {track.label}
                  </h3>
                  <p className="mt-3 text-sm md:text-base text-muted">
                    {track.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {track.badges.map((b) => (
                    <span
                      key={b}
                      className="inline-flex items-center gap-1.5 rounded-full border border-royal/20 bg-pearl px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-navy"
                    >
                      <ShieldCheck className="h-3.5 w-3.5 text-royal" />
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {track.programs.map((p, i) => {
                  const Icon = categoryIcons[p.category] ?? GraduationCap;
                  return (
                    <motion.div
                      key={p.title}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: i * 0.02,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      whileHover={{ y: -3 }}
                      className="group relative overflow-hidden rounded-2xl border border-royal/12 bg-white/80 p-4 backdrop-blur-xl transition-shadow duration-500 hover:shadow-glow"
                    >
                      <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-royal/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />

                      <div className="flex items-start gap-3">
                        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-royal-gradient text-white shadow-glow">
                          <Icon className="h-4 w-4" />
                        </span>
                        <div className="min-w-0">
                          <p className="heading-display text-sm text-navy truncate">
                            {p.title}
                          </p>
                          <p className="text-[10px] uppercase tracking-widest text-muted">
                            {p.category}
                          </p>
                        </div>
                      </div>

                      <div className="mt-3 flex items-center justify-between border-t border-royal/10 pt-3">
                        <span className="text-[11px] text-muted">
                          {p.duration}
                        </span>
                        {p.fee && (
                          <span className="rounded-full bg-pearl px-2.5 py-1 text-[10px] font-semibold text-navy">
                            {p.fee}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </GlowCard>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
