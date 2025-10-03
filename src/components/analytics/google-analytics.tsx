'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Composant Google Analytics 4
 * 
 * @description
 * Intègre GA4 avec tracking automatique des pages vues et événements personnalisés.
 * Utilise Next.js Script component pour optimisation performance.
 * 
 * @usage
 * Ajouter dans src/app/layout.tsx :
 * ```tsx
 * import { GoogleAnalytics } from '@/components/analytics/google-analytics';
 * 
 * export default function RootLayout({ children }) {
 *   return (
 *     <html>
 *       <body>
 *         <GoogleAnalytics />
 *         {children}
 *       </body>
 *     </html>
 *   );
 * }
 * ```
 * 
 * @env NEXT_PUBLIC_GA_MEASUREMENT_ID - ID de mesure GA4 (format: G-XXXXXXXXXX)
 */
export function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  // Tracking automatique changements de page
  useEffect(() => {
    if (!measurementId || typeof window === 'undefined') return;

    const url = pathname + searchParams.toString();
    
    // @ts-expect-error - gtag est injecté par le script GA4 et n'a pas de types TypeScript
    if (typeof window.gtag !== 'undefined') {
      // @ts-expect-error - window.gtag est injecté dynamiquement par le script GA4
      window.gtag('config', measurementId, {
        page_path: url,
      });
    }
  }, [pathname, searchParams, measurementId]);

  // Ne pas charger en développement (économie quota GA4)
  if (!measurementId || process.env.NODE_ENV === 'development') {
    return null;
  }

  return (
    <>
      {/* Script principal GA4 */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      
      {/* Configuration gtag */}
      <Script
        id="google-analytics-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', '${measurementId}', {
              page_path: window.location.pathname,
              send_page_view: true,
              anonymize_ip: true, // RGPD compliance
              cookie_flags: 'SameSite=None;Secure',
            });
          `,
        }}
      />
    </>
  );
}

/**
 * Type pour les événements GA4 personnalisés
 */
export interface GAEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  [key: string]: string | number | boolean | undefined;
}

/**
 * Fonction helper pour envoyer des événements GA4
 * 
 * @example
 * ```tsx
 * import { trackEvent } from '@/components/analytics/google-analytics';
 * 
 * // Tracking clic bouton contact
 * trackEvent({
 *   action: 'contact_form_submit',
 *   category: 'engagement',
 *   label: 'homepage_contact',
 * });
 * 
 * // Tracking lecture vidéo complète
 * trackEvent({
 *   action: 'video_complete',
 *   category: 'media',
 *   label: 'fixie.run-home',
 *   value: 45, // durée en secondes
 * });
 * ```
 */
export function trackEvent({ action, category, label, value, ...otherParams }: GAEvent) {
  if (typeof window === 'undefined' || process.env.NODE_ENV === 'development') {
    console.log('[GA4 Dev] Event:', { action, category, label, value, ...otherParams });
    return;
  }

  // @ts-expect-error - gtag injecté par script et n'a pas de types TypeScript
  if (typeof window.gtag !== 'undefined') {
    // @ts-expect-error - window.gtag est injecté dynamiquement par le script GA4
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
      ...otherParams,
    });
  }
}

/**
 * Hook React pour tracking événements
 * 
 * @example
 * ```tsx
 * import { useAnalytics } from '@/components/analytics/google-analytics';
 * 
 * function ContactForm() {
 *   const { trackEvent } = useAnalytics();
 *   
 *   const handleSubmit = () => {
 *     trackEvent({
 *       action: 'form_submit',
 *       category: 'contact',
 *       label: 'newsletter_signup',
 *     });
 *   };
 *   
 *   return <form onSubmit={handleSubmit}>...</form>;
 * }
 * ```
 */
export function useAnalytics() {
  return { trackEvent };
}
