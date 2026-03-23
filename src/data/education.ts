export type Education = {
  school: string;
  degree: string;
  field?: string;
  location?: string;
  start: string;
  end?: string;
  gpa?: string;
  courses?: string[];
  highlights?: string[];
};

export const education: Education[] = [
  {
    school: "Faculté des Sciences et Techniques",
    degree: "Licence",
    field: "Systèmes Informatiques Répartis",
    location: "Marrakech",
    start: "2025",
    end: "Présent"
  },
  {
    school: "Faculté des Sciences et Techniques",
    degree: "DEUST",
    field: "Mathématiques, Informatique, Physique, Chimie",
    location: "Marrakech",
    start: "2023",
    end: "2025"
  },
  {
    school: "Lycée Sidi Ahmed Benacer",
    degree: "Baccalauréat",
    field: "Sciences Mathématiques",
    location: "Zagora",
    start: "2022",
    end: "2023"
  }
];
