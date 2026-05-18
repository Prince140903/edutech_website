import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  GraduationCap,
  MapPin,
  ShieldCheck,
} from 'lucide-react';
import PageHeader from '@/components/ui/PageHeader';
import GlowCard from '@/components/ui/GlowCard';
import Reveal from '@/components/ui/Reveal';
import { streams } from '@/lib/data';

export function generateStaticParams() {
  return streams.map((s) => ({ stream: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { stream: string };
}): Metadata {
  const s = streams.find((x) => x.slug === params.stream);
  if (!s) return { title: 'Admissions — Glide Education' };
  return {
    title: `${s.name} Admissions — Glide Education`,
    description: s.longDesc,
  };
}

export default function StreamPage({
  params,
}: {
  params: { stream: string };
}) {
  const s = streams.find((x) => x.slug === params.stream);
  if (!s) notFound();

  return (
    <>
      <PageHeader
        eyebrow={`${s.tag} Admissions`}
        title={
          <>
            {s.name} programs at{' '}
            <span className="gold-text">top universities</span>.
          </>
        }
        description={s.longDesc}
        badges={[s.accred + ' Approved', '100+ Partner Institutes', '94% Placement']}
        crumbs={[
          { label: 'Admissions', href: '/admissions' },
          { label: s.name },
        ]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white shadow-glow transition-shadow hover:shadow-glow-lg"
          >
            Talk to admissions
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/universities"
            className="inline-flex items-center gap-2 rounded-full border border-royal/20 bg-white/70 px-6 py-3 text-sm font-medium text-navy backdrop-blur-xl transition-all hover:border-royal/40 hover:shadow-glow"
          >
            Partner universities
          </Link>
        </div>
      </PageHeader>

      {/* Specializations */}
      <section className="relative py-16 md:py-24">
        <div className="container-x">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.4em] text-royal">
                Specializations
              </span>
              <h2 className="heading-display mt-3 text-3xl md:text-4xl text-navy">
                Choose your{' '}
                <span className="royal-text">specialization</span>.
              </h2>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {s.specializations.map((sp, i) => (
              <Reveal key={sp.title} delay={i * 0.06}>
                <GlowCard className="h-full p-6" float={i === 1}>
                  <div className="flex items-start justify-between">
                    <span
                      className="inline-flex h-11 w-11 items-center justify-center rounded-2xl text-white shadow-glow"
                      style={{
                        background: `linear-gradient(135deg, ${s.accent}, #0B1F4D)`,
                      }}
                    >
                      <GraduationCap className="h-5 w-5" />
                    </span>
                    <span className="rounded-full bg-pearl px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-royal">
                      {sp.duration}
                    </span>
                  </div>
                  <h3 className="heading-display mt-4 text-lg text-navy">
                    {sp.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {sp.desc}
                  </p>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility + Exams */}
      <section className="relative py-16 md:py-24">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Reveal>
              <GlowCard className="h-full p-7 md:p-9">
                <span className="text-xs uppercase tracking-[0.4em] text-royal">
                  Eligibility
                </span>
                <h3 className="heading-display mt-3 text-2xl text-navy">
                  Who can apply
                </h3>
                <ul className="mt-5 space-y-3">
                  {s.eligibility.map((e) => (
                    <li
                      key={e}
                      className="flex items-start gap-3 text-sm text-navy/80"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-royal" />
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
              </GlowCard>
            </Reveal>

            <Reveal delay={0.1}>
              <GlowCard className="h-full p-7 md:p-9">
                <span className="text-xs uppercase tracking-[0.4em] text-royal">
                  Selection
                </span>
                <h3 className="heading-display mt-3 text-2xl text-navy">
                  Entrance & accreditation
                </h3>
                <div className="mt-5 space-y-4">
                  <div className="flex items-start gap-3">
                    <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-royal" />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted">
                        Entrance exam
                      </p>
                      <p className="text-base text-navy">{s.exam}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-royal" />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted">
                        Accreditation
                      </p>
                      <p className="text-base text-navy">{s.accred} Approved</p>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Top Colleges */}
      <section className="relative pb-20 md:pb-28">
        <div className="container-x">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.4em] text-royal">
                Where you can study
              </span>
              <h2 className="heading-display mt-3 text-3xl md:text-4xl text-navy">
                Top {s.name.toLowerCase()} colleges in{' '}
                <span className="gold-text">Mumbai & Pune</span>.
              </h2>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              { city: 'Mumbai', list: s.collegesMumbai },
              { city: 'Pune', list: s.collegesPune },
            ].map((c, i) => (
              <Reveal key={c.city} delay={i * 0.08}>
                <div className="rounded-3xl border border-royal/15 bg-white/60 p-6 backdrop-blur-xl">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-royal" />
                    <h4 className="heading-display text-lg text-navy">
                      {c.city}
                    </h4>
                  </div>
                  <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {c.list.map((college) => (
                      <li
                        key={college}
                        className="flex items-start gap-2 text-sm text-muted"
                      >
                        <GraduationCap className="mt-0.5 h-3.5 w-3.5 shrink-0 text-royal" />
                        <span>{college}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
