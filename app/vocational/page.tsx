import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  HeartPulse,
  Palette,
  Scissors,
  School,
  UtensilsCrossed,
} from 'lucide-react';
import PageHeader from '@/components/ui/PageHeader';
import ProgramGrid from '@/components/ui/ProgramGrid';
import Reveal from '@/components/ui/Reveal';
import GlowCard from '@/components/ui/GlowCard';
import { vocationalPrograms } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Vocational Course Admission Consultant — BOSSE Approved Diplomas',
  description:
    'Glide Education guides admissions to BOSSE-approved 1-year vocational diplomas across Healthcare (Lab Tech, Radiology), Hospitality, Animation & VFX, Beauty & Wellness and Pre-Primary Teacher Training.',
  keywords: [
    'vocational course admission consultant',
    'BOSSE admission',
    'medical lab technology diploma',
    'animation VFX diploma',
    'hospitality course admission',
    'Montessori teacher training admission',
    'vocational diploma Mumbai',
  ],
  alternates: { canonical: '/vocational' },
};

const categories = [
  {
    name: 'Healthcare',
    icon: HeartPulse,
    desc: 'Lab tech, imaging, patient care, dietetics & hospital management.',
  },
  {
    name: 'Hospitality',
    icon: UtensilsCrossed,
    desc: 'Front office, F&B and food production for the global hospitality industry.',
  },
  {
    name: 'Creative Arts',
    icon: Palette,
    desc: 'Graphics, animation, VFX and fashion — career-ready creative training.',
  },
  {
    name: 'Beauty & Wellness',
    icon: Scissors,
    desc: 'Hairdressing, beauty therapy and makeup artistry.',
  },
  {
    name: 'Education',
    icon: School,
    desc: 'Pre-primary teachers training (Montessori).',
  },
];

export default function VocationalPage() {
  return (
    <>
      <PageHeader
        eyebrow="Vocational Courses"
        title={
          <>
            Kickstart your career with{' '}
            <span className="gold-text">industry-ready</span> training.
          </>
        }
        description="Vocational diplomas facilitated through the Board of Open Schooling & Skill Education (BOSSE), established under Act No. 14 of 2020 of the Sikkim Legislative Assembly."
        badges={[
          'BOSSE',
          'Industry Certified',
          '1-year diploma',
          '100+ Partner Institutes',
          '94% Placement Rate',
        ]}
        crumbs={[{ label: 'Vocational Courses' }]}
      >
        <Link
          href="/contact?course=Vocational%20Courses"
          className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white shadow-glow transition-shadow hover:shadow-glow-lg"
        >
          Start your enrolment
          <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHeader>

      {/* Eligibility callout */}
      <section className="relative pt-4 pb-2 md:pt-8">
        <div className="container-x">
          <Reveal>
            <GlowCard className="p-7 md:p-9">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <span className="text-xs uppercase tracking-[0.4em] text-royal">
                    Eligibility
                  </span>
                  <p className="heading-display mt-2 text-lg text-navy">
                    Secondary education completed from a recognised board.
                  </p>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-[0.4em] text-royal">
                    Duration & Exams
                  </span>
                  <p className="heading-display mt-2 text-lg text-navy">
                    1-year diploma with annual examinations — focused,
                    practical skill development.
                  </p>
                </div>
              </div>
            </GlowCard>
          </Reveal>
        </div>
      </section>

      {/* Category overview */}
      <section className="relative py-16 md:py-24">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs uppercase tracking-[0.4em] text-royal">
                Course categories
              </span>
              <h2 className="heading-display mt-3 text-4xl md:text-5xl text-balance text-navy">
                Five career-ready{' '}
                <span className="royal-text">specialisations</span>.
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.06}>
                <GlowCard className="h-full p-6" float={i === 2}>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-royal-gradient text-white shadow-glow">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <h3 className="heading-display mt-4 text-lg text-navy">
                    {c.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {c.desc}
                  </p>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* All vocational programs */}
      <section className="relative pb-20 md:pb-28">
        <div className="container-x">
          <Reveal>
            <div className="flex items-end justify-between">
              <div>
                <span className="text-xs uppercase tracking-[0.4em] text-royal">
                  Full catalogue
                </span>
                <h2 className="heading-display mt-2 text-3xl md:text-4xl text-navy">
                  {vocationalPrograms.length} vocational programs
                </h2>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8">
              <ProgramGrid programs={vocationalPrograms} />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
