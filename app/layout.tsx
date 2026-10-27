import type { Metadata } from "next"
import {
  EB_Garamond,
  Fraunces,
  Geist,
  Geist_Mono,
  Instrument_Serif,
  Newsreader,
} from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Console } from "@/components/easter-eggs"
import { cn } from "@/lib/utils"

const sans = Geist({ subsets: ["latin"], variable: "--font-sans" })
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

// Display faces. Each variation picks one; several share.
const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
})
const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
})
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" })
const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-eb-garamond",
})

export const metadata: Metadata = {
  title: "Harry Baines — Software engineer",
  description:
    "Harry Baines is a software engineer at ConnexAI, based in the UK. He builds small, fast digital products.",
}

const fontVars = [
  sans.variable,
  mono.variable,
  instrument.variable,
  newsreader.variable,
  fraunces.variable,
  ebGaramond.variable,
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased font-sans", ...fontVars)}
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
