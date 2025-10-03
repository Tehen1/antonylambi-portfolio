import type { SEOPrompt } from '@/types/content';

/**
 * SEO Toolkit - 3 prompts prêts à l'emploi pour optimisation SEO
 * Orientés marché Liège Belgique + blockchain
 */
export const seoPrompts: SEOPrompt[] = [
  {
    id: 'prompt-title-tag',
    title: 'Prompt — Optimisation du Title Tag (Accueil)',
    goal: 'Générer 10 propositions de balise title pour la page d\u2019accueil optimisées pour le référencement local Liège',
    promptBody: `# CONTEXTE
Je suis un développeur freelance full-stack basé à Liège, Belgique. Mon expertise principale est le développement blockchain (Solidity, zkEVM, dApps) et l'intégration d'IA. Mon site portfolio actuel est "https://antonylambi.be". Je cible les entreprises belges et les projets Web3 internationaux qui cherchent une expertise technique de pointe.

# MISSION
Agis en tant qu'expert SEO international spécialisé en référencement pour développeurs et entreprises tech. Ta tâche est de générer 10 propositions de balise \`title\` pour la page d'accueil de mon portfolio.

# CONTRAINTES
- La balise \`title\` doit faire entre 50 et 60 caractères.
- Elle doit obligatoirement inclure ma localisation principale : "Liège".
- Elle doit mentionner au moins un de mes services clés : "Blockchain", "Smart Contracts", "dApps", "Solidity", "Web3".
- Elle doit intégrer un élément de réassurance ou d'expertise ("Expert", "Certifié", "Senior").
- Le ton doit être professionnel et direct.

# FORMAT DE SORTIE
Pour chaque proposition, tu doit :
1. Fournir la balise \`title\`.
2. Donner une note de performance SEO sur 10.
3. Justifier la note en 1 phrase (impact, mots-clés, conversion).

Produis le résultat sous forme de tableau Markdown.`,
    usageNotes:
      'Utilisez ce prompt avec ChatGPT-4 ou Claude pour générer des titles optimisés. Testez ensuite avec Google Search Console.',
    category: 'technical',
    tags: ['title tag', 'seo local', 'liège', 'blockchain'],
  },
  {
    id: 'prompt-refonte-accueil',
    title: 'Prompt — Refonte Accueil (H1/H2 & Contenu)',
    goal: 'Restructurer le contenu de la page d\u2019accueil pour dominer la recherche locale sur "développeur blockchain Liège"',
    promptBody: `# PERSONA
Tu es un copywriter SEO expert, spécialisé dans la création de pages d'accueil pour des consultants tech à haute valeur ajoutée. Ton objectif est de transformer une page de présentation générique en un puissant outil de conversion et de référencement local.

# CONTEXTE
Je suis un développeur blockchain freelance à Liège. Mon expertise couvre le développement de smart contracts Solidity, la création de dApps, l'audit de sécurité Web3 et l'intégration d'IA. Je veux restructurer le contenu de ma page d'accueil pour dominer la recherche locale sur "développeur blockchain Liège".

# MISSION
Rédige le contenu complet de ma nouvelle page d'accueil en respectant la structure SEO suivante :

1.  **Titre H1 (Cœur de métier + Localisation)** :
    *   \`Développeur Blockchain & Smart Contracts à Liège\`

2.  **Introduction (2-3 phrases)** :
    *   Présente-moi comme l'expert de référence en Wallonie pour les projets Web3. Mentionne mon focus sur la sécurité et la performance.

3.  **Section Services (Titres H2)** :
    *   Pour chaque service ci-dessous, rédige un paragraphe de 50-70 mots qui explique la valeur ajoutée, les technologies utilisées (Solidity, zkEVM, etc.) et le bénéfice client.
        *   \`<h2>Développement de Smart Contracts Solidity Sécurisés</h2>\`
        *   \`<h2>Création d'Applications Décentralisées (dApps) sur Mesure</h2>\`
        *   \`<h2>Intégration d'Intelligence Artificielle (IA) sur Blockchain</h2>\`
        *   \`<h2>Audit de Sécurité et Optimisation de Smart Contracts</h2>\`
        *   \`<h2>Consulting Stratégique Web3 pour Entreprises</h2>\`
        *   \`<h2>Formation Blockchain pour Équipes Techniques</h2>\`
        *   \`<h2>Développement de Tokens Non Fongibles (NFT)</h2>\`
        *   \`<h2>Mise en place de Plateformes de Financement Participatif (IDOs)</h2>\`

4.  **Section FAQ (Intégration PAA)** :
    *   Intègre une section FAQ qui répond de manière concise et experte aux questions suivantes (issues de "People Also Ask") :
        *   \`<h3>Combien coûte le développement d'un smart contract ?</h3>\`
        *   \`<h3>Comment bien choisir son développeur blockchain ?</h3>\`
        *   \`<h3>Quels sont les principaux risques liés à un smart contract ?</h3>\`
        *   \`<h3>Quelles sont les applications concrètes de la blockchain ?</h3>\`
        *   \`<h3>Pourquoi est-il important d'auditer ses smart contracts ?</h3>\`

5.  **Appel à l'action (CTA)** :
    *   Termine avec un CTA clair et engageant, proposant une consultation stratégique gratuite ou un audit préliminaire.

# CONTRAINTES
- Le ton doit être technique, pragmatique et orienté "mainnet-ready".
- Intègre naturellement les mots-clés : "développeur blockchain Liège", "expert Solidity", "sécurité Web3", "consultant blockchain Belgique".
- Le maillage interne doit être suggéré. Utilise \`[Lien vers : /page-service]\` pour indiquer où insérer les liens vers les futures pages de service.`,
    usageNotes:
      'Prompt complet pour générer du contenu SEO-ready. Adaptez les services selon votre offre.',
    category: 'content',
    tags: ['refonte', 'h1 h2', 'contenu seo', 'liège'],
  },
  {
    id: 'prompt-schema-org',
    title: 'Prompt — Balisage Schema.org ProfessionalService',
    goal: 'Générer un script JSON-LD de données structurées pour améliorer le référencement local',
    promptBody: `# MISSION
Agis en tant qu'expert en SEO technique. Génère un script de balisage de données structurées (Schema.org) au format JSON-LD pour un service professionnel.

# DONNÉES
- **Type de service** : ProfessionalService
- **Nom** : Antony Lambi - Développeur Blockchain Liège
- **URL du site** : https://antonylambi.be
- **Logo URL** : https://antonylambi.be/images/logo.png
- **Téléphone** : +32 467 84 18 50
- **Email** : contact@antonylambi.be
- **Adresse** :
    - Type : PostalAddress
    - Localité : Liège
    - Pays : BE
- **Description** : Expert développeur blockchain et smart contracts à Liège, spécialisé en Solidity, dApps et sécurité Web3.
- **Domaine de service (areaServed)** : Belgique

# FORMAT DE SORTIE
Fournis uniquement le code JSON-LD complet et valide.`,
    usageNotes:
      'Injectez le JSON-LD généré dans le <head> de votre page via next/script. Validez avec Google Rich Results Test.',
    category: 'technical',
    tags: ['schema.org', 'json-ld', 'structured data', 'seo technique'],
  },
];

/**
 * Helper: Obtenir les prompts par catégorie
 */
export function getPromptsByCategory(
  category: SEOPrompt['category']
): SEOPrompt[] {
  return seoPrompts.filter((p) => p.category === category);
}

/**
 * Helper: Rechercher des prompts par tag
 */
export function searchPromptsByTag(tag: string): SEOPrompt[] {
  return seoPrompts.filter((p) => p.tags.includes(tag.toLowerCase()));
}
