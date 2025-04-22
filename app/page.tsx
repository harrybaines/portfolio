import AboutSection from "@/app/components/about-section";
import BlogPostsSection from "@/app/components/blog-posts-section";
import HeroSection from "@/app/components/hero-section";
import ProjectsSection from "@/app/components/projects-section";

export default function Page() {
  return (
    <section>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <BlogPostsSection />
    </section>
  )
}
