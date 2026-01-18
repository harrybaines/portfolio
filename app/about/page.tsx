export default function About() {
  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="max-w-5xl mx-auto px-8">
        <h1 className="text-5xl md:text-6xl font-bold mb-12 text-center">About Me</h1>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Profile Card */}
          <div className="md:col-span-1">
            <div className="glass-card rounded-2xl overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <svg
                  className="w-32 h-32 text-neutral-400"
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
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">Harry Baines</h2>
                <p className="text-neutral-600 text-sm mb-4">Software Engineer</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-neutral-500">📍</span>
                    <span>United Kingdom</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-neutral-500">💼</span>
                    <span>Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-2 space-y-6">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p>
                  I'm a software engineer based in the UK with a genuine passion for building
                  things that matter. My journey into tech started with curiosity and has evolved
                  into a career focused on creating intelligent, user-centric applications. I
                  specialise in AI integration, working extensively with large language models to
                  solve real-world problems in innovative ways.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring the latest developments in machine
                  learning, contributing to open source projects, or experimenting with new
                  frameworks. I believe in writing clean, maintainable code and building systems
                  that scale. I'm always excited to collaborate on interesting projects and connect
                  with fellow developers.
                </p>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Skills & Technologies</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind"] },
                  { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "APIs"] },
                  { category: "AI/ML", items: ["OpenAI", "LangChain", "RAG", "Embeddings"] },
                  { category: "Tools", items: ["Git", "Docker", "AWS", "Vercel"] },
                ].map((group) => (
                  <div key={group.category} className="space-y-2">
                    <h4 className="font-mono font-semibold text-sm">{group.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 bg-white/50 rounded-full text-xs font-mono"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
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
