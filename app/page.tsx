export default function Home() {
  return (
    <div className="min-h-screen w-full px-4 py-16">
      <div className="max-w-4xl mx-auto">
        {/* API-style Header */}
        <div className="mb-16 border-b border-neutral-200 pb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-mono px-2 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200">
              v1.0
            </span>
            <span className="text-xs font-mono text-neutral-400">ACTIVE</span>
          </div>
          <h1 className="text-6xl font-semibold tracking-tight mb-4">
            HARRY BAINES
          </h1>
          <p className="text-lg text-neutral-600">
            Software Engineer · UK
          </p>
        </div>

        {/* API Endpoints Style */}
        <div className="space-y-12">
          <section>
            <h2 className="text-sm font-mono uppercase tracking-wider text-neutral-400 mb-6">
              CAPABILITIES
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-neutral-200 p-6">
                <h3 className="font-mono text-sm mb-2 text-emerald-600">AI_INTEGRATION</h3>
                <p className="text-sm text-neutral-600">
                  Building intelligent systems with LLMs and machine learning pipelines
                </p>
              </div>
              <div className="border border-neutral-200 p-6">
                <h3 className="font-mono text-sm mb-2 text-blue-600">FULL_STACK</h3>
                <p className="text-sm text-neutral-600">
                  End-to-end development with React, Next.js, Node, and PostgreSQL
                </p>
              </div>
              <div className="border border-neutral-200 p-6">
                <h3 className="font-mono text-sm mb-2 text-purple-600">WEB_DEV</h3>
                <p className="text-sm text-neutral-600">
                  Modern web applications with focus on performance and UX
                </p>
              </div>
              <div className="border border-neutral-200 p-6">
                <h3 className="font-mono text-sm mb-2 text-orange-600">ARCHITECTURE</h3>
                <p className="text-sm text-neutral-600">
                  Scalable system design and technical decision making
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-sm font-mono uppercase tracking-wider text-neutral-400 mb-6">
              ENDPOINTS
            </h2>
            <div className="space-y-3">
              <a
                href="https://github.com/harrybaines"
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-neutral-200 p-4 hover:border-neutral-400 transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-emerald-600">GET</span>
                    <span className="font-mono text-sm">/github</span>
                  </div>
                  <span className="text-neutral-400 group-hover:text-neutral-600">→</span>
                </div>
              </a>
              <a
                href="https://linkedin.com/in/harrybaines"
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-neutral-200 p-4 hover:border-neutral-400 transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-emerald-600">GET</span>
                    <span className="font-mono text-sm">/linkedin</span>
                  </div>
                  <span className="text-neutral-400 group-hover:text-neutral-600">→</span>
                </div>
              </a>
              <a
                href="mailto:harry@example.com"
                className="block border border-neutral-200 p-4 hover:border-neutral-400 transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-blue-600">POST</span>
                    <span className="font-mono text-sm">/contact</span>
                  </div>
                  <span className="text-neutral-400 group-hover:text-neutral-600">→</span>
                </div>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
