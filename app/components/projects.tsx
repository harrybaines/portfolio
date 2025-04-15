import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "../config/site";

export function Projects() {
  return (
    <div>
      {siteConfig.keyProjects.map((project: { title: string; description: string; url: string }, index: number) => (
        <Link
          key={index}
          href={project.url}
          rel="noopener noreferrer"
          className="block hover:opacity-75 transition-opacity duration-300"
        >
          <div className="flex flex-col space-y-1 mb-4">
            <div className="w-full flex space-x-0 justify-between items-end py-1">
              <div className="flex-1">
                <p className="font-mono text-md tracking-tight text-white">
                  {project.title}
                </p>
                <p className="text-neutral-400 mt-0.5">
                  {project.description}
                </p>
              </div>
              <div className="flex items-center justify-center w-6 h-6 text-white/30 group-hover:text-white/60 transition-colors">
                <ArrowUpRight size={14} />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}