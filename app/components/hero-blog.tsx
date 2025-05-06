import { Posts } from "@/app/components/posts";

export default function HeroBlog() {
  return (
    <div>
      <h3 className="text-sm uppercase tracking-wider mb-6 flex items-center text-zinc-400 font-medium">
        Blog
      </h3>
      <Posts />
    </div>
  );
}