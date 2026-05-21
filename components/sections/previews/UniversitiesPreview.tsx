'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import UniversityMonogram from '@/components/ui/UniversityMonogram';
import { universities } from '@/lib/data';

export default function UniversitiesPreview() {
  const preview = universities.slice(0, 6);

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-royal/15 blur-3xl" />
        <div className="absolute -right-10 bottom-0 h-80 w-80 rounded-full bg-gold/15 blur-3xl" />
      </div>

      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.4em] text-royal">
              Partner network
            </span>
            <h2 className="heading-display mt-3 text-4xl md:text-5xl text-balance text-navy">
              100+ institutes.{' '}
              <span className="royal-text">One trusted door.</span>
            </h2>
            <p className="mt-4 text-muted">
              Accredited universities and top-tier colleges across India.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/universities"
              className="group inline-flex items-center gap-2 rounded-full border border-royal/20 bg-white/60 px-5 py-2.5 text-sm font-medium text-navy backdrop-blur-xl transition-all hover:border-royal/40 hover:shadow-glow"
            >
              View all universities
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {preview.map((u, i) => (
            <Reveal key={u.name} delay={i * 0.06}>
              <Link
                href={`/contact?course=${encodeURIComponent(u.name)}`}
                className="group relative block h-full overflow-hidden rounded-3xl border border-royal/15 bg-white/70 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-glow-lg"
              >
                <div
                  className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-25 blur-3xl transition-opacity group-hover:opacity-50"
                  style={{ background: u.accent }}
                />
                <div className="flex items-start gap-4">
                  <UniversityMonogram name={u.name} accent={u.accent} size={52} />
                  <div className="min-w-0">
                    <h3 className="heading-display text-base text-navy">
                      {u.name}
                    </h3>
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
