'use client';

import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import MagneticButton from '@/components/ui/MagneticButton';
import Reveal from '@/components/ui/Reveal';
import { useLeadPopup } from '@/components/providers/LeadCaptureProvider';
import { contact } from '@/lib/data';

export default function CTA() {
  const { openPopup } = useLeadPopup();
  return (
    <section className="relative py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-royal/20 bg-navy p-6 sm:rounded-[2.5rem] sm:p-10 md:p-16 text-white shadow-glow-lg">
            {/* Decorative animated layers */}
            <div className="pointer-events-none absolute inset-0">
              <motion.div
                className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-royal/40 blur-3xl"
                animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
                transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-gold/40 blur-3xl"
                animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
                transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.3),transparent_60%)]" />

              {/* Grid lines */}
              <svg
                className="absolute inset-0 h-full w-full opacity-20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="cta-grid"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 40 0 L 0 0 0 40"
                      fill="none"
                      stroke="rgba(255,255,255,0.4)"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cta-grid)" />
              </svg>
            </div>

            <div className="relative mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-medium backdrop-blur-xl">
                <Sparkles className="h-3.5 w-3.5 text-goldsoft" />
                <span className="gold-text">Limited seats</span> · Admissions
                closing soon
              </span>

              <h2 className="heading-display mt-6 text-3xl sm:text-4xl md:text-6xl text-balance">
                Shape your tomorrow,{' '}
                <span className="gold-text">starting today</span>.
              </h2>

              <p className="mt-5 text-balance text-sm sm:text-base text-white/70 md:text-lg">
                Join 10,000+ students who secured admissions to top
                universities in India and overseas with expert guidance.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <MagneticButton
                  variant="gold"
                  className="!px-7 !py-3.5"
                  onClick={() => openPopup()}
                >
                  Get in Touch
                  <ArrowRight className="h-4 w-4" />
                </MagneticButton>
                <a
                  href={contact.phoneHref}
                  className="text-sm font-medium text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline"
                >
                  {contact.phone} →
                </a>
              </div>

              <p className="mt-6 text-xs text-white/50">
                Free admission guidance · No commitment required
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
