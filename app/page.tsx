import { AnimatedSection } from "@/app/components/animated-section";
import { BlogPosts } from "@/app/components/posts";
import { Projects } from "@/app/components/projects";
import { getFormattedExperience } from "@/lib/utils";
import { Github, Linkedin, Mail, Youtube } from "lucide-react";
import Link from "next/link";
import ProfileSection from "./components/profile-section";
import { siteConfig } from "./config/site";

// Common component for section title
const SectionTitle = ({ title }: { title: string }) => (
  <h3 className="text-sm uppercase tracking-wide text-white/50 font-mono mb-6">
    {title}
  </h3>
);

// Social icons component
const SocialIcons = () => (
  <div className="flex gap-5 mt-2">
    <SocialIcon
      href={siteConfig.social.twitter}
      aria-label="X (formerly Twitter)"
    >
      <XIcon size={18} />
    </SocialIcon>
    <SocialIcon
      href={siteConfig.social.github}
      aria-label="GitHub"
    >
      <Github size={18} />
    </SocialIcon>
    <SocialIcon
      href={`mailto:${siteConfig.social.email}`}
      aria-label="Email"
    >
      <Mail size={18} />
    </SocialIcon>
    <SocialIcon
      href={siteConfig.social.linkedin}
      aria-label="LinkedIn"
    >
      <Linkedin size={18} />
    </SocialIcon>
    <SocialIcon
      href={siteConfig.social.youtube}
      aria-label="YouTube"
    >
      <Youtube size={18} />
    </SocialIcon>
  </div>
);

// Individual social icon with consistent styling
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
    className="text-white/60 hover:text-white transition-colors"
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

const IntroSection = () => (
  <div className="pt-20 xl:pt-40 2xl:pt-80 pb-10">
    <Container>
      <div className="space-y-3 pl-8">
        <p className="text-sm sm:text-lg font-mono text-neutral-400 tracking-tight">
          Hi, I&apos;m Harry 👋
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tighter text-white">
          I build software<span className="text-white/70">.</span>
        </h1>
      </div>
    </Container>
  </div>
);

// Profile and bio section component
const ProfileBioSection = () => (
  <Container>
    <div className="bg-[#252525]/80 backdrop-blur-sm p-8 rounded-xl shadow-xl">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
        <ProfileSection />

        <div className="flex flex-col gap-6 flex-1">
          {/* Bio Section */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-xs uppercase tracking-wider text-white/40 font-mono mb-3">about</h3>
              <div className="space-y-4">
                <p className="text-lg text-white/70">
                  Full-stack developer from the UK with {getFormattedExperience()} experience.
                  Specialising in web development, AI integration and developer tooling.
                </p>
                <p className="text-lg text-white/70">
                  Read more about me {" "}
                  <Link
                    href="/about"
                    className="text-white underline underline-offset-4 hover:text-white/80 transition-colors"
                  >
                    here
                  </Link>.
                </p>
              </div>
            </div>

            <SocialIcons />
          </div>
        </div>
      </div>
    </div>
  </Container>
);

// Content section component for projects and blog posts
const ContentSection = () => (
  <AnimatedSection>
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 px-8">
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
        <IntroSection />
        <ProfileBioSection />
        <ContentSection />
      </div>
    </div>
  );
}
