import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Profile Image */}
          <div className="space-y-4">
            <div className="aspect-square w-full max-w-md mx-auto md:mx-0 bg-neutral-100 rounded-none overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-neutral-400">
                <svg
                  className="w-32 h-32"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <h1 className="text-5xl font-bold mb-8">About</h1>

            <p className="text-lg leading-relaxed text-neutral-600">
              I'm a software engineer based in the UK with a genuine passion for building things
              that matter. My journey into tech started with curiosity and has evolved into a
              career focused on creating intelligent, user-centric applications. I specialise in AI
              integration, working extensively with large language models to solve real-world
              problems in innovative ways.
            </p>

            <p className="text-lg leading-relaxed text-neutral-600">
              When I'm not coding, you'll find me exploring the latest developments in machine
              learning, contributing to open source projects, or experimenting with new frameworks.
              I believe in writing clean, maintainable code and building systems that scale. I'm
              always excited to collaborate on interesting projects and connect with fellow
              developers who share a passion for pushing the boundaries of what's possible with
              technology. Feel free to reach out if you'd like to chat about AI, web development,
              or anything in between.
            </p>

            <div className="pt-6">
              <h2 className="text-xl font-mono font-semibold mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Node.js",
                  "Python",
                  "LLMs",
                  "OpenAI API",
                  "PostgreSQL",
                  "Tailwind CSS",
                  "Git",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-neutral-100 text-neutral-700 text-sm font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
