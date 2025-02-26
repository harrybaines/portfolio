import { Card } from "@/components/ui/card";
import { PageHeading } from "@/components/ui/page-heading";
import { athleteStats, StatItem } from "@/data/athlete-stats";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const StatContent = ({ stat }: { stat: StatItem }) => (
  <div className="flex items-center justify-between group">
    <div className="flex items-center gap-3">
      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-background shadow-sm ring-1 ring-border">
        {<stat.icon className="h-4 w-4" />}
      </div>
      <div className="space-y-1.5">
        <p className="text-muted-foreground">
          {stat.label}
        </p>
        <div className="flex items-center gap-3">
          <p className="font-mono font-medium">
            {stat.value}
          </p>
          {stat.target && (
            <div className="px-2 py-0.5 rounded-full bg-muted/50 border border-border">
              <p className="font-mono text-sm text-muted-foreground">
                Goal: {stat.target}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
    {stat.link && (
      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10">
          <ArrowUpRight className="h-4 w-4 text-primary" />
        </div>
      </div>
    )}
  </div>
)

export function HybridTraining() {
  return (
    <motion.div
      id="athlete"
      data-section
      className="space-y-6"
    >
      <PageHeading label="HYBRID TRAINING" />
      <div className="grid gap-6 md:grid-cols-2">
        {athleteStats.map((category, i) => (
          <Card key={i} className="overflow-hidden">
            <div className="p-6 space-y-6">
              <div className="space-y-2">
                <h3 className="font-semibold tracking-tight text-lg">
                  {category.category}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {category.description}
                </p>
              </div>
              <div className="grid gap-4">
                {category.stats.map((stat, j) => (
                  <div key={j} className="relative">
                    {stat.link ? (
                      <Link
                        href={stat.link}
                        target="_blank"
                        className={cn(
                          "block p-4 rounded-lg transition-all",
                          "hover:bg-muted/50",
                          "border border-border hover:border-primary/50"
                        )}
                      >
                        <StatContent stat={stat} />
                      </Link>
                    ) : (
                      <div
                        className={cn(
                          "block p-4 rounded-lg transition-all",
                          "hover:bg-muted/50",
                          "border border-border hover:border-primary/50"
                        )}
                      >
                        <StatContent {...{ stat }} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </motion.div>
  )
}