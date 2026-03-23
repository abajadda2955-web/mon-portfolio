import { Outlet, NavLink } from "react-router-dom";

export default function RootLayout() {
  const links = [
    { to: "/", label: "Accueil" },
    { to: "/projects", label: "Projets" },
    { to: "/experience", label: "Expérience" },
    { to: "/education", label: "Formation" },
    { to: "/certifications", label: "Certifications" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-100 selection:bg-blue-500/30">
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/95 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between md:py-5">
            <NavLink
              to="/"
              className="w-fit text-2xl font-bold tracking-tight text-zinc-100 transition hover:text-blue-400"
            >
              Asma Bajadda
            </NavLink>

            <nav className="overflow-x-auto">
              <ul className="flex min-w-max items-center gap-5 pb-1 text-sm font-medium md:gap-7">
                {links.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        [
                          "whitespace-nowrap border-b-2 pb-1 transition",
                          isActive
                            ? "border-blue-400 text-blue-400"
                            : "border-transparent text-zinc-300 hover:border-zinc-600 hover:text-zinc-100",
                        ].join(" ")
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 md:py-14 lg:px-8">
        <Outlet />
      </main>

      <footer className="mt-auto border-t border-zinc-800">
        <div className="mx-auto max-w-6xl px-4 py-8 text-center text-sm text-zinc-500 sm:px-6 lg:px-8">
          &copy; {new Date().getFullYear()} • Asma Bajadda • Étudiante en
          Licence SIR
        </div>
      </footer>
    </div>
  );
}