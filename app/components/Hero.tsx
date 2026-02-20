import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-14">
      <div className="max-w-6xl mx-auto px-6 py-20 lg:py-28">
        <div className="flex flex-col items-center justify-center gap-12 lg:gap-20">
          {/* Photo */}
          <div className="shrink-0">
            <div className="relative w-96 h-96 rounded-2xl overflow-hidden shadow-2xl shadow-brand/10 ring-1 ring-black/5">
              <Image
                src="/anthony.jpg"
                alt="Anthony Acierto"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          {/* Text */}
          <div className="text-center">
            <p className="text-sm font-semibold text-brand uppercase tracking-widest">
              Student Doctor
            </p>
            <h1 className="mt-3 text-5xl lg:text-6xl font-serif text-gray-900 leading-tight">
              Anthony Acierto
            </h1>
            <p className="mt-4 text-xl text-gray-500 max-w-lg">
              Third-year M.D. candidate at the University of Cincinnati College
              of Medicine. Aspiring physician-researcher bridging engineering
              and patient care.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <a
                href="mailto:aciertad@uc.mail.edu"
                className="inline-flex items-center gap-2 rounded-full bg-brand text-white px-5 py-2.5 text-sm font-medium hover:bg-brand-dark transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                Get in touch
              </a>
              <a
                href="https://linkedin.com/in/anthonyacierto"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white text-gray-700 px-5 py-2.5 text-sm font-medium hover:border-brand hover:text-brand transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
