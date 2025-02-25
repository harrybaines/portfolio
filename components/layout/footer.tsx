import { getWorkProjects } from "@/lib/mdx-utils"
import { Github, Linkedin, Twitter } from "lucide-react"

async function getFooterLinks() {
  const workProjects = await getWorkProjects()

  return {
    pages: {
      title: "Pages",
      links: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Work", href: "/work" }
      ]
    },
    projects: {
      title: "Projects",
      links: [
        ...workProjects.map(project => ({
          label: project.metadata.title,
          href: `/work/${project.slug}`
        })),
      ].slice(0, 4)
    },
    social: {
      title: "Social",
      links: [
        {
          label: "X",
          href: "https://x.com/harry_baines",
          icon: <Twitter className="h-4 w-4" />
        },
        {
          label: "LinkedIn",
          href: "https://linkedin.com/in/harrybaines",
          icon: <Linkedin className="h-4 w-4" />
        },
        {
          label: "GitHub",
          href: "https://github.com/harrybaines",
          icon: <Github className="h-4 w-4" />
        },
      ]
    }
  }
}

export async function Footer() {
  const footerLinks = await getFooterLinks()

  return (
    <footer className="pt-20">
      <div className="container relative max-w-5xl mx-auto py-16">
        {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Object.values(footerLinks).map((section) => (
            <div key={section.title} className="space-y-3">
              <h3 className="font-mono text-sm tracking-widest text-muted-foreground">
                {section.title.toUpperCase()}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                    >
                      {link.icon && link.icon}
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div> */}
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