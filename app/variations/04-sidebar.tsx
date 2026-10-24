import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/app/components/fade-in";
import { Preview } from "@/app/components/preview";
import { SmartLink } from "@/app/components/smart-link";
import { links, profile, projects } from "@/app/content";

/** 04 — Sidebar. Sticky introduction on the left, a scrolling catalogue on the right. */
export default function Sidebar() {
  return (
    <div className="mx-auto grid max-w-7xl gap-16 px-6 font-geist text-neutral-950 md:px-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
      <aside className="flex flex-col justify-between pt-16 lg:sticky lg:top-0 lg:h-screen lg:py-20">
        <div>
          <FadeIn immediate>
            <div className="relative size-16 overflow-hidden rounded-full ring-1 ring-black/5">
              <Image src={profile.photo} alt={profile.name} fill priority sizes="64px" className="object-cover" />
            </div>
          </FadeIn>
          <FadeIn immediate delay={0.1}>
            <p className="mt-10 font-geist-mono text-sm text-neutral-400">{profile.greeting}</p>
            <h1 className="mt-2 font-geist text-5xl font-semibold tracking-[-0.04em] md:text-6xl">{profile.name}</h1>
            <p className="mt-3 text-lg text-neutral-500">{profile.role}</p>
          </FadeIn>
          <FadeIn immediate delay={0.2} className="mt-8 max-w-md space-y-4">
            {profile.bio.map((p) => (
              <p key={p} className="leading-relaxed text-neutral-500">{p}</p>
            ))}
          </FadeIn>
          <FadeIn immediate delay={0.3}>
            <nav className="mt-12 hidden flex-col gap-3 font-geist-mono text-xs uppercase tracking-wider text-neutral-400 lg:flex">
              {["Work", "Links"].map((s) => (
                <a key={s} href={`#${s.toLowerCase()}`} className="group flex items-center gap-3 hover:text-neutral-950">
                  <span className="h-px w-8 bg-neutral-300 transition-all group-hover:w-16 group-hover:bg-neutral-950" />
                  {s}
                </a>
              ))}
            </nav>
          </FadeIn>
        </div>
        <FadeIn immediate delay={0.4} className="mt-10 flex gap-5 text-neutral-400">
          {links.map((link) => (
            <SmartLink key={link.label} href={link.href} aria-label={link.label} className="hover:text-neutral-950">
              <link.icon className="size-5" />
            </SmartLink>
          ))}
        </FadeIn>
      </aside>

      <div className="pb-24 lg:py-20">
        <section id="work" className="space-y-8">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i === 0 ? 0.3 : 0}>
              <SmartLink
                href={project.href}
                className="group block overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-[0_2px_4px_rgba(0,0,0,0.02),0_12px_24px_-8px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_2px_4px_rgba(0,0,0,0.02),0_24px_48px_-12px_rgba(0,0,0,0.12)]"
              >
                <Preview src={project.image} alt={project.title} className="bg-gradient-to-b from-neutral-50 to-neutral-100" />
                <div className="flex items-start justify-between gap-6 p-6">
                  <div>
                    <h3 className="font-geist text-xl font-semibold tracking-tight">{project.title}</h3>
                    <p className="mt-1.5 leading-relaxed text-neutral-500">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.stack.map((s) => (
                        <span key={s} className="rounded-full bg-neutral-100 px-2.5 py-1 font-geist-mono text-[11px] text-neutral-500">{s}</span>
                      ))}
                    </div>
                  </div>
                  <ArrowUpRight className="size-5 shrink-0 text-neutral-300 transition-colors group-hover:text-neutral-950" />
                </div>
              </SmartLink>
            </FadeIn>
          ))}
        </section>

        <section id="links" className="mt-24">
          <FadeIn>
            <h2 className="font-geist-mono text-xs uppercase tracking-wider text-neutral-400">Links</h2>
          </FadeIn>
          <div className="mt-4 divide-y divide-neutral-100 border-y border-neutral-100">
            {links.map((link, i) => (
              <FadeIn key={link.label} delay={i * 0.05}>
                <SmartLink href={link.href} className="group flex items-center gap-4 py-4">
                  <link.icon className="size-4 text-neutral-400" />
                  <span className="font-medium">{link.label}</span>
                  <span className="ml-auto font-geist-mono text-xs text-neutral-400 group-hover:text-neutral-950">{link.handle}</span>
                </SmartLink>
              </FadeIn>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
