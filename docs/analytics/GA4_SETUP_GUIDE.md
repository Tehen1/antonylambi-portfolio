# 📊 Guide Configuration Google Analytics 4 (GA4) & Search Console

> **Objectif:** Tracking complet conversions, comportement utilisateur, et optimisation SEO  
> **Temps estimé:** 30-45 minutes  
> **Prérequis:** Compte Google, site déployé sur Cloudflare Pages

---

## 🎯 **Phase 1: Configuration Google Analytics 4**

### **Étape 1.1 : Créer Propriété GA4**

1. **Accéder à Google Analytics**
   - URL : https://analytics.google.com/
   - Cliquer **"Créer" → "Propriété"**

2. **Configuration Propriété**
   ```yaml
   Nom de la propriété: Antony Lambinon Portfolio
   Fuseau horaire: (GMT+01:00) Brussels
   Devise: Euro (EUR)
   ```

3. **Informations Entreprise**
   ```yaml
   Secteur d'activité: Technology
   Taille entreprise: Small (1-10 employees)
   Utilisation: Generate leads / Self-promotion
   ```

4. **Créer Flux de Données (Web)**
   ```yaml
   URL du site web: https://antonylambi-portfolio.pages.dev
   Nom du flux: Portfolio Production
   ```

5. **Copier Measurement ID**
   - Format : `G-XXXXXXXXXX`
   - **IMPORTANT:** Sauvegarder cet ID (nécessaire pour configuration)

---

### **Étape 1.2 : Configuration Variables Environnement**

1. **Créer fichier `.env.local`** (si non existant)
   ```bash
   cd /Users/devtehen/projects/antonylambi-portfolio
   touch .env.local
   ```

2. **Ajouter Measurement ID**
   ```bash
   # .env.local (LOCAL ONLY - NE PAS COMMIT)
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

3. **Vérifier `.gitignore`**
   ```bash
   # S'assurer que .env.local est ignoré
   grep -q ".env.local" .gitignore || echo ".env.local" >> .gitignore
   ```

4. **Configuration Cloudflare Pages**
   - Dashboard Cloudflare : https://dash.cloudflare.com/
   - Pages → **antonylambi-portfolio** → **Settings** → **Environment Variables**
   - Ajouter :
     ```
     Variable: NEXT_PUBLIC_GA_MEASUREMENT_ID
     Value: G-XXXXXXXXXX
     Environment: Production
     ```

---

### **Étape 1.3 : Intégrer Composant Analytics**

Le composant `<GoogleAnalytics />` est déjà créé. Il faut l'ajouter au layout :

**Fichier:** `src/app/layout.tsx`

```typescript
import { GoogleAnalytics } from '@/components/analytics/google-analytics';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        {/* Structured Data JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
        />
      </head>
      <body className={`${inter.variable} font-sans`}>
        {/* Google Analytics Component */}
        <GoogleAnalytics />
        
        <ThemeProvider
          attribute="class"
          defaultTheme="cyberpunk"
          enableSystem={false}
          themes={['classic', 'cyberpunk', 'matrix', 'neon']}
          storageKey="antony-portfolio-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

---

### **Étape 1.4 : Configuration Événements GA4 Personnalisés**

#### **A. Événements Vidéo (déjà intégrés via hook)**

**Fichier:** `src/components/ui/video-player.tsx`

```typescript
import { useVideoAnalytics } from '@/hooks/use-video-analytics';

export function VideoPlayer({ src, poster, videoId }: VideoPlayerProps) {
  const { onPlay, onPause, onTimeUpdate, onEnded } = useVideoAnalytics(videoId);
  
  return (
    <video
      src={src}
      poster={poster}
      onPlay={onPlay}
      onPause={onPause}
      onTimeUpdate={onTimeUpdate}
      onEnded={onEnded}
      // ... autres props
    />
  );
}
```

**Événements trackés:**
- ✅ `video_play` : Lecture démarrée
- ✅ `video_pause` : Pause utilisateur
- ✅ `video_progress` : Quartiles 25%, 50%, 75%
- ✅ `video_complete` : Lecture complète (100%)

#### **B. Événements Formulaire Contact**

**Exemple implémentation** (à adapter selon votre formulaire) :

```typescript
import { useFormAnalytics } from '@/hooks/use-video-analytics';

export function ContactForm() {
  const { trackFormStart, trackFormSubmit, trackFormError } = useFormAnalytics('contact_homepage');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Logique envoi formulaire
      await sendEmail(formData);
      
      // Tracking succès
      trackFormSubmit({ 
        form_type: 'contact',
        form_location: 'homepage' 
      });
      
    } catch (error) {
      // Tracking erreur
      trackFormError('submission_failed');
    }
  };
  
  return (
    <form 
      onSubmit={handleSubmit}
      onFocus={trackFormStart} // Track au premier focus
    >
      {/* Champs formulaire */}
    </form>
  );
}
```

#### **C. Événements Projets**

```typescript
import { useProjectAnalytics } from '@/hooks/use-video-analytics';

export function ProjectCard({ project }: { project: Project }) {
  const { trackProjectView, trackProjectDemo, trackProjectRepo } = useProjectAnalytics();
  
  useEffect(() => {
    // Track vue projet au mount
    trackProjectView(project.slug, project.title);
  }, []);
  
  return (
    <div>
      <h3>{project.title}</h3>
      
      <a 
        href={project.demoUrl}
        onClick={() => trackProjectDemo(project.slug, project.demoUrl)}
        target="_blank"
      >
        Voir la démo
      </a>
      
      <a 
        href={project.repoUrl}
        onClick={() => trackProjectRepo(project.slug, project.repoUrl)}
        target="_blank"
      >
        Code source
      </a>
    </div>
  );
}
```

#### **D. Événements Liens Externes**

```typescript
import { useExternalLinkTracking } from '@/hooks/use-video-analytics';

export function SocialLinks() {
  const trackExternalClick = useExternalLinkTracking();
  
  return (
    <div>
      <a
        href="https://github.com/devtehen"
        onClick={() => trackExternalClick('github', 'https://github.com/devtehen')}
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      
      <a
        href="https://linkedin.com/in/antony-lambinon"
        onClick={() => trackExternalClick('linkedin', 'https://linkedin.com/in/antony-lambinon')}
        target="_blank"
      >
        LinkedIn
      </a>
    </div>
  );
}
```

---

### **Étape 1.5 : Configuration Objectifs de Conversion GA4**

1. **Accéder aux Conversions**
   - GA4 Dashboard → **Admin** → **Événements**
   - Cliquer **"Créer un événement"**

2. **Marquer Événements comme Conversions**
   - ✅ `form_submit` (Contact form)
   - ✅ `video_complete` (Vidéo vue à 100%)
   - ✅ `project_demo_click` (Clic démo projet)
   - ✅ `external_link_click` (Clic GitHub/LinkedIn)

3. **Créer Objectifs Custom**
   ```yaml
   Nom: Lead Qualification
   Type: Événement personnalisé
   Paramètres:
     - event_name: form_submit
     - form_type: contact
   Valeur: 100€ (estimation valeur lead)
   ```

---

### **Étape 1.6 : Rapports Personnalisés GA4**

#### **Rapport 1 : Engagement Vidéos**

```yaml
Dimensions:
  - video_id (label événement)
  - video_percent (progression)

Métriques:
  - Nombre de lectures (video_play)
  - Taux complétion (video_complete / video_play)
  - Temps moyen visionnage

Filtres:
  - event_category = 'media'
```

#### **Rapport 2 : Funnel Conversion**

```yaml
Étapes:
  1. Page vue homepage
  2. Scroll >50% (automatic scroll tracking)
  3. Interaction vidéo (play)
  4. Clic "Contact" button
  5. Form start
  6. Form submit (CONVERSION)

Taux abandon par étape:
  - Objectif: <30% entre étapes 4-6
```

#### **Rapport 3 : Engagement Projets**

```yaml
Dimensions:
  - project_slug
  - project_title

Métriques:
  - Vues projets (project_view)
  - Clics démo (project_demo_click)
  - Clics repo (project_repo_click)
  - Taux engagement (démo + repo / vues)
```

---

## 🔍 **Phase 2: Configuration Google Search Console**

### **Étape 2.1 : Vérification Propriété**

1. **Accéder à Search Console**
   - URL : https://search.google.com/search-console/
   - Cliquer **"Ajouter une propriété"**

2. **Méthode de Vérification : DNS (Recommandée)**
   ```yaml
   Type de propriété: Domaine (DNS)
   Domaine: antonylambi-portfolio.pages.dev
   ```

3. **Configuration DNS Cloudflare**
   - Dashboard Cloudflare → **DNS** → **Records**
   - Ajouter enregistrement TXT :
     ```
     Type: TXT
     Name: @
     Content: google-site-verification=XXXXXXXXXXXXXXXXXXX
     TTL: Auto
     ```
   - **Attendre 5-10 minutes** pour propagation DNS

4. **Vérifier dans Search Console**
   - Cliquer **"Vérifier"**
   - Status devrait passer à ✅ **"Propriété vérifiée"**

---

### **Étape 2.2 : Soumettre Sitemap**

1. **Vérifier Génération Sitemap**
   ```bash
   # Tester localement
   npm run build
   
   # Vérifier fichier généré
   ls -lh out/sitemap.xml
   
   # Contenu sitemap (doit inclure toutes pages)
   cat out/sitemap.xml
   ```

2. **Soumettre dans Search Console**
   - Section **"Sitemaps"** (menu gauche)
   - Ajouter sitemap : `https://antonylambi-portfolio.pages.dev/sitemap.xml`
   - Cliquer **"Envoyer"**

3. **Vérifier Indexation**
   - Status : **"Réussite"** (peut prendre 24-48h)
   - Pages découvertes : Devrait matcher nombre de pages (actuellement ~10)

---

### **Étape 2.3 : Configuration Alertes**

1. **Alertes Email Automatiques**
   - Search Console → **Paramètres** → **Utilisateurs et autorisations**
   - Activer notifications :
     - ✅ Erreurs d'exploration
     - ✅ Problèmes de sécurité
     - ✅ Actions manuelles
     - ✅ Nouvelles améliorations disponibles

2. **Alertes Slack (Optionnel)**
   ```bash
   # Webhook Slack pour monitoring Search Console
   # Via Zapier ou Make.com : Search Console → Slack
   ```

---

### **Étape 2.4 : Optimisations Search Console**

#### **A. Core Web Vitals**
- Menu **"Expérience"** → **"Core Web Vitals"**
- Objectif : 100% URLs en "Bonnes"
  - LCP < 2.5s ✅
  - FID < 100ms ✅
  - CLS < 0.1 ✅

#### **B. Mobile Usability**
- Menu **"Expérience"** → **"Ergonomie mobile"**
- Résoudre problèmes :
  - Texte trop petit
  - Éléments cliquables trop proches
  - Contenu dépassant viewport

#### **C. Rich Results**
- Menu **"Améliorations"** → **"Résultats enrichis"**
- Vérifier JSON-LD valide :
  - ✅ ProfessionalService
  - ✅ FAQPage
  - ✅ BreadcrumbList

---

## 📈 **Phase 3: KPIs & Dashboards**

### **KPIs Prioritaires à Suivre**

#### **Performance SEO (Search Console)**

| Métrique | Objectif Mois 1 | Objectif Mois 3 | Objectif Mois 6 |
|----------|-----------------|-----------------|-----------------|
| **Impressions** | 500 | 2,000 | 5,000 |
| **Clics** | 20 | 100 | 300 |
| **CTR Moyen** | 4% | 5% | 6% |
| **Position Moyenne** | #25 | #15 | #8 |
| **Pages Indexées** | 10 | 15 | 25 (avec blog) |

#### **Conversions (GA4)**

| Événement | Objectif Mensuel | Valeur |
|-----------|------------------|--------|
| `form_submit` | 10 | 100€ |
| `video_complete` | 50 | 10€ |
| `project_demo_click` | 30 | 5€ |
| `external_link_click` | 100 | 2€ |
| **Total Valeur Conversions** | **1,500€** | - |

#### **Engagement (GA4)**

| Métrique | Cible |
|----------|-------|
| Utilisateurs actifs/mois | 200 |
| Sessions moyennes/utilisateur | 1.5 |
| Durée session moyenne | 2min 30s |
| Taux rebond | <60% |
| Pages/session | >2.5 |

---

### **Dashboard GA4 Recommandé**

**Template à créer** :

```yaml
Nom: Portfolio Performance Dashboard

Sections:
  1. Vue d'Ensemble (Today vs Yesterday):
     - Utilisateurs actifs temps réel
     - Sessions (aujourd'hui)
     - Conversions (aujourd'hui)
     - Taux conversion

  2. Acquisition (7 derniers jours):
     - Sources trafic (Organic, Direct, Referral, Social)
     - Top pages entrée
     - Mots-clés organiques (via Search Console link)

  3. Engagement (30 derniers jours):
     - Vidéos : Taux complétion
     - Projets : CTR démo/repo
     - Formulaires : Taux conversion
     - Temps moyen session

  4. Conversions (90 derniers jours):
     - Funnel visualisation
     - Valeur totale conversions
     - Top événements conversion
     - Objectifs atteints vs cible
```

---

### **Rapports Hebdomadaires Automatiques**

1. **Configuration Email Automatique GA4**
   - Dashboard → **Bibliothèque** → **Créer rapport**
   - Planifier envoi : **Lundi 9h00** (hebdomadaire)
   - Destinataires : votre email

2. **Contenu Rapport Email**
   ```yaml
   Période: 7 derniers jours vs 7 jours précédents
   
   Métriques incluses:
     - Utilisateurs (+/- %)
     - Sessions (+/- %)
     - Conversions form_submit (+/- %)
     - Top 5 pages vues
     - Top 3 sources trafic
   ```

---

## 🧪 **Phase 4: Tests & Validation**

### **Checklist Tests Avant Production**

#### **1. Tests Google Analytics**

```bash
# En développement (console browser)
# Ouvrir : http://localhost:3000
# Vérifier console logs :
[GA4 Dev] Event: { action: 'video_play', category: 'media', ... }
```

**Tests manuels :**
- [ ] Page vue homepage tracké
- [ ] Clic bouton Contact → `form_start`
- [ ] Lecture vidéo 50% → `video_progress` (q50)
- [ ] Lecture vidéo complète → `video_complete`
- [ ] Clic lien GitHub → `external_link_click`
- [ ] Soumission formulaire → `form_submit`

#### **2. Tests Production**

**URL:** https://antonylambi-portfolio.pages.dev

1. **Extension Google Analytics Debugger**
   - Installer : [GA Debugger Chrome Extension](https://chrome.google.com/webstore/detail/google-analytics-debugger/)
   - Activer extension
   - Recharger site
   - Vérifier console : Événements GA4 envoyés

2. **Real-Time Reports GA4**
   - Dashboard GA4 → **Rapports** → **Temps réel**
   - Vérifier :
     - ✅ Utilisateurs actifs (vous-même)
     - ✅ Événements temps réel apparaissent
     - ✅ Page vue correcte

3. **Validation Search Console**
   - Search Console → **Inspection URL**
   - Tester : `https://antonylambi-portfolio.pages.dev/`
   - Vérifier :
     - ✅ Indexable
     - ✅ Structured Data valide
     - ✅ Mobile-friendly
     - ✅ Core Web Vitals "Bon"

---

## 🚨 **Troubleshooting**

### **Problème 1 : GA4 ne track pas**

**Symptômes :** Aucun événement dans Real-Time Reports

**Solutions :**
1. Vérifier `NEXT_PUBLIC_GA_MEASUREMENT_ID` dans `.env.local`
2. Rebuild projet : `npm run build`
3. Vérifier console browser : pas d'erreurs JS
4. Tester avec `NODE_ENV=production npm run start`
5. Vérifier bloqueur pub désactivé (uBlock, Adblock)

### **Problème 2 : Search Console ne vérifie pas**

**Symptômes :** Erreur vérification DNS

**Solutions :**
1. Attendre 15-30 minutes (propagation DNS)
2. Vérifier enregistrement TXT Cloudflare correct
3. Tester DNS : `dig TXT antonylambi-portfolio.pages.dev`
4. Essayer méthode alternative : HTML file upload

### **Problème 3 : Sitemap non indexé**

**Symptômes :** Status "Erreur" dans Search Console

**Solutions :**
1. Vérifier URL sitemap accessible : `/sitemap.xml`
2. Valider XML : https://www.xml-sitemaps.com/validate-xml-sitemap.html
3. Vérifier `robots.txt` pointe vers sitemap
4. Forcer réindexation : **"Demander une indexation"**

---

## 📚 **Ressources Supplémentaires**

### **Documentation Officielle**
- [GA4 Setup Guide](https://support.google.com/analytics/answer/9304153)
- [Search Console Help](https://support.google.com/webmasters/answer/9128668)
- [Next.js Analytics](https://nextjs.org/docs/app/building-your-application/optimizing/analytics)

### **Outils Validation**
- [GA4 Event Builder](https://ga-dev-tools.google/ga4/event-builder/)
- [Rich Results Test](https://search.google.com/test/rich-results)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [PageSpeed Insights](https://pagespeed.web.dev/)

### **Communautés & Support**
- [r/GoogleAnalytics](https://reddit.com/r/GoogleAnalytics)
- [Search Console Help Community](https://support.google.com/webmasters/community)
- [GA4 Discord](https://discord.gg/google-analytics)

---

## ✅ **Checklist Finale**

### **Configuration Initiale**
- [ ] Propriété GA4 créée
- [ ] Measurement ID copié
- [ ] Variable environnement `.env.local` configurée
- [ ] Variable Cloudflare Pages ajoutée
- [ ] Composant `<GoogleAnalytics />` intégré layout
- [ ] Build + déploiement réussi

### **Événements Trackés**
- [ ] Page views automatiques ✅
- [ ] Événements vidéos (play, progress, complete)
- [ ] Événements formulaire contact
- [ ] Événements projets (view, demo, repo)
- [ ] Événements liens externes (GitHub, LinkedIn)

### **Search Console**
- [ ] Propriété vérifiée (DNS TXT)
- [ ] Sitemap soumis (`/sitemap.xml`)
- [ ] Indexation validée (>80% pages)
- [ ] Structured Data sans erreurs
- [ ] Core Web Vitals "Bon" (mobile + desktop)
- [ ] Alertes email activées

### **Dashboards & Rapports**
- [ ] Dashboard GA4 personnalisé créé
- [ ] Rapports hebdomadaires programmés
- [ ] Objectifs de conversion configurés
- [ ] KPIs définis (mois 1, 3, 6)

### **Tests Production**
- [ ] GA4 Real-Time Reports fonctionnel
- [ ] Événements apparaissent dans GA4 (24-48h)
- [ ] Search Console indexation confirmée
- [ ] Mobile-friendly test passé
- [ ] Rich Results valides

---

**🎉 Configuration Terminée !**

Temps total : ~45 minutes  
Prochaine étape : Analyser données après 7 jours et ajuster stratégie content/SEO.

**Questions ou problèmes ? Ouvrir issue GitHub ou contacter support.**
