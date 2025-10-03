import { Award, Code, Rocket, Shield } from 'lucide-react';

/**
 * SECTION À PROPOS - STORYTELLING ET CRÉDIBILITÉ
 * - Histoire personnelle authentique
 * - Métriques clés de performance
 * - Valeurs et mission
 */
export function About() {
  const values = [
    {
      icon: Shield,
      title: 'Sécurité d\'abord',
      description:
        'Audits systématiques, tests >95% coverage, respect standards OpenZeppelin pour garantir la robustesse de chaque smart contract.',
    },
    {
      icon: Code,
      title: 'Code de qualité',
      description:
        'Architecture modulaire, TypeScript strict, documentation exhaustive pour faciliter maintenance et évolutivité.',
    },
    {
      icon: Rocket,
      title: 'Performance optimale',
      description:
        'Optimisation gas blockchain, caching intelligent, monitoring temps réel pour réduire coûts et maximiser UX.',
    },
    {
      icon: Award,
      title: 'Excellence technique',
      description:
        'Formation continue, veille technologique active, participation open-source pour rester à la pointe Web3.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30" aria-labelledby="about-heading">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2
              id="about-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
            >
              Développeur <span className="text-primary">passionné</span> par l'innovation Web3
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              5 ans d'expertise blockchain combinant développement smart contracts sécurisés,
              intégration IA avancée et architecture SaaS scalable.
            </p>
          </div>

          {/* Histoire personnelle */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Mon parcours</h3>
                <div className="h-1 w-16 bg-primary rounded" />
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Passionné par la technologie depuis mes débuts en développement web, j'ai
                  découvert la blockchain en 2019 et immédiatement perçu son potentiel
                  révolutionnaire pour{' '}
                  <strong className="text-foreground">décentraliser la confiance</strong>.
                </p>

                <p>
                  Aujourd'hui, je combine mon expertise en{' '}
                  <strong className="text-foreground">Solidity, Next.js et IA</strong> pour créer
                  des dApps qui allient sécurité maximale et expérience utilisateur fluide. Chaque
                  projet est une opportunité de repousser les limites du Web3.
                </p>

                <p>
                  Basé à <strong className="text-foreground">Liège, Belgique</strong>, j'accompagne
                  startups et entreprises établies dans leur transformation blockchain, de l'audit
                  technique au déploiement production.
                </p>
              </div>
            </div>

            {/* Métriques détaillées */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground font-medium">
                  Smart contracts
                  <br />
                  déployés en production
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                <div className="text-4xl font-bold text-primary mb-2">30+</div>
                <div className="text-sm text-muted-foreground font-medium">
                  Clients satisfaits
                  <br />
                  dans 8 pays
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                <div className="text-4xl font-bold text-primary mb-2">5 ans</div>
                <div className="text-sm text-muted-foreground font-medium">
                  Expérience Web3
                  <br />
                  et blockchain
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground font-medium">
                  Uptime moyen
                  <br />
                  projets production
                </div>
              </div>
            </div>
          </div>

          {/* Valeurs */}
          <div>
            <div className="text-center space-y-4 mb-12">
              <h3 className="text-2xl md:text-3xl font-semibold">Mes valeurs</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Les principes qui guident chaque ligne de code et chaque décision architecturale
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-lg transition-all group"
                >
                  <value.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
