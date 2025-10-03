import type { ProjectCategory } from './index';

/**
 * Testimonial - Témoignage client avec note 5 étoiles
 */
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
  content: string;
  rating: 5; // Fixé à 5 étoiles
  projectType: ProjectCategory;
  date: string; // Format ISO
  sourceUrl?: string;
}

/**
 * Service - Service professionnel détaillé
 */
export interface Service {
  id: string;
  slug: string;
  title: string; // H2 SEO-friendly
  shortDescription: string; // 50-70 mots
  description?: string; // Alias pour shortDescription
  category?: string;
  icon?: string;
  technologies: string[];
  benefits: string[]; // 3-5 bénéfices
  ctaLabel?: string;
  featured?: boolean;
}

/**
 * FAQItem - Question fréquente pour SEO (PAA - People Also Ask)
 */
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  seoSlug: string;
  keywords: string[];
  category: 'blockchain' | 'seo' | 'ai' | 'general';
}

/**
 * SEOPrompt - Prompt SEO prêt à l'emploi
 */
export interface SEOPrompt {
  id: string;
  title: string;
  description?: string;
  goal?: string;
  promptText: string;
  promptBody?: string;
  useCase?: string;
  expectedOutput?: string;
  usageNotes?: string;
  category: 'technical' | 'content' | 'local' | 'analytics';
  tags?: string[];
}

/**
 * TechStackCategory - Catégorie de stack technologique
 */
export type TechStackCategoryType =
  | 'frontend'
  | 'backend'
  | 'blockchain'
  | 'ai'
  | 'devops'
  | 'seo';

/**
 * ExpertiseLevel - Niveau d'expertise technique
 */
export type ExpertiseLevel = 'expert' | 'advanced' | 'intermediate' | 'beginner';

/**
 * TechItem - Item technologique dans le stack
 */
export interface TechItem {
  name: string;
  level: ExpertiseLevel;
  icon: string;
  description: string;
  yearsOfExperience: number;
  projectsCount?: number;
  badge?: 'expert' | 'recent' | null;
  docsUrl?: string;
}

/**
 * TechStackCategory - Groupe de technologies
 */
export interface TechStackCategory {
  category: string;
  description: string;
  technologies: TechItem[];
}

/**
 * ProcessStep - Étape du processus de développement
 */
export interface ProcessStep {
  id: string;
  number: number;
  title: string;
  description: string;
  deliverables?: string[];
  duration?: string;
}
