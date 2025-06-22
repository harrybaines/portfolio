import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="py-6">
      <div className="flex items-center justify-between">
        <Link href="/" className="font-geist-sans text-lg font-medium text-neutral-900 hover:text-neutral-600 transition-colors">
          Harry Baines
        </Link>
        <div className="flex items-center space-x-6">
          <Link href="/blog" className="font-geist-sans text-sm text-neutral-600 hover:text-neutral-900 transition-colors underline underline-offset-4 decoration-1">
            Writing
          </Link>
          <Link href="/about" className="font-geist-sans text-sm text-neutral-600 hover:text-neutral-900 transition-colors underline underline-offset-4 decoration-1">
            About
          </Link>
        </div>
      </div>
    </nav>
  )
}