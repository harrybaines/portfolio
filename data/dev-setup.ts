import { Code2, File, Keyboard, Layers, Terminal } from "lucide-react";

type DevSetup = {
  category: string;
  description: string;
  image: string;
  configs: {
    name: string;
    icon: React.ElementType;
    description: string;
  }[];
};

export const devSetup: DevSetup[] = [
  {
    category: "Development Setup",
    description:
      "I enjoy spending time configuring my development environment (more time than I&apos;d like to admit!). I currently use Neovim, tmux, and zsh. I keep all my development and personal notes in my Obsidian second brain through Neovim using obsidian.nvim.",
    image: "/images/setup/terminal.png",
    configs: [
      {
        name: "Neovim",
        icon: Code2,
        description: "Modern terminal-based code editor",
      },
      {
        name: "Lazy.nvim",
        icon: Keyboard,
        description: "Modern plugin manager with lazy-loading for neovim",
      },
      {
        name: "Wezterm",
        icon: Terminal,
        description: "GPU-accelerated terminal with Lua configuration",
      },
      {
        name: "Tmux",
        icon: Layers,
        description: "Terminal multiplexer for enhanced multitasking",
      },
      {
        name: "Obsidian",
        icon: File,
        description: "Note-taking app with powerful note linking",
      },
      {
        name: "Aerospace",
        icon: Layers,
        description: "Custom window management",
      },
    ],
  },
];
