'use client';

import { ArrowUpRight, BookOpen, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import GlowCard from '@/components/ui/GlowCard';
import Reveal from '@/components/ui/Reveal';

const courses = [
  {
    tag: 'Engineering',
    title: 'Engineering',
    desc: 'B.Tech, M.Tech & Diplomas in CS, Mechanical, Electronics & Communication.',
    programs: ['B.Tech (4 yrs)', 'M.Tech', 'Diploma', 'AI / ML / Data Science'],
    exam: 'JEE Main · JEE Advanced · State CETs',
    accred: 'AICTE',
    gradient: 'from-[#3B82F6] to-[#0B1F4D]',
    accent: '#3B82F6',
  },
  {
    tag: 'Medical',
    title: 'Medical',
    desc: 'MBBS (5.5 yrs incl. internship) and MD programs at NMC-approved institutions.',
    programs: ['MBBS (5.5 yrs)', 'MD', 'Clinical rotations', 'India + Overseas'],
    exam: 'NEET (mandatory) · 10+2 with PCB',
    accred: 'NMC',
    gradient: 'from-[#E7B94C] to-[#F3D27A]',
    accent: '#E7B94C',
  },
  {
    tag: 'Management',
    title: 'Management',
    desc: 'BBA, MBA & MBA-ACCA with Marketing, Finance and HR specializations.',
    programs: ['BBA', 'MBA (2 yrs)', 'MBA-ACCA', 'PGDBM'],
    exam: 'CAT · MAT · XAT · University tests',
    accred: 'AICTE',
    gradient: 'from-[#1e3a8a] to-[#3B82F6]',
    accent: '#3B82F6',
  },
  {
    tag: 'Law',
    title: 'Law',
    desc: 'BA LLB, LLB and LLM with Corporate, Criminal and Constitutional tracks.',
    programs: ['BA LLB (5 yrs)', 'LLB (3 yrs)', 'LLM', 'Corporate / Criminal'],
    exam: 'CLAT · LSAT · University tests',
    accred: 'BCI',
    gradient: 'from-[#0B1F4D] to-[#1e3a8a]',
    accent: '#3B82F6',
  },
  {
    tag: 'Education',
    title: 'Education',
    desc: 'B.Ed, M.Ed and B.P.Ed — pedagogy, leadership and physical education tracks.',
    programs: ['B.Ed (2 yrs)', 'M.Ed (2 yrs)', 'B.P.Ed', 'Pre-Primary (Montessori)'],
    exam: 'State CETs · Teaching Aptitude Test',
    accred: 'NCTE',
    gradient: 'from-[#F3D27A] to-[#E7B94C]',
    accent: '#E7B94C',
  },
  {
    tag: 'Pharmacy',
    title: 'Pharmacy',
    desc: 'B.Pharm & M.Pharm with Clinical, Research and Industrial Pharmacy paths.',
    programs: ['B.Pharm (4 yrs)', 'M.Pharm', 'Clinical Pharmacy', 'Pharma Research'],
    exam: 'GPAT · NIPER JEE · State tests',
    accred: 'PCI',
    gradient: 'from-[#3B82F6] to-[#60A5FA]',
    accent: '#3B82F6',
  },
];

export default function Courses() {
  return (
    <section id="courses" className="relative py-20 md:py-28">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.4em] text-royal">
              Regular Admission
            </span>
            <h2 className="heading-display mt-3 text-4xl md:text-5xl text-balance text-navy">
              Admissions across{' '}
              <span className="gold-text">every stream</span> that matters.
            </h2>
            <p className="mt-4 text-muted">
              From Engineering to Medical, Management to Law — we help you
              secure admissions to top universities in India and overseas.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-full border border-royal/20 bg-white/60 px-5 py-2.5 text-sm font-medium text-navy backdrop-blur-xl transition-all hover:border-royal/40 hover:shadow-glow"
            >
              Browse all
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.07}>
              <GlowCard
                float={i % 3 === 1}
                className="h-full p-5"
              >
                <CourseImage gradient={c.gradient} accent={c.accent} />

                <div className="mt-5 px-1">
                  <span className="inline-block rounded-full bg-pearl px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-royal">
                    {c.tag}
                  </span>
                  <h3 className="heading-display mt-3 text-xl text-navy">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {c.desc}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {c.programs.map((p) => (
                      <li
                        key={p}
                        className="rounded-full border border-royal/15 bg-white/70 px-2.5 py-1 text-[10px] font-medium text-navy/80 backdrop-blur-md"
                      >
                        {p}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex items-start gap-2 text-[11px] text-muted">
                    <BookOpen className="h-3.5 w-3.5 shrink-0 mt-0.5 text-royal" />
                    <span>{c.exam}</span>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-royal/10 pt-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-pearl px-3 py-1 text-[10px] font-semibold text-navy">
                      <ShieldCheck className="h-3.5 w-3.5 text-royal" />
                      {c.accred} Approved
                    </span>
                    <motion.span
                      whileHover={{ x: 4 }}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-navy text-white shadow-glow transition-shadow group-hover:shadow-glow-lg"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </motion.span>
                  </div>
                </div>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CourseImage({
  gradient,
  accent,
}: {
  gradient: string;
  accent: string;
}) {
  return (
    <div
      className={`relative aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br ${gradient}`}
    >
      <div className="absolute inset-0">
        <div
          className="absolute -bottom-10 -right-10 h-44 w-44 rounded-full opacity-40 blur-3xl"
          style={{ background: accent }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_60%)]" />
      </div>

      <motion.div
        className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110"
        whileHover={{ scale: 1.08 }}
      >
        <svg
          viewBox="0 0 200 120"
          className="absolute inset-0 h-full w-full opacity-60"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id={`grid-${accent}`}
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="200" height="120" fill={`url(#grid-${accent})`} />
        </svg>
      </motion.div>

      <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur-md">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" />
        Admissions open
      </div>
    </div>
  );
}
