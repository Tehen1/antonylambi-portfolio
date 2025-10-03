import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '@/data/services';

/**
 * SECTION SERVICES - OFFRES PROFESSIONNELLES SEO OPTIMISÉES
 * - 8 services détaillés avec CTAs
 * - Badge "Most Popular" pour services phares
 * - Descriptions enrichies avec mots-clés
 */
export function Services() {
  return (
    <section id="services" className="py-24 bg-background" aria-labelledby="services-heading">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2
              id="services-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
            >
              Services <span className="text-primary">Blockchain & Web3</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Solutions complètes de développement smart contracts, audits de sécurité et
              intégration IA sur blockchain. Expertise Solidity et architecture dApps scalables.
            </p>
          </div>

          {/* Grid de services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-xl transition-all group"
              >
                {/* Badge Most Popular */}
                {service.featured && (
                  <div className="absolute -top-3 right-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full shadow-lg">
                    ⭐ Most Popular
                  </div>
                )}

                {/* Icon */}
                <div className="mb-4">
                  <span className="text-4xl" role="img" aria-label={service.title}>
                    {service.icon || '💼'}
                  </span>
                </div>

                {/* Titre et catégorie */}
                <div className="space-y-2 mb-4">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <div className="text-xs font-medium text-primary uppercase tracking-wider">
                    {service.category || 'Service'}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {service.shortDescription}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-muted text-xs font-medium rounded text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {service.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs text-muted-foreground">
                      +{service.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* CTA */}
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                >
                  Discuter de ce service
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          {/* CTA global */}
          <div className="text-center pt-8">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
            >
              Démarrer votre projet Web3
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
