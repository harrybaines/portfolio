import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/app/components/fade-in";
import { Preview } from "@/app/components/preview";
import { SmartLink } from "@/app/components/smart-link";
import { links, profile, projects } from "@/app/content";

/** 09 — Journal. Reads like a publication front page: serif headlines, a featured story, a tidy grid. */
export default function Journal() {
  const [featured, ...rest] = projects;

  return (
    <div className="font-geist text-neutral-950">
      <header className="mx-auto flex max-w-6xl items-center justify-between border-b border-neutral-200 px-6 py-5 md:px-10">
        <span className="font-news text-xl tracking-tight">{profile.name}</span>
        <nav className="flex gap-5 text-sm text-neutral-500">
          {links.slice(0, 3).map((link) => (
            <SmartLink key={link.label} href={link.href} className="hover:text-neutral-950">{link.label}</SmartLink>
          ))}
        </nav>
      </header>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-12 md:px-10 md:py-28">
        <div className="md:col-span-8">
          <FadeIn immediate>
            <p className="font-geist-mono text-xs uppercase tracking-widest text-neutral-400">{profile.role}</p>
            <h1 className="mt-6 font-news text-6xl leading-[1] tracking-[-0.03em] md:text-8xl">
              Hi, I&apos;m {profile.firstName}, <em className="text-neutral-400">nice to meet you.</em>
            </h1>
          </FadeIn>
          <FadeIn immediate delay={0.15} className="mt-10 max-w-2xl space-y-5">
            {profile.bio.map((p) => (
              <p key={p} className="font-news text-xl leading-relaxed text-neutral-600">{p}</p>
            ))}
          </FadeIn>
        </div>
        <FadeIn immediate delay={0.25} className="md:col-span-4 md:pt-4">
          <figure>
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
              <Image src={profile.photo} alt={profile.name} fill priority sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
            </div>
            <figcaption className="mt-3 font-geist-mono text-xs text-neutral-400">{profile.location}</figcaption>
          </figure>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-6xl px-6 md:px-10">
        <FadeIn className="border-t border-neutral-950 pt-4">
          <h2 className="font-geist-mono text-xs uppercase tracking-widest">Latest work</h2>
        </FadeIn>

        <FadeIn className="mt-10">
          <SmartLink href={featured.href} className="group grid items-center gap-10 md:grid-cols-12">
            <Preview src={featured.image} alt={featured.title} className="rounded-xl bg-neutral-100 md:col-span-7" priority />
            <div className="md:col-span-5">
              <p className="font-geist-mono text-xs text-neutral-400">{featured.category} · {featured.year}</p>
              <h3 className="mt-3 font-news text-4xl leading-tight tracking-tight md:text-5xl">{featured.title}</h3>
              <p className="mt-4 leading-relaxed text-neutral-500">{featured.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
                Read more <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </SmartLink>
        </FadeIn>

        <div className="mt-20 grid gap-10 border-t border-neutral-200 pt-10 md:grid-cols-3">
          {rest.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.08}>
              <SmartLink href={project.href} className="group block">
                <Preview src={project.image} alt={project.title} className="aspect-[4/3] rounded-xl bg-neutral-100" />
                <p className="mt-5 font-geist-mono text-xs text-neutral-400">{project.category} · {project.year}</p>
                <h3 className="mt-2 font-news text-2xl tracking-tight group-hover:underline group-hover:decoration-neutral-300 group-hover:underline-offset-4">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">{project.description}</p>
              </SmartLink>
            </FadeIn>
          ))}
        </div>
      </section>

      <footer className="mx-auto mt-32 max-w-6xl px-6 pb-12 md:px-10">
        <FadeIn className="grid gap-10 border-t border-neutral-950 pt-10 md:grid-cols-12">
          <p className="font-news text-3xl leading-tight tracking-tight md:col-span-6">
            Building something with AI? <em className="text-neutral-400">I&apos;d love to hear about it.</em>
          </p>
          <div className="grid grid-cols-2 gap-3 text-sm md:col-span-5 md:col-start-8">
            {links.map((link) => (
              <SmartLink key={link.label} href={link.href} className="group inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-950">
                <link.icon className="size-4" />
                <span className="underline decoration-neutral-200 underline-offset-4 group-hover:decoration-neutral-950">{link.label}</span>
              </SmartLink>
            ))}
          </div>
        </FadeIn>
        <p className="mt-16 font-geist-mono text-xs text-neutral-400">© {new Date().getFullYear()} {profile.name}</p>
      </footer>
    </div>
  );
}
