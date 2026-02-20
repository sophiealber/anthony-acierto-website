const awards = [
  "4.0 / 4.0 GPA",
  "Northwestern Mutual Childhood Cancer Sibling Scholar",
  "Syracuse Engineering Leadership Scholar",
  "George Wiley Award — Top Organic Chemistry Student",
  "Tau Beta Pi Scholar",
  "Dean's List",
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900">Education</h2>
        <div className="mt-2 w-12 h-1 bg-primary rounded-full" />

        <div className="mt-12 space-y-6">
          {/* Medical School */}
          <div className="rounded-xl border border-surface-border bg-white p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  University of Cincinnati College of Medicine
                </h3>
                <p className="text-primary font-medium">Doctor of Medicine</p>
              </div>
              <p className="text-sm text-gray-400 font-medium whitespace-nowrap">
                2024 — Present
              </p>
            </div>
          </div>

          {/* Undergraduate */}
          <div className="rounded-xl border border-surface-border bg-white p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Syracuse University
                </h3>
                <p className="text-primary font-medium">
                  B.S. Biomedical Engineering, College of Engineering &amp;
                  Computer Science
                </p>
              </div>
              <p className="text-sm text-gray-400 font-medium whitespace-nowrap">
                Class of 2024
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {awards.map((award) => (
                <span
                  key={award}
                  className="inline-flex items-center rounded-full bg-primary/5 border border-primary/10 px-3 py-1 text-sm font-medium text-primary-dark"
                >
                  {award}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
