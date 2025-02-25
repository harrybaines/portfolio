import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const osContributions = [
  {
    title: "Ivy",
    description: "Added JAX to numpy function conversions",
    date: "Jul 25, 2023",
    link: "https://github.com/unifyai/ivy",
    tags: ["Python", "JAX", "NumPy", "ML"]
  },
  {
    title: "Buildspace",
    description: "Added enhancements to AI avatar tutorial project",
    date: "Jan 19, 2023",
    link: "https://github.com/buildspace/buildspace-projects",
    tags: ["Next.js", "AI", "Tutorial"]
  }
]

export function OSContributions() {
  return (
    <div className="space-y-2 py-2">
      {osContributions.map((contribution) => (
        <Link
          key={contribution.title}
          href={contribution.link}
          className="group flex items-center justify-between py-3 hover:bg-muted/50 px-4 -mx-4 rounded-lg transition-colors"
          target="_blank"
        >
          <div className="flex items-center gap-6">
            <span className="font-mono text-sm text-muted-foreground whitespace-nowrap">
              {contribution.date}
            </span>
            <span className="font-mono text-sm group-hover:text-primary transition-colors">
              {contribution.title}
            </span>
            <span className="text-sm text-muted-foreground">
              {contribution.description}
            </span>
          </div>
          <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
        </Link>
      ))}
    </div>
  )
}