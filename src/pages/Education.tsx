import { education } from "@/data/education";
import { Helmet } from "react-helmet-async";

export default function Education() {
  return (
    <section className="space-y-8 max-w-3xl mx-auto animate-in fade-in duration-500">
      <Helmet>
        <title>Formation — Asma Bajadda</title>
        <meta name="description" content="Mon parcours académique : Licence Systèmes Informatiques Répartis, DEUST et formation scientifique." />
      </Helmet>

      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Formation</h2>
        <p className="text-muted-foreground">Mon parcours académique et diplômes obtenus.</p>
      </div>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <article key={index} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-border/40 pb-6 last:border-0 hover:bg-muted/10 p-4 -mx-4 rounded-xl transition-colors">
            <div className="space-y-1">
              <h3 className="font-bold text-lg">{edu.degree} {edu.field ? `en ${edu.field}` : ""}</h3>
              <p className="font-medium text-primary/80">{edu.school}{edu.location ? `, ${edu.location}` : ""}</p>
              {edu.courses && edu.courses.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2 pt-2">
                  {edu.courses.map(course => <span key={course} className="px-2.5 py-1 bg-secondary/40 text-secondary-foreground rounded-md text-xs font-mono">{course}</span>)}
                </div>
              )}
            </div>
            <div className="shrink-0 text-sm font-mono text-muted-foreground bg-secondary/20 px-3 py-1 rounded-full self-start">
              {edu.start} — {edu.end || "Présent"}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
