import { Mail } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { contacts } from "@/data/content";

export default function Contacts() {
  return (
    <div>
      <PageHeader
        eyebrow="Who to ask"
        title="Key Contacts"
        intro="Not sure who to go to? Here's a quick guide to the people who can help."
      />

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-5 py-3 font-semibold">Name</th>
              <th className="px-5 py-3 font-semibold">Role</th>
              <th className="hidden px-5 py-3 font-semibold sm:table-cell">
                Ask them about
              </th>
              <th className="px-5 py-3 font-semibold">Contact</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {contacts.map((c, i) => (
              <tr key={i} className="hover:bg-slate-50">
                <td className="px-5 py-4 font-medium text-brand-800">
                  {c.name}
                </td>
                <td className="px-5 py-4 text-slate-600">{c.role}</td>
                <td className="hidden px-5 py-4 text-slate-500 sm:table-cell">
                  {c.forWhat}
                </td>
                <td className="px-5 py-4">
                  {c.email && (
                    <a
                      href={c.email.startsWith("#") ? c.email : `mailto:${c.email}`}
                      className="inline-flex items-center gap-1.5 text-brand-600 hover:text-brand-800"
                    >
                      <Mail className="h-4 w-4" />
                      <span className="hidden sm:inline">Email</span>
                    </a>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
