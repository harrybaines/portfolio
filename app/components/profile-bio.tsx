"use client";


export default function ProfileBio() {
  return (
    <div className="space-y-6 text-stone-700">
      <p className="text-lg  leading-relaxed">
        Hiya! I&apos;m a software engineer from the <span className="inline-flex items-center">🇬🇧 UK</span>.
        Nowadays I&apos;m building full-stack apps, automations, APIs and developer tools.
        I&apos;m the founder of <span className="text-amber-700">archtms</span>, a complete architecture practice management system,
        which I built and sold to a large architecture company.
      </p>

      <p className="text-lg leading-relaxed">
        I&apos;m proficient in <span className="text-amber-700">TypeScript</span>, <span className="text-amber-700">Go</span> and <span className="text-amber-700">Python</span>, and I&apos;m learning <span className="text-amber-700">Rust</span> to build performant applications.
        My go-to stack is PERN, Django, Next.js, or Go depending on the project. I&apos;m comfortable with any kind of database (SQL/NoSQL). I love hacking around in the terminal using Neovim and Warp.
      </p>

      <p className="text-lg leading-relaxed">
        I&apos;m currently exploring developer tools and <span className="text-amber-700">Vercel&apos;s AI SDK</span> to build AI-powered applications.
        I also enjoy contributing to OS projects, playing with AI tools and endlessly configuring my dev environment 😄. Outside of work I enjoy hybrid training, watching LFC, and playing chess.
      </p>


      <p className="text-lg leading-relaxed mb-3">
        Feel free to check out my CV <a href="https://wwoi1vvxbb.ufs.sh/f/0PyPE3K0Z8csQjh97SZY6qKNRiTeyxmBabh2s1nMr98tvg4E" className="text-amber-700 hover:text-amber-900 underline">here</a>.
        I&apos;m always open to new opportunities, collaborations, or a chat over a coffee! ☕
      </p>
    </div>
  );
}