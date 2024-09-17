export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Maxima Parc",
  description: "La solution ultime pour gérer efficacement votre agence de location de voitures.",
  url: "https://maxima-parc.vercel.app/",
  ogImage: "https://maxima-parc.vercel.app/opengraph-image.png",
  author: {
    name: "Maxima Parc",
    twitter: "https://twitter.com/maximaparc",
    instagram: "https://instagram.com/maximaparc",
    tiktok: "https://www.tiktok.com/@maximaparc",
    facebook: "https://www.facebook.com/maximaparc/",
  },
  keywords: [
    "gestion de location de voitures",
    "logiciel de gestion de flotte",
    "réservations de véhicules",
    "gestion de clients",
    "optimisation d'agence de location",
    "tableau de bord intuitif",
    "rapports instantanés",
    "gestion sans stress",
    "contrôle total d'agence",
    "suivi de véhicules",
    "gestion de maintenance",
    "facturation automatique",
    "planification de réservations",
    "numérisation de documents",
    "alertes de maintenance",
    "gestion de flotte personnalisable",
    "coordination d'équipe",
    "suivi intelligent des réservations",
    "rappels de maintenance",
    "gestion d'entreprise simplifiée",
    "logiciel de location de voitures",
    "optimisation de flotte automobile",
    "gestion de parc automobile",
    "solution de gestion pour agence de location",
    "automatisation de processus de location",
    "analyse de performance de flotte",
    "gestion de revenus de location",
    "suivi d'entretien de véhicules",
    "optimisation de taux d'utilisation",
    "gestion de contrats de location"
  ],
  navItems: [
    { title: "Accueil", href: "#hero" },
    { title: "Fonctionnalités", href: "#features" },
    { title: "Tarifs", href: "#pricing" },
    { title: "Avis Client", href: "#testimonials" },
    // { title: "Contactez nous", href: "#calltoaction" },
  ],
  mainFeatures: [
    {
      title: "Gestion des clients",
      description: "Numérisation automatique des documents (CIN, Permis), base de données sécurisée, et suivi personnalisé pour un service optimal.",
      icon: "users"
    },
    {
      title: "Gestion des réservations",
      description: "Planifiez facilement, générez des contrats et factures automatiquement, et suivez les disponibilités en temps réel.",
      icon: "calendar"
    },
    {
      title: "Gestion des véhicules",
      description: "Recevez des alertes de maintenance, suivez l'état de chaque véhicule, et assurez une gestion impeccable et sans tracas.",
      icon: "car"
    }
  ],
  pricing: [
    {
      name: "PACK STANDARD",
      price: "1990 DHs / Année",
      features: [
        "Gestion optimisée pour jusqu'à 12 véhicules",
        "Gestion optimisée pour jusqu'à 500 clients",
        "Gestion optimisée pour jusqu'à 1000 réservations",
        "Formation Gratuite",
        "Support Disponible 24/7"
      ]
    },
    {
      name: "PACK PRO",
      price: "2440 DHs / Année",
      features: [
        "Gestion optimisée pour à partir de 13 jusqu'à 20 véhicules",
        "Gestion optimisée pour jusqu'à 1000 clients",
        "Gestion optimisée pour jusqu'à 1500 réservations",
        "Installation Gratuite",
        "Formation Gratuite",
        "Support Disponible 24/7"
      ],
      popular: true
    },
    {
      name: "PACK VIP",
      price: "5500 DHs / Année",
      features: [
        "Gestion de véhicules sans limite",
        "Gestion de clients sans limite",
        "Gestion de réservations sans limite",
        "Gestion financière",
        "Installation Gratuite",
        "Formation Gratuite",
        "Support Disponible 24/7"
      ]
    }
  ]
};