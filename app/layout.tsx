import Footer from '@/app/components/footer'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { Inter, JetBrains_Mono } from 'next/font/google'
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

const monoFont = JetBrains_Mono({
  subsets: ['latin' as const],
  variable: "--font-mono",
  display: "swap",
});

const sansFont = Inter({
  subsets: ['latin' as const],
  variable: "--font-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistMono.variable} ${GeistSans.variable} ${monoFont.variable} ${sansFont.variable}`} suppressHydrationWarning>
      <body className="antialiased font-sans h-screen">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <div className="max-w-3xl w-full mx-auto px-8">
            {/* <Navbar /> */}
            <main>
              {children}
            </main>
          </div>
          <Footer />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
