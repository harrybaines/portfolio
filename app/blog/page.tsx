import Link from "next/link";
import { getBlogPosts } from "./utils";

export default function BlogPage() {
  const posts = getBlogPosts().sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toISOString().split('T')[0];
  };

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

        {/* Writing Section */}
        <section>
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--text-tertiary)] block mb-6">
            Writing
          </span>

          <div className="space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block group"
              >
                <article>
                  <h2 className="text-base text-[var(--foreground)] group-hover:text-[var(--text-secondary)] transition-colors">
                    {post.metadata.title}
                  </h2>
                  <time className="text-sm text-[var(--text-tertiary)] font-mono mt-1 block">
                    {formatDate(post.metadata.publishedAt)}
                  </time>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
