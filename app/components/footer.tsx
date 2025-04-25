"use client";

import { profileConfig } from "@/config";
import { Coffee, Heart } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-20 px-6 bg-stone-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-semibold text-white">{profileConfig.name || 'Harry Baines'}</h2>
            </div>

            <p className="text-stone-400 max-w-md mb-6">
              Writing code and building great software with a focus on high quality, clean code.
            </p>

            <div className="flex items-center gap-6">
              {profileConfig.socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-300 hover:text-amber-400 transition-colors"
                  aria-label={link.name}
                >
                  {<link.icon />}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:items-end justify-between">
            <div className="space-y-4">
              <h3 className="text-white font-medium mb-2">Quick Links</h3>
              <nav className="flex flex-col gap-2">
                <Link href="/" className="text-stone-400 hover:text-amber-400 transition-colors">Home</Link>
                <Link href="/about" className="text-stone-400 hover:text-amber-400 transition-colors">About</Link>
              </nav>
            </div>

            <div className="pt-6 mt-6 w-full text-stone-500 text-sm flex flex-col md:items-end">
              <div className="flex items-center gap-2">
                <Heart size={14} className="text-amber-500" />
                <span>Made with love and coffee</span>
                <Coffee size={14} />
              </div>
              <div className="mt-1">© {new Date().getFullYear()} {profileConfig.name || 'Harry Baines'}. All rights reserved.</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}