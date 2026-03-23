import { Outlet, NavLink } from "react-router-dom";

export default function RootLayout() {
  const links = [
    { to: "/", label: "Accueil" },
    { to: "/projects", label: "Projets" },
    { to: "/experience", label: "Expérience" },
    { to: "/education", label: "Formation" },
    { to: "/certifications", label: "Certifications" },
    { to: "/contact", label: "Contact" }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-blue-500/30 flex flex-col">
      <header className="border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-md sticky top-0 z-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between py-4 md:py-5 gap-4 md:gap-8">
            <NavLink to="/" className="text-2xl font-bold tracking-tight text-zinc-100 hover:text-blue-400 transition-colors whitespace-nowrap">
              Asma Bajadda
            </NavLink>
            <nav className="flex flex-wrap md:flex-nowrap items-center gap-4 md:gap-8 overflow-x-auto pb-2 md:pb-0 scrollbar-hide text-sm font-medium">
              {links.map(link => (
                <NavLink 
                  key={link.to} 
                  to={link.to} 
                  className={({isActive}) => 
                    `whitespace-nowrap transition-colors hover:text-blue-400 ${isActive ? "text-blue-400 font-bold" : "text-zinc-300"}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </header>
      
      <main className="flex-grow mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <Outlet />
      </main>

      <footer className="border-t border-zinc-800 py-10 mt-auto text-center text-sm text-zinc-500">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          &copy; {new Date().getFullYear()} • Asma Bajadda. Étudiante en Licence SIR.
        </div>
      </footer>
    </div>
  );
}
