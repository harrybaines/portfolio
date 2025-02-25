export async function Footer() {
  return (
    <footer className="pt-20">
      <div className="container relative max-w-5xl mx-auto py-16">
        <div className="flex justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Harry Baines. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">Built with Next.js & Tailwind</p>
        </div>
      </div>
    </footer>
  )
}