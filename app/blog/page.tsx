import { BlogPosts } from '@/components/posts'

export default function BlogPage() {
  return (
    <section className="min-h-screen">
      <div className="h-[5vh]" />
      <div className="w-full">
        <div className="space-y-16">
          <div className="space-y-4">
            <h2 className="text-2xl font-medium">Blog</h2>
            <p className="text-zinc-300 leading-relaxed">
              Thoughts on software development, tech, and my personal experiences.
            </p>
          </div>
          <BlogPosts />
        </div>
      </div>
    </section>
  )
}