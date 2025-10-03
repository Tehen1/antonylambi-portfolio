import type { Service } from '@/types/content';

/**
 * Services professionnels - 8 services détaillés pour référencement local Liège
 * Descriptions: 50-70 mots chacune, optimisées SEO
 */
export const services: Service[] = [
  {
    id: 'smart-contracts',
    slug: 'developpement-smart-contracts-solidity',
    title: 'Développement de Smart Contracts Solidity Sécurisés',
    shortDescription:
      'Création de smart contracts robustes et audités sur Ethereum, Polygon et zkEVM. Utilisation d\u2019OpenZeppelin, ReentrancyGuard, et AccessControl pour garantir la sécurité maximale. Optimisation du gas, tests exhaustifs avec Foundry, et déploiement mainnet-ready. Chaque contrat est conçu pour résister aux attaques courantes et respecter les standards ERC.',
    technologies: ['Solidity', 'OpenZeppelin', 'Foundry', 'Hardhat', 'zkEVM'],
    benefits: [
      'Sécurité renforcée avec audits externes',
      'Optimisation gas -30% en moyenne',
      'Tests automatisés >95% coverage',
      'Documentation technique complète',
    ],
    ctaLabel: 'Demander un audit gratuit',
    featured: true,
  },
  {
    id: 'dapps',
    slug: 'creation-applications-decentralisees-dapps',
    title: 'Création d\u2019Applications Décentralisées (dApps) sur Mesure',
    shortDescription:
      'Développement full-stack de dApps performantes avec React, Next.js et Web3.js. Intégration wallet (WalletConnect, MetaMask), gestion des états blockchain, et UX optimisée pour le Web3. Architecture modulaire et scalable, compatible multi-chains. Support des NFTs, DEX, et protocoles DeFi avec interface moderne et responsive.',
    technologies: ['React', 'Next.js', 'Viem', 'Reown', 'TypeScript'],
    benefits: [
      'Expérience utilisateur fluide et intuitive',
      'Compatible desktop et mobile',
      'Intégration multi-wallets',
      'Performance optimale (Lighthouse >90)',
    ],
    ctaLabel: 'Lancer mon projet dApp',
    featured: true,
  },
  {
    id: 'ia-blockchain',
    slug: 'integration-intelligence-artificielle-blockchain',
    title: 'Intégration d\u2019Intelligence Artificielle (IA) sur Blockchain',
    shortDescription:
      'Fusion de l\u2019IA et de la blockchain pour des solutions innovantes. Agents on-chain intelligents, automatisation de trading avec machine learning, analyse prédictive de données blockchain, et NLP pour contrats intelligents. Utilisation d\u2019OpenAI API, modèles personnalisés, et pipelines ML sécurisés. Création de bots de trading, systèmes de recommandation décentralisés.',
    technologies: ['Python', 'OpenAI API', 'FastAPI', 'Solidity', 'TensorFlow'],
    benefits: [
      'Automatisation intelligente des processus',
      'Prédictions basées sur données on-chain',
      'Réduction des coûts opérationnels',
      'Décisions data-driven en temps réel',
    ],
    ctaLabel: 'Explorer les possibilités IA',
  },
  {
    id: 'audit-securite',
    slug: 'audit-securite-optimisation-smart-contracts',
    title: 'Audit de Sécurité et Optimisation de Smart Contracts',
    shortDescription:
      'Audit approfondi de vos smart contracts existants avec Slither, Mythril et tests de fuzzing. Identification et correction des vulnérabilités (reentrancy, overflow, access control). Rapport détaillé avec recommandations, optimisation du gas, et refactoring du code. Certification sécuritaire avant déploiement mainnet. Suivi post-audit et support continu.',
    technologies: ['Slither', 'Mythril', 'Foundry', 'Echidna', 'Manticore'],
    benefits: [
      'Détection de 100% des vulnérabilités critiques',
      'Rapport d\u2019audit professionnel',
      'Optimisation gas jusqu\u2019à -40%',
      'Garantie de sécurité mainnet',
    ],
    ctaLabel: 'Auditer mes contrats',
    featured: true,
  },
  {
    id: 'consulting-web3',
    slug: 'consulting-strategique-web3-entreprises',
    title: 'Consulting Stratégique Web3 pour Entreprises',
    shortDescription:
      'Accompagnement des entreprises dans leur transition Web3. Analyse des besoins, architecture technique, choix des blockchains adaptées, et roadmap de développement. Formation des équipes, best practices sécurité, et stratégie de tokenomics. Sessions de consulting personnalisées pour définir votre stratégie blockchain et maximiser le ROI de vos projets décentralisés.',
    technologies: ['Ethereum', 'Polygon', 'Solana', 'The Graph', 'IPFS'],
    benefits: [
      'Roadmap technique claire et réalisable',
      'Formation équipes internes',
      'ROI optimisé sur projets Web3',
      'Accompagnement de A à Z',
    ],
    ctaLabel: 'Réserver une consultation',
  },
  {
    id: 'formation-blockchain',
    slug: 'formation-blockchain-equipes-techniques',
    title: 'Formation Blockchain pour Équipes Techniques',
    shortDescription:
      'Programmes de formation sur mesure pour vos développeurs. Solidity avancé, architecture dApps, sécurité Web3, et DevOps blockchain. Ateliers pratiques avec cas d\u2019usage réels, code review, et mentoring. Formation continue adaptée au niveau de l\u2019équipe, de débutant à expert. Certification de compétences et support post-formation.',
    technologies: ['Solidity', 'Web3.js', 'Truffle', 'Ganache', 'Remix'],
    benefits: [
      'Montée en compétence rapide',
      'Ateliers pratiques et interactifs',
      'Support continu post-formation',
      'Certification des acquis',
    ],
    ctaLabel: 'Former mon équipe',
  },
  {
    id: 'nft-development',
    slug: 'developpement-tokens-non-fongibles-nft',
    title: 'Développement de Tokens Non Fongibles (NFT)',
    shortDescription:
      'Création de collections NFT complètes : smart contracts ERC-721/ERC-1155, marketplace personnalisé, minting dApp, et intégration IPFS. Systèmes de rarity, reveal mechanisms, whitelist, et airdrop automatisés. Support des royalties, staking de NFTs, et gamification. Déploiement sur Ethereum, Polygon, et autres chains compatibles.',
    technologies: ['ERC-721', 'ERC-1155', 'IPFS', 'Pinata', 'OpenSea API'],
    benefits: [
      'Collections NFT sécurisées et scalables',
      'Marketplace intégré clé en main',
      'Gas optimisé pour minting massif',
      'Support multi-chains',
    ],
    ctaLabel: 'Lancer ma collection NFT',
  },
  {
    id: 'ido-crowdfunding',
    slug: 'plateforme-financement-participatif-ido',
    title: 'Mise en place de Plateformes de Financement Participatif (IDOs)',
    shortDescription:
      'Développement de plateformes IDO (Initial DEX Offering) complètes. Smart contracts de vesting, staking pools, launchpad, et distribution automatisée de tokens. Intégration DEX (Uniswap, PancakeSwap), whitelist KYC, et anti-bot protection. Dashboard admin pour gestion des rounds, analytics en temps réel, et reporting complet des investisseurs.',
    technologies: ['Uniswap', 'PancakeSwap', 'Chainlink', 'Vesting Contracts'],
    benefits: [
      'Levée de fonds sécurisée',
      'Vesting automatisé et transparent',
      'Protection anti-bots et anti-snipers',
      'Dashboard analytics complet',
    ],
    ctaLabel: 'Préparer mon IDO',
  },
];
export const SERVICES = services;

/**
 * Helper: Obtenir les services mis en avant
 */
export function getFeaturedServices(): Service[] {
  return services.filter((s) => s.featured === true);
}

/**
 * Helper: Obtenir un service par slug
 */
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

/**
 * Helper: Obtenir tous les slugs pour génération statique
 */
export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
