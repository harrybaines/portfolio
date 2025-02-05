import { formatDate } from '@/app/blog/utils'
import { baseUrl } from '@/app/sitemap'
import { CustomMDX } from '@/components/mdx'
import Link from 'next/link'
import { BsArrowLeft } from 'react-icons/bs'

interface BlogPostProps {
  post: {
    slug: string
    content: string
    metadata: {
      title: string
      publishedAt: string
      summary: string
      image?: string
    }
  }
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <main className="min-h-screen flex flex-col md:justify-center px-6 sm:px-8 max-w-2xl mx-auto py-24 md:py-16">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-primary transition-colors font-mono -mt-6 md:mt-0"
          >
            <BsArrowLeft className="text-xs" />
            Back to posts
          </Link>

          <div className="space-y-4">
            <p className="font-mono text-sm text-primary">~/Post</p>
            <div className="space-y-2">
              <h1 className="font-sans text-xl font-semibold text-text">
                {post.metadata.title}
              </h1>
              <p className="font-mono text-sm text-text-muted">
                {formatDate(post.metadata.publishedAt)}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <article className="prose prose-invert max-w-none prose-p:font-sans prose-p:text-text prose-headings:font-sans prose-headings:text-text prose-p:mt-4 prose-headings:mt-6 prose-h1:text-xl prose-h2:text-lg prose-h3:text-base">
          <CustomMDX source={post.content} />
        </article>

        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              headline: post.metadata.title,
              datePublished: post.metadata.publishedAt,
              dateModified: post.metadata.publishedAt,
              description: post.metadata.summary,
              image: post.metadata.image
                ? `${baseUrl}${post.metadata.image}`
                : `/og?title=${encodeURIComponent(post.metadata.title)}`,
              url: `${baseUrl}/blog/${post.slug}`,
              author: {
                '@type': 'Person',
                name: 'harrybaines',
              },
            }),
          }}
        />
      </div>
    </main>
  )
}