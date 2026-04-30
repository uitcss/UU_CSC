import PageShell from "@/components/page-shell";

const members = [
  { name: "Yogesh Chandra Kuniyal", role: "President" },
  { name: "Vansh Gambhir", role: "Vice President" },
  { name: "Uttkarsh Anand", role: "Tech Lead" },
  { name: "Aditi ", role: "Design Lead" },
];

export default function TeamPage() {
  return (
    <PageShell
      eyebrow="Team"
      title="Meet the people behind UU CS Club."
      description="A dedicated team of student leaders driving events, projects, and mentorship programs."
      centeredHero
    >
      <section className="grid gap-5 md:grid-cols-2">
        {members.map((member) => (
          <article key={member.name} className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-semibold text-[#0f2c45]">{member.name}</h2>
            <p className="mt-2 text-lg text-slate-600">{member.role}</p>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
