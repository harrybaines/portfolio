import Image from "next/image";
import { cn } from "@/lib/utils";

type PreviewProps = {
  src: string;
  alt: string;
  /** Classes for the tinted frame (background, radius, aspect ratio). */
  className?: string;
  /** Classes for the inset screenshot. */
  imageClassName?: string;
  priority?: boolean;
};

/**
 * A project screenshot floating inside a soft tinted panel, cropped at the
 * bottom edge — the "catalogue card" look used across most variations.
 */
export function Preview({ src, alt, className, imageClassName, priority }: PreviewProps) {
  return (
    <div className={cn("relative aspect-[16/10] overflow-hidden bg-neutral-100", className)}>
      <div
        className={cn(
          "absolute inset-x-[8%] top-[10%] -bottom-4 overflow-hidden rounded-t-lg bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] ring-1 ring-black/5 transition-transform duration-700 ease-out group-hover:-translate-y-1.5",
          imageClassName,
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}
