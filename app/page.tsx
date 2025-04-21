import { BlogPosts } from "@/app/components/posts";
import Image from "next/image";
import HeroSection from "./components/hero-section";
import { siteConfig } from "./config/site";

// Terminal Prompt component
const Prompt = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start font-mono text-sm leading-relaxed mb-5">
    <span className="text-[#8A8A8A] mr-2">$</span>
    <div className="flex-1">{children}</div>
  </div>
);

// Minimal project link component
const ProjectLink = ({ title, description, url }: { title: string; description: string; url: string }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-between py-3 px-4 hover:bg-[#2D2E2E] rounded-lg transition-all duration-200 group mb-3 border border-[#333333] hover:border-[#64FFDA]/30"
  >
    <div className="flex-1 flex items-center gap-6">
      <h3 className="text-[#64FFDA] font-mono text-sm min-w-28">{title}</h3>
      <p className="text-[#B8B8B8] text-xs font-sans opacity-80">{description}</p>
    </div>
    <span className="text-[#8A8A8A] text-xs transform group-hover:translate-y-[-2px] group-hover:translate-x-[2px] transition-transform duration-200">↗</span>
  </a>
);

// Featured Project Card component
const FeaturedProjectCard = ({ title, description, url, imagePath }: {
  title: string;
  description: string;
  url: string;
  imagePath: string;
}) => {
  // Check if the image path exists by checking if it contains a file extension
  const hasImage = /\.(jpg|jpeg|png|gif|webp)$/i.test(imagePath);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-lg overflow-hidden border border-[#333333] hover:border-[#64FFDA]/30 transition-all duration-200 group bg-[#1F2020]"
    >
      <div className="relative h-48 w-full overflow-hidden bg-[#252626]">
        {hasImage ? (
          <Image
            src={imagePath}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 350px"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-[#242525]">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#2A2B2B] border border-[#333333] group-hover:border-[#64FFDA]/20 transition-all duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#424242]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-[#64FFDA] font-mono text-base mb-2">{title}</h3>
        <p className="text-[#B8B8B8] text-sm font-sans">{description}</p>
      </div>
    </a>
  );
};

// Section Header component
const SectionHeader = ({ title }: { title: string }) => (
  <div className="mb-6 flex items-center">
    <h2 className="text-xl font-medium text-[#F5F5F5]">{title}</h2>
    <div className="ml-3 h-px flex-1 bg-gradient-to-r from-[#333333] to-transparent"></div>
  </div>
);

export default function Home() {
  // Get the regular projects (excluding pinned ones)
  const regularProjects = siteConfig.keyProjects.filter(
    project => project.title !== "archtms" && project.title !== "brewkit"
  );

  return (
    <div className="min-h-screen bg-[#1D1E1E] text-[#B8B8B8] font-sans">
      <div className="max-w-3xl mx-auto px-6 py-20 lg:py-40 3xl:py-80">
        {/* Hero Section */}
        <div className="mb-10">
          <HeroSection />
        </div>

        {/* About section */}
        <section className="mb-20">
          <SectionHeader title="About" />
          <div className="prose prose-lg max-w-none prose-p:text-[#B8B8B8] prose-headings:text-[#F5F5F5]">
            <p className="mb-6 text-lg font-normal font-sans">
              I&apos;m a software engineer from the 🇬🇧 UK.
              I am the founder of a complete architecture practice management system, <a href="/blog/archtms" target="_blank" rel="noopener noreferrer">archtms</a>, which I built and sold to a large architecture company.
              I have experience building full-stack web apps, automation scripts, API's and developer tools.
            </p>
            <p className="mb-6 text-lg font-normal font-sans">
              I&apos;m proficient in Python, Go and TypeScript, and I'm currently learning Rust to build performant applications.
              My go-to web stack is PERN, Django or Next.js depending on the project.
              I&apos;m comfortable with any kind of database (SQL/NoSQL).
              I&apos;m currently learning about Vercel's AI SDK to build AI apps, terminal tools and general SWE knowledge.
              I use Neovim, although I do enjoy using Zed and Cursor.
              I also enjoy contributing to OS projects, and I love exploring new technologies.
            </p>
            <p className="mb-6 text-lg font-normal font-sans">
              I&apos;m always open to new opportunities - if you&apos;d like to have a chat over coffee ☕, feel free to ping me an <a href={`mailto:${siteConfig.social.email}`}>email</a>!
            </p>
            <div className="flex items-center justify-end mt-8">
              <div className="h-px w-10 bg-[#D9D9D9] opacity-60 mr-3"></div>
              <span className="font-mono text-[#D9D9D9] text-sm tracking-wide">Harry</span>
            </div>
          </div>
        </section>

        {/* Projects section - with featured grid and regular list */}
        <section className="mb-20">
          <SectionHeader title="Projects" />

          {/* Featured projects grid */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <FeaturedProjectCard
              title="archtms"
              description="Architecture practice management system that streamlines project workflows and client communications"
              url="/blog/archtms"
              imagePath="/images/projects/archtms/tms.png"
            />
            <FeaturedProjectCard
              title="brewkit"
              description="Modern starter kit for web applications with preconfigured tools and best practices"
              url="https://github.com/harrybaines/brewkit"
              imagePath="/images/placeholder"
            />
          </div>

          {/* Regular project links */}
          <div>
            {regularProjects.map((project) => (
              <ProjectLink
                key={project.title}
                title={project.title}
                description={project.description}
                url={project.url}
              />
            ))}
          </div>
        </section>

        {/* Blog section */}
        <section className="mb-16">
          <SectionHeader title="Blog" />
          <div className="font-sans">
            <BlogPosts />
          </div>
        </section>
      </div>
    </div>
  );
}
