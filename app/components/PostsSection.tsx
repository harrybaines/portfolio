import { Posts } from "@/app/components/posts";

export default function PostsSection() {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-800 mb-16 text-center">
        Posts
      </h2>
      <Posts />
    </div>
  );
}