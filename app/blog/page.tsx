import { getBlogPosts } from "@/lib/mdx-utils";
import Image from "next/image";

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  const posts = getBlogPosts()
  const featuredPost = posts[0] // Most recent post as featured
  const remainingPosts = posts.slice(1)

  return (
    <div className="py-20">
      <div className="mx-auto space-y-20">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Writing on software & design</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Essays on software development, design patterns, and building digital products.
            Subscribe to get new posts in your inbox.
          </p>
        </div>

        {/* Featured Post */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {featuredPost.metadata.image && (
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src={featuredPost.metadata.image}
                alt={featuredPost.metadata.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          )}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <time className="text-sm text-muted-foreground font-mono">
                  {featuredPost.metadata.publishedAt}
                </time>
                <span className="text-sm text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground font-mono">
                  5 min read
                </span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight">
                {featuredPost.metadata.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {featuredPost.metadata.summary}
              </p>
            </div>
            <a
              href={`/blog/${featuredPost.slug}`}
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              Read more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Post Grid */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold tracking-tight">Latest Posts</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {remainingPosts.map((post) => (
              <article
                key={post.slug}
                className="group relative space-y-4 hover:cursor-pointer"
                onClick={() => window.location.href = `/blog/${post.slug}`}
              >
                {post.metadata.image && (
                  <div className="relative aspect-[3/2] rounded-lg overflow-hidden">
                    <Image
                      src={post.metadata.image}
                      alt={post.metadata.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                )}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <time className="text-sm text-muted-foreground font-mono">
                      {post.metadata.publishedAt}
                    </time>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground font-mono">
                      5 min read
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {post.metadata.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-2">
                    {post.metadata.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}