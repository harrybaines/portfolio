import { Collaborate } from "@/components/common/collaborate"
import { Activity } from "@/components/home/activity"
import { Hero } from "@/components/home/hero"
import { HomeFeaturedProject } from "@/components/home/home-featured-project"
import { TellMeMore } from "@/components/home/tell-me-more"

export default function Page() {
  return (
    <section>
      <Hero />
      <TellMeMore />
      <HomeFeaturedProject />
      <Collaborate />
      <Activity />
    </section>
  )
}