import Link from "next/link";
import { BookOpen, Calendar } from "lucide-react";

const blogPosts = [
  {
    slug: "vim-macros",
    title: "Vim Macros: Automating Repetitive Tasks",
    date: "2024-03-15",
    category: "Tools",
    excerpt: "Learn how to use Vim macros to automate repetitive editing tasks and boost your productivity.",
  },
  {
    slug: "ai-swe",
    title: "The Future of AI in Software Engineering",
    date: "2024-02-28",
    category: "AI",
    excerpt: "Exploring how AI and LLMs are transforming the way we write, test, and deploy code.",
  },
  {
    slug: "posting",
    title: "Why I Started Writing Technical Posts",
    date: "2024-02-10",
    category: "Writing",
    excerpt: "My journey into technical writing and why sharing knowledge matters in the developer community.",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="max-w-5xl mx-auto px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-neutral-600">
            Thoughts on code, AI, and building things
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <article className="glass-card p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen size={20} className="text-blue-500" />
                  <span className="px-3 py-1 bg-white/60 rounded-full text-xs font-mono">
                    {post.category}
                  </span>
                </div>

                <h2 className="text-2xl font-mono font-bold mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>

                <div className="flex items-center gap-2 text-sm text-neutral-500 mb-4">
                  <Calendar size={14} />
                  <time>{post.date}</time>
                </div>

                <p className="text-neutral-600 leading-relaxed mb-4">{post.excerpt}</p>

                <span className="text-sm font-mono text-blue-600 group-hover:underline">
                  Read more →
                </span>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}