import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen w-full pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-8">
        {/* Asymmetric Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Content - Offset Column */}
          <div className="md:col-start-2 md:col-span-7 space-y-12">
            <div>
              <h1 className="text-8xl md:text-9xl font-light leading-none mb-8">
                Harry
                <br />
                Baines
              </h1>

              <div className="space-y-4 text-xl leading-relaxed max-w-xl">
                <p>
                  AI Integration · LLMs · Full Stack Development
                </p>
                <p className="text-base">
                  Software engineer based in the UK. I build intelligent systems that bridge
                  cutting-edge AI with practical web applications.
                </p>
              </div>
            </div>

            {/* Work Section */}
            <div className="space-y-6">
              <h2 className="text-sm font-mono uppercase tracking-wider text-neutral-400">
                Selected Work
              </h2>
              <div className="space-y-4">
                <Link
                  href="/blog"
                  className="block group py-3 border-b border-neutral-200 hover:border-black transition-all"
                >
                  <div className="flex items-baseline justify-between">
                    <span className="text-lg group-hover:translate-x-1 transition-transform">
                      Technical writing & insights
                    </span>
                    <span className="text-sm font-mono text-neutral-400">→</span>
                  </div>
                </Link>
                <Link
                  href="/about"
                  className="block group py-3 border-b border-neutral-200 hover:border-black transition-all"
                >
                  <div className="flex items-baseline justify-between">
                    <span className="text-lg group-hover:translate-x-1 transition-transform">
                      About & experience
                    </span>
                    <span className="text-sm font-mono text-neutral-400">→</span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Now Section with Blur Effect - Easter Egg */}
            <div className="space-y-4 pt-8">
              <h2 className="text-sm font-mono uppercase tracking-wider text-neutral-400">
                Now
              </h2>
              <p tabIndex={0} className="blur-text text-base max-w-xl cursor-pointer">
                Currently exploring the intersection of AI and developer tooling, building with
                Next.js and TypeScript, one small win at a time.
              </p>
            </div>
          </div>

          {/* Right Column - Meta Info */}
          <div className="md:col-start-10 md:col-span-3 space-y-8">
            <div className="space-y-2">
              <p className="text-sm font-mono text-neutral-400">Location</p>
              <p>United Kingdom</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-mono text-neutral-400">Connect</p>
              <div className="space-y-1">
                <a
                  href="https://github.com/harrybaines"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm hover:translate-x-1 transition-transform"
                >
                  GitHub ↗
                </a>
                <a
                  href="https://linkedin.com/in/harrybaines"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm hover:translate-x-1 transition-transform"
                >
                  LinkedIn ↗
                </a>
                <a
                  href="mailto:harry@example.com"
                  className="block text-sm hover:translate-x-1 transition-transform"
                >
                  Email ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}