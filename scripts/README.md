# 🚀 Scripts de Déploiement Automatisé

Ce dossier contient des scripts pour automatiser le setup et le déploiement de votre portfolio Next.js vers Cloudflare Pages.

## 📋 Scripts Disponibles

### `setup-deployment.sh` - Setup Complet Automatisé

Script interactif qui vous guide à travers toutes les étapes de configuration et déploiement.

#### 🎯 Fonctionnalités

1. **Vérification des Prérequis**
   - Node.js, pnpm, git, gh CLI
   - Authentification GitHub
   - Wrangler CLI (optionnel)

2. **Configuration des Secrets GitHub**
   - Guide pour créer Cloudflare API Token
   - Récupération Account ID
   - Ajout automatique des secrets au repository

3. **Création du Projet Cloudflare Pages**
   - Méthode Dashboard (recommandé)
   - Méthode Wrangler CLI (automatique)

4. **Configuration du Domaine**
   - Guide pour lier antonylambi.be
   - Configuration DNS et SSL/TLS

5. **Tests Locaux**
   - Installation dépendances
   - Lint + Typecheck
   - Build de production
   - Preview local

6. **Déploiement Automatique**
   - Commit et push vers GitHub
   - Trigger GitHub Actions
   - Suivi du déploiement

7. **Vérifications Post-Déploiement**
   - Tests fonctionnels
   - Tests SEO
   - Tests sécurité

8. **Google Search Console** (Optionnel)
   - Guide de configuration
   - Soumission sitemap

9. **Analytics** (Optionnel)
   - Google Analytics 4
   - Cloudflare Web Analytics

## 🚀 Utilisation

### Prérequis

Avant de lancer le script, assurez-vous d'avoir installé :

```bash
# Node.js (v18+)
node -v

# pnpm
npm install -g pnpm

# GitHub CLI
brew install gh
gh auth login

# Wrangler (optionnel)
pnpm add -g wrangler
```

### Lancer le Script

```bash
cd /Users/devtehen/projects/antonylambi-portfolio

# Rendre le script exécutable (déjà fait)
chmod +x scripts/setup-deployment.sh

# Lancer le script
./scripts/setup-deployment.sh
```

## 📖 Mode d'Emploi

### Étape 1 : Préparation

Avant de lancer le script, ayez sous la main :
- Votre compte Cloudflare (avec domaine antonylambi.be configuré)
- Accès au Dashboard Cloudflare
- Accès à votre GitHub

### Étape 2 : Exécution Interactive

Le script vous guidera avec des **prompts interactifs** :

```
═══════════════════════════════════════════════════════════
  🚀 Setup Automatisé - Portfolio Next.js
═══════════════════════════════════════════════════════════

Ce script va vous guider à travers:
  1. 🔐 Configuration des secrets GitHub
  2. ☁️ Création du projet Cloudflare Pages
  3. 🌐 Liaison du domaine antonylambi.be
  4. 🧪 Tests locaux
  5. 🚀 Déploiement automatique
  6. ✅ Vérifications post-déploiement
  7. 📊 Google Search Console (optionnel)
  8. 📈 Analytics (optionnel)

Voulez-vous continuer? [Y/n]:
```

### Étape 3 : Suivre les Instructions

Le script affichera des **instructions claires** pour chaque étape :

- 🟢 Messages de succès en **vert**
- 🔵 Informations en **bleu**
- 🟡 Avertissements en **jaune**
- 🔴 Erreurs en **rouge**

### Étape 4 : Vérification

À la fin, le script génère un **rapport complet** :

```
🎉 Setup Terminé!

═══════════════════════════════════════════════════════════
  Votre portfolio est maintenant configuré et déployé!
═══════════════════════════════════════════════════════════

📍 URLs Importantes:
  • Site Production: https://antonylambi.be
  • GitHub Actions: https://github.com/Tehen1/antonylambi-portfolio/actions
  • Cloudflare Pages: https://dash.cloudflare.com/pages

✅ Tous les systèmes sont opérationnels! 🚀
```

## 🔄 Workflow après Setup Initial

Une fois le setup initial terminé, le workflow de développement devient simple :

```bash
# 1. Développer localement
pnpm dev

# 2. Tester
pnpm build

# 3. Commit et Push
git add .
git commit -m "feat: Nouvelle fonctionnalité"
git push origin main

# 4. Déploiement automatique via GitHub Actions ✨
```

## 🆘 Troubleshooting

### Le script échoue sur `gh` command

```bash
# Installez GitHub CLI
brew install gh

# Authentifiez-vous
gh auth login
```

### Permission denied

```bash
# Rendre le script exécutable
chmod +x scripts/setup-deployment.sh
```

### Build échoue

```bash
# Testez le build manuellement
cd /Users/devtehen/projects/antonylambi-portfolio
pnpm install
pnpm build

# Vérifiez les erreurs dans l'output
```

### Secrets GitHub non ajoutés

```bash
# Ajout manuel via gh CLI
echo "YOUR_TOKEN" | gh secret set CLOUDFLARE_API_TOKEN
echo "YOUR_ACCOUNT_ID" | gh secret set CLOUDFLARE_ACCOUNT_ID

# Ou via GitHub UI
# https://github.com/Tehen1/antonylambi-portfolio/settings/secrets/actions
```

## 🔒 Sécurité

### Secrets Sauvegardés

Le script sauvegarde vos secrets localement dans `.secrets/cloudflare.env`.

**⚠️ IMPORTANT** : Ce fichier est dans `.gitignore` et ne sera JAMAIS commité.

Pour plus de sécurité :

```bash
# Supprimer les secrets locaux après usage
rm -rf .secrets/

# Ou chiffrer le fichier
gpg -c .secrets/cloudflare.env
```

## 📚 Ressources Complémentaires

- **NEXT_STEPS.md** - Guide manuel détaillé
- **DEPLOYMENT.md** - Documentation technique
- **SECRETS_SETUP.md** - Guide spécifique aux secrets
- **README.md** - Documentation projet complète

## 🎨 Personnalisation

### Modifier le Script

Le script est modulaire avec des fonctions claires :

```bash
# Exemple : Ajouter une étape personnalisée
custom_step() {
    print_header "Ma Nouvelle Étape"
    
    if confirm "Exécuter cette étape?"; then
        # Votre code ici
        print_success "Étape terminée!"
    fi
}

# Ajouter dans main_menu()
custom_step
```

### Désactiver des Étapes

Commentez les lignes dans `main_menu()` :

```bash
# Exemple : Désactiver Google Search Console
# setup_google_search_console
```

## 📞 Support

Pour toute question ou problème :

1. Consultez **NEXT_STEPS.md** pour le guide complet
2. Vérifiez les logs GitHub Actions
3. Consultez le Dashboard Cloudflare
4. Ouvrez une issue GitHub

## 🎉 Félicitations !

Avec ce script, votre portfolio Next.js sera déployé en production en **moins de 10 minutes** ! 🚀

---

**Créé avec ❤️ pour un workflow de déploiement optimal**
