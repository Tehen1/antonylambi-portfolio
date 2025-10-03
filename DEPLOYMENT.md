# 🚀 Guide Déploiement Cloudflare Pages - antonylambi.be

Guide complet pour déployer votre portfolio sur **Cloudflare Pages** avec CI/CD automatique via GitHub Actions.

---

## 📋 Prérequis

### 1. Comptes Requis

- ✅ **GitHub** : Account avec repository antonylambi-portfolio
- ✅ **Cloudflare** : Account avec domaine antonylambi.be configuré
- ✅ **Cloudflare API Token** : Avec permissions Pages Write

### 2. Vérifications Locales

```bash
# Test du build local
pnpm build

# Vérifier le dossier `out` généré
ls -la out/
```

---

## 🔑 Étape 1 : Obtenir les Credentials Cloudflare

### 1.1 Créer un API Token

1. Connectez-vous à [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Allez dans **My Profile** → **API Tokens**
3. Cliquez sur **Create Token**
4. Utilisez le template **"Edit Cloudflare Workers"** OU créez un custom token avec :
   - **Permissions** :
     - `Account` → `Cloudflare Pages` → `Edit`
   - **Account Resources** :
     - Include → Votre compte
5. Cliquez sur **Continue to summary** puis **Create Token**
6. **Copiez le token** (vous ne le reverrez plus !)

### 1.2 Récupérer l'Account ID

1. Dans le [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Sélectionnez votre domaine **antonylambi.be**
3. Faites défiler vers le bas dans la sidebar droite
4. Copiez l'**Account ID**

---

## 🐙 Étape 2 : Configuration GitHub

### 2.1 Créer le Repository

```bash
cd /Users/devtehen/projects/antonylambi-portfolio

# Initialiser Git (si pas déjà fait)
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "feat: Portfolio Next.js avec 4 thèmes, SEO optimisé et CI/CD Cloudflare"

# Renommer la branche en main
git branch -M main

# Ajouter le remote GitHub
git remote add origin https://github.com/tehen1/antonylambi-portfolio.git

# Pusher le code
git push -u origin main
```

### 2.2 Configurer les Secrets GitHub

1. Allez sur votre repository : `https://github.com/tehen1/antonylambi-portfolio`
2. Cliquez sur **Settings** → **Secrets and variables** → **Actions**
3. Cliquez sur **New repository secret**

Ajoutez ces 2 secrets :

#### Secret 1 : CLOUDFLARE_API_TOKEN
```
Name: CLOUDFLARE_API_TOKEN
Secret: <votre_token_cloudflare_copié>
```

#### Secret 2 : CLOUDFLARE_ACCOUNT_ID
```
Name: CLOUDFLARE_ACCOUNT_ID
Secret: <votre_account_id>
```

---

## ☁️ Étape 3 : Configuration Cloudflare Pages

### 3.1 Créer le Projet Pages

**Option A : Via Dashboard (Recommandé)**

1. Allez sur [Cloudflare Pages](https://dash.cloudflare.com/pages)
2. Cliquez sur **Create a project**
3. Sélectionnez **Connect to Git** → **GitHub**
4. Autorisez Cloudflare à accéder à votre repository
5. Sélectionnez le repository **antonylambi-portfolio**
6. **Configuration Build** :
   - **Production branch** : `main`
   - **Build command** : *Laisser vide* (GitHub Actions s'en charge)
   - **Build output directory** : *Laisser vide*
7. **Variables d'environnement** (optionnel pour previews) :
   ```
   NEXT_PUBLIC_SITE_URL=https://antonylambi.be
   NEXT_PUBLIC_CONTACT_EMAIL=contact@antonylambi.be
   ```
8. Cliquez sur **Save and Deploy**

**Option B : Via Wrangler CLI**

```bash
# Installer Wrangler
pnpm add -g wrangler

# Login Cloudflare
wrangler login

# Créer le projet
wrangler pages project create antonylambi-portfolio

# Configuration manuelle via dashboard ensuite
```

### 3.2 Configurer le Domaine Custom

1. Dans votre projet Pages, allez dans **Custom domains**
2. Cliquez sur **Set up a custom domain**
3. Entrez `antonylambi.be`
4. Cloudflare va automatiquement créer le CNAME
5. **Ajoutez aussi** `www.antonylambi.be` (optionnel)
6. Les redirects sont gérés par `public/_redirects` :
   ```
   https://www.antonylambi.be/* https://antonylambi.be/:splat 301!
   http://antonylambi.be/* https://antonylambi.be/:splat 301!
   ```

### 3.3 Vérifier SSL/TLS

1. Allez dans **SSL/TLS** de votre domaine
2. Mode recommandé : **Full** ou **Full (strict)**
3. **Always Use HTTPS** : Activé

---

## 🎬 Étape 4 : Premier Déploiement

### 4.1 Pousser sur GitHub

```bash
# Assurez-vous que tout est commité
git status

# Si changements, commit
git add .
git commit -m "chore: Configure CI/CD Cloudflare Pages"

# Push vers main → déclenche le déploiement
git push origin main
```

### 4.2 Suivre le Déploiement

1. Allez sur **GitHub** → **Actions**
2. Vous devriez voir le workflow **"Deploy to Cloudflare Pages"** en cours
3. Étapes :
   - ✅ Checkout code
   - ✅ Setup Node.js + pnpm
   - ✅ Install dependencies
   - ✅ Lint
   - ✅ Type check
   - ✅ Build
   - ✅ Deploy to Cloudflare Pages

4. Si succès, allez sur **Cloudflare Pages** → **Deployments**
5. Le déploiement devrait être marqué comme **Success**

### 4.3 Vérifier le Site

Ouvrez votre navigateur :
```
https://antonylambi.be
```

Testez :
- ✅ Les 4 thèmes (Classic, Cyberpunk, Matrix, Neon)
- ✅ Navigation (Header sticky, liens ancre)
- ✅ Responsive mobile
- ✅ Sections (Hero, Projects, Skills, Contact)

---

## 🔧 Étape 5 : Configuration Avancée (Optionnel)

### 5.1 Preview Deployments

Chaque PR créera automatiquement un **Preview Deployment** :
- URL format : `https://<pr-number>.antonylambi-portfolio.pages.dev`
- Permet de tester avant merge

### 5.2 Analytics (Optionnel)

#### Google Analytics 4

1. Créez une propriété GA4
2. Récupérez le **Measurement ID** (format : `G-XXXXXXXXXX`)
3. Ajoutez dans GitHub Secrets :
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
4. Rebuild le site

#### Cloudflare Web Analytics

1. Dans Cloudflare Dashboard → **Analytics** → **Web Analytics**
2. Cliquez sur **Add a site**
3. Entrez `antonylambi.be`
4. Copiez le **Site Tag** (beacon token)
5. Ajoutez dans GitHub Secrets :
   ```
   NEXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN=<token>
   ```

### 5.3 Monitoring Sentry (Optionnel)

1. Créez un projet sur [Sentry.io](https://sentry.io)
2. Copiez le **DSN**
3. Ajoutez dans GitHub Secrets :
   ```
   SENTRY_DSN=https://xxx@xxx.ingest.sentry.io/xxx
   NEXT_PUBLIC_SENTRY_DSN=https://xxx@xxx.ingest.sentry.io/xxx
   ```

---

## ✅ Checklist Finale

### Après Premier Déploiement

- [ ] Site accessible sur `https://antonylambi.be`
- [ ] HTTPS fonctionnel (SSL actif)
- [ ] Redirect www → apex fonctionne
- [ ] 4 thèmes switchables
- [ ] Header/Footer visibles
- [ ] Sections Hero, Metrics, Projects, Skills affichées
- [ ] Responsive mobile OK
- [ ] GitHub Actions build réussi

### SEO & Performance

- [ ] Tester sur [PageSpeed Insights](https://pagespeed.web.dev/)
  - Objectif : Score >90 pour Performance, SEO, Accessibilité
- [ ] Vérifier [Google Rich Results Test](https://search.google.com/test/rich-results)
  - JSON-LD Person schema détecté
- [ ] Tester Open Graph sur [Facebook Debugger](https://developers.facebook.com/tools/debug/)
- [ ] Soumettre sitemap dans [Google Search Console](https://search.google.com/search-console)
  - URL sitemap : `https://antonylambi.be/sitemap.xml`

### Sécurité

- [ ] Headers sécurité actifs (vérifier avec [securityheaders.com](https://securityheaders.com/))
  - HSTS, CSP, X-Frame-Options, X-Content-Type-Options
- [ ] HTTPS forcé (aucune requête HTTP)
- [ ] Pas de secrets exposés dans le bundle client

---

## 🐛 Troubleshooting

### Problème : Build échoue sur GitHub Actions

**Solution** :
1. Vérifiez les logs dans GitHub Actions
2. Testez le build localement : `pnpm build`
3. Vérifiez que `pnpm-lock.yaml` est commité
4. Si erreur TypeScript, lancez : `pnpm typecheck`

### Problème : Site non accessible après déploiement

**Solution** :
1. Vérifiez que le DNS est configuré (peut prendre jusqu'à 24h)
2. Vérifiez dans Cloudflare Pages → Deployments que le dernier deploy est "Success"
3. Clear cache navigateur (Cmd+Shift+R sur Mac)

### Problème : Thèmes ne fonctionnent pas

**Solution** :
1. Vérifiez que `localStorage` est accessible (pas en navigation privée)
2. Ouvrez DevTools → Console pour voir les erreurs
3. Vérifiez que `next-themes` est bien installé : `pnpm list next-themes`

### Problème : Images/Vidéos ne s'affichent pas

**Solution** :
1. Vérifiez que les assets sont bien dans `public/`
2. Vérifiez les chemins dans `src/data/projects.ts`
3. Images doivent commencer par `/images/...` (pas `./` ou `../`)

---

## 🔄 Workflow de Développement

### Pour chaque nouvelle fonctionnalité

```bash
# 1. Créer une branche
git checkout -b feat/nouvelle-fonctionnalite

# 2. Développer et tester localement
pnpm dev

# 3. Commit
git add .
git commit -m "feat: Description de la fonctionnalité"

# 4. Push
git push origin feat/nouvelle-fonctionnalite

# 5. Créer une Pull Request sur GitHub
# → Preview deployment automatique créé

# 6. Après review et tests, merger vers main
# → Déploiement automatique en production
```

---

## 📞 Support

- **Documentation Next.js** : https://nextjs.org/docs
- **Documentation Cloudflare Pages** : https://developers.cloudflare.com/pages
- **GitHub Actions** : https://docs.github.com/en/actions

---

## 🎉 Félicitations !

Votre portfolio est maintenant déployé sur **antonylambi.be** avec :
- ✅ CI/CD automatique
- ✅ HTTPS sécurisé
- ✅ Performance optimale
- ✅ SEO complet

**Next Steps** :
1. Ajoutez Google Analytics et Cloudflare Analytics
2. Soumettez le sitemap à Google Search Console
3. Testez sur différents devices et navigateurs
4. Partagez sur LinkedIn/Twitter ! 🚀
