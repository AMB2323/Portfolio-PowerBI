/**
 * Contenu unique du site — tout le texte visible vient d'ici.
 * Mettre à jour ce fichier suffit pour mettre à jour le CV en ligne,
 * sans toucher au JSX.
 */

export type Link = {
  label: string;
  href: string;
};

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

export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  highlights: string[];
};

export type CaseStudySection = {
  title: string;
  /** Paragraphes ou puces */
  paragraphs?: string[];
  bullets?: string[];
};

export type Project = {
  slug: string;
  name: string;
  sector: string;
  year: string;
  /** Accroche courte pour la carte en page d'accueil */
  summary: string;
  stack: string[];
  /** Capture principale (visible sur la carte et l'étude de cas) */
  coverImage: { src: string; alt: string };
  /** Captures additionnelles pour l'étude de cas */
  images: { src: string; alt: string }[];
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
  location: "Pierrelaye, France (95)",
  availability: "Disponible à partir de septembre 2026",
  nationality: "Nationalité française",
  yearsOfExperience: 4,
  positioning:
    "Je transforme des données complexes en leviers de décision, de l'ETL à la visualisation.",
  about: [
    "Consultant senior Data & Analytics avec 4 ans d'expérience, certifié Microsoft PL-300 (Power BI Data Analyst) et Alteryx Designer Core.",
    "Chez KPMG Transaction Services, j'ai travaillé sur la due diligence financière de plus de 10 clients, côté acquéreur comme côté vendeur : analyses de revenus récurrents et SaaS (ARR, MRR, churn, cohortes), préparation de données sous Alteryx, modèles SSAS Tabular et dashboards Power BI.",
    "Aujourd'hui en mission pour des directions métier (pharma, services IT), je couvre toute la chaîne : cadrage, préparation et qualité des données, modélisation sémantique, mesures DAX et design de rapports lisibles par un comité de direction.",
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
      label: "deals M&A",
      detail: "buy-side & sell-side, KPMG TS",
    },
    {
      value: "3",
      label: "certifications",
      detail: "PL-300 · Alteryx Core · BI",
    },
    {
      value: "3",
      label: "études de cas",
      detail: "détaillées ci-dessous",
    },
  ] satisfies Kpi[],
  skillGroups: [
    {
      role: "Préparation & qualité des données",
      description:
        "Nettoyage et structuration de larges volumes de données, dispositifs de contrôle qualité en amont des modèles.",
      tools: ["Alteryx", "KNIME", "Power Query", "SQL Server"],
    },
    {
      role: "Modélisation sémantique",
      description:
        "Modèles en étoile et modèles tabulaires prêts pour l'analyse, du deal M&A au reporting de direction.",
      tools: ["SSAS Tabular", "Tabular Editor", "SQL", "Modèle en étoile"],
    },
    {
      role: "Mesures & calculs",
      description:
        "DAX avancé : time intelligence, réalisé vs objectif, cohortes clients, ARR / MRR, churn, lifetime value, like-for-like.",
      tools: ["DAX", "Time intelligence", "Cohortes", "KPIs SaaS"],
    },
    {
      role: "Restitution & décision",
      description:
        "Dashboards Power BI orientés comité de direction, databooks Excel dynamiques, supports M&A PowerPoint.",
      tools: ["Power BI (avancé)", "Excel (avancé)", "PowerPoint", "UX/UI reporting"],
    },
  ] satisfies SkillGroup[],
  experiences: [
    {
      company: "IRIS-IT France",
      role: "Consultant Data & BI externe (ESN)",
      period: "Juin 2026 — Sept. 2026",
      highlights: [
        "Conception et développement de rapports Power BI destinés aux clients d'IRIS-IT : suivi 360° des activités infogérées (support, téléphonie, facturation, logistique, SLA).",
      ],
    },
    {
      company: "Magpharm",
      role: "Consultant Data — Business Excellence",
      period: "Mars 2026 — Mai 2026",
      highlights: [
        "Optimisation du modèle de données et mise en place d'un dispositif de contrôle qualité des données.",
        "Conception et développement de dashboards Power BI stratégiques destinés aux revues de direction.",
      ],
    },
    {
      company: "KPMG — Transaction Services",
      role: "Senior Data & Analytics Consultant",
      period: "Sept. 2022 — Mars 2026",
      location: "Équipe Paris — Offshore",
      highlights: [
        "Due diligence financière : participation à des deals buy-side et sell-side pour plus de 10 clients.",
        "Analyses approfondies des revenus récurrents & SaaS : ARR, MRR, churn, cohortes.",
        "Préparation des données : nettoyage et structuration de larges volumes via Alteryx, intégrés ensuite dans des modèles SSAS Tabular.",
        "Dashboards Power BI : rapports interactifs avec DAX avancé et principes UX/UI pour des visualisations claires et impactantes.",
        "Databooks Excel : outils de reporting dynamiques transformant des données complexes en supports de décision pour les clients et équipes deal.",
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
        "Une vue unifiée pour le comité de pilotage d'une infogérance : support, téléphonie, facturation, logistique et SLA contractuels dans un seul rapport.",
      stack: ["Power BI", "DAX", "Power Query", "SQL Server"],
      coverImage: {
        src: "/projects/iris-overview.webp",
        alt: "Vue d'ensemble du rapport Power BI : KPIs support, téléphonie, facturation et logistique, courbes mensuelles, points d'attention triés par sévérité et carte des sites.",
      },
      images: [
        {
          src: "/projects/iris-cover.webp",
          alt: "Page d'accueil du rapport : espace de pilotage de la performance avec navigation Vue d'ensemble, Support, Facturation, Téléphonie, Matériel.",
        },
      ],
      context:
        "Une ESN assure l'infogérance d'un groupe spécialiste de la maintenance, réparation et installation hardware. Le comité de pilotage manquait d'une vue unifiée : support, téléphonie, facturation, logistique et respect des SLA contractuels.",
      constraint:
        "Consolider des sources hétérogènes — ticketing, téléphonie, ERP — dans un modèle unique, lisible en réunion de pilotage, avec des seuils contractuels (SLA) suivis en continu.",
      contributions: [
        "Modèle en étoile consolidant ticketing, téléphonie et ERP via Power Query.",
        "Mesures DAX time intelligence : comparaisons vs N-1, cibles SLA, signaux d'alerte.",
        "Navigation par domaine métier et synthèse « points d'attention » triée par sévérité.",
        "Design UX : page d'accueil, cartographie des sites, codes couleur par domaine.",
      ],
      decisions: [
        "Un code couleur par domaine métier (support, téléphonie, facturation, matériel) pour se repérer d'un onglet à l'autre sans lire les titres.",
        "Une synthèse « points d'attention » qui trie les écarts aux cibles par sévérité : le comité commence par ce qui dévie, pas par ce qui va bien.",
        "Des KPIs contractuels (SLA, taux de résolution, décroché) affichés avec leur cible et leur statut, pas seulement leur valeur.",
      ],
      outcome:
        "Le comité de pilotage dispose d'un point d'entrée unique : KPIs contractuels avec cibles, tendances mensuelles par domaine et alertes hiérarchisées, là où le suivi était auparavant éclaté entre plusieurs outils.",
    },
    {
      slug: "deal-analytics-due-diligence",
      name: "Deal Analytics — Due diligence M&A",
      sector: "Finance / Transaction Services — cabinet Big Four",
      year: "2023 — 2025",
      summary:
        "Objectiver la qualité du revenu d'une cible en vendor due diligence : revenu récurrent, churn, lifetime value et analyses like-for-like explorables en réunion client.",
      stack: ["Power BI", "DAX", "Alteryx", "SQL"],
      coverImage: {
        src: "/projects/kpmg-report.webp",
        alt: "Rapport Deal Analytics multi-onglets : performance des ventes par segment, répartition des commandes par catégorie et journal détaillé des transactions.",
      },
      images: [
        {
          src: "/projects/kpmg-cover.webp",
          alt: "Page de garde du rapport Deal Analytics avec navigation Overview, Report et About us.",
        },
      ],
      context:
        "Dans le cadre d'une vendor due diligence, l'équipe Deal Advisory devait objectiver la qualité du revenu d'une cible : tendances de ventes, churn client, revenu récurrent, analyses like-for-like.",
      constraint:
        "Des données transactionnelles brutes à fiabiliser, un rendu conforme à la charte graphique du cabinet, et des réunions client où chaque question appelle une exploration immédiate.",
      contributions: [
        "Préparation des données transactionnelles : nettoyage, construction de cohortes clients.",
        "Mesures DAX : revenu récurrent, churn, lifetime value, like-for-like.",
        "Rapport multi-onglets conforme à la charte graphique du cabinet.",
        "Filtres période / géographie / produit pour l'exploration en réunion client.",
      ],
      decisions: [
        "Des cohortes clients construites dès la préparation des données, pour que churn et rétention se calculent sans retraitement dans le modèle.",
        "Un onglet par question de due diligence (croissance, acquisition, churn, revenu récurrent, like-for-like) plutôt qu'un seul écran surchargé.",
        "Des filtres période / géographie / produit toujours visibles : le rapport sert de support d'exploration en direct, pas seulement de restitution figée.",
      ],
      outcome:
        "L'équipe deal explore les questions de qualité du revenu en séance — au lieu d'aller-retours d'extractions — avec des indicateurs ARR, churn et LTV calculés sur des données nettoyées et traçables.",
    },
    {
      slug: "pilotage-sell-in-budget-marketing",
      name: "Pilotage Sell-in & Budget Marketing",
      sector: "Industrie pharmaceutique",
      year: "2026",
      summary:
        "Remplacer des extractions Excel hebdomadaires par un modèle sémantique consolidé : CA, volumes, objectifs et budget marketing par gamme, pôle et client.",
      stack: ["Power BI", "DAX", "KNIME", "SSAS Tabular"],
      coverImage: {
        src: "/projects/magpharm-overview.webp",
        alt: "Vue Overview du tableau de bord : chiffre d'affaires, volumes, budget marketing et pourcentage consommé, réalisé vs objectif par gamme et top produits.",
      },
      images: [
        {
          src: "/projects/magpharm-cover.webp",
          alt: "Page d'accueil du tableau de bord Business Excellence avec menu de navigation Overview, Focus Sell-in, Réalisé vs Objectif et Budget Marketing.",
        },
      ],
      context:
        "La direction commerciale d'un laboratoire pharmaceutique pilotait ventes sell-in et budget marketing sur des extractions Excel hebdomadaires, sans vision consolidée par gamme, pôle et client.",
      constraint:
        "Passer d'exports hebdomadaires manuels à un modèle sémantique unique alimentant les revues de direction, avec un suivi budgétaire fiable par gamme.",
      contributions: [
        "Modèle sémantique SSAS Tabular : CA, volumes, objectifs, budget marketing.",
        "Mesures DAX réalisé vs objectif, contribution, consommation budgétaire.",
        "Volet de filtres sur mesure : produit, client, périmètre, division.",
        "Suivi du budget par gamme et détail des actions marketing réalisées.",
      ],
      decisions: [
        "Un modèle sémantique SSAS Tabular central plutôt qu'un empilement de fichiers : une seule définition du CA, des objectifs et du budget pour tous les rapports.",
        "Des mesures « réalisé vs objectif » avec contribution par gamme, pour lire en un écran où se joue l'atteinte de l'objectif.",
        "Un volet de filtres sur mesure (produit, client, périmètre, division) calqué sur la façon dont la direction commerciale raisonne.",
      ],
      outcome:
        "La direction commerciale suit CA, volumes et consommation budgétaire dans un espace unique mis à jour chaque semaine, décliné par gamme, pôle et client — là où chaque revue exigeait auparavant de reconstruire des extractions Excel.",
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
