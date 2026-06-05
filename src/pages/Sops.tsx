import { useMemo, useState } from "react";
import { ExternalLink, Search } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { Icon } from "@/components/Icon";
import { sops } from "@/data/content";

export default function Sops() {
  const [query, setQuery] = useState("");

  // Filter categories/items by the search query (matches title & description).
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sops;
    return sops
      .map((cat) => {
        const catMatches = cat.title.toLowerCase().includes(q);
        const items = catMatches
          ? cat.items
          : cat.items.filter(
              (i) =>
                i.title.toLowerCase().includes(q) ||
                i.description?.toLowerCase().includes(q)
            );
        return { ...cat, items };
      })
      .filter((cat) => cat.items.length > 0);
  }, [query]);

  return (
    <div>
      <PageHeader
        eyebrow="How we work"
        title="Standard Operating Procedures"
        intro="Our SOPs keep our work consistent, compliant and high-quality. Find the procedure you need below."
      />

      {/* Search */}
      <div className="relative mb-6">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search SOPs…"
          aria-label="Search SOPs"
          className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-slate-700 outline-none transition-colors focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
        />
      </div>

      {filtered.length === 0 && (
        <p className="rounded-lg border border-slate-200 bg-white px-4 py-8 text-center text-sm text-slate-500">
          No SOPs match "{query}". Try a different search.
        </p>
      )}

      <div className="grid gap-5 lg:grid-cols-2">
        {filtered.map((cat) => (
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
