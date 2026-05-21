'use client';

import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { contact } from '@/lib/data';

/**
 * Floating WhatsApp button shown on every page.
 * Appears after a small scroll so it doesn't crowd the hero.
 */
export default function WhatsAppFAB() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={contact.whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Glide Education on WhatsApp"
      data-visible={visible}
      className="group fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_10px_30px_rgba(16,185,129,0.45)] outline-none ring-emerald-300 transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_14px_38px_rgba(16,185,129,0.6)] focus-visible:ring-4 data-[visible=false]:pointer-events-none data-[visible=false]:translate-y-3 data-[visible=false]:opacity-0 data-[visible=true]:opacity-100 sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
    >
      {/* Pulsing ring */}
      <span
        aria-hidden
        className="absolute inset-0 -z-10 rounded-full bg-emerald-500 opacity-60 animate-ping"
        style={{ animationDuration: '2.6s' }}
      />
      <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-navy px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-glow transition-opacity group-hover:opacity-100 sm:inline-block">
        Chat with us · {contact.phone}
      </span>
    </a>
  );
}
