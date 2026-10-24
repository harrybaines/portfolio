import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/app/components/fade-in";
import { Preview } from "@/app/components/preview";
import { SmartLink } from "@/app/components/smart-link";
import { links, profile, projects } from "@/app/content";

/** 02 — Ivory. Warm paper tones and a serif display face, in the spirit of anthropic.com. */
export default function Ivory() {
  return (
    <div className="min-h-screen bg-[#faf9f5] font-geist text-[#141413]">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 md:px-10">
        <span className="font-serif text-2xl">{profile.name}</span>
        <a
          href={links.find((l) => l.label === "Email")?.href}
          className="rounded-full bg-[#141413] px-4 py-2 text-sm text-[#faf9f5] hover:bg-[#3d3d3a]"
        >
          Get in touch
        </a>
      </header>

      <section className="mx-auto grid max-w-6xl items-end gap-12 px-6 pb-24 pt-14 md:grid-cols-[1.4fr_1fr] md:px-10 md:pt-24">
        <div>
          <FadeIn immediate>
            <p className="font-plex text-xs uppercase tracking-[0.2em] text-[#87867f]">{profile.role}</p>
          </FadeIn>
          <FadeIn immediate delay={0.1}>
            <h1 className="mt-6 font-serif text-6xl leading-[0.95] tracking-tight md:text-[7.5rem]">
              Hello, <br />
              <em className="text-[#87867f]">I&apos;m Harry.</em>
            </h1>
          </FadeIn>
          <FadeIn immediate delay={0.2} className="mt-10 max-w-xl space-y-4">
            {profile.bio.map((p) => (
              <p key={p} className="text-lg leading-relaxed text-[#5e5d59]">{p}</p>
            ))}
          </FadeIn>
        </div>
        <FadeIn immediate delay={0.3}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-30px_rgba(20,20,19,0.35)]">
            <Image src={profile.photo} alt={profile.name} fill priority sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <FadeIn>
          <h2 className="font-serif text-5xl tracking-tight md:text-6xl">Things I&apos;ve built</h2>
          <p className="mt-3 font-plex text-xs uppercase tracking-[0.2em] text-[#87867f]">A small catalogue</p>
        </FadeIn>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={(i % 2) * 0.1}>
              <SmartLink
                href={project.href}
                className="group block rounded-[1.75rem] bg-white p-3 shadow-[0_1px_2px_rgba(20,20,19,0.04),0_12px_32px_-12px_rgba(20,20,19,0.12)] transition-shadow duration-500 hover:shadow-[0_1px_2px_rgba(20,20,19,0.04),0_24px_48px_-16px_rgba(20,20,19,0.2)]"
              >
                <Preview src={project.image} alt={project.title} className="rounded-[1.25rem] bg-[#f0eee6]" />
                <div className="px-4 pb-4 pt-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-3xl">{project.title}</h3>
                    <ArrowUpRight className="size-5 text-[#87867f] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#141413]" />
                  </div>
                  <p className="mt-2 leading-relaxed text-[#5e5d59]">{project.description}</p>
                  <p className="mt-5 font-plex text-xs text-[#87867f]">{project.stack.join("  /  ")}</p>
                </div>
              </SmartLink>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 md:px-10">
        <FadeIn className="rounded-[2rem] bg-[#f0eee6] px-8 py-14 md:px-14">
          <h2 className="max-w-2xl font-serif text-4xl leading-tight md:text-5xl">
            Always happy to talk about AI, products and good software.
          </h2>
          <div className="mt-10 flex flex-wrap gap-3">
            {links.map((link) => (
              <SmartLink
                key={link.label}
                href={link.href}
                className="inline-flex items-center gap-2 rounded-full border border-[#141413]/15 bg-[#faf9f5] px-4 py-2 text-sm hover:border-[#141413]/40"
              >
                <link.icon className="size-4 text-[#87867f]" />
                {link.label}
              </SmartLink>
            ))}
          </div>
        </FadeIn>
      </section>

      <footer className="mx-auto max-w-6xl px-6 pb-12 font-plex text-xs text-[#87867f] md:px-10">
        © {new Date().getFullYear()} {profile.name} · {profile.location}
      </footer>
    </div>
  );
}
