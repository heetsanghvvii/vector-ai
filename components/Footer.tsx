import Link from 'next/link'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy-950">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-4 text-mute max-w-sm leading-relaxed">AI-powered work. Human-level quality.</p>
            <div className="mt-6 flex items-center gap-2 text-xs font-mono text-mute">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-electric" />
              Mumbai · New York · Berlin
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="text-xs font-mono uppercase tracking-widest text-mute mb-4">Services</div>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li><Link href="/services/content-copywriting"   className="hover:text-electric">Content</Link></li>
              <li><Link href="/services/research-intelligence" className="hover:text-electric">Research</Link></li>
              <li><Link href="/services/creative-visual"       className="hover:text-electric">Creative</Link></li>
              <li><Link href="/services/chatbots-automation"   className="hover:text-electric">Automation</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-xs font-mono uppercase tracking-widest text-mute mb-4">Company</div>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li><Link href="/#about"   className="hover:text-electric">About</Link></li>
              <li><Link href="/pricing"  className="hover:text-electric">Pricing</Link></li>
              <li><Link href="/#contact" className="hover:text-electric">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs font-mono uppercase tracking-widest text-mute mb-4">Get in touch</div>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li><a href="mailto:hello@vectorai.co" className="hover:text-electric">hello@vectorai.co</a></li>
              <li><a href="https://wa.me/" className="hover:text-electric">WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-mute font-mono">
          <div>© 2026 Vector AI. Mumbai, India.</div>
          <div className="flex items-center gap-5">
            <Link href="#" className="hover:text-white">Privacy</Link>
            <Link href="#" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
