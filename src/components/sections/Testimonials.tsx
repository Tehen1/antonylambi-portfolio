import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/data/testimonials';

/**
 * SECTION TÉMOIGNAGES - PREUVE SOCIALE
 * - 6 témoignages clients avec 5 étoiles
 * - Avatars et informations entreprise
 * - Design professionnel et crédible
 */
export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-background"
      aria-labelledby="testimonials-heading"
    >
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2
              id="testimonials-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
            >
              Témoignages <span className="text-primary">Clients</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Plus de 30 clients satisfaits dans 8 pays nous font confiance pour leurs projets
              blockchain et Web3. Découvrez leurs retours d'expérience.
            </p>
          </div>

          {/* Grid témoignages */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.id}
                className="relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-xl transition-all group"
              >
                {/* Icon quote */}
                <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20 group-hover:text-primary/40 transition-colors" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      aria-label="Étoile"
                    />
                  ))}
                </div>

                {/* Texte témoignage */}
                <blockquote className="text-sm text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Auteur et entreprise */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  {/* Avatar avec initiales */}
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold flex-shrink-0">
                    {testimonial.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm truncate">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground truncate">
                      {testimonial.role} · {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Badge projet */}
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="text-xs font-medium text-primary uppercase tracking-wider">
                    {testimonial.projectType}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats footer */}
          <div className="grid md:grid-cols-3 gap-6 pt-8">
            <div className="text-center p-6 bg-muted/50 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">5.0</div>
              <div className="text-sm text-muted-foreground">Note moyenne clients</div>
              <div className="flex gap-1 justify-center mt-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>

            <div className="text-center p-6 bg-muted/50 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Taux de satisfaction</div>
            </div>

            <div className="text-center p-6 bg-muted/50 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">30+</div>
              <div className="text-sm text-muted-foreground">Clients satisfaits</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
