import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20 md:py-32 px-8">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <header className="mb-16">
          <Link
            href="/"
            className="text-sm text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors"
          >
            Harry Baines
          </Link>
        </header>

        {/* About */}
        <section className="mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.15em] text-[var(--text-tertiary)] block mb-6">
            About
          </span>
          <div className="space-y-5 text-sm leading-relaxed text-[var(--foreground)]">
            <p>
              Software engineer based in the UK, focused on AI and its practical applications. I build tools that feel intuitive and purposeful.
            </p>
            <p>
              My approach is minimal by nature. The best interfaces disappear, leaving only the experience. Currently working on LLM integration and developer tooling at{" "}
              <a
                href="https://connexai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors"
              >
                ConnexAI
              </a>.
            </p>
            <p>
              Previously built{" "}
              <a
                href="https://archtms.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors"
              >
                archtms
              </a>, a practice management platform used daily by 60+ architects.
            </p>
            <p>
              When not coding, I enjoy good coffee and film photography.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section>
          <span className="text-xs font-mono uppercase tracking-[0.15em] text-[var(--text-tertiary)] block mb-6">
            Contact
          </span>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a
              href="mailto:harry@harrybaines.net"
              className="text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors"
            >
              Email
            </a>
            <a
              href="https://github.com/harrybaines"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/harrybaines"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
