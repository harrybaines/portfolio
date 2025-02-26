"use client"

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Link from "next/link";

export function Collaborate() {
  return (
    <motion.div
      className="space-y-6"
      initial={{
        opacity: 0,
        y: 20
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        duration: 0.5,
        delay: 0.9
      }}
    >
      <Card className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent" />
        <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight">
              Got a project in mind?
            </h2>
            <p className="text-muted-foreground max-w-[45ch]">
              From web applications to AI integrations - I&apos;ll help bring your ideas to life.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="mailto:harryb0905@googlemail.com" className={cn("inline-flex items-center justify-center gap-2", "rounded-lg px-5 py-3 font-medium", "bg-primary text-primary-foreground", "hover:bg-primary/90 transition-colors")}>
              <Sparkles className="h-4 w-4" />
              Let&apos;s Build
            </Link>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}