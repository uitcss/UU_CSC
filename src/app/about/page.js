import PageShell from "@/components/page-shell";

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About Us"
      title="A focused student collective for practical computer science."
      description="We connect motivated students with structured practice, mentorship, and project opportunities."
    >
      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Mission</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Our mission is to help members bridge the gap between theory and product delivery
            through collaborative learning and real implementation.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Vision</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            We aim to become a benchmark student chapter known for strong engineering culture,
            thoughtful design execution, and community-led innovation.
          </p>
        </article>
      </section>
    </PageShell>
  );
}
