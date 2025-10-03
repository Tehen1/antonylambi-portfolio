/**
 * Configuration centralisée des assets du portfolio
 * Facilite la maintenance et évite les erreurs de chemins
 */

export const ASSETS = {
  // Icônes de projets
  icons: {
    fixierun: '/images/icons/fixierun-icon.png',
    rhymechain: '/images/icons/rhymechain-icon.png',
    investment: '/images/icons/investment-icon.png',
    seo: '/images/icons/seo-icon.png',
  },

  // Screenshots de projets Fixie Run
  fixierun: {
    home: '/images/fixie.run.jpeg',
    screenshot1: '/images/fixierun-screenshot-1.jpeg',
    screenshot2: '/images/fixierun-screenshot-2.jpeg',
    screenshot3: '/images/fixierun-screenshot-3.jpeg',
    screenshot4: '/images/fixierun-screenshot-4.jpeg',
  },

  // Vidéos d'expertise
  videos: {
    expertise: {
      blockchainAI: '/videos/expertise-blockchain-ai.mp4',
      seo: '/videos/expertise-seo.mp4',
      webDev: '/videos/expertise-web-dev.mp4',
    },
    projects: {
      fixierunHome: '/videos/fixie.run-home.mp4',
      rhymechain: '/videos/rhymechain.mp4',
    },
  },
} as const;

/**
 * Type-safe access to asset paths
 */
export type AssetPath = (typeof ASSETS)[keyof typeof ASSETS];

/**
 * Métadonnées des projets avec leurs assets
 */
export const PROJECT_ASSETS = {
  fixierun: {
    name: 'Fixie Run',
    description: 'Plateforme IA pour automatisation Web3',
    icon: ASSETS.icons.fixierun,
    screenshots: [
      ASSETS.fixierun.home,
      ASSETS.fixierun.screenshot1,
      ASSETS.fixierun.screenshot2,
      ASSETS.fixierun.screenshot3,
      ASSETS.fixierun.screenshot4,
    ],
    video: ASSETS.videos.projects.fixierunHome,
    tags: ['Next.js', 'TypeScript', 'IA', 'Web3'],
  },
  rhymechain: {
    name: 'RhymeChain',
    description: 'NFT Music Platform sur Blockchain',
    icon: ASSETS.icons.rhymechain,
    video: ASSETS.videos.projects.rhymechain,
    tags: ['Blockchain', 'NFT', 'Solidity', 'Web3'],
  },
} as const;

/**
 * Configuration des expertises avec vidéos
 */
export const EXPERTISE_VIDEOS = {
  blockchainAI: {
    title: 'Blockchain & Intelligence Artificielle',
    description: 'Développement de smart contracts et agents IA on-chain',
    video: ASSETS.videos.expertise.blockchainAI,
    icon: '🔗',
  },
  seo: {
    title: 'SEO & Optimisation Web',
    description: 'Stratégies SEO avancées et performance web',
    video: ASSETS.videos.expertise.seo,
    icon: '🚀',
  },
  webDev: {
    title: 'Développement Web Full-Stack',
    description: 'React, Next.js, TypeScript et architectures modernes',
    video: ASSETS.videos.expertise.webDev,
    icon: '💻',
  },
} as const;

/**
 * Assets vidéos optimisés pour les projets
 * Inclut: MP4 original, MP4 optimisé, WebM, et poster
 */
export const VIDEO_ASSETS = {
  fixieRun: {
    base: '/videos/fixie.run-home',
    poster: '/videos/fixie.run-home-poster.png',
    mp4: '/videos/fixie.run-home.mp4',
    mp4Optimized: '/videos/fixie.run-home-optimized.mp4',
    webm: '/videos/fixie.run-home.webm',
  },
  rhymechain: {
    base: '/videos/rhymechain',
    poster: '/videos/rhymechain-poster.png',
    mp4: '/videos/rhymechain.mp4',
    mp4Optimized: '/videos/rhymechain-optimized.mp4',
    webm: '/videos/rhymechain.webm',
  },
} as const;

export type VideoAssetKey = keyof typeof VIDEO_ASSETS;
