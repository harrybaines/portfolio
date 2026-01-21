export default function Home() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        <div className="space-y-8">
          {/* Prompt-like structure */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-emerald-500 mt-1">$</span>
              <div className="flex-1">
                <p className="text-sm text-neutral-500 mb-2">system</p>
                <p className="text-neutral-400">whoami</p>
              </div>
            </div>

            <div className="flex items-start gap-3 pl-6">
              <span className="text-blue-500 mt-1">→</span>
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-medium mb-3 text-white">
                  HARRY BAINES
                </h1>
                <p className="text-neutral-400 text-sm">
                  software_engineer = &#123;
                  <br />
                  <span className="pl-4">location: "UK",</span>
                  <br />
                  <span className="pl-4">focus: ["AI", "LLMs", "Full Stack"],</span>
                  <br />
                  <span className="pl-4">status: "available"</span>
                  <br />
                  &#125;
                </p>
              </div>
            </div>
          </div>

          {/* Links as commands */}
          <div className="space-y-3 pt-8">
            <a
              href="https://github.com/harrybaines"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-neutral-400 hover:text-white transition-colors"
            >
              <span className="text-emerald-500">$</span>
              <span>open github</span>
            </a>
            <a
              href="https://linkedin.com/in/harrybaines"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-neutral-400 hover:text-white transition-colors"
            >
              <span className="text-emerald-500">$</span>
              <span>open linkedin</span>
            </a>
            <a
              href="mailto:harry@example.com"
              className="flex items-center gap-3 text-sm text-neutral-400 hover:text-white transition-colors"
            >
              <span className="text-emerald-500">$</span>
              <span>send email</span>
            </a>
          </div>

          {/* Blinking cursor */}
          <div className="flex items-center gap-2 pt-4">
            <span className="text-emerald-500">$</span>
            <span className="animate-pulse text-white">_</span>
          </div>
        </div>
      </div>
    </div>
  );
}
