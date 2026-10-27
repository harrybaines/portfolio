// Single source of truth for the site (and the reference designs in
// /references). Swap the placeholder URLs for real ones and everything updates.

export const site = {
  name: "Harry Baines",
  first: "Harry",
  last: "Baines",
  initials: "HB",
  age: 28,
  role: "Full stack engineer",
  location: "United Kingdom",
  since: 2018,

  // One-liner for the tighter layouts.
  short: "Software engineer, freelancer and creator. UK.",

  // Sits under the name on the home page.
  about: [
    "I'm a full stack software engineer working at the intersection of software and AI. Day to day I build product end to end, from the interface down to the AI and LLM integrations that sit behind it.",
    "Outside of work I take on freelance projects, build side projects like Droplet, and spend a lot of time learning whatever has caught my interest that month.",
  ],

  email: "hello@harrybaines.com",
} as const

// The day job, shown in every about block.
export const work = {
  title: "Software Engineer",
  company: "ConnexAI",
  href: "https://connex.ai",
} as const

/**
 * The short about used by the reference designs in /references. Two
 * paragraphs, deliberately — any more and the hero stops being a hero.
 */
export const bio: string[] = [
  "I'm a software engineer in the UK. By day I'm at ConnexAI; the rest of the time I build small products, and I share the desk they get made at.",
  "I like software that's quick, quiet and does one thing well. I care more about shipping something people actually use than about what it's built with.",
]

export type Link = { label: string; href: string; note: string }

/**
 * The four outbound links. GitHub, X and LinkedIn come from the old site; the
 * Instagram handle is a best guess, so check it.
 */
export const links: Link[] = [
  { label: "GitHub", href: "https://github.com/harrybaines", note: "Code" },
  { label: "X", href: "https://x.com/HarryIsCoding", note: "Posts" },
  {
    label: "Instagram",
    href: "https://instagram.com/harrybaines",
    note: "Desk & setup",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/harryb0905/",
    note: "Work",
  },
]

export type Project = {
  name: string
  blurb: string
  /** Leave out when there's nothing to link to yet. */
  href?: string
  /** A year or a range. Leave out if it doesn't matter. */
  year?: string
}

/** The "Also built" list, from the pinned projects on the old site. */
export const projects: Project[] = [
  {
    name: "archtms",
    blurb: "Practice management software for architects.",
    href: "https://archtms.vercel.app/",
    year: "2020 – 2025",
  },
  {
    name: "Droplet",
    blurb: "A productivity dashboard for my life.",
    year: "Now",
  },
  {
    name: "create-ai-stack",
    blurb: "CLI tool to create a full stack AI app.",
    href: "https://create-ai-stack.dev",
  },
  {
    name: "brewkit",
    blurb: "AI starter kit template.",
    href: "https://brew-kit.dev",
  },
  {
    name: "lovable-clone",
    blurb: "A Lovable clone to build websites with AI.",
    href: "https://github.com/harrybaines/lovable-clone",
  },
  {
    name: "torchgpt",
    blurb: "PyTorch code generator.",
    href: "https://github.com/harrybaines/torchgpt",
  },
  {
    name: "ai-avatar-generator",
    blurb: "Dreambooth Stable Diffusion model trained on my face.",
    href: "https://github.com/harrybaines/ai-avatar-generator",
  },
  {
    name: "YT-to-text",
    blurb: "Transcribe a YouTube video to text with OpenAI Whisper.",
    href: "https://github.com/harrybaines/gradio-whisper",
  },
  {
    name: "Quark",
    blurb: "Programming language for smart contracts, built with Go.",
    href: "https://github.com/harrybaines/Quark",
  },
]

/** Copy for the reference designs' about pages. */
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

/** Everything on /about. */
export const profile = {
  lead: "Full stack engineer, working where software meets AI.",
  intro: [
    "I'm Harry, a 28-year-old software engineer based in the UK. I've been building for the web since 2018, mostly end to end: the interface, the API, the database and, more and more, the AI and LLM integrations that tie them together.",
    "I like small, fast software that does one thing well, and I care more about shipping something people actually use than about what it's built with. Outside of work I freelance, build side projects, and keep a long list of things I want to learn next.",
  ],
  currently: [
    ["Role", "Software Engineer, ConnexAI"],
    ["Focus", "AI and LLM integrations"],
    ["Based", "United Kingdom"],
    ["Open to", "Freelance work"],
  ],
  // Start years only. Add end years if you want ranges.
  experience: [
    {
      role: "Software Engineer",
      org: "ConnexAI",
      when: "Now",
      note: "Full stack product work and the AI and LLM integrations behind it.",
    },
    {
      role: "Software Engineer",
      org: "Cassidy and Ashton Architects",
      when: "2022",
      note: "Built archtms v2, a PERN practice management system used by 70+ staff across 13,000+ projects. Moved hosting from Heroku to Docker and cut costs by over 90%.",
    },
    {
      role: "Software Engineer / Data Scientist",
      org: "Yordas Digital",
      when: "2020",
      note: "Led a Django app that halved safety data sheet authoring time, built NLP search over 20,000+ chemical phrases, and mentored two interns.",
    },
    {
      role: "Software Engineer, part time",
      org: "Cassidy and Ashton Architects",
      when: "2018",
      note: "Built the first version of archtms alongside university.",
    },
  ],
  education: [
    { what: "MSc Data Science", where: "Lancaster University", when: "2020" },
    {
      what: "BSc Computer Science",
      where: "Lancaster University",
      when: "2019",
    },
  ],
  outside: [
    "Most weeks revolve around training. I'm a hybrid athlete, so that means a mix of running and lifting, and I enjoy having something to work towards that has nothing to do with a screen.",
    "I'm a lifelong Liverpool FC fan, through the good seasons and the other ones, and I play a fair bit of chess, slowly getting better.",
    "The rest of the time I'm tinkering: with the desk setup, with Neovim and the terminal, or with whatever side project has caught my attention that month.",
  ],
} as const
