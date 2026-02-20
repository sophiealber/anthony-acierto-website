const clinical = [
  {
    title: "KIDNEE Club Volunteer",
    org: "Pediatrics Interest Group, Cincinnati, OH",
    period: "Sep 2024 — Present",
    desc: "Matched with a pediatric dialysis patient as a buddy, providing company and support during treatment sessions.",
  },
  {
    title: "Cardiology Volunteer",
    org: "St. Joseph's Hospital, Syracuse, NY",
    period: "Aug 2022 — Dec 2023",
    desc: "Cared for patients across two Cardiology floors. Developed an automated volunteer check-in system.",
  },
  {
    title: "ED & Dialysis Volunteer",
    org: "Firelands Regional Medical Center, Sandusky, OH",
    period: "May — Aug 2022",
    desc: "Guided patients through registration, comforted families, facilitated patient transport in the dialysis clinic.",
  },
];

const engineering = [
  {
    title: "Portable Breast Cancer Detection",
    org: "Senior Design, Syracuse University",
    period: "Oct 2021 — May 2024",
    desc: "Collaborated with a radiologist to create a novel breast cancer assessment using electric impedance tomography. Co-led software development in Arduino and Python.",
  },
  {
    title: "Diabetic Foot Ulcer Detection",
    org: "Senior Design, Syracuse University",
    period: "Dec 2022 — May 2023",
    desc: "Designed an imaging device with a neurologist. Coded ulcer detection AI with 75%+ accuracy. Presented at NEBEC Design Competition.",
  },
  {
    title: "Operations Associate",
    org: "PT Solutions, Brunswick, OH",
    period: "May — Aug 2022",
    desc: "Inspected biomedical devices including spinal fusion implants. Automated documentation via Excel VBA.",
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-serif text-gray-900">Experience</h2>

        <div className="mt-10 grid md:grid-cols-2 gap-12">
          {/* Clinical */}
          <div>
            <h3 className="text-sm font-semibold text-brand uppercase tracking-widest mb-6">
              Clinical &amp; Volunteer
            </h3>
            <div className="space-y-6 border-l-2 border-brand/20 pl-6">
              {clinical.map((exp, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-brand" />
                  <p className="text-xs text-gray-400 font-medium">
                    {exp.period}
                  </p>
                  <h4 className="mt-1 text-base font-semibold text-gray-900">
                    {exp.title}
                  </h4>
                  <p className="text-sm text-brand">{exp.org}</p>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Engineering */}
          <div>
            <h3 className="text-sm font-semibold text-brand uppercase tracking-widest mb-6">
              Engineering &amp; Professional
            </h3>
            <div className="space-y-6 border-l-2 border-brand/20 pl-6">
              {engineering.map((exp, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-brand" />
                  <p className="text-xs text-gray-400 font-medium">
                    {exp.period}
                  </p>
                  <h4 className="mt-1 text-base font-semibold text-gray-900">
                    {exp.title}
                  </h4>
                  <p className="text-sm text-brand">{exp.org}</p>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
