export default function About() {
  return (
    <section id="about" className="bg-brand-50/50">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-serif text-gray-900">About me</h2>

          <div className="mt-8 space-y-5 text-lg text-gray-600 leading-relaxed">
            <p>
              My background in biomedical engineering gives me a unique lens on
              patient care. From developing shape memory polymers that prevent
              biofilm growth on implants, to programming AI tools that
              streamline cardiac surgery research at Cleveland Clinic, I&apos;m
              passionate about bringing engineering innovation into the clinic.
            </p>
            <p>
              Outside the lab, you&apos;ll find me reading historical fiction,
              training for long-distance runs, or singing with the UCCOM chorus.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {[
              "Biomaterials",
              "AI in Surgery",
              "Medical Devices",
              "Hand Surgery",
              "Health Literacy",
              "Python",
              "Spanish",
              "Italian",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white border border-brand/10 px-4 py-1.5 text-sm text-brand shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
