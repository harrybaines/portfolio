import Link from "next/link";
import { getBlogPosts } from "./blog/utils";

export default function Home() {
  const latestPost = getBlogPosts()
    .sort((a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime())[0];

  const work = [
    { name: "archtms", description: "Practice management for architects", href: "https://archtms.app" },
    { name: "brewkit", description: "Starter kit for modern web apps", href: "https://github.com/harrybaines" },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center px-8 py-16">
      <div className="max-w-md mx-auto w-full">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-2xl font-normal tracking-tight text-[var(--foreground)] mb-3">
            Harry Baines
          </h1>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
            AI engineer building intelligent systems and developer tools.
            Currently at{" "}
            <a
              href="https://connexai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--foreground)] hover:text-[var(--text-secondary)] transition-colors"
            >
              ConnexAI
            </a>.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <Link
              href="/about"
              className="text-[var(--text-tertiary)] hover:text-[var(--foreground)] transition-colors"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="text-[var(--text-tertiary)] hover:text-[var(--foreground)] transition-colors"
            >
              Writing
            </Link>
            <a
              href="mailto:harry@harrybaines.net"
              className="text-[var(--text-tertiary)] hover:text-[var(--foreground)] transition-colors"
            >
              Email
            </a>
            <a
              href="https://github.com/harrybaines"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-tertiary)] hover:text-[var(--foreground)] transition-colors"
            >
              GitHub
            </a>
          </div>
        </header>

        {/* Work */}
        <section className="mb-10">
          <h2 className="text-xs font-mono uppercase tracking-[0.15em] text-[var(--text-tertiary)] mb-4">
            Work
          </h2>
          <div className="space-y-3">
            {work.map((project) => (
              <a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-baseline justify-between group"
              >
                <span className="text-sm text-[var(--foreground)] group-hover:text-[var(--text-secondary)] transition-colors">
                  {project.name}
                </span>
                <span className="text-xs text-[var(--text-tertiary)]">
                  {project.description}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Latest */}
        {latestPost && (
          <section>
            <h2 className="text-xs font-mono uppercase tracking-[0.15em] text-[var(--text-tertiary)] mb-4">
              Latest
            </h2>
            <Link
              href={`/blog/${latestPost.slug}`}
              className="text-sm text-[var(--foreground)] hover:text-[var(--text-secondary)] transition-colors"
            >
              {latestPost.metadata.title}
            </Link>
          </section>
        )}
      </div>
    </div>
  );
}
