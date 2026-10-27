export type Variation = {
  slug: string
  n: string
  title: string
  note: string
  face: string
}

// Slugs keep their original numbers so the URLs you bookmarked still work.
export const variations: Variation[] = [
  {
    slug: "v1",
    n: "01",
    title: "Centre",
    note: "Everything on one axis. Portrait, name, breath.",
    face: "Instrument Serif",
  },
  {
    slug: "v6",
    n: "02",
    title: "Split",
    note: "Portrait holds still, the writing scrolls past it.",
    face: "Newsreader",
  },
  // Eight takes on the split layout. About sits under the name; links sit
  // beside it; side projects are a mention rather than the main event.
  {
    slug: "v6a",
    n: "03",
    title: "Ledger",
    note: "Links ruled off in a column beside the writing.",
    face: "Newsreader",
  },
  {
    slug: "v6b",
    n: "04",
    title: "Card",
    note: "The portrait sits in a frame instead of a panel.",
    face: "Fraunces",
  },
  {
    slug: "v6f",
    n: "05",
    title: "Bare",
    note: "No panel at all. One column, a lot of air.",
    face: "EB Garamond",
  },
  {
    slug: "v6h",
    n: "06",
    title: "Rule",
    note: "A mono label hangs in the gutter beside every block.",
    face: "Fraunces",
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
