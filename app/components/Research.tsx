export default function Research() {
  return (
    <section id="research" className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-serif text-gray-900">
          Research &amp; Publications
        </h2>

        {/* Lab Cards */}
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm hover:shadow-md transition-shadow">
            <p className="text-xs font-semibold text-brand uppercase tracking-wide">
              Oct 2021 — May 2024
            </p>
            <h3 className="mt-2 text-xl font-serif text-gray-900">
              SU Bioinspired Institute
            </h3>
            <p className="text-sm text-brand font-medium">
              PI: Dr. James H. Henderson
            </p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Developed shape memory polymers proven to prevent
              antibiotic-resistant biofilm growth on implants. 10+ hours/week in
              SMP manufacturing, cell &amp; bacterial culture, and
              thermal/mechanical analysis.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm hover:shadow-md transition-shadow">
            <p className="text-xs font-semibold text-brand uppercase tracking-wide">
              May — Aug 2023
            </p>
            <h3 className="mt-2 text-xl font-serif text-gray-900">
              Cleveland Clinic / IBM
            </h3>
            <p className="text-sm text-brand font-medium">
              Discovery Accelerator AI Intern &middot; PI: Dr. Tara Karamlou
            </p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Programmed IBM&apos;s &lsquo;Deep Search&rsquo; to automate
              literature reviews for cardiac surgery research. Bridged
              communication between Cleveland Clinic surgeons and IBM scientists.
            </p>
          </div>
        </div>

        {/* Publications */}
        <h3 className="mt-14 text-2xl font-serif text-gray-900">
          Publications
        </h3>
        <div className="mt-6 space-y-4">
          {[
            {
              authors:
                'E. Oguntade, C. Wigham, L. Owuor, K. O\'Grady, **A. Acierto**, R. Zha, J. Henderson',
              title:
                "Dry and wet wrinkling of a silk fibroin biopolymer by a shape-memory material with insight into mechanical effects on secondary structures in the silk network",
              journal: "J Mater Chem B, vol. 12, no. 26, 2024",
              status: "published",
            },
            {
              authors:
                'R. Mahboubi, K. Dinkla, A. Weiss, **A. Acierto**, P. Staar, J. Robinson, M. Hammoud, T. Karamlou',
              title:
                "SciScribe: Automating & Contextualizing Literature Reviews in Cardiac Surgery",
              journal:
                "The Journal of Thoracic and Cardiovascular Surgery, 2024",
              status: "in press",
            },
            {
              authors:
                'E. Oguntade, L. Owuor, C. Du, **A. Acierto**, S. Meyer, M. Monroe, J. Henderson',
              title:
                "Bacterial Response to Shape-Memory Actuated Silk Wrinkled Surface Topographies as a Strategy for Biofilm Prevention",
              journal: "",
              status: "in review",
            },
            {
              authors:
                'F. Donelson, J. Kochanowski, L. Hamilton, **A. Acierto**, X. Zhao, J. Henderson',
              title:
                "Investigating the Effects of Dynamic Micropatterns on Cell Polarization and Motility",
              journal: "",
              status: "in prep",
            },
          ].map((pub, i) => (
            <div
              key={i}
              className="rounded-xl bg-white border border-gray-200 p-5 hover:border-brand/30 transition-colors"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <p className="text-sm text-gray-900 font-medium leading-snug">
                    &ldquo;{pub.title}&rdquo;
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    {pub.authors.split("**A. Acierto**").map((part, j, arr) => (
                      <span key={j}>
                        {part}
                        {j < arr.length - 1 && (
                          <span className="font-bold text-gray-700">
                            A. Acierto
                          </span>
                        )}
                      </span>
                    ))}
                  </p>
                  {pub.journal && (
                    <p className="mt-1 text-xs text-brand italic">
                      {pub.journal}
                    </p>
                  )}
                </div>
                <span
                  className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    pub.status === "published"
                      ? "bg-emerald-50 text-emerald-700"
                      : pub.status === "in press"
                        ? "bg-blue-50 text-blue-700"
                        : pub.status === "in review"
                          ? "bg-amber-50 text-amber-700"
                          : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {pub.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Presentations */}
        <h3 className="mt-14 text-2xl font-serif text-gray-900">
          Presentations
        </h3>
        <div className="mt-6 space-y-3">
          {[
            "\"The Effect of Hydration on Manufactured Shape Memory Polymer Parts\" — Plenary oral presentation, NEBEC, Drexel University (March 2023)",
            "\"The Effect of Hydration on Manufactured SMP Parts with Insight into Shape Memory Actuated Wrinkles\" — SOURCE Poster Symposium, Syracuse (Dec 2023)",
            "\"P.I.B.I. Check: A Portable Impedance Breast Imaging Device\" — SOURCE Poster Symposium, Syracuse (Dec 2023)",
            "\"Ulcer Foot Optical Analysis Device\" — Senior Design Poster, NEBEC, Drexel University (March 2023)",
          ].map((pres, i) => (
            <p key={i} className="text-sm text-gray-600 flex gap-3 leading-relaxed">
              <span className="text-brand font-bold shrink-0">{i + 1}.</span>
              {pres}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
