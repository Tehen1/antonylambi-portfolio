import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants';

const iconMap: Record<string, string> = {
  github: '🔗',
  linkedin: '💼',
  twitter: '🐦',
  mail: '✉️',
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--bg-card)] border-t border-[var(--border)] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">
              Antony Lambinon
            </h3>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
              Développeur Full-Stack spécialisé en React, Next.js, Blockchain et Intelligence
              Artificielle. Création de solutions numériques innovantes et performantes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">Liens Rapides</h3>
            <nav className="flex flex-col gap-2">
              <a
                href="#about"
                className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors text-sm"
              >
                À propos
              </a>
              <a
                href="#projects"
                className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors text-sm"
              >
                Projets
              </a>
              <a
                href="#skills"
                className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors text-sm"
              >
                Compétences
              </a>
              <a
                href="#contact"
                className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors text-sm"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">Contact</h3>
            <div className="flex flex-col gap-3 mb-4">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors text-sm"
              >
                {SITE_CONFIG.email}
              </a>
            </div>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[var(--bg-light)] border border-[var(--border)] flex items-center justify-center text-xl hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all neon-pulse"
                  aria-label={link.name}
                  title={link.name}
                >
                  {iconMap[link.icon] || '🔗'}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--border)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--text-muted)] text-sm">
            © {currentYear} {SITE_CONFIG.name}. Tous droits réservés.
          </p>
          <p className="text-[var(--text-muted)] text-sm">
            Développé avec{' '}
            <span className="text-[var(--primary)] animate-pulse">Next.js</span> &{' '}
            <span className="text-[var(--primary)] animate-pulse">TypeScript</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
