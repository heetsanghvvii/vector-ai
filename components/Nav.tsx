'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Logo } from './Logo'
import { Icon } from './Icon'

const NAV_LINKS = [
  { href: '/#services', label: 'Services' },
  { href: '/pricing',   label: 'Pricing' },
  { href: '/#about',    label: 'About' },
  { href: '/#contact',  label: 'Contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy-900/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="h-16 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-8 text-sm text-mute">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="/#contact"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium bg-electric hover:bg-electric-600 text-white rounded-full px-4 py-2 transition-colors"
            >
              Get a free audit
              <Icon name="arrow" className="h-3.5 w-3.5" />
            </Link>
            <button
              aria-label="Menu"
              className="md:hidden h-9 w-9 inline-flex items-center justify-center rounded-md border border-white/10"
              onClick={() => setOpen((v) => !v)}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d={open ? 'M6 6l12 12M6 18L18 6' : 'M4 7h16M4 12h16M4 17h16'} />
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-1 text-sm">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-2 py-2.5 rounded-md text-mute hover:text-white hover:bg-white/5"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-1.5 text-sm font-medium bg-electric text-white rounded-full px-4 py-2.5"
            >
              Get a free audit
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
