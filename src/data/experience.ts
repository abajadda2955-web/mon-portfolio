export type Experience = {
  title: string;
  company: string;
  location?: string;
  start: string;
  end: string;
  description?: string;
  responsibilities: string[];
};

export const experiences: Experience[] = [
  {
    title: "Présidente",
    company: "COFE Club, Faculté des Sciences et Techniques de Marrakech",
    start: "2025",
    end: "Présent",
    responsibilities: [
      "Coordination des activités",
      "Gestion d’équipe",
      "Organisation d’événements académiques et professionnels"
    ]
  },
  {
    title: "Secrétaire Générale",
    company: "COFE Club",
    start: "2024",
    end: "2025",
    responsibilities: [
      "Gestion administrative",
      "Organisation des activités"
    ]
  }
];
