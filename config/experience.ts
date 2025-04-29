// Professional journey configuration
const experienceConfig = {
  // Professional experience
  professional: [
    {
      role: "Software Engineer",
      company: "Cassidy and Ashton Architects",
      period: "June 2018 - Present",
      image: "/images/experience/ca.png",
      description:
        "Developed a PERN stack architect management system, eliminated manual paperwork and saved 20+ hours weekly in data entry for 70+ employees. Built interactive dashboards for project managers to monitor employee performance across 13,000+ projects. Led a cost-effective migration from Heroku to Docker containers, reducing deployment costs by over 90% while streamlining the deployment workflow.",
    },
    {
      role: "Software Engineer / Data Scientist",
      company: "Yordas Digital",
      period: "October 2020 - June 2022",
      image: "/images/experience/yordas.png",
      description:
        "Led the development of a full-stack Django application to cut SDS authoring time by 50%. Developed standardized Python and Flask template repositories incorporating best practices and static analysis tools, which enhanced developer productivity. Created automated data collection systems using Selenium and Celery that reduced manual regulatory data checks by 20+ hours weekly. Implemented ML-based time series forecasting models that predicted regulatory data updates. Supervised two student internship projects, conducted daily meetings, and performed weekly code reviews.",
    },
    {
      role: "Software Engineer / Data Scientist Internship",
      company: "Yordas Digital",
      period: "June 2020 - September 2020",
      image: "/images/experience/yordas.png",
      description:
        "I implemented smart search functionality using NLP techniques in Python across a database containing over 20K+ complex chemical phrases, and integrated into a live SDS authoring application, significantly improving search efficiency and accuracy. Worked closely with software engineers and regulatory experts to identify project requirements and incorporate iterative feedback in an agile environment, collaborating effectively with cross-functional teams.",
    },
  ],

  // Education
  education: [
    {
      degree: "MSc (Hons) Data Science",
      institution: "Lancaster University",
      period: "September 2019 - June 2020",
      image: "/images/experience/lancaster.png",
      description:
        "Thesis project focused on enhancing phrase retrieval for Safety Data Sheet authoring.",
    },
    {
      degree: "BSc (Hons) Computer Science",
      institution: "Lancaster University",
      period: "October 2016 - June 2019",
      image: "/images/experience/lancaster.png",
      description:
        "Thesis project involved implementing a novel declarative programming language for creating smart contracts on Hyperledger Fabric blockchains.",
    },
  ],

  // Projects
  projects: [
    {
      title: "archtms",
      description:
        "A complete architect management system for timesheets, cashflow, holidays and project management. Landing page coming soon!",
      tags: ["TypeScript", "React", "Node.js", "GraphQL"],
      image: "/images/projects/archtms/tms.png",
      link: "/blog/archtms",
    },
    {
      title: "ai.resources",
      description:
        "A collection of community AI resources for building AI apps.",
      image: "/images/projects/airesources.png",
      link: "",
    },
    {
      title: "Portfolio Site",
      description:
        "Built with Next.js, Tailwind and TypeScript. A place where I can share what I learn.",
      image: "/images/projects/portfolio.png",
      link: "https://github.com/harrybaines/portfolio",
    },
    {
      title: "AI Avatars",
      description:
        "Personalised AI avatar image generator using Dreambooth Stable Diffusion.",
      image: "/images/projects/avatars.png",
      link: "https://github.com/harrybaines/ai-avatar-generator",
    },
    // {
    //   title: "brewkit",
    //   description:
    //     "Open source boilerplate starter kit for building web applications.",
    //   image: "/images/brand.png",
    //   link: "https://github.com/harrybaines/portfolio",
    // },
  ],

  // Open Source Contributions
  openSource: [
    {
      project: "Ivy",
      description:
        "Added JAX to numpy function conversions to the Ivy ML framework transpiler",
      link: "https://github.com/unifyai/ivy",
    },
    {
      project: "Buildspace",
      description:
        "Contributed to the community AI avatar tutorial project on Buildspace projects",
      link: "https://github.com/buildspace/buildspace-projects",
    },
    {
      project: "Celery",
      description:
        "Contributed a bugfix to celery.node, an open source task queue system",
      link: "https://github.com/actumn/celery.node",
    },
    {
      project: "alt3blink",
      description:
        "Created a Python-based desktop GUI for the blinkstick LED strip",
      link: "https://github.com/alt3code/alt3blink",
    },
  ],

  // Writing and blog posts
  writings: [
    {
      title: "Vim macros in 5 minutes",
      description: "Learn the magic of macros in Vim in 5 minutes.",
      date: "April 22, 2025",
      tags: ["vim", "macros"],
      url: "/blog/vim-macros-in-5-minutes",
    },
    {
      title: "Will AI replace software engineers?",
      description: "My thoughts on whether AI will replace software engineers.",
      date: "April 15, 2025",
      tags: ["ai", "software engineering"],
      url: "/blog/will-ai-replace-software-engineers",
    },
    {
      title: "Introducing archtms",
      description:
        "A brief introduction to archtms, my architecture practice management system.",
      date: "Jan 1, 2025",
      tags: ["software", "web development"],
      url: "/blog/archtms",
    },
  ],
};

export default experienceConfig;
