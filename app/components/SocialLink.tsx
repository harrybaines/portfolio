import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface SocialLinkProps {
  href: string;
  label: string;
  icon: LucideIcon;
}

export default function SocialLink({ href, label, icon: Icon }: SocialLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center shadow-xs justify-center px-4 py-2 border border-gray-200 rounded-md text-sm font-medium text-gray-500 bg-white hover:bg-zinc-50 hover:text-zinc-700 transition-colors"
      aria-label={label}
    >
      <Icon strokeWidth={1.5} className="w-4 h-4 mr-2" />
      <span>{label}</span>
    </Link>
  );
}