import {
  ShieldCheck,
  HeartHandshake,
  Target,
  Sparkles,
  Users,
  Clock,
  FileText,
  Landmark,
  ScrollText,
  Mail,
  Calendar,
  FolderOpen,
  Database,
  MessageSquare,
  BookOpen,
  LifeBuoy,
  Home,
  Gem,
  CheckSquare,
  Link2,
  Contact as ContactIcon,
  HelpCircle,
  Megaphone,
  type LucideIcon,
} from "lucide-react";

// Map string names (used in content.ts) to actual icon components.
const ICONS: Record<string, LucideIcon> = {
  ShieldCheck,
  HeartHandshake,
  Target,
  Sparkles,
  Users,
  Clock,
  FileText,
  Landmark,
  ScrollText,
  Mail,
  Calendar,
  FolderOpen,
  Database,
  MessageSquare,
  BookOpen,
  LifeBuoy,
  Home,
  Gem,
  CheckSquare,
  Link2,
  Contact: ContactIcon,
  HelpCircle,
  Megaphone,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = ICONS[name] ?? HelpCircle;
  return <Cmp className={className} />;
}
