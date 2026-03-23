import { certifications } from "@/data/certifications";
import { Helmet } from "react-helmet-async";

export default function Certifications() {
  return (
    <section className="space-y-8 md:space-y-10">
      <Helmet>
        <title>Certifications — Asma Bajadda</title>
        <meta
          name="description"
          content="Retrouvez mes certifications et qualifications techniques."
        />
      </Helmet>

      <header className="space-y-3 border-b border-zinc-800 pb-6">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
          Certifications
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
          Certifications & validations
        </h1>
        <p className="max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg">
          Cette section regroupe les certifications techniques ou académiques
          obtenues.
        </p>
      </header>

      {certifications.length === 0 ? (
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-10 text-center shadow-xl sm:p-12">
          <h2 className="text-xl font-semibold text-zinc-100">
            Aucune certification pour le moment
          </h2>
          <p className="mt-3 text-sm leading-7 text-zinc-400 sm:text-base">
            Cette section pourra être mise à jour dès l’obtention de nouvelles
            certifications ou validations.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <article
              key={index}
              className="flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl sm:p-8"
            >
              <h2 className="text-xl font-bold leading-tight text-zinc-100">
                {cert.title}
              </h2>
              <h3 className="mt-2 text-base font-medium text-blue-400">
                {cert.issuer}
              </h3>

              <div className="mt-6 border-t border-zinc-800 pt-5">
                <p className="text-sm text-zinc-400">
                  Date :{" "}
                  <span className="font-medium text-zinc-300">
                    {cert.issueDate}
                  </span>
                </p>
              </div>

              {cert.credentialUrl && (
                <a
                  className="mt-6 inline-flex items-center self-start rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-2 text-sm font-semibold text-zinc-100 transition hover:bg-zinc-700"
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Voir la certification
                </a>
              )}
            </article>
          ))}
        </div>
      )}
    </section>
  );
}