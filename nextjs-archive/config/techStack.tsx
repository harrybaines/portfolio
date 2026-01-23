import {
  Django, Docker, ExpressJsDark,
  FastAPI, Firebase, FlaskDark,
  Git, Go, Heroku,
  HuggingFace, JavaScript, MySQL, NextJs, PostgreSQL, Python, React, Redis,
  Supabase,
  TailwindCSS,
  TypeScript, VercelDark
} from "developer-icons";
import { DeveloperIconProps } from "developer-icons/dist/icon";
import { SiCelery, SiJupyter, SiSelenium, SiSqlite, SiStreamlit } from "react-icons/si";

type TechItem = {
  name: string;
  category: string;
  icon: (props: DeveloperIconProps) => React.ReactNode;
};

// Tech stack configuration
const techStackConfig: {
  categories: string[];
  technologies: TechItem[];
} = {
  // Available categories
  categories: ["languages", "frameworks", "databases", "tools"],

  // All technologies
  technologies: [
    // Programming Languages
    {
      name: "Python",
      category: "languages",
      icon: Python,
    },
    {
      name: "JavaScript",
      category: "languages",
      icon: JavaScript,
    },
    {
      name: "TypeScript",
      category: "languages",
      icon: TypeScript,
    },
    {
      name: "SQL",
      category: "languages",
      icon: PostgreSQL,
    },
    {
      name: "Golang",
      category: "languages",
      icon: Go,
    },

    // Libraries & Frameworks
    {
      name: "React",
      category: "frameworks",
      icon: React,
    },
    {
      name: "Next.js",
      category: "frameworks",
      icon: NextJs,
    },
    {
      name: "Express.js",
      category: "frameworks",
      icon: ExpressJsDark,
    },
    {
      name: "Django",
      category: "frameworks",
      icon: Django,
    },
    {
      name: "Flask",
      category: "frameworks",
      icon: FlaskDark,
    },
    {
      name: "FastAPI",
      category: "frameworks",
      icon: FastAPI,
    },
    {
      name: "Celery",
      category: "frameworks",
      icon: SiCelery,
    },
    {
      name: "Selenium",
      category: "frameworks",
      icon: SiSelenium,
    },
    {
      name: "Tailwind",
      category: "frameworks",
      icon: TailwindCSS,
    },

    // Databases
    {
      name: "Postgres",
      category: "databases",
      icon: PostgreSQL,
    },
    {
      name: "MySQL",
      category: "databases",
      icon: MySQL,
    },
    {
      name: "Redis",
      category: "databases",
      icon: Redis,
    },
    {
      name: "sqlite",
      category: "databases",
      icon: SiSqlite,
    },
    {
      name: "Supabase",
      category: "databases",
      icon: Supabase,
    },
    {
      name: "Firebase",
      category: "databases",
      icon: Firebase,
    },

    // Tools & Platforms
    {
      name: "Git",
      category: "tools",
      icon: Git,
    },
    {
      name: "GitHub",
      category: "tools",
      icon: Git,
    },
    {
      name: "Heroku",
      category: "tools",
      icon: Heroku,
    },
    {
      name: "Vercel",
      category: "tools",
      icon: VercelDark,
    },
    {
      name: "Docker",
      category: "tools",
      icon: Docker,
    },
    {
      name: "Jupyter Notebooks",
      category: "tools",
      icon: SiJupyter,
    },
    {
      name: "Streamlit",
      category: "tools",
      icon: SiStreamlit,
    },
    {
      name: "HuggingFace",
      category: "tools",
      icon: HuggingFace,
    },
  ],
};

// Skills grouped by category
const skillsConfig = {
  // Technical skills
  technical: [
    { name: "Front-end Development", proficiency: 9 },
    { name: "Back-end Development", proficiency: 8 },
    { name: "Database Design", proficiency: 7 },
    { name: "DevOps & CI/CD", proficiency: 7 },
    { name: "System Architecture", proficiency: 8 },
    { name: "API Design", proficiency: 9 },
    { name: "Testing & QA", proficiency: 7 },
    { name: "Performance Optimization", proficiency: 8 },
  ],

  // Soft skills
  soft: [
    { name: "Communication" },
    { name: "Project Management" },
    { name: "Team Leadership" },
    { name: "Problem Solving" },
    { name: "Time Management" },
    { name: "Adaptability" },
  ],

  // Languages
  languages: [
    { name: "English", level: "Native" },
    { name: "Spanish", level: "Conversational" },
    { name: "French", level: "Basic" },
  ],
};

export { skillsConfig, techStackConfig };
export type { TechItem };

