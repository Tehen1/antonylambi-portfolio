'use client';

import { useCallback, useRef } from 'react';
import { trackEvent } from '@/components/analytics/google-analytics';

/**
 * Hook pour tracking événements vidéo avec Google Analytics 4
 * 
 * @description
 * Suit les événements clés des vidéos : play, pause, complete, quartiles (25%, 50%, 75%)
 * Conforme aux best practices GA4 pour médias enrichis
 * 
 * @param videoId - Identifiant unique de la vidéo (ex: 'fixie.run-home')
 * 
 * @example
 * ```tsx
 * import { useVideoAnalytics } from '@/hooks/use-video-analytics';
 * 
 * function VideoPlayer({ src }: { src: string }) {
 *   const { onPlay, onPause, onTimeUpdate, onEnded } = useVideoAnalytics('my-video-id');
 *   
 *   return (
 *     <video
 *       src={src}
 *       onPlay={onPlay}
 *       onPause={onPause}
 *       onTimeUpdate={onTimeUpdate}
 *       onEnded={onEnded}
 *     />
 *   );
 * }
 * ```
 */
export function useVideoAnalytics(videoId: string) {
  // Tracking des quartiles déjà envoyés (évite doublons)
  const quartilesTracked = useRef({
    q25: false,
    q50: false,
    q75: false,
    q100: false,
  });

  /**
   * Événement : Lecture vidéo démarrée
   */
  const onPlay = useCallback((event: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = event.currentTarget;
    
    trackEvent({
      action: 'video_play',
      category: 'media',
      label: videoId,
      video_duration: Math.round(video.duration),
      video_current_time: Math.round(video.currentTime),
    });
  }, [videoId]);

  /**
   * Événement : Vidéo mise en pause
   */
  const onPause = useCallback((event: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = event.currentTarget;
    const percentWatched = (video.currentTime / video.duration) * 100;
    
    trackEvent({
      action: 'video_pause',
      category: 'media',
      label: videoId,
      video_percent: Math.round(percentWatched),
      video_current_time: Math.round(video.currentTime),
    });
  }, [videoId]);

  /**
   * Événement : Progression lecture (quartiles 25%, 50%, 75%)
   */
  const onTimeUpdate = useCallback((event: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = event.currentTarget;
    const percent = (video.currentTime / video.duration) * 100;

    // Quartile 25%
    if (percent >= 25 && !quartilesTracked.current.q25) {
      quartilesTracked.current.q25 = true;
      trackEvent({
        action: 'video_progress',
        category: 'media',
        label: videoId,
        video_percent: 25,
        video_current_time: Math.round(video.currentTime),
      });
    }

    // Quartile 50%
    if (percent >= 50 && !quartilesTracked.current.q50) {
      quartilesTracked.current.q50 = true;
      trackEvent({
        action: 'video_progress',
        category: 'media',
        label: videoId,
        video_percent: 50,
        video_current_time: Math.round(video.currentTime),
      });
    }

    // Quartile 75%
    if (percent >= 75 && !quartilesTracked.current.q75) {
      quartilesTracked.current.q75 = true;
      trackEvent({
        action: 'video_progress',
        category: 'media',
        label: videoId,
        video_percent: 75,
        video_current_time: Math.round(video.currentTime),
      });
    }
  }, [videoId]);

  /**
   * Événement : Vidéo terminée (100%)
   */
  const onEnded = useCallback((event: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = event.currentTarget;
    
    // Marquer 100% uniquement si pas déjà tracké
    if (!quartilesTracked.current.q100) {
      quartilesTracked.current.q100 = true;
      
      trackEvent({
        action: 'video_complete',
        category: 'media',
        label: videoId,
        video_percent: 100,
        video_duration: Math.round(video.duration),
      });
    }
  }, [videoId]);

  /**
   * Reset du tracking (utile si vidéo rejouée)
   */
  const resetTracking = useCallback(() => {
    quartilesTracked.current = {
      q25: false,
      q50: false,
      q75: false,
      q100: false,
    };
  }, []);

  return {
    onPlay,
    onPause,
    onTimeUpdate,
    onEnded,
    resetTracking,
  };
}

/**
 * Hook pour tracking événements formulaire contact
 * 
 * @example
 * ```tsx
 * import { useFormAnalytics } from '@/hooks/use-video-analytics';
 * 
 * function ContactForm() {
 *   const { trackFormStart, trackFormSubmit, trackFormError } = useFormAnalytics('contact_form');
 *   
 *   return (
 *     <form
 *       onFocus={trackFormStart}
 *       onSubmit={(e) => {
 *         e.preventDefault();
 *         trackFormSubmit({ email: 'user@example.com' });
 *       }}
 *     >
 *       ...
 *     </form>
 *   );
 * }
 * ```
 */
export function useFormAnalytics(formId: string) {
  const formStartTracked = useRef(false);

  const trackFormStart = useCallback(() => {
    if (formStartTracked.current) return;
    
    formStartTracked.current = true;
    trackEvent({
      action: 'form_start',
      category: 'engagement',
      label: formId,
    });
  }, [formId]);

  const trackFormSubmit = useCallback((data?: Record<string, string | number | boolean>) => {
    trackEvent({
      action: 'form_submit',
      category: 'conversion',
      label: formId,
      ...data,
    });
  }, [formId]);

  const trackFormError = useCallback((errorField: string) => {
    trackEvent({
      action: 'form_error',
      category: 'engagement',
      label: formId,
      error_field: errorField,
    });
  }, [formId]);

  return {
    trackFormStart,
    trackFormSubmit,
    trackFormError,
  };
}

/**
 * Hook pour tracking clics externes (GitHub, LinkedIn, etc.)
 * 
 * @example
 * ```tsx
 * import { useExternalLinkTracking } from '@/hooks/use-video-analytics';
 * 
 * function SocialLinks() {
 *   const trackExternalClick = useExternalLinkTracking();
 *   
 *   return (
 *     <a
 *       href="https://github.com/devtehen"
 *       onClick={() => trackExternalClick('github', 'https://github.com/devtehen')}
 *       target="_blank"
 *       rel="noopener noreferrer"
 *     >
 *       GitHub
 *     </a>
 *   );
 * }
 * ```
 */
export function useExternalLinkTracking() {
  return useCallback((platform: string, url: string) => {
    trackEvent({
      action: 'external_link_click',
      category: 'outbound',
      label: platform,
      link_url: url,
    });
  }, []);
}

/**
 * Hook pour tracking détails projet
 */
export function useProjectAnalytics() {
  const trackProjectView = useCallback((projectSlug: string, projectTitle: string) => {
    trackEvent({
      action: 'project_view',
      category: 'engagement',
      label: projectSlug,
      project_title: projectTitle,
    });
  }, []);

  const trackProjectDemo = useCallback((projectSlug: string, demoUrl: string) => {
    trackEvent({
      action: 'project_demo_click',
      category: 'engagement',
      label: projectSlug,
      demo_url: demoUrl,
    });
  }, []);

  const trackProjectRepo = useCallback((projectSlug: string, repoUrl: string) => {
    trackEvent({
      action: 'project_repo_click',
      category: 'engagement',
      label: projectSlug,
      repo_url: repoUrl,
    });
  }, []);

  return {
    trackProjectView,
    trackProjectDemo,
    trackProjectRepo,
  };
}
