import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="py-6">
      <div className="flex items-center justify-between">
        <Link href="/" className="font-sans text-md hover:text-neutral-600 transition-colors">
          ~/harrybaines
        </Link>
        <div className="flex items-center space-x-6">
          <Link href="/blog" className="font-medium text-md text-neutral-700 hover:text-neutral-900 transition-colors">
            Blog
          </Link>
          <Link href="/about" className="font-medium text-md text-neutral-700 hover:text-neutral-900 transition-colors">
            About
          </Link>
        </div>
      </div>
    </nav>
  )
}