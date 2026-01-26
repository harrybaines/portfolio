import Link from "next/link";
import { getBlogPosts } from "./blog/utils";

export default function Home() {
  const posts = getBlogPosts()
    .sort((a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime())
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="px-8 md:px-16 py-24 md:py-32 border-b border-[var(--border-color)]">
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-4xl font-normal tracking-tight text-[var(--foreground)] mb-4">
            Harry Baines
          </h1>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            AI engineer building intelligent systems, LLM integrations, and developer tools. Currently at{" "}
            <a
              href="https://connexai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--foreground)] hover:text-[var(--text-secondary)] transition-colors"
            >
              ConnexAI
            </a>
            .
          </p>
        </div>
      </section>

      {/* Writing Section */}
      <section className="px-8 md:px-16 py-16 border-b border-[var(--border-color)]">
        <div className="max-w-xl">
          <div className="flex items-baseline justify-between mb-6">
            <span className="text-xs font-mono uppercase tracking-[0.15em] text-[var(--text-tertiary)]">
              Recent Writing
            </span>
            <Link
              href="/blog"
              className="text-xs text-[var(--text-tertiary)] hover:text-[var(--foreground)] transition-colors"
            >
              View all
            </Link>
          </div>
          <div className="space-y-4">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block text-base text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors"
              >
                {post.metadata.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="px-8 md:px-16 py-16">
        <div className="max-w-xl">
          <div className="flex flex-wrap gap-8">
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
        </div>
      </section>
    </div>
  );
}
