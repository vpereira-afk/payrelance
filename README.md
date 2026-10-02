# PayRelance

Plateforme SaaS qui **détecte les factures impayées et relance vos clients à votre place** (e-mail + WhatsApp, avec lien de paiement), sans abîmer la relation client. Projet d'école « Traffic de vente » (M2) — **V1**.

> Application front-end en **un seul fichier** (`index.html`), sans dépendance ni build.

## Démarrer
```bash
npm run dev          # http://localhost:8765
```
ou ouvrir `index.html` dans un navigateur. Pour les tests : `npm install && npx playwright install chromium && npm test`.

## Ce que la V1 contient
- **Tableau de bord** : impayés, DSO, montant récupéré, encaissements par semaine, retards par ancienneté, « Premiers pas », récap hebdomadaire, activité.
- **Factures** : filtres, tri, recherche, détail avec historique et lien de paiement, import CSV, saisie manuelle.
- **Scénarios de relance** : étapes J+X (e-mail / WhatsApp, ton amical → ferme), aperçu en direct, texte personnalisable.
- **À valider** : chaque relance est relue puis approuvée avant envoi (« aucun message sans votre validation »).
- **Plugins** : e-mail réel (EmailJS), WhatsApp (click-to-chat), page de paiement client.
- **Mise en demeure par e-mail**, clients, parrainage, abonnement (Solo 19 € / Pro 49 € / Enterprise 119 €), clair/sombre, mobile.
- **« Recevoir une vraie relance »** : le testeur saisit son e-mail/WhatsApp et reçoit une vraie relance + un vrai lien de paiement.
- **« +1 jour (démo) »** : fait avancer le temps pour voir les relances se déclencher.

## Faire envoyer de vrais e-mails (≈ 10 min)
1. Compte gratuit sur **emailjs.com** → *Email Services* (Gmail/Outlook) → copier le **Service ID**.
2. *Email Templates* → nouveau modèle : `To email = {{to_email}}`, `Reply-to = {{reply_to}}`, `From name = {{from_name}}`, `Subject = {{subject}}`, contenu HTML fourni dans l'appli (Intégrations › E-mail › *Configurer*) → copier le **Template ID**.
3. *Account* → copier la **Public Key**.
4. **Héberger le fichier** (Netlify Drop : glisser-déposer le dossier ; ou GitHub Pages) pour que le lien de paiement fonctionne chez le destinataire.
5. Dans l'appli : Intégrations › E-mail → coller les 3 identifiants → **Tester l'envoi** → **Copier le lien de démo** (il contient la configuration : quiconque l'ouvre a l'envoi réel actif).

> Par sécurité, les clients fictifs de la démo (`.example`) ne reçoivent jamais de vrai message.

## Scénario de démonstration (5 min)
1. Dashboard → « Recevoir une vraie relance » (e-mail + WhatsApp du testeur) → **À valider** → *Approuver*.
2. Le testeur reçoit l'e-mail réel ; clic sur le lien → **page de paiement** → payer (démo).
3. Dans la plateforme, la facture passe en « payée » en direct (même navigateur) et la notification apparaît.
4. « +1 jour (démo) » pour montrer l'étape suivante du scénario ; mise en demeure par e-mail sur une facture en retard.

## Structure
```
index.html          l'application (HTML/CSS/JS)
CLAUDE.md           contexte, règles et architecture pour Claude Code
docs/               spec d'origine (PDF + texte), retours du professeur, feuille de route
tests/e2e.cjs       tests Playwright (EmailJS moqué)
scripts/serve.cjs   serveur statique sans dépendance
```
