import { useState } from "react";
import { NavLink, Outlet, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Icon } from "./Icon";
import { org } from "@/data/content";

const NAV = [
  { to: "/", label: "Welcome", icon: "Home", end: true },
  { to: "/news", label: "News", icon: "Megaphone" },
  { to: "/values", label: "Our Values", icon: "Gem" },
  { to: "/onboarding", label: "Onboarding", icon: "CheckSquare" },
  { to: "/sops", label: "SOPs", icon: "FileText" },
  { to: "/tools", label: "Tools & Links", icon: "Link2" },
  { to: "/contacts", label: "Key Contacts", icon: "Contact" },
  { to: "/faq", label: "FAQ", icon: "HelpCircle" },
];

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="flex h-full flex-col">
      <Link
        to="/"
        onClick={onNavigate}
        className="flex items-center gap-3 px-6 py-6 border-b border-white/10"
      >
        <span className="grid h-10 w-10 place-items-center rounded-lg bg-gold-500 font-serif text-sm font-bold text-brand-900">
          CBM
        </span>
        <span>
          <span className="block text-sm font-semibold leading-tight text-white">
            {org.hubName}
          </span>
          <span className="block text-xs text-brand-200">{org.division}</span>
        </span>
      </Link>

      <nav className="flex-1 space-y-1 px-3 py-4">
        {NAV.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            onClick={onNavigate}
            className={({ isActive }) =>
              [
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-gold-500 text-brand-900"
                  : "text-brand-100 hover:bg-white/10 hover:text-white",
              ].join(" ")
            }
          >
            <Icon name={item.icon} className="h-5 w-5 shrink-0" />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="px-6 py-4 text-xs text-brand-300 border-t border-white/10">
        {org.parent} · {org.division}
      </div>
    </div>
  );
}

export default function Layout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen lg:flex">
      {/* Desktop sidebar */}
      <aside className="hidden w-64 shrink-0 bg-brand-800 lg:block">
        <div className="sticky top-0 h-screen">
          <SidebarContent />
        </div>
      </aside>

      {/* Mobile top bar */}
      <header className="flex items-center justify-between bg-brand-800 px-4 py-3 lg:hidden">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-gold-500 font-serif text-xs font-bold text-brand-900">
            CBM
          </span>
          <span className="text-sm font-semibold text-white">{org.hubName}</span>
        </Link>
        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="text-white"
        >
          <Menu className="h-6 w-6" />
        </button>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-64 bg-brand-800 shadow-xl">
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="absolute right-3 top-4 text-white"
            >
              <X className="h-6 w-6" />
            </button>
            <SidebarContent onNavigate={() => setOpen(false)} />
          </div>
        </div>
      )}

      {/* Main content */}
      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-5 py-8 sm:px-8 sm:py-12">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
