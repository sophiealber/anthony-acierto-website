export default function Education() {
  return (
    <section id="education">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-serif text-gray-900">Education</h2>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {/* Medical School */}
          <div className="rounded-2xl bg-brand-dark p-8 text-white">
            <p className="text-brand-100 text-sm font-medium">
              2024 — Present &middot; Anticipated 2028
            </p>
            <h3 className="mt-3 text-2xl font-serif">
              University of Cincinnati College of Medicine
            </h3>
            <p className="mt-2 text-blue-200 font-medium">
              Doctor of Medicine (M.D.)
            </p>
            <p className="mt-4 text-blue-100/80 text-sm leading-relaxed">
              First-year medical student pursuing clinical medicine and research
              at the intersection of technology and patient care.
            </p>
          </div>

          {/* Undergraduate */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <p className="text-gray-400 text-sm font-medium">2021 — 2024</p>
            <h3 className="mt-3 text-2xl font-serif text-gray-900">
              Syracuse University
            </h3>
            <p className="mt-2 text-brand font-medium">
              B.S. Biomedical Engineering
            </p>
            <div className="mt-5 space-y-2">
              {[
                "Childhood Cancer Sibling Scholar",
                "Engineering Leadership Scholar",
                "George Wiley Award — Top Organic Chemistry",
                "Renee Crown Honors Program",
                "Tau Beta Pi Scholarship",
                "$5,000 Crown Research Grant",
              ].map((award) => (
                <p key={award} className="text-sm text-gray-600 flex items-start gap-2">
                  <span className="text-warm mt-0.5">&#9733;</span>
                  {award}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
