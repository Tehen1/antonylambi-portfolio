import type { FAQItem } from '@/types/content';

/**
 * FAQ - Questions fréquentes optimisées SEO (People Also Ask)
 * Réponses complètes et techniques pour référencement local Liège + blockchain
 */
export const faqItems: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Combien coûte le développement d\u2019un smart contract ?',
    answer:
      'Le coût varie selon la complexité : un contrat ERC-20 simple coûte entre 2 000-5 000€, tandis qu\u2019un protocole DeFi complet peut atteindre 15 000-50 000€. Ce tarif inclut le développement, les tests automatisés (>95% coverage), l\u2019audit de sécurité avec Slither/Mythril, l\u2019optimisation gas, et le déploiement mainnet. Je fournis un devis détaillé après analyse de vos besoins spécifiques. Les facteurs influençant le prix : nombre de fonctions, intégrations externes (oracles, DEX), niveau de sécurité requis, et support post-lancement.',
    seoSlug: 'cout-developpement-smart-contract',
    keywords: ['prix smart contract', 'coût blockchain', 'tarif développeur solidity'],
    category: 'blockchain',
  },
  {
    id: 'faq-2',
    question: 'Comment bien choisir son développeur blockchain ?',
    answer:
      'Vérifiez d\u2019abord son portfolio avec des projets mainnet déployés et audités. Un bon développeur blockchain maîtrise Solidity, les standards ERC, et les outils de sécurité (Foundry, Slither). Demandez des références clients, consultez son GitHub pour évaluer la qualité du code, et assurez-vous qu\u2019il pratique le TDD (Test-Driven Development). La communication est essentielle : il doit expliquer clairement les concepts techniques et proposer des solutions adaptées à votre budget. Privilégiez un expert local à Liège pour faciliter les échanges et un suivi régulier.',
    seoSlug: 'choisir-developpeur-blockchain',
    keywords: [
      'développeur blockchain liège',
      'expert solidity belgique',
      'choisir dev web3',
    ],
    category: 'blockchain',
  },
  {
    id: 'faq-3',
    question: 'Quels sont les principaux risques liés à un smart contract ?',
    answer:
      'Les risques majeurs incluent : la reentrancy (attaque par appel récursif), l\u2019overflow/underflow (débordement arithmétique), les failles d\u2019access control (permissions mal gérées), et les front-running (manipulation de l\u2019ordre des transactions). Pour les éviter, j\u2019utilise systématiquement OpenZeppelin (bibliothèques sécurisées), ReentrancyGuard, tests de fuzzing avec Echidna, et audits avec Slither/Mythril. Chaque contrat subit une batterie de tests (>95% coverage) et un audit externe avant déploiement mainnet. La sécurité est ma priorité absolue pour garantir des contrats robustes.',
    seoSlug: 'risques-smart-contract-securite',
    keywords: ['sécurité smart contract', 'audit blockchain', 'vulnérabilités solidity'],
    category: 'blockchain',
  },
  {
    id: 'faq-4',
    question: 'Quelles sont les applications concrètes de la blockchain ?',
    answer:
      'La blockchain révolutionne de nombreux secteurs : Finance (DeFi, stablecoins, prêts décentralisés), NFTs (art numérique, gaming, collectibles), Supply Chain (traçabilité produits, certifications), Immobilier (tokenisation d\u2019actifs, contrats automatisés), et Identité numérique (KYC décentralisé, diplômes vérifiables). En Belgique, des projets émergent dans la logistique, l\u2019agroalimentaire, et le secteur public. Je peux vous accompagner pour identifier les cas d\u2019usage pertinents à votre industrie et développer une solution blockchain sur mesure, de la conception à la mise en production.',
    seoSlug: 'applications-blockchain-cas-usage',
    keywords: ['cas usage blockchain', 'applications web3', 'defi belgique'],
    category: 'blockchain',
  },
  {
    id: 'faq-5',
    question: 'Pourquoi est-il important d\u2019auditer ses smart contracts ?',
    answer:
      'Un audit identifie les vulnérabilités critiques avant le déploiement mainnet, évitant ainsi des pertes financières catastrophiques (voir les hacks de DAO, Parity, etc.). Il garantit que votre contrat respecte les best practices (gas optimization, sécurité, standards ERC), et rassure vos investisseurs/utilisateurs sur la fiabilité du projet. J\u2019utilise Slither pour l\u2019analyse statique, Mythril pour la détection de bugs, et Echidna/Foundry pour les tests de fuzzing. Le rapport d\u2019audit détaille chaque risque (severity: critical, high, medium, low) avec des recommandations de correction. C\u2019est un investissement indispensable pour tout projet sérieux.',
    seoSlug: 'importance-audit-smart-contract',
    keywords: ['audit smart contract', 'sécurité blockchain', 'slither mythril'],
    category: 'blockchain',
  },
];

/**
 * Helper: Filtrer FAQ par catégorie
 */
export function getFAQByCategory(category: FAQItem['category']): FAQItem[] {
  return faqItems.filter((faq) => faq.category === category);
}

/**
 * Helper: Générer le JSON-LD FAQPage pour SEO
 */
export function generateFAQJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
