import { BlogPosts } from "@/app/components/posts";
import SectionWrapper from "@/app/components/section-wrapper";

export default function BlogPostsSection() {
  return (
    <SectionWrapper title="Posts">
      <BlogPosts />
    </SectionWrapper>
  );
}