import { Helmet } from "react-helmet-async";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section className="space-y-10 max-w-4xl mx-auto">
      <Helmet>
        <title>Expériences — Asma Bajadda</title>
        <meta name="description" content="Mes expériences associatives et mes responsabilités au sein du COFE Club." />
      </Helmet>
      
      <header className="space-y-4 border-b border-zinc-800 pb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight">Expérience Associative</h1>
        <p className="text-lg text-zinc-400">
          Mes rôles, projets et responsabilités au sein des clubs et organisations.
        </p>
      </header>
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <article key={index} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-bold text-zinc-100">{exp.title}</h2>
                <h3 className="text-lg text-blue-400 font-medium mt-1">{exp.company}</h3>
              </div>
              <span className="inline-flex items-center justify-center px-4 py-1.5 bg-zinc-950 text-zinc-300 text-sm font-medium rounded-full border border-zinc-800 whitespace-nowrap self-start">
                {exp.start} — {exp.end}
              </span>
            </header>
            
            {exp.responsibilities && exp.responsibilities.length > 0 && (
              <div className="pt-6 border-t border-zinc-800">
                <ul className="list-disc list-inside space-y-3 text-zinc-300 leading-relaxed">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="pl-2 marker:text-zinc-600">{resp}</li>
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
