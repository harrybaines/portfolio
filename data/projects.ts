type Project = {
  title: string;
  description: string;
  image?: string;
  link?: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "Brewkit",
    description: "A modern starter kit for quickly bootstrapping new projects.",
    link: "https://github.com/harrybaines/brewkit",
    tags: ["TypeScript", "React", "Next.js", "Tailwind"],
  },
  {
    title: "AI Avatar Generator",
    description:
      "Trained on my face using Dreambooth Stable Diffusion, with the model hosted on HuggingFace.",
    image: "/images/projects/ai-avatars/me.png",
    link: "https://github.com/harrybaines/ai-avatar-generator",
    tags: ["Next.js", "Stable Diffusion", "Hugging Face", "Railway"],
  },
  {
    title: "TorchGPT",
    description:
      "Generate PyTorch code from natural language prompts using OpenAI's text-davinci-3 model.",
    image: "/images/projects/torchgpt/app.png",
    link: "https://github.com/harrybaines/torchgpt",
    tags: ["TypeScript", "OpenAI", "PyTorch", "Next.js"],
  },
  {
    title: "Ivy",
    description: "Added JAX to numpy function conversions",
    link: "https://github.com/unifyai/ivy",
    tags: ["Python", "JAX", "NumPy", "ML"],
  },
  {
    title: "Buildspace",
    description: "Added enhancements to AI avatar tutorial project",
    link: "https://github.com/buildspace/buildspace-projects",
    tags: ["Next.js", "AI", "Tutorial"],
  },
];
