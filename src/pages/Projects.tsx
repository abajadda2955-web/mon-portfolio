import { projects } from "@/data/projects";
import { Helmet } from "react-helmet-async";

export default function Projects() {
  return (
    <section className="space-y-8 animate-in fade-in duration-500">
      <Helmet>
        <title>Projets — Asma Bajadda</title>
        <meta name="description" content="Découvrez mes projets académiques et techniques en développement logiciel, applications web et desktop." />
      </Helmet>
      
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Projets</h2>
        <p className="text-muted-foreground">Une sélection de mes réalisations académiques et techniques.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map(p => (
          <article key={p.title} className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/40 bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 hover:border-primary/30">
            <div className="space-y-4">
              <h3 className="font-bold text-xl group-hover:text-primary transition-colors">{p.title}</h3>
              <p className="text-sm text-muted-foreground/90 leading-relaxed">{p.summary}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {p.tags.map(t => <span key={t} className="px-2.5 py-1 bg-secondary/60 text-secondary-foreground rounded-md text-xs font-mono">{t}</span>)}
              </div>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium">
              {p.link && <a className="text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1" href={p.link} target="_blank" rel="noreferrer">Démo en ligne ↗</a>}
              {p.repo && <a className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1" href={p.repo} target="_blank" rel="noreferrer">Code source ↗</a>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
