"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "home" },
    { href: "/about", label: "about" },
    { href: "/blog", label: "blog" },
  ];

  const socialLinks = [
    { href: "https://github.com/harrybaines", icon: Github, label: "GitHub" },
    { href: "https://linkedin.com/in/harrybaines", icon: Linkedin, label: "LinkedIn" },
    { href: "mailto:harry@example.com", icon: Mail, label: "Email" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex gap-8 items-center">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-mono transition-colors hover:text-black ${
                  pathname === link.href ? "text-black" : "text-neutral-500"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex gap-4 items-center">
            {socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-black transition-colors"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
