import {
  Django,
  Docker,
  ExpressJsDark,
  FlaskDark,
  MariaDB,
  MySQL,
  PostgreSQL,
  Prisma,
  Python,
  React,
  Redis,
  Supabase,
  TypeScript,
} from "developer-icons";
import type { FC, SVGProps } from "react";

type IconType = FC<SVGProps<SVGSVGElement>>;

type TechItem = {
  name: string;
  icon?: IconType;
};

export type TimelineItem = {
  type: "work" | "education";
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  description: string;
  tech?: TechItem[];
  focus?: string;
  logo: string;
  badge?: string;
};

export const timeline: TimelineItem[] = [
  {
    type: "work",
    role: "Software Engineer",
    company: "Cassidy and Ashton",
    companyUrl: "https://cassidyashton.co.uk",
    period: "2018 - Present",
    description:
      "Implemented a full-stack timesheet, project and leave management system using modern technologies. Supports clients, staff and project dashboards, and fee forecasting. Used by ~60 employees on a daily basis.",
    tech: [
      { name: "React", icon: React },
      { name: "TypeScript", icon: TypeScript },
      { name: "RTK Query", icon: React },
      { name: "Express", icon: ExpressJsDark },
      { name: "Supabase", icon: Supabase },
      { name: "Prisma", icon: Prisma },
      { name: "PostgreSQL", icon: PostgreSQL },
      { name: "Redis", icon: Redis },
      { name: "Docker", icon: Docker },
    ],
    logo: "/images/work/ca.png",
    badge: "Full Time",
  },
  {
    type: "work",
    role: "Software Engineer / Data Scientist",
    company: "Yordas Digital",
    companyUrl: "https://yordasgroup.com",
    period: "2020 - 2022",
    description:
      "Implemented a full-stack SDS authoring app in Django, supervised two student internship projects, developed developer template repos and automation scripts, and deployed ML-based time series forecasting models.",
    tech: [
      { name: "Django", icon: Django },
      { name: "Flask", icon: FlaskDark },
      { name: "Celery" },
      { name: "Docker", icon: Docker },
      { name: "Redis", icon: Redis },
      { name: "Python", icon: Python },
    ],
    logo: "/images/work/yordas.png",
    badge: "Full Time",
  },
  {
    type: "work",
    role: "Data Scientist Internship",
    company: "Yordas Digital",
    companyUrl: "https://yordasgroup.com",
    period: "2020",
    description:
      "Implemented and deployed a smart search engine using NLP techniques to search across a database of 20K+ complex chemical phrases.",
    tech: [
      { name: "Python", icon: Python },
      { name: "Flask", icon: FlaskDark },
      { name: "MySQL", icon: MySQL },
      { name: "MariaDB", icon: MariaDB },
      { name: "Numpy" },
    ],
    logo: "/images/work/yordas.png",
    badge: "Internship",
  },
  {
    type: "education",
    role: "MSc Computer Science (Distinction)",
    company: "Lancaster University",
    period: "2019 - 2020",
    description:
      "Thesis: Enhancing Phrase Retrieval for Safety Data Sheet Authoring",
    logo: "/images/work/lancaster.png",
    badge: "Student",
  },
  {
    type: "education",
    role: "BSc Computer Science (First)",
    company: "Lancaster University",
    period: "2016 - 2019",
    description:
      "Thesis: Implemented a novel, declarative programming language for smart contracts on Hyperledger Blockchains",
    logo: "/images/work/lancaster.png",
    badge: "Student",
  },
];
