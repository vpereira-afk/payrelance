# Feuille de route

## V1 (livrée)
Canaux e-mail + WhatsApp ; validation manuelle ; scénarios J+X ; plugins (EmailJS, wa.me, page de paiement) ; mise en demeure par e-mail ; import CSV/saisie ; test en conditions réelles ; clair/sombre ; mobile ; tests e2e.

## V1.1 — améliorations probables (faible effort, front-end)
- Internationalisation FR/EN réelle (dictionnaire + `data-i18n`, comme sur le projet TwinShift).
- Mini-tutoriel contextuel par page.
- Persistance locale de l'état (localStorage) avec versionnage du schéma, bouton « réinitialiser ».
- Prise de rendez-vous (calendrier) depuis « Enterprise / Demander un devis » et checkout plus complet.
- Export CSV des factures/relances ; impression d'un récap mensuel.
- Édition d'un scénario par client directement depuis la page Clients ; modèles de messages éditables par canal.

## V2 — nécessite un backend (à valider techniquement)
| Sujet | Direction envisagée | Points à vérifier |
|---|---|---|
| Envoi e-mail fiable | Fonction serverless + fournisseur transactionnel (domaine propre, SPF/DKIM/DMARC) | Délivrabilité, quotas, désinscription |
| WhatsApp automatique | API WhatsApp Business (Cloud API) | Vérification Meta, **modèles de messages pré-approuvés** pour les envois initiés par l'entreprise, consentement |
| Paiement réel | Stripe Checkout / Payment Links + **webhooks** pour passer la facture en « payée » | Conformité, remboursement, rapprochement |
| Synchronisation des factures | OAuth + API Pennylane / QuickBooks / Stripe / Freebe / Henrri | Accès partenaires, formats, limites d'API |
| Planificateur | Tâche planifiée (cron) à la place de « +1 jour (démo) » ; respect jours ouvrés / plage horaire | Fuseaux horaires |
| Comptes & données | Authentification, base de données, multi-utilisateurs (Enterprise), journal d'audit | RGPD (base légale, rétention, droit à l'effacement) |
| Escalade | Courrier recommandé, partenaire de recouvrement/huissier | Contrats partenaires, validité juridique de la mise en demeure (relecture par un juriste) |
| SMS | Fournisseur SMS | Coût, opt-out |

## Hors périmètre actuel (décisions du professeur)
SMS et courrier recommandé : **ne pas réintroduire en V1**.
