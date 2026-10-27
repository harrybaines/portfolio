export type Variation = {
  slug: string
  n: string
  title: string
  note: string
  face: string
  /** Kept around but not in the running; flagged on the page and index. */
  shelved?: boolean
}

// Slugs keep their original numbers so the URLs you bookmarked still work.
export const variations: Variation[] = [
  {
    slug: "v6",
    n: "01",
    title: "Split",
    note: "Portrait holds still, the writing scrolls past it.",
    face: "Newsreader",
  },
  {
    slug: "v6n",
    n: "02",
    title: "Split, narrow",
    note: "The same split, with the portrait panel cut to 30%.",
    face: "Newsreader",
  },
  {
    slug: "v6b",
    n: "03",
    title: "Card",
    note: "The portrait sits in a frame instead of a panel.",
    face: "Fraunces",
  },
  {
    slug: "v6h",
    n: "04",
    title: "Rule",
    note: "A mono label hangs in the gutter beside every block.",
    face: "Fraunces",
  },
  // Parked at the end of the list until there's a reason to revisit them.
  {
    slug: "v6a",
    n: "05",
    title: "Ledger",
    note: "Links ruled off in a column beside the writing.",
    face: "Newsreader",
    shelved: true,
  },
]

export function nextSlug(slug: string) {
  const i = variations.findIndex((v) => v.slug === slug)
  return variations[(i + 1) % variations.length].slug
}

export function prevSlug(slug: string) {
  const i = variations.findIndex((v) => v.slug === slug)
  return variations[(i - 1 + variations.length) % variations.length].slug
}

export function getVariation(slug: string) {
  return variations.find((v) => v.slug === slug)!
}
