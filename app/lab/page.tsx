import Link from "next/link"

import { labAbouts, labHomes, type LabPage } from "@/lib/lab"

function List({ label, pages }: { label: string; pages: LabPage[] }) {
  return (
    <section className="mt-14">
      <h2 className="label">{label}</h2>
      <ol className="mt-5 border-t border-border/50">
        {pages.map((p) => (
          <li key={p.slug} className="border-b border-border/50">
            <Link
              href={`/lab/${p.slug}`}
              className="group flex items-baseline gap-6 py-4"
            >
              <span className="w-6 shrink-0 label">{p.n}</span>
              <span className="flex-1">
                <span className="block text-lg tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                  {p.title}
                </span>
                <span className="mt-1 block text-[0.9375rem] text-muted-foreground">
                  {p.note}
                </span>
              </span>
              <span className="label opacity-0 transition-opacity group-hover:opacity-100">
                →
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default function LabIndex() {
  return (
    <main className="mx-auto max-w-2xl px-6 pt-20 pb-24 font-[family-name:var(--font-newsreader)] sm:px-10 sm:pt-28">
      <Link href="/" className="label transition-colors hover:text-foreground">
        ← Live site
      </Link>
      <h1 className="mt-8 text-[clamp(2.25rem,6vw,3.5rem)] leading-[1.05] tracking-[-0.03em]">
        Design lab
      </h1>
      <p className="mt-5 max-w-md text-[1.0625rem] leading-[1.6] text-muted-foreground">
        Six takes on the home page and three on the about page, all built on the
        live design. Use the pill in the bottom-right corner to step through
        them.
      </p>
      <List label="Home" pages={labHomes} />
      <List label="About" pages={labAbouts} />
    </main>
  )
}
