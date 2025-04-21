import { getBlogPosts } from "@/app/blog/utils";
import Link from "next/link";

export function BlogPosts() {
  const allBlogs = getBlogPosts();
  if (!allBlogs || allBlogs.length === 0) {
    return <p>Wow, such empty.</p>;
  }

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4 hover:opacity-100 transition-opacity duration-300 block"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex space-x-0 justify-between items-end py-1">
              <div className="flex-1">
                <p className="font-mono text-md tracking-tight text-[#F5F5F5] border-b border-dashed border-white/70 inline-block pb-0.5 hover:text-[#64FFDA] transition-colors duration-200">
                  {post.metadata.title}
                </p>
                <p className="text-neutral-400 mt-1.5">
                  {post.metadata.summary}
                </p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}