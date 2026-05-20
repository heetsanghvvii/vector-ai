import Link from 'next/link'
import { SmallIcon } from './Icon'
import { WHATSAPP_URL } from '@/content/services'

export function CTABanner() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-[#1e1e1e] bg-[#0A0A0A] px-8 sm:px-14 py-14 sm:py-16 glow-gold">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-orange/10 blur-3xl pointer-events-none" />
          <div className="absolute -left-32 -bottom-32 h-72 w-72 rounded-full bg-gold/8 blur-3xl pointer-events-none" />
          <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#F0F0F0]">
                Ready to get started?
              </h3>
              <p className="mt-3 text-[#555555] text-lg">Free audit. 24-hour reply. No commitment.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={WHATSAPP_URL}
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-semibold text-sm btn-primary"
              >
                <SmallIcon name="whatsapp" className="h-4 w-4" />
                WhatsApp us
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-medium text-sm btn-outline"
              >
                Send a brief
                <SmallIcon name="arrow" className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
