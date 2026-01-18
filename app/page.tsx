import Link from "next/link";
import { Sparkles, Code, Brain, Rocket } from "lucide-react";
import ThemeSwitcher from "./components/ThemeSwitcher";

export default function Home() {
  const features = [
    {
      icon: Brain,
      title: "AI Integration",
      description: "Building intelligent systems with LLMs and machine learning",
    },
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Creating seamless experiences from frontend to backend",
    },
    {
      icon: Rocket,
      title: "Modern Web Apps",
      description: "Leveraging Next.js, React, and cutting-edge technologies",
    },
  ];

  return (
    <>
      <ThemeSwitcher />
      <div className="min-h-screen w-full pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8">
              <Sparkles size={16} className="text-blue-500" />
              <span className="text-sm font-mono">Available for new projects</span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
              Harry Baines
            </h1>

            <p className="text-xl md:text-2xl text-neutral-600 mb-8 max-w-3xl mx-auto">
              Software engineer based in the UK, specializing in AI integration and full-stack
              development
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/about"
                className="px-8 py-4 bg-black text-white font-mono hover:bg-neutral-800 transition-all hover:scale-105 rounded-lg"
              >
                About Me
              </Link>
              <Link
                href="/blog"
                className="px-8 py-4 glass-card font-mono hover:shadow-xl transition-all hover:scale-105 rounded-lg"
              >
                Read Blog
              </Link>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="glass-card p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-mono font-semibold mb-3">{feature.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="glass-card p-8 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-6">Tech Stack</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "TypeScript",
                "React",
                "Next.js",
                "Python",
                "Node.js",
                "PostgreSQL",
                "OpenAI",
                "Tailwind",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/50 rounded-full text-sm font-mono hover:bg-white/80 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <p className="text-center text-xs text-neutral-400 font-mono mt-16">
            hint: triple click anywhere to reveal something special ✨
          </p>
        </div>
      </div>
    </>
  );
}