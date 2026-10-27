import type { Metadata } from "next"

import { AboutText, BackLink, Currently } from "@/components/about-parts"
import { Portrait, Snapshot } from "@/components/portrait"
import { ThemeToggle } from "@/components/theme-toggle"
import { aboutPage, site } from "@/lib/site"

export const metadata: Metadata = { title: "About — Harry Baines" }

export default function AboutCard() {
  return (
    <div className="font-[family-name:var(--font-v6b)] lg:grid lg:grid-cols-[24rem_1fr]">
      <aside className="flex flex-col items-center gap-10 px-6 pt-10 lg:sticky lg:top-0 lg:h-dvh lg:items-start lg:justify-between lg:pb-12">
        <ThemeToggle className="animate-rise self-start" />
        <figure className="animate-rise border border-border p-5 lg:self-center">
          <Portrait size={188} className="max-w-[52vw]" priority />
          <figcaption className="label mt-5 border-t border-border pt-4 text-center">
            {site.name}
          </figcaption>
        </figure>
        <p className="label hidden lg:block">{site.location}</p>
      </aside>

      <main className="px-6 pb-32 pt-10 sm:px-12 lg:px-16 lg:pt-24">
        <BackLink slug="v6b" label="Harry Baines" className="animate-rise" />

        <h1 className="animate-veil mt-12 max-w-2xl text-[clamp(2rem,4.5vw,3.25rem)] font-light leading-[1.15] tracking-[-0.035em]">
          {aboutPage.lead}
        </h1>

        <AboutText className="mt-12 max-w-xl text-[1.0625rem] leading-[1.85] text-muted-foreground" />

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-start">
          <Snapshot
            className="border border-border p-4"
            caption="The desk, most days"
          />
          <Currently />
        </div>

        <footer className="mt-20 border-t border-border pt-8">
          <BackLink slug="v6b" label="Back to the front page" />
        </footer>
      </main>
    </div>
  )
}
