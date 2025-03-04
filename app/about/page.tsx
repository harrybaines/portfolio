"use client"

import { AboutHeader } from "@/app/about/components/about-header"
import { DevEnvironment } from "@/app/about/components/dev-environment"
import { JourneyTimeline } from "@/components/home/journey-timeline"

export default function AboutPage() {
  return (
    <div className="space-y-32">
      <AboutHeader />
      <JourneyTimeline />
      <DevEnvironment />
    </div>
  )
}