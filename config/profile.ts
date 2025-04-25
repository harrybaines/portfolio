import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const profileConfig = {
  // Personal details
  name: "Harry Baines",
  title: "Full Stack Developer",
  description:
    "Hi there, I'm Harry. I'm a passionate full-stack developer with expertise in creating engaging digital experiences. My journey in software development has been driven by a curiosity to understand how things work and how to make them better.",
  location: "United Kingdom 🇬🇧",

  email: "harryb0905@googlemail.com",
  avatar: "/images/whale.JPG", // Profile image path
  brandImage: "/images/brand.png", // Brand image for about page

  // Stats
  stats: {
    yearsExperience: "5+",
    typingSpeed: "110",
    githubContributions: "6K",
    mechanicalKeyboards: "6",
  },

  // Social links
  socialLinks: [
    { name: "Github", url: "https://github.com/harrybaines", icon: Github },
    {
      name: "Twitter",
      url: "https://twitter.com/harryiscoding",
      icon: Twitter,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/harryb0905",
      icon: Linkedin,
    },
    { name: "Email", url: "mailto:harryb0905@googlemail.com", icon: Mail },
  ],

  // Currently section
  currently: [
    {
      emoji: "📚",
      text: "Learning Rust for performance-critical applications",
    },
    {
      emoji: "🧠",
      text: "Exploring Vercel's AI SDK for building intelligent applications",
    },
    {
      emoji: "🌱",
      text: "Contributing to open source projects",
    },
  ],

  // Gallery photos
  galleryPhotos: [
    {
      url: "https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1",
      alt: "Coding session",
      caption: "Late night coding session",
    },
    {
      url: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea",
      alt: "Team meeting",
      caption: "Team planning session",
    },
    {
      url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
      alt: "Conference talk",
      caption: "Speaking at DevConf 2023",
    },
    {
      url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
      alt: "Remote work",
      caption: "Working from my favorite coffee shop",
    },
    {
      url: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      alt: "Hiking adventure",
      caption: "Weekend adventures in nature",
    },
    {
      url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      alt: "Workspace",
      caption: "My productivity setup",
    },
  ],
};

export default profileConfig;
