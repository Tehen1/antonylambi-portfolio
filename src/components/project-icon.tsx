import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ProjectIconProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  priority?: boolean;
}

const ICON_SIZES = {
  sm: 48,
  md: 64,
  lg: 96,
  xl: 128,
} as const;

/**
 * Composant pour afficher les icônes de projets
 * Gère automatiquement les tailles selon les breakpoints
 */
export function ProjectIcon({
  src,
  alt,
  size = 'md',
  className,
  priority = false,
}: ProjectIconProps) {
  const iconSize = ICON_SIZES[size];

  return (
    <div
      className={cn(
        'relative flex items-center justify-center',
        'rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10',
        'p-3 shadow-lg backdrop-blur-sm',
        'transition-all duration-300 hover:scale-110 hover:shadow-xl',
        className
      )}
      style={{
        width: iconSize,
        height: iconSize,
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={iconSize - 24}
        height={iconSize - 24}
        quality={95}
        priority={priority}
        className="object-contain"
      />
    </div>
  );
}
