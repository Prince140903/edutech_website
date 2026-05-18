import Image from 'next/image';
import { cn } from '@/lib/cn';

type Props = {
  size?: number;
  className?: string;
  glow?: boolean;
  priority?: boolean;
};

export default function BrandLogo({
  size = 40,
  className,
  glow = true,
  priority = false,
}: Props) {
  return (
    <span
      className={cn(
        'relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full',
        glow && 'shadow-glow',
        className,
      )}
      style={{ width: size, height: size }}
    >
      <Image
        src="/logo.jpg"
        alt="Glide Education — We Shape Your Future"
        width={size * 2}
        height={size * 2}
        priority={priority}
        className="h-full w-full object-cover"
      />
    </span>
  );
}
