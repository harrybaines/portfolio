export default function About() {
  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Sidebar with Image */}
          <div className="lg:col-span-2 space-y-6">
            <div className="aspect-square w-full bg-neutral-100 border-4 border-black">
              <div className="w-full h-full flex items-center justify-center text-neutral-400">
                <svg
                  className="w-24 h-24"
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

            <div className="p-6 bg-neutral-50 border-2 border-neutral-200">
              <h3 className="font-mono font-bold mb-3">Quick Facts</h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>📍 Based in the UK</li>
                <li>💼 Full-Stack Engineer</li>
                <li>🤖 AI Enthusiast</li>
                <li>🌐 Web Developer</li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            <div>
              <h1 className="text-5xl font-bold mb-2">Harry Baines</h1>
              <p className="text-xl text-neutral-600 font-mono">Software Engineer</p>
            </div>

            <div className="space-y-6 text-neutral-600 leading-relaxed">
              <p className="text-lg">
                I'm a software engineer based in the UK with a genuine passion for building things
                that matter. My journey into tech started with curiosity and has evolved into a
                career focused on creating intelligent, user-centric applications. I specialise in
                AI integration, working extensively with large language models to solve real-world
                problems in innovative ways.
              </p>

              <p className="text-lg">
                When I'm not coding, you'll find me exploring the latest developments in machine
                learning, contributing to open source projects, or experimenting with new
                frameworks. I believe in writing clean, maintainable code and building systems that
                scale. I'm always excited to collaborate on interesting projects and connect with
                fellow developers who share a passion for pushing the boundaries of what's possible
                with technology.
              </p>
            </div>

            <div className="pt-6">
              <h2 className="text-2xl font-mono font-bold mb-6">Tech Stack</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { category: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind"] },
                  { category: "Backend", skills: ["Node.js", "Python", "PostgreSQL", "Redis"] },
                  { category: "AI/ML", skills: ["OpenAI", "LangChain", "Vector DBs", "RAG"] },
                  { category: "DevOps", skills: ["Docker", "AWS", "Vercel", "GitHub Actions"] },
                ].map((group) => (
                  <div key={group.category} className="p-4 border-2 border-neutral-200">
                    <h3 className="font-mono font-semibold mb-3 text-sm">{group.category}</h3>
                    <ul className="space-y-1">
                      {group.skills.map((skill) => (
                        <li key={skill} className="text-sm text-neutral-600">
                          • {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
