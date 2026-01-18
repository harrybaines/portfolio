import Link from "next/link";
import { Calendar, Clock } from "lucide-react";

const blogPosts = [
  {
    slug: "vim-macros",
    title: "Vim Macros: Automating Repetitive Tasks",
    date: "2024-03-15",
    category: "Development",
    readTime: "5 min",
    excerpt: "Learn how to use Vim macros to automate repetitive editing tasks and boost your productivity.",
  },
  {
    slug: "ai-swe",
    title: "The Future of AI in Software Engineering",
    date: "2024-02-28",
    category: "AI/ML",
    readTime: "8 min",
    excerpt: "Exploring how AI and LLMs are transforming the way we write, test, and deploy code.",
  },
  {
    slug: "posting",
    title: "Why I Started Writing Technical Posts",
    date: "2024-02-10",
    category: "Writing",
    readTime: "4 min",
    excerpt: "My journey into technical writing and why sharing knowledge matters in the developer community.",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="max-w-6xl mx-auto px-8">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-neutral-600">Technical insights and thoughts</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block"
            >
              <article className="h-full p-8 border-2 border-neutral-200 hover:border-black transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center gap-3 mb-4 text-sm">
                  <span className="px-3 py-1 bg-neutral-100 font-mono">{post.category}</span>
                  <div className="flex items-center gap-4 text-neutral-500">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </span>
                  </div>
                </div>

                <h2 className="text-2xl font-mono font-bold mb-3 group-hover:text-neutral-600 transition-colors">
                  {post.title}
                </h2>

                <p className="text-neutral-600 leading-relaxed mb-4">{post.excerpt}</p>

                <span className="text-sm font-mono text-black group-hover:underline">
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