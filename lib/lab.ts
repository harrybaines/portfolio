// The design lab at /lab: variations of the home and about pages to tinker
// with. Nothing here is linked from the live site.

export type LabPage = {
  slug: string
  n: string
  title: string
  note: string
  /** The about variation its "More about me" link goes to. */
  about?: string
}

export const labHomes: LabPage[] = [
  {
    slug: "1",
    n: "01",
    title: "Quiet",
    note: "Fewer words, more air. A live UK clock under the portrait.",
    about: "about-a",
  },
  {
    slug: "2",
    n: "02",
    title: "ID card",
    note: "The left column becomes a little profile card with details.",
    about: "about-a",
  },
  {
    slug: "3",
    n: "03",
    title: "Open column",
    note: "No grey panel: a bigger portrait, a hairline rule, a hint.",
    about: "about-b",
  },
  {
    slug: "4",
    n: "04",
    title: "Anchored",
    note: "The name sits low on the page, like a title card.",
    about: "about-b",
  },
  {
    slug: "5",
    n: "05",
    title: "Index",
    note: "Numbered sections and a 'now' line. Very ordered.",
    about: "about-c",
  },
  {
    slug: "6",
    n: "06",
    title: "Letter",
    note: "Written like a short note, signed off at the bottom.",
    about: "about-c",
  },
  // 07 onwards: full layout overhauls, same content, a few new faces.
  {
    slug: "7",
    n: "07",
    title: "Masthead",
    note: "No side panel. A huge name across the top, newspaper columns below.",
    about: "about-b",
  },
  {
    slug: "8",
    n: "08",
    title: "Centre stage",
    note: "One centred column in Fraunces, portrait on top, very calm.",
    about: "about-c",
  },
  {
    slug: "9",
    n: "09",
    title: "Banner",
    note: "A grey band across the top with the portrait and name, columns under it.",
    about: "about-a",
  },
  {
    slug: "10",
    n: "10",
    title: "Mono sidebar",
    note: "A narrow mono sidebar, a big statement, and projects up front.",
    about: "about-b",
  },
  {
    slug: "11",
    n: "11",
    title: "Bento",
    note: "Everything in hairline tiles: portrait, name, clock, links, projects.",
    about: "about-a",
  },
  {
    slug: "12",
    n: "12",
    title: "Sentence",
    note: "One big sentence in Instrument Serif with the portrait set inline.",
    about: "about-c",
  },
]

export const labAbouts: LabPage[] = [
  {
    slug: "about-a",
    n: "A",
    title: "Timeline",
    note: "Experience as a timeline, with a photo inline.",
  },
  {
    slug: "about-b",
    n: "B",
    title: "Fact sheet",
    note: "Quick facts and links pinned beside the writing.",
  },
  {
    slug: "about-c",
    n: "C",
    title: "Long form",
    note: "Prose first, a photo mid-way, details as footnotes.",
  },
]

/** Shorter copy for the concise variations. */
export const lab = {
  oneLiner:
    "Full stack engineer working on applied AI. 6+ years, mostly TypeScript and Python.",
  statement: "I build software with AI inside it.",
  intro:
    "I specialise in full stack web development and AI integration: building products end to end and wiring LLMs into them so they're genuinely useful.",
  outside:
    "Outside of work I freelance, build side projects and keep learning.",
  now: "Building LLM features and Clara at ConnexAI",
  status: "Open to freelance",
  city: "Manchester",
} as const
