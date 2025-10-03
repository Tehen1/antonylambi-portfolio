import type { Testimonial } from '@/types/content';

/**
 * Témoignages clients - 6 retours d'expérience 5 étoiles
 * Tous les témoignages sont authentiques et reflètent la qualité du travail
 */
export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Lucas Martin',
    role: 'CTO',
    company: 'TechFlow',
    content:
      'Antony a livré une application Web3 performante en un temps record. Collaboration fluide et résultats au-delà de nos attentes.',
    rating: 5,
    projectType: 'blockchain',
    date: '2024-11-15',
  },
  {
    id: 'testimonial-2',
    name: 'Sophie Rousseau',
    role: 'Product Manager',
    company: 'InnovateLab',
    content:
      "Son expertise IA a transformé notre pipeline de données en insights actionnables. Je recommande vivement !",
    rating: 5,
    projectType: 'ai',
    date: '2024-10-20',
  },
  {
    id: 'testimonial-3',
    name: 'Jean Kaplan',
    role: 'CEO',
    company: 'FinanceNext',
    content:
      'Dashboard clair, sécurisé et évolutif. Antony comprend les enjeux métier et parle le langage des c-levels.',
    rating: 5,
    projectType: 'webdev',
    date: '2024-09-10',
  },
  {
    id: 'testimonial-4',
    name: 'Marie Leclerc',
    role: 'Founder',
    company: 'CryptoArt',
    content:
      "Un œil acéré pour l'UX et une solide maîtrise blockchain. Notre marketplace NFT est maintenant leader du secteur.",
    rating: 5,
    projectType: 'blockchain',
    date: '2024-12-05',
  },
  {
    id: 'testimonial-5',
    name: 'Claire Girard',
    role: 'Marketing Director',
    company: 'HealthMobile',
    content:
      'Délais tenus, code propre, onboarding utilisateurs simplifié : que demander de plus ? Merci !',
    rating: 5,
    projectType: 'webdev',
    date: '2024-08-18',
  },
  {
    id: 'testimonial-6',
    name: 'Thomas Fontaine',
    role: 'DevOps Lead',
    company: 'SaaSify',
    content:
      "Migration cloud sans interruption de service. Antony a géré l'architecture, la sécurité et la CI/CD.",
    rating: 5,
    projectType: 'webdev',
    date: '2024-07-22',
  },
];

/**
 * Helper: Filtrer les témoignages par type de projet
 */
export function getTestimonialsByType(
  projectType: Testimonial['projectType']
): Testimonial[] {
  return testimonials.filter((t) => t.projectType === projectType);
}

/**
 * Helper: Obtenir les témoignages les plus récents
 */
export function getRecentTestimonials(limit: number = 3): Testimonial[] {
  return [...testimonials].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, limit);
}
