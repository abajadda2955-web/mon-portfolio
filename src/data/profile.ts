export type Profile = {
  name: string;
  role: string;
  location: string;
  phone: string;
  email: string;
  socials: { label: string; href: string }[];
  about: string;
  skills: string[];
  languages: string[];
  softSkills: string[];
  objective: string;
};

export const profile: Profile = {
  name: "Asma Bajadda",
  role: "Étudiante en Licence Systèmes Informatiques Répartis",
  location: "Maroc",
  phone: "06 19 36 70 07",
  email: "asmaabajadda@gmail.com",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/asma-bajadda-096790332/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B9xTcvmRTTkSY0919%2Bjx7xQ%3D%3D" },
    { label: "GitHub", href: "https://github.com/abajadda2955-web" }
  ],
  about: "Étudiante en Licence Systèmes Informatiques Répartis à la Faculté des Sciences et Techniques de Marrakech, spécialisée en développement web et logiciel. Solides compétences en Java, PHP/Laravel et bases de données relationnelles. Passionnée par les architectures distribuées et la conception orientée objet.",
  skills: [
    "Java", "PHP", "HTML5", "CSS3", "SQL",
    "Laravel", "Swing", "MySQL", "JDBC",
    "Git", "GitHub", "XAMPP", "UML",
    "Programmation Orientée Objet", "Design Patterns", "Réseaux (Notions fondamentales)"
  ],
  languages: ["Arabe (langue maternelle)", "Français (courant)", "Anglais (intermédiaire)"],
  softSkills: ["Autonomie", "Rigueur", "Esprit d’initiative", "Travail en équipe", "Gestion du stress"],
  objective: "Je recherche un stage PFE pour renforcer mes compétences techniques dans un environnement professionnel innovant."
};
