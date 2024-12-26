import HomeSectionHeader from "@/components/home-section-header";
import Image from "next/image";

interface Project {
  title: string;
  date: string;
  status: string;
  logoUrl?: string;
  description: string;
  technologies: string[];
  type: "main" | "side";
  link?: string;
}

const projects: Project[] = [
  {
    title: "archtms",
    date: "2023",
    status: "In Progress",
    logoUrl: "/assets/archtms.png",
    description: "Architect management system: timesheets, projects, fees and holiday requests.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    type: "main",
    link: "https://archtms.com"
  },
  {
    title: "brewkit",
    date: "2024",
    status: "In Progress",
    logoUrl: "/assets/brewkit.png",
    description: "Monorepo boilerplate template for developers",
    technologies: ["Next.js", "TypeScript", "tRPC", "Prisma"],
    type: "main",
    link: "https://github.com/harrybaines/brewkit"
  },
  {
    title: "TorchGPT",
    date: "2023",
    status: "Completed",
    description: "Generate PyTorch code using OpenAI's text-davinci-3 model",
    technologies: ["Python", "OpenAI", "PyTorch"],
    type: "side",
    link: "https://github.com/harrybaines/torchgpt"
  },
  {
    title: "AI Avatars",
    date: "2023",
    status: "Completed",
    description: "Personalised AI avatars using stable diffusion",
    technologies: ["Next.js", "Python", "Stable Diffusion"],
    type: "side",
    link: "https://github.com/harrybaines/ai-avatar-generator"
  }
];

export default function ProjectsList() {
  const featuredProjects = projects.filter(p => p.type === "main");
  const otherProjects = projects.filter(p => !featuredProjects.includes(p));

  return (
    <div>
      <div className="space-y-2 mb-6">
        <HomeSectionHeader title="Projects" />
      </div>

      {/* Featured Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        {featuredProjects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border border-gruvbox-border-default rounded-lg transition-colors hover:border-gruvbox-border-hover bg-gruvbox-background-soft"
          >
            <div className="space-y-4">
              {project.logoUrl && (
                <div className="h-32 bg-gruvbox-background-default rounded-lg flex items-center justify-center">
                  <div className="relative w-12 h-12">
                    <Image
                      src={project.logoUrl}
                      alt={project.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              )}
              <div className="space-y-1.5">
                <h3 className="text-gruvbox-text-primary font-medium">
                  {project.title}
                </h3>
                <p className="text-sm text-gruvbox-text-secondary">
                  {project.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Other Projects */}
      <div className="divide-y divide-gruvbox-border-default">
        {otherProjects.map((project) => (
          <div key={project.title} className="py-3 first:pt-0 last:pb-0">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <div className="flex items-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gruvbox-text-primary hover:text-gruvbox-border-hover transition-colors"
                >
                  {project.title}
                </a>
                <span className="hidden sm:inline text-gruvbox-text-muted mx-2">—</span>
                <p className="text-sm text-gruvbox-text-muted hidden sm:block">{project.description}</p>
              </div>
              <span className="text-xs text-gruvbox-text-muted">{project.date}</span>
            </div>
            <p className="text-sm text-gruvbox-text-muted mt-1 sm:hidden">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}