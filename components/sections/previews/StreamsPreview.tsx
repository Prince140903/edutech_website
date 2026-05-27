'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen, ShieldCheck } from 'lucide-react';
import GlowCard from '@/components/ui/GlowCard';
import Reveal from '@/components/ui/Reveal';
import { useLeadPopup } from '@/components/providers/LeadCaptureProvider';
import { streams } from '@/lib/data';

export default function StreamsPreview() {
  const { openPopup } = useLeadPopup();

  return (
    <section className="relative py-20 md:py-28">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.4em] text-royal">
              Admissions
            </span>
            <h2 className="heading-display mt-3 text-3xl sm:text-4xl md:text-5xl text-balance text-navy">
              Admissions across{' '}
              <span className="gold-text">every stream</span> that matters.
            </h2>
            <p className="mt-4 text-muted">
              From Medical to Engineering, Law to Pharmacy — we help you secure
              admissions to top universities in India and overseas. Tap a
              stream to talk to our team.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <button
              type="button"
              onClick={() => openPopup()}
              className="group inline-flex items-center gap-2 rounded-full border border-royal/20 bg-white/60 px-5 py-2.5 text-sm font-medium text-navy backdrop-blur-xl transition-all hover:border-royal/40 hover:shadow-glow"
            >
              Get in Touch
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </button>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {streams.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.07}>
              <button
                type="button"
                onClick={() => openPopup(c.name)}
                aria-label={`Get in touch about ${c.name} admissions`}
                className="block h-full w-full text-left"
              >
                <GlowCard float={i % 3 === 1} className="h-full p-5">
                  <CourseImage
                    gradient={c.gradient}
                    accent={c.accent}
                    image={c.image}
                    name={c.name}
                  />

                  <div className="mt-5 px-1">
                    <span className="inline-block rounded-full bg-pearl px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-royal">
                      {c.tag}
                    </span>
                    <h3 className="heading-display mt-3 text-xl text-navy">
                      {c.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted line-clamp-2">
                      {c.blurb}
                    </p>

                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {c.programs.slice(0, 3).map((p) => (
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
              </button>
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
  image,
  name,
}: {
  gradient: string;
  accent: string;
  image: string;
  name: string;
}) {
  return (
    <div
      className={`relative aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br ${gradient}`}
    >
      <Image
        src={image}
        alt={`${name} college admission consulting`}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      {/* Color-tinted overlay for contrast + brand feel */}
      <div
        className="pointer-events-none absolute inset-0 mix-blend-multiply opacity-70"
        style={{
          background: `linear-gradient(135deg, ${accent}40 0%, #0B1F4D80 100%)`,
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />

      <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur-md">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" />
        Admissions open
      </div>

      <div className="absolute bottom-3 left-4 heading-display text-xl text-white drop-shadow">
        {name}
      </div>
    </div>
  );
}
