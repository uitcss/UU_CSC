import PageShell from "@/components/page-shell";
import { events } from "@/components/site-content";

export default function EventsPage() {
  return (
    <PageShell
      eyebrow="Events"
      title="Learning experiences designed for teamwork and momentum."
      description="Join practical sessions that improve technical confidence while building a stronger peer network."
    >
      <section className="grid gap-5">
        {events.map((event) => (
          <article
            key={event.title}
            className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm md:flex md:items-start md:justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold text-slate-900">{event.title}</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">{event.details}</p>
            </div>
            <p className="mt-4 text-sm font-semibold text-blue-700 md:mt-0">{event.date}</p>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
