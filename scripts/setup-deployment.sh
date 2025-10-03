#!/bin/bash

# ============================================================================
# Script de Setup et Déploiement Automatisé
# Portfolio Next.js → Cloudflare Pages
# ============================================================================

set -e  # Exit on error

# Couleurs pour l'output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
MAGENTA='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Emojis
CHECK="✅"
CROSS="❌"
ROCKET="🚀"
LOCK="🔐"
CLOUD="☁️"
GLOBE="🌐"
WARN="⚠️"
INFO="ℹ️"

# ============================================================================
# Fonctions Utilitaires
# ============================================================================

print_header() {
    echo ""
    echo -e "${CYAN}═══════════════════════════════════════════════════════════${NC}"
    echo -e "${MAGENTA}  $1${NC}"
    echo -e "${CYAN}═══════════════════════════════════════════════════════════${NC}"
    echo ""
}

print_success() {
    echo -e "${GREEN}${CHECK} $1${NC}"
}

print_error() {
    echo -e "${RED}${CROSS} $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}${WARN} $1${NC}"
}

print_info() {
    echo -e "${BLUE}${INFO} $1${NC}"
}

print_step() {
    echo ""
    echo -e "${CYAN}▶ $1${NC}"
    echo ""
}

confirm() {
    local prompt="$1"
    local default="${2:-n}"
    
    if [[ "$default" == "y" ]]; then
        prompt="$prompt [Y/n]: "
    else
        prompt="$prompt [y/N]: "
    fi
    
    while true; do
        read -p "$(echo -e ${YELLOW}${prompt}${NC})" yn
        yn=${yn:-$default}
        case $yn in
            [Yy]* ) return 0;;
            [Nn]* ) return 1;;
            * ) echo "Répondez par 'y' (oui) ou 'n' (non).";;
        esac
    done
}

check_command() {
    if ! command -v "$1" &> /dev/null; then
        print_error "$1 n'est pas installé"
        return 1
    fi
    print_success "$1 installé"
    return 0
}

# ============================================================================
# Vérifications Préalables
# ============================================================================

check_prerequisites() {
    print_header "Vérification des Prérequis"
    
    local all_good=true
    
    # Check Node.js
    if check_command "node"; then
        NODE_VERSION=$(node -v)
        print_info "Version Node.js: $NODE_VERSION"
    else
        all_good=false
    fi
    
    # Check pnpm
    if check_command "pnpm"; then
        PNPM_VERSION=$(pnpm -v)
        print_info "Version pnpm: $PNPM_VERSION"
    else
        all_good=false
        print_warning "Installez pnpm avec: npm install -g pnpm"
    fi
    
    # Check git
    if check_command "git"; then
        GIT_VERSION=$(git --version)
        print_info "$GIT_VERSION"
    else
        all_good=false
    fi
    
    # Check gh CLI
    if check_command "gh"; then
        GH_VERSION=$(gh --version | head -n 1)
        print_info "$GH_VERSION"
        
        # Vérifier authentification
        if gh auth status &> /dev/null; then
            print_success "GitHub CLI authentifié"
        else
            print_warning "GitHub CLI non authentifié"
            if confirm "Voulez-vous vous authentifier maintenant?"; then
                gh auth login
            fi
        fi
    else
        all_good=false
        print_warning "Installez gh CLI: brew install gh"
    fi
    
    # Check wrangler (optionnel)
    if check_command "wrangler"; then
        print_success "Wrangler CLI installé (optionnel)"
    else
        print_info "Wrangler CLI non installé (optionnel - pour méthode alternative)"
    fi
    
    if [ "$all_good" = false ]; then
        print_error "Certains prérequis sont manquants. Installez-les et relancez le script."
        exit 1
    fi
    
    print_success "Tous les prérequis sont satisfaits"
}

# ============================================================================
# Configuration des Secrets GitHub
# ============================================================================

setup_github_secrets() {
    print_header "${LOCK} Configuration des Secrets GitHub"
    
    print_info "Vous devez créer un Cloudflare API Token et récupérer votre Account ID"
    echo ""
    
    # Guide Token API
    print_step "1. Créer un Cloudflare API Token"
    echo "   1. Ouvrez: https://dash.cloudflare.com/profile/api-tokens"
    echo "   2. Cliquez sur 'Create Token'"
    echo "   3. Utilisez le template 'Edit Cloudflare Workers'"
    echo "   4. Permissions: Account > Cloudflare Pages > Edit"
    echo "   5. Copiez le token généré"
    echo ""
    
    if confirm "Avez-vous créé le token?"; then
        read -p "$(echo -e ${CYAN}Collez votre Cloudflare API Token: ${NC})" CLOUDFLARE_API_TOKEN
        
        if [ -z "$CLOUDFLARE_API_TOKEN" ]; then
            print_error "Token vide. Annulation."
            return 1
        fi
        
        print_success "Token sauvegardé"
    else
        print_warning "Setup interrompu. Relancez le script quand vous aurez le token."
        exit 0
    fi
    
    # Guide Account ID
    echo ""
    print_step "2. Récupérer votre Cloudflare Account ID"
    echo "   1. Ouvrez: https://dash.cloudflare.com/"
    echo "   2. Sélectionnez votre domaine 'antonylambi.be'"
    echo "   3. Sidebar droite > Copiez l'Account ID"
    echo ""
    
    read -p "$(echo -e ${CYAN}Collez votre Cloudflare Account ID: ${NC})" CLOUDFLARE_ACCOUNT_ID
    
    if [ -z "$CLOUDFLARE_ACCOUNT_ID" ]; then
        print_error "Account ID vide. Annulation."
        return 1
    fi
    
    print_success "Account ID sauvegardé"
    
    # Ajouter les secrets à GitHub
    echo ""
    print_step "3. Ajout des secrets au repository GitHub"
    
    # Get repo info
    REPO_FULL=$(gh repo view --json nameWithOwner -q .nameWithOwner 2>/dev/null || echo "Tehen1/antonylambi-portfolio")
    
    print_info "Repository: $REPO_FULL"
    
    if confirm "Ajouter les secrets maintenant?"; then
        # Set CLOUDFLARE_API_TOKEN
        echo "$CLOUDFLARE_API_TOKEN" | gh secret set CLOUDFLARE_API_TOKEN --repo="$REPO_FULL"
        if [ $? -eq 0 ]; then
            print_success "Secret CLOUDFLARE_API_TOKEN ajouté"
        else
            print_error "Erreur lors de l'ajout de CLOUDFLARE_API_TOKEN"
            return 1
        fi
        
        # Set CLOUDFLARE_ACCOUNT_ID
        echo "$CLOUDFLARE_ACCOUNT_ID" | gh secret set CLOUDFLARE_ACCOUNT_ID --repo="$REPO_FULL"
        if [ $? -eq 0 ]; then
            print_success "Secret CLOUDFLARE_ACCOUNT_ID ajouté"
        else
            print_error "Erreur lors de l'ajout de CLOUDFLARE_ACCOUNT_ID"
            return 1
        fi
        
        print_success "Tous les secrets GitHub sont configurés!"
        
        # Sauvegarder localement (chiffré)
        mkdir -p .secrets
        cat > .secrets/cloudflare.env << EOF
# Secrets Cloudflare - NE PAS COMMITER
CLOUDFLARE_API_TOKEN=$CLOUDFLARE_API_TOKEN
CLOUDFLARE_ACCOUNT_ID=$CLOUDFLARE_ACCOUNT_ID
EOF
        print_info "Secrets sauvegardés localement dans .secrets/cloudflare.env"
        
    else
        print_warning "Secrets non ajoutés. Vous devrez les ajouter manuellement."
    fi
}

# ============================================================================
# Création du Projet Cloudflare Pages
# ============================================================================

create_cloudflare_project() {
    print_header "${CLOUD} Création du Projet Cloudflare Pages"
    
    echo "Deux méthodes disponibles:"
    echo "  A) Via Dashboard Cloudflare (recommandé - interface graphique)"
    echo "  B) Via Wrangler CLI (automatique mais nécessite wrangler)"
    echo ""
    
    read -p "$(echo -e ${CYAN}Choisissez [A/B]: ${NC})" method
    
    case $method in
        [Aa]* )
            print_step "Création via Dashboard"
            echo ""
            echo "1. Ouvrez: https://dash.cloudflare.com/pages"
            echo "2. Cliquez sur 'Create a project'"
            echo "3. Sélectionnez 'Connect to Git' → 'GitHub'"
            echo "4. Autorisez Cloudflare à accéder à votre GitHub"
            echo "5. Sélectionnez: Tehen1/antonylambi-portfolio"
            echo ""
            echo "6. Configuration Build:"
            echo "   - Project name: antonylambi-portfolio"
            echo "   - Production branch: main"
            echo "   - Build command: [LAISSER VIDE]"
            echo "   - Build output directory: [LAISSER VIDE]"
            echo ""
            echo "   ${WARN} GitHub Actions s'occupe du build automatiquement!"
            echo ""
            echo "7. Variables d'environnement (optionnel):"
            echo "   - NEXT_PUBLIC_SITE_URL=https://antonylambi.be"
            echo "   - NEXT_PUBLIC_CONTACT_EMAIL=contact@antonylambi.be"
            echo ""
            echo "8. Cliquez sur 'Save and Deploy'"
            echo ""
            
            if confirm "Avez-vous créé le projet?"; then
                print_success "Projet Cloudflare Pages créé!"
                return 0
            else
                print_warning "Créez le projet et relancez le script."
                return 1
            fi
            ;;
            
        [Bb]* )
            if ! command -v wrangler &> /dev/null; then
                print_error "Wrangler n'est pas installé"
                print_info "Installez avec: pnpm add -g wrangler"
                return 1
            fi
            
            print_step "Création via Wrangler CLI"
            
            # Login
            print_info "Authentification Cloudflare..."
            wrangler login
            
            # Create project
            PROJECT_NAME="antonylambi-portfolio"
            print_info "Création du projet: $PROJECT_NAME"
            
            wrangler pages project create "$PROJECT_NAME" --production-branch=main
            
            if [ $? -eq 0 ]; then
                print_success "Projet créé avec succès!"
            else
                print_error "Erreur lors de la création du projet"
                return 1
            fi
            ;;
            
        * )
            print_error "Choix invalide"
            return 1
            ;
    esac
}

# ============================================================================
# Configuration du Domaine
# ============================================================================

setup_custom_domain() {
    print_header "${GLOBE} Configuration du Domaine antonylambi.be"
    
    echo "Pour lier votre domaine personnalisé:"
    echo ""
    echo "1. Ouvrez: https://dash.cloudflare.com/pages"
    echo "2. Sélectionnez votre projet: antonylambi-portfolio"
    echo "3. Onglet 'Custom domains'"
    echo "4. Cliquez sur 'Set up a custom domain'"
    echo "5. Entrez: antonylambi.be"
    echo "6. Cloudflare configurera automatiquement le CNAME"
    echo ""
    echo "7. (Optionnel) Ajoutez aussi: www.antonylambi.be"
    echo ""
    echo "Vérifications DNS recommandées:"
    echo "  - SSL/TLS Mode: Full (strict)"
    echo "  - Always Use HTTPS: Activé"
    echo "  - Auto Minify: CSS, JavaScript, HTML"
    echo ""
    
    if confirm "Avez-vous configuré le domaine?"; then
        print_success "Domaine configuré!"
        
        print_info "Vérification de la propagation DNS..."
        echo "  Cela peut prendre jusqu'à 24h max (généralement 5-10 min)"
        echo "  Vérifiez sur: https://dnschecker.org/#A/antonylambi.be"
        
        return 0
    else
        print_warning "Configurez le domaine quand vous serez prêt."
        return 1
    fi
}

# ============================================================================
# Build et Tests Locaux
# ============================================================================

test_local_build() {
    print_header "🧪 Tests Locaux"
    
    if confirm "Voulez-vous tester le build localement avant déploiement?" "y"; then
        print_step "Installation des dépendances"
        pnpm install
        
        print_step "Lint du code"
        pnpm lint
        
        print_step "Vérification TypeScript"
        pnpm typecheck
        
        print_step "Build de production"
        pnpm build
        
        if [ $? -eq 0 ]; then
            print_success "Build local réussi!"
            
            if confirm "Voulez-vous prévisualiser le site localement?"; then
                print_info "Lancement du serveur de prévisualisation..."
                print_info "Ouvrez: http://localhost:3000"
                print_info "Appuyez sur Ctrl+C pour arrêter"
                pnpm start
            fi
        else
            print_error "Build échoué. Corrigez les erreurs avant de continuer."
            return 1
        fi
    fi
}

# ============================================================================
# Déploiement
# ============================================================================

trigger_deployment() {
    print_header "${ROCKET} Déclenchement du Déploiement"
    
    print_info "Le déploiement sera automatique via GitHub Actions"
    echo ""
    echo "Workflow:"
    echo "  1. Checkout du code"
    echo "  2. Installation des dépendances"
    echo "  3. Lint + Typecheck"
    echo "  4. Build Next.js SSG"
    echo "  5. Déploiement vers Cloudflare Pages"
    echo ""
    
    if confirm "Déclencher le déploiement maintenant?" "y"; then
        print_step "Commit et push du trigger"
        
        # Vérifier s'il y a des changements non commités
        if [[ -n $(git status -s) ]]; then
            print_info "Changements détectés. Commit en cours..."
            git add .
            git commit -m "chore: Trigger automated deployment setup 🚀"
        else
            print_info "Aucun changement. Création d'un commit vide..."
            git commit --allow-empty -m "chore: Trigger first Cloudflare Pages deployment 🚀"
        fi
        
        # Push
        print_info "Push vers GitHub..."
        git push origin main
        
        if [ $? -eq 0 ]; then
            print_success "Déploiement déclenché!"
            echo ""
            print_info "Suivez le déploiement:"
            echo "  - GitHub Actions: https://github.com/Tehen1/antonylambi-portfolio/actions"
            echo "  - Cloudflare Pages: https://dash.cloudflare.com/pages"
            echo ""
            print_info "Durée estimée: 2-3 minutes"
            echo ""
            
            if confirm "Ouvrir GitHub Actions dans le navigateur?"; then
                open "https://github.com/Tehen1/antonylambi-portfolio/actions" 2>/dev/null || \
                xdg-open "https://github.com/Tehen1/antonylambi-portfolio/actions" 2>/dev/null || \
                print_info "Ouvrez manuellement: https://github.com/Tehen1/antonylambi-portfolio/actions"
            fi
        else
            print_error "Erreur lors du push"
            return 1
        fi
    fi
}

# ============================================================================
# Vérifications Post-Déploiement
# ============================================================================

post_deployment_checks() {
    print_header "✅ Vérifications Post-Déploiement"
    
    echo "Une fois le déploiement terminé, vérifiez:"
    echo ""
    echo "${CHECK} Tests Fonctionnels:"
    echo "  □ Site accessible sur https://antonylambi.be"
    echo "  □ HTTPS actif (cadenas vert)"
    echo "  □ Navigation fonctionne"
    echo "  □ ThemeSwitcher: 4 thèmes (Classic, Cyberpunk, Matrix, Neon)"
    echo "  □ Responsive mobile"
    echo ""
    echo "${CHECK} Tests SEO:"
    echo "  □ https://antonylambi.be/sitemap.xml"
    echo "  □ https://antonylambi.be/robots.txt"
    echo "  □ PageSpeed Insights: https://pagespeed.web.dev/"
    echo "  □ Rich Results: https://search.google.com/test/rich-results"
    echo ""
    echo "${CHECK} Tests Sécurité:"
    echo "  □ Security Headers: https://securityheaders.com/"
    echo "  □ SSL Labs: https://www.ssllabs.com/ssltest/"
    echo ""
    
    if confirm "Ouvrir les outils de test dans le navigateur?"; then
        open "https://antonylambi.be" 2>/dev/null
        open "https://pagespeed.web.dev/" 2>/dev/null
        open "https://securityheaders.com/" 2>/dev/null
    fi
    
    echo ""
    print_info "Documentation complète: NEXT_STEPS.md"
}

# ============================================================================
# Google Search Console Setup
# ============================================================================

setup_google_search_console() {
    print_header "📊 Google Search Console (Optionnel)"
    
    if confirm "Voulez-vous configurer Google Search Console?"; then
        echo ""
        echo "1. Allez sur: https://search.google.com/search-console"
        echo "2. Ajoutez la propriété: antonylambi.be"
        echo "3. Vérifiez via DNS TXT ou fichier HTML"
        echo "4. Soumettez le sitemap: https://antonylambi.be/sitemap.xml"
        echo "5. Demandez l'indexation de la page d'accueil"
        echo ""
        
        if confirm "Ouvrir Google Search Console?"; then
            open "https://search.google.com/search-console" 2>/dev/null
        fi
    fi
}

# ============================================================================
# Setup Analytics
# ============================================================================

setup_analytics() {
    print_header "📈 Configuration Analytics (Optionnel)"
    
    echo "Options disponibles:"
    echo "  1. Google Analytics 4"
    echo "  2. Cloudflare Web Analytics"
    echo "  3. Les deux"
    echo "  4. Passer"
    echo ""
    
    read -p "$(echo -e ${CYAN}Votre choix [1-4]: ${NC})" analytics_choice
    
    if [[ "$analytics_choice" == "1" || "$analytics_choice" == "3" ]]; then
        echo ""
        print_step "Google Analytics 4"
        echo "1. Créez une propriété: https://analytics.google.com/"
        echo "2. Récupérez le Measurement ID (format: G-XXXXXXXXXX)"
        echo ""
        read -p "$(echo -e ${CYAN}Entrez votre GA4 ID (ou laissez vide): ${NC})" GA_ID
        
        if [ -n "$GA_ID" ]; then
            echo "$GA_ID" | gh secret set NEXT_PUBLIC_GA_ID
            print_success "GA4 ID ajouté aux secrets GitHub"
            print_info "Rebuild nécessaire pour activer GA4"
        fi
    fi

    if [[ "$analytics_choice" == "2" || "$analytics_choice" == "3" ]]; then
        echo ""
        print_step "Cloudflare Web Analytics"
        echo "1. Dashboard → Analytics → Web Analytics"
        echo "2. Ajoutez: antonylambi.be"
        echo "3. Copiez le Site Tag token"
        echo ""
        read -p "$(echo -e ${CYAN}Entrez votre token Cloudflare Analytics (ou laissez vide): ${NC})" CF_ANALYTICS
        
        if [ -n "$CF_ANALYTICS" ]; then
            echo "$CF_ANALYTICS" | gh secret set NEXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN
            print_success "Token Cloudflare Analytics ajouté"
            print_info "Rebuild nécessaire pour activer les analytics"
        fi
    fi
    
    if [[ "$analytics_choice" != "1" && "$analytics_choice" != "2" && "$analytics_choice" != "3" && "$analytics_choice" != "4" ]]; then
        print_error "Choix invalide"
        return 1
    fi
}

# ============================================================================
# Rapport Final
# ============================================================================

final_report() {
    print_header "🎉 Setup Terminé!"
    
    echo ""
    echo -e "${GREEN}═══════════════════════════════════════════════════════════${NC}"
    echo -e "${GREEN}  Votre portfolio est maintenant configuré et déployé!${NC}"
    echo -e "${GREEN}═══════════════════════════════════════════════════════════${NC}"
    echo ""
    
    echo "📍 URLs Importantes:"
    echo "  • Site Production: https://antonylambi.be"
    echo "  • GitHub Repo: https://github.com/Tehen1/antonylambi-portfolio"
    echo "  • GitHub Actions: https://github.com/Tehen1/antonylambi-portfolio/actions"
    echo "  • Cloudflare Pages: https://dash.cloudflare.com/pages"
    echo ""
    
    echo "📚 Documentation:"
    echo "  • Guide complet: NEXT_STEPS.md"
    echo "  • Déploiement: DEPLOYMENT.md"
    echo "  • Secrets: SECRETS_SETUP.md"
    echo "  • README: README.md"
    echo ""
    
    echo "🔄 Workflow Futur:"
    echo "  1. Développez localement: pnpm dev"
    echo "  2. Testez: pnpm build"
    echo "  3. Commit & Push: git push origin main"
    echo "  4. Déploiement automatique via GitHub Actions"
    echo ""
    
    echo "🆘 Support:"
    echo "  • Logs GitHub Actions pour debug builds"
    echo "  • Cloudflare Dashboard pour status déploiements"
    echo "  • Documentation Next.js: https://nextjs.org/docs"
    echo ""
    
    print_success "Tous les systèmes sont opérationnels! 🚀"
}

# ============================================================================
# Menu Principal
# ============================================================================

main_menu() {
    print_header "${ROCKET} Setup Automatisé - Portfolio Next.js"
    
    echo "Ce script va vous guider à travers:"
    echo "  1. ${LOCK} Configuration des secrets GitHub"
    echo "  2. ${CLOUD} Création du projet Cloudflare Pages"
    echo "  3. ${GLOBE} Liaison du domaine antonylambi.be"
    echo "  4. 🧪 Tests locaux"
    echo "  5. ${ROCKET} Déploiement automatique"
    echo "  6. ✅ Vérifications post-déploiement"
    echo "  7. 📊 Google Search Console (optionnel)"
    echo "  8. 📈 Analytics (optionnel)"
    echo ""
    
    if ! confirm "Voulez-vous continuer?" "y"; then
        print_info "Setup annulé."
        exit 0
    fi
    
    # Vérifications
    check_prerequisites || exit 1
    
    # Secrets GitHub
    setup_github_secrets || exit 1
    
    # Projet Cloudflare
    create_cloudflare_project || exit 1
    
    # Domaine
    setup_custom_domain
    
    # Tests locaux
    test_local_build
    
    # Déploiement
    trigger_deployment || exit 1
    
    # Post-déploiement
    sleep 2
    post_deployment_checks
    
    # Google Search Console
    setup_google_search_console
    
    # Analytics
    setup_analytics
    
    # Rapport final
    final_report
}

# ============================================================================
# Point d'Entrée
# ============================================================================

clear
main_menu

exit 0
