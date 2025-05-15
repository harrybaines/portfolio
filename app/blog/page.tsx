import BackButton from "@/app/components/back-button";
import { Posts } from "@/app/components/posts";

export default function Blog() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col items-center justify-center min-h-screen px-8 py-16">
        <div className="max-w-2xl w-full">
          <div className="mb-8">
            <BackButton href="/" />
          </div>
          <h1 className="text-xl md:text-2xl font-extrabold mb-8">Posts</h1>
          <Posts />
        </div>
      </div>
    </div>
  )
}