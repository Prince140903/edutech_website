'use client';

import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, Mail, Menu, MessageCircle, Phone, X } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';
import BrandLogo from '@/components/ui/BrandLogo';
import { navLinks, contact } from '@/lib/data';
import { cn } from '@/lib/cn';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 120], [0.35, 0.78]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while the drawer is open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname?.startsWith(href);

  return (
    <>
      <motion.header
        // inset-x-0 + mx-auto centers using the same available-space math as
        // `mx-auto` on the page content below → no scrollbar-width offset.
        className="fixed top-4 inset-x-0 z-50 mx-auto w-[min(1200px,calc(100%-2rem))]"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.nav
          style={{
            backgroundColor: useTransform(
              bgOpacity,
              (v) => `rgba(255,255,255,${v})`,
            ),
          }}
          className={cn(
            'relative flex items-center justify-between rounded-2xl border border-royal/15 px-4 py-2.5 sm:px-5 sm:py-3 backdrop-blur-xl backdrop-saturate-150 transition-shadow duration-500',
            scrolled ? 'shadow-glow' : 'shadow-none',
          )}
        >
          <Link
            href="/"
            aria-label="Glide Education — home"
            className="relative z-10 flex items-center gap-2.5"
          >
            <BrandLogo size={36} priority />
            <span className="heading-display text-base sm:text-lg text-navy whitespace-nowrap">
              Glide Education
            </span>
          </Link>

          {/* Desktop links — absolutely centered */}
          <ul className="pointer-events-none absolute inset-0 hidden items-center justify-center gap-1 lg:flex">
            {navLinks.map((l) => {
              const active = isActive(l.href);
              return (
                <li key={l.href} className="pointer-events-auto">
                  <Link
                    href={l.href}
                    className={cn(
                      'relative inline-flex rounded-full px-3.5 py-2 text-sm font-medium transition-colors',
                      active ? 'text-navy' : 'text-ink/70 hover:text-navy',
                    )}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-0 rounded-full bg-royal/12 shadow-glow"
                        transition={{
                          type: 'spring',
                          stiffness: 420,
                          damping: 32,
                        }}
                      />
                    )}
                    <span className="relative z-10">{l.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="relative z-10 hidden items-center gap-3 lg:flex">
            <a
              href={contact.phoneHref}
              className="hidden text-xs font-medium text-muted xl:inline"
            >
              {contact.phone}
            </a>
            <MagneticButton
              variant="primary"
              className="!px-5 !py-2.5 text-sm"
              strength={0.15}
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.location.href = contact.phoneHref;
                }
              }}
            >
              <Phone className="h-4 w-4" />
              Quick Call
            </MagneticButton>
          </div>

          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-drawer"
            onClick={() => setOpen((v) => !v)}
            className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-royal/20 bg-white/70 transition-colors hover:bg-white lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </motion.nav>
      </motion.header>

      {/* Mobile drawer + backdrop (lifted out of header so it can be full-viewport) */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[60] bg-navy/40 backdrop-blur-sm lg:hidden"
              aria-hidden
            />
            <motion.aside
              key="drawer"
              id="mobile-drawer"
              role="dialog"
              aria-modal="true"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                type: 'spring',
                stiffness: 380,
                damping: 38,
                mass: 0.8,
              }}
              className="fixed right-0 top-0 z-[70] flex h-[100dvh] w-[88%] max-w-sm flex-col border-l border-royal/15 bg-ice/95 shadow-glow-lg backdrop-blur-2xl lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-royal/10 px-5 py-4">
                <Link
                  href="/"
                  aria-label="Glide Education — home"
                  className="flex items-center gap-2.5"
                >
                  <BrandLogo size={36} />
                  <div className="leading-tight">
                    <p className="heading-display text-base text-navy whitespace-nowrap">
                      Glide Education
                    </p>
                    <p className="text-[9px] uppercase tracking-[0.3em] text-muted">
                      We Shape Your Future
                    </p>
                  </div>
                </Link>
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-royal/20 bg-white text-navy transition-colors hover:bg-pearl"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-3 py-4">
                <ul className="flex flex-col gap-1">
                  {navLinks.map((l, i) => {
                    const active = isActive(l.href);
                    return (
                      <motion.li
                        key={l.href}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.06 + i * 0.04,
                          duration: 0.3,
                          ease: 'easeOut',
                        }}
                      >
                        <Link
                          href={l.href}
                          className={cn(
                            'group flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium transition-colors',
                            active
                              ? 'bg-royal/10 text-navy shadow-glow'
                              : 'text-ink/80 hover:bg-pearl',
                          )}
                        >
                          <span>{l.label}</span>
                          <ArrowRight
                            className={cn(
                              'h-4 w-4 transition-transform group-hover:translate-x-1',
                              active ? 'text-royal' : 'text-muted',
                            )}
                          />
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              <div className="border-t border-royal/10 p-4">
                <p className="text-[10px] uppercase tracking-[0.3em] text-muted">
                  Talk to us
                </p>
                <a
                  href={contact.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(16,185,129,0.35)] transition-shadow hover:shadow-[0_12px_32px_rgba(16,185,129,0.55)]"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Chat
                </a>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  <a
                    href={contact.phoneHref}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-navy px-4 py-3 text-sm font-semibold text-white shadow-glow transition-shadow hover:shadow-glow-lg"
                  >
                    <Phone className="h-4 w-4" />
                    Call
                  </a>
                  <a
                    href={contact.emailHref}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-royal/20 bg-white px-4 py-3 text-sm font-medium text-navy transition-colors hover:bg-pearl"
                  >
                    <Mail className="h-4 w-4" />
                    Email
                  </a>
                </div>
                <p className="mt-3 text-[11px] text-muted">
                  {contact.phone} · {contact.email}
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
