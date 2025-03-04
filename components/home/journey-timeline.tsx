"use client"

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { PageHeading } from "@/components/ui/page-heading";
import { timeline } from "@/data/experience";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function JourneyTimeline() {
  return (
    <motion.div
      id="journey"
      data-section
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <PageHeading label="PROFESSIONAL JOURNEY" />
      <div className="relative">
        {/* Timeline items */}
        <div className="space-y-12">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Content */}
              <Card className="p-6">
                <div className="flex flex-col gap-4">

                  {/* Header */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white dark:bg-white/90 shadow-sm">
                      <Image
                        src={item.logo}
                        alt={item.company}
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="font-medium truncate">
                          {item.companyUrl ? (
                            <Link
                              href={item.companyUrl}
                              target="_blank"
                              className="hover:text-primary transition-colors"
                            >
                              {item.role}
                            </Link>
                          ) : (
                            item.role
                          )}
                        </h3>
                        {item.badge && (
                          <Badge variant="outline" className="shrink-0 font-mono text-xs">
                            {item.badge}
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                        {item.company && (
                          <div className="flex items-center gap-2">
                            {item.companyUrl ? (
                              <Link
                                href={item.companyUrl}
                                target="_blank"
                                className="font-semibold hover:text-primary transition-colors"
                              >
                                {item.company}
                              </Link>
                            ) : (
                              <span className="font-semibold">{item.company}</span>
                            )}
                          </div>
                        )}
                        <span>•</span>
                        <span>{item.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>

                  {/* Tech Stack */}
                  {item.tech && (
                    <div className="flex flex-wrap gap-4">
                      {item.tech.map((tech, j) => (
                        <div
                          key={j}
                          className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-muted/50 border border-border"
                        >
                          {tech.icon && (
                            <tech.icon className="h-3.5 w-3.5" />
                          )}
                          <span className="text-xs font-medium">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}