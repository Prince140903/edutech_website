'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';
import BrandLogo from '@/components/ui/BrandLogo';
import { navLinks, contact } from '@/lib/data';
import { cn } from '@/lib/cn';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 120], [0.3, 0.78]);
  const blur = useTransform(scrollY, [0, 120], [10, 24]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname?.startsWith(href);

  return (
    <motion.header
      className="fixed top-4 left-1/2 z-50 w-[min(1200px,calc(100%-2rem))] -translate-x-1/2"
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
          backdropFilter: useTransform(blur, (v) => `blur(${v}px) saturate(160%)`),
        }}
        className={cn(
          'flex items-center justify-between rounded-2xl border border-royal/15 px-5 py-3 transition-shadow duration-500',
          scrolled ? 'shadow-glow' : 'shadow-none',
        )}
      >
        <Link href="/" className="flex items-center gap-2.5">
          <BrandLogo size={40} priority />
          <span className="heading-display text-lg text-navy">Glide</span>
          <span className="ml-1 hidden text-xs uppercase tracking-[0.3em] text-muted sm:inline">
            Education
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => {
            const active = isActive(l.href);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={cn(
                    'relative inline-flex rounded-full px-3.5 py-2 text-sm font-medium transition-colors',
                    active
                      ? 'text-navy'
                      : 'text-ink/70 hover:text-navy',
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-0 rounded-full bg-royal/10 shadow-glow"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{l.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={contact.phoneHref}
            className="hidden text-xs font-medium text-muted xl:inline"
          >
            {contact.phone}
          </a>
          <MagneticButton
            variant="primary"
            className="!px-5 !py-2.5 text-sm"
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
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-royal/20 bg-white/70"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{
          height: open ? 'auto' : 0,
          opacity: open ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="lg:hidden overflow-hidden"
      >
        <div className="mt-3 rounded-2xl border border-royal/15 bg-white/85 p-4 backdrop-blur-xl">
          <ul className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={cn(
                    'block rounded-xl px-4 py-3 text-sm font-medium hover:bg-pearl',
                    isActive(l.href) ? 'bg-pearl text-navy' : 'text-ink/80',
                  )}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex gap-2">
            <a
              href={contact.emailHref}
              className="flex-1 rounded-xl border border-royal/20 px-4 py-3 text-center text-sm font-medium"
            >
              Email
            </a>
            <a
              href={contact.phoneHref}
              className="flex-1 rounded-xl bg-navy px-4 py-3 text-center text-sm font-medium text-white"
            >
              Quick Call
            </a>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}
