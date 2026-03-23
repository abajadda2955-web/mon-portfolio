import { profile } from "@/data/profile";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <section className="grid gap-6">
      <Helmet>
        <title>Contact — Asma Bajadda</title>
        <meta name="description" content="Contactez-moi pour toute opportunité de stage PFE ou collaboration technique. Retrouvez mes coordonnées professionnelles." />
      </Helmet>
      <h2 className="text-2xl font-semibold">Contact</h2>
      
      <div className="border rounded-2xl p-6 hover:shadow max-w-lg">
        <h3 className="font-semibold text-lg mb-4">Mes Coordonnées</h3>
        <ul className="space-y-3">
          {profile.email && (
            <li>
              <span className="font-medium">Email :</span> <a href={`mailto:${profile.email}`} className="underline text-muted-foreground hover:text-primary">{profile.email}</a>
            </li>
          )}
          {profile.phone && (
            <li>
              <span className="font-medium">Téléphone :</span> <span className="text-muted-foreground">{profile.phone}</span>
            </li>
          )}
          {profile.location && (
            <li>
              <span className="font-medium">Localisation :</span> <span className="text-muted-foreground">{profile.location}</span>
            </li>
          )}
        </ul>

        {profile.socials && profile.socials.length > 0 && profile.socials.some(s => s.href) && (
          <div className="mt-6 pt-4 border-t">
            <h4 className="font-medium mb-3">Réseaux</h4>
            <div className="flex gap-4">
              {profile.socials.map((social, index) => (
                social.href ? (
                  <a key={index} href={social.href} target="_blank" rel="noreferrer" className="underline text-muted-foreground hover:text-primary">
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
