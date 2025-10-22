import './globals.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Cormorant_Garamond, Great_Vibes, Work_Sans } from 'next/font/google'

const headingFont = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-heading',
})

const bodyFont = Work_Sans({
  subsets: ['latin'],
  variable: '--font-body',
})

const scriptFont = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-script',
})

export const metadata: Metadata = {
  title: 'Wedding Guest App',
  description: 'A private space to share heartfelt messages, details, and memories for our wedding guests.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${bodyFont.variable} ${headingFont.variable} ${scriptFont.variable} min-h-screen bg-transparent font-body text-espresso-600`}
      >
        <div className="relative min-h-screen overflow-x-hidden py-12">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(182,160,136,0.18),transparent_55%),radial-gradient(circle_at_88%_12%,rgba(133,118,100,0.16),transparent_45%)]"
            aria-hidden
          />
          <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col gap-12 px-6 sm:px-10 lg:px-16">
            <header className="flex flex-col gap-4 pt-4 text-center sm:flex-row sm:items-baseline sm:justify-between sm:text-left">
              <div className="space-y-1">
                <span className="font-script text-2xl text-espresso-600 sm:text-3xl">Emma &amp; Justin extend a formal welcome</span>
                <p className="text-3xl font-heading tracking-wide text-espresso-800 sm:text-4xl">Emma &amp; Justin’s Wedding</p>
              </div>
              <span className="chip self-center sm:self-end">Honoured company</span>
            </header>
            <main className="flex-1">
              <div className="surface">{children}</div>
            </main>
            <footer className="pb-6 text-center text-xs uppercase tracking-[0.28em] text-coal-400">
              With gratitude, Emma &amp; Justin
            </footer>
          </div>
        </div>
      </body>
    </html>
  )
}
