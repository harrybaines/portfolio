"use client";

import Link from "next/link";
import { Code2, Database, Brain, Globe, Server, Layers } from "lucide-react";
import { useState } from "react";
import MatrixRain from "./components/MatrixRain";

export default function Home() {
  const [showMatrix, setShowMatrix] = useState(false);

  const skills = [
    { icon: Brain, title: "AI Integration", description: "LLMs & ML pipelines" },
    { icon: Code2, title: "Full Stack", description: "React, Next.js, Node" },
    { icon: Database, title: "Database Design", description: "PostgreSQL, Redis" },
    { icon: Globe, title: "Web Development", description: "Modern web apps" },
    { icon: Server, title: "Backend APIs", description: "REST & GraphQL" },
    { icon: Layers, title: "System Design", description: "Scalable architecture" },
  ];

  return (
    <>
      {showMatrix && <MatrixRain />}
      <div className="min-h-screen w-full pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-8">
          {/* Hero Section */}
          <div className="mb-20">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              Building the
              <br />
              <span
                className="cursor-pointer hover:text-neutral-500 transition-colors"
                onClick={() => {
                  setShowMatrix(true);
                  setTimeout(() => setShowMatrix(false), 5000);
                }}
              >
                future of AI
              </span>
            </h1>
            <p className="text-xl text-neutral-600 max-w-2xl">
              Harry Baines. Software engineer from the UK specializing in intelligent systems and
              modern web applications.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className="group p-8 border-2 border-neutral-200 hover:border-black transition-all duration-300 hover:shadow-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <skill.icon className="w-8 h-8 mb-4 text-neutral-400 group-hover:text-black transition-colors" />
                <h3 className="text-xl font-mono font-semibold mb-2">{skill.title}</h3>
                <p className="text-neutral-600 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link
              href="/about"
              className="px-8 py-4 bg-black text-white font-mono text-center hover:bg-neutral-800 transition-colors"
            >
              About Me
            </Link>
            <Link
              href="/blog"
              className="px-8 py-4 border-2 border-neutral-300 font-mono text-center hover:border-black transition-colors"
            >
              View Blog
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}