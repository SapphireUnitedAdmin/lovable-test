import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/Icon";
import { org } from "@/data/content";

const QUICK_TILES = [
  { to: "/onboarding", label: "Start onboarding", desc: "Your step-by-step checklist", icon: "CheckSquare" },
  { to: "/values", label: "Our values", desc: "What we stand for", icon: "Gem" },
  { to: "/sops", label: "SOPs", desc: "How we do things", icon: "FileText" },
  { to: "/tools", label: "Tools & links", desc: "Everything you'll use daily", icon: "Link2" },
  { to: "/contacts", label: "Key contacts", desc: "Who to ask for what", icon: "Contact" },
  { to: "/faq", label: "FAQ", desc: "Common questions", icon: "HelpCircle" },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="overflow-hidden rounded-2xl bg-brand-800 px-7 py-10 text-white sm:px-10 sm:py-14">
        <p className="text-sm font-semibold uppercase tracking-wide text-gold-400">
          {org.parent} · {org.division}
        </p>
        <h1 className="mt-2 font-serif text-3xl font-bold sm:text-4xl">
          {org.welcomeHeadline}
        </h1>
        <p className="mt-4 max-w-2xl text-brand-100">{org.welcomeIntro}</p>
        <Link
          to="/onboarding"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gold-500 px-5 py-2.5 text-sm font-semibold text-brand-900 transition-colors hover:bg-gold-400"
        >
          Begin onboarding <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      {/* Quick tiles */}
      <section className="mt-10">
        <h2 className="mb-4 font-serif text-xl font-bold text-brand-800">
          Jump straight in
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {QUICK_TILES.map((t) => (
            <Link
              key={t.to}
              to={t.to}
              className="card-hover group flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-600">
                <Icon name={t.icon} className="h-5 w-5" />
              </span>
              <span>
                <span className="flex items-center gap-1 font-semibold text-brand-800">
                  {t.label}
                  <ArrowRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                </span>
                <span className="mt-0.5 block text-sm text-slate-500">
                  {t.desc}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Leadership message */}
      <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-7 sm:p-9">
        <h2 className="mb-3 font-serif text-xl font-bold text-brand-800">
          A note from the team
        </h2>
        <blockquote className="border-l-4 border-gold-500 pl-5 text-slate-600">
          <p className="italic">"{org.leadershipMessage}"</p>
          <footer className="mt-3 text-sm font-semibold not-italic text-brand-700">
            — {org.leadershipName}
          </footer>
        </blockquote>
      </section>
    </div>
  );
}
