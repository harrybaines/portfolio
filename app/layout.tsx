import "@/app/globals.css"
import { Footer } from "@/components/layout/footer"
import { Navbar } from "@/components/layout/navbar"
import { ThemeProvider } from "@/components/layout/theme-provider"
import { Providers } from "@/components/providers"
import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next"
import type React from "react"

import { Noto_Sans, Noto_Sans_Mono } from 'next/font/google'

export const metadata: Metadata = {
  title: "Harry Baines",
  description: "Software Engineer",
}

const sansFont = Noto_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

const monoFont = Noto_Sans_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sansFont.variable} ${monoFont.variable}`}>
      <body className="min-h-screen bg-background antialiased pt-40">
        <Providers>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
            <Navbar />
            <main className="container max-w-5xl mx-auto">
              {children}
              <Analytics />
            </main>
            <Footer />
          </ThemeProvider>
        </Providers>
      </body>
    </html >
  )
}

