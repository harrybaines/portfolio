import Link from "next/link";
import { FileText } from "lucide-react";

const blogPosts = [
  {
    slug: "vim-macros",
    title: "Vim Macros: Automating Repetitive Tasks",
    date: "2024-03-15",
    size: "4.2K",
    excerpt: "Learn how to use Vim macros to automate repetitive editing tasks and boost your productivity.",
  },
  {
    slug: "ai-swe",
    title: "The Future of AI in Software Engineering",
    date: "2024-02-28",
    size: "6.8K",
    excerpt: "Exploring how AI and LLMs are transforming the way we write, test, and deploy code.",
  },
  {
    slug: "posting",
    title: "Why I Started Writing Technical Posts",
    date: "2024-02-10",
    size: "3.5K",
    excerpt: "My journey into technical writing and why sharing knowledge matters in the developer community.",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="max-w-5xl mx-auto px-8">
        {/* Terminal Header */}
        <div className="mb-12 font-mono">
          <div className="text-green-600 text-sm mb-2">$ ls -la blog/posts/</div>
          <h1 className="text-5xl font-bold">
            Blog <span className="animate-pulse">_</span>
          </h1>
        </div>

        {/* Terminal-style File List */}
        <div className="bg-neutral-900 rounded-lg p-6 font-mono text-sm mb-8">
          <div className="text-neutral-500 mb-4">
            total {blogPosts.length} posts
          </div>
          <div className="space-y-2 text-neutral-300">
            {blogPosts.map((post, index) => (
              <div key={post.slug} className="flex items-center gap-4">
                <span className="text-green-400">-rw-r--r--</span>
                <span className="w-16">{post.size}</span>
                <span className="w-24">{post.date}</span>
                <span className="text-blue-400">{post.slug}.md</span>
              </div>
            ))}
          </div>
        </div>

        {/* Post Cards */}
        <div className="space-y-6">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <article className="bg-neutral-50 border-2 border-neutral-200 p-6 hover:border-green-600 transition-all">
                <div className="flex items-start gap-4">
                  <FileText className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <div className="flex-1">
                    <h2 className="text-xl font-mono font-semibold mb-2 group-hover:text-green-600 transition-colors">
                      {post.title}
                    </h2>
                    <div className="flex items-center gap-4 text-sm text-neutral-500 font-mono mb-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.size}</span>
                    </div>
                    <p className="text-neutral-600 leading-relaxed">{post.excerpt}</p>
                    <div className="mt-4 text-sm font-mono text-green-600 group-hover:underline">
                      $ cat {post.slug}.md →
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}