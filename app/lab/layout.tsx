import type { Metadata } from "next"

// The lab is for trying ideas out, not for search engines.
export const metadata: Metadata = {
  title: "Lab — Harry Baines",
  robots: { index: false, follow: false },
}

export default function LabLayout({ children }: { children: React.ReactNode }) {
  return children
}
