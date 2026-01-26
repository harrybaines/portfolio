import Link from "next/link";
import { getBlogPosts } from "./blog/utils";

export default function Home() {
  const latestPost = getBlogPosts()
    .sort((a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime())[0];

  const work = [
    {
      name: "archtms",
      description: "Practice management platform for architects",
      href: "https://archtms.app"
    },
    {
      name: "brewkit",
      description: "Opinionated starter kit for modern web apps",
      href: "https://github.com/harrybaines"
    },
  ];

  return (
    <div className="min-h-screen px-8 md:px-16 py-16 md:py-24">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <header className="mb-16 md:mb-24">
          <h1 className="text-4xl md:text-5xl font-normal tracking-tight text-[var(--foreground)] mb-6">
            Harry Baines
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-lg">
            AI engineer focused on building intelligent systems, LLM integrations,
            and tools that feel intuitive. Currently crafting AI features at{" "}
            <a
              href="https://connexai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--foreground)] hover:text-[var(--text-secondary)] transition-colors"
            >
              ConnexAI
            </a>.
          </p>
        </header>

        {/* Work Section */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--text-tertiary)] mb-8">
            Selected Work
          </h2>
          <div className="space-y-8">
            {work.map((project) => (
              <a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <h3 className="text-lg text-[var(--foreground)] group-hover:text-[var(--text-secondary)] transition-colors mb-1">
                  {project.name}
                </h3>
                <p className="text-sm text-[var(--text-tertiary)]">
                  {project.description}
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* Writing Section */}
        {latestPost && (
          <section className="mb-16 md:mb-24">
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--text-tertiary)] mb-8">
              Latest Writing
            </h2>
            <Link
              href={`/blog/${latestPost.slug}`}
              className="block group"
            >
              <h3 className="text-lg text-[var(--foreground)] group-hover:text-[var(--text-secondary)] transition-colors mb-1">
                {latestPost.metadata.title}
              </h3>
              <p className="text-sm text-[var(--text-tertiary)]">
                {latestPost.metadata.description}
              </p>
            </Link>
            <Link
              href="/blog"
              className="inline-block mt-6 text-sm text-[var(--text-tertiary)] hover:text-[var(--foreground)] transition-colors"
            >
              View all writing
            </Link>
          </section>
        )}

        {/* Footer */}
        <footer className="pt-8 border-t border-[var(--border-color)]">
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <Link
              href="/about"
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors"
            >
              About
            </Link>
            <a
              href="mailto:harry@harrybaines.net"
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors"
            >
              Email
            </a>
            <a
              href="https://github.com/harrybaines"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/harrybaines"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
