import { Outlet, NavLink } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="min-h-dvh bg-background text-foreground antialiased selection:bg-primary/30">
      <header className="sticky top-0 border-b border-border/20 bg-background/70 backdrop-blur-lg z-50 transition-colors">
        <nav className="mx-auto max-w-5xl flex items-center justify-between p-5">
          <NavLink to="/" className="font-bold text-xl tracking-tight text-foreground transition-transform hover:scale-105">
            Asma<span className="text-muted-foreground">Bajadda</span>.
          </NavLink>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground/80">
            <NavLink to="/projects" className={({isActive}) => isActive ? "text-foreground" : "hover:text-foreground transition-colors"}>Projets</NavLink>
            <NavLink to="/experience" className={({isActive}) => isActive ? "text-foreground" : "hover:text-foreground transition-colors"}>Parcours</NavLink>
            <NavLink to="/education" className={({isActive}) => isActive ? "text-foreground" : "hover:text-foreground transition-colors"}>Formation</NavLink>
            <NavLink to="/certifications" className={({isActive}) => isActive ? "text-foreground" : "hover:text-foreground transition-colors"}>Certifications</NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? "text-foreground" : "hover:text-foreground transition-colors"}>Contact</NavLink>
          </div>
          {/* Version mobile simplifiée */}
          <div className="flex md:hidden items-center gap-4 text-xs font-medium text-muted-foreground">
            <NavLink to="/projects">Projets</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </nav>
      </header>
      <main className="mx-auto max-w-5xl p-6 md:p-10 pt-16">
        <Outlet />
      </main>
      <footer className="border-t border-border/20 py-8 text-center text-sm text-muted-foreground/60">
        &copy; {new Date().getFullYear()} • Asma Bajadda. Construit avec React & Tailwind.
      </footer>
    </div>
  );
}
