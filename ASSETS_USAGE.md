# 📸 Guide d'Utilisation des Assets du Portfolio

Ce guide explique comment utiliser les images, icônes et vidéos du portfolio de manière optimisée.

## 📁 Structure des Assets

```
public/
├── images/
│   ├── icons/                    # Icônes de projets
│   │   ├── fixierun-icon.png    (247 KB)
│   │   ├── rhymechain-icon.png  (251 KB)
│   │   ├── investment-icon.png  (131 KB)
│   │   └── seo-icon.png         (160 KB)
│   │
│   ├── fixie.run.jpeg                   # Page d'accueil Fixie Run
│   ├── fixierun-screenshot-1.jpeg       # Screenshots Fixie Run
│   ├── fixierun-screenshot-2.jpeg
│   ├── fixierun-screenshot-3.jpeg
│   └── fixierun-screenshot-4.jpeg
│
└── videos/
    ├── expertise/
    │   ├── expertise-blockchain-ai.mp4
    │   ├── expertise-seo.mp4
    │   └── expertise-web-dev.mp4
    │
    └── projects/
        ├── fixie.run-home.mp4   (6.5 MB)
        └── rhymechain.mp4       (6.2 MB)
```

## 🎨 Composants Disponibles

### 1. `ProjectIcon` - Icônes de Projets

Composant optimisé pour afficher les icônes de projets avec effets hover.

```tsx
import { ProjectIcon } from '@/components/project-icon';
import { ASSETS } from '@/lib/assets';

// Utilisation basique
<ProjectIcon 
  src={ASSETS.icons.fixierun} 
  alt="Fixie Run" 
/>

// Avec taille personnalisée
<ProjectIcon 
  src={ASSETS.icons.rhymechain}
  alt="RhymeChain"
  size="lg"              // 'sm' | 'md' | 'lg' | 'xl'
  priority              // Pour images above-the-fold
/>
```

**Tailles disponibles:**
- `sm`: 48x48px
- `md`: 64x64px (par défaut)
- `lg`: 96x96px
- `xl`: 128x128px

### 2. `ProjectImage` - Images de Projets

Composant pour screenshots et images avec optimisation Next.js.

```tsx
import { ProjectImage } from '@/components/project-image';
import { ASSETS } from '@/lib/assets';

// Mode standard avec dimensions fixes
<ProjectImage
  src={ASSETS.fixierun.screenshot1}
  alt="Fixie Run Interface"
  width={800}
  height={600}
/>

// Mode responsive avec fill
<ProjectImage
  src={ASSETS.fixierun.home}
  alt="Fixie Run Home"
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
  priority
/>
```

**Props disponibles:**
- `src`: Chemin de l'image
- `alt`: Texte alternatif (obligatoire pour SEO)
- `width/height`: Dimensions (optionnel si `fill=true`)
- `fill`: Mode responsive (remplit le container parent)
- `priority`: Charge l'image en priorité (pour LCP)
- `quality`: Qualité de compression (default: 85)
- `sizes`: Media queries pour responsive

## 📦 Configuration Centralisée

### Utilisation de `ASSETS`

```tsx
import { ASSETS, PROJECT_ASSETS } from '@/lib/assets';

// Accès direct aux chemins
const iconPath = ASSETS.icons.fixierun;
const videoPath = ASSETS.videos.projects.fixierunHome;

// Utilisation des métadonnées complètes
const project = PROJECT_ASSETS.fixierun;
console.log(project.name);         // "Fixie Run"
console.log(project.screenshots);  // Array de 5 chemins
console.log(project.tags);         // ['Next.js', 'TypeScript', ...]
```

### Type Safety

Tous les chemins d'assets sont typés avec TypeScript :

```tsx
// ✅ Correct - autocomplete disponible
<ProjectIcon src={ASSETS.icons.fixierun} alt="Fixie Run" />

// ❌ Erreur TypeScript
<ProjectIcon src="/wrong-path.png" alt="Test" />
```

## 🎬 Intégration des Vidéos

### Vidéos d'Expertise

```tsx
import { EXPERTISE_VIDEOS } from '@/lib/assets';

export function ExpertiseSection() {
  return (
    <div>
      {Object.values(EXPERTISE_VIDEOS).map((expertise) => (
        <div key={expertise.title}>
          <h3>{expertise.icon} {expertise.title}</h3>
          <p>{expertise.description}</p>
          <video 
            src={expertise.video}
            controls
            className="w-full rounded-lg"
          />
        </div>
      ))}
    </div>
  );
}
```

### Vidéos de Projets

```tsx
import { PROJECT_ASSETS } from '@/lib/assets';

<video
  src={PROJECT_ASSETS.fixierun.video}
  controls
  poster={PROJECT_ASSETS.fixierun.screenshots[0]}
  className="w-full rounded-lg"
  preload="metadata"
>
  Votre navigateur ne supporte pas la vidéo.
</video>
```

## 🚀 Optimisations Appliquées

### 1. **Next.js Image Optimization**
- Compression automatique WebP/AVIF
- Lazy loading par défaut
- Responsive images avec `srcset`
- Placeholder blur automatique

### 2. **Performance**
```tsx
// ✅ Image above-the-fold (First Contentful Paint)
<ProjectIcon src={ASSETS.icons.fixierun} priority />

// ✅ Images lazy-loaded (par défaut)
<ProjectImage src={ASSETS.fixierun.screenshot2} alt="..." />

// ✅ Vidéos avec preload intelligent
<video src="..." preload="metadata" />
```

### 3. **Accessibilité**
- `alt` obligatoire sur toutes les images
- Contrôles vidéo natifs activés
- Hover states pour meilleure UX
- Focus states pour navigation clavier

## 📱 Responsive Design

### Breakpoints Tailwind

```tsx
// Grid responsive pour galerie
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {screenshots.map(screenshot => (
    <ProjectImage
      src={screenshot}
      alt="..."
      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
    />
  ))}
</div>
```

### Tailles d'Icônes Adaptatives

```tsx
// Mobile: petit, Desktop: grand
<ProjectIcon 
  size="sm"                     // Mobile
  className="md:w-24 md:h-24"  // Desktop override
/>
```

## 🔧 Maintenance

### Ajouter un Nouveau Projet

1. **Ajouter les assets:**
```bash
# Icône
cp new-icon.png public/images/icons/

# Screenshots
cp screenshot-*.jpeg public/images/

# Vidéo
cp demo.mp4 public/videos/
```

2. **Mettre à jour `assets.ts`:**
```tsx
export const ASSETS = {
  icons: {
    // ... existant
    newProject: '/images/icons/new-icon.png',
  },
  // ...
};

export const PROJECT_ASSETS = {
  // ... existant
  newProject: {
    name: 'New Project',
    description: '...',
    icon: ASSETS.icons.newProject,
    screenshots: [...],
    video: '/videos/new-project.mp4',
    tags: ['React', 'TypeScript'],
  },
};
```

3. **Utiliser dans vos composants:**
```tsx
import { PROJECT_ASSETS } from '@/lib/assets';

const project = PROJECT_ASSETS.newProject;
```

## ⚠️ Notes Importantes

### Vidéos d'Expertise
Les vidéos `expertise-*.mp4` sont très légères (308-352 bytes). Vérifiez qu'elles ne sont pas corrompues :

```bash
# Vérifier les vidéos
ls -lh public/videos/expertise-*.mp4

# Tester la lecture
open public/videos/expertise-blockchain-ai.mp4
```

### Nommage des Fichiers
- ✅ `fixierun-icon.png` (kebab-case)
- ✅ `expertise-seo.mp4` (descriptif)
- ❌ `image (1).jpeg` (évité - déjà renommé)

## 📊 Statistiques Assets

| Type | Nombre | Taille Totale |
|------|--------|---------------|
| Icônes | 4 | ~789 KB |
| Screenshots | 5 | ~500 KB |
| Vidéos Projets | 2 | ~12.7 MB |
| Vidéos Expertise | 3 | ~1 KB* |

*⚠️ À vérifier/remplacer

## 🎯 Checklist Qualité

Avant d'ajouter de nouveaux assets :

- [ ] Les images sont optimisées (TinyPNG, ImageOptim)
- [ ] Les noms de fichiers sont descriptifs
- [ ] Les chemins sont ajoutés à `assets.ts`
- [ ] Les composants utilisent TypeScript strict
- [ ] `alt` texts sont descriptifs et accessibles
- [ ] Les vidéos ont des posters images
- [ ] Test sur mobile et desktop
- [ ] Validation Lighthouse (>90 Performance)

## 🔗 Ressources

- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Web.dev Image Performance](https://web.dev/fast/#optimize-your-images)
- [MDN Video Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)
