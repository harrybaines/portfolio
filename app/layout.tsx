import { Analytics } from '@vercel/analytics/next';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from "next";
import { IBM_Plex_Mono, Lora } from 'next/font/google';
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

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-lora',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${ibmPlexMono.variable} ${GeistMono.variable} ${GeistSans.variable} ${lora.variable}`}>
      <body className="font-sans bg-background min-h-screen px-2 relative">
        <div className="max-w-3xl mx-auto px-6 py-20 lg:py-40 3xl:py-80">
          {children}
        </div>
        <footer className="py-10 px-4 text-center text-sm text-foreground">
          Coded by Harry ({new Date().getFullYear()}), with a sprinkle of Claude
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
