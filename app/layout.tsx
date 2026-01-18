import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
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

const sansFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sansFont.variable}>
      <body className="antialiased font-sans min-h-screen">
        <Navigation />
        <main>{children}</main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
