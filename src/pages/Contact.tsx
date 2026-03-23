import { profile } from "@/data/profile";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <section className="max-w-2xl mx-auto space-y-8 animate-in fade-in zoom-in-95 duration-500">
      <Helmet>
        <title>Contact — Asma Bajadda</title>
        <meta name="description" content="Contactez-moi pour toute opportunité de stage PFE ou collaboration technique. Retrouvez mes coordonnées professionnelles." />
      </Helmet>
      
      <div className="space-y-2 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Me contacter</h2>
        <p className="text-muted-foreground text-lg">Je suis ouverte à toute opportunité pour mon PFE.</p>
      </div>
      
      <div className="rounded-3xl border border-border/30 bg-card/50 p-8 md:p-10 shadow-xl backdrop-blur-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
        
        <h3 className="font-semibold text-xl mb-8 text-foreground/90">Informations de contact</h3>
        
        <ul className="space-y-6">
          {profile.email && (
            <li className="flex flex-col gap-1.5 group">
              <span className="text-sm font-medium text-primary/80 uppercase tracking-widest">Email</span>
              <a href={`mailto:${profile.email}`} className="text-xl md:text-2xl font-medium text-foreground hover:text-primary transition-colors break-all">
                {profile.email}
              </a>
            </li>
          )}
          {profile.phone && (
            <li className="flex flex-col gap-1.5 group">
              <span className="text-sm font-medium text-primary/80 uppercase tracking-widest">Téléphone</span>
              <span className="text-xl md:text-2xl font-medium text-foreground">{profile.phone}</span>
            </li>
          )}
          {profile.location && (
            <li className="flex flex-col gap-1.5 group">
              <span className="text-sm font-medium text-primary/80 uppercase tracking-widest">Localisation</span>
              <span className="text-xl md:text-2xl font-medium text-foreground">{profile.location}</span>
            </li>
          )}
        </ul>

        {profile.socials && profile.socials.length > 0 && profile.socials.some(s => s.href) && (
          <div className="mt-12 pt-8 border-t border-border/40">
            <h4 className="text-sm font-medium text-primary/80 uppercase tracking-widest mb-6">Réseaux professionnels</h4>
            <div className="flex flex-wrap gap-4">
              {profile.socials.map((social, index) => (
                social.href ? (
                  <a key={index} href={social.href} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-secondary/80 text-sm font-semibold hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:-translate-y-0.5 transition-all">
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
