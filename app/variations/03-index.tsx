import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/app/components/fade-in";
import { Preview } from "@/app/components/preview";
import { SmartLink } from "@/app/components/smart-link";
import { links, profile, projects } from "@/app/content";

const pad = (n: number) => String(n).padStart(2, "0");

/** 03 — Index. Swiss grid, uppercase display name, numbered catalogue rows. */
export default function Index() {
  const meta = [
    ["Role", profile.role],
    ["Based", profile.location],
    ["Experience", `${profile.years}+ years`],
    ["Status", profile.status],
  ];

  return (
    <div className="px-6 font-sans text-neutral-950 md:px-10">
      <section className="pb-20 pt-10">
        <FadeIn immediate>
          <h1 className="font-sans text-[17vw] font-semibold uppercase leading-[0.82] tracking-[-0.06em] md:text-[13.5vw]">
            {profile.name}
          </h1>
        </FadeIn>

        <div className="mt-14 grid gap-10 border-t border-neutral-950 pt-6 md:grid-cols-12">
          <FadeIn immediate delay={0.15} className="md:col-span-2">
            <div className="relative aspect-square w-28 overflow-hidden md:w-full">
              <Image src={profile.photo} alt={profile.name} fill priority sizes="200px" className="object-cover grayscale" />
            </div>
          </FadeIn>
          <FadeIn immediate delay={0.25} className="md:col-span-6">
            <p className="text-2xl font-medium leading-snug tracking-tight text-neutral-950 md:text-3xl">
              {profile.greeting} {profile.tagline}
            </p>
            {profile.bio.map((p) => (
              <p key={p} className="mt-5 max-w-xl text-neutral-500">{p}</p>
            ))}
          </FadeIn>
          <FadeIn immediate delay={0.35} className="md:col-span-3 md:col-start-10">
            <dl className="font-mono text-xs">
              {meta.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 border-b border-neutral-200 py-2.5">
                  <dt className="uppercase text-neutral-400">{k}</dt>
                  <dd className="text-right">{v}</dd>
                </div>
              ))}
            </dl>
          </FadeIn>
        </div>
      </section>

      <section className="pb-24">
        <FadeIn className="flex justify-between border-t border-neutral-950 py-4 font-mono text-xs uppercase">
          <span>Index of work</span>
          <span className="text-neutral-400">{pad(projects.length)} entries</span>
        </FadeIn>
        {projects.map((project, i) => (
          <FadeIn key={project.title}>
            <SmartLink href={project.href} className="group grid gap-6 border-t border-neutral-200 py-10 md:grid-cols-12">
              <span className="font-mono text-xs text-neutral-400 md:col-span-1">{pad(i + 1)}</span>
              <div className="md:col-span-4">
                <h3 className="font-sans text-3xl font-semibold tracking-tight md:text-4xl">{project.title}</h3>
                <p className="mt-2 font-mono text-xs uppercase text-neutral-400">
                  {project.category} — {project.year}
                </p>
              </div>
              <div className="md:col-span-3">
                <p className="text-neutral-500">{project.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 font-mono text-xs uppercase underline decoration-neutral-300 underline-offset-4 group-hover:decoration-neutral-950">
                  Open <ArrowUpRight className="size-3.5" />
                </span>
              </div>
              <div className="md:col-span-4">
                <Preview src={project.image} alt={project.title} className="bg-neutral-100" imageClassName="rounded-t-md" />
              </div>
            </SmartLink>
          </FadeIn>
        ))}
      </section>

      <footer className="border-t border-neutral-950 pb-10 pt-4">
        <FadeIn className="grid grid-cols-2 gap-y-4 font-mono text-xs uppercase md:grid-cols-6">
          <span className="text-neutral-400">Elsewhere</span>
          {links.map((link) => (
            <SmartLink key={link.label} href={link.href} className="group inline-flex items-center gap-1.5 hover:text-neutral-500">
              <link.icon className="size-3.5" />
              <span className="underline decoration-neutral-300 underline-offset-4 group-hover:decoration-neutral-950">{link.label}</span>
            </SmartLink>
          ))}
        </FadeIn>
      </footer>
    </div>
  );
}
