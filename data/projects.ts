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
    description:
      "A modern code boilerplate starter kit for quickly bootstrapping new projects with best practices and common configurations.",
    link: "https://brewkit.dev",
    tags: ["TypeScript", "React", "Next.js", "Tailwind"],
  },
  {
    title: "AI Avatar Generator",
    description:
      "AI avatar generator trained on my face using Dreambooth Stable Diffusion, with the trained model hosted on Hugging Face.",
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
];
