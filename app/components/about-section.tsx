import SectionWrapper from "@/app/components/section-wrapper";
import { siteConfig } from "@/app/config/site";

export default function AboutSection() {
  return (
    <SectionWrapper title="About">
      <div className="flex flex-col gap-6 text-lg text-foreground">
        <p>
          I&apos;m a software engineer from the 🇬🇧 UK.
          I am the founder of a complete architecture practice management system, <a href="/blog/archtms" target="_blank" rel="noopener noreferrer">archtms</a>, which I built and sold to a large architecture company.
          I have experience building full-stack web apps, automation scripts, API's and developer tools.
        </p>
        <p>
          I&apos;m proficient in Python, Go and TypeScript, and I'm currently learning Rust to build performant applications.
          My go-to web stack is PERN, Django or Next.js depending on the project.
          I&apos;m comfortable with any kind of database (SQL/NoSQL).
          I&apos;m currently learning about Vercel's AI SDK to build AI apps, terminal tools and general SWE knowledge.
          I use Neovim, although I do enjoy using Zed and Cursor.
          I also enjoy contributing to OS projects, and I love exploring new technologies.
        </p>
        <p>
          I&apos;m always open to new opportunities - if you&apos;d like to have a chat over coffee ☕, feel free to ping me an <a href={`mailto:${siteConfig.social.email}`}>email</a>!
        </p>
      </div>
      <div className="flex items-center justify-start mt-8">
        <div className="h-px w-8 bg-[#D9D9D9] opacity-60 mr-3"></div>
        <span className="font-mono text-[#D9D9D9] text-sm tracking-wide">Harry</span>
      </div>
    </SectionWrapper>
  );
}