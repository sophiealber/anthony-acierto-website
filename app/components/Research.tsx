export default function Research() {
  return (
    <section id="research" className="px-8 lg:px-16 py-16">
      <p className="text-sm font-semibold text-brand uppercase tracking-wide">
        Research &amp; Publications
      </p>

      <div className="mt-6 space-y-8 max-w-2xl">
        {/* Lab experiences */}
        <div>
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="text-lg font-semibold text-slate-900">
              SU Bioinspired Institute
            </h3>
            <span className="text-xs text-slate-400 whitespace-nowrap">
              Oct 2021 — May 2024
            </span>
          </div>
          <p className="text-sm text-brand font-medium">
            Student Researcher &middot; PI: Dr. James H. Henderson
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Developed shape memory polymers proven to prevent antibiotic-resistant
            biofilm growth on implanted objects. Conducted 10+ hours/week of
            research in SMP manufacturing, cell and bacterial culture, silk-coated
            surface analysis, and thermal/mechanical testing.
          </p>
        </div>

        <div>
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="text-lg font-semibold text-slate-900">
              Cleveland Clinic / IBM
            </h3>
            <span className="text-xs text-slate-400 whitespace-nowrap">
              May — Aug 2023
            </span>
          </div>
          <p className="text-sm text-brand font-medium">
            Discovery Accelerator AI Intern &middot; PI: Dr. Tara Karamlou
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Enhanced the partnership between Cleveland Clinic cardiac surgery
            researchers and IBM scientists. Programmed IBM&apos;s &lsquo;Deep
            Search&rsquo; tool to expedite literature searches and reviews for
            cardiac surgery research.
          </p>
        </div>

        {/* Publications */}
        <div>
          <h3 className="text-lg font-semibold text-slate-900 mb-4">
            Publications
          </h3>
          <div className="space-y-4">
            <div className="rounded-lg bg-slate-50 border border-slate-100 p-4">
              <p className="text-sm text-slate-700">
                E. Oguntade, C. Wigham, L. Owuor, K. O&apos;Grady,{" "}
                <span className="font-semibold">A. Acierto</span>, R. Zha, J.
                Henderson. &ldquo;Dry and wet wrinkling of a silk fibroin
                biopolymer by a shape-memory material.&rdquo;
              </p>
              <p className="mt-1 text-sm text-brand italic">
                J Mater Chem B, vol. 12, no. 26, 2024
              </p>
            </div>

            <div className="rounded-lg bg-slate-50 border border-slate-100 p-4">
              <p className="text-sm text-slate-700">
                R. Mahboubi, K. Dinkla, A. Weiss,{" "}
                <span className="font-semibold">A. Acierto</span>, P. Staar, J.
                Robinson, M. Hammoud, T. Karamlou. &ldquo;SciScribe: Automating
                &amp; Contextualizing Literature Reviews in Cardiac
                Surgery.&rdquo;
              </p>
              <p className="mt-1 text-sm text-brand italic">
                The Journal of Thoracic and Cardiovascular Surgery, 2024 (In
                Press)
              </p>
            </div>

            <div className="rounded-lg bg-slate-50 border border-slate-100 p-4">
              <p className="text-sm text-slate-700">
                E. Oguntade, L. Owuor, C. Du,{" "}
                <span className="font-semibold">A. Acierto</span>, S. Meyer, M.
                Monroe, J. Henderson. &ldquo;Bacterial Response to Shape-Memory
                Actuated Silk Wrinkled Surface Topographies as a Strategy for
                Biofilm Prevention.&rdquo;
              </p>
              <p className="mt-1 text-sm text-slate-400 italic">In Review</p>
            </div>

            <div className="rounded-lg bg-slate-50 border border-slate-100 p-4">
              <p className="text-sm text-slate-700">
                F. Donelson, J. Kochanowski, L. Hamilton,{" "}
                <span className="font-semibold">A. Acierto</span>, X. Zhao, J.
                Henderson. &ldquo;Investigating the Effects of Dynamic
                Micropatterns on Cell Polarization and Motility.&rdquo;
              </p>
              <p className="mt-1 text-sm text-slate-400 italic">In Prep</p>
            </div>
          </div>
        </div>

        {/* Presentations */}
        <div>
          <h3 className="text-lg font-semibold text-slate-900 mb-3">
            Presentations
          </h3>
          <div className="space-y-2">
            {[
              {
                text: "\"The Effect of Hydration on Manufactured Shape Memory Polymer Parts\" — Plenary oral presentation, Northeast Bioengineering Conference (NEBEC), Drexel University, March 2023",
              },
              {
                text: "\"The Effect of Hydration on Manufactured SMP Parts with Insight into Shape Memory Actuated Wrinkles\" — SOURCE Fall Poster Symposium, Syracuse University, December 2023",
              },
              {
                text: "\"P.I.B.I. Check: A Portable Impedance Breast Imaging Device\" — SOURCE Fall Poster Symposium, Syracuse University, December 2023",
              },
              {
                text: "\"Ulcer Foot Optical Analysis Device\" — Senior Design Poster, NEBEC, Drexel University, March 2023",
              },
            ].map((pres, i) => (
              <p key={i} className="text-sm text-slate-600 flex gap-2">
                <span className="text-brand shrink-0 mt-0.5">&#9679;</span>
                {pres.text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
