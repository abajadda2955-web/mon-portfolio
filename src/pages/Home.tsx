import { profile } from "@/data/profile";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <section className="space-y-12">
      <Helmet>
        <title>{profile.name} — Portfolio</title>
        <meta name="description" content={`${profile.role}. Découvrez mes projets, mon parcours académique et mes compétences.`} />
      </Helmet>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8 lg:p-12 shadow-xl">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-100 tracking-tight leading-tight">
            {profile.name}
          </h1>
          <h2 className="text-xl sm:text-2xl font-medium text-blue-400">
            {profile.role}
          </h2>
          <p className="text-lg text-zinc-300 leading-relaxed">
            {profile.about}
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <Link to="/projects" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-xl font-semibold transition-colors shadow-md text-base">
              Explorer mes projets
            </Link>
            <Link to="/contact" className="bg-zinc-800 hover:bg-zinc-700 text-zinc-100 border border-zinc-700 px-8 py-3.5 rounded-xl font-semibold transition-colors text-base">
              Me contacter
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8 lg:p-12 shadow-xl">
        <h3 className="text-2xl font-bold text-zinc-100 mb-8 border-b border-zinc-800 pb-4">
          Compétences Techniques
        </h3>
        <div className="flex flex-wrap gap-3">
          {profile.skills.map(skill => (
            <span key={skill} className="px-4 py-2 bg-zinc-950 text-zinc-200 rounded-lg text-sm font-medium border border-zinc-800 shadow-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
