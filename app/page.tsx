export default function Home() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 bg-neutral-50">
      <div className="max-w-2xl w-full py-8">
        <div className="space-y-6">
          {/* User Message */}
          <div className="flex justify-end">
            <div className="max-w-[80%] bg-black text-white px-5 py-3 rounded-3xl">
              <p className="text-sm">Tell me about yourself</p>
            </div>
          </div>

          {/* AI Response */}
          <div className="flex justify-start">
            <div className="max-w-[85%] bg-white border border-neutral-200 px-5 py-4 rounded-3xl shadow-sm">
              <div className="space-y-4">
                <h1 className="text-2xl font-semibold">Harry Baines</h1>
                <div className="space-y-3 text-sm leading-relaxed text-neutral-700">
                  <p>
                    I'm a software engineer based in the UK, specializing in three core areas:
                  </p>
                  <ul className="space-y-2 pl-4">
                    <li>• <strong>AI Integration</strong> — Building intelligent systems with LLMs</li>
                    <li>• <strong>Full Stack Development</strong> — End-to-end web applications</li>
                    <li>• <strong>System Architecture</strong> — Scalable, maintainable solutions</li>
                  </ul>
                  <p>
                    I work with modern technologies like Next.js, React, TypeScript, Python, and
                    various AI frameworks to create practical, user-focused applications.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* User Message */}
          <div className="flex justify-end">
            <div className="max-w-[80%] bg-black text-white px-5 py-3 rounded-3xl">
              <p className="text-sm">How can I reach you?</p>
            </div>
          </div>

          {/* AI Response with Links */}
          <div className="flex justify-start">
            <div className="max-w-[85%] bg-white border border-neutral-200 px-5 py-4 rounded-3xl shadow-sm">
              <div className="space-y-3 text-sm text-neutral-700">
                <p>You can connect with me through:</p>
                <div className="space-y-2">
                  <a
                    href="https://github.com/harrybaines"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 bg-neutral-50 hover:bg-neutral-100 rounded-lg transition-colors"
                  >
                    <span className="font-medium">GitHub</span>
                    <span className="text-neutral-500 ml-2">→</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/harrybaines"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 bg-neutral-50 hover:bg-neutral-100 rounded-lg transition-colors"
                  >
                    <span className="font-medium">LinkedIn</span>
                    <span className="text-neutral-500 ml-2">→</span>
                  </a>
                  <a
                    href="mailto:harry@example.com"
                    className="block px-4 py-2 bg-neutral-50 hover:bg-neutral-100 rounded-lg transition-colors"
                  >
                    <span className="font-medium">Email</span>
                    <span className="text-neutral-500 ml-2">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
