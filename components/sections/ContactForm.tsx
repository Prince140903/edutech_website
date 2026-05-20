'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Send } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ContactForm() {
  const params = useSearchParams();
  const courseFromUrl = params?.get('course') ?? '';
  const [course, setCourse] = useState(courseFromUrl);
  const [sent, setSent] = useState(false);

  // Keep the field in sync if the user clicks another card while staying on /contact
  useEffect(() => {
    if (courseFromUrl) setCourse(courseFromUrl);
  }, [courseFromUrl]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-8 text-center backdrop-blur-xl"
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
    <form onSubmit={onSubmit} className="flex flex-col gap-3.5">
      <Field
        name="name"
        label="Full Name"
        required
        autoComplete="name"
        placeholder="Full Name*"
      />
      <Field
        name="phone"
        label="Phone Number"
        required
        type="tel"
        autoComplete="tel"
        inputMode="tel"
        placeholder="Phone Number*"
      />
      <Field
        name="email"
        label="Email"
        required
        type="email"
        autoComplete="email"
        placeholder="Email*"
      />
      <Field
        name="state"
        label="State"
        required
        autoComplete="address-level1"
        placeholder="State*"
      />
      <Field
        name="course"
        label="Course Looking For"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        placeholder="Course Looking For"
      />

      <div className="flex flex-col gap-1.5">
        <label className="sr-only" htmlFor="message">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Your Message"
          className="w-full resize-none rounded-2xl border border-royal/15 bg-white/80 px-4 py-3 text-sm text-navy backdrop-blur-xl placeholder:text-muted/70 focus:border-royal/50 focus:outline-none focus:ring-2 focus:ring-royal/20"
        />
      </div>

      <motion.button
        type="submit"
        whileTap={{ scale: 0.98 }}
        whileHover={{ y: -2 }}
        className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-royal-gradient px-6 py-4 text-sm font-semibold text-white shadow-glow transition-shadow hover:shadow-glow-lg sm:text-base"
      >
        Submit Details
        <Send className="h-4 w-4" />
      </motion.button>

      <p className="mt-2 text-center text-[11px] leading-relaxed text-muted">
        Note: By selecting the 'Submit' button, you are expressly requesting a
        call from Glide Education & Consultant Pvt Ltd and/or its authorized
        representatives at the contact number you have provided.
      </p>
    </form>
  );
}

type FieldProps = {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
  inputMode?: 'text' | 'tel' | 'email' | 'numeric' | 'search' | 'url';
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Field({
  name,
  label,
  type = 'text',
  placeholder,
  required,
  autoComplete,
  inputMode,
  value,
  onChange,
}: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="sr-only" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder ?? label}
        required={required}
        autoComplete={autoComplete}
        inputMode={inputMode}
        value={value}
        onChange={onChange}
        className="w-full rounded-2xl border border-royal/15 bg-white/80 px-4 py-3.5 text-sm text-navy backdrop-blur-xl placeholder:text-muted/70 focus:border-royal/50 focus:outline-none focus:ring-2 focus:ring-royal/20"
      />
    </div>
  );
}
