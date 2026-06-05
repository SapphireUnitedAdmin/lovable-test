import { ExternalLink } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { Icon } from "@/components/Icon";
import { sops } from "@/data/content";

export default function Sops() {
  return (
    <div>
      <PageHeader
        eyebrow="How we work"
        title="Standard Operating Procedures"
        intro="Our SOPs keep our work consistent, compliant and high-quality. Find the procedure you need below."
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {sops.map((cat) => (
          <section
            key={cat.title}
            className="rounded-xl border border-slate-200 bg-white p-6"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand-50 text-brand-600">
                <Icon name={cat.icon} className="h-5 w-5" />
              </span>
              <h2 className="font-semibold text-brand-800">{cat.title}</h2>
            </div>
            <ul className="space-y-1">
              {cat.items.map((item) => (
                <li key={item.title}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-start justify-between gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-slate-50"
                  >
                    <span>
                      <span className="block text-sm font-medium text-brand-700 group-hover:text-brand-900">
                        {item.title}
                      </span>
                      {item.description && (
                        <span className="block text-xs text-slate-400">
                          {item.description}
                        </span>
                      )}
                    </span>
                    <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-slate-300 group-hover:text-brand-500" />
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <p className="mt-8 rounded-lg bg-brand-50 px-4 py-3 text-sm text-brand-700">
        💡 Can't find an SOP? Ask your manager or the Compliance Officer (see
        Key Contacts) and we'll get it added.
      </p>
    </div>
  );
}
