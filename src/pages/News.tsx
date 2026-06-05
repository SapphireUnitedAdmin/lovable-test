import PageHeader from "@/components/PageHeader";
import { announcements, type Announcement } from "@/data/content";

const TAG_STYLES: Record<NonNullable<Announcement["tag"]>, string> = {
  News: "bg-brand-50 text-brand-700",
  Policy: "bg-amber-50 text-amber-700",
  Event: "bg-green-50 text-green-700",
  People: "bg-purple-50 text-purple-700",
  System: "bg-slate-100 text-slate-600",
};

export function formatDate(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function News() {
  return (
    <div>
      <PageHeader
        eyebrow="Stay in the loop"
        title="News & Announcements"
        intro="Updates from across the team — policy changes, events and everything in between."
      />

      <ol className="relative space-y-6 border-l border-slate-200 pl-6">
        {announcements.map((a, i) => (
          <li key={i} className="relative">
            <span className="absolute -left-[1.92rem] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-gold-500" />
            <article className="rounded-xl border border-slate-200 bg-white p-5">
              <div className="mb-1.5 flex flex-wrap items-center gap-2">
                {a.tag && (
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${TAG_STYLES[a.tag]}`}
                  >
                    {a.tag}
                  </span>
                )}
                <time className="text-xs text-slate-400">
                  {formatDate(a.date)}
                </time>
              </div>
              <h2 className="font-semibold text-brand-800">{a.title}</h2>
              <p className="mt-1.5 text-sm text-slate-600">{a.body}</p>
            </article>
          </li>
        ))}
      </ol>
    </div>
  );
}
