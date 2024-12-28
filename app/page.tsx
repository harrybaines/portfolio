import FadeIn from "@/components/fade-in";
import OsContributions from "@/components/os-contributions";
import { BlogPosts } from "@/components/posts";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";

const socialLinks = [
  { name: "Email", icon: MdAlternateEmail, link: "mailto:harryb0905@googlemail.com" },
  { name: "GitHub", icon: BsGithub, link: "https://github.com/harrybaines" },
  { name: "LinkedIn", icon: BsLinkedin, link: "https://www.linkedin.com/in/harryb0905/" },
];

const projects = [
  { name: "archtms", description: "architect management system", link: "https://archtms.com" },
  { name: "brewkit", description: "startup boilerplate", link: "https://github.com/harrybaines/brewkit" },
  { name: "torchgpt", description: "pytorch code generator", link: "https://github.com/harrybaines/torchgpt" },
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col md:justify-center px-6 sm:px-8 max-w-2xl mx-auto pt-16 md:pt-0">
      <div className="space-y-12">
        {/* Intro */}
        <div className="space-y-6">
          <FadeIn>
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <p className="font-mono text-sm text-sonokai-green">Hi, my name is</p>
                <p className="font-mono text-2xl font-semibold text-sonokai-text">Harry Baines</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="space-y-3">
              <p className="font-sans text-md text-sonokai-text leading-relaxed">
                Software engineer focused on building elegant solutions. Currently developing{" "}
                <a
                  href="https://archtms.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-dashed border-sonokai-text-muted/20 hover:border-sonokai-green transition-colors"
                >
                  archtms
                </a>
                , a complete architect management system.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            {/* Navigation */}
            <div className="flex items-center gap-6 font-mono">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm text-sonokai-text-muted hover:text-sonokai-green transition-colors"
              >
                About me
                <BsArrowRight className="text-xs" />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-sonokai-text-muted hover:text-sonokai-green transition-colors"
              >
                Blog
                <BsArrowRight className="text-xs" />
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.link}
                    className="text-sonokai-text-muted hover:text-sonokai-green transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </FadeIn>
        </div>

        {/* Projects */}
        <FadeIn delay={0.6}>
          <div className="space-y-3">
            <p className="font-mono text-sm text-sonokai-green">~/Projects</p>
            <div className="space-y-1">
              {projects.map((project, index) => (
                <div key={project.name}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between group py-1.5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm text-sonokai-text">{project.name}</span>
                      <span className="font-mono text-xs text-sonokai-text-muted">{project.description}</span>
                    </div>
                    <BsArrowRight className="text-xs text-sonokai-text-muted group-hover:text-sonokai-green transition-colors" />
                  </a>
                  {index < projects.length - 1 && (
                    <div className="h-[1px] bg-sonokai-text-muted/10 mt-1" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Blog Posts */}
        <FadeIn delay={0.7}>
          <div className="space-y-3">
            <p className="font-mono text-sm text-sonokai-green">~/Posts</p>
            <BlogPosts />
          </div>
        </FadeIn>

        {/* OS Contributions */}
        <FadeIn delay={0.8}>
          <div className="space-y-3">
            <p className="font-mono text-sm text-sonokai-green">~/Open Source</p>
            <OsContributions />
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
