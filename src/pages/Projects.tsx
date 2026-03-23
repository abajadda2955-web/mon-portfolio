import { projects } from "@/data/projects";
import { Helmet } from "react-helmet-async";

export default function Projects() {
  return (
    <section className="space-y-10">
      <Helmet>
        <title>Projets — Asma Bajadda</title>
        <meta name="description" content="Découvrez mes projets académiques et techniques en développement logiciel, applications web et desktop." />
      </Helmet>
      
      <header className="space-y-4 border-b border-zinc-800 pb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight">Projets</h1>
        <p className="text-lg text-zinc-400 max-w-2xl">
          Une sélection de mes réalisations académiques et techniques, mettant en pratique mes compétences en développement.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {projects.map(p => (
          <article key={p.title} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col h-full hover:border-zinc-700 transition-colors">
            <h2 className="text-2xl font-bold text-zinc-100 mb-4">{p.title}</h2>
            <p className="text-zinc-300 mb-8 flex-grow leading-relaxed">
              {p.summary}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {p.tags.map(t => (
                <span key={t} className="px-3 py-1.5 bg-zinc-950 text-zinc-300 rounded-lg text-xs font-medium border border-zinc-800">
                  {t}
                </span>
              ))}
            </div>
            
            <footer className="flex flex-wrap gap-6 text-sm font-semibold pt-6 border-t border-zinc-800 mt-auto">
              {p.link && (
                <a className="text-blue-400 hover:text-blue-300 underline underline-offset-4 decoration-blue-400/30 hover:decoration-blue-300 transition-colors" href={p.link} target="_blank" rel="noreferrer">
                  Démo en ligne
                </a>
              )}
              {p.repo && (
                <a className="text-zinc-300 hover:text-white underline underline-offset-4 decoration-zinc-600 hover:decoration-zinc-400 transition-colors" href={p.repo} target="_blank" rel="noreferrer">
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
