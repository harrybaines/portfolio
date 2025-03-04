import { Card } from "@/components/ui/card";
import { PageHeading } from "@/components/ui/page-heading";
import { whatIDo } from "@/data/what-i-do";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function WhatIDo() {
  return (
    <motion.div
      id="what-i-do"
      data-section
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <PageHeading label="WHAT I DO" />

      <div className="text-muted-foreground leading-relaxed mb-4">
        <p>
          I focus on these key areas, combining technical expertise with my personal interests.
        </p>
      </div>

      <motion.div
        className="grid md:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3, staggerChildren: 0.1 }}
      >
        {whatIDo.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 + (i * 0.1) }}
          >
            <Card
              className={cn(
                "h-full overflow-hidden border-border hover:border-primary/50 transition-all",
                "hover:shadow-sm"
              )}
            >
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-md bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-medium tracking-tight">{item.title}</h3>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}