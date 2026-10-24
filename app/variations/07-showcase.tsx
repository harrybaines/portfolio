import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/app/components/fade-in";
import { Preview } from "@/app/components/preview";
import { SmartLink } from "@/app/components/smart-link";
import { links, profile, projects } from "@/app/content";
import { cn } from "@/lib/utils";

/** 07 — Showcase. A big statement headline with an inline portrait, then alternating feature rows. */
export default function Showcase() {
  return (
    <div className="font-sans text-neutral-950">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8 md:px-10">
        <span className="font-mono text-xs uppercase tracking-widest">HB</span>
        <span className="font-mono text-xs text-neutral-400">{profile.status}</span>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-32 pt-16 md:px-10 md:pt-28">
        <FadeIn immediate>
          <h1 className="max-w-6xl font-sans text-5xl font-medium leading-[1.05] tracking-[-0.04em] md:text-[5.5rem]">
            Hi, I&apos;m Harry
            <span className="relative mx-3 inline-block h-[0.8em] w-[1.4em] translate-y-[0.08em] overflow-hidden rounded-full align-baseline md:mx-4">
              <Image src={profile.photo} alt={profile.name} fill priority sizes="160px" className="object-cover" />
            </span>
            — an applied AI engineer <span className="text-neutral-300">turning language models into products people rely on.</span>
          </h1>
        </FadeIn>
        <FadeIn immediate delay={0.2} className="mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
          {profile.bio.map((p) => (
            <p key={p} className="leading-relaxed text-neutral-500">{p}</p>
          ))}
        </FadeIn>
      </section>

      <section className="mx-auto max-w-7xl space-y-28 px-6 pb-32 md:px-10">
        {projects.map((project, i) => (
          <SmartLink key={project.title} href={project.href} className="group grid items-center gap-10 md:grid-cols-12">
            <FadeIn className={cn("md:col-span-7", i % 2 === 1 && "md:order-2 md:col-start-6")}>
              <Preview
                src={project.image}
                alt={project.title}
                className="rounded-3xl bg-neutral-100 transition-colors duration-500 group-hover:bg-neutral-200/70"
                imageClassName="rounded-t-xl"
              />
            </FadeIn>
            <FadeIn delay={0.1} className={cn("md:col-span-4", i % 2 === 0 ? "md:col-start-9" : "md:order-1 md:col-start-1")}>
              <span className="font-mono text-xs text-neutral-400">
                {String(i + 1).padStart(2, "0")} — {project.category}
              </span>
              <h3 className="mt-4 text-4xl font-medium tracking-[-0.03em] md:text-5xl">{project.title}</h3>
              <p className="mt-4 leading-relaxed text-neutral-500">{project.description}</p>
              <p className="mt-6 font-mono text-xs text-neutral-400">{project.stack.join(", ")}</p>
              <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-sm transition-colors group-hover:border-neutral-950 group-hover:bg-neutral-950 group-hover:text-white">
                View project <ArrowUpRight className="size-4" />
              </span>
            </FadeIn>
          </SmartLink>
        ))}
      </section>

      <footer className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <FadeIn>
            <h2 className="max-w-3xl text-4xl font-medium leading-tight tracking-[-0.03em] md:text-6xl">
              Let&apos;s build something useful.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-5">
            {links.map((link) => (
              <SmartLink key={link.label} href={link.href} className="group flex items-center justify-between bg-neutral-950 p-5 text-sm hover:bg-neutral-900">
                <span className="flex items-center gap-2.5">
                  <link.icon className="size-4 text-neutral-500 group-hover:text-white" />
                  {link.label}
                </span>
                <ArrowUpRight className="size-4 text-neutral-600 group-hover:text-white" />
              </SmartLink>
            ))}
          </FadeIn>
          <p className="mt-16 font-mono text-xs text-neutral-500">
            © {new Date().getFullYear()} {profile.name} · {profile.location}
          </p>
        </div>
      </footer>
    </div>
  );
}
