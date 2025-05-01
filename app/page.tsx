import CollaborationSection from "@/app/components/collaboration-section";
import Hero from "@/app/components/hero";
import HeroAbout from "@/app/components/hero-about";
import HeroBlog from "@/app/components/hero-blog";
import HeroPinned from "@/app/components/hero-pinned";

export default function Home() {

  return (
    <div>
      <Hero />
      <div className="w-full max-w-4xl mx-auto px-6 py-20 grid grid-cols-1 gap-24">
        <HeroAbout />
        <HeroPinned />
        <HeroBlog />
        <CollaborationSection />
      </div>
    </div>
  );
}