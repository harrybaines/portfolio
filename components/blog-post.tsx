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
    <section className="min-h-screen max-w-4xl mx-auto px-6 py-32">
      <div className="space-y-16">
        <div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-[#928374] hover:text-[#b8bb26] transition-colors mb-16"
          >
            <BsArrowLeft className="text-md" />
            Back to blog
          </Link>

          <div className="space-y-4">
            <h1 className="text-2xl font-medium text-[#ebdbb2] tracking-tighter">
              {post.metadata.title}
            </h1>
            <p className="text-sm text-[#928374]">
              {formatDate(post.metadata.publishedAt)}
            </p>
          </div>
        </div>

        <article className="prose prose-invert max-w-none">
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
    </section>
  )
}