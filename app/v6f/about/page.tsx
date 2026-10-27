import type { Metadata } from "next"

import { AboutText, BackLink, Currently } from "@/components/about-parts"
import { Portrait, Snapshot } from "@/components/portrait"
import { ThemeToggle } from "@/components/theme-toggle"
import { aboutPage } from "@/lib/site"

export const metadata: Metadata = { title: "About — Harry Baines" }

export default function AboutBare() {
  return (
    <div className="font-[family-name:var(--font-v6f)]">
      <ThemeToggle className="animate-rise fixed right-4 top-4 z-50 sm:right-8 sm:top-8" />

      <main className="mx-auto max-w-2xl px-6 pb-28 pt-20 sm:pt-28">
        <BackLink slug="v6f" label="Harry Baines" className="animate-rise" />

        <div className="animate-rise mt-12">
          <Portrait size={80} priority />
        </div>

        <h1 className="animate-veil mt-9 text-[clamp(2rem,5vw,3.25rem)] leading-[1.15] tracking-[-0.03em]">
          {aboutPage.lead}
        </h1>

        <AboutText className="mt-12 text-[1.125rem] leading-[1.9] text-muted-foreground" />

        <Snapshot className="mt-16" caption="The desk, most days" />

        <Currently className="mt-16" />

        <footer className="mt-16 border-t border-border pt-8">
          <BackLink slug="v6f" label="Back to the front page" />
        </footer>
      </main>
    </div>
  )
}
