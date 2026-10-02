# Retours du professeur

## Sur PayRelance (version actuelle) — à respecter
1. **Faisabilité technique de la V1 : un canal avec e-mail et WhatsApp uniquement.** Pas de courrier recommandé, pas de SMS.
2. **Intégrations / plugins** : présenter de vrais plugins (e-mail, WhatsApp, etc.). L'application doit **fonctionner comme si le site marchait vraiment** : le professeur doit pouvoir le tester et **recevoir réellement un e-mail**.

→ Implémentation : canaux limités à `email` et `whatsapp` ; page Intégrations avec plugins E-mail (EmailJS, envoi réel), WhatsApp (click-to-chat) et Paiement (page de paiement client) ; parcours « Recevoir une vraie relance » ; les éléments hors V1 sont listés en V2 (`docs/ROADMAP.md`).

## Retours du test utilisateur (dans le PDF de spec, point 14)
- Dire clairement à l'onboarding : « Aucun e-mail ou SMS ne sera envoyé à vos clients sans votre validation manuelle préalable » (→ message de réassurance + validation manuelle par défaut).
- Inscription réduite au minimum (pas de SIRET/adresse au départ).

## Préférences observées du même professeur sur un autre projet (TwinShift)
*Ce ne sont pas des exigences pour PayRelance, mais des attentes probables à anticiper (idées de backlog).*
- Une plateforme **riche** : chaque page doit offrir de vraies fonctionnalités (historique, données, facturation…), pas des pages vides ou « verrouillées ».
- **Onboarding** en 3 étapes à la HubSpot + **mini-tutoriel contextuel sur chaque page** du menu principal.
- Menu du compte cliquable avec **changement de langue réel (FR/EN)** sur toute la plateforme, paramètres.
- Page **facturation/abonnement** avec vraies offres et **parcours d'achat** crédible ; CTA « passer à l'offre supérieure » qui ouvre une **prise de rendez-vous** (calendrier → créneau → ingénieur → confirmation).
- Les boutons « débloquer » doivent mener directement à la facturation.
- Les actions doivent se refléter ailleurs (ex. une simulation lancée apparaît dans « récentes »).
- Menu latéral standard, compact, sans espacements anormaux.
