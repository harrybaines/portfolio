'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNav from "./mobile-nav";
import { Button } from "./ui/button";
import ProfileImg from "/public/assets/me.jpg";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="mt-4">
      <div className="mx-auto w-[85vw] max-w-2xl">
        <div className="border border-zinc-800 rounded-2xl bg-[#1B1B1B] px-4 h-14">
          <div className="flex justify-between items-center h-full">
            {/* Brand */}
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <Image
                src={ProfileImg}
                alt="harrybaines"
                width={26}
                height={26}
                className="rounded-full ring-2 ring-emerald-500/20"
              />
              <span className="font-medium">Harry Baines</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <nav className="flex gap-1">
                {[
                  { name: "About", path: "/about" },
                  { name: "Blog", path: "/blog" },
                ].map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`px-4 py-1.5 rounded-xl text-sm transition-colors ${pathname === link.path
                      ? "bg-zinc-800/50 text-emerald-500"
                      : "hover:bg-zinc-800/30 text-zinc-400 hover:text-zinc-200"
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              <a href="https://www.cal.com/harrybaines/" target="_blank" rel="noopener noreferrer">
                <Button
                  size="sm"
                  className="rounded-xl bg-emerald-500 hover:bg-emerald-600 text-black font-medium"
                >
                  Book a call
                </Button>
              </a>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}