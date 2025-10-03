'use client';

import React, { useEffect, useRef, useState } from 'react';

export type VideoPlayerProps = {
  src: string;
  poster: string;
  className?: string;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  ariaLabel?: string;
};

export function VideoPlayer(props: VideoPlayerProps) {
  const {
    src,
    poster,
    className,
    autoplay = true,
    muted = true,
    loop = true,
    ariaLabel,
  } = props;

  const [isVisible, setIsVisible] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Lazy load: observe when container enters viewport
  useEffect(() => {
    if (!containerRef.current || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) setIsVisible(true);
      },
      { rootMargin: '200px 0px' }
    );

    io.observe(containerRef.current);
    return () => io.disconnect();
  }, []);

  // Auto pause/play when entering/leaving viewport
  useEffect(() => {
    const node = videoRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') return;

    const handle = (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      if (!entry) return;
      
      if (entry.isIntersecting) {
        if (autoplay && muted) {
          node.play().catch(() => {});
        }
      } else {
        node.pause();
      }
    };

    const io = new IntersectionObserver(handle, { threshold: 0.1 });
    if (containerRef.current) io.observe(containerRef.current);

    return () => io.disconnect();
  }, [autoplay, muted]);

  const sources = [
    { src: src + '.webm', type: 'video/webm' },
    { src: src + '-optimized.mp4', type: 'video/mp4' },
    { src: src + '.mp4', type: 'video/mp4' },
  ];

  // Before video loads, show poster image
  if (!isVisible) {
    return (
      <div ref={containerRef} className={className} aria-label={ariaLabel ?? 'Video player'}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={poster} alt="Video poster" loading="lazy" width={1280} height={720} />
      </div>
    );
  }

  // On error, show poster with link to open video
  if (loadError) {
    return (
      <div ref={containerRef} className={className} aria-label={ariaLabel ?? 'Video player'}>
        <a
          href={sources[1]?.src || poster}
          target="_blank"
          rel="noreferrer"
          aria-label="Ouvrir la vidéo dans un nouvel onglet"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={poster} alt="Video fallback" />
        </a>
      </div>
    );
  }

  return (
    <div ref={containerRef} className={className} aria-label={ariaLabel ?? 'Video player'}>
      <video
        ref={videoRef}
        poster={poster}
        preload="metadata"
        muted={muted}
        loop={loop}
        autoPlay={autoplay}
        playsInline
        controls={!autoplay}
        onError={() => setLoadError('video_error')}
      >
        {sources.map((s) => (
          <source key={s.src} src={s.src} type={s.type} />
        ))}
        Votre navigateur ne supporte pas la vidéo HTML5.
      </video>
    </div>
  );
}
