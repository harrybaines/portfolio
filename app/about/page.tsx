"use client"

import { Collaborate } from "@/components/common/collaborate"
import { SocialLink } from "@/components/common/social-link"
import { JourneyTimeline } from "@/components/home/journey-timeline"
import { NumberTicker } from "@/components/magicui/number-ticker"
import { Card } from "@/components/ui/card"
import { PageHeading } from "@/components/ui/page-heading"
import { socialLinks } from "@/data/social-links"
import { useGithubRepos } from "@/hooks/use-github-repos"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ArrowRight, ArrowUpRight, Bookmark, Brain, Code2, Command, Dumbbell, Footprints, GitBranch, Keyboard, Layers, Search, Terminal } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const interests = [
  {
    icon: <Dumbbell className="h-4 w-4" />,
    label: "Hybrid Training",
    description: "Combining cardio and strength training for optimal performance",
    gradient: "from-orange-500/20 via-amber-500/10 to-transparent",
    gallery: [
      {
        src: "/bike.jpeg",
        alt: "Cycling in the mountains",
        location: "Peak District",
        caption: "Weekend endurance rides",
        size: "large" as const
      },
      {
        src: "/running.jpeg",
        alt: "Marathon training",
        location: "London Marathon",
        caption: "26.2 miles of grit",
        size: "small" as const
      },
      {
        src: "/gym.jpeg",
        alt: "Powerlifting session",
        location: "The Iron Paradise",
        caption: "Strength training day",
        size: "small" as const
      },
      {
        src: "/trail.jpeg",
        alt: "Trail running",
        location: "Lake District",
        caption: "Finding peace in nature",
        size: "medium" as const
      }
    ]
  },
  {
    icon: <Bookmark className="h-4 w-4" />,
    label: "Football",
    description: "Liverpool supporter since 2008, FPL player since 2015",
    gradient: "from-red-500/20 via-rose-500/10 to-transparent",
    gallery: [
      {
        src: "/football/anfield.jpg",
        alt: "Anfield Stadium",
        location: "Liverpool",
        caption: "Home of Liverpool FC",
        size: "large" as const
      },
      // Add more football related images...
    ]
  },
]

const athleteStats = [
  {
    category: "Running",
    description: "Passionate about distance running but currently recovering from a knee injury. Looking forward to getting back on the roads and chasing new PBs in 2024.",
    stats: [
      {
        label: "5K PB",
        value: "21:06",
        target: "Sub 20:00",
        link: "https://www.strava.com/activities/8138290131",
        icon: <Footprints className="h-4 w-4" />
      },
      {
        label: "10K PB",
        value: "49:30",
        target: "Sub 45:00",
        link: "https://www.strava.com/activities/8007364489",
        icon: <Footprints className="h-4 w-4" />
      },
      {
        label: "15K PB",
        value: "1:21:12",
        target: "Sub 1:10:00",
        link: "https://www.strava.com/activities/7709684019",
        icon: <Footprints className="h-4 w-4" />
      },
      {
        label: "Half Marathon",
        value: "2:00:23",
        target: "Sub 1:45:00",
        link: "https://www.strava.com/activities/7791468613",
        icon: <Footprints className="h-4 w-4" />
      }
    ]
  },
  {
    category: "Strength",
    description: "Started strength training in October 2023. Made good initial progress but currently managing a back injury. Focus is on rehabilitation and proper form.",
    stats: [
      {
        label: "Bench Press",
        value: "70kg",
        target: "100kg",
        icon: <Dumbbell className="h-4 w-4" />
      },
      {
        label: "Back Squat",
        value: "100kg",
        target: "140kg",
        icon: <Dumbbell className="h-4 w-4" />
      },
      {
        label: "Pull Ups",
        value: "5 reps",
        target: "10 reps",
        icon: <Dumbbell className="h-4 w-4" />
      }
    ]
  }
]

const calculateYearsExperience = () => {
  const startDate = new Date('2018-05-01');
  const now = new Date();
  const diffInYears = (now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
  return Math.floor(diffInYears);
};

export default function AboutPage() {
  const { repos, loading } = useGithubRepos();
  // const [activeInterest, setActiveInterest] = useState(0)

  const developerStats = [
    {
      value: calculateYearsExperience().toString(),
      label: "Years Experience",
      sublabel: "Full Stack Development",
      icon: <Code2 className="h-5 w-5" />
    },
    {
      value: loading ? "0" : repos,
      label: "Github Repositories",
      sublabel: "Public Only",
      icon: <Brain className="h-5 w-5" />
    },
    {
      value: "110",
      label: "WPM",
      sublabel: "Typing Speed",
      icon: <Keyboard className="h-5 w-5" />
    },
  ]

  type DevSetup = {
    category: string
    description: string
    image: string
    configs: {
      name: string
      icon: React.ReactNode
      description: string
      link?: string
    }[]
  }

  const devSetup: DevSetup[] = [
    {
      category: "Development Setup",
      description: "I enjoy spending time configuring my development environment (more time than I&apos;d like to admit!). I currently use Neovim, tmux, and zsh. I keep all my development and personal notes in my Obsidian second brain through Neovim using obsidian.nvim.",
      image: "/setup/terminal.png",
      configs: [
        {
          name: "Lazy.nvim",
          icon: <Keyboard className="h-4 w-4" />,
          description: "Modern plugin manager with lazy-loading for optimal startup time",
          link: "https://github.com/folke/lazy.nvim"
        },
        {
          name: "LSP + Mason",
          icon: <Code2 className="h-4 w-4" />,
          description: "Language server protocol setup with automatic server management",
        },
        {
          name: "Telescope",
          icon: <Search className="h-4 w-4" />,
          description: "Fuzzy finder for files, live grep, and Git integration",
        },
        {
          name: "Wezterm",
          icon: <Terminal className="h-4 w-4" />,
          description: "GPU-accelerated terminal with Lua configuration",
        },
        {
          name: "Tmux",
          icon: <Layers className="h-4 w-4" />,
          description: "Terminal multiplexer for enhanced multitasking",
        },
        {
          name: "Fish Shell",
          icon: <Command className="h-4 w-4" />,
          description: "Modern shell with smart completions",
        }
      ]
    },
  ]

  const valueProps = [
    {
      title: "Software Engineering",
      description: "Building full-stack web applications with a focus on clean architecture and developer experience. Currently working on archtms, a SaaS platform for architecture firms.",
      icon: <Code2 className="h-5 w-5" />
    },
    {
      title: "Hybrid Training",
      description: "Balancing marathon training with powerlifting. Currently training for a sub-3:30 marathon while maintaining strength goals. Personal bests include a 200kg deadlift.",
      icon: <Dumbbell className="h-5 w-5" />
    },
    {
      title: "Open Source",
      description: "Contributing to developer tools and maintaining several open source projects. Passionate about building tools that improve developer workflows.",
      icon: <GitBranch className="h-5 w-5" />
    }
  ]

  const StatContent = ({ stat }: { stat: (typeof athleteStats)[0]["stats"][0] }) => (
    <div className="flex items-center justify-between group">
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-background shadow-sm ring-1 ring-border">
          {stat.icon}
        </div>
        <div className="space-y-1.5">
          <p className="text-sm text-muted-foreground">
            {stat.label}
          </p>
          <div className="flex items-center gap-3">
            <p className="font-mono font-medium">
              {stat.value}
            </p>
            {stat.target && (
              <div className="px-2 py-0.5 rounded-full bg-muted/50 border border-border">
                <p className="font-mono text-xs text-muted-foreground">
                  Goal: {stat.target}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      {stat.link && (
        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10">
            <ArrowUpRight className="h-4 w-4 text-primary" />
          </div>
        </div>
      )}
    </div>
  )

  return (
    <div className="relative">
      <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
        <div className="relative mx-auto">
          <div className="space-y-16">
            {/* Header */}
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
                  <div className="h-32 w-32 rounded-full overflow-hidden bg-primary/10 ring-2 ring-border">
                    <Image
                      src="/portfolio.jpeg"
                      alt="Harry Baines"
                      width={128}
                      height={128}
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-background/20 to-transparent" />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Table of Contents */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="my-12"
            >
              <Card className="p-6">
                <h2 className="text-lg font-semibold mb-4">On this page</h2>
                <div className="space-y-1">
                  {sections.map((section) => (
                    <Link
                      key={section.href}
                      href={section.href}
                      className="group flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                        {section.icon}
                      </div>
                      <span className="font-medium text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {section.title}
                      </span>
                      <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  ))}
                </div>
              </Card>
            </motion.div> */}

            {/* What I Do */}
            <motion.div
              id="what-i-do"
              data-section
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <PageHeading label="WHAT I DO" />
              <motion.div
                className="grid md:grid-cols-3 gap-6"
              >
                {valueProps.map((prop, i) => (
                  <Card
                    key={i}
                    className="p-6 bg-muted/50 border-none hover:bg-muted/80 transition-colors group"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-md bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                          {prop.icon}
                        </div>
                        <h3 className="font-medium">{prop.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {prop.description}
                      </p>
                    </div>
                  </Card>
                ))}
              </motion.div>
            </motion.div>

            {/* Professional Journey */}
            <JourneyTimeline />

            {/* Interests & Gallery */}
            {/* <motion.div id="interests" className="space-y-6">
              <PageHeading label="INTERESTS" />
              <div className="space-y-8">
                <Card className="p-2">
                  <div className="flex gap-2">
                    {interests.map((interest, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveInterest(i)}
                        className={cn(
                          "flex-1 p-4 transition-all rounded-lg",
                          "hover:bg-muted/50",
                          "flex items-center gap-4",
                          "border-2 border-transparent",
                          activeInterest === i && [
                            "bg-muted/50",
                            "border-primary/50",
                            "shadow-[0_0_0_1px] shadow-primary/10",
                          ]
                        )}
                      >
                        <div className={cn(
                          "flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
                          "bg-primary/10 text-primary backdrop-blur-sm transition-colors",
                          activeInterest === i && [
                            "bg-primary/20",
                            "ring-2 ring-primary/20 ring-offset-2 ring-offset-background"
                          ]
                        )}>
                          {interest.icon}
                        </div>
                        <div className="text-left">
                          <h3 className={cn(
                            "font-semibold tracking-tight transition-colors",
                            activeInterest === i && "text-primary"
                          )}>
                            {interest.label}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {interest.description}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </Card>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[240px]">
                  {interests[activeInterest].gallery.map((image, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 * i }}
                      className={cn(
                        "group relative overflow-hidden rounded-xl bg-primary/10 ring-2 ring-border",
                        image.size === 'large' && "col-span-2 row-span-2",
                        image.size === 'medium' && "col-span-2"
                      )}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={800}
                        height={800}
                        className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-sm">
                            <Camera className="h-4 w-4 text-primary" />
                            <span className="font-medium text-white">{image.caption}</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-white/80">
                            <MapPin className="h-3 w-3" />
                            <span>{image.location}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div> */}

            {/* Development Environment */}
            <motion.div
              id="setup"
              data-section
              className="space-y-6"
            >
              <PageHeading label="DEVELOPMENT" />
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {developerStats.map((stat, i) => (
                  <Card key={i} className="p-5 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        {stat.icon}
                      </div>
                      <div className="min-w-0 flex-1 space-y-0.5">
                        <NumberTicker
                          value={stat.value}
                          className="whitespace-pre-wrap text-2xl font-mono font-medium tracking-tighter text-black dark:text-white"
                        />
                        <div className="text-sm text-muted-foreground">
                          {stat.label}
                        </div>
                        <div className="text-xs text-muted-foreground/80">
                          {stat.sublabel}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="gap-8">
                {devSetup.map((setup, i) => (
                  <Card key={i} className="overflow-hidden">
                    {/* Hero Image Section */}
                    <div className="relative h-[400px] w-full overflow-hidden bg-muted">
                      <Image
                        src={setup.image}
                        alt={setup.category}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>

                    {/* Content Section */}
                    <div className="p-6 space-y-6">
                      <div className="space-y-3">
                        <div>
                          <h3 className="text-xl font-semibold tracking-tight">
                            {setup.category}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            {setup.description}
                          </p>
                        </div>

                        <div className="flex items-center gap-3">
                          <Link
                            href="https://github.com/harrybaines/dotfiles"
                            target="_blank"
                            className={cn(
                              "inline-flex items-center justify-center gap-2",
                              "bg-primary/10 hover:bg-primary/20",
                              "text-primary",
                              "px-3 py-1.5 rounded-md",
                              "transition-colors duration-200",
                              "border border-primary/20",
                              "text-sm font-medium"
                            )}
                          >
                            <GitBranch className="h-3.5 w-3.5" />
                            View Dotfiles
                          </Link>
                        </div>
                      </div>

                      {/* Config Items */}
                      <div className="grid grid-cols-2 gap-3">
                        {setup.configs.map((config, j) => (
                          <div
                            key={j}
                            className={cn(
                              "flex items-start gap-3 p-3 rounded-lg",
                              "bg-muted/50 hover:bg-muted/80 transition-colors",
                              "border border-border"
                            )}
                          >
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                              {config.icon}
                            </div>
                            <div>
                              <h4 className="font-medium text-sm">{config.name}</h4>
                              <p className="text-xs text-muted-foreground mt-0.5">
                                {config.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Athlete Stats */}
            <motion.div
              id="athlete"
              data-section
              className="space-y-6"
            >
              <PageHeading label="HYBRID TRAINING" />
              <div className="grid gap-6 md:grid-cols-2">
                {athleteStats.map((category, i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="p-6 space-y-6">
                      <div className="space-y-2">
                        <h3 className="font-semibold tracking-tight text-lg">
                          {category.category}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {category.description}
                        </p>
                      </div>
                      <div className="grid gap-4">
                        {category.stats.map((stat, j) => (
                          <div key={j} className="relative">
                            {stat.link ? (
                              <Link
                                href={stat.link}
                                target="_blank"
                                className={cn(
                                  "block p-4 rounded-lg transition-all",
                                  "hover:bg-muted/50",
                                  "border border-border hover:border-primary/50"
                                )}
                              >
                                <StatContent stat={stat} />
                              </Link>
                            ) : (
                              <div
                                className={cn(
                                  "block p-4 rounded-lg transition-all",
                                  "hover:bg-muted/50",
                                  "border border-border hover:border-primary/50"
                                )}
                              >
                                <StatContent stat={stat} />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>

            <Collaborate />
          </div>
        </div>
      </div>
    </div>
  )
}