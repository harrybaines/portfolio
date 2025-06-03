import { Posts } from "@/app/components/posts";

export default function Blog() {
  return (
    <div className="h-full">
      <div className="flex flex-col items-center justify-center py-16">
        <h1 className="text-xl md:text-4xl font-extrabold mb-16">Posts</h1>
        <Posts />
      </div>
    </div>
  )
}