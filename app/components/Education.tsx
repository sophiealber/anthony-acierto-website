export default function Education() {
  return (
    <section id="education" className="px-8 lg:px-16 py-16 bg-slate-50">
      <p className="text-sm font-semibold text-brand uppercase tracking-wide">
        Education
      </p>

      <div className="mt-6 space-y-6 max-w-2xl">
        {/* Medical School */}
        <div className="flex gap-4">
          <div className="mt-1 w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              University of Cincinnati College of Medicine
            </h3>
            <p className="text-sm text-brand font-medium">
              Doctor of Medicine (M.D.)
            </p>
            <p className="text-sm text-slate-400">
              2024 — Present &middot; Anticipated 2028
            </p>
          </div>
        </div>

        {/* Undergraduate */}
        <div className="flex gap-4">
          <div className="mt-1 w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Syracuse University
            </h3>
            <p className="text-sm text-brand font-medium">
              B.S. Biomedical Engineering
            </p>
            <p className="text-sm text-slate-400">
              2021 — 2024
            </p>
            <div className="mt-3 space-y-1">
              {[
                "Northwestern Mutual Childhood Cancer Sibling Scholar",
                "Engineering Leadership Scholar (2021)",
                "George Wiley Award — Top Organic Chemistry Student (2022)",
                "Renee Crown Honors Program Member",
                "Tau Beta Pi Scholarship (2023)",
                "Syracuse Crown Award — $5,000 Research Grant (2023)",
              ].map((award) => (
                <p key={award} className="text-sm text-slate-600 flex gap-2">
                  <span className="text-brand shrink-0">&#9679;</span>
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
