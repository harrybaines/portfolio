import { Posts } from "@/app/components/posts";

export default function PostsSection() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl md:text-3xl font-bold tracking-tight text-neutral-800 mb-10">
        Posts
      </h2>
      <Posts />
    </div>
  );
}