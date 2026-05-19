import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Vector AI — Your AI team. Fraction of the cost.',
    template: '%s | Vector AI',
  },
  description:
    'AI-powered content, research, design, and automation delivered in 24–48 hours. Serving clients in India, USA, and Europe.',
  openGraph: {
    type: 'website',
    siteName: 'Vector AI',
    title: 'Vector AI — Your AI team. Fraction of the cost.',
    description:
      'AI-powered content, research, design, and automation delivered in 24–48 hours.',
  },
  metadataBase: new URL('https://vectorai.co'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable} h-full`}
    >
      <body className="min-h-full bg-navy-900 text-white antialiased font-sans">
        {children}
      </body>
    </html>
  )
}
