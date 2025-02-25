import { getBlogPosts } from "@/lib/mdx-utils";
import { PostsWrapper } from "./posts-wrapper";

export async function RecentPosts() {
  const posts = getBlogPosts().slice(0, 3)
  return <PostsWrapper posts={posts} />
}