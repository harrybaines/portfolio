import { AnimatedSection } from "@/app/components/animated-section";
import { BlogPosts } from "@/app/components/posts";
import { Projects } from "@/app/components/projects";
import { getFormattedExperience } from "@/lib/utils";
import { Github, Linkedin, Mail, Youtube } from "lucide-react";
import Link from "next/link";
import ProfileSection from "./components/profile-section";
import { siteConfig } from "./config/site";

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

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#1C1C1C] text-white">
      {/* Hero section with both elements centered */}
      <div className="w-full flex items-center justify-center pt-40 pb-10">
        <div className="max-w-4xl w-full px-4 sm:px-6">
          <div className="space-y-3">
            <p className="text-sm sm:text-lg font-mono text-neutral-400 tracking-tight">
              Hi, I&apos;m Harry 👋
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tighter text-white">
              I build software<span className="text-white/70">.</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        {/* Profile and Bio Section */}
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
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

                  <div className="flex gap-5 mt-2">
                    <a
                      href={siteConfig.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors"
                      aria-label="X (formerly Twitter)"
                    >
                      <XIcon size={18} />
                    </a>
                    <a
                      href={siteConfig.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={`mailto:${siteConfig.social.email}`}
                      className="text-white/60 hover:text-white transition-colors"
                      aria-label="Email"
                    >
                      <Mail size={18} />
                    </a>
                    <a
                      href={siteConfig.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href={siteConfig.social.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors"
                      aria-label="YouTube"
                    >
                      <Youtube size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Two Column Grid Section */}
        <AnimatedSection>
          <div className="max-w-4xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              {/* Projects Column */}
              <div>
                <h3 className="text-sm uppercase tracking-wide text-white/50 font-mono mb-6">
                  projects
                </h3>
                <Projects />
              </div>

              {/* Writing Column */}
              <div>
                <h3 className="text-sm uppercase tracking-wide text-white/50 font-mono mb-6">
                  writing
                </h3>
                <BlogPosts />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
