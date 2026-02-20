const navLinks = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Research", href: "#research" },
  { label: "Experience", href: "#experience" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

export default function Sidebar() {
  return (
    <aside className="lg:fixed lg:top-0 lg:left-0 lg:w-80 lg:h-screen bg-slate-50 border-r border-slate-200 flex flex-col items-center px-8 py-12 lg:py-16">
      {/* Headshot placeholder */}
      <div className="w-36 h-36 rounded-full bg-slate-200 border-4 border-white shadow-lg flex items-center justify-center overflow-hidden">
        {/* Replace this div with <Image src="/anthony.jpg" ... /> when photo is added */}
        <svg
          className="w-16 h-16 text-slate-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
      </div>

      <h1 className="mt-6 text-2xl font-bold text-slate-900 text-center">
        Anthony Acierto
      </h1>
      <p className="mt-1 text-sm text-brand font-medium text-center">
        Medical Student
      </p>
      <p className="mt-0.5 text-sm text-slate-500 text-center">
        UC College of Medicine
      </p>
      <p className="mt-0.5 text-xs text-slate-400 text-center">
        Cincinnati, OH
      </p>

      {/* Quick links */}
      <div className="mt-6 flex items-center gap-4">
        <a
          href="https://linkedin.com/in/anthonyacierto"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-brand transition-colors"
          aria-label="LinkedIn"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
        <a
          href="mailto:aciertad@uc.mail.edu"
          className="text-slate-400 hover:text-brand transition-colors"
          aria-label="Email"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
        </a>
      </div>

      {/* Nav */}
      <nav className="mt-10 w-full hidden lg:block">
        <ul className="space-y-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block px-4 py-2 rounded-lg text-sm text-slate-600 hover:bg-white hover:text-brand transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <p className="mt-auto pt-8 text-xs text-slate-400 hidden lg:block">
        &copy; {new Date().getFullYear()} Anthony Acierto
      </p>
    </aside>
  );
}
