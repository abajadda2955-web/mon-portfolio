import { certifications } from "@/data/certifications";
import { Helmet } from "react-helmet-async";

export default function Certifications() {
  return (
    <section className="space-y-10">
      <Helmet>
        <title>Certifications — Asma Bajadda</title>
        <meta name="description" content="Retrouvez mes certifications et qualifications techniques." />
      </Helmet>
      
      <header className="space-y-4 border-b border-zinc-800 pb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight">Certifications</h1>
        <p className="text-lg text-zinc-400 max-w-2xl">
          Validation de mes compétences techniques à travers des certifications reconnues.
        </p>
      </header>
      
      {certifications.length === 0 ? (
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-12 text-center shadow-xl">
          <p className="text-zinc-400 text-lg">Aucune certification à afficher pour le moment.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {certifications.map((cert, index) => (
            <article key={index} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col hover:border-zinc-700 transition-colors">
              <h2 className="text-xl font-bold text-zinc-100 mb-3 leading-tight">{cert.title}</h2>
              <h3 className="text-base text-blue-400 font-medium mb-6">{cert.issuer}</h3>
              
              <footer className="mt-auto pt-6 border-t border-zinc-800 flex items-center justify-between">
                <span className="text-sm font-medium text-zinc-500 bg-zinc-950 px-3 py-1 rounded-md border border-zinc-800">
                  {cert.issueDate}
                </span>
                {cert.credentialUrl && (
                  <a className="text-sm font-semibold text-zinc-300 hover:text-white underline underline-offset-4 decoration-zinc-600 hover:decoration-zinc-400 transition-colors" href={cert.credentialUrl} target="_blank" rel="noreferrer">
                    Voir ↗
                  </a>
                )}
              </footer>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
