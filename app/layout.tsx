import "@/app/globals.css"
import { baseUrl } from "@/app/sitemap"
import { Footer } from "@/components/layout/footer"
import { Navbar } from "@/components/layout/navbar"
import { Providers } from "@/components/layout/providers"
import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next"
import { Noto_Sans, Noto_Sans_Mono } from 'next/font/google'
import type React from "react"

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Harry Baines | Software Engineer",
    template: "%s | Harry Baines",
  },
  description: "Software Engineer",
  openGraph: {
    title: 'Harry Baines | Software Engineer',
    description: "Harry Baines portfolio website",
    url: baseUrl,
    siteName: "Harry Baines",
    locale: "en_GB",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    'max-video-preview': -1,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
}

const sansFont = Noto_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
})

const monoFont = Noto_Sans_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${sansFont.variable} ${monoFont.variable}`} suppressHydrationWarning>
      <body className="antialiased min-h-screen bg-background flex flex-col">
        <Providers>
          <Navbar />
          <main className="container max-w-4xl px-6 sm:px-8 lg:px-10 pt-32 flex-grow">
            {children}
            <Analytics />
          </main>
          <Footer />
        </Providers>
      </body>
    </html >
  )
}

