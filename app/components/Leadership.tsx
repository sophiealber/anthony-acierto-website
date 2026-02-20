const roles = [
  {
    title: "President",
    org: "Honors Pre-health Society",
    description:
      "Restarted the society after a six-year hiatus, growing it to nearly 100 members. Built faculty relationships and collaborated with campus pre-health groups to host joint events.",
  },
  {
    title: "Peer Mentorship Program Director",
    org: "Biomedical Engineering Society (BMES)",
    description:
      "Chaired the mentorship program pairing first-year engineers with upperclass mentors. Coordinated events and fundraising for donations to local hospitals.",
  },
  {
    title: "Ignite Fellow",
    org: "Teach For America",
    description:
      "Led small group math instruction for underserved junior high students alongside veteran educators. Raised test scores and built student confidence for advanced coursework.",
  },
  {
    title: "General Member",
    org: "Engineering Ambassadors",
    description:
      "Educated local city school students with learning disabilities in STEM, demonstrating that complex science can be fun and accessible.",
  },
  {
    title: "General Member",
    org: "Engineering World Health",
    description:
      "Constructed health kits including EKGs to be sent to communities abroad. Hosted soldering workshops to draw interest and build skills.",
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900">
          Leadership &amp; Service
        </h2>
        <div className="mt-2 w-12 h-1 bg-primary rounded-full" />

        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {roles.map((role, i) => (
            <div
              key={i}
              className="rounded-xl border border-surface-border bg-surface p-6 hover:shadow-md transition-shadow"
            >
              <p className="text-primary font-semibold text-sm">{role.org}</p>
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                {role.title}
              </h3>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {role.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
