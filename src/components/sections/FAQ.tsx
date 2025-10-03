'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '@/data/faq';

/**
 * SECTION FAQ - OPTIMISATION SEO PAA (People Also Ask)
 * - Accordéon accessible WCAG 2.1
 * - Questions optimisées pour Google rich snippets
 * - JSON-LD FAQPage intégré dans page.tsx
 */
export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-muted/30" aria-labelledby="faq-heading">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2
              id="faq-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
            >
              Questions <span className="text-primary">Fréquentes</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Tout ce que vous devez savoir sur le développement blockchain, smart contracts et
              audits de sécurité Web3.
            </p>
          </div>

          {/* Accordéon FAQ */}
          <div className="space-y-4">
            {FAQ_ITEMS.map((faq, index) => (
              <div
                key={faq.id}
                className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors"
              >
                {/* Question - Button accessible */}
                <button
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-muted/50 transition-colors"
                >
                  <span className="text-lg font-semibold flex-1">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {/* Réponse - Collapsible */}
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={`overflow-hidden transition-all ${
                    openIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 text-muted-foreground leading-relaxed space-y-4">
                    {/* Réponse principale */}
                    <p>{faq.answer}</p>

                    {/* Keywords enrichis pour SEO */}
                    {faq.keywords && (
                      <div className="pt-4 border-t border-border">
                        <div className="flex flex-wrap gap-2">
                          {faq.keywords.map((keyword) => (
                            <span
                              key={keyword}
                              className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                            >
                              {keyword}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA footer */}
          <div className="text-center pt-8 border-t border-border">
            <p className="text-muted-foreground mb-4">Vous avez d&apos;autres questions ?</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
            >
              Contactez-moi directement
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
