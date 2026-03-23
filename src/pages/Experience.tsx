import { Helmet } from "react-helmet-async";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section className="space-y-8 max-w-3xl mx-auto animate-in fade-in duration-500">
      <Helmet>
        <title>Expériences — Asma Bajadda</title>
        <meta name="description" content="Mes expériences associatives et mes responsabilités au sein du COFE Club." />
      </Helmet>
      
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Parcours & Engagements</h2>
        <p className="text-muted-foreground">Mes rôles et responsabilités associatives.</p>
      </div>
      
      <div className="relative border-l border-border/50 ml-3 space-y-8 pt-2">
        {experiences.map((exp, index) => (
          <article key={index} className="relative pl-8 group">
            <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-2 ring-4 ring-background group-hover:scale-125 transition-transform" />
            <div className="flex flex-col gap-1 mb-3">
              <h3 className="font-bold text-xl">{exp.title}</h3>
              <div className="flex items-center gap-2 text-sm">
                <span className="font-medium text-primary">{exp.company}</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground/80">{exp.start} — {exp.end}</span>
              </div>
            </div>
            
            {exp.responsibilities && exp.responsibilities.length > 0 && (
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground/90">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-primary/50 mt-0.5">▹</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
