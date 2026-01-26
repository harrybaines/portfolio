import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-8">
      <div className="text-center max-w-lg">
        <h1 className="text-2xl md:text-3xl font-normal tracking-tight text-[var(--foreground)] mb-4">
          Harry Baines
        </h1>
        <p className="text-base text-[var(--text-secondary)] mb-8">
          Software engineer building with AI
        </p>
        <nav className="flex items-center justify-center gap-6">
          <Link
            href="/about"
            className="text-sm text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors"
          >
            About
          </Link>
          <span className="text-[var(--text-tertiary)]">/</span>
          <Link
            href="/blog"
            className="text-sm text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors"
          >
            Writing
          </Link>
        </nav>
      </div>
    </div>
  );
}
