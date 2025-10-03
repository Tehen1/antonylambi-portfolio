export type ProjectCategory = 'seo' | 'blockchain' | 'ai' | 'webdev';
export type ProjectStatus = 'draft' | 'live' | 'archived';
export type SkillCategory = 'frontend' | 'backend' | 'blockchain' | 'ai' | 'devops' | 'seo';
export type TechBadge = 'expert' | 'recent' | null;

export interface ProjectMetrics {
  users?: string;
  performance?: string;
  downloads?: string;
  revenue?: string;
  [key: string]: string | undefined;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: ProjectCategory;
  status: ProjectStatus;
  tech: string[];
  metrics: ProjectMetrics;
  images: string[];
  video?: string;
  poster?: string;
  liveUrl?: string;
  githubUrl?: string;
  highlight: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  percentage: number;
  projectsCount: number;
  description?: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientAvatar?: string;
  rating: number;
  quote: string;
  projectType: ProjectCategory;
  company?: string;
  position?: string;
}

export interface TechStack {
  id: string;
  name: string;
  category: SkillCategory;
  projectsCount: number;
  badge: TechBadge;
  description?: string;
}

export interface SEOPrompt {
  id: string;
  title: string;
  description: string;
  prompt: string;
  category: 'technical' | 'content' | 'local' | 'analytics';
  tags: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
