# Portfolio Site

My personal portfolio website built with Next.js, React 19, and Tailwind CSS. Features a modern, minimalist design highlighting my software engineering experience, projects, and technical skills.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI**: React 19, Tailwind CSS 4
- **Animations**: Framer Motion
- **Deployment**: Vercel
- **Analytics**: Vercel Analytics

## Features

- Responsive design
- Dark mode
- Portfolio showcases
- Blog with MDX support
- Performance optimized
- Animations & transitions

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- pnpm/npm/yarn/bun

### Installation

```bash
git clone https://github.com/harrybaines/portfolio.git
cd portfolio
pnpm install
pnpm run dev
```

The site will be available at `http://localhost:3000`.

## Landing page variations

The homepage ships with ten design variations that share one content file:

- Edit copy, projects and links in `app/content.ts`.
- Preview each design at `/v/01` … `/v/10`. Use the floating switcher or the `[` / `]` keys to move between them.
- Choose the live design at `/` with `DEFAULT_VARIATION` in `app/variations/index.ts`.

Screenshots of every variation are in [`docs/variations`](docs/variations/README.md).

## Project Structure

- `/app` - Next.js App Router pages and layouts
- `/app/components` - UI components
- `/app/variations` - Landing page designs, one file each
- `/lib` - Utility functions and shared code
- `/public` - Static assets
- `/config` - Configuration files
