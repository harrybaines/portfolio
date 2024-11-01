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
      <h2 className="text-lg font-mono font-bold tracking-tight">
        <span className="text-emerald-500">~/</span>
        Projects
      </h2>
      <div className="grid gap-4">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 border border-zinc-800 hover:border-emerald-500/50 transition-all hover:bg-[#232323]"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <h3 className="font-medium group-hover:text-emerald-500 transition-colors">
                  {project.title}
                </h3>
                {project.type === "side" && (
                  <span className="text-xs px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">
                    Side Project
                  </span>
                )}
              </div>
              <span className="text-xs text-zinc-500 font-mono">{project.date}</span>
            </div>
            <p className="text-zinc-400 text-sm mb-3">{project.description}</p>
            <div className="flex gap-2 flex-wrap">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 bg-[#252525] rounded text-xs text-emerald-500/70"
                >
                  {tech}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}