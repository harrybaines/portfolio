// Single source of truth for every variation.
// Swap the placeholder URLs for real ones and all routes update at once.

export const site = {
  name: "Harry Baines",
  first: "Harry",
  last: "Baines",
  initials: "HB",
  age: 28,
  role: "Software engineer",
  location: "United Kingdom",
  since: 2018,

  // Two-sentence version used in most heroes.
  intro:
    "I'm a 28-year-old software engineer and freelancer in the UK. I build small, fast digital products — and I make things on the internet.",

  // One-liner for the tighter layouts.
  short: "Software engineer, freelancer and creator. UK.",

  // Longer paragraph, used by v1 and v6.
  about:
    "I've spent the last few years building web products end to end — data-heavy dashboards, developer tooling, and the occasional weekend app that got out of hand. Outside the day job I freelance with small teams who need someone who can take a rough idea and ship it, and I spend the rest of my time making my own things.",

  email: "hello@harrybaines.com",
} as const

// The day job, shown in every about block.
export const work = {
  title: "Software Engineer",
  company: "ConnexAI",
  href: "https://connex.ai",
} as const

/**
 * The short about that sits under the name on the v6* variations. Two
 * paragraphs, deliberately — any more and the hero stops being a hero.
 */
export const bio: string[] = [
  "I'm a software engineer in the UK. By day I'm at ConnexAI; the rest of the time I build small products, and I share the desk they get made at.",
  "I like software that's quick, quiet and does one thing well. I care more about shipping something people actually use than about what it's built with.",
]

export type Link = { label: string; href: string; note: string }

/**
 * The four outbound links. GitHub and archtms.com are verified; the Instagram
 * handle and the Gumroad store URL are best guesses — check them.
 */
export const links: Link[] = [
  { label: "GitHub", href: "https://github.com/harrybaines", note: "Code" },
  { label: "archtms", href: "https://archtms.com", note: "My project" },
  {
    label: "Instagram",
    href: "https://instagram.com/harrybaines",
    note: "Desk & setup",
  },
  {
    label: "Gumroad",
    href: "https://harrybaines.gumroad.com",
    note: "Wallpaper packs",
  },
]

export type Project = {
  name: string
  blurb: string
  href: string
  tag: string
  year: string
}

/** Side projects. Kept short on purpose — they're a mention, not the point. */
export const projects: Project[] = [
  {
    name: "Fieldnote",
    blurb: "Notes that link themselves.",
    href: "#",
    tag: "Product",
    year: "2025",
  },
  {
    name: "Tinystack",
    blurb: "Deploy a side project in one command.",
    href: "#",
    tag: "Developer tool",
    year: "2024",
  },
  {
    name: "Slowmail",
    blurb: "Email that arrives once a day.",
    href: "#",
    tag: "Product",
    year: "2024",
  },
]

/** Copy for the per-variation about pages. Edit freely — it's placeholder. */
export const aboutPage = {
  lead: "I build small, fast software and I'm fairly quiet about it.",
  paragraphs: [
    "I'm Harry — 28, a software engineer, and based in the UK. I've spent the last few years building web products end to end: data-heavy dashboards, internal tooling, and a fair few weekend apps that got out of hand.",
    "Right now I'm a Software Engineer at ConnexAI. It's the kind of work I like — real users, real constraints, and enough surface area that you never quite run out of things to fix.",
    "Outside of that I build my own things. archtms is the one I keep coming back to. The rest are smaller: tools I wanted to exist, shipped quickly, kept small on purpose.",
    "I'm also mildly preoccupied with the desk everything gets made at. I post the setup on Instagram, and the wallpapers I make for it end up on Gumroad.",
    "Away from the keyboard I'm usually out walking with a coffee, or rearranging the desk again instead of actually using it.",
  ],
  currently: [
    ["Role", "Software Engineer, ConnexAI"],
    ["Based", "United Kingdom"],
    ["Building", "archtms"],
    ["Open to", "Freelance work"],
  ],
} as const
