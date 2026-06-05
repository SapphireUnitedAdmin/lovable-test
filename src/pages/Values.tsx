import PageHeader from "@/components/PageHeader";
import { Icon } from "@/components/Icon";
import { mission, vision, values } from "@/data/content";

export default function Values() {
  return (
    <div>
      <PageHeader
        eyebrow="Culture"
        title="Our Values"
        intro="These are the principles that guide how we work, how we treat each other, and how we look after our clients."
      />

      {/* Mission & vision */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gold-600">
            Our Mission
          </h2>
          <p className="text-slate-700">{mission}</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gold-600">
            Our Vision
          </h2>
          <p className="text-slate-700">{vision}</p>
        </div>
      </div>

      {/* Values grid */}
      <h2 className="mb-4 mt-10 font-serif text-xl font-bold text-brand-800">
        What we stand for
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {values.map((v) => (
          <div
            key={v.title}
            className="card-hover rounded-xl border border-slate-200 bg-white p-6"
          >
            <span className="mb-4 grid h-12 w-12 place-items-center rounded-lg bg-brand-50 text-brand-600">
              <Icon name={v.icon} className="h-6 w-6" />
            </span>
            <h3 className="font-semibold text-brand-800">{v.title}</h3>
            <p className="mt-1.5 text-sm text-slate-600">{v.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
