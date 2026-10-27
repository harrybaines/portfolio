import type { Metadata } from "next"
import { Geist, Geist_Mono, Newsreader } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Console } from "@/components/easter-eggs"
import { cn } from "@/lib/utils"

const sans = Geist({ subsets: ["latin"], variable: "--font-sans" })
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

// Display face for the site. The references in /references used Fraunces
// too; add it back here if you bring one of them back into app/.
const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
})

export const metadata: Metadata = {
  title: "Harry Baines — Full stack engineer",
  description:
    "Harry Baines is a full stack software engineer in the UK, working at the intersection of software and AI.",
}

const fontVars = [sans.variable, mono.variable, newsreader.variable]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("font-sans antialiased", ...fontVars)}
    >
      <body>
        <ThemeProvider>
          <Console />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
