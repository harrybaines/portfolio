"use client";

import { profileConfig } from "@/config";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  // Determine active page based on pathname
  const isActive = (path: string): boolean => {
    if (path === "/" && pathname === "/") return true;
    if (path === "/about" && pathname === "/about") return true;
    if (path === "projects" && (pathname === "/projects" || pathname.includes("#projects"))) return true;
    if (path === "writing" && (pathname === "/writing" || pathname.includes("#writing"))) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-amber-50 border-b border-amber-100">
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 hover:text-amber-700 transition-colors">
          <Image
            src="/images/brand_transparent.png"
            alt="Brand logo"
            width={36}
            height={36}
          />
          <span className="font-medium text-stone-800">harrybaines.net</span>
        </Link>

        <nav className="hidden md:flex space-x-8">
          <Link
            href="/"
            className={`transition-colors font-medium ${isActive("/") ? "text-amber-700" : "text-stone-700 hover:text-amber-700"}`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`transition-colors font-medium ${isActive("/about") ? "text-amber-700" : "text-stone-700 hover:text-amber-700"}`}
          >
            About
          </Link>
        </nav>

        <div className="flex items-center gap-6">
          <a
            href={`mailto:${profileConfig.email}`}
            className="text-sm px-4 py-2 rounded-md bg-amber-600 text-white hover:bg-amber-700 transition-colors inline-flex items-center gap-2"
          >
            <Mail size={14} />
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}