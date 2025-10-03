import type { SocialLink } from '@/types';

export const SITE_CONFIG = {
  name: 'Antony Lambinon',
  title: 'Antony Lambinon | Expert SEO, IA & Blockchain',
  description:
    'Portfolio professionnel d\'Antony Lambinon, développeur full-stack spécialisé en React, Next.js, SEO, Intelligence Artificielle et Blockchain. Plus de 5 ans d\'expérience et 100+ projets réalisés.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://antonylambi.be',
  ogImage: '/images/og-image.jpg',
  twitterHandle: '@antonylambi',
  locale: 'fr_FR',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@antonylambi.be',
} as const;

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/tehen1',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/antony-lambinon',
    icon: 'linkedin',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/antonylambi',
    icon: 'twitter',
  },
  {
    name: 'Email',
    url: `mailto:${SITE_CONFIG.email}`,
    icon: 'mail',
  },
];

export const NAV_LINKS = [
  { href: '#about', label: 'À propos' },
  { href: '#projects', label: 'Projets' },
  { href: '#skills', label: 'Compétences' },
  { href: '#testimonials', label: 'Témoignages' },
  { href: '#contact', label: 'Contact' },
] as const;

export const METRICS = {
  projectsCompleted: '100+',
  yearsExperience: '5+',
  clientsSatisfied: '50+',
  technologiesMastered: '20+',
} as const;

export const STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  image: `${SITE_CONFIG.url}/images/profile.jpg`,
  jobTitle: 'Développeur Full-Stack',
  description: SITE_CONFIG.description,
  sameAs: SOCIAL_LINKS.filter((link) => link.name !== 'Email').map((link) => link.url),
  knowsAbout: [
    'React',
    'Next.js',
    'TypeScript',
    'Blockchain',
    'Solidity',
    'SEO',
    'Intelligence Artificielle',
    'Web3',
  ],
  workLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'BE',
    },
  },
};
