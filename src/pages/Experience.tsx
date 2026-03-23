import { Helmet } from "react-helmet-async";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section className="mx-auto max-w-4xl space-y-8 md:space-y-10">
      <Helmet>
        <title>Expériences — Asma Bajadda</title>
        <meta
          name="description"
          content="Mes expériences associatives et mes responsabilités au sein du COFE Club."
        />
      </Helmet>

      <header className="space-y-3 border-b border-zinc-800 pb-6">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
          Parcours
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
          Expérience associative
        </h1>
        <p className="text-base leading-8 text-zinc-400 sm:text-lg">
          Mes rôles, responsabilités et contributions au sein des clubs et
          organisations.
        </p>
      </header>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <article
            key={index}
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl sm:p-8"
          >
            <header className="flex flex-col gap-4 border-b border-zinc-800 pb-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-zinc-100">
                  {exp.title}
                </h2>
                <h3 className="text-base font-medium text-blue-400 sm:text-lg">
                  {exp.company}
                </h3>
                {exp.location && (
                  <p className="text-sm text-zinc-400">{exp.location}</p>
                )}
              </div>

              <span className="inline-flex self-start rounded-full border border-zinc-700 bg-zinc-950 px-4 py-1.5 text-sm font-medium text-zinc-300">
                {exp.start} — {exp.end}
              </span>
            </header>

            {exp.description && (
              <p className="mt-5 text-sm leading-7 text-zinc-300 sm:text-base">
                {exp.description}
              </p>
            )}

            {exp.responsibilities?.length > 0 && (
              <div className="mt-6">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
                  Responsabilités principales
                </h4>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-zinc-300 sm:text-base">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-400" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}