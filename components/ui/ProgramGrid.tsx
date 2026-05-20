'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowUpRight,
  Award,
  Briefcase,
  Cpu,
  GraduationCap,
  HeartPulse,
  Languages,
  Laptop,
  Palette,
  Scissors,
  School,
  UtensilsCrossed,
} from 'lucide-react';
import type { Program } from '@/lib/data';

const categoryIcons: Record<string, React.ElementType> = {
  Management: Briefcase,
  'Computer Applications': Laptop,
  Commerce: Award,
  'Arts & Media': Languages,
  'Data & Tech': Cpu,
  Undergraduate: GraduationCap,
  Postgraduate: GraduationCap,
  Diploma: Award,
  Healthcare: HeartPulse,
  Hospitality: UtensilsCrossed,
  'Creative Arts': Palette,
  'Beauty & Wellness': Scissors,
  Education: School,
};

export default function ProgramGrid({ programs }: { programs: Program[] }) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {programs.map((p, i) => {
        const Icon = categoryIcons[p.category] ?? GraduationCap;
        return (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{
              duration: 0.5,
              delay: Math.min(i * 0.02, 0.4),
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Link
              href={`/contact?course=${encodeURIComponent(p.title)}`}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-royal/12 bg-white/80 p-4 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-royal/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />

              <div className="flex items-start gap-3">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-royal-gradient text-white shadow-glow">
                  <Icon className="h-4 w-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="heading-display text-sm text-navy line-clamp-1">
                    {p.title}
                  </p>
                  <p className="text-[10px] uppercase tracking-widest text-muted">
                    {p.category}
                  </p>
                </div>
                <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-royal" />
              </div>

              <div className="mt-3 flex items-center justify-between border-t border-royal/10 pt-3">
                <span className="text-[11px] text-muted">{p.duration}</span>
                {p.fee && (
                  <span className="rounded-full bg-pearl px-2.5 py-1 text-[10px] font-semibold text-navy">
                    {p.fee}
                  </span>
                )}
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
