import type { Skill } from '@/types';

export const skills: Skill[] = [
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'frontend',
    percentage: 95,
    projectsCount: 165,
    description: 'Expert en TypeScript avec 165 projets professionnels',
  },
  {
    id: 'solidity',
    name: 'Solidity',
    category: 'blockchain',
    percentage: 88,
    projectsCount: 67,
    description: 'Développement de smart contracts sécurisés',
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'frontend',
    percentage: 92,
    projectsCount: 120,
    description: 'Applications SSG/SSR performantes et SEO optimisées',
  },
  {
    id: 'python',
    name: 'Python',
    category: 'ai',
    percentage: 85,
    projectsCount: 52,
    description: 'Backend et intelligence artificielle',
  },
  {
    id: 'react',
    name: 'React',
    category: 'frontend',
    percentage: 94,
    projectsCount: 140,
    description: 'Interfaces modernes et composants réutilisables',
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    percentage: 87,
    projectsCount: 89,
    description: 'APIs REST et microservices scalables',
  },
];

export function getSkillsByCategory(category: Skill['category']): Skill[] {
  return skills.filter((s) => s.category === category);
}

export function getTopSkills(limit: number = 6): Skill[] {
  return skills.sort((a, b) => b.percentage - a.percentage).slice(0, limit);
}
