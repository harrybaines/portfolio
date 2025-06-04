import { getBlogPosts } from 'app/blog/utils'
import { baseUrl } from 'app/sitemap'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import PostContent from '@/app/components/blog/post-content'
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
    description,
    image,
  } = post.metadata
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${globalThis.encodeURIComponent(title)}`

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

  // Format date to match screenshot format
  const formatDate = (dateString: string) => {
    const date = new globalThis.Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    })
  }

  return (
    <div className="my-8 md:my-12 max-w-3xl mx-auto">
      <header className="mb-16 mt-24">
        {/* Date */}
        <div className="flex justify-center">
          <p className="text-neutral-700 text-sm">{formatDate(post.metadata.publishedAt)} {post.readingTime ? `— ${post.readingTime} min read` : ''}</p>
        </div>
        <h1 className="text-5xl font-extrabold text-center mt-4">{post.metadata.title}</h1>
      </header>

      <div className="mb-60">
        <PostContent content={post.content} />
      </div>

      {/* <RelatedPosts posts={getBlogPosts()} currentPostSlug={post.slug} /> */}

      <SEOSchema
        title={post.metadata.title}
        publishedAt={post.metadata.publishedAt}
        description={post.metadata.description}
        image={post.metadata.image}
        slug={post.slug}
        baseUrl={baseUrl}
      />
    </div>
  )
}