import type { Metadata } from "next"

import { AboutText, BackLink, Currently } from "@/components/about-parts"
import { Portrait, Snapshot } from "@/components/portrait"
import { ThemeToggle } from "@/components/theme-toggle"
import { aboutPage, site } from "@/lib/site"
import { cn } from "@/lib/utils"

export const metadata: Metadata = { title: "About — Harry Baines" }

const rail = "grid gap-3 sm:grid-cols-[6.5rem_minmax(0,1fr)] sm:gap-8"

export default function AboutRule() {
  return (
    <div className="font-[family-name:var(--font-v6h)] lg:grid lg:grid-cols-[35%_1fr]">
      <aside className="flex items-center justify-center bg-muted/45 px-6 py-20 lg:sticky lg:top-0 lg:h-dvh lg:py-0">
        <div className="animate-rise text-center">
          <Portrait size={220} className="max-w-[50vw]" priority />
          <p className="mt-7 label">{site.name}</p>
        </div>
      </aside>

      <main className="px-6 pt-16 pb-28 sm:px-12 lg:px-16 lg:pt-24">
        <div className={cn(rail, "animate-rise")}>
          <ThemeToggle size="sm" className="-ml-1.5 justify-self-start" />
          <div>
            <BackLink slug="v6h" label="Harry Baines" />
            <h1 className="mt-5 max-w-2xl animate-veil text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.15] font-light tracking-[-0.035em]">
              {aboutPage.lead}
            </h1>
          </div>
        </div>

        <div className={cn(rail, "mt-14")}>
          <p className="label sm:pt-2">About</p>
          <AboutText className="max-w-lg text-[1.0625rem] leading-[1.85] text-muted-foreground" />
        </div>

        <div className={cn(rail, "mt-14")}>
          <p className="label sm:pt-2">The desk</p>
          <Snapshot
            className="max-w-md"
            caption="Most days it looks like this"
          />
        </div>

        <div className={cn(rail, "mt-14")}>
          <p className="label sm:pt-2">Currently</p>
          <Currently className="max-w-md" />
        </div>

        <footer className={cn(rail, "mt-16 border-t border-border pt-8")}>
          <span className="label">Back</span>
          <BackLink slug="v6h" label="Back to the front page" />
        </footer>
      </main>
    </div>
  )
}
