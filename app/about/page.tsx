export default function About() {
  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="max-w-5xl mx-auto px-8">
        {/* Terminal-style Header */}
        <div className="mb-12 font-mono">
          <div className="text-green-600 text-sm mb-2">$ cat about.md</div>
          <h1 className="text-5xl font-bold">About <span className="animate-pulse">_</span></h1>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="md:col-span-1">
            <div className="bg-neutral-900 rounded-lg overflow-hidden">
              <div className="aspect-square bg-neutral-800 flex items-center justify-center">
                <svg
                  className="w-24 h-24 text-green-400"
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
              <div className="p-6 space-y-3 font-mono text-sm">
                <div className="text-green-400">harry@portfolio:~$</div>
                <div className="text-neutral-300 space-y-1">
                  <p>• name: Harry Baines</p>
                  <p>• role: Software Engineer</p>
                  <p>• location: UK</p>
                  <p>• status: Available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-neutral-50 border-2 border-neutral-200 p-6">
              <div className="font-mono text-sm text-green-600 mb-3">README.md</div>
              <div className="space-y-4 text-neutral-700">
                <p className="leading-relaxed">
                  I'm a software engineer based in the UK with a genuine passion for building
                  things that matter. My journey into tech started with curiosity and has evolved
                  into a career focused on creating intelligent, user-centric applications. I
                  specialise in AI integration, working extensively with large language models to
                  solve real-world problems in innovative ways.
                </p>
                <p className="leading-relaxed">
                  When I'm not coding, you'll find me exploring the latest developments in machine
                  learning, contributing to open source projects, or experimenting with new
                  frameworks. I believe in writing clean, maintainable code and building systems
                  that scale. I'm always excited to collaborate on interesting projects and connect
                  with fellow developers who share a passion for pushing the boundaries of what's
                  possible with technology.
                </p>
              </div>
            </div>

            {/* Skills Terminal Output */}
            <div className="bg-neutral-900 rounded-lg p-6 font-mono text-sm">
              <div className="text-green-400 mb-4">$ npm list --global</div>
              <div className="space-y-2 text-neutral-300">
                <div>├── typescript@latest</div>
                <div>├── react@latest</div>
                <div>├── next.js@latest</div>
                <div>├── node.js@lts</div>
                <div>├── python@3.11</div>
                <div>├── openai-api@latest</div>
                <div>├── postgresql@latest</div>
                <div>└── git@latest</div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-neutral-900 rounded-lg p-6 font-mono">
              <div className="text-green-400 text-sm mb-2">$ echo $CONTACT</div>
              <div className="text-neutral-300 text-sm">
                📧 Available for collaboration and new opportunities
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
