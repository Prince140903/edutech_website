import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ChevronRight, Laptop2 } from 'lucide-react';
import PageHeader from '@/components/ui/PageHeader';
import ProgramGrid from '@/components/ui/ProgramGrid';
import Reveal from '@/components/ui/Reveal';
import GlowCard from '@/components/ui/GlowCard';
import { onlinePrograms } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Online Education Admission Consultant — UGC Approved Online Degrees',
  description:
    'Glide Education is an online education admission consultant for UGC-approved online MBA, MCA, BCA, B.Com, BA and M.Sc Data Science degrees from NAAC A++ universities. WES recognised, globally accepted.',
  keywords: [
    'online education admission consultant',
    'online MBA admission',
    'online MCA admission',
    'online BCA admission',
    'UGC approved online degree',
    'NAAC A++ online university',
    'WES recognised online degree',
    'online MBA-ACCA',
  ],
  alternates: { canonical: '/online' },
};

const benefits = [
  'Access course content 24/7',
  'Eligible for government opportunities',
  'Degrees accepted worldwide',
  'Industry-driven curriculum',
  'Recognized by WES for international higher studies',
  'Valid for government and private sector employment',
];

const categories = Array.from(
  new Set(onlinePrograms.map((p) => p.category)),
);

export default function OnlinePage() {
  return (
    <>
      <PageHeader
        eyebrow="Online Education"
        title={
          <>
            Advance your career through{' '}
            <span className="gold-text">flexible online</span> education.
          </>
        }
        description="UGC-approved online degrees from NAAC A++ institutions. Expert support for online degree programs — built for working professionals and remote learners."
        badges={[
          '100+ Partner Institutes',
          '94% Placement Rate',
          'UGC Approved',
          'Flexible Learning',
          'Global Recognition',
        ]}
        crumbs={[{ label: 'Online Education' }]}
      >
        <Link
          href="/contact?course=Online%20Education"
          className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white shadow-glow transition-shadow hover:shadow-glow-lg"
        >
          Talk to a counsellor
          <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHeader>

      {/* Programs */}
      <section className="relative py-16 md:py-24">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-end">
              <div>
                <span className="text-xs uppercase tracking-[0.4em] text-royal">
                  All programs
                </span>
                <h2 className="heading-display mt-3 text-3xl md:text-4xl text-navy">
                  {onlinePrograms.length} online programs across{' '}
                  {categories.length} streams.
                </h2>
              </div>
              <span className="text-sm text-muted">
                Fees shown per academic year
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10">
              <ProgramGrid programs={onlinePrograms} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why online */}
      <section className="relative py-16 md:py-24">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs uppercase tracking-[0.4em] text-royal">
                Why online with Glide
              </span>
              <h2 className="heading-display mt-3 text-4xl md:text-5xl text-balance text-navy">
                Built for the way{' '}
                <span className="royal-text">you actually live</span>.
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <Reveal key={b} delay={i * 0.06}>
                <GlowCard className="h-full p-6" float={i % 3 === 1}>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-royal-gradient text-white shadow-glow">
                    <Laptop2 className="h-5 w-5" />
                  </span>
                  <p className="mt-4 text-base text-navy">{b}</p>
                </GlowCard>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/universities"
                className="inline-flex items-center gap-2 rounded-full border border-royal/20 bg-white/70 px-6 py-3 text-sm font-medium text-navy backdrop-blur-xl transition-all hover:border-royal/40 hover:shadow-glow"
              >
                See partner universities
                <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact?course=Online%20Education"
                className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white shadow-glow transition-shadow hover:shadow-glow-lg"
              >
                Book free counselling
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
