import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { FadeIn } from "@/app/components/fade-in";
import { Preview } from "@/app/components/preview";
import { SmartLink } from "@/app/components/smart-link";
import { links, profile, projects } from "@/app/content";

/** A section with a mono label in the left gutter, separated by dashed rules. */
function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section className="grid gap-6 border-b border-dashed border-neutral-200 px-6 py-14 md:grid-cols-[12rem_1fr] md:px-10 md:py-20">
      <FadeIn>
        <h2 className="font-plex text-xs uppercase tracking-[0.18em] text-neutral-400 md:sticky md:top-10">{label}</h2>
      </FadeIn>
      <div>{children}</div>
    </section>
  );
}

/** 10 — Rails. Dashed guide rails and gutter labels; IBM Plex Mono for the quiet details. */
export default function Rails() {
  const [github] = links;

  return (
    <div className="font-sans text-neutral-950">
      <div className="mx-auto max-w-6xl border-x border-dashed border-neutral-200">
        <header className="flex items-center justify-between border-b border-dashed border-neutral-200 px-6 py-5 md:px-10">
          <span className="font-plex text-sm">harry.baines</span>
          <nav className="flex gap-6 font-plex text-xs text-neutral-500">
            <a href="#work" className="hover:text-neutral-950">Work</a>
            <a href="#links" className="hover:text-neutral-950">Links</a>
          </nav>
        </header>

        <section className="border-b border-dashed border-neutral-200 px-6 py-20 md:px-10 md:py-32">
          <FadeIn immediate className="flex items-center gap-3">
            <div className="relative size-9 overflow-hidden rounded-full ring-2 ring-white shadow-md">
              <Image src={profile.photo} alt={profile.name} fill priority sizes="36px" className="object-cover" />
            </div>
            <span className="font-plex text-sm text-neutral-500">{profile.greeting}</span>
          </FadeIn>
          <FadeIn immediate delay={0.1}>
            <h1 className="mt-8 max-w-4xl font-sans text-5xl font-semibold leading-[1.08] tracking-[-0.045em] md:text-7xl">
              Applied AI engineer making language models <span className="bg-[linear-gradient(transparent_62%,#ececec_62%)]">genuinely useful.</span>
            </h1>
          </FadeIn>
          <FadeIn immediate delay={0.2} className="mt-10 max-w-2xl">
            <p className="text-lg leading-relaxed text-neutral-500">{profile.bio[0]}</p>
          </FadeIn>
          <FadeIn immediate delay={0.3} className="mt-10 flex flex-wrap gap-3">
            <a href="#work" className="rounded-lg bg-neutral-950 px-5 py-2.5 text-sm text-white shadow-sm hover:bg-neutral-800">
              See projects
            </a>
            <SmartLink href={github.href} className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-5 py-2.5 text-sm shadow-sm hover:border-neutral-400">
              <github.icon className="size-4" /> {github.label}
            </SmartLink>
          </FadeIn>
        </section>

        <Row label="About">
          <FadeIn className="max-w-2xl space-y-5">
            <p className="text-lg leading-relaxed text-neutral-500">{profile.bio[1]}</p>
            <div className="flex flex-wrap gap-2 pt-2">
              {profile.focus.map((f) => (
                <span key={f} className="rounded-full border border-neutral-200 px-3 py-1 font-plex text-xs text-neutral-600">{f}</span>
              ))}
            </div>
          </FadeIn>
        </Row>

        <div id="work">
          <Row label="Projects">
            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project, i) => (
                <FadeIn key={project.title} delay={(i % 2) * 0.08}>
                  <SmartLink
                    href={project.href}
                    className="group block h-full overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-16px_rgba(0,0,0,0.16)]"
                  >
                    <Preview src={project.image} alt={project.title} className="bg-neutral-50" />
                    <div className="border-t border-neutral-100 p-5">
                      <h3 className="font-medium">{project.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-neutral-500">{project.description}</p>
                      <div className="mt-4 flex items-center justify-between border-t border-neutral-100 pt-4 font-plex text-xs text-neutral-400">
                        <span>{project.category.toLowerCase()}</span>
                        <ArrowUpRight className="size-4 transition-colors group-hover:text-neutral-950" />
                      </div>
                    </div>
                  </SmartLink>
                </FadeIn>
              ))}
            </div>
          </Row>
        </div>

        <div id="links">
          <Row label="Elsewhere">
            <div className="grid gap-x-10 sm:grid-cols-2">
              {links.map((link, i) => (
                <FadeIn key={link.label} delay={i * 0.04}>
                  <SmartLink href={link.href} className="group flex items-center gap-3 border-b border-neutral-100 py-4">
                    <link.icon className="size-4 text-neutral-400 group-hover:text-neutral-950" />
                    <span className="text-sm">{link.label}</span>
                    <span className="ml-auto truncate font-plex text-xs text-neutral-400">{link.handle}</span>
                  </SmartLink>
                </FadeIn>
              ))}
            </div>
          </Row>
        </div>

        <footer className="flex justify-between px-6 py-6 font-plex text-xs text-neutral-400 md:px-10">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>{profile.location}</span>
        </footer>
      </div>
    </div>
  );
}
