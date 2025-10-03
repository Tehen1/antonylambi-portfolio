import type { SocialLink } from '@/types';

export const SITE_CONFIG = {
  name: 'Antony Lambinon',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://antonylambi.be',
  seo: {
    title: 'Développeur Blockchain & Smart Contracts à Liège | Antony Lambinon',
    description:
      'Expert développeur blockchain à Liège spécialisé en Solidity, smart contracts et dApps. Plus de 5 ans d\'expérience, 100+ projets réalisés. Audit de sécurité Web3, optimisation gas et déploiement mainnet-ready.',
  },
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@antonylambi.be',
    phone: '+32 467 84 18 50',
    location: 'Liège, Wallonie, Belgique',
  },
  social: {
    github: 'tehen1',
    linkedin: 'antony-lambinon',
    twitter: '@antonylambi',
  },
  ogImage: '/images/og-image.jpg',
  locale: 'fr_BE',
  location: {
    city: 'Liège',
    region: 'Wallonie',
    country: 'Belgique',
    countryCode: 'BE',
  },
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
    url: `mailto:${SITE_CONFIG.contact.email}`,
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
  '@type': 'ProfessionalService',
  name: 'Antony Lambinon - Développeur Blockchain Liège',
  alternateName: 'Antony Lambi',
  url: SITE_CONFIG.url,
  logo: `${SITE_CONFIG.url}/images/logo.png`,
  image: `${SITE_CONFIG.url}/images/og-image.jpg`,
  description: SITE_CONFIG.seo.description,
  telephone: SITE_CONFIG.contact.phone,
  email: SITE_CONFIG.contact.email,
  priceRange: '€€€',
  address: {
    '@type': 'PostalAddress',
    addressLocality: SITE_CONFIG.location.city,
    addressRegion: SITE_CONFIG.location.region,
    addressCountry: SITE_CONFIG.location.countryCode,
  },
  areaServed: [
    {
      '@type': 'Country',
      name: 'Belgique',
    },
    {
      '@type': 'Country',
      name: 'Europe',
    },
  ],
  sameAs: SOCIAL_LINKS.filter((link) => link.name !== 'Email').map((link) => link.url),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services Blockchain',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Développement Smart Contracts Solidity',
          description:
            'Création de smart contracts sécurisés et audités sur Ethereum, Polygon et zkEVM',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Création dApps Décentralisées',
          description:
            'Développement d\'applications blockchain full-stack avec React et Web3',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Audit de Sécurité Web3',
          description:
            'Audit approfondi de smart contracts avec Slither, Mythril et tests de fuzzing',
        },
      },
    ],
  },
  knowsAbout: [
    'Solidity',
    'Smart Contracts',
    'Blockchain',
    'Ethereum',
    'Web3',
    'DeFi',
    'NFT',
    'dApps',
    'OpenZeppelin',
    'Foundry',
    'React',
    'Next.js',
    'TypeScript',
  ],
};
