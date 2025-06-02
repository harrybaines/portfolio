import ContentWrapper from "./components/ContentWrapper";
import HeroSection from "./components/HeroSection";
import PostsSection from "./components/PostsSection";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white text-neutral-900 overflow-hidden">
      <div className="relative z-10 min-h-screen pt-12 md:pt-10 pb-10 flex flex-col">
        <div className="mx-auto w-full flex-1 flex flex-col">
          <ContentWrapper>
            <HeroSection />
            <div className="mt-20 mb-40">
              <PostsSection />
            </div>
          </ContentWrapper>
        </div>
      </div>
    </div>
  );
}