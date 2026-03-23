import { Helmet } from "react-helmet-async";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section className="grid gap-6">
      <Helmet>
        <title>Expériences — Asma Bajadda</title>
        <meta name="description" content="Mes expériences associatives et mes responsabilités au sein du COFE Club." />
      </Helmet>
      <h2 className="text-2xl font-semibold">Parcours</h2>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {experiences.map((exp, index) => (
          <article key={index} className="border rounded-2xl p-6 hover:shadow transition-shadow">
            <h3 className="font-semibold text-lg">{exp.title}</h3>
            <p className="font-medium text-primary mt-1">{exp.company}</p>
            <p className="text-sm text-muted-foreground mt-1">{exp.start} - {exp.end}</p>
            
            {exp.responsibilities && exp.responsibilities.length > 0 && (
              <ul className="mt-4 list-disc list-outside ml-4 text-sm space-y-1 text-muted-foreground">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
