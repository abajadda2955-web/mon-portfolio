import { education } from "@/data/education";
import { Helmet } from "react-helmet-async";

export default function Education() {
  return (
    <section className="mx-auto max-w-4xl space-y-8 md:space-y-10">
      <Helmet>
        <title>Formation — Asma Bajadda</title>
        <meta
          name="description"
          content="Mon parcours académique : Licence Systèmes Informatiques Répartis, DEUST et formation scientifique."
        />
      </Helmet>

      <header className="space-y-3 border-b border-zinc-800 pb-6">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
          Formation
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
          Parcours académique
        </h1>
        <p className="text-base leading-8 text-zinc-400 sm:text-lg">
          Mon parcours universitaire et les diplômes obtenus.
        </p>
      </header>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <article
            key={index}
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl sm:p-8"
          >
            <header className="flex flex-col gap-4 border-b border-zinc-800 pb-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold leading-tight text-zinc-100">
                  {edu.degree}
                  {edu.field ? ` en ${edu.field}` : ""}
                </h2>
                <h3 className="text-base font-medium text-blue-400 sm:text-lg">
                  {edu.school}
                  {edu.location ? `, ${edu.location}` : ""}
                </h3>
              </div>

              <span className="inline-flex self-start rounded-full border border-zinc-700 bg-zinc-950 px-4 py-1.5 text-sm font-medium text-zinc-300">
                {edu.start} — {edu.end || "Présent"}
              </span>
            </header>

            {edu.highlights && edu.highlights.length > 0 && (
              <div className="mt-6">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
                  Points clés
                </h4>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-zinc-300 sm:text-base">
                  {edu.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-400" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {edu.courses && edu.courses.length > 0 && (
              <div className="mt-6">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
                  Modules majeurs
                </h4>
                <div className="mt-4 flex flex-wrap gap-2">
                  {edu.courses.map((course) => (
                    <span
                      key={course}
                      className="rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-1.5 text-xs font-medium text-zinc-300"
                    >
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