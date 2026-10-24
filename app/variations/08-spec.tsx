import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/app/components/fade-in";
import { Preview } from "@/app/components/preview";
import { SmartLink } from "@/app/components/smart-link";
import { links, profile, projects } from "@/app/content";

/** 08 — Spec. Hairline cells like a well-made datasheet. Engineer-coded without the terminal clichés. */
export default function Spec() {
  const spec = [
    ["Role", profile.role],
    ["Location", profile.location],
    ["Experience", `${profile.years}+ years`],
    ["Focus", profile.focus.join(", ")],
    ["Status", profile.status],
  ];

  return (
    <div className="font-geist text-neutral-950">
      <div className="mx-auto max-w-6xl border-x border-neutral-200">
        <header className="flex items-center justify-between border-b border-neutral-200 px-6 py-4 font-geist-mono text-xs md:px-8">
          <span>{profile.name.toLowerCase().replace(" ", ".")}</span>
          <span className="text-neutral-400">v{new Date().getFullYear()}.1</span>
        </header>

        <section className="grid border-b border-neutral-200 md:grid-cols-[1fr_22rem]">
          <div className="px-6 py-16 md:px-8 md:py-24">
            <FadeIn immediate>
              <p className="font-geist-mono text-xs text-neutral-400">{profile.greeting}</p>
              <h1 className="mt-4 font-geist text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl">
                I build software
                <br />
                <span className="text-neutral-400">with language models.</span>
              </h1>
            </FadeIn>
            <FadeIn immediate delay={0.15} className="mt-10 max-w-xl space-y-4">
              {profile.bio.map((p) => (
                <p key={p} className="leading-relaxed text-neutral-500">{p}</p>
              ))}
            </FadeIn>
          </div>
          <FadeIn immediate delay={0.25} className="border-t border-neutral-200 md:border-l md:border-t-0">
            <div className="relative aspect-square border-b border-neutral-200">
              <Image src={profile.photo} alt={profile.name} fill priority sizes="352px" className="object-cover" />
            </div>
            <dl className="divide-y divide-dashed divide-neutral-200 font-geist-mono text-xs">
              {spec.map(([k, v]) => (
                <div key={k} className="grid grid-cols-[6rem_1fr] gap-4 px-6 py-3">
                  <dt className="text-neutral-400">{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </FadeIn>
        </section>

        <div className="border-b border-neutral-200 px-6 py-3 font-geist-mono text-xs text-neutral-400 md:px-8">
          /projects
        </div>
        <section className="grid md:grid-cols-2">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={(i % 2) * 0.08} className="border-b border-neutral-200 odd:md:border-r">
              <SmartLink href={project.href} className="group block p-6 md:p-8">
                <Preview
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg bg-[linear-gradient(to_right,#f4f4f5_1px,transparent_1px),linear-gradient(to_bottom,#f4f4f5_1px,transparent_1px)] bg-[size:20px_20px] ring-1 ring-neutral-200"
                />
                <div className="mt-6 flex items-center justify-between">
                  <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
                  <span className="font-geist-mono text-xs text-neutral-400">{project.year}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">{project.description}</p>
                <div className="mt-5 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((s) => (
                      <span key={s} className="rounded border border-neutral-200 px-1.5 py-0.5 font-geist-mono text-[11px] text-neutral-500">{s}</span>
                    ))}
                  </div>
                  <ArrowUpRight className="size-4 text-neutral-300 transition-colors group-hover:text-neutral-950" />
                </div>
              </SmartLink>
            </FadeIn>
          ))}
        </section>

        <div className="border-b border-neutral-200 px-6 py-3 font-geist-mono text-xs text-neutral-400 md:px-8">
          /links
        </div>
        <FadeIn className="grid grid-cols-2 border-b border-neutral-200 sm:grid-cols-5">
          {links.map((link) => (
            <SmartLink
              key={link.label}
              href={link.href}
              className="group flex items-center gap-2 border-b border-r border-neutral-200 px-6 py-5 text-sm last:border-r-0 hover:bg-neutral-50 sm:border-b-0"
            >
              <link.icon className="size-4 text-neutral-400 group-hover:text-neutral-950" />
              {link.label}
            </SmartLink>
          ))}
        </FadeIn>

        <footer className="flex justify-between px-6 py-4 font-geist-mono text-xs text-neutral-400 md:px-8">
          <span>© {new Date().getFullYear()}</span>
          <span>Made in the UK</span>
        </footer>
      </div>
    </div>
  );
}
