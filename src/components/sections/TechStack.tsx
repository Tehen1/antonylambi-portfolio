'use client';

import { useState } from 'react';
import { TECH_STACK, TECH_STATS } from '@/data/tech-stack';
import type { ExpertiseLevel } from '@/types/content';

/**
 * SECTION TECH STACK - COMPÉTENCES TECHNIQUES
 * - 6 catégories avec filtres
 * - Tooltips avec années d'expérience
 * - Niveau d'expertise visuel
 */
export function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredStack = selectedCategory
    ? TECH_STACK.filter((cat) => cat.category === selectedCategory)
    : TECH_STACK;

  const getLevelColor = (level: ExpertiseLevel): string => {
    switch (level) {
      case 'expert':
        return 'bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/50';
      case 'advanced':
        return 'bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/50';
      case 'intermediate':
        return 'bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 border-yellow-500/50';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  const getLevelLabel = (level: ExpertiseLevel): string => {
    switch (level) {
      case 'expert':
        return 'Expert';
      case 'advanced':
        return 'Avancé';
      case 'intermediate':
        return 'Intermédiaire';
      default:
        return level;
    }
  };

  return (
    <section id="tech-stack" className="py-24 bg-muted/30" aria-labelledby="techstack-heading">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2
              id="techstack-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
            >
              Stack Technologique <span className="text-primary">Maîtrisé</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {TECH_STATS.totalTechnologies} technologies couvrant tout l&apos;écosystème Web3, avec{' '}
              {TECH_STATS.expertTechnologies} expertises niveau expert et{' '}
              {TECH_STATS.averageExperience.toFixed(1)} ans de moyenne d&apos;expérience.
            </p>
          </div>

          {/* Filtres catégories */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedCategory === null
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-card border border-border hover:border-primary/50'
              }`}
            >
              Toutes les catégories
            </button>
            {TECH_STACK.map((category) => (
              <button
                key={category.category}
                onClick={() => setSelectedCategory(category.category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category.category
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-card border border-border hover:border-primary/50'
                }`}
              >
                {category.category}
              </button>
            ))}
          </div>

          {/* Grid des technologies */}
          <div className="space-y-8">
            {filteredStack.map((category) => (
              <div key={category.category} className="space-y-4">
                {/* Catégorie header */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold flex items-center gap-3">
                    {category.category}
                    <span className="text-sm font-normal text-muted-foreground">
                      ({category.technologies.length} technologies)
                    </span>
                  </h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>

                {/* Technologies grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {category.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="group relative bg-card border border-border rounded-lg p-4 hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer"
                      title={tech.description}
                    >
                      {/* Icon et nom */}
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl" role="img" aria-label={tech.name}>
                          {tech.icon}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold truncate">{tech.name}</div>
                        </div>
                      </div>

                      {/* Niveau et expérience */}
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={`text-xs font-medium px-2 py-1 rounded border ${getLevelColor(tech.level)}`}
                        >
                          {getLevelLabel(tech.level)}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {tech.yearsOfExperience} an{tech.yearsOfExperience > 1 ? 's' : ''}
                        </span>
                      </div>

                      {/* Tooltip on hover */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-popover text-popover-foreground text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                        {tech.description}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-popover" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Stats footer */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {TECH_STATS.totalTechnologies}
              </div>
              <div className="text-sm text-muted-foreground">Technologies maîtrisées</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {TECH_STATS.expertTechnologies}
              </div>
              <div className="text-sm text-muted-foreground">Expertises niveau expert</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {TECH_STATS.averageExperience.toFixed(1)}
              </div>
              <div className="text-sm text-muted-foreground">Années d&apos;expérience moyenne</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
