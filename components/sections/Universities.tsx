'use client';

import { motion } from 'framer-motion';
import { Building2, GraduationCap, MapPin } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

const universities = [
  {
    name: 'DY Patil University',
    accred: 'NAAC A++',
    mode: 'Online · Distance · Regular',
    accent: '#3B82F6',
  },
  {
    name: 'NMIMS University',
    accred: 'NAAC A+',
    mode: 'Online · Regular',
    accent: '#E7B94C',
  },
  {
    name: 'AMITY University',
    accred: 'NAAC A+',
    mode: 'Online · Distance · Regular',
    accent: '#3B82F6',
  },
  {
    name: 'Tilak Maharashtra University',
    accred: 'UGC Approved',
    mode: 'Distance · UGC-DEB',
    accent: '#E7B94C',
  },
  {
    name: 'BOSSE University',
    accred: 'COBSC Approved',
    mode: 'Vocational',
    accent: '#3B82F6',
  },
  {
    name: 'LNCT University',
    accred: 'UGC · NAAC',
    mode: 'Medical · Research',
    accent: '#E7B94C',
  },
  {
    name: 'RKDF University',
    accred: 'UGC · NAAC',
    mode: 'Medical · Allied',
    accent: '#3B82F6',
  },
];

const colleges = {
  Mumbai: [
    'IIT Bombay',
    'Institute of Chemical Technology',
    'VJTI',
    'SPIT',
    'MPSTME',
    'D.Y. Patil School of Law',
    'GLC Mumbai',
    'NMIMS Kirit P. Mehta School of Law',
    'Bombay College of Pharmacy',
    'NMIMS School of Pharmacy',
    'K.M. Kundnani Pharmacy College',
    'St. Xavier’s Institute of Education',
    'SNDT College of Education',
    'K.J. Somaiya College of Education',
  ],
  Pune: [
    'College of Engineering Pune (COEP)',
    'PICT',
    'IIIT Pune',
    'MIT-WPU',
    'Symbiosis Institute of Technology',
    'ILS Law College',
    'Symbiosis Law School',
    'MIT WPU Faculty of Law',
    'Poona College of Pharmacy',
    'MIT Institute of Pharmacy',
    'AISSMS College of Pharmacy',
    'MIT School of Education & Research',
    'Symbiosis School of Education',
    'Tilak College of Education',
  ],
};

export default function Universities() {
  return (
    <section id="universities" className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-royal/15 blur-3xl" />
        <div className="absolute -right-10 bottom-0 h-80 w-80 rounded-full bg-gold/15 blur-3xl" />
      </div>

      <div className="container-x">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs uppercase tracking-[0.4em] text-royal">
              Partner network
            </span>
            <h2 className="heading-display mt-3 text-4xl md:text-5xl text-balance text-navy">
              100+ institutes.{' '}
              <span className="royal-text">One trusted door.</span>
            </h2>
            <p className="mt-4 text-muted">
              Accredited universities and top-tier colleges across India — your
              shortcut to a verified, future-ready degree.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {universities.map((u, i) => (
            <Reveal key={u.name} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group relative h-full overflow-hidden rounded-3xl border border-royal/15 bg-white/70 p-6 backdrop-blur-xl transition-shadow duration-500 hover:shadow-glow-lg"
              >
                <div
                  className="absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-25 blur-3xl transition-opacity group-hover:opacity-50"
                  style={{ background: u.accent }}
                />
                <div className="flex items-start gap-4">
                  <span
                    className="inline-flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-glow"
                    style={{
                      background: `linear-gradient(135deg, ${u.accent}, #0B1F4D)`,
                    }}
                  >
                    <Building2 className="h-5 w-5" />
                  </span>
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
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            {Object.entries(colleges).map(([city, list]) => (
              <div
                key={city}
                className="rounded-3xl border border-royal/15 bg-white/60 p-6 backdrop-blur-xl"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-royal" />
                  <h4 className="heading-display text-lg text-navy">
                    Top colleges in {city}
                  </h4>
                </div>
                <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {list.map((c) => (
                    <li
                      key={c}
                      className="flex items-start gap-2 text-sm text-muted"
                    >
                      <GraduationCap className="mt-0.5 h-3.5 w-3.5 shrink-0 text-royal" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
