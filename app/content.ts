import { getYearsOfExperience } from "@/lib/utils";
import { BookOpen, Github, Linkedin, Mail, Twitter, type LucideIcon } from "lucide-react";

/**
 * Single source of truth for everything the landing page variations render.
 * Edit copy, projects and links here — every variation picks them up.
 */

export type Project = {
  title: string;
  year: string;
  category: string;
  description: string;
  image: string;
  href: string;
  stack: string[];
};

export type OutboundLink = {
  label: string;
  handle: string;
  href: string;
  icon: LucideIcon;
};

export const profile = {
  name: "Harry Baines",
  firstName: "Harry",
  greeting: "Hi, I'm Harry.",
  role: "Applied AI Engineer",
  location: "United Kingdom",
  photo: "/images/profile.jpg",
  years: getYearsOfExperience(),
  tagline: "Software engineer building useful things with language models.",
  bio: [
    "I'm a software engineer who spends most of my time on the applied side of AI — turning language models into dependable products that people actually use.",
    "Over the last few years I've shipped full-stack systems, retrieval and NLP pipelines, and the internal tooling that ties them together. I care about evals, clean interfaces and software that stays simple as it grows.",
  ],
  focus: ["LLM applications", "Retrieval & evals", "Full-stack TypeScript", "Python"],
  status: "Open to applied AI roles",
};

export const projects: Project[] = [
  {
    title: "archtms",
    year: "2024",
    category: "Product",
    description:
      "Practice management for architects — timesheets, cashflow, holidays and 13,000+ projects in one place. Replaced paperwork for a 70-person studio.",
    image: "/images/projects/archtms/tms-landing.png",
    href: "/blog/archtms",
    stack: ["TypeScript", "React", "GraphQL", "Postgres"],
  },
  {
    title: "ai.resources",
    year: "2025",
    category: "Open source",
    description:
      "A curated catalogue of starter kits, UI kits, prompts and rules for teams building AI products.",
    image: "/images/projects/airesources.png",
    href: "https://github.com/harrybaines",
    stack: ["Next.js", "Tailwind", "MDX"],
  },
  {
    title: "AI Avatars",
    year: "2023",
    category: "Machine learning",
    description:
      "Personalised avatar generation by fine-tuning Stable Diffusion with DreamBooth on a handful of photos.",
    image: "/images/projects/avatars.png",
    href: "https://github.com/harrybaines/ai-avatar-generator",
    stack: ["Python", "Diffusers", "Hugging Face"],
  },
  {
    title: "This site",
    year: "2025",
    category: "Design",
    description:
      "Ten design studies for one portfolio, sharing a single content file. Next.js, Tailwind and a little motion.",
    image: "/images/projects/portfolio.png",
    href: "https://github.com/harrybaines/portfolio",
    stack: ["Next.js", "Tailwind", "Framer Motion"],
  },
];

export const links: OutboundLink[] = [
  { label: "GitHub", handle: "harrybaines", href: "https://github.com/harrybaines", icon: Github },
  { label: "LinkedIn", handle: "harryb0905", href: "https://linkedin.com/in/harryb0905", icon: Linkedin },
  { label: "X", handle: "@harryiscoding", href: "https://twitter.com/harryiscoding", icon: Twitter },
  { label: "Writing", handle: "/blog", href: "/blog", icon: BookOpen },
  { label: "Email", handle: "harryb0905@googlemail.com", href: "mailto:harryb0905@googlemail.com", icon: Mail },
];

export const isExternal = (href: string) => /^(https?:|mailto:)/.test(href);
