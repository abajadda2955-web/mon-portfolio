import { certifications } from "@/data/certifications";
import { Helmet } from "react-helmet-async";

export default function Certifications() {
  return (
    <section className="grid gap-6">
      <Helmet>
        <title>Certifications — Asma Bajadda</title>
        <meta name="description" content="Retrouvez mes certifications et qualifications techniques." />
      </Helmet>
      <h2 className="text-2xl font-semibold">Certifications</h2>
      
      {certifications.length === 0 ? (
        <p className="text-muted-foreground italic">Aucune certification à afficher pour le moment.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <article key={index} className="border rounded-2xl p-4 hover:shadow">
              <h3 className="font-semibold text-lg">{cert.title}</h3>
              <p className="text-muted-foreground">{cert.issuer}</p>
              <p className="text-sm mt-1">Obtenue en : {cert.issueDate}</p>
              {cert.credentialUrl && (
                <div className="mt-4">
                  <a className="underline text-sm" href={cert.credentialUrl} target="_blank" rel="noreferrer">Voir le certificat</a>
                </div>
              )}
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
