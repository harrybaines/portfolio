'use client';

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col justify-center pt-32 md:pt-48 lg:pt-20">
        <div className="w-full max-w-2xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <Link
              href="/"
              className="inline-flex items-center text-sm font-mono text-white/60 hover:text-white transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back home
            </Link>
          </div>

          <div
            className="prose prose-invert
              prose-headings:font-medium prose-headings:text-white/95
              prose-h1:text-3xl prose-h1:tracking-tight prose-h1:mt-6 prose-h1:mb-2
              prose-h2:text-xl prose-h2:tracking-tight prose-h2:mt-6 prose-h2:mb-2
              prose-h3:text-xl prose-h3:tracking-tight prose-h3:mt-6 prose-h3:mb-2
              prose-h4:text-lg prose-h4:tracking-tight prose-h4:mt-6 prose-h4:mb-2
              prose-p:text-neutral-300 prose-p:my-4 prose-p:leading-normal
              prose-a:underline prose-a:decoration-neutral-600 prose-a:decoration-[0.1em] prose-a:underline-offset-2 prose-a:transition-all prose-a:text-white/80 prose-a:hover:text-white
              prose-code:font-['berkeley-mono'] prose-code:px-1 prose-code:py-0.5 prose-code:rounded-lg prose-code:text-neutral-300
              prose-pre:bg-neutral-900 prose-pre:rounded-lg prose-pre:overflow-x-auto prose-pre:border prose-pre:border-neutral-900 prose-pre:py-2 prose-pre:px-3 prose-pre:text-sm
              prose-pre code:p-0 prose-pre code:border-0 prose-pre code:leading-normal
              prose-strong:font-medium prose-strong:text-white/90
              prose-ul:list-disc prose-ul:pl-6
              prose-ol:list-decimal prose-ol:pl-6
              prose-li:text-neutral-300 prose-li:marker:text-neutral-500
              prose-blockquote:text-neutral-400 prose-blockquote:border-neutral-600
              prose-hr:border-neutral-600
              prose-img:m-0
              prose-first:mt-5 prose-first:mb-5
              mb-32 md:mb-48 lg:mb-56"
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}