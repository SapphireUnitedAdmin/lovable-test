/**
 * ============================================================================
 *  CBM HUB — CENTRAL CONTENT FILE
 * ============================================================================
 *  This is the ONLY file you need to edit to update the hub's content.
 *  Replace the placeholder text and "#" links with your real values, SOP
 *  links, documents and contacts. The design will update automatically.
 *
 *  Tip: anything with a `url: "#"` is a placeholder waiting for a real link.
 * ============================================================================
 */

export const org = {
  hubName: "CBM Hub",
  division: "CBM Estate & Trust",
  parent: "Sapphire United",
  tagline: "Everything you need to find your feet and do great work.",
  welcomeHeadline: "Welcome to the team 👋",
  welcomeIntro:
    "This is your home base. Whether it's your first day or your hundredth, the CBM Hub brings together our values, your onboarding steps, our standard operating procedures, and the tools and contacts you'll use every day.",
  leadershipMessage:
    "We're genuinely glad you're here. At CBM Estate & Trust we look after some of the most important moments in our clients' lives, and we do it with care, integrity and attention to detail. Take your time with onboarding, ask questions freely, and lean on the team — that's what we're here for.",
  leadershipName: "The CBM Leadership Team",
};

// ----------------------------------------------------------------------------
// VALUES & CULTURE
// ----------------------------------------------------------------------------
export const mission =
  "To protect and grow our clients' legacies through trustworthy, expert estate and trust administration — delivered with warmth and precision.";

export const vision =
  "To be the most respected estate & trust partner in the region, known for doing the right thing, every time.";

export interface Value {
  icon: string; // lucide icon name — see ICONS map in components/Icon.tsx
  title: string;
  description: string;
}

export const values: Value[] = [
  {
    icon: "ShieldCheck",
    title: "Integrity first",
    description:
      "We do the right thing even when no one is watching. Clients trust us with their legacies — we honour that.",
  },
  {
    icon: "HeartHandshake",
    title: "Care for people",
    description:
      "We treat clients and each other with empathy and respect, especially in difficult moments.",
  },
  {
    icon: "Target",
    title: "Precision & detail",
    description:
      "In estate and trust work, the details matter. We're thorough, accurate and careful.",
  },
  {
    icon: "Sparkles",
    title: "Always improving",
    description:
      "We learn, share knowledge and improve our processes so we get a little better every day.",
  },
  {
    icon: "Users",
    title: "One team",
    description:
      "We support each other, communicate openly and never let a colleague struggle alone.",
  },
  {
    icon: "Clock",
    title: "Own it",
    description:
      "We take responsibility, follow through on commitments and keep our promises to clients.",
  },
];

// ----------------------------------------------------------------------------
// ONBOARDING CHECKLIST
// ----------------------------------------------------------------------------
export interface ChecklistItem {
  id: string; // must be unique & stable (used to save progress)
  label: string;
  hint?: string;
}

export interface ChecklistGroup {
  title: string;
  subtitle: string;
  items: ChecklistItem[];
}

export const onboarding: ChecklistGroup[] = [
  {
    title: "Day 1",
    subtitle: "Get set up and meet the team",
    items: [
      { id: "d1-1", label: "Complete HR paperwork & ID verification" },
      { id: "d1-2", label: "Collect your laptop and access card" },
      { id: "d1-3", label: "Set up your email and sign in to core tools", hint: "See the Tools & Links page" },
      { id: "d1-4", label: "Meet your line manager & onboarding buddy" },
      { id: "d1-5", label: "Read the Welcome and Our Values pages on this hub" },
    ],
  },
  {
    title: "Week 1",
    subtitle: "Learn the ropes",
    items: [
      { id: "w1-1", label: "Complete mandatory compliance & data protection training" },
      { id: "w1-2", label: "Read the key SOPs for your role", hint: "See the SOPs page" },
      { id: "w1-3", label: "Shadow a colleague on a live case" },
      { id: "w1-4", label: "Set up your calendar, signature and out-of-office" },
      { id: "w1-5", label: "Book a 1:1 with your manager to set early goals" },
    ],
  },
  {
    title: "First Month",
    subtitle: "Build confidence and momentum",
    items: [
      { id: "m1-1", label: "Complete role-specific training modules" },
      { id: "m1-2", label: "Handle your first case with supervision" },
      { id: "m1-3", label: "Meet key contacts across departments" },
      { id: "m1-4", label: "30-day check-in with your manager" },
      { id: "m1-5", label: "Give feedback on your onboarding experience" },
    ],
  },
];

// ----------------------------------------------------------------------------
// SOPs (Standard Operating Procedures)
// ----------------------------------------------------------------------------
export interface LinkItem {
  title: string;
  description?: string;
  url: string;
}

export interface SopCategory {
  icon: string;
  title: string;
  items: LinkItem[];
}

export const sops: SopCategory[] = [
  {
    icon: "FileText",
    title: "Estate Administration",
    items: [
      { title: "Opening a new estate file", description: "Step-by-step intake process", url: "#" },
      { title: "Grant of probate application", url: "#" },
      { title: "Estate accounts & distribution", url: "#" },
    ],
  },
  {
    icon: "Landmark",
    title: "Trust Administration",
    items: [
      { title: "Setting up a new trust", url: "#" },
      { title: "Annual trust review process", url: "#" },
      { title: "Trustee meeting & minutes", url: "#" },
    ],
  },
  {
    icon: "ScrollText",
    title: "Wills & Documents",
    items: [
      { title: "Will drafting checklist", url: "#" },
      { title: "Document storage & retrieval", url: "#" },
      { title: "Execution & witnessing standards", url: "#" },
    ],
  },
  {
    icon: "ShieldCheck",
    title: "Compliance & Client Care",
    items: [
      { title: "Client onboarding & AML/KYC", url: "#" },
      { title: "Data protection & confidentiality", url: "#" },
      { title: "Complaints handling procedure", url: "#" },
    ],
  },
];

// ----------------------------------------------------------------------------
// TOOLS & USEFUL LINKS
// ----------------------------------------------------------------------------
export interface ToolLink extends LinkItem {
  icon: string;
}

export const tools: ToolLink[] = [
  { icon: "Mail", title: "Email (Outlook / Gmail)", description: "Your work inbox", url: "#" },
  { icon: "Calendar", title: "Shared Calendar", description: "Team & meeting room bookings", url: "#" },
  { icon: "FolderOpen", title: "Document Drive", description: "Shared files & templates", url: "#" },
  { icon: "Database", title: "Case Management / CRM", description: "Client & matter records", url: "#" },
  { icon: "Users", title: "HR Portal", description: "Payslips, leave & benefits", url: "#" },
  { icon: "MessageSquare", title: "Team Chat", description: "Slack / Teams", url: "#" },
  { icon: "BookOpen", title: "Learning Platform", description: "Training & CPD", url: "#" },
  { icon: "LifeBuoy", title: "IT Support / Helpdesk", description: "Raise a ticket", url: "#" },
];

// ----------------------------------------------------------------------------
// KEY CONTACTS
// ----------------------------------------------------------------------------
export interface Contact {
  name: string;
  role: string;
  forWhat: string;
  email?: string;
}

export const contacts: Contact[] = [
  { name: "[Name]", role: "Office / Operations Manager", forWhat: "Day-to-day questions, supplies, facilities", email: "#" },
  { name: "[Name]", role: "HR / People", forWhat: "Pay, leave, benefits, wellbeing", email: "#" },
  { name: "[Name]", role: "IT Support", forWhat: "Logins, hardware, software issues", email: "#" },
  { name: "[Name]", role: "Compliance Officer", forWhat: "AML/KYC, data protection, risk", email: "#" },
  { name: "[Name]", role: "Head of Estate & Trust", forWhat: "Technical & case escalations", email: "#" },
];

// ----------------------------------------------------------------------------
// FAQ
// ----------------------------------------------------------------------------
export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "Who is my onboarding buddy and what do they do?",
    answer:
      "Your buddy is an experienced colleague assigned to help you settle in. They're your go-to for the small questions you'd rather not raise in a big meeting. Your manager will introduce you on Day 1.",
  },
  {
    question: "How do I book annual leave?",
    answer:
      "Leave is requested through the HR Portal (see the Tools & Links page). Give as much notice as you can and check with your manager for busy periods.",
  },
  {
    question: "Where do I find templates and precedents?",
    answer:
      "All current templates live in the Document Drive. Always use the latest version from there rather than an old copy — check the SOPs page if you're unsure which to use.",
  },
  {
    question: "What do I do if I make a mistake?",
    answer:
      "Tell your manager as soon as possible. We have a no-blame culture for honest mistakes — what matters is putting it right quickly and learning from it.",
  },
  {
    question: "Who do I contact about IT problems?",
    answer:
      "Raise a ticket with IT Support / Helpdesk (Tools & Links page) or contact the IT lead on the Key Contacts page for anything urgent.",
  },
];
