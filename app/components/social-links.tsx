"use client";

import { profileConfig } from "@/config";
import Link from "next/link";

type SocialLinksProps = {
  className?: string;
};

export default function SocialLinks({
  className = "",
}: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {profileConfig.socialLinks.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-zinc-500 hover:text-amber-500 transition-colors`}
            aria-label={link.name}
          >
            {<link.icon strokeWidth={1.5} className="w-4 h-4" />}
          </Link>
        );
      })}
    </div>
  );
}