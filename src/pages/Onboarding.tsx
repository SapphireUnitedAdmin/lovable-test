import { useEffect, useMemo, useState } from "react";
import { Check } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { onboarding } from "@/data/content";

const STORAGE_KEY = "cbm-hub-onboarding";

export default function Onboarding() {
  const allIds = useMemo(
    () => onboarding.flatMap((g) => g.items.map((i) => i.id)),
    []
  );

  const [done, setDone] = useState<Record<string, boolean>>({});

  // Load saved progress
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setDone(JSON.parse(raw));
    } catch {
      /* ignore */
    }
  }, []);

  // Persist progress
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(done));
  }, [done]);

  const toggle = (id: string) =>
    setDone((d) => ({ ...d, [id]: !d[id] }));

  const completed = allIds.filter((id) => done[id]).length;
  const pct = Math.round((completed / allIds.length) * 100);

  return (
    <div>
      <PageHeader
        eyebrow="Getting started"
        title="Your Onboarding Checklist"
        intro="Work through these at your own pace. Your progress is saved automatically in this browser."
      />

      {/* Progress bar */}
      <div className="mb-8 rounded-xl border border-slate-200 bg-white p-5">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="font-semibold text-brand-800">Your progress</span>
          <span className="text-slate-500">
            {completed} of {allIds.length} done
          </span>
        </div>
        <div className="h-3 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-gold-500 transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>
        {pct === 100 && (
          <p className="mt-3 text-sm font-medium text-green-600">
            🎉 All done — welcome aboard!
          </p>
        )}
      </div>

      {/* Checklist groups */}
      <div className="space-y-8">
        {onboarding.map((group) => (
          <section key={group.title}>
            <div className="mb-3">
              <h2 className="font-serif text-xl font-bold text-brand-800">
                {group.title}
              </h2>
              <p className="text-sm text-slate-500">{group.subtitle}</p>
            </div>
            <ul className="space-y-2">
              {group.items.map((item) => {
                const checked = !!done[item.id];
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => toggle(item.id)}
                      className={[
                        "flex w-full items-start gap-3 rounded-xl border p-4 text-left transition-colors",
                        checked
                          ? "border-green-200 bg-green-50"
                          : "border-slate-200 bg-white hover:border-brand-300",
                      ].join(" ")}
                    >
                      <span
                        className={[
                          "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded border",
                          checked
                            ? "border-green-500 bg-green-500 text-white"
                            : "border-slate-300 bg-white",
                        ].join(" ")}
                      >
                        {checked && <Check className="h-3.5 w-3.5" />}
                      </span>
                      <span>
                        <span
                          className={[
                            "block font-medium",
                            checked
                              ? "text-slate-500 line-through"
                              : "text-brand-800",
                          ].join(" ")}
                        >
                          {item.label}
                        </span>
                        {item.hint && (
                          <span className="mt-0.5 block text-xs text-slate-400">
                            {item.hint}
                          </span>
                        )}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
