import { cn } from '@/lib/cn';

type Props = {
  name: string;
  accent: string;
  size?: number;
  className?: string;
};

/**
 * Stylised initials "logo" for partner universities and colleges.
 * Reads cleanly as a brand mark when no official logo asset is available.
 */
export default function UniversityMonogram({
  name,
  accent,
  size = 48,
  className,
}: Props) {
  const initials = getInitials(name);

  return (
    <span
      className={cn(
        'relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-2xl text-white shadow-glow',
        className,
      )}
      style={{
        width: size,
        height: size,
        background: `linear-gradient(135deg, ${accent} 0%, #0B1F4D 100%)`,
      }}
      aria-hidden
    >
      {/* Subtle ring */}
      <span
        className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/15"
        aria-hidden
      />
      {/* Gold corner accent */}
      <span
        className="pointer-events-none absolute -right-3 -top-3 h-7 w-7 rounded-full opacity-80"
        style={{ background: 'radial-gradient(circle, #F3D27A, transparent 70%)' }}
        aria-hidden
      />
      <span
        className="relative heading-display tracking-tight"
        style={{ fontSize: size * 0.34, lineHeight: 1 }}
      >
        {initials}
      </span>
    </span>
  );
}

function getInitials(name: string): string {
  // Strip parentheticals, commas, periods; keep up to 3 strong initials
  const cleaned = name
    .replace(/\(.*?\)/g, '')
    .replace(/[.,]/g, '')
    .trim();
  const tokens = cleaned.split(/\s+/).filter(Boolean);

  // Filter out short connector words
  const skip = new Set(['of', 'the', 'and', 'for', 'in', '&']);
  const meaningful = tokens.filter((t) => !skip.has(t.toLowerCase()));

  // Drop a trailing "University" / "College" / "Institute" / "School" — common suffix
  const filtered = meaningful.filter(
    (t, i) =>
      !(
        i === meaningful.length - 1 &&
        /^(university|college|institute|school|education)$/i.test(t)
      ),
  );

  const source = filtered.length > 0 ? filtered : meaningful;
  return source
    .slice(0, 3)
    .map((t) => t[0]?.toUpperCase() ?? '')
    .join('');
}
