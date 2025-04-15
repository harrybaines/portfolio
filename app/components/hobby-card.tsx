'use client';

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface HobbyCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function HobbyCard({ icon: Icon, title, description }: HobbyCardProps) {
  return (
    <motion.div
      className="group relative p-5 rounded-lg border border-white/10 hover:border-white/20 transition-colors"
      whileHover={{ y: -4 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative space-y-2">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
            <Icon className="w-3.5 h-3.5 text-white/70" />
          </div>
          <h4 className="text-sm uppercase tracking-wide text-white/50 font-mono">{title}</h4>
        </div>
        <p className="text-white/70 leading-relaxed text-sm">
          {description}
        </p>
      </div>
    </motion.div>
  );
}