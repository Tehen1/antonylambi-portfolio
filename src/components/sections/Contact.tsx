import { Mail, MapPin, Phone, Github, Linkedin, Calendar } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

/**
 * SECTION CONTACT - COORDONNÉES ENRICHIES SEO
 * - Toutes les méthodes de contact visibles
 * - Schema.org intégré dans structured data
 * - Appels à l'action clairs
 */
export function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: SITE_CONFIG.contact.email,
      href: `mailto:${SITE_CONFIG.contact.email}`,
      description: 'Réponse sous 24h',
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: SITE_CONFIG.contact.phone,
      href: `tel:${SITE_CONFIG.contact.phone.replace(/\s/g, '')}`,
      description: 'Lun-Ven 9h-18h',
    },
    {
      icon: MapPin,
      label: 'Localisation',
      value: SITE_CONFIG.contact.location,
      href: 'https://www.google.com/maps/place/Liège,+Belgium',
      description: 'Déplacements possibles',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: `https://github.com/${SITE_CONFIG.social.github}`,
      username: `@${SITE_CONFIG.social.github}`,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: `https://linkedin.com/in/${SITE_CONFIG.social.linkedin}`,
      username: 'Antony Lambi',
    },
    {
      icon: Calendar,
      label: 'Calendly',
      href: '#',
      username: 'Planifier un appel',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-muted/30" aria-labelledby="contact-heading">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2
              id="contact-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
            >
              Démarrons votre <span className="text-primary">projet Web3</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Discutons de votre projet blockchain, smart contracts ou audit de sécurité. Première
              consultation gratuite de 30 minutes.
            </p>
          </div>

          {/* Grid contact */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Méthodes de contact directes */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Contactez-moi directement</h3>

              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.label === 'Localisation' ? '_blank' : undefined}
                  rel={method.label === 'Localisation' ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <method.icon className="w-6 h-6" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-muted-foreground mb-1">
                      {method.label}
                    </div>
                    <div className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                      {method.value}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {method.description}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Réseaux sociaux et calendrier */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Suivez-moi</h3>

              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <social.icon className="w-6 h-6" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {social.label}
                    </div>
                    <div className="text-sm text-muted-foreground truncate">
                      {social.username}
                    </div>
                  </div>
                </a>
              ))}

              {/* CTA planifier appel */}
              <div className="mt-8 p-6 bg-gradient-to-br from-primary/5 via-primary/10 to-purple-500/10 rounded-xl border border-primary/20">
                <div className="text-center space-y-4">
                  <h4 className="text-lg font-semibold">Consultation gratuite 30 min</h4>
                  <p className="text-sm text-muted-foreground">
                    Planifiez un appel pour discuter de votre projet sans engagement
                  </p>
                  <a
                    href={`mailto:${SITE_CONFIG.contact.email}?subject=Demande de consultation gratuite`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
                  >
                    <Calendar className="w-5 h-5" />
                    Planifier un appel
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ rapide */}
          <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-border">
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-primary mb-2">24h</div>
              <div className="text-sm text-muted-foreground">Temps de réponse moyen</div>
            </div>

            <div className="text-center p-4">
              <div className="text-2xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Consultation gratuite</div>
            </div>

            <div className="text-center p-4">
              <div className="text-2xl font-bold text-primary mb-2">NDA</div>
              <div className="text-sm text-muted-foreground">Confidentialité garantie</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
