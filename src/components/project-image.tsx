import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ProjectImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  quality?: number;
}

/**
 * Composant optimisé pour afficher les images de projets
 * Utilise Next.js Image pour l'optimisation automatique
 */
export function ProjectImage({
  src,
  alt,
  width = 800,
  height = 600,
  className,
  priority = false,
  fill = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  quality = 85,
}: ProjectImageProps) {
  const imageClasses = cn(
    'rounded-lg transition-transform duration-300 hover:scale-105',
    className
  );

  if (fill) {
    return (
      <div className="relative w-full h-full">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          quality={quality}
          priority={priority}
          className={imageClasses}
          style={{ objectFit: 'cover' }}
        />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      quality={quality}
      priority={priority}
      className={imageClasses}
      sizes={sizes}
    />
  );
}
