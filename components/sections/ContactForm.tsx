'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Send } from 'lucide-react';
import { useState } from 'react';

const streams = [
  'Engineering',
  'Medical',
  'Management',
  'Law',
  'Education',
  'Pharmacy',
  'Online Education',
  'Distance Education',
  'Vocational Courses',
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-2xl border border-royal/20 bg-pearl/60 p-8 text-center backdrop-blur-xl"
      >
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 shadow-glow">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="heading-display mt-4 text-xl text-navy">
          Request received
        </h3>
        <p className="mt-2 text-sm text-muted">
          Our admissions team will reach out within 1 working hour.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <Field label="Full name" name="name" placeholder="Your name" required />
      <Field
        label="Phone"
        name="phone"
        type="tel"
        placeholder="+91 90000 00000"
        required
      />
      <Field
        label="Email"
        name="email"
        type="email"
        placeholder="you@example.com"
        required
        className="sm:col-span-2"
      />

      <div className="sm:col-span-2">
        <label className="text-xs font-semibold uppercase tracking-widest text-muted">
          Interested in
        </label>
        <select
          name="stream"
          required
          className="mt-1.5 w-full rounded-xl border border-royal/15 bg-white/80 px-4 py-3 text-sm text-navy backdrop-blur-xl focus:border-royal/50 focus:outline-none focus:ring-2 focus:ring-royal/20"
          defaultValue=""
        >
          <option value="" disabled>
            Choose a program type
          </option>
          {streams.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2">
        <label className="text-xs font-semibold uppercase tracking-widest text-muted">
          Message
        </label>
        <textarea
          name="message"
          rows={4}
          placeholder="Tell us about your goals…"
          className="mt-1.5 w-full resize-none rounded-xl border border-royal/15 bg-white/80 px-4 py-3 text-sm text-navy backdrop-blur-xl placeholder:text-muted/60 focus:border-royal/50 focus:outline-none focus:ring-2 focus:ring-royal/20"
        />
      </div>

      <div className="sm:col-span-2">
        <motion.button
          type="submit"
          whileTap={{ scale: 0.98 }}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-all hover:shadow-glow-lg sm:w-auto"
        >
          Send request
          <Send className="h-4 w-4" />
        </motion.button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
  required,
  className,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="text-xs font-semibold uppercase tracking-widest text-muted">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="mt-1.5 w-full rounded-xl border border-royal/15 bg-white/80 px-4 py-3 text-sm text-navy backdrop-blur-xl placeholder:text-muted/60 focus:border-royal/50 focus:outline-none focus:ring-2 focus:ring-royal/20"
      />
    </div>
  );
}
