import { BlogPosts } from "@/components/blog/posts"
import { Hero } from "@/components/home/hero"

export default function Page() {
  return (
    <section className="space-y-6">
      <Hero />
      <BlogPosts />
    </section>
  )
}