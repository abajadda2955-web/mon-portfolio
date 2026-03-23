export type Project = {
  title: string;
  type: string;
  status: string;
  period?: string;
  tags: string[];
  summary: string;
  link?: string;
  repo?: string;
  image?: string;
  features?: string[];
  highlights?: string[];
};

export const projects: Project[] = [
  {
    title: "Système de Gestion de Coopérative Agricole",
    type: "Application desktop",
    status: "Projet académique",
    tags: ["Java", "Swing", "AWT", "MySQL", "JDBC", "UML", "JFreeChart"],
    summary: "Application de bureau destinée à une coopérative agricole. Elle permet de gérer le cycle de vente des produits agroalimentaires, de suivre les stocks des agriculteurs et d’analyser les performances commerciales via des outils statistiques.",
    repo: "https://github.com/salmabenboukhris/Projet_Cooperative.git",
    features: [
      "Gestion CRUD des entités principales",
      "Filtrage et recherche SQL paramétrée",
      "Authentification",
      "Hachage des mots de passe",
      "Visualisation statistique avec JFreeChart",
      "Navigation fluide entre les modules"
    ],
    highlights: ["Modélisation UML", "Architecture DAO", "Séparation UI / logique métier / accès aux données"]
  },
  {
    title: "Système de suivi de projets",
    type: "Application web",
    status: "Projet académique",
    tags: [], // Aucun listé explicitement sous un champ Technologies
    summary: "Application web permettant de gérer et suivre des projets au sein d’une entreprise de services. Le système centralise toutes les informations liées aux projets et facilite la coordination entre les intervenants.",
    repo: "",
    features: [
      "Gestion des projets (création, modification, consultation)",
      "Gestion des phases d’un projet",
      "Suivi de l’avancement (état des phases)",
      "Gestion des utilisateurs avec rôles",
      "Gestion des livrables associés aux phases",
      "Suivi de facturation et paiement des phases",
      "Recherche et filtrage des projets"
    ],
    highlights: ["Gestion multi-rôles avec permissions", "Organisation des projets en phases", "Suivi complet (technique et financier)"]
  },
  {
    title: "Restaurant Manager",
    type: "Application web",
    status: "Projet académique",
    tags: ["Spring Boot", "Thymeleaf", "Spring Security", "Chart.js"],
    summary: "Application web complète de gestion des réservations d’un restaurant.",
    repo: "https://github.com/abajadda2955-web/mini-projet-spring-thymeleaf.git",
    features: [
      "Création et suivi des réservations",
      "Attribution automatique des tables",
      "Gestion des statuts (CONFIRME, HONORE, ANNULE, NO_SHOW)",
      "Filtrage par date, statut, service et zone",
      "Dashboard avec statistiques",
      "Authentification et gestion des rôles"
    ],
    highlights: ["Sécurité avec Spring Security", "Dashboard dynamique", "Architecture MVC avec DTO", "Gestion globale des erreurs"]
  },
  {
    title: "Application de Gestion de Télécommunications",
    type: "Application desktop",
    status: "Projet académique",
    tags: ["Java", "Swing", "MySQL", "JDBC", "UML"],
    summary: "Application desktop de gestion de télécommunications avec conception UML complète et implémentation POO.",
    repo: "https://github.com/abajadda2955-web/Appariel.git",
    features: [
      "Interface graphique Swing",
      "Gestion CRUD sécurisée",
      "Persistance des données via JDBC",
      "Moteur de calcul du coût des appels"
    ],
    highlights: ["Héritage et polymorphisme", "POO", "UML", "Gestion métier spécifique"]
  }
];
