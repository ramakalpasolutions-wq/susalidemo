import {
  HeartHandshake, GitPullRequestArrow, CalendarCheck2, Building2, ScanLine,
  RefreshCcw, Activity, ShieldCheck, Network, Stethoscope, ClipboardCheck,
  ArrowUpRight, Globe2, HeartPulse, Lightbulb, Waypoints, UsersRound,
  UserRoundPlus, FolderHeart, FileText, FileUp, FileCheck2, TestTube,
} from 'lucide-react';

export const iconMap = {
  HeartHandshake, GitPullRequestArrow, CalendarCheck2, Building2, ScanLine,
  RefreshCcw, Activity, ShieldCheck, Network, Stethoscope, ClipboardCheck,
  ArrowUpRight, Globe2, HeartPulse, Lightbulb, Waypoints, UsersRound,
  UserRoundPlus, FolderHeart, FileText, FileUp, FileCheck2, TestTube,
};
export default function DynamicIcon({ name, size = 24, ...props }) {
  const Icon = iconMap[name] || Activity;
  return <Icon size={size} strokeWidth={1.8} {...props} />;
}
