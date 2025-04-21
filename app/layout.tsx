import { Analytics } from '@vercel/analytics/next';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from "next";
import { IBM_Plex_Mono } from 'next/font/google';
import "./globals.css";

export const metadata: Metadata = {
  title: 'Harry Baines | Software Engineer',
  description: 'Personal portfolio site for Harry Baines.',
};

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-ibm-plex-mono',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${ibmPlexMono.variable} ${GeistMono.variable} ${GeistSans.variable}`}>
      <body className="font-sans bg-[#1D1E1E] text-[#B8B8B8] min-h-screen px-2 relative">
        <div className="max-w-3xl mx-auto">
          {children}
        </div>
        <Analytics />
        <footer className="pb-8 px-4 text-center text-sm text-[#8A8A8A] font-mono">
          Coded by Harry ({new Date().getFullYear()}), with a sprinkle of Claude
        </footer>
      </body>
    </html>
  );
}
