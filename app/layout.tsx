import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { fontVariables } from "./fonts";
import "./global.css";
import { baseUrl } from "./sitemap";
import Navigation from "./components/Navigation";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Harry Baines - Software Engineer",
    template: "%s | Harry Baines",
  },
  description: "Applied AI engineer based in the UK, building LLM-powered products and full-stack systems.",
  openGraph: {
    title: "Harry Baines - Software Engineer",
    description: "Applied AI engineer based in the UK, building LLM-powered products and full-stack systems.",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontVariables}>
      <body className="antialiased font-sans min-h-screen">
        <Navigation />
        <main>{children}</main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
