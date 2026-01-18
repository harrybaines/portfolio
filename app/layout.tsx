import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Libre_Baskerville, IBM_Plex_Mono } from "next/font/google";
import "./global.css";
import { baseUrl } from "./sitemap";
import Navigation from "./components/Navigation";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Harry Baines - Software Engineer",
    template: "%s | Harry Baines",
  },
  description: "Software Engineer based in the UK, specializing in AI integration, LLMs, and full-stack development.",
  openGraph: {
    title: "Harry Baines - Software Engineer",
    description: "Software Engineer based in the UK, specializing in AI integration, LLMs, and full-stack development.",
    url: baseUrl,
    siteName: "Harry Baines Portfolio",
    locale: "en_GB",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const serifFont = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "700"],
});

const monoFont = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serifFont.variable} ${monoFont.variable}`}>
      <body className="antialiased font-serif min-h-screen">
        <Navigation />
        <main>{children}</main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
