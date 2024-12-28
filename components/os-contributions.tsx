import { BsArrowRight } from "react-icons/bs";

const osContributions = [
  { project: "Ivy", link: "https://github.com/ivy-llc/ivy", contribution: "Added JAX to numpy function conversions", date: "July 25, 2023" },
  { project: "Buildspace", link: "https://github.com/buildspace/buildspace-projects", contribution: "Added enhancements to AI avatar tutorial project", date: "Jan 19, 2023" },
];

export default function OsContributions() {
  return (
    <div className="space-y-1">
      {osContributions.map((contribution, index) => (
        <div key={index}>
          <a
            href={contribution.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between group py-1.5"
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm text-sonokai-text">{contribution.project}</span>
              <span className="font-mono text-xs text-sonokai-text-muted">{contribution.contribution}</span>
            </div>
            <BsArrowRight className="text-xs text-sonokai-text-muted group-hover:text-sonokai-green transition-colors" />
          </a>
          {index < osContributions.length - 1 && (
            <div className="h-[1px] bg-sonokai-text-muted/10 mt-1" />
          )}
        </div>
      ))}
    </div>
  );
}