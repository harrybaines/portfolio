import {
  Geist,
  Geist_Mono,
  IBM_Plex_Mono,
  Instrument_Serif,
  Inter,
  JetBrains_Mono,
  Newsreader,
} from "next/font/google";

// Each family is exposed as a CSS variable and mapped to a Tailwind
// `font-*` utility in global.css (font-sans, font-mono, font-geist, ...).

const inter = Inter({ subsets: ["latin"], variable: "--nf-inter", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--nf-jetbrains", display: "swap" });
const geist = Geist({ subsets: ["latin"], variable: "--nf-geist", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--nf-geist-mono", display: "swap" });
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--nf-plex-mono",
  display: "swap",
});
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--nf-instrument-serif",
  display: "swap",
});
const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--nf-newsreader",
  display: "swap",
});

export const fontVariables = [
  inter,
  jetbrains,
  geist,
  geistMono,
  plexMono,
  instrumentSerif,
  newsreader,
]
  .map((font) => font.variable)
  .join(" ");
