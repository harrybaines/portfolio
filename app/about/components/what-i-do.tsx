import { Card } from "@/components/ui/card";
import { PageHeading } from "@/components/ui/page-heading";
import { whatIDo } from "@/data/what-i-do";
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
      <motion.div className="grid md:grid-cols-3 gap-6">
        {whatIDo.map((prop, i) => (
          <Card
            key={i}
            className="p-6 bg-muted/50 border-none hover:bg-muted/80 transition-colors group"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  {<prop.icon className="h-5 w-5" />}
                </div>
                <h3 className="font-medium">{prop.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {prop.description}
              </p>
            </div>
          </Card>
        ))}
      </motion.div>
    </motion.div>
  )
}