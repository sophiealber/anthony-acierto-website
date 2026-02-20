const roles = [
  {
    role: "President",
    org: "Honors Pre-health Society",
    desc: "Restarted after 6-year hiatus, grew to ~100 members. Collaborated with campus groups to host alumni physician speaking events and a politics in healthcare event.",
  },
  {
    role: "Peer Mentorship Director",
    org: "Biomedical Engineering Society",
    desc: "Paired first-year engineers with upperclass mentors. Coordinated events and fundraised for field trips to nearby engineering firms.",
  },
  {
    role: "Secretary",
    org: "Tau Beta Pi (Engineering Honors Society)",
    desc: "Admitted based on academics (top eighth of class), character, and leadership. Planned and hosted Vex Robotics competitions for local high school students.",
  },
  {
    role: "Ignite Fellow",
    org: "Teach For America",
    desc: "Led small group math instruction for underserved junior high students. Raised test scores and bolstered student confidence for advanced coursework.",
  },
  {
    role: "Ambassador",
    org: "Engineering Ambassadors",
    desc: "Taught STEM to local students with learning disabilities, demonstrating that they can thrive in challenging science tasks.",
  },
  {
    role: "Member",
    org: "Engineering World Health",
    desc: "Built EKG health kits for communities abroad. Hosted soldering workshops for outreach.",
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-serif text-gray-900">
          Leadership &amp; Service
        </h2>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {roles.map((r, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-xs font-semibold text-brand uppercase tracking-wide">
                {r.role}
              </p>
              <h3 className="mt-2 text-lg font-serif text-gray-900">
                {r.org}
              </h3>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
