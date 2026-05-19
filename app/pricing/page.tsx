import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { SmallIcon } from '@/components/Icon'
import { PricingFilter } from '@/components/PricingFilter'
import { CTABanner } from '@/components/CTABanner'
import { BUNDLES } from '@/content/services'

export const metadata: Metadata = {
  title: 'Pricing | Vector AI',
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
            <div className="inline-flex items-center gap-2 rounded-full border border-electric/30 bg-electric/10 px-3 py-1 text-xs font-medium text-electric-200">
              <span className="h-1.5 w-1.5 rounded-full bg-electric" />
              Pricing
            </div>
            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight max-w-4xl mx-auto text-balance">
              Transparent pricing.{' '}
              <span className="text-mute">No surprises.</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-mute leading-relaxed">
              Every deliverable, every price. Pick what you need or bundle for better value.
            </p>
          </div>
        </section>

        {/* Filter bar + table */}
        <section className="py-12 sm:py-16 border-t border-white/5">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <PricingFilter />
          </div>
        </section>

        {/* Bundle & Save */}
        <section className="py-20 sm:py-24 border-t border-white/5 bg-navy-950/40">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="text-xs font-mono uppercase tracking-[0.18em] text-electric">Bundle &amp; Save</div>
              <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">Bigger scopes, better rates.</h2>
              <p className="mt-4 text-mute">
                Mix and match the deliverables you actually need. Save 15–25% over à la carte.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {BUNDLES.map((b) => (
                <div
                  key={b.name}
                  className={`relative rounded-2xl p-7 flex flex-col ${
                    b.featured ? 'bg-navy-800 glow-blue' : 'bg-navy-800/70 border border-white/[0.08]'
                  }`}
                >
                  {b.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-electric px-3 py-1 text-[11px] font-semibold tracking-wide text-white">
                      BEST VALUE
                    </div>
                  )}

                  <h3 className="text-xl font-semibold tracking-tight">{b.name}</h3>
                  <ul className="mt-5 space-y-2.5 text-sm">
                    {b.items.map((it) => (
                      <li key={it} className="flex items-start gap-2.5">
                        <span
                          className={`mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full ${
                            b.featured ? 'bg-electric text-white' : 'bg-white/10 text-electric'
                          }`}
                        >
                          <SmallIcon name="check" className="h-2.5 w-2.5" />
                        </span>
                        <span className="text-white/85">{it}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 pt-6 border-t border-white/[0.08] space-y-3">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs font-mono uppercase tracking-widest text-mute">India</span>
                      <span className="flex items-baseline gap-2">
                        <span className="text-mute line-through text-sm">{b.originalInr}</span>
                        <span className="text-2xl font-semibold text-electric">{b.bundleInr}</span>
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs font-mono uppercase tracking-widest text-mute">International</span>
                      <span className="flex items-baseline gap-2">
                        <span className="text-mute line-through text-sm">{b.originalIntl}</span>
                        <span className="text-2xl font-semibold text-electric">{b.bundleIntl}</span>
                      </span>
                    </div>
                    <div className="text-[12px] text-electric-200 font-medium">
                      Save {b.saveInr} / {b.saveIntl}
                    </div>
                  </div>

                  <Link
                    href="/#contact"
                    className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors ${
                      b.featured
                        ? 'bg-electric hover:bg-electric-600 text-white'
                        : 'border border-white/15 hover:border-white/35 hover:bg-white/5 text-white'
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
