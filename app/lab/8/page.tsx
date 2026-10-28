import { LabLinks, LabNav, LocalTime, MoreAbout } from "@/components/lab"
import { Portrait } from "@/components/portrait"
import { lab } from "@/lib/lab"
import { projects, site } from "@/lib/site"

import { fraunces } from "../fonts"

/** 08 Centre stage: one calm centred column in Fraunces. */
export default function CentreStage() {
  return (
    <main
      className={`${fraunces.variable} mx-auto flex min-h-dvh max-w-2xl flex-col items-center px-6 pt-24 pb-32 text-center font-[family-name:var(--font-lab-fraunces)] sm:pt-32`}
    >
      <Portrait size={96} priority className="animate-rise" />
      <p className="mt-6 label">{site.caption}</p>

      <h1 className="mt-10 animate-veil text-[clamp(3rem,9vw,6rem)] leading-[0.95] font-light tracking-[-0.045em]">
        {site.name}
      </h1>
      <p className="mt-8 max-w-md animate-rise text-[1.125rem] leading-[1.6] font-light text-muted-foreground">
        {lab.oneLiner}
      </p>
      <MoreAbout href="/lab/about-c" className="mt-6" />

      <LabLinks className="mt-12 justify-center" />

      {/* Projects as a centred list of names, blurbs on hover. */}
      <section className="mt-20 w-full">
        <p className="label">Pinned</p>
        <ul className="mt-6 space-y-3">
          {projects.map((p) => (
            <li key={p.name} className="group">
              {p.href ? (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[1.375rem] font-light tracking-[-0.02em] transition-colors hover:text-muted-foreground"
                >
                  {p.name}
                </a>
              ) : (
                <span className="text-[1.375rem] font-light tracking-[-0.02em]">
                  {p.name}
                </span>
              )}
              <span className="ml-3 label">{p.year}</span>
              <p className="mx-auto mt-1 max-w-sm text-[0.875rem] text-muted-foreground transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100">
                {p.blurb}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-auto pt-20 label text-muted-foreground/60">
        {lab.city} · <LocalTime />
      </p>

      <LabNav slug="8" />
    </main>
  )
}
