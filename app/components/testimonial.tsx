import { cn } from "@/lib/utils";
import Image from "next/image";

interface TestimonialProps {
  quote: string;
  author: {
    name: string;
    role: string;
    company: string;
    image: string;
  };
  className?: string;
}

export function Testimonial({ quote, author, className }: TestimonialProps) {
  return (
    <div className={cn("py-6 space-y-4", className)}>
      <div className="flex items-center gap-4">
        {author.image && (
          <div className="relative w-20 h-20 rounded-full overflow-hidden">
            <Image
              src={author.image}
              alt={author.name}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div>
          <span className="font-medium text-white block">{author.name}</span>
          <span className="text-sm text-slate-400">
            {author.role}, {author.company}
          </span>
        </div>
      </div>
      <p className="text-slate-300 leading-relaxed">
        &ldquo;{quote}&rdquo;
      </p>
    </div>
  );
}

export default Testimonial;