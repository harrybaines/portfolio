import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/app/components/fade-in";
import { Preview } from "@/app/components/preview";
import { SmartLink } from "@/app/components/smart-link";
import { links, profile, projects } from "@/app/content";

/** 05 — Column. A single centred column, capitalised name and dot-separated mono descriptor. */
export default function Column() {
  const descriptor = [profile.role, ...profile.focus.slice(0, 2), profile.location];

  return (
    <div className="mx-auto max-w-3xl px-6 pb-24 pt-24 font-geist text-neutral-950 md:pt-36">
      <section>
        <FadeIn immediate className="flex items-center gap-4">
          <div className="relative size-12 overflow-hidden rounded-full">
            <Image src={profile.photo} alt={profile.name} fill priority sizes="48px" className="object-cover" />
          </div>
          <span className="text-neutral-500">{profile.greeting}</span>
        </FadeIn>
        <FadeIn immediate delay={0.1}>
          <h1 className="mt-8 font-geist text-6xl font-semibold uppercase leading-[0.9] tracking-[-0.05em] md:text-8xl">
            {profile.name.split(" ").map((word) => (
              <span key={word} className="block">{word}</span>
            ))}
          </h1>
        </FadeIn>
        <FadeIn immediate delay={0.2}>
          <p className="mt-8 font-geist-mono text-xs uppercase leading-loose tracking-[0.14em] text-neutral-400">
            {descriptor.map((d, i) => (
              <span key={d}>
                {i > 0 && <span className="mx-2.5 text-neutral-300">·</span>}
                {d}
              </span>
            ))}
          </p>
        </FadeIn>
        <FadeIn immediate delay={0.3} className="mt-10 space-y-4">
          {profile.bio.map((p) => (
            <p key={p} className="text-lg leading-relaxed text-neutral-500">{p}</p>
          ))}
        </FadeIn>
      </section>

      <section className="mt-28">
        <FadeIn>
          <h2 className="font-geist-mono text-xs uppercase tracking-[0.14em] text-neutral-400">Projects</h2>
        </FadeIn>
        <div className="mt-6 space-y-6">
          {projects.map((project) => (
            <FadeIn key={project.title}>
              <SmartLink
                href={project.href}
                className="group block overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-shadow duration-500 hover:shadow-[0_16px_40px_-12px_rgba(0,0,0,0.12)]"
              >
                <Preview src={project.image} alt={project.title} className="aspect-[2/1] bg-neutral-50" imageClassName="inset-x-[6%] top-[12%]" />
                <div className="border-t border-neutral-100 p-6">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-geist-mono text-lg font-medium uppercase">{project.title}</h3>
                    <span className="font-geist-mono text-xs text-neutral-400">{project.year}</span>
                  </div>
                  <p className="mt-2 leading-relaxed text-neutral-500">{project.description}</p>
                </div>
              </SmartLink>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mt-28">
        <FadeIn>
          <h2 className="font-geist-mono text-xs uppercase tracking-[0.14em] text-neutral-400">Elsewhere</h2>
        </FadeIn>
        <FadeIn className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3">
          {links.map((link) => (
            <SmartLink key={link.label} href={link.href} className="group flex items-center gap-2 text-neutral-950">
              <link.icon className="size-4 text-neutral-400 group-hover:text-neutral-950" />
              <span className="underline decoration-neutral-300 underline-offset-[5px] group-hover:decoration-neutral-950">{link.label}</span>
              <ArrowUpRight className="size-3.5 text-neutral-300 group-hover:text-neutral-950" />
            </SmartLink>
          ))}
        </FadeIn>
      </section>
    </div>
  );
}
