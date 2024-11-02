import HomeSectionHeader from "@/components/home-section-header";

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
    title: "BrewKit",
    date: "2024",
    status: "In Progress",
    logoUrl: "/assets/brewkit.png",
    description: "Monorepo boilerplate to ship a startup for the price of a coffee.",
    technologies: ["Next.js", "TypeScript", "tRPC", "Prisma"],
    type: "side",
    link: "https://github.com/harrybaines/brewkit"
  },
  {
    title: "TorchGPT",
    date: "2023",
    status: "Completed",
    description: "Generate PyTorch code from input prompts using OpenAI's text-davinci-3 model.",
    technologies: ["Python", "OpenAI", "PyTorch"],
    type: "side",
    link: "https://github.com/harrybaines/torchgpt"
  },
  {
    title: "AI Avatars",
    date: "2023",
    status: "Completed",
    description: "Personalised AI avatars using stable diffusion, accessible through Next.js interface.",
    technologies: ["Next.js", "Python", "Stable Diffusion"],
    type: "side",
    link: "https://github.com/harrybaines/ai-avatar-generator"
  }
];

export default function ProjectsList() {
  return (
    <div className="space-y-6">
      <HomeSectionHeader title="Projects" />
      <div className="space-y-4">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 border border-zinc-800 rounded-xl group hover:border-emerald-500/20 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <h3 className="font-medium text-zinc-100 group-hover:text-emerald-500 transition-colors">
                    {project.title}
                  </h3>
                  {project.type === "side" && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-zinc-800/50 text-zinc-400">
                      Side Project
                    </span>
                  )}
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-zinc-400 bg-zinc-800/50 rounded-full px-2.5 py-0.5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="sm:text-right">
                <span className="text-xs text-zinc-500">{project.date}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}