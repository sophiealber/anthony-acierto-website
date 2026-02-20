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
    <section id="leadership" className="px-8 lg:px-16 py-16">
      <p className="text-sm font-semibold text-brand uppercase tracking-wide">
        Leadership &amp; Service
      </p>

      <div className="mt-6 space-y-5 max-w-2xl">
        {roles.map((r, i) => (
          <div key={i} className="flex gap-3">
            <div className="mt-1.5 w-2 h-2 rounded-full bg-brand shrink-0" />
            <div>
              <p className="text-base text-slate-900">
                <span className="font-semibold">{r.role}</span>
                <span className="text-slate-400"> / </span>
                <span className="text-brand font-medium">{r.org}</span>
              </p>
              <p className="mt-0.5 text-sm text-slate-500">{r.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
