"use client";

import SectionWrapper from "@/app/components/section-wrapper";
import { experienceConfig } from "@/config";
import { motion, useInView } from "framer-motion";
import { ExternalLink, FolderOpen, GitPullRequest, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

// Define types for our components
type OpenSourceContribution = {
  project: string;
  description: string;
  link: string;
  date?: string;
};

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  tags?: string[];
};

// Reusable components
const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="px-2 py-1 rounded-full text-xs bg-amber-100 text-amber-800">
    {children}
  </span>
);

const Badge = ({ children, variant = "default" }: { children: React.ReactNode; variant?: "default" | "featured" }) => (
  <span className={`font-mono text-xs px-2 py-1 rounded-full bg-amber-100 text-amber-${variant === "featured" ? "600" : "700"}`}>
    {children}
  </span>
);

const CardLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="block h-full cursor-pointer">
    {children}
  </Link>
);

const ProjectImageWrapper = ({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) => (
  <div className="aspect-[9/5] overflow-hidden relative rounded-lg shadow w-full mb-5">
    <Image
      src={src}
      alt={alt}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      priority={priority}
      fill
      className="object-cover transition-transform duration-300 hover:scale-105"
    />
  </div>
);

const FeaturedImageWrapper = ({ src, alt }: { src: string; alt: string }) => (
  <div className="aspect-[6/5] overflow-hidden relative rounded-lg shadow w-full">
    <Image
      src={src}
      alt={alt}
      sizes="(max-width: 768px) 100vw, 50vw"
      priority
      fill
      className="object-cover transition-transform duration-300 hover:scale-105"
    />
  </div>
);

const ViewProjectLink = () => (
  <span className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-900 font-medium transition-colors text-sm">
    View Project <ExternalLink size={14} />
  </span>
);

const AnimatedCard = ({
  children,
  index = 0,
  inView,
  className = ""
}: {
  children: React.ReactNode;
  index?: number;
  inView: boolean;
  className?: string;
}) => (
  <motion.div
    className={`group ${className}`}
    initial={{ opacity: 0, y: 20 }}
    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    {children}
  </motion.div>
);

// Common card style
const cardStyle = "bg-white shadow-sm hover:shadow-md transition-all";

export default function ProjectsSection() {
  const projectsRef = useRef(null);
  const projectsInView = useInView(projectsRef, { once: true, amount: 0.2 });

  const projects = experienceConfig.projects;
  const openSourceContributions = experienceConfig.openSource as OpenSourceContribution[];

  // Featured project (first project)
  const featuredProject = projects[0];
  // Remaining projects
  const otherProjects = projects.slice(1);

  // Function to create a project card with or without link
  const renderProjectCard = (project: Project, index: number) => {
    const isComingSoon = !project.link || project.link === "";

    const cardContent = (
      <div className={`h-full rounded-lg ${cardStyle} p-6`}>
        <ProjectImageWrapper
          src={project.image}
          alt={project.title}
          priority={index < 2}
        />
        <h3 className="text-xl font-medium text-stone-900 mb-3 group-hover:text-amber-700 transition-colors">
          {project.title}
        </h3>
        <p className="text-stone-700 mb-4 line-clamp-3">
          {project.description}
        </p>
        {isComingSoon ? (
          <Badge>Coming Soon</Badge>
        ) : (
          <ViewProjectLink />
        )}
      </div>
    );

    return (
      <AnimatedCard key={index} inView={projectsInView} index={index}>
        {isComingSoon ? (
          <div className="block h-full cursor-default">
            {cardContent}
          </div>
        ) : (
          <CardLink href={project.link}>
            {cardContent}
          </CardLink>
        )}
      </AnimatedCard>
    );
  };

  const renderFeaturedProject = (project: Project) => {
    const isComingSoon = !project.link || project.link === "";

    const featuredContent = (
      <div className={`rounded-xl ${cardStyle} overflow-hidden`}>
        <div className="grid md:grid-cols-2 gap-0">
          <div className="p-8 flex flex-col h-full">
            <div className="mb-3">
              <Badge variant="featured">Featured</Badge>
            </div>
            <h3 className="text-2xl font-medium text-stone-900 mb-4 group-hover:text-amber-700 transition-colors">
              {project.title}
            </h3>
            <p className="text-stone-700 mb-5 text-lg leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-auto">
              {project.tags?.map((tag, tagIndex) => (
                <Tag key={tagIndex}>{tag}</Tag>
              ))}
            </div>
            {isComingSoon ? (
              <span className="inline-block px-3 py-1.5 rounded-full bg-amber-100 text-amber-700 text-sm font-mono shadow-sm mt-8">
                Coming Soon
              </span>
            ) : (
              <span className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-900 font-medium transition-colors mt-8">
                View Project <ExternalLink size={16} />
              </span>
            )}
          </div>
          <div className="p-8 h-full flex items-center justify-center order-first md:order-last">
            <FeaturedImageWrapper
              src={project.image}
              alt={project.title}
            />
          </div>
        </div>
      </div>
    );

    return (
      <AnimatedCard inView={projectsInView}>
        {isComingSoon ? (
          <div className="block group">
            {featuredContent}
          </div>
        ) : (
          <CardLink href={project.link}>
            {featuredContent}
          </CardLink>
        )}
      </AnimatedCard>
    );
  };

  const renderContribution = (contribution: OpenSourceContribution, index: number) => {
    const isComingSoon = !contribution.link || contribution.link === "";

    const contributionContent = (
      <div className={`px-6 py-4 rounded-lg ${cardStyle} relative`}>
        {isComingSoon && (
          <div className="absolute top-3 right-3">
            <Badge>Coming Soon</Badge>
          </div>
        )}
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-md font-medium text-stone-900 group-hover:text-amber-700 transition-colors">
              {contribution.project} <span className="text-stone-400">-</span> <span className="text-stone-600 font-normal">{contribution.description}</span>
            </h3>
          </div>
          {contribution.date && (
            <span className="text-xs text-stone-500 font-mono">
              {contribution.date}
            </span>
          )}
        </div>
      </div>
    );

    return (
      <AnimatedCard
        key={index}
        inView={projectsInView}
        index={index}
        className="md:col-span-12"
      >
        {isComingSoon ? (
          <div className="block w-full group">
            {contributionContent}
          </div>
        ) : (
          <CardLink href={contribution.link}>
            {contributionContent}
          </CardLink>
        )}
      </AnimatedCard>
    );
  };

  return (
    <SectionWrapper bgColor="bg-white/10">
      <div ref={projectsRef} className="max-w-6xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 text-amber-600 mb-2">
            <FolderOpen size={18} strokeWidth={1.5} />
            <span className="font-mono text-sm">work</span>
          </div>
          <h2 className="text-3xl font-semibold text-stone-900 mb-5">
            Projects
          </h2>
          <p className="text-lg text-stone-700">
            I&apos;ve built all sorts of stuff. Here&apos;s some work I&apos;m most proud of, feel free to check out all my projects on my <a href="https://github.com" className="text-amber-700 hover:text-amber-900 font-medium transition-colors inline-flex items-center gap-1">GitHub <Github size={16} strokeWidth={1.5} /></a>.
          </p>
        </motion.div>

        {/* Featured Project */}
        <div className="mb-5">
          {renderFeaturedProject(featuredProject)}
        </div>

        {/* Remaining Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {otherProjects.map(renderProjectCard)}
        </div>

        {/* Open Source Contributions Section */}
        <motion.div
          className="mt-20 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 text-amber-600 mb-2">
            <GitPullRequest size={16} strokeWidth={1.5} />
            <span className="font-mono text-sm">open source</span>
          </div>
          <h2 className="text-2xl font-semibold text-stone-900 mb-8">
            Open Source Contributions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            {openSourceContributions.map(renderContribution)}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}