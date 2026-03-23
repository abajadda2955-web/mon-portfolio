import { Outlet, NavLink } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <header className="sticky top-0 border-b backdrop-blur z-50">
        <nav className="mx-auto max-w-6xl flex items-center justify-between p-4">
          <NavLink to="/" className="font-bold text-lg">Mon Portfolio</NavLink>
          <div className="flex items-center gap-4">
            <NavLink to="/projects" className="hover:text-primary">Projets</NavLink>
            <NavLink to="/experience" className="hover:text-primary">Parcours</NavLink>
            <NavLink to="/education" className="hover:text-primary">Formations</NavLink>
            <NavLink to="/certifications" className="hover:text-primary">Certifications</NavLink>
            <NavLink to="/contact" className="hover:text-primary">Contact</NavLink>
          </div>
        </nav>
      </header>
      <main className="mx-auto max-w-6xl p-6">
        <Outlet />
      </main>
      <footer className="border-t py-6 text-center text-sm">
        &copy; {new Date().getFullYear()} • Asma Bajadda
      </footer>
    </div>
  );
}
