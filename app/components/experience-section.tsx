"use client";

import { experienceConfig } from "@/config";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import Image from "next/image";

type Experience = {
  role: string;
  company: string;
  period: string;
  image: string;
};

type Education = {
  degree: string;
  institution: string;
  period: string;
  image: string;
};

type CombinedExperience =
  | (Experience & { type: 'professional' })
  | (Education & { type: 'education' });

const fadeInSection = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

export default function ExperienceSection() {
  // Ensure chronological order (newest first)
  const chronologicalProfessional = [...experienceConfig.professional];
  const chronologicalEducation = [...experienceConfig.education];

  // Combine all items into one array
  const allExperiences: CombinedExperience[] = [
    ...chronologicalProfessional.map(exp => ({ type: 'professional' as const, ...exp })),
    ...chronologicalEducation.map(edu => ({ type: 'education' as const, ...edu }))
  ];

  return (
    <div className="w-full max-w-4xl mx-auto text-zinc-300 font-mono">
      <motion.div
        custom={0}
        initial="hidden"
        animate="visible"
        variants={fadeInSection}
        className="mb-10"
      >
        <div className="flex items-start">
          <div>
            <h3 className="text-sm uppercase tracking-wider mb-4 flex items-center text-zinc-500 font-medium">
              Experience
            </h3>
            <p className="text-sm text-zinc-400 max-w-3xl">
              A timeline of my journey. Feel free to check out my CV <a href="https://wwoi1vvxbb.ufs.sh/f/0PyPE3K0Z8csQjh97SZY6qKNRiTeyxmBabh2s1nMr98tvg4E" className="text-amber-500 hover:text-amber-400">here</a>.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Grid Experience List */}
      <div className="space-y-4">
        {allExperiences.map((item, index) => (
          <motion.div
            key={index}
            custom={index + 1}
            initial="hidden"
            animate="visible"
            variants={fadeInSection}
            className="bg-zinc-900/30 border border-zinc-800/50 rounded-sm p-4 hover:border-amber-600/30 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-sm overflow-hidden flex-shrink-0 bg-white flex items-center justify-center relative">
                <Image
                  src={item.image}
                  alt={item.type === 'professional' ? item.company : item.institution}
                  fill
                  className="object-cover opacity-80"
                />
              </div>
              <div>
                <h4 className="text-sm font-medium text-zinc-300">
                  {item.type === 'professional' ? item.role : item.degree}
                </h4>
                <div className="text-amber-500 text-xs mt-1">
                  {item.type === 'professional' ? item.company : item.institution}
                </div>
                <div className="text-xs text-zinc-500 flex items-center gap-1.5 mt-1">
                  <Calendar size={12} strokeWidth={1.5} className="text-zinc-500" />
                  <span>{item.period}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}