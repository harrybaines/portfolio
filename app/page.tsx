import TypeWriter from "./components/TypeWriter";
import KonamiCode from "./components/KonamiCode";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const skills = [
    "AI Integration",
    "LLM Development",
    "Web Development",
    "Full Stack Engineering",
    "Machine Learning",
    "API Design",
  ];

  return (
    <>
      <KonamiCode />
      <div className="min-h-screen w-full flex items-center pt-16">
        <div className="max-w-6xl mx-auto px-8 w-full">
          <div className="space-y-8">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none">
              Harry
              <br />
              Baines
            </h1>

            <div className="text-2xl md:text-3xl text-neutral-600 h-12">
              <TypeWriter texts={skills} speed={80} deleteSpeed={40} pauseDuration={2000} />
            </div>

            <p className="text-lg text-neutral-500 max-w-2xl font-sans">
              Software engineer based in the UK. I build intelligent systems that bridge the gap
              between cutting-edge AI and practical web applications.
            </p>

            <div className="flex gap-4 pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-mono text-sm hover:bg-neutral-800 transition-colors"
              >
                View my work <ArrowRight size={16} />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-300 font-mono text-sm hover:border-black transition-colors"
              >
                Read my blog
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Secret scroll indicator - Easter egg #2 */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-30 hover:opacity-100 transition-opacity cursor-default">
        <div className="w-6 h-10 border-2 border-neutral-300 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-neutral-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </>
  );
}