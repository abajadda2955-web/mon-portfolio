import { education } from "@/data/education";
import { Helmet } from "react-helmet-async";

export default function Education() {
  return (
    <section className="space-y-10 max-w-4xl mx-auto">
      <Helmet>
        <title>Formation — Asma Bajadda</title>
        <meta name="description" content="Mon parcours académique : Licence Systèmes Informatiques Répartis, DEUST et formation scientifique." />
      </Helmet>

      <header className="space-y-4 border-b border-zinc-800 pb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight">Formation</h1>
        <p className="text-lg text-zinc-400">
          Mon parcours académique et diplômes obtenus.
        </p>
      </header>

      <div className="space-y-8">
        {education.map((edu, index) => (
          <article key={index} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            <header className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-bold text-zinc-100 leading-tight">
                  {edu.degree} {edu.field ? `en ${edu.field}` : ""}
                </h2>
                <h3 className="text-lg text-blue-400 font-medium mt-2">
                  {edu.school}{edu.location ? `, ${edu.location}` : ""}
                </h3>
              </div>
              <span className="inline-flex items-center justify-center px-4 py-1.5 bg-zinc-950 text-zinc-300 text-sm font-medium rounded-full border border-zinc-800 whitespace-nowrap self-start">
                {edu.start} — {edu.end || "Présent"}
              </span>
            </header>

            {edu.courses && edu.courses.length > 0 && (
              <div className="pt-6 border-t border-zinc-800">
                <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-4">Modules majeurs</h4>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map(course => (
                    <span key={course} className="px-3 py-1.5 bg-zinc-950 text-zinc-300 rounded-lg text-xs font-medium border border-zinc-800">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
