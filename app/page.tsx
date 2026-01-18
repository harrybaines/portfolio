import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen w-full pt-32 pb-16">
      <div className="max-w-3xl mx-auto px-8">
        <div className="space-y-16">
          {/* Hero Section with Emoji */}
          <div className="space-y-6">
            <p className="text-xl">👋 Hey!</p>
            <h1 className="text-7xl md:text-8xl font-bold leading-none">
              Harry
              <br />
              Baines
            </h1>
            <p className="text-2xl text-neutral-600">
              Software engineer based in 🇬🇧 United Kingdom
            </p>
          </div>

          {/* About Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">🎓 Background</h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              I build intelligent systems with AI · LLMs · Full Stack Development.
              Specializing in Next.js, React, TypeScript, and modern web technologies.
            </p>
          </div>

          {/* Skills Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">💻 What I Do</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="p-4 bg-neutral-50 border border-neutral-200">
                <p className="font-semibold">AI Integration</p>
                <p className="text-sm text-neutral-600">LLMs & ML pipelines</p>
              </div>
              <div className="p-4 bg-neutral-50 border border-neutral-200">
                <p className="font-semibold">Full Stack</p>
                <p className="text-sm text-neutral-600">React, Next.js, Node</p>
              </div>
              <div className="p-4 bg-neutral-50 border border-neutral-200">
                <p className="font-semibold">Web Development</p>
                <p className="text-sm text-neutral-600">Modern web apps</p>
              </div>
              <div className="p-4 bg-neutral-50 border border-neutral-200">
                <p className="font-semibold">System Design</p>
                <p className="text-sm text-neutral-600">Scalable architecture</p>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">🔗 Connect</h2>
            <div className="flex flex-col gap-2">
              <Link href="/about" className="text-neutral-600 hover:text-black transition-colors">
                → About me & experience
              </Link>
              <Link href="/blog" className="text-neutral-600 hover:text-black transition-colors">
                → Blog & technical writing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
