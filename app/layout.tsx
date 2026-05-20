import type { Metadata } from 'next'
import { Cormorant_Garamond, Montserrat, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  display: 'swap',
})

const montserrat = Montserrat({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Partha AI — Your unfair advantage.',
    template: '%s | Partha AI',
  },
  description:
    'Partha AI delivers agency-quality AI work in 24–48 hours. Content, research, decks, automation — at a fraction of the cost.',
  openGraph: {
    type: 'website',
    siteName: 'Partha AI',
    title: 'Partha AI — Your unfair advantage.',
    description:
      'Partha AI delivers agency-quality AI work in 24–48 hours. Content, research, decks, automation — at a fraction of the cost.',
  },
  metadataBase: new URL('https://partha.ai'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${montserrat.variable} ${jetbrains.variable} h-full`}
    >
      <body className="min-h-full bg-black-deep text-[#F0F0F0] antialiased font-sans">
        {children}
      </body>
    </html>
  )
}
