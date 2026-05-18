import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, BookOpen, ShieldCheck } from 'lucide-react';
import PageHeader from '@/components/ui/PageHeader';
import GlowCard from '@/components/ui/GlowCard';
import Reveal from '@/components/ui/Reveal';
import { streams } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Regular Admissions — Glide Education',
  description:
    'Expert guidance for admissions across Engineering, Medical, Management, Law, Education and Pharmacy at top universities in India and overseas.',
};

export default function AdmissionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Regular Admission"
        title={
          <>
            Admissions across{' '}
            <span className="gold-text">every stream</span> that matters.
          </>
        }
        description="From Engineering to Medical, Management to Law — we guide eligibility, shortlisting, applications and documentation for top universities in India and overseas."
        badges={['AICTE', 'NMC', 'BCI', 'NCTE', 'PCI', 'UGC']}
        crumbs={[{ label: 'Admissions' }]}
      />

      <section className="relative pb-20 md:pb-28">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {streams.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.06}>
                <Link href={`/admissions/${s.slug}`} className="block h-full">
                  <GlowCard float={i % 3 === 1} className="h-full p-5">
                    <div
                      className={`relative aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br ${s.gradient}`}
                    >
                      <div
                        className="absolute -bottom-10 -right-10 h-44 w-44 rounded-full opacity-40 blur-3xl"
                        style={{ background: s.accent }}
                      />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_60%)]" />
                      <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur-md">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" />
                        Admissions open
                      </div>
                      <div className="absolute bottom-4 right-4 heading-display text-white/90 text-2xl">
                        {s.name}
                      </div>
                    </div>

                    <div className="mt-5 px-1">
                      <span className="inline-block rounded-full bg-pearl px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-royal">
                        {s.tag}
                      </span>
                      <h3 className="heading-display mt-3 text-xl text-navy">
                        {s.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted line-clamp-3">
                        {s.blurb}
                      </p>

                      <ul className="mt-4 flex flex-wrap gap-1.5">
                        {s.programs.slice(0, 4).map((p) => (
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
                        <span>{s.exam}</span>
                      </div>

                      <div className="mt-5 flex items-center justify-between border-t border-royal/10 pt-4">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-pearl px-3 py-1 text-[10px] font-semibold text-navy">
                          <ShieldCheck className="h-3.5 w-3.5 text-royal" />
                          {s.accred} Approved
                        </span>
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-navy text-white shadow-glow">
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </GlowCard>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
