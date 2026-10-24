import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/app/components/fade-in";
import { Preview } from "@/app/components/preview";
import { SmartLink } from "@/app/components/smart-link";
import { links, profile, projects } from "@/app/content";

/** 01 — Editorial. OpenAI-blog energy: big sans headline, quiet mono meta, generous grid. */
export default function Editorial() {
  return (
    <div className="font-geist text-neutral-950">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 md:px-10">
        <span className="text-[15px] font-medium tracking-tight">{profile.name}</span>
        <nav className="flex gap-6 font-geist-mono text-xs uppercase tracking-wider text-neutral-500">
          <a href="#work" className="hover:text-neutral-950">Work</a>
          <a href="#elsewhere" className="hover:text-neutral-950">Elsewhere</a>
        </nav>
      </header>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-28 pt-16 md:grid-cols-[1fr_auto] md:px-10 md:pt-28">
        <div>
          <FadeIn immediate>
            <p className="font-geist-mono text-xs uppercase tracking-[0.18em] text-neutral-400">
              {profile.role} <span className="mx-2">·</span> {profile.location}
            </p>
          </FadeIn>
          <FadeIn immediate delay={0.1}>
            <h1 className="mt-6 font-geist text-6xl font-medium tracking-[-0.045em] md:text-8xl">
              {profile.greeting}
            </h1>
          </FadeIn>
          <FadeIn immediate delay={0.2} className="mt-10 max-w-2xl space-y-5">
            {profile.bio.map((p) => (
              <p key={p} className="text-lg leading-relaxed text-neutral-500 md:text-xl">{p}</p>
            ))}
          </FadeIn>
        </div>
        <FadeIn immediate delay={0.3} className="md:pt-10">
          <div className="relative size-40 overflow-hidden rounded-2xl md:size-56">
            <Image src={profile.photo} alt={profile.name} fill priority sizes="224px" className="object-cover grayscale transition duration-700 hover:grayscale-0" />
          </div>
        </FadeIn>
      </section>

      <section id="work" className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <FadeIn className="mb-12 flex items-baseline justify-between border-t border-neutral-200 pt-6">
          <h2 className="font-geist text-2xl font-medium tracking-tight">Selected work</h2>
          <span className="font-geist-mono text-xs text-neutral-400">({String(projects.length).padStart(2, "0")})</span>
        </FadeIn>
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={(i % 2) * 0.1}>
              <SmartLink href={project.href} className="group block">
                <Preview src={project.image} alt={project.title} className="rounded-2xl" />
                <p className="mt-6 font-geist-mono text-xs uppercase tracking-wider text-neutral-400">
                  {project.year} · {project.category}
                </p>
                <h3 className="mt-2 font-geist text-2xl font-medium tracking-tight">{project.title}</h3>
                <p className="mt-2 max-w-md leading-relaxed text-neutral-500">{project.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium">
                  View project
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </SmartLink>
            </FadeIn>
          ))}
        </div>
      </section>

      <section id="elsewhere" className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <FadeIn className="mb-6 border-t border-neutral-200 pt-6">
          <h2 className="font-geist text-2xl font-medium tracking-tight">Elsewhere</h2>
        </FadeIn>
        <div>
          {links.map((link, i) => (
            <FadeIn key={link.label} delay={i * 0.05}>
              <div className="border-b border-neutral-100">
                <SmartLink href={link.href} className="group flex items-center justify-between py-6">
                  <span className="text-3xl font-medium tracking-tight text-neutral-300 transition-colors group-hover:text-neutral-950 md:text-5xl">
                    {link.label}
                  </span>
                  <span className="flex items-center gap-3 font-geist-mono text-xs text-neutral-400">
                    <span className="hidden sm:inline">{link.handle}</span>
                    <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </SmartLink>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <footer className="mx-auto flex max-w-6xl justify-between px-6 py-12 font-geist-mono text-xs text-neutral-400 md:px-10">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>{profile.location}</span>
      </footer>
    </div>
  );
}
