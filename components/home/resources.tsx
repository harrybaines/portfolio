import { PageHeading } from "@/components/ui/page-heading"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const content = {
  resources: [
    {
      title: "Developer Environment",
      description: "My complete Neovim + tmux setup",
      link: "https://github.com/harrybaines/dotfiles",
      date: "March 2024"
    },
    {
      title: "Tech Stack",
      description: "The tools and technologies I use daily",
      link: "/stack",
      date: "March 2024"
    },
    {
      title: "Reading List",
      description: "Books that have influenced my engineering journey",
      link: "/reading",
      date: "March 2024"
    },
    {
      title: "CLI Tools",
      description: "A collection of productivity-focused CLI tools",
      link: "https://github.com/harrybaines/cli-tools",
      date: "March 2024"
    }
  ],
}

export function Resources() {
  return (
    <div className="space-y-6">
      <PageHeading label="RESOURCES" />
      <div className="space-y-1.5">
        {content.resources.map((resource, i) => (
          <Link
            key={i}
            href={resource.link}
            className="group flex items-center justify-between py-3 hover:bg-muted/50 px-4 -mx-4 rounded-lg transition-colors"
            target={resource.link.startsWith('http') ? '_blank' : undefined}
          >
            <div className="flex items-center gap-6">
              <span className="font-mono text-sm text-muted-foreground">
                {resource.date}
              </span>
              <span className="font-mono text-sm group-hover:text-primary transition-colors">
                {resource.title}
              </span>
            </div>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </Link>
        ))}
      </div>
    </div>
  )
}