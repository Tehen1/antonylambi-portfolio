'use client';

import { useState } from 'react';
import { Copy, Check, Code } from 'lucide-react';
import { SEO_PROMPTS } from '@/data/seo-prompts';

/**
 * SECTION SEO TOOLKIT - RESSOURCES GRATUITES
 * - 3 prompts SEO prêts à l'emploi
 * - Code blocks avec copie en un clic
 * - Lead magnet pour engagement
 */
export function SEOToolkit() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <section id="seo-toolkit" className="py-24 bg-background" aria-labelledby="toolkit-heading">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              🎁 Ressources gratuites
            </div>

            <h2
              id="toolkit-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
            >
              SEO Toolkit <span className="text-primary">pour Web3</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              3 prompts SEO professionnels prêts à l'emploi pour optimiser votre visibilité
              blockchain. Utilisez-les gratuitement pour améliorer votre référencement.
            </p>
          </div>

          {/* Grid de prompts */}
          <div className="space-y-8">
            {SEO_PROMPTS.map((prompt, index) => (
              <div
                key={prompt.id}
                className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-xl transition-all"
              >
                {/* Header du prompt */}
                <div className="p-6 bg-muted/30 border-b border-border">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl font-bold text-primary/50">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <h3 className="text-xl font-semibold">{prompt.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">{prompt.description}</p>
                    </div>

                    {/* Badge catégorie */}
                    <div className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full whitespace-nowrap">
                      {prompt.category}
                    </div>
                  </div>

                  {/* Use case */}
                  <div className="mt-4 flex items-start gap-2 text-sm">
                    <Code className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Use case :</strong> {prompt.useCase}
                    </p>
                  </div>
                </div>

                {/* Code block */}
                <div className="relative">
                  <pre className="p-6 overflow-x-auto text-sm leading-relaxed bg-muted/10">
                    <code className="text-foreground">{prompt.promptText}</code>
                  </pre>

                  {/* Bouton copie */}
                  <button
                    onClick={() => copyToClipboard(prompt.promptText, prompt.id)}
                    className="absolute top-4 right-4 flex items-center gap-2 px-3 py-2 bg-background border border-border rounded-lg text-sm font-medium hover:bg-muted transition-colors shadow-lg"
                    aria-label={`Copier le prompt ${prompt.title}`}
                  >
                    {copiedId === prompt.id ? (
                      <>
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-green-500">Copié !</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copier</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Expected output */}
                <div className="p-6 bg-muted/20 border-t border-border">
                  <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                    Résultat attendu
                  </div>
                  <p className="text-sm text-muted-foreground">{prompt.expectedOutput}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA footer */}
          <div className="text-center p-8 bg-gradient-to-br from-primary/5 via-primary/10 to-purple-500/10 rounded-xl border border-primary/20">
            <h3 className="text-2xl font-bold mb-3">Besoin d'un audit SEO complet ?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Je propose des audits SEO personnalisés pour projets blockchain et Web3, incluant
              analyse technique, stratégie de contenu et optimisation on-chain.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
            >
              Demander un audit SEO gratuit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
