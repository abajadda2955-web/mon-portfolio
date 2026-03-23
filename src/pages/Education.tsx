import { education } from "@/data/education";
import { Helmet } from "react-helmet-async";

export default function Education() {
  return (
    <section className="grid gap-6">
      <Helmet>
        <title>Formation — Asma Bajadda</title>
        <meta name="description" content="Mon parcours académique : Licence Systèmes Informatiques Répartis, DEUST et formation scientifique." />
      </Helmet>
      <h2 className="text-2xl font-semibold">Formation</h2>
      <div className="grid gap-6">
        {education.map((edu, index) => (
          <article key={index} className="border rounded-2xl p-4 hover:shadow">
            <h3 className="font-semibold text-lg">{edu.degree} {edu.field ? `en ${edu.field}` : ""}</h3>
            <p className="text-muted-foreground">{edu.school}{edu.location ? `, ${edu.location}` : ""}</p>
            <p className="text-sm mt-1">{edu.start} - {edu.end || "Présent"}</p>
            {edu.courses && edu.courses.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {edu.courses.map(course => <span key={course} className="px-2 py-1 bg-secondary rounded-md">{course}</span>)}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
