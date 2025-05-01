import Nav from '@/app/components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GeistMono } from 'geist/font/mono'
import type { Metadata } from 'next'
import { Jost } from 'next/font/google'
import Footer from './components/footer'
import './global.css'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Harry Baines Portfolio',
    template: '%s | Harry Baines Portfolio',
  },
  description: 'Welcome to my portfolio.',
  openGraph: {
    title: 'Harry Baines Portfolio',
    description: 'Welcome to my portfolio.',
    url: baseUrl,
    siteName: 'Harry Baines Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const jost = Jost({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistMono.variable} ${jost.variable}`}>
      <body className="antialiased px-2">
        <Nav />
        <main>
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
