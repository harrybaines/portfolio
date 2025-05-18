import CtaSection from "@/app/components/CtaSection";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <div className="relative rounded-xl border border-neutral-200 bg-white p-8 shadow-sm">
      <div className="absolute -top-2.5 left-4 px-2 bg-white font-mono text-xs text-neutral-400">
        about.tsx
      </div>

      <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-center">
        <div className="flex-shrink-0 w-[200px]">
          <Image
            src="/images/whale.jpg"
            alt="Harry Baines"
            width={200}
            height={200}
            className="rounded-lg object-cover aspect-square"
            priority
          />
        </div>

        <div className="flex-1">
          <p className="text-neutral-600 leading-relaxed text-base">
            Hiya! I'm Harry, a developer from the UK. I build web apps, AI integrations, dev tools and automations. I'm the founder of{" "}
            <Link href="https://archtms.app" target="_blank" rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 inline-flex items-center font-medium">
              archtms
            </Link>.
            Nowadays, I mainly code in TypeScript, Go and Python.
            When I'm not coding, I enjoy hybrid training, playing chess, drinking coffee and watching LFC.
            Feel free to check out my{" "}
            <Link href="https://wwoi1vvxbb.ufs.sh/f/0PyPE3K0Z8csuKK9SjHt5G1omJv0bA8n3VFyDkiMHERzdeQU" target="_blank" rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 inline-flex items-center font-medium ml-1">
              CV <ExternalLink size={12} className="ml-1" />
            </Link> or ping me an email for a chat! 🤙

            <div className="mt-6">
              <CtaSection />
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}