import { profile } from "@/data/profile";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <section className="grid gap-10 md:grid-cols-[1fr_400px] items-center py-10 animate-in fade-in duration-500">
      <Helmet>
        <title>{profile.name} — Portfolio</title>
        <meta name="description" content={`${profile.role}. Découvrez mes projets, mon parcours académique et mes compétences.`} />
      </Helmet>

      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Hello, I'm <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{profile.name}</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            {profile.role}
          </p>
        </div>
        
        <p className="text-lg leading-relaxed text-muted-foreground/80 max-w-xl">
          {profile.about}
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <Link to="/projects" className="inline-flex h-11 items-center justify-center rounded-md bg-foreground px-8 text-sm font-medium text-background shadow transition-all hover:scale-105 active:scale-95">
            Voir les projets
          </Link>
          <Link to="/contact" className="inline-flex h-11 items-center justify-center rounded-md border border-border/40 bg-card px-8 text-sm font-medium shadow-sm transition-all hover:bg-accent hover:text-accent-foreground hover:scale-105 active:scale-95">
            Me contacter
          </Link>
        </div>

        <div className="pt-8">
          <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">Compétences Phares</h3>
          <div className="flex flex-wrap gap-2">
            {profile.skills.slice(0, 8).map(skill => (
              <span key={skill} className="px-3 py-1.5 bg-secondary/30 text-secondary-foreground rounded-md text-xs font-medium border border-border/20 transition-all hover:bg-secondary/50 cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="order-first md:order-last w-full max-w-[320px] md:max-w-sm mx-auto relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
        <div className="relative aspect-square rounded-2xl border border-border/30 bg-card overflow-hidden shadow-2xl flex items-center justify-center">
            {/* Placeholder for an image, using initials for minimalist feel */}
            <span className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-foreground/80 to-muted/20 select-none">
              {profile.name.split(' ').map(n => n[0]).join('')}
            </span>
        </div>
      </div>
    </section>
  );
}
