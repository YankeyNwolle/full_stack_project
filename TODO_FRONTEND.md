# TODO LIST - FRONTEND BLOG APPLICATION

## 1. Créer layout EJS global
- [ ] `views/partials/header.ejs` (navbar)
- [ ] `views/partials/footer.ejs`
- [ ] `views/layout.ejs` (structure commune)

## 2. Pages principales
- [ ] `views/home.ejs` : liste des posts (cards)
- [ ] `views/post-detail.ejs` : affichage complet d'un post

## 3. Pages de gestion
- [ ] `views/create-post.ejs` : formulaire création
- [ ] `views/edit-post.ejs` : formulaire édition

## 4. Auth pages
- [ ] `views/login.ejs`
- [ ] `views/register.ejs`

## 5. Partials réutilisables
- [ ] `views/partials/post-card.ejs` (aperçu post)
- [ ] `views/partials/post-form.ejs` (formulaire create/edit)

## 6. Assets publics
- [ ] `public/styles/main.css` (votre CSS)
- [ ] Intégrer `bootstrap.min.css` si nécessaire
- [ ] `public/js/app.js` (helper client)

## 7. Client JS helpers
- [ ] `public/js/api.js` : fonctions fetch pour auth et posts
- [ ] Gestion token: `localStorage.setItem('token', token)`

## 8. Auth côté client
- [ ] Sauvegarder token après login
- [ ] Attacher `Authorization: Bearer <token>` aux requêtes protégées

## 9. Validation & UX
- [ ] Vérifier inputs côté client (non vide, longueur)
- [ ] Afficher messages d'erreur et confirmations

## 10. Intégration backend
- [ ] Connecter forms aux endpoints (`/api/auth`, `/api/posts`)
- [ ] Tester flows: register → login → create post → edit/delete

## 11. Comments (optionnel)
- [ ] UI pour ajouter / supprimer commentaires

## 12. Responsive & Styling
- [ ] Mobile-first, vérifier sur petit écran
- [ ] Utiliser Grid/Flexbox et classes Bootstrap

## 13. Testing & QA
- [ ] Tester manuellement tous les scénarios critiques
- [ ] Vérifier erreurs 401/403 pour routes protégées

## 14. Préparer déploiement frontend
- [ ] Optimiser assets
- [ ] Configurer variables d'env pour production

## 15. Documentation frontend
- [ ] `FRONTEND.md` : structure views, assets, helpers

---

**Status:** En cours de développement
**Date création:** 7 février 2026
