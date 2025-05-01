"use client";

import { profileConfig } from "@/config";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-6">
      <div className="bg-zinc-800/90 backdrop-blur-sm border border-zinc-800/50 rounded-full px-6 py-2.5 w-4xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full overflow-hidden">
            <Image
              src="/images/me.jpeg"
              alt={profileConfig.name}
              width={28}
              height={28}
              className="object-cover"
            />
          </div>
          <Link href="/" className="text-zinc-300 text-sm font-medium hover:text-amber-500 transition-colors">
            Harry Baines
          </Link>
        </div>
        <div className="hidden md:flex gap-5">
          <Link href={siteConfig.social.github} className="text-zinc-500 text-sm hover:text-amber-500 transition-colors">
            GitHub
          </Link>
          <Link href={siteConfig.social.twitter} className="text-zinc-500 text-sm hover:text-amber-500 transition-colors">
            Twitter
          </Link>
          <Link href={siteConfig.social.linkedin} className="text-zinc-500 text-sm hover:text-amber-500 transition-colors">
            LinkedIn
          </Link>
          <Link href={`mailto:${profileConfig.email}`} className="text-zinc-500 text-sm hover:text-amber-500 transition-colors">
            Email
          </Link>
        </div>
      </div>
    </nav>
  );
}