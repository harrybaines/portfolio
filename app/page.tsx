import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen w-full pt-32 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-20">
          <div>
            <h1 className="text-[10rem] md:text-[14rem] font-black leading-[0.85] tracking-tighter">
              HARRY
              <br />
              BAINES
            </h1>
          </div>

          <div className="grid md:grid-cols-2 gap-8 border-t-2 border-black pt-8">
            <div>
              <p className="text-xl font-mono mb-4">ROLE</p>
              <p className="text-2xl">Software Engineer</p>
            </div>
            <div>
              <p className="text-xl font-mono mb-4">LOCATION</p>
              <p className="text-2xl">United Kingdom</p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-xl font-mono">FOCUS</p>
            <p className="text-4xl font-bold leading-tight max-w-2xl">
              AI Integration · LLMs · Full Stack Development
            </p>
          </div>

          <div className="flex gap-4 border-t-2 border-black pt-8">
            <Link href="/about" className="text-2xl underline hover:no-underline">
              ABOUT
            </Link>
            <Link href="/blog" className="text-2xl underline hover:no-underline">
              BLOG
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
