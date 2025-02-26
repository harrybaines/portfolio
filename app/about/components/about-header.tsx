import { SocialLink } from "@/components/common/social-link"
import { PageHeading } from "@/components/ui/page-heading"
import { socialLinks } from "@/data/social-links"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function AboutHeader() {
  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <PageHeading label="ABOUT ME" />
          <h1 className="text-4xl font-bold tracking-tight mt-2">
            Hey, I&apos;m Harry 👋
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4 text-muted-foreground leading-relaxed mt-6"
          >
            <p>
              Software engineer from the UK with 5+ years of experience. Passionate about developer tooling, learning new
              technologies and building software that provides real value.
            </p>
            <p>
              Currently focused on full-stack web development and AI integration. Building{" "}
              <Link href="https://archtms.com" className="text-primary hover:text-primary/80 transition-colors">
                archtms
              </Link>
              , a complete architect management system, and{" "}
              <Link href="https://brewkit.dev" className="text-primary hover:text-primary/80 transition-colors">
                brewkit
              </Link>
              , an open-source AI-powered startup boilerplate.
              I primarily code in TypeScript, Go and Python. Recently, I&apos;ve been learning Rust to build API&apos;s and CLI&apos;s.
            </p>
            <p>
              I&apos;m open to full-time opportunities and part-time work, feel free to get in touch and we can have a chat!
            </p>

            {/* Social Links and View Work */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-2">
                {socialLinks.map((link) => (
                  <SocialLink
                    key={link.href}
                    href={link.href}
                    icon={link.icon}
                    label={link.label}
                  />
                ))}
              </div>

              <div className="h-4 w-px bg-border" />

              <Link
                href="/work"
                className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                View All Work
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative shrink-0 overflow-hidden hidden md:block"
        >
          <Image
            src="/images/profile/me.jpeg"
            alt="Harry Baines"
            width={128}
            height={128}
            className="object-cover rounded-full"
            priority
          />
        </motion.div>
      </div>
    </div >
  )
}