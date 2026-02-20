export default function Research() {
  return (
    <section id="research" className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900">Research</h2>
        <div className="mt-2 w-12 h-1 bg-primary rounded-full" />

        {/* Lab */}
        <div className="mt-12 rounded-xl border border-surface-border bg-surface p-8">
          <p className="text-sm text-gray-400 font-medium">
            Oct 2021 — May 2024
          </p>
          <h3 className="mt-1 text-xl font-semibold text-gray-900">
            Syracuse Bioinspired Institute
          </h3>
          <p className="text-primary font-medium">
            Henderson Lab Group (Dr. James Henderson)
          </p>

          <div className="mt-6 space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                Current Project
              </h4>
              <p className="mt-1 text-gray-700">
                The Effect of Hydration on Manufactured Shape Memory Polymer
                Parts for Wet Wrinkle Formation
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                Publication
              </h4>
              <p className="mt-1 text-gray-700">
                &ldquo;Microcontact Printing on Shape Memory Polymers for
                Altering Cell Morphology&rdquo;{" "}
                <span className="text-gray-400 italic">— In Prep</span>
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                Additional Publication
              </h4>
              <p className="mt-1 text-gray-700">
                Co-author, &ldquo;Dry and wet wrinkling of a silk fibroin
                biopolymer by a shape-memory material&rdquo; —{" "}
                <span className="text-primary font-medium">
                  Journal of Materials Chemistry B
                </span>{" "}
                (2024)
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
              Skills &amp; Techniques
            </h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {[
                "Shape Memory Polymers",
                "Dynamic Mechanical Analysis",
                "Cell Culture",
                "4D Printing",
                "Statistical Analysis",
                "Biosafety Cabinets",
                "Python",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-teal/10 border border-teal/20 px-3 py-1 text-xs font-medium text-teal-dark"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Medical School Research */}
        <div className="mt-6 rounded-xl border border-surface-border bg-surface p-8">
          <p className="text-sm text-gray-400 font-medium">2024 — Present</p>
          <h3 className="mt-1 text-xl font-semibold text-gray-900">
            UC College of Medicine
          </h3>
          <p className="text-primary font-medium">
            15th Annual Research &amp; Service Symposium
          </p>
          <p className="mt-3 text-gray-700">
            &ldquo;Literacy-Sensitive Educational Handouts to Improve Patient
            Preparedness and Outcomes in Outpatient Hand Surgery&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
