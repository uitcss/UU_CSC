import Link from "next/link";
import PageShell from "@/components/page-shell";
import { events, highlights } from "@/components/site-content";

export default function HomePage() {
  return (
    <PageShell
      eyebrow="UU - CSC"
      title="Build, lead, and launch with the Computer Science Club."
      description="A student-led community focused on design, engineering, and real-world project execution."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {highlights.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-slate-900">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
          </article>
        ))}
      </div>

      <section className="mt-10 grid gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:grid-cols-[2fr_1fr]">
        <div>
          <h3 className="text-2xl font-semibold text-slate-900">Upcoming spotlight event</h3>
          <p className="mt-3 text-slate-600">{events[0].details}</p>
          <p className="mt-3 text-sm font-medium text-blue-700">{events[0].date}</p>
        </div>
        <div className="flex items-center md:justify-end">
          <Link
            href="/events"
            className="inline-flex rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            Explore Events
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
