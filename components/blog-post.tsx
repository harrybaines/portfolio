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
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-green transition-colors font-mono -mt-6 md:mt-0"
          >
            <BsArrowLeft className="text-md" />
            Back
          </Link>

          <div className="space-y-4">
            <p className="font-mono text-sm text-orange">~/Post</p>
            <div className="space-y-2">
              <h1 className="font-sans text-xl font-semibold text-primary">
                {post.metadata.title}
              </h1>
              <p className="font-mono text-sm text-muted">
                {formatDate(post.metadata.publishedAt)}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <article className="prose prose-invert max-w-none prose-p:font-sans prose-p:text-primary prose-headings:font-sans prose-headings:text-primary prose-p:mt-4 prose-headings:mt-6 prose-h1:text-xl prose-h2:text-lg prose-h3:text-base prose-li:text-primary">
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