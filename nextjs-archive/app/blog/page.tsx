import Link from "next/link";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    slug: "vim-macros",
    title: "Vim Macros: Automating Repetitive Tasks",
    date: "2024-03-15",
    excerpt: "Learn how to use Vim macros to automate repetitive editing tasks and boost your productivity.",
  },
  {
    slug: "ai-swe",
    title: "The Future of AI in Software Engineering",
    date: "2024-02-28",
    excerpt: "Exploring how AI and LLMs are transforming the way we write, test, and deploy code.",
  },
  {
    slug: "posting",
    title: "Why I Started Writing Technical Posts",
    date: "2024-02-10",
    excerpt: "My journey into technical writing and why sharing knowledge matters in the developer community.",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-8">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Blog</h1>
        <p className="text-neutral-500 mb-16">Thoughts on code, AI, and building things.</p>

        <div className="space-y-12">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block group"
            >
              <article className="border-b border-neutral-200 pb-8 hover:border-black transition-colors">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h2 className="text-2xl font-mono font-semibold group-hover:text-neutral-600 transition-colors">
                    {post.title}
                  </h2>
                  <ArrowRight
                    size={20}
                    className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                  />
                </div>
                <time className="text-sm text-neutral-500 font-mono">{post.date}</time>
                <p className="mt-3 text-neutral-600 leading-relaxed">{post.excerpt}</p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}