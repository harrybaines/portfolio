import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16 md:py-24 px-8">
      <div className="max-w-xl mx-auto">
        {/* Header */}
        <header className="mb-12">
          <Link
            href="/"
            className="text-sm text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors"
          >
            Harry Baines
          </Link>
        </header>

        {/* About Section */}
        <section className="mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--text-tertiary)] block mb-6">
            About
          </span>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-[var(--foreground)]">
              Software engineer based in the UK. I work at the intersection of AI and practical applications, building tools that feel intuitive and purposeful.
            </p>
            <p className="text-base leading-relaxed text-[var(--foreground)]">
              My approach is minimal by nature. I believe the best interfaces disappear, leaving only the experience. Currently focused on LLM integration and developer tooling at ConnexAI.
            </p>
            <p className="text-base leading-relaxed text-[var(--foreground)]">
              When not coding, I enjoy good coffee and film photography.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--text-tertiary)] block mb-6">
            Contact
          </span>
          <div className="space-y-3">
            <a
              href="mailto:harry@harrybaines.net"
              className="block text-base text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors"
            >
              harry@harrybaines.net
            </a>
            <a
              href="https://github.com/harrybaines"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-base text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors"
            >
              github.com/harrybaines
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
