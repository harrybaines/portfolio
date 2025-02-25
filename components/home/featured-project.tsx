import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ExpressJsDark,
  Prisma,
  React,
  ReSend,
  Supabase,
  TailwindCSS,
  TypeScript,
} from "developer-icons";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const featuredProject = {
  title: "archtms",
  description: "A complete management system for architecture firms. Streamlining project tracking, time management, and resource allocation for modern architectural practices.",
  image: "/projects/archtms/tms.png",
  slug: "archtms",
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
      name: "TailwindCSS",
      icon: TailwindCSS,
    },
    {
      name: "TypeScript",
      icon: TypeScript,
    },
    {
      name: "Express",
      icon: ExpressJsDark,
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
      <Card className="group overflow-hidden border-border/50">
        <div className="flex flex-col">
          {/* Image */}
          <div className="relative w-full bg-gradient-to-br from-muted to-muted/50 p-3 lg:p-6">
            <div className="relative h-[300px] lg:h-[400px] rounded-lg overflow-hidden">
              <Image
                src={featuredProject.image}
                alt={featuredProject.title}
                fill
                className="object-cover"
                priority
              />
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
                <Button asChild size="lg">
                  <Link href={`/work/${featuredProject.slug}`} className="flex items-center gap-2">
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
                  {featuredProject.stack.map(({ name, icon: Icon }) => (
                    <div
                      key={name}
                      className="flex items-center gap-2.5 px-3.5 py-2 bg-muted/50 rounded-full text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors group"
                    >
                      <Icon className="h-4 w-4 shrink-0 text-primary/70 group-hover:text-primary transition-colors" />
                      <span>{name}</span>
                    </div>
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