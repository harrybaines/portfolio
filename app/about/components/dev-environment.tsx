import { NumberTicker } from "@/components/magicui/number-ticker";
import { Card } from "@/components/ui/card";
import { PageHeading } from "@/components/ui/page-heading";
import { devSetup } from "@/data/dev-setup";
import { useGithubRepos } from "@/hooks/use-github-repos";
import { calculateYearsExperience } from "@/lib/experience";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Brain, Code2, GitBranch, Keyboard } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function DevEnvironment() {
  const { repos, loading } = useGithubRepos();

  const developerStats = [
    {
      value: calculateYearsExperience().toString(),
      label: "Years Experience",
      icon: Code2
    },
    {
      value: loading ? "0" : repos,
      label: "Github Repositories",
      icon: Brain
    },
    {
      value: "110",
      label: "WPM (Typing Speed)",
      icon: Keyboard
    },
  ]

  return (
    <motion.div
      id="setup"
      data-section
      className="space-y-12"
    >
      <PageHeading label="DEVELOPMENT" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {developerStats.map((stat, i) => (
          <Card key={i} className="p-5 hover:bg-muted/50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                {<stat.icon className="h-5 w-5" />}
              </div>
              <div className="min-w-0 flex-1 space-y-0.5">
                <NumberTicker
                  value={stat.value}
                  className="whitespace-pre-wrap text-2xl font-mono font-medium tracking-tighter text-black dark:text-white"
                />
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="gap-8">
        {devSetup.map((setup, i) => (
          <Card key={i} className="overflow-hidden">
            {/* Hero Image Section */}
            <div className="relative h-[400px] w-full overflow-hidden bg-muted">
              <Image
                src={setup.image}
                alt={setup.category}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Content Section */}
            <div className="p-6 space-y-6">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold tracking-tight">
                  {setup.category}
                </h3>
                <p className="text-muted-foreground mt-1">
                  {setup.description}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href="https://github.com/harrybaines/dotfiles"
                  target="_blank"
                  className={cn(
                    "inline-flex items-center justify-center gap-2",
                    "bg-primary/10 hover:bg-primary/20",
                    "text-primary",
                    "px-3 py-1.5 rounded-md",
                    "transition-colors duration-200",
                    "border border-primary/20",
                    "text-sm font-medium"
                  )}
                >
                  <GitBranch className="h-3.5 w-3.5" />
                  View Dotfiles
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </motion.div>
  )
}