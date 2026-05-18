'use client';

import { Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import BrandLogo from '@/components/ui/BrandLogo';

const columns = [
  {
    title: 'Programs',
    links: [
      'Online Education',
      'Distance Education',
      'Vocational Courses',
      'Regular Admission',
      'Partner Universities',
    ],
  },
  {
    title: 'Streams',
    links: [
      'Engineering',
      'Medical',
      'Management',
      'Law',
      'Education',
      'Pharmacy',
    ],
  },
  {
    title: 'Policies',
    links: [
      'Privacy Policy',
      'Terms & Conditions',
      'Return & Refund',
      'Cookie Policy',
    ],
  },
  {
    title: 'Contact',
    links: [
      '+91 74001 40759',
      'info@glideeducation.in',
      'C-202, Eastern Business District',
      'Neptune Magnet Mall, LBS Road',
      'Bhandup (W), Mumbai – 400078',
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-royal/15 bg-pearl/40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-royal/15 blur-3xl" />
      </div>

      <div className="container-x relative py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <a href="#" className="flex items-center gap-2.5">
              <BrandLogo size={44} />
              <div className="flex flex-col leading-tight">
                <span className="heading-display text-xl text-navy">
                  Glide Education
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-muted">
                  We Shape Your Future
                </span>
              </div>
            </a>

            <p className="mt-5 max-w-sm text-sm text-muted">
              Expert guidance for admissions to top universities in India and
              overseas — across Online, Distance, Vocational and Regular
              programs.
            </p>

            <div className="mt-6 flex gap-2">
              {[Facebook, Linkedin, Instagram, MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-royal/15 bg-white/60 text-navy backdrop-blur-xl transition-all hover:border-royal/40 hover:shadow-glow"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </Reveal>

          <div id="contact" className="grid grid-cols-2 gap-8 md:col-span-8 md:grid-cols-4">
            {columns.map((col, i) => (
              <Reveal key={col.title} delay={i * 0.06}>
                <h4 className="heading-display text-sm text-navy">
                  {col.title}
                </h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href={contactHref(l)}
                        className="text-sm text-muted transition-colors hover:text-navy"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-royal/15 pt-6 md:flex-row md:items-center">
          <p className="text-xs text-muted">
            Copyright © {new Date().getFullYear()} Glide Education. All rights
            reserved.
          </p>
          <p className="text-xs text-muted">
            We Shape Your{' '}
            <span className="gold-text font-semibold">Future</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}

function contactHref(label: string): string {
  if (label.startsWith('+')) return `tel:${label.replace(/\s/g, '')}`;
  if (label.includes('@')) return `mailto:${label}`;
  return '#';
}
