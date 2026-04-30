import PageShell from "@/components/page-shell";

const projectItems = [
  {
    name: "Campus Connect",
    description:
      "A student community platform for events, clubs, and verified collaborations.",
  },
  {
    name: "Skill Sprint",
    description:
      "A guided challenge program where members ship practical mini-products in teams.",
  },
  {
    name: "Open Source Lab",
    description:
      "Contribution-led learning tracks to help students become effective open source contributors.",
  },
];

export default function ProjectsPage() {
  return (
    <PageShell
      eyebrow="Projects"
      title="What we build together."
      description="Student-driven products that improve campus experiences and strengthen practical engineering skills."
      centeredHero
    >
      <section className="grid gap-5 md:grid-cols-3">
        {projectItems.map((project) => (
          <article key={project.name} className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-semibold text-[#0f2c45]">{project.name}</h2>
            <p className="mt-3 text-lg text-slate-600">{project.description}</p>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
