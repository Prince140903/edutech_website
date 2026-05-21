import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
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
import UniversityMonogram from '@/components/ui/UniversityMonogram';
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
  if (!s) return { title: 'Admissions' };
  return {
    title: s.seoTitle,
    description: s.seoDescription,
    keywords: s.keywords,
    alternates: { canonical: `/admissions/${s.slug}` },
    openGraph: {
      title: s.seoTitle,
      description: s.seoDescription,
      url: `/admissions/${s.slug}`,
      images: [{ url: s.image, alt: `${s.name} admissions` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: s.seoTitle,
      description: s.seoDescription,
      images: [s.image],
    },
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
            href={`/contact?course=${encodeURIComponent(s.name)}`}
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

      {/* Stream banner */}
      <section className="relative -mt-4 pb-6 md:-mt-8 md:pb-10">
        <div className="container-x">
          <Reveal>
            <div className="relative aspect-[16/6] w-full overflow-hidden rounded-3xl border border-royal/15 shadow-glow-lg">
              <Image
                src={s.image}
                alt={`${s.name} college admission consulting in India`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1200px"
                className="object-cover"
              />
              <div
                className="pointer-events-none absolute inset-0 mix-blend-multiply opacity-60"
                style={{
                  background: `linear-gradient(135deg, ${s.accent}40 0%, #0B1F4D80 100%)`,
                }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-6 md:bottom-7 md:left-9">
                <p className="text-[10px] uppercase tracking-[0.4em] text-white/80">
                  {s.tag}
                </p>
                <p className="heading-display mt-1 text-2xl md:text-4xl text-white drop-shadow">
                  {s.name} Admissions
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

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
                <Link
                  href={`/contact?course=${encodeURIComponent(
                    `${s.name} — ${sp.title}`,
                  )}`}
                  className="block h-full"
                >
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
                </Link>
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
                  <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {c.list.map((college, idx) => (
                      <li
                        key={college}
                        className="flex items-center gap-3 text-sm text-navy/90"
                      >
                        <UniversityMonogram
                          name={college}
                          accent={idx % 2 === 0 ? s.accent : '#0B1F4D'}
                          size={36}
                        />
                        <span className="line-clamp-2">{college}</span>
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
