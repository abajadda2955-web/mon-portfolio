import { projects } from "@/data/projects";
import { Helmet } from "react-helmet-async";

export default function Projects() {
  return (
    <section className="space-y-8 md:space-y-10">
      <Helmet>
        <title>Projets — Asma Bajadda</title>
        <meta
          name="description"
          content="Découvrez mes projets académiques et techniques en développement logiciel, applications web et desktop."
        />
      </Helmet>

      <header className="space-y-3 border-b border-zinc-800 pb-6">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
          Réalisations
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
          Mes projets
        </h1>
        <p className="max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg">
          Une sélection de projets académiques et techniques qui illustrent mon
          intérêt pour le développement logiciel, les applications web et les
          systèmes de gestion.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex h-full flex-col rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl transition hover:border-zinc-700 sm:p-8"
          >
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
                  {project.type}
                </span>
                <span className="rounded-full border border-zinc-700 bg-zinc-950 px-3 py-1 text-xs font-medium text-zinc-300">
                  {project.status}
                </span>
              </div>

              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-zinc-100">
                  {project.title}
                </h2>
                <p className="text-sm leading-7 text-zinc-300 sm:text-base">
                  {project.summary}
                </p>
              </div>
            </div>

            {project.tags.length > 0 && (
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-zinc-200">
                  Technologies
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-1.5 text-xs font-medium text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.highlights && project.highlights.length > 0 && (
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-zinc-200">
                  Points forts
                </h3>
                <ul className="mt-3 space-y-2 text-sm leading-7 text-zinc-400">
                  {project.highlights.slice(0, 3).map((highlight) => (
                    <li key={highlight} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-400" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <footer className="mt-8 flex flex-wrap gap-3 border-t border-zinc-800 pt-6">
              {project.link && (
                <a
                  className="inline-flex items-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Démo en ligne
                </a>
              )}

              {project.repo && (
                <a
                  className="inline-flex items-center rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-2 text-sm font-semibold text-zinc-100 transition hover:bg-zinc-700"
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Code source
                </a>
              )}
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}