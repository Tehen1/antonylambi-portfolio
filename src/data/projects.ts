import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'fixierun',
    slug: 'fixierun-ride-earn-evolve',
    title: 'FixieRun - Ride, Earn, Evolve',
    description:
      "Plateforme de course blockchain révolutionnaire avec NFTs et économie de jetons. 'Ride, Earn, Evolve' - Une expérience gaming Web3 immersive.",
    category: 'blockchain',
    status: 'live',
    tech: ['Solidity', 'React', 'Web3.js', 'Next.js'],
    metrics: {
      users: '15K+ Utilisateurs',
      performance: '99.9% Performance',
    },
    images: ['/images/projects/fixierun.jpeg'],
    video: '/videos/fixie.run-home.mp4',
    poster: '/images/projects/fixierun.jpeg',
    liveUrl: 'https://fixie.run',
    highlight: true,
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2025-03-01'),
  },
  {
    id: 'rhymechain',
    slug: 'rhymechain-music-nft-marketplace',
    title: 'RhymeChain',
    description:
      'Marketplace décentralisé pour les artistes musicaux. Monétisation directe via NFTs et smart contracts.',
    category: 'blockchain',
    status: 'live',
    tech: ['Ethereum', 'TypeScript', 'Next.js', 'IPFS'],
    metrics: {
      users: '8K+ Utilisateurs',
      performance: '98.5% Performance',
    },
    images: ['/images/projects/rhymechain-icon.png'],
    video: '/videos/rhymechain.mp4',
    poster: '/images/projects/rhymechain-icon.png',
    highlight: true,
    createdAt: new Date('2023-09-10'),
    updatedAt: new Date('2025-02-15'),
  },
  {
    id: 'seo-analytics-pro',
    slug: 'seo-analytics-pro',
    title: 'SEO Analytics Pro',
    description:
      'Dashboard analytics SEO complet avec IA prédictive. Optimisation automatisée et reporting avancé.',
    category: 'seo',
    status: 'live',
    tech: ['React', 'D3.js', 'Analytics', 'Python'],
    metrics: {
      users: '25K+ Utilisateurs',
      performance: '97% Performance',
    },
    images: ['/images/projects/seo-analytics.jpeg'],
    liveUrl: '#',
    highlight: true,
    createdAt: new Date('2023-06-01'),
    updatedAt: new Date('2025-01-20'),
  },
  {
    id: 'aiftw',
    slug: 'aiftw-ai-tools-marketplace',
    title: 'AIFTW - AI Tools Marketplace',
    description: "Marketplace d'outils IA avec 180+ bots, ML Pipeline, et automatisation SaaS.",
    category: 'ai',
    status: 'live',
    tech: ['React', 'OpenAI', 'FastAPI', 'PostgreSQL'],
    metrics: {
      users: '180+ Bots',
      performance: 'SaaS Platform',
    },
    images: ['/images/projects/aiftw.jpeg'],
    highlight: false,
    createdAt: new Date('2024-03-10'),
    updatedAt: new Date('2025-02-28'),
  },
  {
    id: 'ai-content-generator',
    slug: 'ai-content-generator',
    title: 'AI Content Generator',
    description:
      'Générateur de contenu IA pour marketing digital. Templates intelligents et optimisation SEO automatique.',
    category: 'ai',
    status: 'live',
    tech: ['React', 'OpenAI', 'GPT-4', 'Node.js'],
    metrics: {
      users: '5K+ Utilisateurs',
      performance: '94% Performance',
    },
    images: ['/images/projects/ai-content.jpeg'],
    highlight: false,
    createdAt: new Date('2024-05-20'),
    updatedAt: new Date('2025-03-05'),
  },
  {
    id: 'ai-image-generator',
    slug: 'ai-image-generator',
    title: 'AI Image Generator',
    description:
      "Générateur d'images IA avancé. Création d'œuvres d'art numériques et d'illustrations professionnelles à partir de texte.",
    category: 'ai',
    status: 'live',
    tech: ['Python', 'Stable Diffusion', 'DALL-E', 'FastAPI'],
    metrics: {
      users: '12K+ Images générées',
      performance: '95% Performance',
    },
    images: ['/images/projects/ai-image.jpeg'],
    highlight: false,
    createdAt: new Date('2024-07-15'),
    updatedAt: new Date('2025-02-10'),
  },
  {
    id: 'investment-manager-pro',
    slug: 'investment-manager-pro',
    title: 'Investment Manager Pro',
    description: "Application de gestion d'investissements avec IA prédictive.",
    category: 'webdev',
    status: 'live',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Chart.js'],
    metrics: {
      users: '1K+ Utilisateurs',
      performance: '96% Performance',
    },
    images: ['/images/projects/investment-icon.png'],
    highlight: false,
    createdAt: new Date('2023-11-05'),
    updatedAt: new Date('2025-01-30'),
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category);
}

export function getHighlightedProjects(): Project[] {
  return projects.filter((p) => p.highlight);
}

type ProjectCategory = 'seo' | 'blockchain' | 'ai' | 'webdev';
