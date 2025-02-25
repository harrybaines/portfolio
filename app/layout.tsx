import "@/app/globals.css"
import { Footer } from "@/components/layout/footer"
import { Navbar } from "@/components/layout/navbar"
import { ThemeProvider } from "@/components/layout/theme-provider"
import { Providers } from "@/components/providers"
import { Analytics } from "@vercel/analytics/react"
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from "geist/font/sans"
import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "Harry Baines",
  description: "Software Engineer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable}`}>
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

