import { getBlogPosts } from '@/app/blog/utils'
import { baseUrl } from '@/app/sitemap'
import BlogPost from '@/components/blog-post'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

interface Params {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  let posts = getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }: Params): Metadata {
  let post = getBlogPosts().find((post) => post.slug === params.slug)
  if (!post) {
    return {}
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

export default function BlogPostPage({ params }: Params) {
  let post = getBlogPosts().find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return <BlogPost post={post} />
}
