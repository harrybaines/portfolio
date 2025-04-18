import { Analytics } from '@vercel/analytics/next';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from "next";
import { siteConfig } from './config/site';
import "./globals.css";

export const metadata: Metadata = {
  title: "Harry Baines Portfolio",
  description: "My personal portfolio website",
};

// Minimal footer component
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/[0.03] py-6">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 px-6">
        <div className="flex items-center">
          <div className="font-mono text-xs text-white/40">
            <span className="text-white/60">harrybaines.net</span> © {currentYear}
          </div>
        </div>

        <div className="flex gap-6">
          <a href="/about" className="font-mono text-xs text-white/40 hover:text-white/70 transition-colors">
            about
          </a>
          <a href={siteConfig.social.twitter} className="font-mono text-xs text-white/40 hover:text-white/70 transition-colors">
            twitter
          </a>
          <a href={siteConfig.social.linkedin} className="font-mono text-xs text-white/40 hover:text-white/70 transition-colors">
            linkedin
          </a>
          <a href={siteConfig.social.youtube} className="font-mono text-xs text-white/40 hover:text-white/70 transition-colors">
            youtube
          </a>
          <a href={siteConfig.social.github} className="font-mono text-xs text-white/40 hover:text-white/70 transition-colors">
            github
          </a>
        </div>
      </div>
    </footer>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans bg-[#1C1C1C] text-white min-h-screen px-2 relative">
        {children}
        <Footer />
      </body>
      <Analytics />
    </html>
  );
}
