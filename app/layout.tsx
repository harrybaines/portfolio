import type { Metadata } from "next";
import "./globals.css";

import { JetBrains_Mono, Noto_Serif } from 'next/font/google';

export const metadata: Metadata = {
  title: "Harry Baines",
  description: "Software Engineer",
};

const font_sans = Noto_Serif({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-sans',
})

const font_mono = JetBrains_Mono({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${font_sans.className} ${font_mono.variable}`}>
        {children}
      </body>
    </html>
  );
}
