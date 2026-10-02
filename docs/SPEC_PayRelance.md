# Spécification PayRelance (extrait du PDF)

> Extrait **automatique** du fichier `docs/brief/SaaS.pdf` (source de vérité). La mise en forme peut être imparfaite (tableaux).
>
> ⚠️ Certaines fonctionnalités décrites ici — **SMS, courrier recommandé, transmission à un huissier/partenaire** — sont **reportées en V2** sur demande du professeur (voir `PROFESSOR_FEEDBACK.md`). La V1 se limite à **e-mail + WhatsApp**.
> Le PDF propose Pro = « + WhatsApp & SMS » ; en V1, e-mail et WhatsApp sont inclus dans toutes les offres, les offres se différencient par le volume et les fonctionnalités annexes.

---

Voici le dossier complet pour votre projet SaaS d'Automation des relances d'impayés,
élaboré en suivant exactement la structure et la méthodologie du guide.

Ce projet s'adresse à tous les types d'entreprises (TPE, PME, agences), tout en gardant
comme cible principale prioritaire les travailleurs indépendants et freelances.


1. Créer un SaaS B2B
   ●​ Nom du SaaS : PayRelance (ou CashPulse)
   ●​
   ●​ Description courte du produit : Plateforme SaaS intelligente d'automatisation des
      relances de factures impayées et d'encaissement accéléré.
   ●​
   ●​ Cible professionnelle visée : Cible principale : Indépendants, freelances et
      consultants. Cible secondaire : TPE, PME, agences de services et cabinets
      d'expertise comptable.
   ●​
   ●​ Problème principal résolu : Le manque de trésorerie lié aux retards de paiement,
      couplé au temps perdu et à la gêne relationnelle d'effectuer des relances manuelles
      auprès des clients.
   ●​
   ●​ Fonctionnalités principales :
   ●​ ​

        ○​ Synchronisation en 1 clic avec les banques et logiciels de facturation
            (Pennylane, QuickBooks, Stripe, Freebe, Henrri, etc.).
        ○​
        ○​ Détection automatique des retards d'échéance.
        ○​
        ○​ Scénarios de relances multicanaux personnalisables (Email, SMS,
            WhatsApp, Courrier recommandé automatisé).
        ○​
        ○​ Intégration de liens de paiement immédiat (CB, virement direct, prélèvement)
            dans les messages de relance.
        ○​
        ○​ Génération de courriers de mise en demeure et transmission en 1 clic à un
            partenaire de recouvrement/huissier.
        ○​
   ●​ Modèle économique envisagé :
   ●​ ​

          ○​ Freemium / Période d'essai : 14 jours d'essai gratuit sans carte bancaire.
          ○​
          ○​ Formule Solo (Indépendants) : 19 € / mois (jusqu'à 30 factures/mois).
          ○​
          ○​ Formule Pro (TPE/Agences) : 49 € / mois (jusqu'à 150 factures/mois +
             WhatsApp & SMS).
          ○​
       ○​ Formule Enterprise (PME) : 119 € / mois (volume illimité, intégrations
           sur-mesure).
       ○​
       ○​ Commission optionnelle : % réduit uniquement sur les créances recouvrées
           via la phase contentieuse/amiable juridique.
       ○​
 ●​ Bénéfice business pour l'utilisateur : Gain de temps massif (3 à 5 heures par
    semaine économisées), réduction du DSO (délai moyen de paiement) de 40 %, et
    préservation de la relation client grâce à des relances diplomatiques mais fermes.
 ●​

2. Trouver un marché
 ●​ Marché ciblé : Marché de la FinTech B2B, de la gestion de trésorerie (Credit
    Management) et de la facturation électronique.
 ●​
 ●​ Taille ou potentiel du marché : En Europe, les retards de paiement représentent
    plus de 350 milliards d'euros de trésorerie bloquée. En France, les impayés sont
    la cause de 25 % des faillites de TPE/PME et d'indépendants. Avec plus de 4
    millions d'indépendants en France et une obligation légale progressive de facturation
    électronique, le marché des logiciels de gestion financière B2B connaît une
    croissance annuelle supérieure à 15 %.
 ●​
 ●​ Typologie des clients visés : Freelances tech/créatifs, consultants indépendants,
    artisans, petites agences web, PME de services.
 ●​
 ●​ Tendance du secteur :
 ●​ ​

      ○​ Généralisation de la facturation électronique en Europe.
      ○​
      ○​ Essor de l'Open Banking (DSP2) permettant d'interconnecter facilement les
          flux bancaires.
      ○​
      ○​ Digitalisation des usages de paiement B2B (paiement instantané, QR code,
          WhatsApp Business).
      ○​
 ●​ Opportunités identifiées :
 ●​ ​

        ○​ Personnalisation des relances grâce à l'IA (adaptation du ton selon
           l'historique du client).
        ○​
        ○​ Simplification extrême pour les indépendants qui n'ont ni service comptable ni
           juriste.
        ○​
        ○​ Intégration du paiement fractionné ou immédiat directement au sein des
           relances.
        ○​
   ●​ Freins ou risques du marché :
   ●​ ​

          ○​ Crainte des clients d'altérer la relation commerciale avec leurs propres
             acheteurs.
          ○​
          ○​ Multiplication des logiciels de facturation existants nécessitant de
             nombreuses API.
          ○​
          ○​ Réglementation stricte sur la collecte de données financières et le
             recouvrement de créances.
          ○​

3. Réaliser une analyse concurrentielle
Liste des concurrents directs et indirects :
   1.​ Upflow (Concurrent direct - Mid-market & PME)
   2.​
   3.​ Leanpay (Concurrent direct - TPE / PME)
   4.​
   5.​ Rubypayeur (Concurrent direct - Recouvrement & Annuaire communautaire)
   6.​
   7.​ Stripe / QuickBooks / Pennylane (Concurrents indirects - Relances basiques
       intégrées à leurs outils)
   8.​
Analyse de leur positionnement :
   ●​ Upflow : Positionné sur les entreprises en forte croissance et PME (SaaS B2B
      grands comptes). Très complet mais complexe et cher.
   ●​
   ●​ Leanpay : Axé sur les TPE/PME avec des workflows de relance structurés pour les
      responsables administratifs et financiers (RAF).
   ●​
   ●​ Rubypayeur : Axé sur le recouvrement amiable/judiciaire et l'impact réputationnel
      (signalement des mauvais payeurs).
   ●​
   ●​ Logiciels de facturation (Pennylane, Stripe) : Proposent uniquement un simple
      e-mail de rappel automatique, sans scénarios multicanaux (SMS, WhatsApp) ni
      personnalisation avancée.
   ●​
Analyse de leurs forces :
   ●​ Upflow possède une intégration poussée avec les ERP complexes (NetSuite,
      Salesforce).
   ●​
   ●​ Rubypayeur dispose d'un effet de réseau fort grâce à son annuaire d'entreprises et
      de scores de solvabilité.
   ●​
   ●​ Les logiciels de facturation bénéficient de l'ancrage direct chez l'utilisateur qui y crée
      déjà ses devis.
  ●​
Analyse de leurs faiblesses :
  ●​ Les outils comme Upflow ou Leanpay sont trop chers (plusieurs centaines
     d'euros/mois) et surdimensionnés pour un indépendant seul.
  ●​
  ●​ Les relances intégrées aux logiciels de facturation manquent de puissance (relances
     e-mail basiques facilement ignorées par les mauvais payeurs).
  ●​
  ●​ La prise en main des outils traditionnels exige souvent une formation ou un
     paramétrage fastidieux.
  ●​
Tableau comparatif des offres :
 Concurr     Segment       Proposition      Point Fort       Limite /        Modèle
 ent /       Clé           de Valeur        Majeur           Point           Économi
 Solution                  Unique                            Faible          que
                           (PVP)



 Upflow      PME &         Gestion          Intégrations     Prix très       Abonnem
             ETI           avancée du       ERP              élevé,          ent
                           poste client     poussées,        surdimensi      mensuel
                           pour équipes     analytics        onné pour       à partir de
                           financières.     puissants.       les             300 €+ /
                                                             freelances.     mois.




 Leanpay     TPE &         Outil            Workflows        Moins           Abonnem
             PME           collaboratif     clairs, suivi    adapté au       ent à
                           de relance et    de la relation   micro-entre     partir de
                           suivi de         client.          preneur         99 € /
                           trésorerie.                       indépendan      mois.
                                                             t.




 Rubypay     Indépenda     Recouvreme       Forte            Approche        Gratuit +
 eur         nts & TPE     nt               pression         parfois         % sur les
                           communautai      réputationnell   jugée trop      sommes
                                                             agressive
                                                             pour
                              re et relance     e, paiement      certains         recouvrée
                              incitative.       au succès.       clients.         s.




 PayRela      Indépend        Relance           Simplicité       Moins de         Freemiu
 nce          ants &          multicanale       absolue, ton     fonctionnali     m puis
 (Votre       TPE/PME         intelligente      ultra-person     tés ERP          dès 19 € /
 SaaS)                        (SMS/Whats        nalisable,       lourdes.         mois.
                              App) Plug &       prix
                              Play en 3         accessible.
                              min.




Opportunité de différenciation pour votre SaaS :
Alors qu'Upflow et Leanpay ciblent les directions financières avec des abonnements à
plusieurs centaines d'euros, PayRelance propose un outil "Plug & Play" paramétrable
en 3 minutes pour les indépendants. La différenciation repose sur l'utilisation du
multicanal (SMS/WhatsApp qui affichent des taux d'ouverture de 98 %) et sur la
personnalisation du ton (garder une relation courtoise tout en étant d'une efficacité
redoutable).


4. Définir une problématique
   ●​ Problématique principale : L'incapacité des indépendants et des petites entreprises
      à encaisser leurs factures à temps sans sacrifier leur temps de travail ni détériorer la
      relation avec leurs clients.
   ●​
   ●​ Causes du problème :
   ●​ ​

        ○​ L'inconfort psychologique : Peur de relancer et d'avoir l'air "agressif" ou dans
           le besoin auprès du client.
        ○​
        ○​ Le manque de temps : L'indépendant priorise son travail opérationnel plutôt
           que l'administratif.
        ○​
        ○​ L'inefficacité des e-mails simples : Les e-mails de rappel finissent sous la pile
           ou dans les spams.
        ○​
   ●​ Conséquences pour la cible :
 ●​ ​

        ○​ Trou dans la trésorerie personnelle/professionnelle, retard dans le paiement
            des charges.
        ○​
        ○​ Stress permanent et temps perdu le soir à rédiger des relances manuelles.
        ○​
        ○​ Risque élevé d'impayés définitifs (plus une facture est ancienne, moins elle a
            de chances d'être payée).
        ○​
 ●​ Urgence ou importance du problème : Dans un contexte économique tendu, les
    délais de paiement s'allongent. Pour un freelance, une seule facture de 3 000 €
    non payée à la fin du mois peut mettre en danger sa rentabilité immédiate.
 ●​
 ●​ Opportunité business liée à cette problématique : Développer un SaaS
    ultra-simple qui prend en charge la charge mentale et l'exécution des relances, en
    proposant des raccourcis de paiement directs (liens CB/virement).
 ●​

5. Définir une proposition de valeur
 ●​ Proposition de valeur principale : Ne courez plus après votre argent : automatisez
    vos relances de factures en toute sérénité sans abîmer vos relations clients.
 ●​
 ●​ Promesse produit : Divisez par deux vos retards de paiement et récupérez 100 %
    de votre trésorerie en moins de 5 minutes de configuration.
 ●​
 ●​ Bénéfices fonctionnels :
 ●​ ​

         ○​ Synchronisation automatique des factures impayées depuis votre outil
            habituel.
         ○​
         ○​ Envoi automatique de relances par e-mail, SMS et WhatsApp au bon
            moment.
         ○​
         ○​ Ajout d'un bouton de paiement direct sur chaque message de relance.
         ○​
 ●​ Bénéfices business : Un cash-flow sécurisé, zéro heure perdue en gestion
    administrative et un DSO réduit de 40 %.
 ●​
 ●​ Éléments de différenciation : Contrairement aux logiciels comptables froids et
    rigides, PayRelance adapte intelligemment le ton de la relance (de l'aide-mémoire
    amical au rappel formel) et utilise les canaux instantanés (SMS / WhatsApp).
 ●​
 ●​ Raisons de croire : Déjà plus de 85 % des factures relancées via nos scénarios
    SMS/WhatsApp sont réglées dans les 48 heures suivant la relance.
 ●​
6. Créer le branding
 ●​ Nom de marque : PayRelance (évoque immédiatement le paiement et la relance
    fluide).
 ●​
 ●​ Logo : Une flèche circulaire dynamique fusionnant le symbole de la pièce de
    monnaie/carte bancaire avec une coche de validation (Checkmark) pour exprimer
    l'action accomplie.
 ●​
 ●​ Couleurs principales :
 ●​ ​

        ○​ Bleu Confiance (#1E3A8A) : Sécurité financière et professionnalisme.
        ○​
        ○​ Vert Trésorerie (#10B981) : Croissance, cash-flow positif et succès.
        ○​
        ○​ Touches de Corail (#F43F5E) : Pour attirer l'attention sur les
           urgences/retards.
        ○​
 ●​ Typographies : "Plus Jakarta Sans" pour les titres (moderne, accueillante et
    dynamique) combinée à "Inter" pour la lisibilité de l'interface.
 ●​
 ●​ Direction artistique : Clean, épurée, orientée "SaaS FinTech moderne", évitant le
    jargon comptable anxiogène au profit de visuels de tableaux de bord clairs.
 ●​
 ●​ Ton de communication : Empathique, encourageant, pédagogue et extrêmement
    pragmatique.
 ●​
 ●​ Règles d'utilisation simples : Toujours associer l'image de la relance à une notion
    de gain de temps et de sérénité (jamais à la peur ou la confrontation).
 ●​

7. Définir un persona
 ●​ Identité du persona : Julien, 32 ans, Graphiste & UI Designer Freelance
    (représentant de la cible principale des indépendants).
 ●​
 ●​ Fonction ou rôle professionnel : Développeur/Designer indépendant travaillant
    avec 5 à 10 clients par mois (TPE, startups, agences).
 ●​
 ●​ Contexte de travail : Travaillant depuis chez lui ou en espace de coworking, il gère
    lui-même sa facturation le week-end sur son ordinateur portable.
 ●​
 ●​ Objectifs : Être payé en temps et en heure à la fin du mois pour payer ses charges
    et vivre décemment de son activité sans stress.
 ●​
 ●​ Frustrations : Il a actuellement 3 factures en retard de paiement (pour un total de 4
    500 €). Il déteste renvoyer des e-mails de relance car il a peur de paraître désespéré
    ou de froisser ses clients.
 ●​
 ●​ Bespins : Un outil qui s'occupe à sa place d'envoyer des rappels polis mais fermes,
    avec un lien où le client n'a qu'à cliquer pour payer immédiatement.
 ●​
 ●​ Freins à l'achat : Peur que l'outil envoie un message trop agressif automatique par
    erreur à un client important.
 ●​
 ●​ Motivations : Récupérer son argent rapidement et ne plus jamais avoir à rédiger un
    e-mail de relance gênant.
 ●​
 ●​ Critères de décision : La simplicité de prise en main (moins de 5 minutes), le prix
    abordable et la possibilité d'approuver ou personnaliser les messages avant envoi.
 ●​
 ●​ Canaux de communication utilisés : LinkedIn, Twitter/X, groupes de freelances
    (Malt, Slack de communautés), YouTube.
 ●​

8. Définir le parcours utilisateur
 1.​ Découverte : Julien découvre une publication LinkedIn ou une vidéo montrant
     comment automatiser ses relances sans froisser ses clients.
 2.​
 3.​ Inscription & Ingestion : Inscription gratuite en 30 secondes. Julien connecte son
     logiciel de facturation (ex: Freebe ou Pennylane) ou importe un fichier CSV de ses
     factures.
 4.​
 5.​ Configuration du scénario : Julien choisit le ton de ses relances (ex: "Amical &
     Courtois") et valide le calendrier automatique (J+3 e-mail doux, J+8 SMS amical,
     J+15 relance ferme).
 6.​
 7.​ Action & Encaissement : Dès qu'une facture dépasse l'échéance, PayRelance
     envoie la relance. Le client de Julien clique sur le lien sécurisé et règle par CB.
 8.​
 9.​ Rétention & Adoption : Julien reçoit une notification : "Facture de 1 200 € réglée
     suite au SMS de relance". Julien adopte l'outil au quotidien.
 10.​

9. Développer une stratégie AARRR
 ●​ Acquisition : Contenu éducatif sur LinkedIn/YouTube ("3 modèles d'e-mails pour
    relancer sans fâcher"), partenariats avec les plateformes de freelances (Malt, Shine,
    Indy) et référencement SEO sur les requêtes d'impayés.
 ●​
 ●​ Activation : Offrir un essai gratuit de 14 jours déclenchant l'effet "Waouh" : lors du
    premier import, le SaaS identifie automatiquement les factures en retard et propose
    d'envoyer la première relance en 1 clic.
   ●​
   ●​ Rétention : Envoi d'un récapitulatif hebdomadaire de trésorerie ("Cette semaine,
      PayRelance a récupéré 2 400 € pour vous"), intégration continue dans leur routine
      de facturation.
   ●​
   ●​ Recommandation : Programme de parrainage : "Parrainez un autre freelance,
      gagnez 1 mois gratuit tous les deux" + génération de rapports visuels de trésorerie à
      partager.
   ●​
   ●​ Revenu : Conversion de l'essai gratuit vers l'abonnement Solo (19 €/mois) ou Pro
      (49 €/mois).
   ●​
   ●​ KPI à suivre :
   ●​ ​

           ○​ Taux de conversion de l'essai gratuit vers le payant (Target : > 12 %).
           ○​
           ○​ Nombre moyen de jours gagnés sur le paiement des factures.
           ○​
           ○​ MRR (Revenu Mensuel Récurrent) et Churn mensuel.
           ○​

10. Créer les visuels pour 2 réseaux
sociaux
   ●​ Canaux retenus : LinkedIn (pour toucher les décideurs, agences et indépendants)
      et Instagram (visuels éducatifs et style de vie "freelance sans stress").
   ●​
Post LinkedIn (Cible : Freelances, Agences, TPE)
Texte du post :

Réclamiez-vous encore à manger à vos clients qui oublient de vous payer ?    😅
En France, un freelance passe en moyenne 4 heures par mois à rédiger des e-mails de
relance gênants. Pire encore : 1 facture sur 4 est payée avec plus de 15 jours de retard.

C'est pour éliminer cette charge mentale que nous avons créé PayRelance.

🔹 Connectez votre outil de facturation en 2 clics.
🔹 Choisissez un ton de relance (du rappel amical au suivi formel).
🔹 Laissez tourner : vos clients relancés par E-mail, SMS ou WhatsApp avec un lien de
paiement direct.

Résultat ? Vos factures payées 2x plus vite, et 0 malaise relationnel.
🎁 Testez PayRelance gratuitement pendant 14 jours (sans carte bancaire). Lien en premier
commentaire !

#Freelance #Trésorerie #SaaS #Productivité #PayRelance

Visuel associé (Image / Infographie) :

   ●​ Format : Carré / Carrousel épuré aux couleurs Bleu Confiance & Vert Trésorerie.
   ●​
   ●​ Texte sur l'image :
   ●​ ​

   ●​ AVANT : 4h de stress / mois + relances manuelles gênantes.
   ●​ ​

   ●​ AVEC PAYRELANCE : Factures payées en 48h + 0 effort.
   ●​
Post Instagram (Cible : Indépendants, Créateurs)
Texte de la publication (Caption) :

Marre de faire la banque pour vos clients ?   💸
Avoir du talent c'est bien, être payé en temps et en heure c'est mieux. Avec PayRelance,
vos relances d'impayés partent automatiquement par SMS ou WhatsApp avec un lien de
paiement immédiat.

📩 Vos clients règlent en 1 clic depuis leur téléphone.
🔗 Lien dans la bio pour activer votre essai gratuit !
#FreelanceLife #Independant #BusinessTips #PayRelance #CashFlow

Visuel associé :

   ●​ Visuel : Mockup de smartphone affichant une notification WhatsApp élégante :
      "Bonjour Thomas, votre facture #104 est arrivée à échéance. Cliquez ici pour la
      régler en 10 secondes : [lien]" avec un badge vert "Facture Réglée - 1 500 €".
   ●​

11. Définir une stratégie de publication
sur 30 jours
Calendrier éditorial LinkedIn – 30 jours
   ●​ Semaine 1 : Sensibilisation au problème du Cash-Flow
   ●​ ​
        ○​ Mardi (S1) : Article/Post : "Le coût caché des factures impayées pour un
            indépendant" (Sensibilisation).
        ○​
        ○​ Jeudi (S1) : Carrousel : "3 règles d'or pour relancer un client sans détériorer
            la relation commercial" (Éducation).
        ○​
   ●​ Semaine 2 : Présentation de la solution PayRelance
   ●​ ​

        ○​ Mercredi (S2) : Vidéo/GIF Démo : "Comment configurer ses relances
            automatiques en moins de 3 minutes" (Découverte de la solution).
        ○​
   ●​ Semaine 3 : Crédibilité & Preuve sociale
   ●​ ​

        ○​ Mardi (S3) : Infographie : "E-mail vs SMS vs WhatsApp : quel canal
            fonctionne le mieux pour vous faire payer ?" (Expertise).
        ○​
        ○​ Jeudi (S3) : Cas d'usage Storytelling : "Comment Thomas, designer
            freelance, a récupéré 3 400 € de factures en souffrance en 24h" (Preuve
            sociale).
        ○​
   ●​ Semaine 4 : Conversion & Appel à l'action
   ●​ ​

          ○​ Mardi (S4) : Post Offre : "Testez PayRelance 14 jours gratuitement et
             encaissez vos factures retardataires d'ici ce week-end" (Conversion).
          ○​
Tableau récapitulatif du calendrier :
 Semaine       Jour         Thématique        Objectif           Tunnel
                            de la             Marketing          (TOFU/MOFU/BOFU)
                            publication



 S1            Mardi        Les coûts         Sensibilisation    TOFU (Attirer)
                            cachés du
                            retard de
                            paiement
 S1            Jeudi         3 modèles de       Éducation         TOFU (Attirer)
                             relance
                             bienveillants




 S2            Mercredi      Démo de            Découverte        MOFU (Convaincre)
                             l'outil et de la   Produit
                             relance
                             WhatsApp




 S3            Mardi         Analyse des        Expertise         MOFU (Convaincre)
                             canaux de
                             relance (SMS
                             vs Email)




 S3            Jeudi         Étude de cas       Preuve &          MOFU (Convaincre)
                             : 3 400 €          Projection
                             récupérés par
                             un freelance




 S4            Mardi         Invitation à       Conversion        BOFU (Convertir)
                             l'essai gratuit    Directe
                             de 14 jours




12 & 13. Landing Page et Prototype
La landing page doit être construite sur une structure simple et extrêmement performante :
  1.​ Header / Hero Section :
  2.​ ​

          ○​ Titre principal : "Faites-vous payer à temps, sans lever le petit doigt."
          ○​
          ○​ Sous-titre : "PayRelance automatise vos relances de factures par e-mail,
              SMS et WhatsApp. Gardez vos clients heureux et votre trésorerie au vert."
          ○​
          ○​ CTA principal : "Tester gratuitement 14 jours" (Bouton Vert).
          ○​
  3.​ Bannière de réassurance : "Compatible avec Pennylane, Freebe, QuickBooks,
      Stripe, Henrri..."
  4.​
  5.​ Section Problème / Chiffres clés : "4h perdues / mois", "1 facture sur 4 en retard",
      "25 % des faillites dues aux impayés".
  6.​
  7.​ Section Fonctionnalités clés :
  8.​ ​

         ○​ Relances multicanales intelligentes.
         ○​
         ○​ Liens de paiement CB / Virement intégrés.
         ○​
         ○​ Personnalisation du ton et validation avant envoi.
         ○​
  9.​ Section Tarification claire : Formules Solo (19 €) et Pro (49 €) sans engagement.
  10.​
  11.​FAQ & Pied de page.
  12.​

14. Faire tester le parcours utilisateur
Compte-rendu du test utilisateur :
  ●​ Profil du testeur : Maxime R., 28 ans, Rédacteur web freelance (cible principale).
  ●​
  ●​ Scénario donné : "Vous avez 2 factures en retard. Connectez-vous, créez un
     scénario de relance doux et activez l'essai gratuit."
  ●​ ​

  ●​
  ●​ Observations & Frictions identifiées :
  ●​ ​

         ○​ Hésitation au moment d'importer les factures : Le testeur s'est demandé si
            l'outil allait envoyer des e-mails à ses clients immédiatement sans sa
            validation préalable.
         ○​
        ○​ Formulaire d'inscription : Trop de champs demandés au départ (Numéro
            SIRET, Adresse).
        ○​
   ●​ Améliorations décidées :
   ●​ ​

          ○​ Ajouter une mention très claire lors de l'onboarding : "Aucun e-mail ou SMS
             ne sera envoyé à vos clients sans votre validation manuelle préalable".
          ○​
          ○​ Réduire le formulaire d'inscription à 2 champs seulement : E-mail
             professionnel + Mot de passe.
          ○​

15. Utiliser Manychat (Automation
Réseaux Sociaux)
   ●​ Déclencheur (Trigger) : Un utilisateur commente le mot "CASH" sous un post
      LinkedIn ou Instagram.
   ●​
   ●​ Action Manychat :
   ●​ ​

          1.​ Envoi automatique en DM du guide PDF : "Le Guide Anti-Impayés pour
              Freelances : 5 modèles de mails de relance prêt-à-copier".
          2.​
          3.​ Question interactive du bot : "Quel est votre logiciel de facturation actuel ?"
          4.​
          5.​ Redirection personnalisée vers l'essai gratuit de PayRelance selon le logiciel
              utilisé.
          6.​

16. Définir une stratégie emailing à J+30
Séquence automatisée de nurturing après téléchargement du guide anti-impayés :


 Timing      Objectif        Sujet de           Message principal         Appels à
                             l'e-mail                                     l'action
                                                                          (CTA)



 J+0         Délivrer la     Votre guide        Livraison du guide        Télécharger
             valeur          anti-impayés       PDF et présentation       le guide PDF

                             🎁
             promise         PayRelance         de la mission de
                                                PayRelance.
J+7    Rendre le      Combien vous      Démonstration          Calculer mon
       problème       coûte             chiffrée de l'impact   manque à
       concret        réellement 15     des impayés sur le     gagner
                      jours de retard   BFR d'un
                      ?                 indépendant.




J+15   Lever          "Et si mon        Explication sur la     Voir les

                             💬
       l'objection    client le prend   façon dont les         exemples de
       principale     mal ?"            relances polies et     messages
       (peur                            multicanales
       d'énerver le                     améliorent le
       client)                          professionnalisme.




J+30   Relance        On ferme          Rappel amical :        Démarrer

                                ⏳
       finale /       votre accès       PayRelance est         mon essai de
       Offre de       d'essai ?         toujours prêt à        14 jours
       clôture                          récupérer vos
                                        impayés en
                                        automatique.
