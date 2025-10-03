# 🔐 Configuration Rapide des Secrets GitHub

## Étape 1 : Obtenir les Credentials Cloudflare

### 1.1 API Token
1. Allez sur https://dash.cloudflare.com/profile/api-tokens
2. Cliquez sur "Create Token"
3. Utilisez le template "Edit Cloudflare Workers" OU créez un custom token avec :
   - **Permissions** : `Account` → `Cloudflare Pages` → `Edit`
4. Cliquez sur "Create Token" et **COPIEZ LE TOKEN**

### 1.2 Account ID
1. Allez sur https://dash.cloudflare.com/
2. Sélectionnez votre domaine **antonylambi.be**
3. Dans la sidebar droite, faites défiler et **copiez l'Account ID**

---

## Étape 2 : Ajouter les Secrets sur GitHub

1. **Ouvrez** : https://github.com/Tehen1/antonylambi-portfolio/settings/secrets/actions

2. **Cliquez sur** "New repository secret"

3. **Ajoutez Secret 1** :
   ```
   Name: CLOUDFLARE_API_TOKEN
   Secret: [Collez votre API Token Cloudflare]
   ```
   Cliquez sur "Add secret"

4. **Ajoutez Secret 2** :
   ```
   Name: CLOUDFLARE_ACCOUNT_ID
   Secret: [Collez votre Account ID Cloudflare]
   ```
   Cliquez sur "Add secret"

---

## ✅ Vérification

Une fois les secrets ajoutés, vous devriez voir :
- ✅ CLOUDFLARE_API_TOKEN
- ✅ CLOUDFLARE_ACCOUNT_ID

Dans la liste des secrets à : https://github.com/Tehen1/antonylambi-portfolio/settings/secrets/actions

---

## 🎬 Prochaine Étape

Après avoir ajouté les secrets, suivez le guide **DEPLOYMENT.md** pour :
1. Créer le projet Cloudflare Pages
2. Lier le domaine antonylambi.be
3. Déclencher le premier déploiement

**Commande pour déclencher un nouveau build** :
```bash
git commit --allow-empty -m "chore: Trigger first deployment"
git push origin main
```

Cela lancera automatiquement GitHub Actions → Cloudflare Pages ! 🚀
