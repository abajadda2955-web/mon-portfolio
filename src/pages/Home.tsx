import { profile } from "@/data/profile";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <section className="space-y-8 md:space-y-10">
      <Helmet>
        <title>{profile.name} — Portfolio</title>
        <meta
          name="description"
          content={`${profile.role}. Découvrez mes projets, mon parcours académique et mes compétences.`}
        />
      </Helmet>

      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl sm:p-8 lg:p-10">
        <div className="max-w-3xl space-y-5">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
            Portfolio
          </p>

          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
            <h2 className="text-lg font-medium text-zinc-300 sm:text-xl lg:text-2xl">
              {profile.role}
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
            {profile.about}
          </p>

          <div className="rounded-xl border border-blue-500/20 bg-blue-500/10 p-4">
            <p className="text-sm font-semibold text-blue-400">
              Objectif actuel
            </p>
            <p className="mt-2 text-sm leading-7 text-zinc-300 sm:text-base">
              {profile.objective}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              to="/projects"
              className="inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              Voir mes projets
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center rounded-xl border border-zinc-700 bg-zinc-800 px-6 py-3 text-sm font-semibold text-zinc-100 transition hover:bg-zinc-700"
            >
              Me contacter
            </Link>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl sm:p-8">
          <h3 className="text-2xl font-bold text-zinc-100">
            Compétences techniques
          </h3>
          <p className="mt-2 text-sm leading-7 text-zinc-400 sm:text-base">
            Technologies et outils que j’utilise dans mes projets académiques et
            personnels.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {profile.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-2 text-sm font-medium text-zinc-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl">
            <h3 className="text-xl font-bold text-zinc-100">Langues</h3>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-zinc-300 sm:text-base">
              {profile.languages.map((language) => (
                <li key={language} className="border-b border-zinc-800 pb-3 last:border-b-0 last:pb-0">
                  {language}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl">
            <h3 className="text-xl font-bold text-zinc-100">Qualités</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {profile.softSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-zinc-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}