import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen w-full pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-8">
        <div className="border-b-2 border-black pb-4 mb-12">
          <p className="text-sm font-mono uppercase tracking-widest">Portfolio · 2026</p>
        </div>

        <article className="space-y-12">
          <header>
            <h1 className="text-7xl md:text-8xl font-bold leading-tight mb-6">
              Harry
              <br />
              Baines
            </h1>
            <p className="text-2xl leading-relaxed border-l-4 border-black pl-6">
              Software engineer specializing in AI integration, large language models, and
              full-stack development. Based in the United Kingdom.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-8 border-y border-black py-8">
            <div>
              <h2 className="text-sm font-mono uppercase mb-3">Expertise</h2>
              <ul className="space-y-2 text-lg">
                <li>• AI Integration & LLMs</li>
                <li>• Full Stack Development</li>
                <li>• System Architecture</li>
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-mono uppercase mb-3">Location</h2>
              <p className="text-lg">United Kingdom</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Recent Work</h2>
            <div className="space-y-4">
              <Link href="/blog" className="block py-4 border-b border-neutral-300 hover:border-black transition-colors group">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xl group-hover:underline">Technical Writing & Insights</h3>
                  <span className="text-sm font-mono">→</span>
                </div>
                <p className="text-neutral-600 mt-2">Thoughts on AI, development, and technology</p>
              </Link>

              <Link href="/about" className="block py-4 border-b border-neutral-300 hover:border-black transition-colors group">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xl group-hover:underline">About & Experience</h3>
                  <span className="text-sm font-mono">→</span>
                </div>
                <p className="text-neutral-600 mt-2">Background, skills, and professional journey</p>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
