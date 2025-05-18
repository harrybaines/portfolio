import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function CtaSection() {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <Link
        href="/about"
        className="flex-1 text-center px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center group text-sm"
      >
        🤖 Ask AI About Me
        <ChevronRight size={14} className="ml-1 transform group-hover:translate-x-0.5 transition-transform" />
      </Link>
      <Link
        href="/growth-map"
        className="flex-1 text-center px-5 py-2.5 border border-neutral-200 bg-white text-neutral-900 font-medium rounded-lg hover:bg-neutral-100 shadow-sm transition-colors text-sm"
      >
        🗺️ Growth Map
      </Link>
    </div>
  );
}