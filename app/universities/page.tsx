import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import PageHeader from '@/components/ui/PageHeader';
import Reveal from '@/components/ui/Reveal';
import UniversityMonogram from '@/components/ui/UniversityMonogram';
import { universities, streams } from '@/lib/data';

export const metadata: Metadata = {
  title:
    'Partner Universities — DY Patil, NMIMS, AMITY, Tilak Maharashtra, LNCT',
  description:
    'Glide Education collaborates with 100+ accredited universities and top colleges in Mumbai and Pune for engineering, medical, MBA, law, B.Ed and pharmacy admissions.',
  keywords: [
    'DY Patil admission',
    'NMIMS admission',
    'AMITY University admission',
    'Tilak Maharashtra Vidyapeeth admission',
    'LNCT University MBBS',
    'RKDF University admission',
    'top engineering colleges Mumbai',
    'top engineering colleges Pune',
    'IIT Bombay admission counselling',
    'COEP admission counselling',
    'Symbiosis admission consultant',
  ],
  alternates: { canonical: '/universities' },
};

export default function UniversitiesPage() {
  // Merge top colleges from all streams, de-dupe
  const allMumbai = Array.from(
    new Set(streams.flatMap((s) => s.collegesMumbai)),
  );
  const allPune = Array.from(new Set(streams.flatMap((s) => s.collegesPune)));

  return (
    <>
      <PageHeader
        eyebrow="Partner Network"
        title={
          <>
            100+ institutes.{' '}
            <span className="royal-text">One trusted door.</span>
          </>
        }
        description="Accredited universities and top-tier colleges across India — your shortcut to a verified, future-ready degree."
        badges={['NAAC A++', 'NAAC A+', 'UGC Approved', 'WES Recognised']}
        crumbs={[{ label: 'Universities' }]}
      />

      {/* University grid */}
      <section className="relative py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-royal/15 blur-3xl" />
          <div className="absolute -right-10 bottom-0 h-80 w-80 rounded-full bg-gold/15 blur-3xl" />
        </div>

        <div className="container-x">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.4em] text-royal">
                Universities
              </span>
              <h2 className="heading-display mt-3 text-3xl md:text-4xl text-navy">
                {universities.length} accredited{' '}
                <span className="gold-text">university partners</span>.
              </h2>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {universities.map((u, i) => (
              <Reveal key={u.name} delay={i * 0.06}>
                <UniversityCard u={u} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Top colleges */}
      <section className="relative pb-20 md:pb-28">
        <div className="container-x">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.4em] text-royal">
                Top colleges
              </span>
              <h2 className="heading-display mt-3 text-3xl md:text-4xl text-navy">
                Premier campuses across{' '}
                <span className="gold-text">Mumbai & Pune</span>.
              </h2>
              <p className="mt-3 text-muted">
                Aggregated across Engineering, Medical, Management, Law,
                Education and Pharmacy.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              { city: 'Mumbai', list: allMumbai },
              { city: 'Pune', list: allPune },
            ].map((c, i) => (
              <Reveal key={c.city} delay={i * 0.08}>
                <div className="rounded-3xl border border-royal/15 bg-white/60 p-6 backdrop-blur-xl">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-royal" />
                    <h4 className="heading-display text-lg text-navy">
                      {c.city}
                    </h4>
                    <span className="ml-auto rounded-full bg-pearl px-3 py-1 text-[10px] font-semibold text-royal">
                      {c.list.length} colleges
                    </span>
                  </div>
                  <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {c.list.map((college, idx) => (
                      <li
                        key={college}
                        className="flex items-center gap-3 text-sm text-navy/90"
                      >
                        <UniversityMonogram
                          name={college}
                          accent={idx % 2 === 0 ? '#3B82F6' : '#E7B94C'}
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

          <Reveal delay={0.15}>
            <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/admissions"
                className="inline-flex items-center gap-2 rounded-full border border-royal/20 bg-white/70 px-6 py-3 text-sm font-medium text-navy backdrop-blur-xl transition-all hover:border-royal/40 hover:shadow-glow"
              >
                Explore admissions
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white shadow-glow transition-shadow hover:shadow-glow-lg"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function UniversityCard({ u }: { u: (typeof universities)[number] }) {
  return (
    <Link
      href={`/contact?course=${encodeURIComponent(u.name)}`}
      className="group relative block h-full overflow-hidden rounded-3xl border border-royal/15 bg-white/70 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-glow-lg"
    >
      <div
        className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-25 blur-3xl transition-opacity group-hover:opacity-50"
        style={{ background: u.accent }}
      />
      <div className="flex items-start gap-4">
        <UniversityMonogram name={u.name} accent={u.accent} size={56} />
        <div className="min-w-0">
          <h3 className="heading-display text-base text-navy">{u.name}</h3>
          <p className="text-xs text-muted">{u.mode}</p>
        </div>
      </div>
      <div className="mt-5 flex items-center justify-between border-t border-royal/10 pt-4">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-pearl px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-royal">
          {u.accred}
        </span>
        <span className="text-xs text-muted">Verified partner</span>
      </div>
    </Link>
  );
}
