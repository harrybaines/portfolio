import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import { FadeIn } from "@/app/components/fade-in";
import { Preview } from "@/app/components/preview";
import { SmartLink } from "@/app/components/smart-link";
import { links, profile, projects } from "@/app/content";
import { cn } from "@/lib/utils";

const tile =
  "h-full rounded-3xl border border-black/[0.04] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-12px_rgba(0,0,0,0.08)]";

/** 06 — Bento. Soft grey canvas, white tiles, everything at a glance. */
export default function Bento() {
  return (
    <div className="min-h-screen bg-neutral-100/70 font-geist text-neutral-950">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-8 md:py-16">
        <div className="grid gap-4 md:grid-cols-4 md:grid-rows-[auto_auto]">
          <FadeIn immediate className="md:col-span-3 md:row-span-2">
            <div className={cn(tile, "flex flex-col justify-between p-8 md:p-12")}>
              <p className="font-geist-mono text-xs uppercase tracking-widest text-neutral-400">{profile.greeting}</p>
              <div className="mt-16">
                <h1 className="font-geist text-5xl font-semibold tracking-[-0.045em] md:text-7xl">{profile.name}</h1>
                <p className="mt-2 text-2xl tracking-tight text-neutral-400 md:text-3xl">{profile.role}</p>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-500">{profile.bio[0]}</p>
              </div>
            </div>
          </FadeIn>
          <FadeIn immediate delay={0.1}>
            <div className={cn(tile, "relative aspect-square overflow-hidden md:aspect-auto md:min-h-64")}>
              <Image src={profile.photo} alt={profile.name} fill priority sizes="300px" className="object-cover" />
            </div>
          </FadeIn>
          <FadeIn immediate delay={0.2}>
            <div className={cn(tile, "flex flex-col justify-between gap-6 p-6")}>
              <span className="inline-flex items-center gap-2 text-sm">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-neutral-400 opacity-60" />
                  <span className="relative inline-flex size-2 rounded-full bg-neutral-900" />
                </span>
                {profile.status}
              </span>
              <span className="inline-flex items-center gap-1.5 font-geist-mono text-xs text-neutral-400">
                <MapPin className="size-3.5" /> {profile.location}
              </span>
            </div>
          </FadeIn>
        </div>

        <FadeIn className="mt-4">
          <div className={cn(tile, "flex flex-wrap items-center gap-x-8 gap-y-3 px-8 py-5")}>
            <span className="font-geist-mono text-xs uppercase tracking-widest text-neutral-400">Focus</span>
            {profile.focus.map((f) => (
              <span key={f} className="text-sm text-neutral-600">{f}</span>
            ))}
          </div>
        </FadeIn>

        <FadeIn className="mb-6 mt-20 flex items-end justify-between px-2">
          <h2 className="text-3xl font-semibold tracking-tight">Projects</h2>
          <span className="font-geist-mono text-xs text-neutral-400">{String(projects.length).padStart(2, "0")} selected</span>
        </FadeIn>
        <div className="grid gap-4 md:grid-cols-3">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={(i % 3) * 0.08} className={cn(i === 0 && "md:col-span-2", i === 3 && "md:col-span-2")}>
              <SmartLink href={project.href} className={cn(tile, "group flex flex-col overflow-hidden transition-shadow duration-500 hover:shadow-[0_24px_48px_-16px_rgba(0,0,0,0.18)]")}>
                <Preview src={project.image} alt={project.title} className={cn("bg-neutral-50", i === 0 || i === 3 ? "aspect-[2/1]" : "aspect-[4/3]")} />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
                    <ArrowUpRight className="size-4 text-neutral-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neutral-950" />
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-neutral-500">{project.description}</p>
                </div>
              </SmartLink>
            </FadeIn>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-5">
          {links.map((link, i) => (
            <FadeIn key={link.label} delay={i * 0.05}>
              <SmartLink href={link.href} className={cn(tile, "group flex flex-col gap-10 p-5 hover:bg-neutral-950 hover:text-white")}>
                <link.icon className="size-5 text-neutral-400 group-hover:text-white" />
                <span className="flex items-center justify-between text-sm font-medium">
                  {link.label}
                  <ArrowUpRight className="size-4 opacity-0 transition-opacity group-hover:opacity-100" />
                </span>
              </SmartLink>
            </FadeIn>
          ))}
        </div>

        <p className="mt-16 text-center font-geist-mono text-xs text-neutral-400">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </div>
  );
}
