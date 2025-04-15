'use client';

import { siteConfig } from "@/app/config/site";
import { Github, Linkedin, Mail, Youtube } from "lucide-react";

// Custom X (formerly Twitter) icon component
const XIcon = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"
      fill="currentColor"
    />
  </svg>
);

export function SocialLinks() {
  return (
    <div className="flex gap-6">
      <a
        href={`mailto:${siteConfig.social.email}`}
        className="text-white/70 hover:text-white transition-colors"
        aria-label="Email"
      >
        <Mail size={18} />
      </a>
      <a
        href={siteConfig.social.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/70 hover:text-white transition-colors"
        aria-label="X (formerly Twitter)"
      >
        <XIcon size={18} />
      </a>
      <a
        href={siteConfig.social.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/70 hover:text-white transition-colors"
        aria-label="GitHub"
      >
        <Github size={18} />
      </a>
      <a
        href={siteConfig.social.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/70 hover:text-white transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin size={18} />
      </a>
      <a
        href={siteConfig.social.youtube}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/70 hover:text-white transition-colors"
        aria-label="YouTube"
      >
        <Youtube size={18} />
      </a>
    </div>
  );
}