import AboutSection from "@/app/components/about-section";
import BlogPostsSection from "@/app/components/blog-posts-section";
import ProjectsSection from "@/app/components/projects-section";
import HeroSection from "./components/hero-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <BlogPostsSection />
    </>
  );
}
