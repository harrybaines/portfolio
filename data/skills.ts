import {
  AWS,
  Django,
  Docker,
  Git,
  NextJs,
  NodeJs,
  OpenAI,
  PostgreSQL,
  Python,
  React,
  Redis,
  Supabase,
  TailwindCSS,
} from "developer-icons";

export type SkillCategory = "Frontend" | "Backend" | "AI" | "DevOps" | "Tools";

export type Skill = {
  name: string;
  link: string;
  icon: React.ElementType;
};

export type SkillsConfig = {
  [K in SkillCategory]: {
    skills: Skill[];
  };
};

export const skillsConfig: SkillsConfig = {
  Frontend: {
    skills: [
      {
        name: "React",
        link: "https://reactjs.org",
        icon: React,
      },
      {
        name: "Next.js",
        link: "https://nextjs.org",
        icon: NextJs,
      },
      {
        name: "Tailwind CSS",
        link: "https://tailwindcss.com",
        icon: TailwindCSS,
      },
    ],
  },
  Backend: {
    skills: [
      {
        name: "Node.js",
        link: "https://nodejs.org",
        icon: NodeJs,
      },
      {
        name: "Python",
        link: "https://python.org",
        icon: Python,
      },
      {
        name: "Django",
        link: "https://www.djangoproject.com",
        icon: Django,
      },
      {
        name: "PostgreSQL",
        link: "https://www.postgresql.org",
        icon: PostgreSQL,
      },
      {
        name: "Redis",
        link: "https://redis.io",
        icon: Redis,
      },
      {
        name: "Supabase",
        link: "https://supabase.com",
        icon: Supabase,
      },
    ],
  },
  AI: {
    skills: [
      {
        name: "OpenAI",
        link: "https://openai.com",
        icon: OpenAI,
      },
    ],
  },
  DevOps: {
    skills: [
      {
        name: "Docker",
        link: "https://www.docker.com",
        icon: Docker,
      },
      {
        name: "AWS",
        link: "https://aws.amazon.com",
        icon: AWS,
      },
    ],
  },
  Tools: {
    skills: [
      {
        name: "Git",
        link: "https://git-scm.com",
        icon: Git,
      },
    ],
  },
};
