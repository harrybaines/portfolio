import { Hero } from "@/components/home/hero"
import { QuickLinks } from "@/components/home/quick-links"
import { getBlogPosts } from "@/lib/mdx-utils"

export default function Page() {
  // Fetch blog posts on the server
  const allBlogPosts = getBlogPosts()
    .sort((a, b) => {
      if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
        return -1
      }
      return 1
    })
    .slice(0, 3) // Only get the 3 most recent posts

  return (
    <section className="space-y-0">
      <Hero />
      <QuickLinks blogPosts={allBlogPosts} />
    </section>
  )
}