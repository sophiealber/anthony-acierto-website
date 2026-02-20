export default function Contact() {
  return (
    <section id="contact" className="px-8 lg:px-16 py-16 bg-slate-50">
      <p className="text-sm font-semibold text-brand uppercase tracking-wide">
        Contact
      </p>
      <h2 className="mt-2 text-2xl font-bold text-slate-900">
        Let&apos;s connect
      </h2>
      <p className="mt-3 text-slate-600 max-w-lg">
        Whether it&apos;s about research, medicine, or just to say hello —
        I&apos;d love to hear from you.
      </p>

      <div className="mt-6 flex flex-col sm:flex-row gap-4">
        <a
          href="mailto:aciertad@uc.mail.edu"
          className="inline-flex items-center gap-2 rounded-lg bg-brand text-white px-5 py-2.5 text-sm font-medium hover:bg-brand-dark transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
          aciertad@uc.mail.edu
        </a>
        <a
          href="https://linkedin.com/in/anthonyacierto"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white text-slate-700 px-5 py-2.5 text-sm font-medium hover:border-brand hover:text-brand transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          LinkedIn
        </a>
      </div>

      <p className="mt-16 text-xs text-slate-400 lg:hidden">
        &copy; {new Date().getFullYear()} Anthony Acierto
      </p>
    </section>
  );
}
