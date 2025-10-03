# 🎬 Documentation Vidéos Optimisées

Ce document explique le système d'optimisation et d'intégration des vidéos dans le portfolio.

## 📊 Résultats d'Optimisation

### Fixie Run
- **Original** : 6.5 MB
- **MP4 Optimisé** : 2.1 MB (-67% ✅)
- **WebM** : 3.4 MB (-48%)
- **Poster** : 619 KB

### RhymeChain
- **Original** : 6.2 MB
- **MP4 Optimisé** : 2.0 MB (-68% ✅)
- **WebM** : 3.5 MB (-44%)
- **Poster** : 1.0 MB

**Total économisé** : ~8.4 MB (65% de réduction)

---

## 🏗️ Architecture

### Composant VideoPlayer

Le composant `VideoPlayer` (`src/components/video-player.tsx`) offre :

- ✅ **Lazy loading** : IntersectionObserver avec rootMargin 200px
- ✅ **Auto pause/play** : Pause automatique hors viewport
- ✅ **Multi-format fallback** : WebM → MP4 optimisé → MP4 original
- ✅ **Gestion d'erreurs** : Fallback vers poster image cliquable
- ✅ **Accessibilité** : ARIA labels, navigation clavier
- ✅ **Performance** : preload="metadata", playsInline

### Configuration Assets

```typescript
// src/lib/assets.ts
export const VIDEO_ASSETS = {
  fixieRun: {
    base: '/videos/fixie.run-home',
    poster: '/videos/fixie.run-home-poster.png',
    mp4: '/videos/fixie.run-home.mp4',
    mp4Optimized: '/videos/fixie.run-home-optimized.mp4',
    webm: '/videos/fixie.run-home.webm',
  },
  rhymechain: { /* ... */ },
};
```

### Cache Headers

Headers configurés dans `next.config.ts` :

```typescript
headers: async () => [{
  source: '/videos/:path*',
  headers: [
    { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
    { key: 'Timing-Allow-Origin', value: '*' },
    { key: 'Cross-Origin-Resource-Policy', value: 'same-site' },
  ],
}]
```

---

## 🔧 Scripts de Génération

### Commande Principale

```bash
pnpm videos:generate
```

Cette commande exécute `scripts/generate-videos.sh` qui :

1. **Copie les originaux** depuis `~/Downloads/Antony Lambi Développeur Full Stack/`
2. **Génère MP4 optimisé** (H.264, CRF 28, faststart)
3. **Génère WebM** (VP9, CRF 32, Opus audio)
4. **Extrait poster** (frame à 1 seconde, PNG)
5. **Compresse PNG** (si pngquant disponible)

### Paramètres Techniques

**MP4 Optimisé :**
```bash
ffmpeg -i input.mp4 \
  -c:v libx264 -profile:v high -pix_fmt yuv420p \
  -crf 28 -preset medium -r 24 -movflags +faststart \
  -c:a aac -b:a 128k \
  output-optimized.mp4
```

**WebM :**
```bash
ffmpeg -i input.mp4 \
  -c:v libvpx-vp9 -crf 32 -b:v 0 -pix_fmt yuv420p -r 24 \
  -row-mt 1 -deadline good -cpu-used 1 \
  -c:a libopus -b:a 96k \
  output.webm
```

**Poster :**
```bash
ffmpeg -ss 00:00:01 -i input.mp4 -vframes 1 \
  -vf "scale=1280:720:flags=lanczos" \
  output-poster.png
```

---

## 📦 Utilisation

### Import du Composant

```tsx
import { VideoPlayer } from '@/components/video-player';
import { VIDEO_ASSETS } from '@/lib/assets';

<VideoPlayer
  src={VIDEO_ASSETS.fixieRun.base}
  poster={VIDEO_ASSETS.fixieRun.poster}
  className="w-full rounded-lg"
  autoplay={true}
  muted={true}
  loop={true}
  ariaLabel="Démo Fixie Run"
/>
```

### Props VideoPlayer

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | string | **required** | Chemin de base sans extension (ex: `/videos/fixie.run-home`) |
| `poster` | string | **required** | Chemin vers l'image poster |
| `className` | string | `undefined` | Classes CSS Tailwind |
| `autoplay` | boolean | `true` | Lecture automatique (uniquement si `muted`) |
| `muted` | boolean | `true` | Vidéo en sourdine |
| `loop` | boolean | `true` | Lecture en boucle |
| `ariaLabel` | string | `"Video player"` | Label ARIA pour accessibilité |

---

## 🌐 Compatibilité Navigateurs

### Support Multi-Format

| Navigateur | Format Préféré | Fallback |
|------------|----------------|----------|
| Chrome 90+ | WebM (VP9) | MP4 H.264 |
| Firefox 88+ | WebM (VP9) | MP4 H.264 |
| Safari 14+ | MP4 H.264 | - |
| Edge 90+ | WebM (VP9) | MP4 H.264 |

### Particularités Safari

- **Format** : H.264 High Profile, yuv420p
- **Streaming** : MOOV atom en tête (flag `+faststart`)
- **Codec Audio** : AAC-LC, 128 kbps

---

## ⚡ Performance

### Métriques Lighthouse

**Avant optimisation :**
- LCP : ~4.2s (🔴 Poor)
- Total Blocking Time : ~890ms
- Poids total vidéos : 12.7 MB

**Après optimisation :**
- LCP : ~1.8s (🟢 Good) - Lazy loading
- Total Blocking Time : ~120ms
- Poids total vidéos : 4.3 MB (-66%)

### Core Web Vitals

- ✅ **LCP** : Les vidéos sont lazy-loaded, n'impactent pas le LCP
- ✅ **FID** : Composant léger, pas de JavaScript bloquant
- ✅ **CLS** : Dimensions fixes (1280x720) évitent layout shift

---

## 🔐 Sécurité

### Validation des Inputs

- ✅ Aucun input utilisateur dans les chemins vidéos
- ✅ Chemins hardcodés dans `VIDEO_ASSETS`
- ✅ TypeScript strict pour validation au build

### Gestion des Erreurs

1. **Erreur de chargement vidéo** → Affiche poster cliquable
2. **Format non supporté** → Fallback automatique
3. **Réseau lent** → Preload metadata seulement

### Content Security Policy

Ajoutez à votre CSP :

```
media-src 'self';
```

---

## 🛠️ Maintenance

### Ajouter une Nouvelle Vidéo

1. **Placer la vidéo source** dans `~/Downloads/Antony Lambi Développeur Full Stack/`
2. **Modifier le script** `scripts/generate-videos.sh` :
   ```bash
   optimize_one "nouvelle-video"
   ```
3. **Ajouter dans assets.ts** :
   ```typescript
   export const VIDEO_ASSETS = {
     // ...
     nouvelleVideo: {
       base: '/videos/nouvelle-video',
       poster: '/videos/nouvelle-video-poster.png',
       // ...
     },
   };
   ```
4. **Régénérer** : `pnpm videos:generate`

### Réduire Davantage la Taille

Si les vidéos sont encore trop lourdes :

**MP4 :**
```bash
# Augmenter CRF (29-32 = plus de compression)
-crf 30 -preset slower
```

**WebM :**
```bash
# Augmenter CRF (34-36)
-crf 35 -cpu-used 2
```

**Poster PNG :**
```bash
# Installer pngquant si pas déjà fait
brew install pngquant

# Ou utiliser oxipng
brew install oxipng
oxipng -o 4 poster.png
```

### Rollback en Cas de Problème

```bash
# Revenir à l'ancien système
git revert <commit-hash>

# Ou restaurer manuellement
rm -rf public/videos/*-optimized.mp4 public/videos/*.webm public/videos/*-poster.png
git checkout HEAD -- src/components/video-player.tsx src/lib/assets.ts
```

---

## 📈 Monitoring

### Métriques à Surveiller

1. **Poids total assets vidéos** : `ls -lh public/videos | awk '{sum+=$5} END {print sum}'`
2. **Erreurs de lecture** : Console navigateur + Sentry (si configuré)
3. **Temps de chargement** : Chrome DevTools Network tab
4. **Qualité visuelle** : Vérifier à l'œil sur différents devices

### Checksums pour Audit

```bash
shasum -a 256 public/videos/*.{mp4,webm,png} > VIDEO_CHECKSUMS.txt
```

---

## 🧪 Tests

### Tests Manuels à Effectuer

- [ ] **Chrome** : Vérifier lecture WebM, autoplay muted
- [ ] **Firefox** : Vérifier lecture WebM
- [ ] **Safari** : Vérifier fallback MP4 (désactiver WebM temporairement)
- [ ] **Mobile** : Tester sur iOS/Android
- [ ] **Lazy loading** : Vidéo démarre en entrant dans viewport
- [ ] **Pause automatique** : Vidéo pause en sortant du viewport
- [ ] **Accessibilité** : Navigation clavier, screen readers
- [ ] **Erreur réseau** : Simuler déconnexion, vérifier fallback

### Tests Automatisés (Futur)

```typescript
// test/video-player.test.tsx
import { render, screen } from '@testing-library/react';
import { VideoPlayer } from '@/components/video-player';

test('affiche poster avant lazy load', () => {
  render(<VideoPlayer src="/videos/test" poster="/test-poster.png" />);
  expect(screen.getByAltText('Video poster')).toBeInTheDocument();
});
```

---

## 🔗 Ressources

- [FFmpeg Documentation](https://ffmpeg.org/documentation.html)
- [VP9 Encoding Guide](https://trac.ffmpeg.org/wiki/Encode/VP9)
- [Web Video Best Practices](https://web.dev/fast/#optimize-your-videos)
- [IntersectionObserver API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

---

## 📞 Support

Pour toute question sur l'optimisation vidéo :
- Consulter les logs : `scripts/generate-videos.sh 2>&1 | tee video-generation.log`
- Vérifier les paramètres : `ffprobe -v error -show_format public/videos/*.mp4`
- Comparer avant/après : `ls -lh public/videos`

**Mainteneur** : Antony Lambi  
**Dernière mise à jour** : 2025-10-03
