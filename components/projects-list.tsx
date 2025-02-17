import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import SectionHeader from "./section-header";

const projects: Project[] = [
  {
    name: "archtms",
    description: "architect management system",
    link: "/projects/archtms",
    date: "2023—Current",
    isExternal: false
  },
  {
    name: "brewkit",
    description: "startup boilerplate",
    link: "/projects/brewkit",
    date: "2025",
    isExternal: false
  },
  {
    name: 'ai avatars',
    description: "Personalised AI avatars using stable diffusion",
    link: "https://github.com/harrybaines/ai-avatar-generator",
    date: "2023",
    isExternal: true
  },
  {
    name: "torchgpt",
    description: "pytorch code generator",
    link: "https://github.com/harrybaines/torchgpt",
    date: "2022",
    isExternal: true
  },
  {
    name: "wallpapers",
    description: "weekly AI-generated phone wallpapers",
    link: "/projects/wallpapers",
    date: "2025",
    isExternal: false
  },
  // {
  //   name: 'YouTube transcriber using OpenAI Whisper',
  //   description:
  //     "Transcribe YouTube videos to text",
  //   link: "https://github.com/harrybaines/gradio-whisper",
  //   date: "Jan, 2023",
  // },
  // {
  //   name: 'Tic Tac Toe solver using AI',
  //   description:
  //     "Solving Tic-Tac-Toe using Monte Carlo Tree Search.",
  //   link: "https://github.com/harrybaines/tic-tac-toe-ai",
  //   date: "Jun, 2022",
  // },
  // {
  //   name: 'Smart contract management application using Golang',
  //   description:
  //     "Management system for declarative smart contracts on blockchains",
  //   link: "https://github.com/harrybaines/CommitmentManager---FYP",
  //   date: "Mar, 2019",
  // },
];

interface Project {
  name: string;
  description: string;
  date: string;
  link: string;
  isExternal: boolean;
}

export default function ProjectsList() {
  return (
    <div className="space-y-2">
      <SectionHeader>Projects</SectionHeader>
      <div className="group/list">
        {projects.map((project) => {
          const ProjectLink = project.isExternal ? 'a' : Link;
          const linkProps = project.isExternal ? {
            target: "_blank",
            rel: "noopener noreferrer",
          } : {};

          return (
            <ProjectLink
              key={project.name}
              href={project.link}
              {...linkProps}
              className="block group/item py-2"
            >
              <div className="space-y-1 transition-opacity duration-200 group-hover/list:opacity-50 group-hover/item:!opacity-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-md text-primary">{project.name}</span>
                    <span className="font-mono text-sm text-muted opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200">
                      {project.date}
                    </span>
                  </div>
                  <BsArrowRight className="text-xs text-muted group-hover/item:text-green transition-colors" />
                </div>
                <p className="font-sans text-sm text-muted">{project.description}</p>
              </div>
            </ProjectLink>
          );
        })}
      </div>
    </div>
  );
}