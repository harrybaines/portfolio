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
      className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-white border border-neutral-200 text-neutral-600 hover:text-blue-600 hover:border-blue-200 shadow-sm transition-all duration-200"
      aria-label={label}
    >
      <Icon strokeWidth={1.5} className="w-4 h-4" />
      <span className="sr-only">{label}</span>
    </Link>
  );
}