import { AnimatedSection } from "@/app/components/animated-section";
import { BlogPosts } from "@/app/components/posts";
import { Projects } from "@/app/components/projects";
import { getFormattedExperience } from "@/lib/utils";
import { ExternalLink, Github, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";
import ProfileSection from "./components/profile-section";
import { siteConfig } from "./config/site";

// Common component for section title
const SectionTitle = ({ title }: { title: string }) => (
  <h3 className="text-sm uppercase tracking-wide text-white/50 font-mono mb-6">
    {title}
  </h3>
);

// Social icon with consistent styling
const SocialIcon = ({
  href,
  children,
  "aria-label": ariaLabel
}: {
  href: string;
  children: React.ReactNode;
  "aria-label": string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white/60 hover:text-white transition-colors duration-300"
    aria-label={ariaLabel}
  >
    {children}
  </a>
);

// Custom X (formerly Twitter) icon component
const XIcon = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"
      fill="currentColor"
    />
  </svg>
);

// Container that applies consistent max width and padding
const Container = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`max-w-4xl mx-auto px-4 sm:px-6 ${className}`}>
    {children}
  </div>
);

// Hero section - new redesigned component
const HeroSection = () => (
  <div className="min-h-[75vh] flex items-center justify-center py-20 md:py-44 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-[#1C1C1C] via-[#1e1e1e] to-[#252525] z-0"></div>

    <div className="absolute top-0 left-0 w-full h-full z-0 opacity-10">
      <div className="absolute top-16 left-16 w-64 h-64 rounded-full bg-teal-500/20 blur-3xl"></div>
      <div className="absolute bottom-32 right-16 w-80 h-80 rounded-full bg-cyan-500/20 blur-3xl"></div>
    </div>

    <Container className="z-10">
      <div className="flex flex-col gap-10">
        {/* Headline first - separate from the main content grid */}
        <div className="mb-0">
          <p className="font-mono text-sm sm:text-lg text-neutral-400 tracking-tight mb-2">
            Hi, I&apos;m Harry 👋
          </p>
          <div className="text-3xl sm:text-4xl font-bold tracking-tighter text-white flex">
            I build software.
          </div>
        </div>

        {/* Main content grid with profile image and bio side by side */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-1">
            <ProfileSection />
          </div>

          <div className="md:col-span-2 flex flex-col justify-center space-y-4">

            <div className="flex flex-col gap-3">
              <h2 className="font-mono text-sm text-neutral-400 tracking-tight uppercase inline-block">
                About
              </h2>

              <p className="text-lg text-white/70 max-w-xl">
                Full-stack developer from the UK with {getFormattedExperience()} experience.
                Specialising in web development, AI integration and developer tooling.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-2">
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/about"
                  className="px-5 py-2.5 bg-white/[0.05] text-white rounded-md font-mono text-sm transition-all duration-300 hover:bg-white/[0.08] border border-white/10 hover:border-white/20 hover:translate-y-[-1px] hover:shadow-sm hover:shadow-white/5"
                >
                  About me
                </Link>
                <a
                  href={`mailto:${siteConfig.social.email}`}
                  className="px-5 py-2.5 bg-transparent text-white/70 rounded-md font-mono text-sm transition-all duration-300 hover:text-white border border-white/10 hover:border-white/20 hover:translate-y-[-1px]"
                >
                  Get in touch
                </a>
              </div>

              <div className="flex gap-4 sm:pl-6 sm:border-l sm:border-white/10 mt-3 sm:mt-0">
                <SocialIcon href={siteConfig.social.twitter} aria-label="X (formerly Twitter)">
                  <XIcon size={18} />
                </SocialIcon>
                <SocialIcon href={siteConfig.social.github} aria-label="GitHub">
                  <Github size={18} />
                </SocialIcon>
                <SocialIcon href={siteConfig.social.linkedin} aria-label="LinkedIn">
                  <Linkedin size={18} />
                </SocialIcon>
                <SocialIcon href={siteConfig.social.youtube} aria-label="YouTube">
                  <Youtube size={18} />
                </SocialIcon>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Cards */}
        <div className="w-full mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* ArchTMS Card */}
            <a
              href="/blog/archtms"
              className="group relative overflow-hidden rounded-md transition-all duration-300 hover:translate-y-[-2px] bg-white/[0.02] border border-white/[0.05]"
            >
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-mono text-sm text-white">ArchTMS</h3>
                  <ExternalLink className="text-white/50 group-hover:text-white transition-colors" size={14} />
                </div>
                <p className="text-white/60 text-xs font-mono">Architecture and task management system</p>
              </div>
            </a>

            {/* Brewkit Card */}
            <a
              href="https://github.com/harrybaines/brewkit"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-md transition-all duration-300 hover:translate-y-[-2px] bg-white/[0.02] border border-white/[0.05]"
            >
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-mono text-sm text-white">brewkit</h3>
                  <ExternalLink className="text-white/50 group-hover:text-white transition-colors" size={14} />
                </div>
                <p className="text-white/60 text-xs font-mono">Modern starter kit for web development</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </Container>
  </div>
);

// Content section component for projects and blog posts
const ContentSection = () => (
  <AnimatedSection>
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 min-h-[50vh]">
        <div>
          <SectionTitle title="projects" />
          <Projects />
        </div>
        <div>
          <SectionTitle title="writing" />
          <BlogPosts />
        </div>
      </div>
    </Container>
  </AnimatedSection>
);

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#1C1C1C] text-white">
      <div className="flex-1 flex flex-col">
        <HeroSection />
        <ContentSection />
      </div>
    </div>
  );
}
