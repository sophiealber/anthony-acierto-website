export default function About() {
  return (
    <section id="about" className="px-8 lg:px-16 pt-12 lg:pt-20 pb-16">
      <p className="text-sm font-semibold text-brand uppercase tracking-wide">
        About
      </p>
      <h2 className="mt-2 text-3xl font-bold text-slate-900">
        Aspiring Physician-Researcher
      </h2>

      <div className="mt-6 space-y-4 text-slate-600 leading-relaxed max-w-2xl">
        <p>
          I&apos;m a medical student at the{" "}
          <span className="text-slate-900 font-medium">
            University of Cincinnati College of Medicine
          </span>{" "}
          (Class of 2028), working toward a career at the intersection of
          technology and healthcare.
        </p>
        <p>
          I graduated from{" "}
          <span className="text-slate-900 font-medium">
            Syracuse University
          </span>{" "}
          with a B.S. in Biomedical Engineering. My research spans biomaterials,
          AI-driven surgical literature review, and medical device design — with
          multiple publications in peer-reviewed journals.
        </p>
        <p>
          As a{" "}
          <span className="text-slate-900 font-medium">
            Northwestern Mutual Childhood Cancer Sibling Scholar
          </span>
          , my personal connection to healthcare fuels my commitment to
          improving patients&apos; lives through both clinical practice and
          engineering innovation.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {[
          "Biomaterials",
          "AI in Surgery",
          "Medical Devices",
          "Hand Surgery",
          "Health Literacy",
          "Python",
          "Spanish",
          "Italian (beginner)",
        ].map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
