import { Hero } from "@/components/home/hero"
import { HomeFeaturedProject } from "@/components/home/home-featured-project"

export default function Page() {
  return (
    <section className="space-y-40">
      <Hero />
      {/* <TellMeMore /> */}
      <HomeFeaturedProject />
    </section>
  )
}