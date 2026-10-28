import Link from "next/link"

import { LabNav, LabPinned } from "@/components/lab"
import { Portrait } from "@/components/portrait"
import { lab } from "@/lib/lab"
import { links, site, work } from "@/lib/site"

const inline =
  "text-foreground underline decoration-foreground/30 underline-offset-[5px] transition-colors hover:decoration-foreground"

/** 06 Letter: the home page as a short note, signed off at the bottom. */
export default function Letter() {
  return (
    <div className="font-[family-name:var(--font-newsreader)] lg:grid lg:grid-cols-[30%_1fr]">
      <aside className="hidden bg-muted/45 lg:sticky lg:top-0 lg:flex lg:h-dvh lg:items-center lg:justify-center">
        <div className="text-center">
          <Portrait size={176} priority />
          <p className="mt-8 label">{site.caption}</p>
          <p className="mt-2 text-[0.9375rem] text-muted-foreground italic">
            usually somewhere near {lab.city}
          </p>
        </div>
      </aside>

      <main className="px-6 pt-10 pb-28 sm:px-12 sm:pt-16 lg:px-20 lg:pt-[max(6rem,calc(30dvh-6rem))]">
        <div className="flex items-center justify-between gap-5">
          <h1 className="group animate-veil text-[clamp(2.5rem,7vw,4.75rem)] leading-[1] font-normal tracking-[-0.035em]">
            Hi, I&apos;m {site.first}{" "}
            <span className="inline-block origin-[70%_70%] transition-transform duration-300 group-hover:rotate-[14deg]">
              👋
            </span>
          </h1>
          <Portrait size={64} className="shrink-0 lg:hidden" priority />
        </div>

        <div className="mt-10 max-w-xl animate-rise space-y-5 text-[1.125rem] leading-[1.65] text-muted-foreground">
          <p>
            I&apos;m a full stack engineer in the UK, currently a{" "}
            {work.title.toLowerCase()} at{" "}
            <a
              href={work.href}
              target="_blank"
              rel="noreferrer"
              className={inline}
            >
              {work.company}
            </a>
            . I&apos;ve been building for the web for 6+ years, and these days I
            mostly work on applied AI: wiring LLMs into products, in TypeScript
            and Python.
          </p>
          <p>
            Outside of work I freelance, build side projects and keep a long
            list of things to learn. A few of them are below, and there&apos;s
            more{" "}
            <Link href="/lab/about-c" className={inline}>
              about me here
            </Link>
            .
          </p>
          <p>
            You can find me on{" "}
            {links.map((l, i) => (
              <span key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className={inline}
                >
                  {l.label}
                </a>
                {i < links.length - 2
                  ? ", "
                  : i === links.length - 2
                    ? " or "
                    : "."}
              </span>
            ))}
          </p>
          <p className="pt-2 text-foreground italic">Harry</p>
          <p className="label">P.S. Press d to turn the lights off.</p>
        </div>

        <section className="mt-16 animate-rise">
          <h2 className="label">Things I&apos;ve made</h2>
          <LabPinned limit={4} className="mt-5" />
        </section>
      </main>

      <LabNav slug="6" />
    </div>
  )
}
