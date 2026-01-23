export interface LearnItem {
  title: string;
  emoji: string;
  description?: string;
  completed?: boolean;
  url?: string;
}

export interface GrowthMapConfig {
  contributions: Array<LearnItem>;
  currentlyLearning: Array<LearnItem>;
  devSetup: Array<LearnItem>;
  other: Array<LearnItem>;
}

export const growthMapConfig: GrowthMapConfig = {
  contributions: [
    {
      emoji: "🧩",
      title: "tambo-ai/tambo",
      description:
        "React package for adding generative components to your AI assistant.",
      url: "https://github.com/tambo-ai/tambo",
      completed: true,
    },
    {
      emoji: "🔄",
      title: "ivy-llc/Ivy",
      description: "ML framework transpiler and unified framework.",
      url: "https://github.com/ivy-llc/ivy",
      completed: true,
    },
    {
      emoji: "🏗️",
      title: "buildspace/Buildspace Projects",
      description: "AI avatar tutorial project on Buildspace projects.",
      url: "https://buildspace.so/",
      completed: true,
    },
  ],
  currentlyLearning: [
    {
      emoji: "🦀",
      title: "Rust",
      description: "Learning systems programming with Rust.",
    },
    {
      emoji: "🐹",
      title: "Advanced Go",
      description:
        "Diving deeper into Go programming patterns and concurrency.",
    },
    {
      emoji: "🔮",
      title: "Vercel's AI SDK",
      description: "Building AI-powered applications with Vercel's toolkit.",
    },
    {
      emoji: "🏗️",
      title: "Terraform",
      description: "Infrastructure as code for cloud resource management.",
    },
    {
      emoji: "🚢",
      title: "Kubernetes",
      description: "Container orchestration for scalable applications.",
    },
    {
      emoji: "☁️",
      title: "AWS CDK",
      description: "Cloud Development Kit for defining infrastructure as code.",
    },
    {
      emoji: "📜",
      title: "AWS Certified Cloud Practitioner",
      description: "Studying for AWS certification.",
    },
    {
      emoji: "🖥️",
      title: "Building a homelab",
      description: "Setting up personal servers and network infrastructure.",
    },
    {
      emoji: "🐧",
      title: "Advanced Linux concepts",
      description: "Deepening Linux system administration knowledge.",
    },
  ],
  devSetup: [
    {
      emoji: "⌨️",
      title: "Warp terminal with neovim",
      description: "Using avante.nvim for AI integration.",
      completed: true,
    },
    {
      emoji: "🪟",
      title: "Tmux",
      description: "Terminal multiplexer for session management.",
      completed: true,
    },
    {
      emoji: "📝",
      title: "Zed",
      description: "Fast, collaborative code editor.",
      completed: true,
    },
    {
      emoji: "🌐",
      title: "Zen browser",
      description: "Distraction-free web browsing.",
      completed: true,
    },
    {
      emoji: "🚀",
      title: "Aerospace",
      description: "Window management for macOS.",
      completed: true,
    },
    {
      emoji: "🧠",
      title: "Obsidian PARA second brain",
      description:
        "Knowledge management with Projects, Areas, Resources, Archives method.",
      completed: true,
    },
  ],
  other: [
    {
      emoji: "🏋️",
      title: "Hybrid Training",
    },
    {
      emoji: "💪",
      title: "Bench 85kg",
    },
    {
      emoji: "👥",
      title: "1000 X followers",
    },
    {
      emoji: "⌨️",
      title: "150 WPM typing speed",
    },
    {
      emoji: "🦀",
      title: "Become proficient in Rust",
    },
    {
      emoji: "📸",
      title: "Learn photography",
    },
    {
      emoji: "🎸",
      title: "Learn guitar",
    },
    {
      emoji: "🎵",
      title: "Make lofi music",
    },
    {
      emoji: "🗽",
      title: "Visit New York",
    },
  ],
};
