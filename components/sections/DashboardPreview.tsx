'use client';

import { motion } from 'framer-motion';
import { Calendar, Flame, Target, Trophy } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

export default function DashboardPreview() {
  return (
    <section id="dashboard" className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-royal/15 blur-3xl" />
      </div>

      <div className="container-x">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs uppercase tracking-[0.4em] text-royal">
              Your admission tracker
            </span>
            <h2 className="heading-display mt-3 text-4xl md:text-5xl text-balance text-navy">
              A command center for{' '}
              <span className="royal-text">your admission</span>.
            </h2>
            <p className="mt-4 text-muted">
              Application progress, counselling sessions, document checklist and
              shortlisted universities — all in one elegant workspace.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative mx-auto mt-14 max-w-6xl"
          >
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-royal/15 blur-3xl" />
            <div className="rounded-[2rem] border border-royal/20 bg-white/70 p-3 shadow-glow-lg backdrop-blur-2xl">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-white via-pearl/50 to-white p-5 md:p-8">
                {/* Top bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-royal/10 pb-5">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted">
                      Welcome
                    </p>
                    <h3 className="heading-display text-2xl text-navy">
                      Hello, Aarav 👋
                    </h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <Pill icon={Flame} label="On schedule" gold />
                    <Pill icon={Calendar} label="Intake — Aug 2025" />
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-12 gap-4">
                  {/* Left: Main progress */}
                  <div className="col-span-12 lg:col-span-8 space-y-4">
                    <Panel>
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <p className="text-xs uppercase tracking-widest text-muted">
                            Active application
                          </p>
                          <h4 className="heading-display mt-1 text-xl text-navy">
                            MBA · DY Patil University
                          </h4>
                          <p className="text-xs text-muted">
                            Step 4 · Document Verification
                          </p>
                        </div>
                        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                          On track
                        </span>
                      </div>

                      <div className="mt-5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-muted">Progress</span>
                          <span className="font-semibold text-navy">72%</span>
                        </div>
                        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-pearl">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '72%' }}
                            transition={{ duration: 1.5, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="h-full rounded-full bg-royal-gradient shadow-glow"
                          />
                        </div>
                      </div>
                    </Panel>

                    <Panel>
                      <div className="flex items-center justify-between">
                        <h4 className="heading-display text-sm text-navy">
                          Counselling activity
                        </h4>
                        <span className="text-xs text-muted">Last 14 days</span>
                      </div>
                      <Chart />
                    </Panel>
                  </div>

                  {/* Right: Side stack */}
                  <div className="col-span-12 lg:col-span-4 space-y-4">
                    <Panel>
                      <div className="flex items-center gap-3">
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gold-gradient text-navy shadow-gold">
                          <Target className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-widest text-muted">
                            Documents
                          </p>
                          <p className="heading-display text-base text-navy">
                            6 of 8 verified
                          </p>
                        </div>
                      </div>
                    </Panel>

                    <Panel>
                      <p className="text-xs uppercase tracking-widest text-muted">
                        Next counselling call
                      </p>
                      <h4 className="heading-display mt-1 text-base text-navy">
                        Management Programs Team
                      </h4>
                      <p className="mt-1 text-xs text-muted">Today, 6:00 PM</p>
                      <a
                        href="tel:+917400140759"
                        className="mt-3 inline-flex items-center gap-2 rounded-full bg-navy px-4 py-2 text-xs font-semibold text-white shadow-glow transition-shadow hover:shadow-glow-lg"
                      >
                        Quick Call →
                      </a>
                    </Panel>

                    <Panel>
                      <div className="flex items-center gap-3">
                        <Trophy className="h-5 w-5 text-gold" />
                        <p className="text-sm text-navy">
                          You're eligible for a{' '}
                          <strong>scholarship review</strong>
                        </p>
                      </div>
                    </Panel>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}

function Pill({
  icon: Icon,
  label,
  gold,
}: {
  icon: React.ElementType;
  label: string;
  gold?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium ${
        gold
          ? 'bg-gold-gradient text-navy shadow-gold'
          : 'border border-royal/15 bg-white/70 text-navy'
      }`}
    >
      <Icon className="h-3.5 w-3.5" />
      {label}
    </span>
  );
}

function Panel({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-royal/12 bg-white/70 p-5 shadow-soft backdrop-blur-xl">
      {children}
    </div>
  );
}

function Chart() {
  const bars = [40, 65, 30, 80, 55, 90, 70, 95, 60, 85, 75, 100, 80, 92];
  return (
    <div className="mt-4 flex h-32 items-end justify-between gap-1.5">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: `${h}%` }}
          transition={{ duration: 0.9, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex-1 rounded-t-md bg-gradient-to-t from-royal/30 to-royal shadow-glow"
        />
      ))}
    </div>
  );
}
