/**
 * Contenu unique du site — tout le texte visible vient d'ici.
 * Mettre à jour ce fichier suffit pour mettre à jour le CV en ligne,
 * sans toucher au JSX.
 */

export type Kpi = {
  /** Valeur affichée dans la tuile, ex. "4" ou "10+" */
  value: string;
  label: string;
  /** Précision courte affichée sous la valeur, style annotation de rapport */
  detail: string;
};

export type SkillGroup = {
  /** Rôle dans la chaîne de valeur data, pas une famille de logos */
  role: string;
  description: string;
  tools: string[];
};

export type ExperienceSection = {
  title: string;
  bullets: string[];
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  highlights: string[];
  /** Sous-blocs optionnels (ex. missions clients vs développement interne) */
  sections?: ExperienceSection[];
};

export type ProjectImage = { src: string; alt: string };

export type Project = {
  slug: string;
  name: string;
  sector: string;
  year: string;
  /** Accroche courte pour la carte en page d'accueil */
  summary: string;
  stack: string[];
  /** Capture principale — absente pour les projets internes confidentiels */
  coverImage?: ProjectImage;
  /** Captures additionnelles pour l'étude de cas */
  images: ProjectImage[];
  context: string;
  constraint: string;
  contributions: string[];
  decisions: string[];
  outcome: string;
};

export type Education = {
  degree: string;
  school: string;
  period: string;
};

export type Certification = {
  name: string;
  issuer: string;
};

export type LanguageSkill = {
  language: string;
  level: string;
};

export const profile = {
  name: "Amine Bezzi",
  title: "Consultant Data & Analytics",
  subtitle: "Power BI · Alteryx · MSBI",
  yearsOfExperience: 4,
  positioning:
    "Je transforme des données complexes en leviers de décision, de l'ETL à la visualisation.",
  about: [
    "Consultant senior Data & Analytics avec 4 ans d'expérience, certifié Microsoft PL-300 (Power BI Data Analyst) et Alteryx Designer Core.",
    "Chez KPMG Transaction Services (Deal Advisory), j'ai travaillé sur deux fronts : les missions clients M&A — due diligence financière, analyses de revenus récurrents (ARR, MRR, churn, cohortes, roll-forward) pour plus de 10 clients — et le développement interne d'outils d'automatisation en méthode Agile sous Azure DevOps, dont le dashboard staffing & pipeline le plus sollicité par les Partners de KPMG Paris.",
    "Aujourd'hui en mission pour des directions métier (pharma, services IT), je couvre toute la chaîne : cadrage et cahier des charges, ETL (Alteryx, KNIME, Apache Hop, Talend), qualité des données, modélisation sémantique SSAS, mesures DAX et design de dashboards lisibles par un comité de direction.",
    "Ce qui m'importe : des chiffres fiables, des modèles propres, et des rapports que les décideurs utilisent vraiment.",
  ],
  contact: {
    email: "aminebezzi@outlook.com",
    phoneFr: "+33 7 65 82 69 21",
    phoneWhatsApp: "+213 7 78 67 79 75",
    linkedin: "https://linkedin.com/in/amine-bezzi",
    cvPath: "/cv.pdf",
  },
  kpis: [
    {
      value: "4",
      label: "années d'expérience",
      detail: "conseil data & analytics",
    },
    {
      value: "10+",
      label: "clients M&A",
      detail: "buy-side & sell-side, KPMG TS",
    },
    {
      value: "3",
      label: "certifications",
      detail: "PL-300 · Alteryx Core · BI",
    },
    {
      value: "4",
      label: "études de cas",
      detail: "détaillées ci-dessous",
    },
  ] satisfies Kpi[],
  skillGroups: [
    {
      role: "ETL & préparation des données",
      description:
        "Traitement de bases de plusieurs millions de lignes sous Alteryx : connexions SQL Server, API REST et fichiers, protocoles d'alerte data quality, transformations. Dispositifs de contrôle qualité avec KNIME, migration de chaînes ETL Talend vers Apache Hop.",
      tools: [
        "Alteryx (avancé)",
        "KNIME",
        "Apache Hop (intermédiaire)",
        "Talend (initiation)",
        "Power Query",
        "SQL Server",
      ],
    },
    {
      role: "Modélisation & analyse",
      description:
        "Modèles en étoile et modèles sémantiques SSAS Tabular maintenus sous Tabular Editor. Mesures DAX avancées : time intelligence, réalisé vs objectif, cohortes, ARR / MRR, churn, lifetime value, roll-forward, like-for-like.",
      tools: [
        "SSAS Tabular",
        "Tabular Editor",
        "DAX",
        "SQL",
        "Python",
        "R",
        "MATLAB",
      ],
    },
    {
      role: "Restitution & design",
      description:
        "Power BI avancé : DAX, bookmarks, drill-down, UX/UI soigné. Excel niveau M&A KPMG : calculs avancés, SOMME.SI.ENS, RECHERCHEV, TCD, connexion SSAS. Maquettage des propositions de design sous PowerPoint, Canva et Figma.",
      tools: [
        "Power BI (avancé)",
        "Excel (niveau M&A KPMG)",
        "Looker Studio (initiation)",
        "PowerPoint",
        "Canva",
        "Figma",
      ],
    },
    {
      role: "Industrialisation & collaboration",
      description:
        "Versionnement Git des développements BI, gestion de projet Agile sous Azure DevOps, automatisation Excel (VBA), sources SharePoint, rédaction de cahiers des charges KPI avec les équipes métiers.",
      tools: [
        "Git",
        "Azure DevOps",
        "Méthode Agile",
        "VBA Excel",
        "SharePoint",
        "Cahier des charges KPI",
      ],
    },
  ] satisfies SkillGroup[],
  experiences: [
    {
      company: "IRIS-IT France",
      role: "Consultant Data & BI externe (ESN)",
      period: "Juin 2026 — Sept. 2026",
      highlights: [
        "Conception de dashboards Power BI destinés aux clients d'IRIS-IT : suivi 360° de leur activité, de l'état du parc au suivi des tickets de maintenance, support, téléphonie, facturation et logistique.",
        "Rédaction du cahier des charges avec les équipes internes : besoins KPI, suivis opérationnels, taux de rafraîchissement des données.",
        "Refonte de la chaîne ETL : migration de Talend vers Apache Hop, versionnement des développements avec Git.",
        "Maquettes Canva / PowerPoint pour les propositions de design présentées aux responsables.",
      ],
    },
    {
      company: "Magpharm",
      role: "Consultant Data — Business Excellence",
      period: "Mars 2026 — Mai 2026",
      highlights: [
        "Mise en place d'un dispositif Data Quality autour d'une solution ETL low-code gratuite (KNIME), et formation des équipes métiers à l'outil pour contrôler la donnée en autonomie.",
        "Création du dashboard de direction (rafraîchissement hebdomadaire) qui anime les comités de direction : activité de vente sell-in, consommation du budget marketing.",
        "Comparaisons vs N-1, vs objectif, vs MAT et vs M-1, déclinées par pôle, gamme, jusqu'au produit.",
      ],
    },
    {
      company: "KPMG — Transaction Services",
      role: "Senior Data & Analytics Consultant",
      period: "Sept. 2022 — Mars 2026",
      location: "Équipe Paris — Offshore · Deal Advisory",
      highlights: [],
      sections: [
        {
          title: "Missions clients M&A",
          bullets: [
            "Participation à plus de 5 missions d'achat et de vente de sociétés à revenu récurrent (SaaS, télécommunications, cybersécurité) : ARR, MRR, churn, cohortes, analyses like-for-like.",
            "Client assurance (région marseillaise) : réalisation et actualisation mensuelle, pendant 2 ans, d'un dashboard publié sur le Portail Client KPMG — ARR, MRR, cohortes, snowball vs N-1 et vs M-1, deep dive jusqu'au niveau le plus fin.",
            "Deux missions retail : analyses PVM (prix-volume-mix), sell-in, sell-out, saisonnalités.",
            "Préparation des données sous Alteryx (nettoyage, structuration de larges volumes) intégrées dans des modèles SSAS Tabular ; databooks Excel dynamiques pour les équipes deal.",
          ],
        },
        {
          title: "Développement interne — automatisation (Agile · Azure DevOps)",
          bullets: [
            "Automatisation de la chaîne de traitement des analyses récurrentes avancées (ARR, cohortes, roll-forward…) pour les missions à venir — stack : Power BI, Alteryx, SQL Server, SSAS / Tabular Editor, Azure DevOps, Excel automatisé.",
            "Pilotage de bout en bout, avec les équipes RH et Planning, du dashboard timesheet & pipeline de KPMG Deal Advisory France : le dashboard le plus sollicité par les Partners de KPMG Paris.",
            "Timesheet : optimisation du staffing des collaborateurs, détection des collaborateurs sans mission, appui au planning. Pipeline M&A : backlog, projets à venir, pitchs en cours, gagnés, déclinés, perdus, terminés — avec tables prêtes à exporter.",
          ],
        },
      ],
    },
    {
      company: "Jumia",
      role: "Assistant commercial",
      period: "Mai 2022 — Juil. 2022",
      highlights: [],
    },
    {
      company: "BDL — Banque de Développement Local",
      role: "Stagiaire",
      period: "Fév. 2022 — Mai 2022",
      highlights: [],
    },
  ] satisfies Experience[],
  projects: [
    {
      slug: "pilotage-operations-it",
      name: "Pilotage des opérations IT infogérées",
      sector: "Services IT / Retail international",
      year: "2026",
      summary:
        "Un espace de pilotage 360° pour les clients d'une ESN : état du parc, tickets de maintenance, support, téléphonie, facturation, logistique et SLA — avec refonte de l'ETL de Talend vers Apache Hop.",
      stack: [
        "Power BI",
        "DAX",
        "Power Query",
        "SQL Server",
        "Apache Hop",
        "Git",
      ],
      coverImage: {
        src: "/projects/iris-overview.webp",
        alt: "Vue d'ensemble du rapport : KPIs support, téléphonie, facturation et matériel & logistique avec cibles, courbes mensuelles par domaine, points d'attention triés par sévérité et carte mondiale des sites.",
      },
      images: [
        {
          src: "/projects/iris-commandes.webp",
          alt: "Onglet Commandes : suivi des achats fournisseurs avec cycle de vie des commandes (commandée, expédiée, reçue, intégrée au stock), valeur totale et détail ligne à ligne.",
        },
        {
          src: "/projects/iris-home.webp",
          alt: "Page d'accueil de l'espace de pilotage avec navigation Vue d'ensemble, Support, Facturation, Téléphonie, Matériel.",
        },
      ],
      context:
        "Une ESN assure l'infogérance d'un groupe spécialiste de la maintenance, réparation et installation hardware. Les clients et le comité de pilotage manquaient d'une vue unifiée de l'activité : état du parc, tickets de maintenance, support, téléphonie, facturation, logistique et respect des SLA contractuels.",
      constraint:
        "Couvrir les besoins KPI des équipes internes via un vrai cahier des charges (indicateurs, suivis, taux de rafraîchissement), consolider des sources hétérogènes, et moderniser une chaîne ETL historique sous Talend.",
      contributions: [
        "Rédaction du cahier des charges avec les équipes internes : KPIs, suivis, taux de rafraîchissement attendus.",
        "Modèle en étoile consolidant ticketing, téléphonie et ERP via Power Query ; mesures DAX time intelligence (vs N-1, cibles SLA, signaux d'alerte).",
        "Refonte de l'ETL : migration de Talend vers Apache Hop, avec versionnement Git des développements.",
        "Navigation par domaine métier, synthèse « points d'attention » triée par sévérité, suivi du cycle de vie des commandes fournisseurs.",
        "Maquettes Canva / PowerPoint pour faire valider les propositions de design par les responsables avant développement.",
      ],
      decisions: [
        "Un cahier des charges validé avant tout développement : chaque KPI a un propriétaire, une définition et un taux de rafraîchissement attendu.",
        "Apache Hop plutôt que Talend pour la chaîne ETL cible : open source actif, pipelines versionnables dans Git comme du code.",
        "Une synthèse « points d'attention » qui trie les écarts aux cibles par sévérité : le comité commence par ce qui dévie, pas par ce qui va bien.",
        "Un code couleur par domaine métier pour se repérer d'un onglet à l'autre sans lire les titres.",
      ],
      outcome:
        "Les clients d'IRIS-IT disposent d'un espace de pilotage unique — KPIs contractuels avec cibles, tendances par domaine, alertes hiérarchisées, suivi des commandes — et l'équipe interne d'une chaîne ETL modernisée et versionnée.",
    },
    {
      slug: "pilotage-sell-in-budget-marketing",
      name: "Pilotage Sell-in & Budget Marketing",
      sector: "Industrie pharmaceutique",
      year: "2026",
      summary:
        "Un dispositif Data Quality (KNIME) et un dashboard de direction à rafraîchissement hebdomadaire : sell-in et budget marketing comparés vs N-1, objectif, MAT et M-1, du pôle jusqu'au produit.",
      stack: ["Power BI", "DAX", "KNIME", "SSAS Tabular"],
      coverImage: {
        src: "/projects/magpharm-overview.webp",
        alt: "Vue Overview : chiffre d'affaires, volume, budget marketing et pourcentage de consommation avec jauges vs objectif et vs N-1, CA par mois, réalisé vs objectif par gamme et top produits.",
      },
      images: [
        {
          src: "/projects/magpharm-sellin.webp",
          alt: "Vue Focus Sell-in : contribution par gamme, performance vs N-1 et objectif, évolution mensuelle par gamme et détail par produit (objectif, réalisé, R/O, stock, couverture en jours).",
        },
        {
          src: "/projects/magpharm-marketing.webp",
          alt: "Vue Budget Marketing : consommation full year, YTD et mensuelle vs budget, budget par gamme avec pourcentage de consommation, et détail des actions marketing réalisées mois par mois.",
        },
        {
          src: "/projects/magpharm-home.webp",
          alt: "Page d'accueil du tableau de bord Business Excellence avec menu de navigation et date de mise à jour hebdomadaire.",
        },
      ],
      context:
        "La direction commerciale d'un laboratoire pharmaceutique pilotait ventes sell-in et budget marketing sur des extractions Excel hebdomadaires, sans vision consolidée par pôle, gamme et produit — et sans dispositif de contrôle de la qualité des données en amont.",
      constraint:
        "Fiabiliser la donnée avant de la montrer : mettre en place un contrôle qualité outillé et transférable aux équipes métiers, puis un dashboard de direction rafraîchi chaque semaine pour animer les comités de direction.",
      contributions: [
        "Dispositif Data Quality construit sur KNIME (ETL low-code gratuit) : contrôles automatisés de la donnée entrante.",
        "Formation des équipes métiers à KNIME pour qu'elles contrôlent la donnée en autonomie.",
        "Modèle sémantique SSAS Tabular : CA, volumes, objectifs, budget marketing.",
        "Mesures DAX de comparaison : vs N-1, vs objectif, vs MAT, vs M-1 — déclinées par pôle, gamme, jusqu'au produit.",
        "Vues dédiées : Overview, Focus Sell-in, Réalisé vs Objectif, Budget Marketing avec détail des actions réalisées.",
      ],
      decisions: [
        "KNIME retenu comme ETL : gratuit et low-code, donc appropriable par les équipes métiers après formation — la qualité de données ne dépend plus d'un prestataire.",
        "Un modèle sémantique SSAS Tabular central : une seule définition du CA, des objectifs et du budget pour toutes les vues.",
        "Des comparaisons systématiques (N-1, objectif, MAT, M-1) plutôt que des valeurs brutes : un chiffre ne dit rien sans son référentiel.",
        "Un volet de filtres calqué sur l'organisation commerciale : action, pôle, gamme, team, produit.",
      ],
      outcome:
        "La direction anime ses comités sur un espace unique rafraîchi chaque semaine — sell-in, budget marketing et actions réalisées, du pôle au produit — alimenté par une donnée contrôlée par les équipes métiers elles-mêmes.",
    },
    {
      slug: "deal-analytics-due-diligence",
      name: "Deal Analytics — Due diligence M&A",
      sector: "Finance / Transaction Services — cabinet Big Four",
      year: "2023 — 2025",
      summary:
        "Objectiver la qualité du revenu de cibles à revenu récurrent (SaaS, télécoms, cybersécurité) : ARR, MRR, churn, cohortes, snowball et like-for-like explorables en réunion client.",
      stack: ["Power BI", "DAX", "Alteryx", "SQL", "SSAS Tabular"],
      coverImage: {
        src: "/projects/kpmg-report.webp",
        alt: "Rapport Deal Analytics, onglet Composition : performance des ventes par segment, répartition des commandes par catégorie et journal détaillé des transactions avec filtres par région.",
      },
      images: [
        {
          src: "/projects/kpmg-cover.webp",
          alt: "Page de garde du rapport Deal Analytics (Projet Harvest) avec navigation Overview, Report et About us.",
        },
      ],
      context:
        "Au sein de l'équipe Deal Advisory, les missions de due diligence devaient objectiver la qualité du revenu de cibles : tendances de ventes, churn client, revenu récurrent, analyses like-for-like. Plus de 5 missions d'achat et de vente de sociétés à revenu récurrent (SaaS, télécommunications, cybersécurité), deux missions retail (PVM, sell-in, sell-out, saisonnalités), et un client assurance suivi en continu.",
      constraint:
        "Des données transactionnelles brutes à fiabiliser, un rendu conforme à la charte graphique du cabinet, et des réunions client où chaque question appelle une exploration immédiate.",
      contributions: [
        "Préparation des données transactionnelles sous Alteryx : nettoyage, construction de cohortes clients.",
        "Mesures DAX : revenu récurrent (ARR, MRR), churn, lifetime value, snowball vs N-1 et vs M-1, like-for-like.",
        "Client assurance (région marseillaise) : dashboard actualisé chaque mois pendant 2 ans, publié sur le Portail Client KPMG, avec deep dive jusqu'au niveau le plus fin.",
        "Rapport multi-onglets conforme à la charte graphique du cabinet, filtres période / géographie / produit pour l'exploration en réunion.",
      ],
      decisions: [
        "Des cohortes clients construites dès la préparation des données, pour que churn et rétention se calculent sans retraitement dans le modèle.",
        "Un onglet par question de due diligence (croissance, acquisition, churn, revenu récurrent, like-for-like) plutôt qu'un seul écran surchargé.",
        "Publication sur le Portail Client KPMG pour le suivi récurrent : le client consulte, l'équipe actualise — pas d'envois de fichiers.",
      ],
      outcome:
        "Les équipes deal explorent les questions de qualité du revenu en séance — au lieu d'allers-retours d'extractions — avec des indicateurs ARR, churn, LTV et snowball calculés sur des données nettoyées et traçables.",
    },
    {
      slug: "staffing-pipeline-deal-advisory",
      name: "Timesheet & Pipeline M&A — Deal Advisory France",
      sector: "Projet interne — cabinet Big Four",
      year: "2022 — 2026",
      summary:
        "Mené de bout en bout avec les équipes RH et Planning : la timesheet de tout KPMG Deal Advisory France et le pipeline des missions M&A. Le dashboard le plus sollicité par les Partners de KPMG Paris.",
      stack: ["Power BI", "DAX", "Alteryx", "VBA Excel", "SharePoint"],
      images: [],
      context:
        "Les Partners et l'équipe Planning de KPMG Deal Advisory France manquaient d'une vue consolidée sur deux questions quotidiennes : qui est staffé sur quoi (timesheet de tous les collaborateurs), et où en est le pipeline des missions M&A.",
      constraint:
        "Un projet interne mené de bout en bout — cadrage avec RH et Planning, sources SharePoint hétérogènes, données de staffing sensibles — pour un public exigeant : les Partners de KPMG Paris. Dashboard interne confidentiel : pas de captures publiables.",
      contributions: [
        "Pilotage du projet de bout en bout avec les équipes RH et Planning : cadrage, développement, itérations.",
        "Volet timesheet : suivi du staffing de tous les collaborateurs de Deal Advisory France, détection des collaborateurs sans mission, appui au planning.",
        "Volet pipeline M&A : backlog, projets à venir, pitchs en cours, gagnés, déclinés, perdus à un concurrent, terminés — avec le détail par mission.",
        "Tables détaillées prêtes à être exportées pour les revues de staffing et de pipeline.",
        "Chaîne d'alimentation : sources SharePoint, préparation Alteryx, automatisations VBA Excel.",
      ],
      decisions: [
        "Deux volets dans un seul dashboard (timesheet + pipeline) : le staffing ne s'optimise qu'en regard des missions qui arrivent.",
        "Des statuts de pipeline explicites (backlog, à venir, pitch en cours, gagné, décliné, perdu, terminé) partagés par tous — fin des définitions divergentes entre équipes.",
        "Des tables exportables intégrées au rapport : les revues de staffing repartent avec leurs extractions, sans demande ad hoc.",
      ],
      outcome:
        "Le dashboard le plus sollicité par les Partners de KPMG Paris : optimisation du staffing des collaborateurs, détection immédiate des collaborateurs sans mission, planning outillé, et un état du pipeline M&A (en cours, gagnés, déclinés…) lisible en une réunion.",
    },
  ] satisfies Project[],
  education: [
    {
      degree: "Master en Mathématiques Appliquées",
      school: "USTHB, Alger",
      period: "2020 — 2022",
    },
    {
      degree: "Licence en Probabilités & Statistiques",
      school: "USTHB, Alger",
      period: "2017 — 2020",
    },
  ] satisfies Education[],
  certifications: [
    { name: "PL-300 — Power BI Data Analyst", issuer: "Microsoft" },
    { name: "Alteryx Designer Core", issuer: "Alteryx" },
    { name: "Business Intelligence", issuer: "GOMYCODE" },
  ] satisfies Certification[],
  languages: [
    { language: "Français", level: "Courant (C1)" },
    { language: "Arabe", level: "Langue maternelle" },
    { language: "Anglais", level: "Professionnel (B2)" },
  ] satisfies LanguageSkill[],
} as const;

export type Profile = typeof profile;
