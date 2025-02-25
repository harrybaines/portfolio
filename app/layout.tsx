import "@/app/globals.css"
import { Footer } from "@/components/layout/footer"
import { Navbar } from "@/components/layout/navbar"
import { ThemeProvider } from "@/components/layout/theme-provider"
import { Providers } from "@/components/providers"
import { cn } from "@/lib/utils"
import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next"
import { Fira_Mono } from "next/font/google"
import type React from "react"

const firaMono = Fira_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-fira-mono",
})

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
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background antialiased pt-40", firaMono.variable, "font-sans")}>
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
    </html>
  )
}

