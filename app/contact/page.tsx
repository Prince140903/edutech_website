import type { Metadata } from 'next';
import {
  Building2,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';
import { Suspense } from 'react';
import PageHeader from '@/components/ui/PageHeader';
import GlowCard from '@/components/ui/GlowCard';
import Reveal from '@/components/ui/Reveal';
import { contact } from '@/lib/data';
import ContactForm from '@/components/sections/ContactForm';

export const metadata: Metadata = {
  title: 'Contact — Glide Education',
  description:
    'Call us at +91 74001 40759 or email info@glideeducation.in. Visit our Bhandup (W), Mumbai office. Book a free 30-minute counselling session.',
};

const channels = [
  {
    icon: Phone,
    label: 'Phone',
    value: contact.phone,
    href: contact.phoneHref,
    accent: '#3B82F6',
  },
  {
    icon: Mail,
    label: 'Email',
    value: contact.email,
    href: contact.emailHref,
    accent: '#E7B94C',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: '24/7 admissions support',
    accent: '#3B82F6',
  },
];

const socials = [
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: MessageCircle, label: 'WhatsApp', href: `https://wa.me/917400140759` },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let's <span className="gold-text">shape your future</span> —
            together.
          </>
        }
        description="Book a free 30-minute counselling session, or reach us directly by phone, email or WhatsApp. We respond within an hour during working days."
        badges={['24/7 support', 'Free counselling', '30-min video call']}
        crumbs={[{ label: 'Contact' }]}
      />

      {/* Contact channels */}
      <section className="relative pb-6 pt-2">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {channels.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.07}>
                <GlowCard className="h-full p-6" float={i === 1}>
                  <span
                    className="inline-flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-glow"
                    style={{
                      background: `linear-gradient(135deg, ${c.accent}, #0B1F4D)`,
                    }}
                  >
                    <c.icon className="h-5 w-5" />
                  </span>
                  <p className="mt-5 text-xs uppercase tracking-widest text-muted">
                    {c.label}
                  </p>
                  {c.href ? (
                    <a
                      href={c.href}
                      className="heading-display mt-1 block text-lg text-navy hover:text-royal break-words"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <p className="heading-display mt-1 text-lg text-navy">
                      {c.value}
                    </p>
                  )}
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Address */}
      <section className="relative py-16 md:py-24">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
            <Reveal className="lg:col-span-3">
              <GlowCard className="p-6 sm:p-8 md:p-10">
                <h2 className="heading-display text-center text-2xl sm:text-3xl text-navy">
                  Get Free Counselling
                </h2>
                <p className="mt-2 text-center text-sm text-muted">
                  Share a few details and our admissions team will reach out
                  within an hour.
                </p>

                <div className="mt-7">
                  <Suspense fallback={<FormSkeleton />}>
                    <ContactForm />
                  </Suspense>
                </div>
              </GlowCard>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-2">
              <div className="space-y-6">
                <GlowCard className="p-6">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-royal-gradient text-white shadow-glow">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted">
                        Visit us
                      </p>
                      <h3 className="heading-display mt-1 text-lg text-navy">
                        Glide Education HQ
                      </h3>
                      <address className="mt-2 not-italic text-sm leading-relaxed text-muted">
                        {contact.address.line1}
                        <br />
                        {contact.address.line2}
                        <br />
                        {contact.address.line3}
                      </address>
                    </div>
                  </div>
                </GlowCard>

                <GlowCard className="p-6">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gold-gradient text-navy shadow-gold">
                      <Building2 className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted">
                        Bank details
                      </p>
                      <h3 className="heading-display mt-1 text-lg text-navy">
                        Secure fee transfers
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        Bank account details are shared securely after
                        admission confirmation. Request them on call or via
                        email.
                      </p>
                    </div>
                  </div>
                </GlowCard>

                <GlowCard className="p-6">
                  <p className="text-xs uppercase tracking-widest text-muted">
                    Follow us
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {socials.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-royal/15 bg-white/70 px-4 py-2 text-xs font-medium text-navy backdrop-blur-xl transition-all hover:border-royal/40 hover:shadow-glow"
                      >
                        <s.icon className="h-3.5 w-3.5" />
                        {s.label}
                      </a>
                    ))}
                  </div>
                </GlowCard>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
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
