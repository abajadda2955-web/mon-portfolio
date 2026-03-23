import { profile } from "@/data/profile";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <section className="space-y-10 max-w-3xl mx-auto">
      <Helmet>
        <title>Contact — Asma Bajadda</title>
        <meta name="description" content="Contactez-moi pour toute opportunité de stage PFE ou collaboration technique. Retrouvez mes coordonnées professionnelles." />
      </Helmet>
      
      <header className="space-y-4 border-b border-zinc-800 pb-6 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight">Contact</h1>
        <p className="text-lg text-zinc-400">
          Je suis ouverte à toute opportunité professionnelle et pour mon PFE.
        </p>
      </header>
      
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8 lg:p-12 shadow-xl">
        <h2 className="text-2xl font-bold text-zinc-100 mb-8 border-b border-zinc-800 pb-4">
          Mes Coordonnées
        </h2>
        
        <ul className="space-y-8">
          {profile.email && (
            <li className="flex flex-col gap-2">
              <span className="text-sm font-bold text-zinc-500 uppercase tracking-wider">Email</span>
              <a href={`mailto:${profile.email}`} className="text-xl text-blue-400 hover:text-blue-300 hover:underline font-medium break-words transition-colors">
                {profile.email}
              </a>
            </li>
          )}
          {profile.phone && (
            <li className="flex flex-col gap-2">
              <span className="text-sm font-bold text-zinc-500 uppercase tracking-wider">Téléphone</span>
              <span className="text-xl text-zinc-100 font-medium">{profile.phone}</span>
            </li>
          )}
          {profile.location && (
            <li className="flex flex-col gap-2">
              <span className="text-sm font-bold text-zinc-500 uppercase tracking-wider">Localisation</span>
              <span className="text-xl text-zinc-100 font-medium">{profile.location}</span>
            </li>
          )}
        </ul>

        {profile.socials && profile.socials.length > 0 && profile.socials.some(s => s.href) && (
          <div className="mt-12 pt-8 border-t border-zinc-800">
            <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-6">
              Réseaux & Plateformes
            </h3>
            <div className="flex flex-wrap gap-4">
              {profile.socials.map((social, index) => (
                social.href ? (
                  <a key={index} href={social.href} target="_blank" rel="noreferrer" className="bg-zinc-800 hover:bg-zinc-700 text-zinc-100 px-6 py-3 rounded-xl font-medium border border-zinc-700 transition-colors shadow-sm">
                    {social.label}
                  </a>
                ) : null
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
