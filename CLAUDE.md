# PayRelance — contexte pour Claude Code

## Le projet en bref
**PayRelance** est un SaaS B2B d'automatisation des relances de factures impayées, pensé pour les indépendants/freelances (cible principale, persona : *Julien, 32 ans, graphiste freelance*) puis TPE/PME/agences. Il s'agit d'un **projet d'école** (cours « Traffic de vente », M2) présenté à un professeur : l'objectif est une **plateforme (dashboard) qui donne l'impression de fonctionner vraiment**, pas un site vitrine.

- Application **front-end en un seul fichier** : `index.html` (HTML + CSS + JS vanilla, aucune dépendance, aucun build).
- Interface en **français**. Code et identifiants en anglais/français mélangés (l'existant fait foi).
- Spec produit d'origine : `docs/brief/SaaS.pdf` (texte : `docs/SPEC_PayRelance.md`).
- Retours du professeur (contraintes à respecter) : `docs/PROFESSOR_FEEDBACK.md`.
- Feuille de route : `docs/ROADMAP.md`.

## Règles de périmètre — à NE PAS enfreindre sans demande explicite
1. **V1 = deux canaux seulement : e-mail et WhatsApp.** Pas de SMS, pas de courrier recommandé, pas de transmission à un huissier/partenaire (ils sont listés « Prévu en V2 » sur la page Recouvrement). Décision du professeur pour la faisabilité technique.
2. **Les envois doivent être réels quand c'est possible** : e-mail via EmailJS (REST, depuis le navigateur), WhatsApp via liens `wa.me` (click-to-chat), paiement via une page de paiement intégrée. Le professeur doit pouvoir tester et recevoir un vrai e-mail.
3. **Jamais d'envoi réel vers des données fictives.** Les clients de démo ont des adresses en `.example` et des numéros `06 39 98 xx xx` ; `deliver()` les passe en envoi *simulé*. Ne jamais utiliser de vraies adresses/numéros dans les données de démo.
4. **Aucun secret dans le dépôt.** `PRESET` (en haut du script) doit rester vide dans le dépôt ; la clé publique EmailJS se saisit dans l'appli (Intégrations › E-mail) ou via un lien `#cfg=`.
5. **Validation manuelle par défaut** : aucune relance ne part sans approbation de l'utilisateur (retour du test utilisateur du PDF). Message de réassurance visible sur « À valider » et « Scénarios ».
6. **Honnêteté de l'UI** : ce qui est simulé doit être dit (connecteurs Pennylane/QuickBooks/…, envoi simulé, paiement de démo). Ne pas présenter du simulé comme réel.
7. Inscription minimale (pas de SIRET/adresse au départ) — retour du test utilisateur.

## Identité visuelle (reprise du PDF)
- Couleurs : bleu confiance `#1E3A8A` (marque), vert trésorerie `#10B981` (succès/CTA), corail `#F43F5E` (retards/urgence).
- Typo : *Plus Jakarta Sans* (titres) + *Inter* (texte), chargées via Google Fonts avec repli système.
- Ton : empathique, pédagogue, pragmatique. Jamais de vocabulaire anxiogène/agressif dans l'UI.
- Tokens CSS dans `:root` (clair) + `@media (prefers-color-scheme: dark)` + `:root[data-theme="dark"]` (sombre, réglable dans le menu du compte). Toute nouvelle couleur doit passer par un token et exister dans les deux thèmes.

## Lancer / tester
```bash
npm install                      # installe Playwright (dev)
npx playwright install chromium  # une fois
npm run dev                      # http://localhost:8765  (serveur statique sans dépendance)
npm test                         # 25 vérifications e2e (EmailJS moqué : aucun mail réel)
```
`CHROMIUM_PATH=/chemin/chrome npm test` pour utiliser un Chromium existant ; `HEADED=1` pour voir le navigateur.
Le fichier peut aussi s'ouvrir directement (`file://`), mais le lien de paiement envoyé dans un e-mail ne fonctionne alors que sur la machine locale : il faut **héberger** (Netlify Drop, GitHub Pages, etc.).

## Architecture de `index.html`
Tout le JS est dans une IIFE à la fin du fichier. Sections (repères `/* ---- ... ---- */`) :

| Zone | Contenu |
|---|---|
| CSS | tokens, kit UI (`.btn`, `.card`, `.badge`, `.grid`…), overlays (modal/drawer/toast), pages, media queries (≤1100 / ≤900 / ≤560 px) |
| Helpers | `esc`, `eur`, dates (jour virtuel `S.day` + `BASE`), icônes SVG (`P`, `ic()`), `LOGO` |
| Config envoi réel | `PRESET`, `CFG` (localStorage `payrelance-config`), `emailjsSend`, `normPhone`, `waUrl`, détection de données fictives |
| `seed()` | état initial de démo (factures, clients, scénarios) — tout est **en mémoire**, rien n'est persisté sauf thème et config |
| Domain helpers | plans/limites, `payLink`, gabarits de messages (`TPL`, `fill`, `buildMessage`, `previewHTML`) |
| Moteur | `runEngine()` (une relance à la fois, étapes séquentielles, ≥3 jours entre deux envois), `deliver()`, `sendReminder()`, `markPaid()` |
| Vues | `vDashboard`, `vFactures`, `vRelances` (scénarios), `vValidation`, `vClients`, `vRecouvrement`, `vIntegrations`, `vParrainage`, `vAbonnement` → table `VIEWS` |
| Overlays | `openModal`, `openDrawer` (détail facture), compose, mise en demeure, import CSV, connexion intégration, checkout, profil, visite guidée |
| Actions | objet `A` : toutes les interactions, déclenchées par **délégation d'événements** sur `[data-a]` ; saisies via `[data-i]` (objet `I`), `change` via `[data-c]` (objet `C`) |
| Routage | `#/pay?n=&m=&c=&f=` → page de paiement client (rendue seule) ; `#cfg=` → import de config d'envoi ; sinon la plateforme |

### Conventions
- **Ajouter une interaction** : mettre `data-a="mon-action"` sur l'élément, puis `A['mon-action'] = (el, event) => {…}` ; finir par `render()` (et `refreshDrawer()` si le tiroir est ouvert). Les actions asynchrones (envoi) sont `async` et gèrent leurs erreurs.
- **Ajouter une vue** : fonction `vXxx()` retournant du HTML, entrée dans `VIEWS` et dans `NAV`.
- **Toujours échapper** les données utilisateur injectées dans le HTML avec `esc()`.
- Le rendu est « tout re-render » (`render()`), sauf le tableau des factures (`#invtable`) pour garder le focus de la recherche.
- Les montants passent par `eur()`, les dates par `fmtD/fmtDL/fmtDM`.
- `window.__PR = { S, A }` est exposé **pour les tests** : ne pas le retirer.

### Modèle d'état (`S`)
`day` (jour virtuel, « +1 jour (démo) »), `invoices[]` (`status`: upcoming/overdue/paid ; `reminders[]` avec `status`: queued → ready (WhatsApp approuvé) → sent / skipped / cancelled ; `mode`: real/sim/wa ; `events[]` pour l'historique), `clients[]`, `scenarios[]` (étapes `{delay, channel, tone, on, custom}`), `plan` (trial/solo/pro/enterprise), `manualValidation`, `flags` (checklist « Premiers pas »).

### Flux d'envoi (`deliver`)
- **E-mail** : si EmailJS est configuré **et** que l'adresse n'est pas fictive → `emailjsSend()` (POST `https://api.emailjs.com/api/v1.0/email/send`, `service_id`/`template_id`/`user_id`=clé publique, `template_params`: `to_email, to_name, from_name, reply_to, subject, message, message_html, invoice_number, amount, pay_link`). Limite 1 requête/s → la fonction espace les envois. Sinon → envoi simulé (clairement signalé).
- **WhatsApp** : pas d'API. La relance passe en `ready`, et l'utilisateur clique sur un vrai lien `<a href="https://wa.me/<n>?text=…" target="_blank">` (robuste face aux bloqueurs de popups) ; le clic marque l'envoi.
- **Paiement** : `payLink(i)` = `<URL de la plateforme>#/pay?...`. La page de paiement (démo, aucun débit) notifie la plateforme via `BroadcastChannel('payrelance')` + `localStorage` (`payrelance-paid`) → `onPaid()` → `markPaid()`. Fonctionne dans le même navigateur/origine uniquement (pas de backend).

## Limites connues (volontaires pour la V1)
Pas de backend ni de base de données ; état en mémoire (un rechargement remet la démo à zéro) ; WhatsApp = click-to-chat (pas d'envoi automatique ni d'accusés) ; connecteurs de logiciels de facturation simulés (l'import CSV et la saisie manuelle sont réels) ; paiement de démonstration ; pas d'authentification.

## Avant de livrer une modification
1. `npm test` doit rester vert (ajouter un test dans `tests/e2e.cjs` pour tout nouveau flux d'envoi ou règle de périmètre).
2. Vérifier clair/sombre et mobile 390 px (pas de défilement horizontal — le test le contrôle).
3. Aucune mention de SMS/recommandé hors de la page « Prévu en V2 » (le test le contrôle).
4. Si une donnée de démo est ajoutée : adresses `.example`, numéros `06 39 98 xx xx`.
