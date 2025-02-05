import { BlogPosts } from '@/components/posts';
import Link from 'next/link';
import { BsArrowLeft } from "react-icons/bs";

export default function BlogPage() {
  return (
    <main className="min-h-screen flex flex-col md:justify-center px-6 sm:px-8 max-w-2xl mx-auto pt-16 md:pt-0">
      <div className="space-y-16">
        {/* Header */}
        <div className="space-y-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-green transition-colors font-mono -mt-6 md:mt-0"
          >
            <BsArrowLeft className="text-xs" />
            Back to home
          </Link>
        </div>

        {/* Posts */}
        <div className="space-y-3">
          <p className="font-mono text-sm text-primary">~/Posts</p>
          <BlogPosts />
        </div>
      </div>
    </main>
  );
}