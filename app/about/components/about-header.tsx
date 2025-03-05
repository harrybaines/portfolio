import { SocialLink } from "@/components/common/social-link"
import { PageHeading } from "@/components/ui/page-heading"
import { socialLinks } from "@/data/social-links"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export function AboutHeader() {
  return (
    <div className="space-y-8">
      {/* Header with name and profile image */}
      <div className="flex items-start justify-between gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-3"
        >
          <PageHeading label="ABOUT ME" />
          <h1 className="text-3xl font-bold tracking-tight mt-2">
            Software Engineer from the UK 🇬🇧
          </h1>

          {/* Background section moved beneath name */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl pt-3"
          >
            <p className="text-md text-muted-foreground leading-relaxed">
              Passionate about full-stack development, AI and developer tooling.
              I enjoy learning new technologies and building software that solves real problems.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative shrink-0 overflow-hidden hidden md:block"
        >
          <Image
            src="/images/profile/portfolio.jpeg"
            alt="Harry Baines"
            width={125}
            height={125}
            className="object-cover rounded-full border-2 border-border"
            priority
          />
        </motion.div>
      </div>

      {/* Terminal setup banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full h-[180px] md:h-[400px] rounded-xl overflow-hidden relative"
      >
        <Image
          src="/images/setup/desk.png"
          alt="Development Setup"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
      </motion.div>

      {/* Bio sections with better readability */}
      <div className="grid grid-cols-1 gap-6">
        {/* Current Focus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4"
        >
          <p className="text-md text-muted-foreground leading-relaxed">
            Currently focused on full-stack web development and AI integration. Building{" "}
            <Link href="https://archtms.com" className="text-primary hover:text-primary/80 transition-colors">
              archtms
            </Link>
            , a complete architect management system, and{" "}
            <Link href="https://brewkit.dev" className="text-primary hover:text-primary/80 transition-colors">
              brewkit
            </Link>
            , an open-source startup boilerplate.
            I primarily code in TypeScript, Go and Python. Recently, I&apos;ve been learning Rust to build API&apos;s and CLI&apos;s.
          </p>
        </motion.div>

        {/* Availability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-md text-muted-foreground leading-relaxed">
            I&apos;m open to full-time opportunities and part-time work, feel free to get in touch and we can have a chat!
          </p>
        </motion.div>

        {/* Social Links and View Work */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center gap-4 pt-2  mt-2"
        >
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <SocialLink
                key={link.href}
                href={link.href}
                icon={link.icon}
                label={link.label}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}