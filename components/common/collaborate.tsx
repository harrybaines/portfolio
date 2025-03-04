"use client"

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Collaborate() {
  return (
    < motion.div
      className="rounded-xl border border-border p-8 text-center space-y-5"
      initial={{ opacity: 0, y: 20 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <h2 className="text-2xl font-bold">Let&apos;s Work Together</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        I&apos;m always open to discussing new projects!
      </p>
      <Button asChild>
        <Link href="mailto:harryb0905@googlemail.com" className="flex items-center gap-2">
          Get in touch
          <ArrowRight size={16} />
        </Link>
      </Button>
    </motion.div >
  );
}