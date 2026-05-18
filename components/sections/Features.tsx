'use client';

import {
  Building2,
  Clock,
  Compass,
  Globe2,
  Laptop,
  ShieldCheck,
} from 'lucide-react';
import GlowCard from '@/components/ui/GlowCard';
import Reveal from '@/components/ui/Reveal';

const features = [
  {
    icon: Building2,
    title: 'Top Universities',
    desc: 'Collaborate with renowned institutions offering accredited programs across India.',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    desc: 'Get continuous support for all your academic and admission queries.',
  },
  {
    icon: Compass,
    title: 'Career Guidance',
    desc: 'Receive expert advice to identify and pursue your ideal career path.',
  },
  {
    icon: ShieldCheck,
    title: 'UGC Approved',
    desc: 'Programs recognised by UGC, AICTE, NMC, BCI, NCTE and PCI.',
  },
  {
    icon: Globe2,
    title: 'Global Recognition',
    desc: 'Degrees accepted worldwide and recognised by WES for international higher studies.',
  },
  {
    icon: Laptop,
    title: 'Flexible Learning',
    desc: 'Access course content 24/7 — perfect for working professionals and remote learners.',
  },
];

export default function Features() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs uppercase tracking-[0.4em] text-royal">
              Why Glide Education
            </span>
            <h2 className="heading-display mt-3 text-4xl md:text-5xl text-balance text-navy">
              Everything you need to{' '}
              <span className="royal-text">get admitted</span> — done right.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.06}>
              <GlowCard className="h-full p-7" float={i === 1 || i === 4}>
                <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-royal-gradient shadow-glow">
                  <div className="absolute inset-0 rounded-2xl bg-royal/30 blur-xl" />
                  <f.icon className="relative h-6 w-6 text-white" />
                </div>
                <h3 className="heading-display mt-5 text-lg text-navy">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {f.desc}
                </p>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
