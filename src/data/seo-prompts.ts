import type { SEOPrompt } from '@/types/content';

export const seoPrompts: SEOPrompt[] = [
  {
    id: 'prompt-title-tag',
    title: 'Optimisation du Title Tag',
    description: 'Générer des title tags optimisés pour le référencement local',
    useCase: 'Optimisation SEO page accueil pour développeur blockchain Liège',
    expectedOutput: '10 propositions de title tags avec note SEO',
    category: 'technical',
    promptText: `Génère 10 title tags optimisés pour un développeur blockchain à Liège. Contraintes: 50-60 caractères, inclure "Liège" et mots-clés blockchain.`,
  },
  {
    id: 'prompt-refonte-accueil',
    title: 'Refonte Accueil H1/H2',
    description: 'Restructurer contenu page accueil',
    useCase: 'Refonte complète page accueil SEO local',
    expectedOutput: 'Contenu avec H1, H2, services, FAQ optimisés',
    category: 'content',
    promptText: `Rédige le contenu complet page accueil pour développeur blockchain Liège avec structure SEO optimisée.`,
  },
  {
    id: 'prompt-schema-org',
    title: 'Balisage Schema.org',
    description: 'Générer JSON-LD données structurées',
    useCase: 'Améliorer référencement local avec Schema.org',
    expectedOutput: 'Code JSON-LD ProfessionalService',
    category: 'technical',
    promptText: `Génère script JSON-LD Schema.org type ProfessionalService pour développeur blockchain Liège.`,
  },
];

export const SEO_PROMPTS = seoPrompts;

export function getPromptsByCategory(category: SEOPrompt['category']): SEOPrompt[] {
  return seoPrompts.filter((p) => p.category === category);
}

export function searchPromptsByTag(tag: string): SEOPrompt[] {
  return seoPrompts.filter((p) => p.tags && p.tags.includes(tag.toLowerCase()));
}
