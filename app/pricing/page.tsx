import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { SmallIcon } from '@/components/Icon'
import { PricingFilter } from '@/components/PricingFilter'
import { CTABanner } from '@/components/CTABanner'
import { BUNDLES } from '@/content/services'

export const metadata: Metadata = {
  title: 'Pricing | Partha AI',
  description:
    'Every deliverable, every price. Transparent India and international pricing for content, research, creative, operations, data, and chatbot services.',
}

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 sm:pt-36 pb-16 sm:pb-20 hero-radial">
          <div className="absolute inset-0 grid-bg opacity-50 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-xs font-medium text-gold">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
              Pricing
            </div>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight max-w-4xl mx-auto text-balance text-[#F0F0F0]">
              Transparent pricing.{' '}
              <span className="text-[#555555]">No surprises.</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-[#555555] leading-relaxed">
              Every deliverable, every price. Pick what you need or bundle for better value.
            </p>
          </div>
        </section>

        {/* Filter + table */}
        <section className="py-12 sm:py-16 border-t border-[#1e1e1e]">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <PricingFilter />
          </div>
        </section>

        {/* Bundle & Save */}
        <section className="py-20 sm:py-24 border-t border-[#1e1e1e] bg-[#080808]">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="text-xs font-sans font-medium uppercase tracking-[3px] text-brand-orange mb-3">Bundle &amp; Save</div>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#F0F0F0]">Bigger scopes, better rates.</h2>
              <p className="mt-4 text-[#555555]">Mix and match. Save 15–25% over à la carte.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {BUNDLES.map((b) => (
                <div
                  key={b.name}
                  className={`relative rounded-2xl p-7 flex flex-col ${
                    b.featured ? 'bg-black-card glow-gold' : 'bg-black-card border border-[#1e1e1e]'
                  }`}
                >
                  {b.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide text-black btn-primary">
                      BEST VALUE
                    </div>
                  )}

                  <h3 className="text-xl font-semibold tracking-tight text-[#F0F0F0]">{b.name}</h3>
                  <ul className="mt-5 space-y-2.5 text-sm">
                    {b.items.map((it) => (
                      <li key={it} className="flex items-start gap-2.5">
                        <span className={`mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full ${b.featured ? 'bg-gradient-to-r from-brand-orange to-gold text-black' : 'bg-gold/10 text-gold'}`}>
                          <SmallIcon name="check" className="h-2.5 w-2.5" />
                        </span>
                        <span className="text-[#F0F0F0]/70">{it}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 pt-6 border-t border-[#1e1e1e] space-y-3">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs font-mono uppercase tracking-widest text-[#555555]">India</span>
                      <span className="flex items-baseline gap-2">
                        <span className="text-[#555555] line-through text-sm">{b.originalInr}</span>
                        <span className="font-display text-2xl font-semibold text-gold">{b.bundleInr}</span>
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs font-mono uppercase tracking-widest text-[#555555]">International</span>
                      <span className="flex items-baseline gap-2">
                        <span className="text-[#555555] line-through text-sm">{b.originalIntl}</span>
                        <span className="font-display text-2xl font-semibold text-gold">{b.bundleIntl}</span>
                      </span>
                    </div>
                    <div className="text-[12px] text-brand-orange font-medium">Save {b.saveInr} / {b.saveIntl}</div>
                  </div>

                  <Link
                    href="/#contact"
                    className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors ${
                      b.featured ? 'btn-primary' : 'btn-outline'
                    }`}
                  >
                    Get this bundle
                    <SmallIcon name="arrow" className="h-3.5 w-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
