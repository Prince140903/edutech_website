'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import BrandLogo from '@/components/ui/BrandLogo';

export default function LoadingScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          // h-[100svh] = small viewport height — centers correctly on mobile
          // even while the URL bar is showing. overflow-hidden clips the
          // decorative blob so it can never trigger horizontal scroll.
          className="fixed inset-0 z-[100] flex h-[100svh] items-center justify-center overflow-hidden bg-ice"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/2 h-[60rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-royal/10 blur-3xl" />
          </div>

          <div className="relative flex flex-col items-center gap-7">
            <div className="relative flex items-center justify-center">
              <div className="ring-loader" />
              <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.6 }}
                className="absolute"
              >
                <BrandLogo size={64} priority glow={false} />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col items-center gap-2"
            >
              <span className="heading-display text-2xl text-navy">
                Glide Education
              </span>
              <span className="text-xs uppercase tracking-[0.4em] text-muted">
                We Shape Your Future
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
