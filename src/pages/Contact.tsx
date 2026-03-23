import { profile } from "@/data/profile";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <section className="mx-auto max-w-3xl space-y-8 md:space-y-10">
      <Helmet>
        <title>Contact — Asma Bajadda</title>
        <meta
          name="description"
          content="Contactez-moi pour toute opportunité de stage PFE ou collaboration technique. Retrouvez mes coordonnées professionnelles."
        />
      </Helmet>

      <header className="space-y-3 border-b border-zinc-800 pb-6">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
          Contact
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
          Me contacter
        </h1>
        <p className="text-base leading-8 text-zinc-400 sm:text-lg">
          Je suis ouverte aux opportunités de stage PFE, aux échanges académiques
          et aux collaborations techniques.
        </p>
      </header>

      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl sm:p-8 lg:p-10">
        <div className="space-y-8">
          {profile.email && (
            <div className="border-b border-zinc-800 pb-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                Email
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-2 inline-block break-all text-lg font-medium text-blue-400 transition hover:text-blue-300 hover:underline sm:text-xl"
              >
                {profile.email}
              </a>
            </div>
          )}

          {profile.phone && (
            <div className="border-b border-zinc-800 pb-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                Téléphone
              </p>
              <p className="mt-2 text-lg font-medium text-zinc-100 sm:text-xl">
                {profile.phone}
              </p>
            </div>
          )}

          {profile.location && (
            <div className="border-b border-zinc-800 pb-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                Localisation
              </p>
              <p className="mt-2 text-lg font-medium text-zinc-100 sm:text-xl">
                {profile.location}
              </p>
            </div>
          )}

          {profile.socials?.some((social) => social.href) && (
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                Réseaux
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {profile.socials.map((social, index) =>
                  social.href ? (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-xl border border-zinc-700 bg-zinc-800 px-5 py-3 text-sm font-semibold text-zinc-100 transition hover:bg-zinc-700"
                    >
                      {social.label}
                    </a>
                  ) : null
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}