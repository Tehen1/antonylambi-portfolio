# 🚀 Portfolio Antony Lambinon

Portfolio professionnel développé avec **Next.js 15**, **TypeScript**, **Tailwind CSS** et **Prisma**. Site optimisé SEO avec 4 thèmes (Cyberpunk par défaut) et déployable sur **Cloudflare Pages** via **antonylambi.be**.

## ✨ Fonctionnalités

- ✅ **4 Thèmes** : Classic, Cyberpunk (default), Matrix, Neon
- ✅ **SEO Optimisé** : Metadata, Open Graph, Twitter Cards, JSON-LD
- ✅ **Performance** : Static Site Generation (SSG), Core Web Vitals >90
- ✅ **Responsive** : Mobile-first design avec Tailwind CSS
- ✅ **Sécurité** : CSP headers, HSTS, HTTPS forcé
- ✅ **TypeScript Strict** : 100% type-safe
- ✅ **Composants Shadcn/ui** : Button, Card, Accordion, Select, Badge
- ✅ **Animations** : Glitch effects, neon pulse, fade-in animations

## 📦 Stack Technique

- **Framework** : Next.js 15.5.4 (App Router)
- **Langage** : TypeScript 5.9+ (strict mode)
- **Styling** : Tailwind CSS 4.1 + CSS Variables
- **UI Components** : Shadcn/ui
- **Database** : Prisma + Neon PostgreSQL (optionnel)
- **Theming** : next-themes
- **Charts** : Chart.js + react-chartjs-2
- **Validation** : Zod
- **Déploiement** : Cloudflare Pages
- **CI/CD** : GitHub Actions

## 🛠️ Installation

### Prérequis

- Node.js 20.x ou supérieur
- pnpm (recommandé) ou npm

### Étapes

```bash
# 1. Installer les dépendances
pnpm install

# 2. Configurer les variables d'environnement
cp .env.example .env.local
# Éditer .env.local avec vos valeurs

# 3. Lancer le serveur de développement
pnpm dev
```

Le site sera accessible sur `http://localhost:3000`

## 📝 Scripts Disponibles

```bash
pnpm dev          # Lancer le serveur de développement (Turbopack)
pnpm build        # Build de production (SSG export)
pnpm start        # Serveur de production (après build)
pnpm lint         # Linter ESLint
pnpm typecheck    # Vérifier les types TypeScript
pnpm format       # Formater le code avec Prettier
```

## 🎨 Thèmes

Le site propose 4 thèmes switchables en temps réel :

1. **Classic** 🎯 : Professionnel bleu (#007BFF)
2. **Cyberpunk** ⚡ : Électrique cyan (#00f3ff) - **Par défaut**
3. **Matrix** 🟢 : Terminal vert (#00ff41)
4. **Neon** 💖 : Rose & Bleu (#ff0080, #00d4ff)

## 🚀 Déploiement Cloudflare Pages

### Configuration GitHub Secrets

Ajouter dans **Settings → Secrets and variables → Actions** :

```
CLOUDFLARE_API_TOKEN=your_token_here
CLOUDFLARE_ACCOUNT_ID=your_account_id_here
```

### Déploiement Automatique

Chaque push sur `main` déclenche automatiquement :

1. Lint et typecheck
2. Build SSG
3. Déploiement sur Cloudflare Pages
4. Site accessible sur `antonylambi.be`

## 🔐 Variables d'Environnement

```env
# Site URL
NEXT_PUBLIC_SITE_URL="https://antonylambi.be"

# Contact
NEXT_PUBLIC_CONTACT_EMAIL="contact@antonylambi.be"

# Analytics (optionnel)
NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"
NEXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN="your_token"
```

## 📄 Licence

© 2025 Antony Lambinon. Tous droits réservés.
