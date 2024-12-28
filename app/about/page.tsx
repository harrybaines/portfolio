import ExperienceItem from "@/components/experience-item";
import { workData } from "@/content/workData";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

const interests = [
  {
    title: "Fitness",
    description: "Regular gym-goer and runner, currently hybrid training",
  },
  {
    title: "Football",
    description: "Fantasy football player and Liverpool supporter since 2008",
  },
  {
    title: "Learning",
    description: "Currently learning Neovim, CLI tools and Rust programming",
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col md:justify-center px-6 sm:px-8 max-w-2xl mx-auto pt-16 md:pt-0">
      <div className="space-y-16">
        {/* Header */}
        <div className="space-y-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-sonokai-text-muted hover:text-sonokai-green transition-colors font-mono -mt-6 md:mt-0"
          >
            <BsArrowLeft className="text-xs" />
            Back to home
          </Link>

          <div className="space-y-4">
            <p className="font-mono text-sm text-sonokai-green">~/About</p>
            <div className="space-y-4">
              <p className="font-sans text-sonokai-text leading-relaxed">
                Software engineer from the UK with 5+ years of experience. Passionate about learning new technologies and building software that provides real value.
              </p>
              <p className="font-sans text-sonokai-text leading-relaxed">
                I&apos;m open to full-time opportunities and part-time work, feel free to{" "}
                <a
                  href="https://cal.com/harrybaines"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-dashed border-sonokai-text-muted/20 hover:border-sonokai-green transition-colors"
                >
                  book a call
                </a>{" "}
                and we can have a chat!
              </p>
            </div>
          </div>
        </div>

        {/* Interests */}
        <div className="space-y-3">
          <p className="font-mono text-sm text-sonokai-green">~/Interests</p>
          <div className="space-y-1">
            {interests.map((interest, index) => (
              <div key={interest.title}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between group py-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                    <span className="font-mono text-sm text-sonokai-text">{interest.title}</span>
                    <span className="font-mono text-xs text-sonokai-text-muted">{interest.description}</span>
                  </div>
                </div>
                {index < interests.length - 1 && (
                  <div className="h-[1px] bg-sonokai-text-muted/10 mt-1" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="space-y-3">
          <p className="font-mono text-sm text-sonokai-green">~/Experience</p>
          <div className="space-y-1">
            {workData.map((job, index) => (
              <div key={job.id}>
                <ExperienceItem job={job} />
                {index < workData.length - 1 && (
                  <div className="h-[1px] bg-sonokai-text-muted/10 mt-1" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
