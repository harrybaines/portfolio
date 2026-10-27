import type { Metadata } from "next"

import { AboutText, BackLink, Currently } from "@/components/about-parts"
import { Portrait, Snapshot } from "@/components/portrait"
import { ThemeToggle } from "@/components/theme-toggle"
import { aboutPage, site } from "@/lib/site"

export const metadata: Metadata = { title: "About — Harry Baines" }

export default function AboutLedger() {
  return (
    <div className="font-[family-name:var(--font-v6a)] lg:grid lg:grid-cols-[32%_1fr]">
      <aside className="flex items-center justify-center bg-muted/45 px-6 py-20 lg:sticky lg:top-0 lg:h-dvh lg:py-0">
        <div className="animate-rise text-center">
          <Portrait size={220} className="max-w-[56vw]" priority />
          <p className="label mt-7">{site.name}</p>
        </div>
      </aside>

      <main className="px-6 pb-32 pt-16 sm:px-12 lg:px-20 lg:pt-24">
        <div className="flex items-start justify-between gap-6">
          <BackLink slug="v6a" label="Harry Baines" className="animate-rise" />
          <ThemeToggle className="animate-rise -mt-2" />
        </div>

        <h1 className="animate-veil mt-12 max-w-2xl text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.15] tracking-[-0.03em]">
          {aboutPage.lead}
        </h1>

        <div className="mt-14 grid gap-14 lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-16">
          <AboutText className="max-w-lg text-[1.0625rem] leading-[1.85] text-muted-foreground" />
          <div>
            <Snapshot caption="The desk, most days" />
            <Currently className="mt-10" />
          </div>
        </div>

        <footer className="mt-24 border-t border-border pt-8">
          <BackLink slug="v6a" label="Back to the front page" />
        </footer>
      </main>
    </div>
  )
}
