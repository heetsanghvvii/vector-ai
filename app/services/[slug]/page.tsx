import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { SmallIcon } from '@/components/Icon'
import { PricingTable } from '@/components/PricingTable'
import { FAQ } from '@/components/FAQ'
import { CTABanner } from '@/components/CTABanner'
import { SERVICES, SERVICES_ORDER, type ServiceSlug } from '@/content/services'

export function generateStaticParams() {
  return SERVICES_ORDER.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const data = SERVICES[slug as ServiceSlug]
  if (!data) return {}
  return {
    title: `${data.name} | Partha AI`,
    description: data.tagline,
    openGraph: { title: `${data.name} | Partha AI`, description: data.tagline },
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const data = SERVICES[slug as ServiceSlug]
  if (!data) notFound()

  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-28 sm:pt-32 pb-16 sm:pb-20 hero-radial">
          <div className="absolute inset-0 grid-bg opacity-50 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
            <Link href="/#services" className="inline-flex items-center gap-2 text-sm text-[#555555] hover:text-[#F0F0F0] transition-colors">
              <SmallIcon name="back" className="h-4 w-4" />
              Back to services
            </Link>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold/10 border border-gold/20 px-3 py-1 text-xs font-semibold text-gold tracking-[3px] uppercase">
              {data.badge}
            </div>

            <h1 className="mt-5 font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight max-w-4xl text-balance text-[#F0F0F0]">
              {data.name}
            </h1>
            <p className="mt-5 text-xl sm:text-2xl text-[#555555] max-w-2xl leading-relaxed">{data.tagline}</p>

            <div className="mt-8 flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-[3px] text-[#555555] mr-2">Tools we use</span>
              {data.tools.map((t) => (
                <span key={t} className="inline-flex items-center rounded-full bg-black-card border border-[#1e1e1e] px-3 py-1.5 text-xs text-[#F0F0F0]/70 font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="py-20 sm:py-24 border-t border-[#1e1e1e]">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mb-10">
              <div className="text-xs font-sans font-medium uppercase tracking-[3px] text-brand-orange mb-3">01 — What&apos;s included</div>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#F0F0F0]">Every deliverable, sweated.</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.included.map((it, i) => (
                <div key={i} className="rounded-2xl border border-[#1e1e1e] bg-black-card p-6 flex gap-5 card-hover">
                  <div className="shrink-0 h-11 w-11 rounded-xl bg-gold/10 ring-1 ring-gold/20 flex items-center justify-center text-gold">
                    <SmallIcon name={it.icon} className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold tracking-tight text-[#F0F0F0]">{it.title}</h3>
                    <p className="mt-1.5 text-[14.5px] text-[#555555] leading-relaxed">{it.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 sm:py-24 border-t border-[#1e1e1e] bg-[#080808]">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
              <div>
                <div className="text-xs font-sans font-medium uppercase tracking-[3px] text-brand-orange mb-3">02 — Pricing</div>
                <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#F0F0F0]">Every deliverable, every price.</h2>
              </div>
              <p className="text-[#555555] max-w-sm">Transparent rates. India and international pricing side-by-side.</p>
            </div>
            <PricingTable rows={data.pricing} />
          </div>
        </section>

        {/* How we deliver */}
        <section className="py-20 sm:py-24 border-t border-[#1e1e1e]">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="max-w-2xl mb-12">
              <div className="text-xs font-sans font-medium uppercase tracking-[3px] text-brand-orange mb-3">03 — How we deliver</div>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#F0F0F0]">Three steps. No fluff.</h2>
            </div>
            <div className="relative">
              <div className="hidden md:block absolute left-0 right-0 top-7 h-px dashed-line" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 relative">
                {data.steps.map((s, i) => (
                  <div key={i} className="flex md:flex-col items-start md:items-center gap-5 md:gap-0 md:text-center">
                    <div className="shrink-0 h-14 w-14 rounded-2xl bg-black-card border border-gold/30 flex items-center justify-center font-mono text-gold text-sm glow-soft">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div className="md:mt-6 max-w-xs">
                      <h3 className="text-xl font-semibold tracking-tight text-[#F0F0F0]">{s.title}</h3>
                      <p className="mt-2 text-[15px] text-[#555555] leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 sm:py-24 border-t border-[#1e1e1e] bg-[#080808]">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <div className="text-center mb-12">
              <div className="text-xs font-sans font-medium uppercase tracking-[3px] text-brand-orange mb-3">04 — FAQ</div>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#F0F0F0]">
                Common questions, straight answers.
              </h2>
            </div>
            <FAQ items={data.faq} />
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
