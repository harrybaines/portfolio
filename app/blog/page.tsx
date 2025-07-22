import BackButton from "@/app/components/back-button";
import { Posts } from "@/app/components/posts";

export default function Blog() {
  return (
    <div className="h-full min-h-screen">
      <div className="my-10">
        <BackButton href="/" />
      </div>
      <div className="mt-16">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-16 text-center">Posts</h1>
        <Posts />
      </div>
    </div>
  )
}