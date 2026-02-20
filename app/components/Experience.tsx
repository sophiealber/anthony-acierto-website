const clinical = [
  {
    title: "KIDNEE Club Volunteer",
    org: "Pediatrics Interest Group, Cincinnati, OH",
    period: "Sep 2024 — Present",
    items: [
      "Matched with a pediatric dialysis patient to provide company and support during treatment",
      "Learning from the patient perspective how chronic diseases affect children and families",
    ],
  },
  {
    title: "Cardiology Volunteer",
    org: "St. Joseph's Hospital, Syracuse, NY",
    period: "Aug 2022 — Dec 2023",
    items: [
      "Cared for patients across two Cardiology floors, supporting wellness during recovery",
      "Developed automated volunteer check-in system, saving hours for the volunteer director",
    ],
  },
  {
    title: "ED & Dialysis Volunteer",
    org: "Firelands Regional Medical Center, Sandusky, OH",
    period: "May — Aug 2022",
    items: [
      "Guided patients through registration and comforted families in the emergency department",
      "Facilitated patient transport and managed documentation in the outpatient dialysis clinic",
    ],
  },
];

const professional = [
  {
    title: "Portable Breast Cancer Detection",
    org: "Senior Design, Syracuse University",
    period: "Oct 2021 — May 2024",
    items: [
      "Collaborated with four students and a radiologist to create a novel breast cancer assessment using electric impedance tomography",
      "Co-led software development using Arduino and Python for impedance measurement and EIT mapping",
    ],
  },
  {
    title: "Diabetic Foot Ulcer Detection",
    org: "Senior Design, Syracuse University",
    period: "Dec 2022 — May 2023",
    items: [
      "Designed and prototyped an imaging device with a neurologist to detect ulcers",
      "Coded ulcer detection AI scripts with over 75% accuracy; presented at NEBEC Design Competition",
    ],
  },
  {
    title: "Operations Associate",
    org: "PT Solutions, Brunswick, OH",
    period: "May — Aug 2022",
    items: [
      "Led inspection of biomedical devices including spinal fusion implants",
      "Automated documentation through Excel Visual Basic",
    ],
  },
];

function TimelineSection({
  title,
  items,
}: {
  title: string;
  items: typeof clinical;
}) {
  return (
    <div>
      <h3 className="text-base font-semibold text-slate-900 mb-4">{title}</h3>
      <div className="space-y-6">
        {items.map((exp, i) => (
          <div key={i}>
            <div className="flex items-baseline justify-between gap-4">
              <h4 className="text-sm font-semibold text-slate-900">
                {exp.title}
              </h4>
              <span className="text-xs text-slate-400 whitespace-nowrap">
                {exp.period}
              </span>
            </div>
            <p className="text-sm text-brand">{exp.org}</p>
            <ul className="mt-2 space-y-1">
              {exp.items.map((item, j) => (
                <li
                  key={j}
                  className="text-sm text-slate-600 flex gap-2 leading-relaxed"
                >
                  <span className="text-slate-300 shrink-0">&#8212;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="px-8 lg:px-16 py-16 bg-slate-50">
      <p className="text-sm font-semibold text-brand uppercase tracking-wide">
        Experience
      </p>

      <div className="mt-6 space-y-10 max-w-2xl">
        <TimelineSection title="Clinical & Volunteer" items={clinical} />
        <TimelineSection title="Engineering & Professional" items={professional} />
      </div>
    </section>
  );
}
