import { Suspense } from 'react';
import { CheckCircle2, Clock, Phone } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import GlowCard from '@/components/ui/GlowCard';
import ContactForm from '@/components/sections/ContactForm';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';
import { contact } from '@/lib/data';

const benefits = [
  'Free 30-minute counselling session',
  'End-to-end admission support — eligibility to enrolment',
  '100+ partner universities & accredited colleges',
  'Direct admissions guidance for Engineering, Medical, MBA, Law, B.Ed & Pharmacy',
  'Online, distance and regular programs — your choice',
  '24/7 admissions support · response within 1 working hour',
];

export default function HomeContactCTA() {
  return (
    <section id="get-counselling" className="relative py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-royal/15 blur-3xl" />
      </div>

      <div className="container-x">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:items-stretch">
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col justify-center">
              <span className="text-xs uppercase tracking-[0.4em] text-royal">
                Talk to an admissions expert
              </span>
              <h2 className="heading-display mt-3 text-3xl sm:text-4xl md:text-5xl text-balance text-navy">
                Get free counselling for{' '}
                <span className="gold-text font-bold">your dream college</span>.
              </h2>
              <p className="mt-4 text-balance text-sm sm:text-base text-muted">
                Share a few details below and our admissions team will reach
                out within an hour with a personalised plan — no payment, no
                commitment.
              </p>

              <ul className="mt-7 space-y-3">
                {benefits.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-sm text-navy/90"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-royal" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-2">
                <a
                  href={contact.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(16,185,129,0.35)] transition-shadow hover:shadow-[0_12px_32px_rgba(16,185,129,0.55)]"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp
                </a>
                <a
                  href={contact.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-shadow hover:shadow-glow-lg"
                >
                  <Phone className="h-4 w-4" />
                  {contact.phone}
                </a>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-royal/15 bg-white/70 px-4 py-2.5 text-xs font-medium text-muted backdrop-blur-xl">
                  <Clock className="h-3.5 w-3.5 text-royal" />
                  24/7 support
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <GlowCard className="h-full p-6 sm:p-8 md:p-10">
              <h3 className="heading-display text-center text-2xl sm:text-3xl text-navy">
                Get Free Counselling
              </h3>
              <p className="mt-2 text-center text-sm text-muted">
                Fill the form — we'll call you back within 1 working hour.
              </p>

              <div className="mt-7">
                <Suspense fallback={<FormSkeleton />}>
                  <ContactForm />
                </Suspense>
              </div>
            </GlowCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FormSkeleton() {
  return (
    <div className="flex flex-col gap-3.5" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="h-12 w-full animate-pulse rounded-2xl border border-royal/15 bg-white/70"
        />
      ))}
      <div className="h-28 w-full animate-pulse rounded-2xl border border-royal/15 bg-white/70" />
      <div className="h-12 w-full animate-pulse rounded-2xl bg-royal/30" />
    </div>
  );
}
