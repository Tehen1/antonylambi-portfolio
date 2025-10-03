import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { TechStack } from '@/components/sections/TechStack';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { SEOToolkit } from '@/components/sections/SEOToolkit';
import { Contact } from '@/components/sections/Contact';
import { SITE_CONFIG, STRUCTURED_DATA } from '@/lib/constants';
import { generateFAQJsonLd } from '@/data/faq';

/**
 * METADATA SEO OPTIMISÉ
 * - Title et description avec mots-clés locaux
 * - Open Graph et Twitter cards
 * - Canonical URL
 */
export const metadata: Metadata = {
  title: SITE_CONFIG.seo.title,
  description: SITE_CONFIG.seo.description,
  keywords: [
    'développeur blockchain liège',
    'smart contracts solidity',
    'audit sécurité web3',
    'dapp ethereum',
    'développeur web3 belgique',
    'polygon zkEVM',
    'next.js typescript',
    'intégration IA blockchain',
  ],
  authors: [{ name: 'Antony Lambi', url: SITE_CONFIG.url }],
  creator: 'Antony Lambi',
  openGraph: {
    type: 'website',
    locale: 'fr_BE',
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.seo.title,
    description: SITE_CONFIG.seo.description,
    siteName: 'Antony Lambi Portfolio',
    images: [
      {
        url: `${SITE_CONFIG.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Antony Lambi - Développeur Blockchain Liège',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.seo.title,
    description: SITE_CONFIG.seo.description,
    images: [`${SITE_CONFIG.url}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

/**
 * PAGE PRINCIPALE - PORTFOLIO COMPLET
 * - 8 sections optimisées SEO
 * - JSON-LD structured data
 * - Accessibilité WCAG 2.1
 */
export default function Home() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(STRUCTURED_DATA),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQJsonLd()),
        }}
      />

      <Header />

      <main className="min-h-screen">
        {/* Section 1: Hero avec H1 SEO */}
        <Hero />

        {/* Section 2: À propos et métriques */}
        <About />

        {/* Section 3: Services (8 offres) */}
        <Services />

        {/* Section 4: Stack technologique */}
        <TechStack />

        {/* Section 5: Témoignages clients */}
        <Testimonials />

        {/* Section 6: FAQ optimisée PAA */}
        <FAQ />

        {/* Section 7: SEO Toolkit gratuit */}
        <SEOToolkit />

        {/* Section 8: Contact enrichi */}
        <Contact />
      </main>

      <Footer />
    </>
  );
}
