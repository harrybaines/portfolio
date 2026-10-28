import {
  LabLinks,
  LabNav,
  LabPinned,
  LocalTime,
  MoreAbout,
  StatusDot,
} from "@/components/lab"
import { Portrait } from "@/components/portrait"
import { lab } from "@/lib/lab"
import { site, work } from "@/lib/site"

const facts = [
  ["Based", `${lab.city}, UK`],
  ["Local time", <LocalTime key="t" />],
  ["Now", work.company],
  ["Status", <StatusDot key="s">{lab.status}</StatusDot>],
] as const

/** 02 ID card: the left column becomes a small profile card. */
export default function IdCard() {
  return (
    <div className="font-[family-name:var(--font-newsreader)] lg:grid lg:grid-cols-[30%_1fr]">
      <aside className="hidden bg-muted/45 px-10 lg:sticky lg:top-0 lg:flex lg:h-dvh lg:items-center lg:justify-center">
        <div className="w-full max-w-[19.5rem] rounded-xl border border-border/60 bg-background p-7 shadow-[0_1px_0_rgba(0,0,0,0.02),0_12px_32px_-16px_rgba(0,0,0,0.12)]">
          <div className="flex items-center gap-4">
            <Portrait size={64} priority />
            <div>
              <p className="text-lg leading-tight">{site.name}</p>
              <p className="mt-1 label whitespace-nowrap">{site.caption}</p>
            </div>
          </div>
          <dl className="mt-6 border-t border-border/50">
            {facts.map(([k, v]) => (
              <div
                key={k}
                className="flex items-baseline justify-between gap-4 border-b border-border/50 py-2.5"
              >
                <dt className="label">{k}</dt>
                <dd className="label whitespace-nowrap text-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </aside>

      <main className="px-6 pt-10 pb-28 sm:px-12 sm:pt-16 lg:px-20 lg:pt-[max(6rem,calc(36dvh-6rem))]">
        <p className="animate-rise pr-10 label sm:pr-0">
          {site.role} — {site.location} 🇬🇧
        </p>
        <div className="mt-7 flex items-center justify-between gap-5">
          <h1 className="animate-veil text-[clamp(2.5rem,8vw,5.5rem)] leading-[0.95] font-normal tracking-[-0.035em] lg:whitespace-nowrap">
            {site.first}{" "}
            <em className="text-muted-foreground italic">{site.last}</em>
          </h1>
          <Portrait size={64} className="shrink-0 lg:hidden" priority />
        </div>

        <div className="mt-10 max-w-xl animate-rise space-y-4 text-[1.0625rem] leading-[1.6] text-muted-foreground">
          <p>{site.about[0]}</p>
        </div>
        <MoreAbout href="/lab/about-a" className="mt-6" />

        <LabLinks className="mt-10 animate-rise" />

        <section className="mt-14 animate-rise">
          <h2 className="label">Pinned</h2>
          <LabPinned className="mt-5" />
        </section>
      </main>

      <LabNav slug="2" />
    </div>
  )
}
