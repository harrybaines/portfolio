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
import { site } from "@/lib/site"

const sections = [
  ["01", "About", "about"],
  ["02", "Elsewhere", "elsewhere"],
  ["03", "Pinned", "pinned"],
] as const

function Heading({ n, label }: { n: string; label: string }) {
  return (
    <h2 className="flex items-baseline gap-4 label">
      <span className="text-muted-foreground/60">{n}</span>
      {label}
    </h2>
  )
}

/** 05 Index: numbered sections, a mini contents list and a "now" line. */
export default function Index() {
  return (
    <div className="font-[family-name:var(--font-newsreader)] lg:grid lg:grid-cols-[30%_1fr]">
      <aside className="hidden bg-muted/45 px-12 py-16 lg:sticky lg:top-0 lg:flex lg:h-dvh lg:flex-col lg:justify-between">
        <div>
          <Portrait size={112} priority />
          <p className="mt-7 label">{site.caption}</p>
          <p className="mt-2.5 label text-muted-foreground/60">
            {lab.city} · <LocalTime />
          </p>
          <ol className="mt-12 space-y-3">
            {sections.map(([n, label, id]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="flex gap-4 label transition-colors hover:text-foreground"
                >
                  <span className="text-muted-foreground/60">{n}</span>
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </div>
        <StatusDot className="label">Now · {lab.now}</StatusDot>
      </aside>

      <main className="px-6 pt-10 pb-28 sm:px-12 sm:pt-16 lg:px-20 lg:pt-[max(6rem,calc(30dvh-6rem))]">
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

        <section id="about" className="mt-16 animate-rise scroll-mt-16">
          <Heading n="01" label="About" />
          <p className="mt-5 max-w-xl text-[1.0625rem] leading-[1.6] text-muted-foreground">
            {site.about[0]}
          </p>
          <MoreAbout href="/lab/about-c" className="mt-6" />
        </section>

        <section id="elsewhere" className="mt-16 animate-rise scroll-mt-16">
          <Heading n="02" label="Elsewhere" />
          <LabLinks className="mt-5" />
        </section>

        <section id="pinned" className="mt-16 animate-rise scroll-mt-16">
          <Heading n="03" label="Pinned" />
          <LabPinned numbered className="mt-5" />
        </section>
      </main>

      <LabNav slug="5" />
    </div>
  )
}
