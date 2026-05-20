'use client';

import Counter from '@/components/ui/Counter';
import Reveal from '@/components/ui/Reveal';
import { GraduationCap, Building2, Star, Clock, LucideIcon } from 'lucide-react';

type Stat = {
  icon: LucideIcon;
  label: string;
  to: number;
  suffix: string;
  decimals?: number;
};

const stats: Stat[] = [
  { icon: GraduationCap, label: 'Successful Admissions', to: 10000, suffix: '+' },
  { icon: Building2, label: 'Partner Institutes', to: 100, suffix: '+' },
  { icon: Star, label: 'Student Rating', to: 4.9, suffix: '/5', decimals: 1 },
  { icon: Clock, label: 'Support', to: 24, suffix: '/7' },
];

export default function Stats() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-xs uppercase tracking-[0.4em] text-royal">
              Our impact
            </span>
            <h2 className="heading-display mt-3 text-4xl md:text-5xl text-navy">
              Trusted by ambitious students{' '}
              <span className="royal-text">across India</span>.
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="group relative overflow-hidden rounded-3xl border border-royal/15 bg-white/60 p-5 sm:p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-glow-lg">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-royal/10 blur-2xl transition-opacity duration-500 group-hover:bg-royal/20" />
                <s.icon className="h-6 w-6 sm:h-7 sm:w-7 text-royal" />
                <div className="heading-display mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl text-navy count-glow">
                  <Counter
                    to={s.to}
                    suffix={s.suffix}
                    decimals={s.decimals ?? 0}
                  />
                </div>
                <p className="mt-1 text-xs sm:text-sm text-muted">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
