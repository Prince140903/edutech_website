import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, Briefcase, Globe2 } from 'lucide-react';
import PageHeader from '@/components/ui/PageHeader';
import ProgramGrid from '@/components/ui/ProgramGrid';
import Reveal from '@/components/ui/Reveal';
import GlowCard from '@/components/ui/GlowCard';
import { distancePrograms } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Distance Education — Glide Education',
  description:
    'Achieve your goals through flexible distance learning. UGC-DEB approved degrees from Tilak Maharashtra Vidyapeeth and other accredited institutions.',
};

const benefits = [
  {
    icon: BookOpen,
    title: 'Study at your pace',
    desc: 'Balance work and personal commitments without compromising on your degree.',
  },
  {
    icon: Globe2,
    title: 'Recognized degrees',
    desc: 'UGC-DEB certified, valued nationwide and recognised internationally by WES.',
  },
  {
    icon: Briefcase,
    title: 'Career growth',
    desc: 'Enhance qualifications without pausing your profession or income.',
  },
];

const accreditations = [
  'UGC-DEB Approved',
  'Tilak Maharashtra Vidyapeeth',
  "NAAC 'B++' Grade",
  'WES Recognized',
];

export default function DistancePage() {
  const grouped = {
    Undergraduate: distancePrograms.filter((p) => p.category === 'Undergraduate'),
    Postgraduate: distancePrograms.filter((p) => p.category === 'Postgraduate'),
    Diploma: distancePrograms.filter((p) => p.category === 'Diploma'),
  };

  return (
    <>
      <PageHeader
        eyebrow="Distance Education"
        title={
          <>
            Achieve your goals through{' '}
            <span className="gold-text">flexible distance</span> learning.
          </>
        }
        description="UGC-DEB approved degree programs delivered with expert guidance. Designed for working professionals, career switchers and remote learners."
        badges={accreditations}
        crumbs={[{ label: 'Distance Education' }]}
      >
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white shadow-glow transition-shadow hover:shadow-glow-lg"
        >
          Get distance counselling
          <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHeader>

      {/* Grouped programs */}
      <section className="relative py-16 md:py-24">
        <div className="container-x space-y-14">
          {Object.entries(grouped).map(([cat, list], idx) => (
            <Reveal key={cat} delay={idx * 0.05}>
              <div>
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-[0.4em] text-royal">
                      {cat}
                    </span>
                    <h2 className="heading-display mt-2 text-2xl md:text-3xl text-navy">
                      {list.length} {cat.toLowerCase()} programs
                    </h2>
                  </div>
                </div>
                <div className="mt-6">
                  <ProgramGrid programs={list} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="relative py-16 md:py-24">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs uppercase tracking-[0.4em] text-royal">
                Why distance with Glide
              </span>
              <h2 className="heading-display mt-3 text-4xl md:text-5xl text-balance text-navy">
                Real degrees.{' '}
                <span className="royal-text">Real flexibility.</span>
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.06}>
                <GlowCard className="h-full p-7" float={i === 1}>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-royal-gradient text-white shadow-glow">
                    <b.icon className="h-5 w-5" />
                  </span>
                  <h3 className="heading-display mt-5 text-lg text-navy">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {b.desc}
                  </p>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
