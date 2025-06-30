import ContentWrapper from "./components/ContentWrapper";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <>
      <div className="min-h-screen w-full text-neutral-900 dark:text-neutral-100 overflow-hidden">
        <div className="relative z-10 min-h-screen pt-12 md:pt-10 flex flex-col">
          <div className="mx-auto w-full flex-1 flex flex-col">
            <ContentWrapper>
              <HeroSection />
            </ContentWrapper>
          </div>
        </div>
      </div>
    </>
  );
}