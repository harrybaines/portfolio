import {
  Fraunces,
  IBM_Plex_Mono,
  Instrument_Serif,
  Inter_Tight,
} from "next/font/google"

// Extra faces for the lab only. They load on the lab pages that use them,
// never on the live site.
export const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-lab-instrument",
})

export const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-lab-fraunces",
})

export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-lab-plex",
})

export const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-lab-inter",
})
