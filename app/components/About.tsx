export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900">About</h2>
        <div className="mt-2 w-12 h-1 bg-primary rounded-full" />

        <div className="mt-8 space-y-4 text-gray-600 leading-relaxed text-lg">
          <p>
            I&apos;m a medical student at the{" "}
            <span className="text-gray-900 font-medium">
              University of Cincinnati College of Medicine
            </span>
            , pursuing my goal of becoming a physician-researcher at the
            intersection of technology and healthcare.
          </p>
          <p>
            I graduated from{" "}
            <span className="text-gray-900 font-medium">Syracuse University</span>{" "}
            with a B.S. in Biomedical Engineering and a perfect 4.0 GPA. My
            undergraduate experience combined rigorous engineering training with
            hands-on research in biomaterials and clinical volunteering, shaping
            my understanding of how technology can directly improve patient care.
          </p>
          <p>
            As a Northwestern Mutual Childhood Cancer Sibling Scholar, my
            personal connection to healthcare drives my commitment to medicine.
            I&apos;m passionate about bridging the gap between engineering
            innovation and clinical practice to advance the field of medicine.
          </p>
        </div>
      </div>
    </section>
  );
}
