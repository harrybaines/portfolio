import { Posts } from "@/app/components/posts";
import SectionWrapper from "@/app/components/section-wrapper";
import { Terminal } from "lucide-react";

export default function WritingSection() {

  return (
    <SectionWrapper bgColor="bg-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 text-amber-600 mb-2">
          <Terminal size={18} strokeWidth={1.5} />
          <span className="font-mono text-sm">notes</span>
        </div>
        <h2 className="text-3xl font-semibold text-stone-900 mb-8">
          Writing
        </h2>
        <Posts />
      </div>
    </SectionWrapper>
  );
}