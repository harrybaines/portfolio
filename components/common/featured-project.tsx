import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ChakraUI,
  ExpressJsLight,
  Prisma,
  React,
  ReSend,
  Supabase,
  TypeScript
} from "developer-icons";
import { ArrowRight, Code2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const featuredProject = {
  title: "archtms",
  description: "A complete management system for architecture firms. Streamlining project tracking, time management, and resource allocation for modern architectural practices.",
  image: "/images/projects/archtms/tms.png",
  slug: "/blog/archtms",
  status: "coming-soon",
  features: [
    "Timesheets",
    "Project and client management",
    "Staff management",
    "Holiday tracking",
    "Fee forecasting",
    "Automated emails"
  ],
  stack: [
    {
      name: "React",
      icon: React,
    },
    {
      name: "ChakraUI",
      icon: ChakraUI,
    },
    {
      name: "TypeScript",
      icon: TypeScript,
    },
    {
      name: "Express",
      icon: ExpressJsLight,
    },
    {
      name: "Supabase",
      icon: Supabase,
    },
    {
      name: "Prisma",
      icon: Prisma,
    },
    {
      name: "Resend",
      icon: ReSend,
    },
  ]
}

export function FeaturedProject() {
  return (
    <section>
      <Card className="group overflow-hidden border-border">
        <div className="flex flex-col">
          {/* Image */}
          <div className="relative w-full bg-gradient-to-br from-muted to-muted/50 p-3 lg:p-6">
            <div className="relative h-[300px] lg:h-[400px] rounded-lg overflow-hidden">
              {featuredProject.image ? (
                <Image
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted to-muted/50">
                  <Code2 className="h-16 w-16 text-primary/60" />
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="w-full p-8 lg:p-10">
            {/* Project Header */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-8 pb-8 border-b">
              {/* Title and Description */}
              <div className="space-y-4 max-w-2xl">
                <div className="flex items-center gap-3">
                  <h3 className="font-mono text-2xl font-semibold tracking-tight">
                    {featuredProject.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {featuredProject.description}
                </p>
              </div>

              {/* Primary CTA */}
              <div className="shrink-0">
                <Button asChild>
                  <Link href={featuredProject.slug} className="flex items-center gap-2">
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Project Details */}
            <div className="gap-8 pt-8">
              {/* Tech Stack */}
              <div className="space-y-4">
                <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Built with
                </h4>
                <div className="flex flex-wrap gap-3">
                  {featuredProject.stack.map(({ name }) => (
                    <span
                      key={`${featuredProject.title}-${name}`}
                      className="text-xs font-mono px-2 py-1 bg-primary/5 rounded-full text-muted-foreground"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </Card>
    </section>
  )
}