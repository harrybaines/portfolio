import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="py-5">
      <div className="flex items-center justify-between">
        <Link href="/" className="font-semibold hover:text-neutral-600 transition-colors">
          harrybaines
        </Link>
        <div className="flex items-center space-x-6">
          <Link href="/blog" className="text-sm font-semibold text-neutral-700 hover:text-blue-700 transition-colors">
            Blog
          </Link>
          <Link href="/about" className="text-sm font-semibold text-neutral-700 hover:text-blue-700 transition-colors">
            About
          </Link>
        </div>
      </div>
    </nav>
  )
}