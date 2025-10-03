import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';
import { skills } from '@/data/skills';
import { METRICS } from '@/lib/constants';

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section
          id="hero"
          className="min-h-screen flex items-center justify-center bg-[var(--bg-dark)] bg-grid relative"
          style={{ paddingTop: 'var(--header-height)' }}
        >
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto text-center fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 glitch" data-text="Antony Lambinon">
                Antony Lambinon
              </h1>
              <h2 className="text-2xl md:text-4xl text-[var(--text-secondary)] mb-8">
                Expert en{' '}
                <span className="text-[var(--primary)] text-glow">Développement Web</span>,{' '}
                <span className="text-[var(--secondary)] text-glow">SEO</span> &{' '}
                <span className="text-[var(--accent)] text-glow">Blockchain</span>
              </h2>
              <p className="text-lg text-[var(--text-secondary)] mb-12 leading-relaxed">
                Avec plus de 5 ans d&apos;expérience, je crée des solutions numériques innovantes
                combinant développement web, intelligence artificielle et blockchain pour des
                performances optimales et une expérience utilisateur exceptionnelle.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] neon-pulse"
                >
                  <a href="#projects">Voir mes projets</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-[var(--border)] hover:border-[var(--primary)] text-[var(--text-primary)]"
                >
                  <a href="#contact">Me contacter</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section id="metrics" className="py-20 bg-[var(--bg-card)]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="cyber-card p-6 text-center">
                <h3 className="text-4xl font-bold text-[var(--primary)] mb-2">
                  {METRICS.projectsCompleted}
                </h3>
                <p className="text-[var(--text-secondary)]">Projets réalisés</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <h3 className="text-4xl font-bold text-[var(--primary)] mb-2">
                  {METRICS.yearsExperience}
                </h3>
                <p className="text-[var(--text-secondary)]">Années d&apos;expérience</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <h3 className="text-4xl font-bold text-[var(--primary)] mb-2">
                  {METRICS.clientsSatisfied}
                </h3>
                <p className="text-[var(--text-secondary)]">Clients satisfaits</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <h3 className="text-4xl font-bold text-[var(--primary)] mb-2">
                  {METRICS.technologiesMastered}
                </h3>
                <p className="text-[var(--text-secondary)]">Technologies maîtrisées</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Preview Section */}
        <section id="projects" className="py-20 bg-[var(--bg-dark)]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4 text-[var(--text-primary)]">
              Projets Phares
            </h2>
            <p className="text-center text-[var(--text-secondary)] mb-12 max-w-2xl mx-auto">
              Découvrez mes réalisations en optimisation SEO, développement blockchain et
              intelligence artificielle
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.slice(0, 3).map((project) => (
                <div key={project.id} className="cyber-card p-6">
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                    {project.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-[var(--bg-dark)] border border-[var(--border)] text-[var(--text-secondary)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-[var(--primary)] text-sm">{project.metrics.users}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-[var(--border)] hover:border-[var(--primary)]"
              >
                <a href="#all-projects">Voir tous les projets →</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Skills Preview */}
        <section id="skills" className="py-20 bg-[var(--bg-card)]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-[var(--text-primary)]">
              Compétences Principales
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {skills.map((skill) => (
                <div key={skill.id} className="cyber-card p-6">
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">
                    {skill.name}
                  </h3>
                  <div className="w-full bg-[var(--bg-dark)] rounded-full h-3 mb-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-full transition-all duration-500"
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[var(--text-secondary)]">
                      {skill.projectsCount} projets
                    </span>
                    <span className="text-sm font-bold text-[var(--primary)]">
                      {skill.percentage}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-[var(--bg-dark)]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6 text-[var(--text-primary)]">
              Travaillons Ensemble
            </h2>
            <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
              Vous avez un projet en tête ? Discutons de comment je peux vous aider à le réaliser.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] neon-pulse"
            >
              <a href="mailto:contact@antonylambi.be">Envoyer un message</a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
