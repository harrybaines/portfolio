import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Fira_Mono, Inter } from "next/font/google";
import "./global.css";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Harry Baines",
    template: "%s | Harry Baines",
  },
  description: "Software Engineer based in the UK, specializing in AI integration, LLMs, and full-stack development.",
  openGraph: {
    title: "Harry Baines",
    description: "Software Engineer based in the UK, specializing in AI integration, LLMs, and full-stack development.",
    url: baseUrl,
    siteName: "Harry Baines",
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

const monoFont = Fira_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "700"],
});

const sansFont = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "600"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${monoFont.variable} ${sansFont.variable}`}>
      <body className="antialiased min-h-screen">
        <main>{children}</main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
