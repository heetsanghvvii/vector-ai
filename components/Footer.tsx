import Link from 'next/link'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="border-t border-[#1e1e1e] bg-[#080808]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-4 text-[#555555] max-w-sm leading-relaxed text-sm">
              AI-powered work. Human-level quality. Your unfair advantage.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs font-mono text-[#555555]">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-orange" />
              Mumbai · New York · Berlin
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="text-xs font-sans font-medium uppercase tracking-[3px] text-[#555555] mb-4">Services</div>
            <ul className="space-y-2.5 text-sm text-[#F0F0F0]/70">
              <li><Link href="/services/content-copywriting"   className="hover:text-gold transition-colors">Content</Link></li>
              <li><Link href="/services/research-intelligence" className="hover:text-gold transition-colors">Research</Link></li>
              <li><Link href="/services/creative-visual"       className="hover:text-gold transition-colors">Creative</Link></li>
              <li><Link href="/services/chatbots-automation"   className="hover:text-gold transition-colors">Automation</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-xs font-sans font-medium uppercase tracking-[3px] text-[#555555] mb-4">Company</div>
            <ul className="space-y-2.5 text-sm text-[#F0F0F0]/70">
              <li><Link href="/#about"   className="hover:text-gold transition-colors">About</Link></li>
              <li><Link href="/pricing"  className="hover:text-gold transition-colors">Pricing</Link></li>
              <li><Link href="/#contact" className="hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs font-sans font-medium uppercase tracking-[3px] text-[#555555] mb-4">Get in touch</div>
            <ul className="space-y-2.5 text-sm text-[#F0F0F0]/70">
              <li><a href="mailto:hello@partha.ai" className="hover:text-gold transition-colors">hello@partha.ai</a></li>
              <li><a href="https://wa.me/918879955291" className="hover:text-gold transition-colors">WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-[#1e1e1e] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#555555] font-mono">
          <div>© 2025 Partha AI. Mumbai, India.</div>
          <div className="flex items-center gap-5">
            <Link href="#" className="hover:text-[#F0F0F0]">Privacy</Link>
            <Link href="#" className="hover:text-[#F0F0F0]">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
