"use client"

import { AboutHeader } from "@/app/about/components/about-header"
import { DevEnvironment } from "@/app/about/components/dev-environment"
import { HybridTraining } from "@/app/about/components/hybrid-training"
import { WhatIDo } from "@/app/about/components/what-i-do"
import { Collaborate } from "@/components/common/collaborate"
import { JourneyTimeline } from "@/components/home/journey-timeline"

export default function AboutPage() {
  return (
    <div className="space-y-32">
      <AboutHeader />
      <WhatIDo />
      <JourneyTimeline />
      <DevEnvironment />
      <HybridTraining />
      <Collaborate />
    </div>
  )
}