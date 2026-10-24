"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  index: number;
  slugs: string[];
  name: string;
};

/** Floating pill for flicking between variations. Also responds to [ and ] keys. */
export function VariationSwitcher({ index, slugs, name }: Props) {
  const router = useRouter();
  const prev = slugs[(index - 1 + slugs.length) % slugs.length];
  const next = slugs[(index + 1) % slugs.length];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "[") router.push(`/v/${prev}`);
      if (e.key === "]") router.push(`/v/${next}`);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [router, prev, next]);

  return (
    <div data-switcher className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-full border border-black/10 bg-white/85 p-1 font-geist-mono text-xs text-neutral-600 shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur">
      <Link href={`/v/${prev}`} aria-label="Previous variation" className="rounded-full p-1.5 hover:bg-neutral-100">
        <ChevronLeft className="size-4" />
      </Link>
      <span className="min-w-36 px-2 text-center">
        <span className="text-neutral-400">{slugs[index]} /</span> {name}
      </span>
      <Link href={`/v/${next}`} aria-label="Next variation" className="rounded-full p-1.5 hover:bg-neutral-100">
        <ChevronRight className="size-4" />
      </Link>
    </div>
  );
}
