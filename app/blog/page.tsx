import { BlogPosts } from '@/components/posts';
import Link from 'next/link';
import { BsArrowLeft } from "react-icons/bs";

export default function BlogPage() {
  return (
    <section className="min-h-screen max-w-4xl mx-auto px-6 py-32">
      <div className="space-y-16">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#928374] hover:text-[#b8bb26] transition-colors mb-16"
          >
            <BsArrowLeft className="text-md" />
            Back to home
          </Link>

          <div className="space-y-4">
            <h2 className="text-2xl font-medium text-[#ebdbb2]">Blog</h2>
            <p className="text-[#d5c4a1] leading-relaxed">
              Thoughts on software development, tech, and my personal experiences.
            </p>
          </div>
        </div>
        <BlogPosts />
      </div>
    </section>
  )
}