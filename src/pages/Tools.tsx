import { ExternalLink } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { Icon } from "@/components/Icon";
import { tools } from "@/data/content";

export default function Tools() {
  return (
    <div>
      <PageHeader
        eyebrow="Your toolkit"
        title="Tools & Useful Links"
        intro="Quick access to the systems and resources you'll use day to day. Bookmark this page."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <a
            key={tool.title}
            href={tool.url}
            target="_blank"
            rel="noreferrer"
            className="card-hover group flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-600">
              <Icon name={tool.icon} className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="flex items-center gap-1 font-semibold text-brand-800">
                {tool.title}
                <ExternalLink className="h-3.5 w-3.5 text-slate-300 group-hover:text-brand-500" />
              </span>
              {tool.description && (
                <span className="mt-0.5 block text-sm text-slate-500">
                  {tool.description}
                </span>
              )}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
