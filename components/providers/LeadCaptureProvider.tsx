'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';
import {
  createContext,
  Suspense,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import ContactForm from '@/components/sections/ContactForm';

type Ctx = {
  openPopup: (course?: string) => void;
  closePopup: () => void;
  markConverted: () => void;
};

const PopupContext = createContext<Ctx | null>(null);

export function useLeadPopup() {
  const ctx = useContext(PopupContext);
  if (!ctx) {
    throw new Error('useLeadPopup must be used inside <LeadCaptureProvider>');
  }
  return ctx;
}

const DISMISS_KEY = 'glide_lead_popup_dismissed_at';
const CONVERTED_KEY = 'glide_lead_converted';
const COOLDOWN_MS = 24 * 60 * 60 * 1000; // 24h
const TIMER_MS = 25_000;
const SCROLL_RATIO = 0.6;

export function LeadCaptureProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [course, setCourse] = useState<string | undefined>(undefined);

  const openPopup = useCallback((nextCourse?: string) => {
    setCourse(nextCourse);
    setOpen(true);
  }, []);

  const closePopup = useCallback(() => {
    setOpen(false);
    try {
      window.localStorage.setItem(DISMISS_KEY, String(Date.now()));
    } catch {
      /* ignore */
    }
  }, []);

  const markConverted = useCallback(() => {
    try {
      window.localStorage.setItem(CONVERTED_KEY, '1');
    } catch {
      /* ignore */
    }
  }, []);

  // Auto-trigger: timer · scroll-depth · exit-intent
  useEffect(() => {
    let triggered = false;

    try {
      if (window.localStorage.getItem(CONVERTED_KEY)) return;
      const last = window.localStorage.getItem(DISMISS_KEY);
      if (last && Date.now() - Number(last) < COOLDOWN_MS) return;
    } catch {
      /* ignore */
    }

    const fire = () => {
      if (triggered) return;
      triggered = true;
      setCourse(undefined);
      setOpen(true);
    };

    const timer = window.setTimeout(fire, TIMER_MS);

    const onMouseLeave = (e: MouseEvent) => {
      // Exit-intent: cursor crossing the top edge of the viewport
      if (e.clientY <= 4) fire();
    };

    const onScroll = () => {
      const reach = window.scrollY + window.innerHeight;
      const ratio = reach / document.documentElement.scrollHeight;
      if (ratio >= SCROLL_RATIO) fire();
    };

    document.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // Lock body scroll while modal is open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  // Escape closes
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closePopup();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, closePopup]);

  return (
    <PopupContext.Provider value={{ openPopup, closePopup, markConverted }}>
      {children}

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="lead-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={closePopup}
              className="fixed inset-0 z-[80] bg-navy/55 backdrop-blur-sm"
              aria-hidden
            />

            {/* Flex-centering wrapper. We can't rely on Tailwind's
                -translate-x-1/2 -translate-y-1/2 on the modal itself because
                Framer Motion writes inline `transform` for its enter/exit
                animation, which would override those translates and shove the
                modal off-center. */}
            <div className="pointer-events-none fixed inset-0 z-[90] flex items-center justify-center p-3 sm:p-6">
              <motion.div
                key="lead-modal"
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.98 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                role="dialog"
                aria-modal="true"
                aria-labelledby="lead-popup-title"
                className="pointer-events-auto relative w-full max-w-[960px] max-h-[92dvh] overflow-hidden rounded-3xl border border-royal/20 bg-white shadow-glow-lg"
              >
              <button
                onClick={closePopup}
                aria-label="Close"
                className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-navy backdrop-blur-md transition-colors hover:bg-white hover:text-royal sm:right-4 sm:top-4"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid max-h-[92dvh] grid-cols-1 md:grid-cols-5">
                {/* Hero / visual — desktop only */}
                <aside className="relative hidden md:col-span-2 md:flex md:flex-col md:justify-end md:overflow-hidden">
                  <Image
                    src="/education.jpg"
                    alt="Students celebrating admission success"
                    fill
                    priority
                    sizes="(max-width: 768px) 0px, 40vw"
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(155deg, rgba(11,31,77,0.65) 0%, rgba(59,130,246,0.4) 60%, rgba(11,31,77,0.85) 100%)',
                    }}
                  />
                  <div className="relative p-7 text-white">
                    <p className="text-[10px] uppercase tracking-[0.4em] text-goldsoft">
                      Glide Education
                    </p>
                    <h2
                      id="lead-popup-title"
                      className="heading-display mt-3 text-3xl"
                    >
                      Get in <span className="gold-text font-bold">Touch</span>
                    </h2>
                    <p className="mt-3 text-sm text-white/85">
                      Need personalised assistance with your admission? Your
                      solution starts here.
                    </p>
                    <ul className="mt-5 space-y-2 text-sm text-white/85">
                      <li>· 10,000+ successful admissions</li>
                      <li>· 100+ partner universities</li>
                      <li>· Response within 1 working hour</li>
                    </ul>
                  </div>
                </aside>

                {/* Form */}
                <div className="md:col-span-3">
                  <div className="max-h-[92dvh] overflow-y-auto p-6 sm:p-8 md:p-10">
                    <div className="md:hidden">
                      <p className="text-[10px] uppercase tracking-[0.4em] text-royal">
                        Glide Education
                      </p>
                      <h2 className="heading-display mt-2 text-2xl text-navy">
                        Get in{' '}
                        <span className="gold-text font-bold">Touch</span>
                      </h2>
                      <p className="mt-2 text-sm text-muted">
                        Need personalised assistance? Your solution starts
                        here.
                      </p>
                    </div>

                    <div className="hidden md:block">
                      <h3 className="heading-display text-xl text-navy">
                        Tell us a few details
                      </h3>
                      <p className="mt-1 text-sm text-muted">
                        Our admissions team replies within 1 working hour.
                      </p>
                    </div>

                    <div className="mt-6">
                      <Suspense fallback={null}>
                        <ContactForm
                          defaultCourse={course}
                          onSubmitted={markConverted}
                        />
                      </Suspense>
                    </div>
                  </div>
                </div>
              </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </PopupContext.Provider>
  );
}
