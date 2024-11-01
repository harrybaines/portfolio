import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function Intro() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <p className="text-emerald-500 font-mono">Hi, my name is</p>
        <h1 className="text-4xl font-sans font-bold tracking-normal">
          Harry Baines
        </h1>
        <p className="text-zinc-400 font-mono text-xl">
          Software Engineer
        </p>
      </div>
      <div className="space-y-4">
        <p className="text-zinc-300 leading-relaxed max-w-2xl">
          I build elegant solutions to complex problems. Focused on creating efficient,
          scalable applications with clean code and exceptional user experiences.
        </p>
        <p className="text-emerald-500/70 font-mono text-sm">
          Available for work &mdash; let&apos;s build something together!
        </p>
        <div className="flex items-center gap-6 mt-8">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-emerald-500 transition-colors"
          >
            About me
            <BsArrowRight className="text-md" />
          </Link>
          <Link
            href="https://ko-fi.com/harrybaines"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-emerald-500 transition-colors"
          >
            Buy me a coffee
            <BsArrowRight className="text-md" />
          </Link>
        </div>
      </div>
    </div>
  );
}