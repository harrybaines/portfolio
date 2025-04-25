import { getBlogPosts } from 'app/blog/utils'
import { baseUrl } from 'app/sitemap'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import BackButton from '@/app/components/blog/back-button'
import PostBanner from '@/app/components/blog/post-banner'
import PostContent from '@/app/components/blog/post-content'
import PostHeader from '@/app/components/blog/post-header'
import RelatedPosts from '@/app/components/blog/related-posts'
import SEOSchema from '@/app/components/blog/seo-schema'

export async function generateStaticParams() {
  let posts = getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }): Metadata | null {
  let post = getBlogPosts().find((post) => post.slug === params.slug)
  if (!post) {
    return null
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default function Blog({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getBlogPosts()
    .filter(p => p.slug !== post.slug)
    .slice(0, 2);

  const hasBanner = !!post.metadata.image;

  return (
    <div className="min-h-screen bg-amber-50 text-stone-800">
      <PostBanner
        imageUrl={post.metadata.image}
        title={post.metadata.title}
      />
      <div className={`max-w-4xl mx-auto px-6 ${hasBanner ? '-mt-20 relative z-20' : 'pt-12'}`}>
        <article className="bg-white rounded-xl shadow-md overflow-hidden">
          <PostHeader
            title={post.metadata.title}
            summary={post.metadata.summary}
            publishedAt={post.metadata.publishedAt}
            tags={post.metadata.tags}
            readingTime={post.readingTime}
          />
          <PostContent content={post.content} />
        </article>
      </div>
      <RelatedPosts posts={relatedPosts} />
      <BackButton href="/blog" />
      <SEOSchema
        title={post.metadata.title}
        publishedAt={post.metadata.publishedAt}
        summary={post.metadata.summary}
        image={post.metadata.image}
        slug={post.slug}
        baseUrl={baseUrl}
      />
    </div>
  )
}