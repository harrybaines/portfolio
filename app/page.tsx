import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-8">
      <div className="max-w-3xl w-full">
        {/* Main Content */}
        <div className="space-y-12">
          {/* Name */}
          <h1 className="text-8xl md:text-9xl uppercase leading-none tracking-tight">
            HARRY
            <br />
            BAINES
          </h1>

          {/* Description */}
          <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">
            SOFTWARE ENGINEER · UK · AI INTEGRATION · LLMS · FULL STACK
          </p>

          {/* Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
            <a
              href="https://github.com/harrybaines"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <Github size={20} className="flex-shrink-0" />
              <span className="underline underline-offset-4 decoration-1">GitHub</span>
            </a>

            <a
              href="https://linkedin.com/in/harrybaines"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <Linkedin size={20} className="flex-shrink-0" />
              <span className="underline underline-offset-4 decoration-1">LinkedIn</span>
            </a>

            <a
              href="mailto:harry@example.com"
              className="flex items-center gap-3 group"
            >
              <Mail size={20} className="flex-shrink-0" />
              <span className="underline underline-offset-4 decoration-1">Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
