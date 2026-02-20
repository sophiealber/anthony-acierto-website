const experiences = [
  {
    title: "Cardiology Volunteer",
    org: "St. Joseph's Hospital",
    location: "Syracuse, NY",
    period: "Aug 2022 — May 2024",
    items: [
      "Cared for patients across two floors of the Cardiology unit, providing comfort and support during recovery",
      "Developed an automated volunteer check-in system in Excel, saving hours of manual work for the director of volunteer services",
    ],
  },
  {
    title: "Emergency Department & Dialysis Volunteer",
    org: "Firelands Regional Medical Center",
    location: "Sandusky, OH",
    period: "May — Aug 2022",
    items: [
      "Guided patients through registration and comforted families in the emergency department",
      "Facilitated patient transport and assembled materials for dialysis procedures in the outpatient clinic",
    ],
  },
  {
    title: "Operations Associate",
    org: "PT Solutions",
    location: "Brunswick, OH",
    period: "May — Aug 2022",
    items: [
      "Led inspection of biomedical devices including spinal fusion implants",
      "Assisted in the manufacturing and assembly of biomedical devices alongside the head engineer",
      "Automated documentation processes through Excel Visual Basic",
    ],
  },
  {
    title: "Physician Shadowing",
    org: "Orthopedic Surgery & Long-term Care",
    location: "Canton, OH",
    period: "January 2022",
    items: [
      "Shadowed an orthopedic surgeon, learning X-ray and MRI interpretation and observing cortisone injections and fluid aspiration",
      "Followed a long-term care physician, learning patient assessment, drug administration, and HIPAA compliance",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900">
          Clinical &amp; Professional Experience
        </h2>
        <div className="mt-2 w-12 h-1 bg-primary rounded-full" />

        <div className="mt-12 space-y-10">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="relative pl-8 border-l-2 border-primary/20"
            >
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-surface" />
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {exp.title}
                  </h3>
                  <p className="text-primary font-medium text-sm">
                    {exp.org} — {exp.location}
                  </p>
                </div>
                <p className="text-sm text-gray-400 font-medium whitespace-nowrap">
                  {exp.period}
                </p>
              </div>
              <ul className="mt-3 space-y-1.5">
                {exp.items.map((item, j) => (
                  <li
                    key={j}
                    className="text-gray-600 text-sm leading-relaxed flex gap-2"
                  >
                    <span className="text-primary mt-1 shrink-0">&#8226;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
