import { certifications } from "@/data/certifications";
import { Helmet } from "react-helmet-async";

export default function Certifications() {
  return (
    <section className="space-y-8 max-w-4xl mx-auto animate-in fade-in duration-500">
      <Helmet>
        <title>Certifications — Asma Bajadda</title>
        <meta name="description" content="Retrouvez mes certifications et qualifications techniques." />
      </Helmet>
      
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Certifications</h2>
        <p className="text-muted-foreground">Validation de mes compétences techniques.</p>
      </div>
      
      {certifications.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border/60 p-12 text-center bg-muted/5 flex flex-col items-center justify-center">
          <span className="text-4xl mb-4 opacity-50">🎓</span>
          <p className="text-muted-foreground text-lg">Aucune certification à afficher pour le moment.</p>
          <p className="text-sm text-muted-foreground/60 mt-2">Section en cours de construction.</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <article key={index} className="flex flex-col border border-border/40 rounded-2xl p-6 bg-card hover:shadow-lg transition-all hover:-translate-y-1 hover:border-primary/40">
              <h3 className="font-bold text-lg leading-tight mb-2 group-hover:text-primary transition-colors">{cert.title}</h3>
              <p className="text-sm font-medium text-muted-foreground mb-4">{cert.issuer}</p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/20">
                <p className="text-xs text-muted-foreground font-mono">{cert.issueDate}</p>
                {cert.credentialUrl && (
                  <a className="text-xs font-medium bg-primary/10 text-primary hover:bg-primary px-3 py-1.5 rounded-full transition-colors hover:text-primary-foreground" href={cert.credentialUrl} target="_blank" rel="noreferrer">
                    Voir le certificat ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
