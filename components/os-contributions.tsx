import { BsArrowRight } from "react-icons/bs";
import SectionHeader from "./section-header";

const osContributions = [
  { project: "Ivy", link: "https://github.com/ivy-llc/ivy", description: "Added JAX to numpy function conversions", date: "July 25, 2023" },
  { project: "Buildspace", link: "https://github.com/buildspace/buildspace-projects", description: "Added enhancements to AI avatar tutorial project", date: "Jan 19, 2023" },
];

interface ProjectItemProps {
  name: string;
  description: string;
  date: string;
  link: string;
}

function ProjectItem({ name, description, date, link }: ProjectItemProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block group/item py-2 border-b-0"
    >
      <div className="space-y-1 transition-opacity duration-200 md:group-hover/list:opacity-50 md:group-hover/item:!opacity-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="font-mono text-md text-primary">{name}</span>
            <span className="font-mono text-sm text-muted opacity-0 -translate-x-2 md:group-hover/item:opacity-100 md:group-hover/item:translate-x-0 transition-all duration-200">
              {date}
            </span>
          </div>
          <BsArrowRight className="text-xs text-muted md:group-hover/item:text-green transition-colors" />
        </div>
        <p className="font-sans text-sm text-muted">{description}</p>
      </div>
    </a>
  );
}

export default function OsContributions() {
  return (
    <div className="space-y-2">
      <SectionHeader>Open Source</SectionHeader>
      <div className="group/list">
        {osContributions.map((contribution) => (
          <ProjectItem
            key={contribution.project}
            name={contribution.project}
            description={contribution.description}
            date={contribution.date}
            link={contribution.link}
          />
        ))}
      </div>
    </div>
  );
}