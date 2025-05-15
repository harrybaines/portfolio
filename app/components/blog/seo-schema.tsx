'use client'

interface SEOSchemaProps {
  title: string;
  publishedAt: string;
  description: string;
  image?: string;
  slug: string;
  baseUrl: string;
  authorName?: string;
}

export default function SEOSchema({
  title,
  publishedAt,
  description,
  image,
  slug,
  baseUrl,
  authorName = 'Harry Baines'
}: SEOSchemaProps) {
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: title,
          datePublished: publishedAt,
          dateModified: publishedAt,
          description,
          image: image
            ? `${baseUrl}${image}`
            : `${baseUrl}/og?title=${encodeURIComponent(title)}`,
          url: `${baseUrl}/blog/${slug}`,
          author: {
            '@type': 'Person',
            name: authorName,
          },
        }),
      }}
    />
  );
}