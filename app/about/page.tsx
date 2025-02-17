import AnimatedSection from "@/components/animated-section";
import SectionHeader from "@/components/section-header";
import TextParagraph from "@/components/text-paragraph";
import { workData } from "@/content/workData";
import BikeImage from "@/public/assets/bike.jpeg";
import Image from "next/image";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col px-10 sm:px-8 max-w-2xl mx-auto py-32">
      {/* Spacing between sections */}
      <div className="space-y-16">
        {/* Header */}
        <AnimatedSection>
          <div className="space-y-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-green transition-colors font-mono"
            >
              <BsArrowLeft className="text-md" />
              Back
            </Link>

            <div className="space-y-6">
              <SectionHeader>About</SectionHeader>
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
                <Image
                  src={BikeImage}
                  alt="Harry cycling"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-primary text-sm font-mono">Maldives, 2018</p>
                </div>
              </div>
              <div className="space-y-4">
                <TextParagraph>
                  Software engineer from the UK with 5+ years of experience.
                  I&apos;m passionate about developer tooling and productivity, learning new technologies and building software that provides real value.
                </TextParagraph>
                <TextParagraph>
                  Currently focused on full-stack web development and AI integration. Building{" "}
                  <a
                    href="https://archtms.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-green border-b border-dashed border-muted/20 hover:border-green transition-colors"
                  >
                    archtms
                  </a>
                  , a complete architect management system, and{" "}
                  <a
                    href="https://github.com/harrybaines/brewkit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-green border-b border-dashed border-muted/20 hover:border-green transition-colors"
                  >
                    brewkit
                  </a>
                  , an open-source AI-powered startup boilerplate.
                </TextParagraph>
                <TextParagraph>
                  I&apos;m open to full-time opportunities and part-time work, feel free to{" "}
                  <a
                    href="https://cal.com/harrybaines"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-green border-b border-dashed border-muted/20 hover:border-green transition-colors"
                  >
                    book a call
                  </a>{" "}
                  and we can have a chat!
                </TextParagraph>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Tech Stack */}
        <AnimatedSection delay={0.1}>
          <div className="space-y-6">
            <SectionHeader>Tech Stack</SectionHeader>

            <div className="space-y-4">
              <TextParagraph>
                I primarily code in TypeScript, Go and Python. Recently, I&apos;ve been learning Rust (and loving it!) to build API&apos;s and CLI&apos;s.
              </TextParagraph>

              <TextParagraph>
                For web development I use Vite or Next.js depending on the use case. I tend to use a separate backend (Express.js or Django/Flask) for separation of concerns. My go-to for the database side is PostgreSQL and Prisma for database migrations (sorry Drizzle!).
              </TextParagraph>

              <TextParagraph>
                I enjoy spending time configuring my development environment (more time than I&apos;d like to admit!). I currently use Neovim, tmux, and zsh (check out my{" "}
                <a
                  href="https://github.com/harrybaines/dotfiles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-green border-b border-dashed border-muted/20 hover:border-green transition-colors"
                >
                  dotfiles
                </a>). I keep all my development and personal notes in my Obsidian second brain through Neovim using{" "}
                <a
                  href="https://github.com/epwalsh/obsidian.nvim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-green border-b border-dashed border-muted/20 hover:border-green transition-colors"
                >
                  obsidian.nvim
                </a>.
              </TextParagraph>

              <TextParagraph>
                I use Docker for containerization and Git for version control, with a focus on maintaining clean, well-documented codebases with CI/CD workflows.
              </TextParagraph>
            </div>
          </div>
        </AnimatedSection>

        {/* Interests */}
        <AnimatedSection delay={0.2}>
          <div className="space-y-6">
            <SectionHeader>Interests</SectionHeader>

            <div className="space-y-6">
              <div className="space-y-2">
                <p className="font-mono text-md font-semibold">Fitness</p>
                <TextParagraph>
                  Currently exploring the area of hybrid training.
                  Running and lifting.
                  I like to combine cardio and strength training.
                </TextParagraph>
              </div>

              <div className="space-y-2">
                <p className="font-mono text-md  font-semibold">Football</p>
                <TextParagraph>
                  Proud Liverpool supporter since 2008, and an avid Fantasy Premier League player since 2015.
                </TextParagraph>
              </div>

              <div className="space-y-2">
                <p className="font-mono text-md  font-semibold">Learning & Development</p>
                <TextParagraph>
                  Learning Rust for systems programming and exploring Neovim for a more efficient coding workflow.
                  Building my command-line expertise through CLI tools and shell scripting.
                </TextParagraph>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Experience */}
        <AnimatedSection delay={0.3}>
          <div className="space-y-6">
            <SectionHeader>Experience</SectionHeader>

            <div className="space-y-12">
              {workData.map((job, index) => (
                <AnimatedSection key={job.id} delay={0.4 + index * 0.1}>
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <a
                          href={job.companyURL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-muted transition-colors"
                        >
                          {job.companyName}
                        </a>
                        <span className="font-mono text-sm text-muted">{job.date}</span>
                      </div>
                      <span className="font-mono text-sm text-muted">{job.title}</span>
                    </div>

                    <TextParagraph>
                      {job.description}
                    </TextParagraph>

                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center px-2 py-1 rounded-md bg-muted/5 text-muted"
                        >
                          <span className="text-xs font-mono">{skill}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
