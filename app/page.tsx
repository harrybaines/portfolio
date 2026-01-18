"use client";

import Link from "next/link";
import { Terminal, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import TerminalCommand from "./components/TerminalCommand";

export default function Home() {
  const [currentLine, setCurrentLine] = useState(0);
  const [showSecret, setShowSecret] = useState(false);

  const lines = [
    "$ whoami",
    "> Harry Baines",
    "$ cat skills.txt",
    "> AI Integration • LLMs • Full Stack Development",
    "> Next.js • React • TypeScript • Python",
    "$ location --current",
    "> United Kingdom",
  ];

  useEffect(() => {
    if (currentLine < lines.length) {
      const timeout = setTimeout(() => {
        setCurrentLine(currentLine + 1);
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [currentLine, lines.length]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "h") {
        e.preventDefault();
        setShowSecret(true);
        setTimeout(() => setShowSecret(false), 3000);
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <>
      <TerminalCommand showSecret={showSecret} />
      <div className="min-h-screen w-full pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-8">
          {/* Terminal Window */}
          <div className="mb-12">
            <div className="bg-neutral-900 rounded-lg overflow-hidden shadow-2xl">
              {/* Terminal Header */}
              <div className="bg-neutral-800 px-4 py-3 flex items-center gap-2 border-b border-neutral-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <Terminal size={14} className="text-neutral-400 ml-2" />
                <span className="text-neutral-400 text-sm font-mono">bash</span>
              </div>

              {/* Terminal Body */}
              <div className="p-6 font-mono text-sm">
                {lines.slice(0, currentLine).map((line, i) => (
                  <div
                    key={i}
                    className={`${
                      line.startsWith("$")
                        ? "text-green-400"
                        : line.startsWith(">")
                        ? "text-neutral-300"
                        : "text-white"
                    } mb-1`}
                  >
                    {line}
                  </div>
                ))}
                {currentLine === lines.length && (
                  <div className="text-green-400 flex items-center mt-2">
                    <span>$</span>
                    <span className="ml-2 animate-pulse">_</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl font-bold mb-4">
                <span className="font-mono text-green-600">~/</span>harry-baines
              </h1>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Software engineer who speaks fluent JavaScript, Python, and terminal commands. I
                build intelligent systems that merge cutting-edge AI with practical solutions.
                Based in the UK, shipping code worldwide.
              </p>
            </div>

            {/* Command Links */}
            <div className="space-y-3">
              <Link
                href="/about"
                className="flex items-center gap-3 p-4 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 group transition-colors"
              >
                <ChevronRight className="text-green-600" size={20} />
                <span className="font-mono text-sm">cd about/</span>
                <span className="text-neutral-500 ml-auto text-sm">View profile</span>
              </Link>

              <Link
                href="/blog"
                className="flex items-center gap-3 p-4 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 group transition-colors"
              >
                <ChevronRight className="text-green-600" size={20} />
                <span className="font-mono text-sm">ls blog/</span>
                <span className="text-neutral-500 ml-auto text-sm">Read posts</span>
              </Link>
            </div>

            {/* Help Text */}
            <p className="text-xs text-neutral-400 font-mono mt-8">
              hint: press Ctrl+H for hidden command
            </p>
          </div>
        </div>
      </div>
    </>
  );
}