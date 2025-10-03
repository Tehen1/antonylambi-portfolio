import type { TechStackCategory } from '@/types/content';

/**
 * STACK TECHNOLOGIQUE COMPLET
 * Organisé par catégories avec niveaux d'expertise
 */
export const TECH_STACK: TechStackCategory[] = [
  {
    category: 'Frontend',
    description: 'Interfaces modernes, responsive et performantes',
    technologies: [
      {
        name: 'Next.js',
        level: 'expert',
        icon: '⚡',
        description: 'Framework React pour production avec SSR/SSG',
        yearsOfExperience: 4,
      },
      {
        name: 'React',
        level: 'expert',
        icon: '⚛️',
        description: 'Library UI composant-based avec hooks',
        yearsOfExperience: 5,
      },
      {
        name: 'TypeScript',
        level: 'expert',
        icon: '🔷',
        description: 'JavaScript typé pour code robuste',
        yearsOfExperience: 5,
      },
      {
        name: 'Tailwind CSS',
        level: 'expert',
        icon: '🎨',
        description: 'Framework CSS utility-first',
        yearsOfExperience: 3,
      },
      {
        name: 'Shadcn/ui',
        level: 'advanced',
        icon: '🧩',
        description: 'Composants React accessible et customisables',
        yearsOfExperience: 2,
      },
    ],
  },
  {
    category: 'Backend',
    description: 'APIs scalables et bases de données optimisées',
    technologies: [
      {
        name: 'Node.js',
        level: 'expert',
        icon: '🟢',
        description: 'Runtime JavaScript server-side',
        yearsOfExperience: 6,
      },
      {
        name: 'NestJS',
        level: 'advanced',
        icon: '🐈',
        description: 'Framework backend TypeScript scalable',
        yearsOfExperience: 3,
      },
      {
        name: 'Prisma',
        level: 'expert',
        icon: '🔺',
        description: 'ORM moderne type-safe',
        yearsOfExperience: 3,
      },
      {
        name: 'PostgreSQL',
        level: 'advanced',
        icon: '🐘',
        description: 'Base de données relationnelle robuste',
        yearsOfExperience: 5,
      },
      {
        name: 'Redis',
        level: 'advanced',
        icon: '📦',
        description: 'Cache in-memory pour performance',
        yearsOfExperience: 4,
      },
    ],
  },
  {
    category: 'Blockchain',
    description: 'Smart contracts sécurisés et dApps Web3',
    technologies: [
      {
        name: 'Solidity',
        level: 'expert',
        icon: '◆',
        description: 'Langage smart contracts Ethereum',
        yearsOfExperience: 4,
      },
      {
        name: 'Foundry',
        level: 'expert',
        icon: '🔨',
        description: 'Framework testing smart contracts',
        yearsOfExperience: 2,
      },
      {
        name: 'Viem',
        level: 'expert',
        icon: '🌐',
        description: 'Library TypeScript pour interactions Web3',
        yearsOfExperience: 2,
      },
      {
        name: 'Polygon zkEVM',
        level: 'advanced',
        icon: '🟣',
        description: 'Layer 2 Ethereum scalable',
        yearsOfExperience: 2,
      },
      {
        name: 'Arbitrum',
        level: 'advanced',
        icon: '🔵',
        description: 'Optimistic rollup Ethereum',
        yearsOfExperience: 2,
      },
      {
        name: 'OpenZeppelin',
        level: 'expert',
        icon: '🛡️',
        description: 'Library sécurité smart contracts',
        yearsOfExperience: 4,
      },
    ],
  },
  {
    category: 'Intelligence Artificielle',
    description: 'Intégration IA et automatisation intelligente',
    technologies: [
      {
        name: 'OpenAI API',
        level: 'advanced',
        icon: '🤖',
        description: 'GPT-4 et modèles avancés',
        yearsOfExperience: 2,
      },
      {
        name: 'Perplexity API',
        level: 'advanced',
        icon: '🔍',
        description: 'Recherche conversationnelle avec sources',
        yearsOfExperience: 1,
      },
      {
        name: 'LangChain',
        level: 'intermediate',
        icon: '⛓️',
        description: 'Framework applications LLM',
        yearsOfExperience: 1,
      },
      {
        name: 'Pinecone',
        level: 'intermediate',
        icon: '🌲',
        description: 'Vector database pour embeddings',
        yearsOfExperience: 1,
      },
    ],
  },
  {
    category: 'DevOps & Infrastructure',
    description: 'Déploiement continu et monitoring',
    technologies: [
      {
        name: 'Docker',
        level: 'expert',
        icon: '🐳',
        description: 'Containerisation applications',
        yearsOfExperience: 5,
      },
      {
        name: 'GitHub Actions',
        level: 'expert',
        icon: '⚙️',
        description: 'CI/CD automatisé',
        yearsOfExperience: 4,
      },
      {
        name: 'Vercel',
        level: 'expert',
        icon: '▲',
        description: 'Plateforme deployment Next.js',
        yearsOfExperience: 3,
      },
      {
        name: 'AWS',
        level: 'advanced',
        icon: '☁️',
        description: 'Cloud infrastructure scalable',
        yearsOfExperience: 4,
      },
      {
        name: 'Terraform',
        level: 'intermediate',
        icon: '🏗️',
        description: 'Infrastructure as Code',
        yearsOfExperience: 2,
      },
    ],
  },
  {
    category: 'SEO & Analytics',
    description: 'Optimisation visibilité et suivi performance',
    technologies: [
      {
        name: 'Next SEO',
        level: 'expert',
        icon: '🎯',
        description: 'Gestion metadata et Schema.org',
        yearsOfExperience: 3,
      },
      {
        name: 'Google Analytics',
        level: 'advanced',
        icon: '📊',
        description: 'Tracking et analytics avancés',
        yearsOfExperience: 5,
      },
      {
        name: 'Vercel Analytics',
        level: 'advanced',
        icon: '📈',
        description: 'Web Vitals et performance',
        yearsOfExperience: 2,
      },
      {
        name: 'Schema.org',
        level: 'expert',
        icon: '📋',
        description: 'Structured data pour rich snippets',
        yearsOfExperience: 4,
      },
    ],
  },
];

/**
 * Statistiques globales du stack
 */
export const TECH_STATS = {
  totalTechnologies: TECH_STACK.reduce((acc, cat) => acc + cat.technologies.length, 0),
  averageExperience:
    TECH_STACK.reduce(
      (acc, cat) =>
        acc + cat.technologies.reduce((sum, tech) => sum + tech.yearsOfExperience, 0),
      0,
    ) / TECH_STACK.reduce((acc, cat) => acc + cat.technologies.length, 0),
  expertTechnologies: TECH_STACK.reduce(
    (acc, cat) => acc + cat.technologies.filter((t) => t.level === 'expert').length,
    0,
  ),
};
