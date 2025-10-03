import Link from 'next/link';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

/**
 * SECTION HERO - PREMIÈRE IMPRESSION SEO OPTIMISÉE
 * - H1 avec mots-clés locaux (Liège)
 * - CTA clairs et accessibles
 * - Liens sociaux avec aria-labels
 */
export function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Effet visuel background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge localisation SEO */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Disponible pour projets - Liège, Belgique 🇧🇪
          </div>

          {/* H1 SEO optimisé avec mots-clés locaux */}
          <h1
            id="hero-heading"
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500">
              Développeur Blockchain
            </span>
            <br />
            <span className="text-foreground">& Smart Contracts à Liège</span>
          </h1>

          {/* Sous-titre avec proposition de valeur */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Expert en{' '}
            <strong className="text-foreground font-semibold">Solidity, Web3 et IA</strong>.
            Je transforme vos idées en{' '}
            <strong className="text-foreground font-semibold">dApps sécurisées</strong> et audits
            smart contracts professionnels.
          </p>

          {/* Métriques clés */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Projets livrés</div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">30+</div>
              <div className="text-sm text-muted-foreground">Clients satisfaits</div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">5 ans</div>
              <div className="text-sm text-muted-foreground">Expérience Web3</div>
            </div>
          </div>

          {/* CTAs principaux */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-lg hover:shadow-primary/25"
            >
              Discutons de votre projet
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="#services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-muted text-foreground rounded-lg font-semibold text-lg hover:bg-muted/80 transition-all hover:scale-105"
            >
              Découvrir mes services
            </Link>
          </div>

          {/* Liens sociaux avec SEO */}
          <div className="flex items-center justify-center gap-6 pt-6">
            <a
              href={`https://github.com/${SITE_CONFIG.social.github}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Profil GitHub d'Antony Lambi"
              className="text-muted-foreground hover:text-primary transition-colors p-2 hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={`https://linkedin.com/in/${SITE_CONFIG.social.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Profil LinkedIn d'Antony Lambi"
              className="text-muted-foreground hover:text-primary transition-colors p-2 hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={`mailto:${SITE_CONFIG.contact.email}`}
              aria-label="Envoyer un email à Antony Lambi"
              className="text-muted-foreground hover:text-primary transition-colors p-2 hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full p-1">
          <div className="w-1.5 h-3 bg-primary rounded-full mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  );
}
