import { Posts } from "@/app/components/posts";

const fadeInSection = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.7,
      ease: "easeOut"
    }
  })
};

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