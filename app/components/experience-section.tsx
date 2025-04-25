"use client";

import SectionWrapper from "@/app/components/section-wrapper";
import { experienceConfig } from "@/config";
import { motion } from "framer-motion";
import { BriefcaseIcon, Calendar } from "lucide-react";
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

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
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
    <SectionWrapper bgColor="bg-white/50">
      <div className="relative">
        <motion.div
          className="mb-12 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-start gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-amber-600 mb-2">
                <BriefcaseIcon size={18} strokeWidth={1.5} />
                <span className="font-mono text-sm">experience.json</span>
              </div>
              <h2 className="text-3xl font-semibold text-stone-900 mb-3">
                Professional Journey
              </h2>
              <p className="text-lg text-stone-700 mb-8 max-w-3xl">
                A timeline of my professional experience and education. Feel free to check out my full CV <a href="https://wwoi1vvxbb.ufs.sh/f/0PyPE3K0Z8csQjh97SZY6qKNRiTeyxmBabh2s1nMr98tvg4E" className="text-amber-700 hover:text-amber-900 underline">here</a>.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Grid Experience List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          {allExperiences.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <div className="p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-white flex items-center justify-center relative">
                  <Image
                    src={item.image}
                    alt={item.type === 'professional' ? item.company : item.institution}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-stone-900">
                    {item.type === 'professional' ? item.role : item.degree}
                  </h4>
                  <div className="text-amber-700 font-medium">
                    {item.type === 'professional' ? item.company : item.institution}
                  </div>
                  <div className="text-sm text-stone-500 flex items-center gap-1.5 mt-1">
                    <Calendar size={14} strokeWidth={1.5} className="text-amber-600" />
                    <span>{item.period}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}