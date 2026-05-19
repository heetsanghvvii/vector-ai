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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const data = SERVICES[slug as ServiceSlug]
  if (!data) return {}
  return {
    title: `${data.name} | Vector AI`,
    description: data.tagline,
    openGraph: {
      title: `${data.name} | Vector AI`,
      description: data.tagline,
    },
  }
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
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
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-sm text-mute hover:text-white transition-colors"
            >
              <SmallIcon name="back" className="h-4 w-4" />
              Back to services
            </Link>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-electric/10 border border-electric/30 px-3 py-1 text-xs font-semibold text-electric-200 tracking-wide">
              {data.badge.toUpperCase()}
            </div>

            <h1 className="mt-5 text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight max-w-4xl text-balance">
              {data.name}
            </h1>
            <p className="mt-5 text-xl sm:text-2xl text-mute max-w-2xl leading-relaxed">{data.tagline}</p>

            <div className="mt-8 flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-mute mr-2">Tools we use</span>
              {data.tools.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full bg-white/5 border border-white/10 px-3 py-1.5 text-xs text-white/85 font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="py-20 sm:py-24 border-t border-white/5">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="flex items-end justify-between gap-6 mb-10">
              <div>
                <div className="text-xs font-mono uppercase tracking-[0.18em] text-electric">01 — What&apos;s included</div>
                <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">Every deliverable, sweated.</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.included.map((it, i) => (
                <div key={i} className="rounded-2xl border border-white/[0.08] bg-navy-800/70 p-6 flex gap-5 card-hover">
                  <div className="shrink-0 h-11 w-11 rounded-xl bg-electric/10 ring-1 ring-electric/30 flex items-center justify-center text-electric">
                    <SmallIcon name={it.icon} className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold tracking-tight">{it.title}</h3>
                    <p className="mt-1.5 text-[14.5px] text-mute leading-relaxed">{it.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing table */}
        <section className="py-20 sm:py-24 border-t border-white/5 bg-navy-950/40">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
              <div>
                <div className="text-xs font-mono uppercase tracking-[0.18em] text-electric">02 — Pricing</div>
                <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">Every deliverable, every price.</h2>
              </div>
              <p className="text-mute max-w-sm">
                Transparent rates. India and international pricing side-by-side. No proposal needed.
              </p>
            </div>
            <PricingTable rows={data.pricing} />
          </div>
        </section>

        {/* How we deliver */}
        <section className="py-20 sm:py-24 border-t border-white/5">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="max-w-2xl mb-12">
              <div className="text-xs font-mono uppercase tracking-[0.18em] text-electric">03 — How we deliver</div>
              <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">Three steps. No fluff.</h2>
            </div>

            <div className="relative">
              <div className="hidden md:block absolute left-0 right-0 top-7 h-px dashed-line" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 relative">
                {data.steps.map((s, i) => (
                  <div key={i} className="flex md:flex-col items-start md:items-center gap-5 md:gap-0 md:text-center">
                    <div className="shrink-0 h-14 w-14 rounded-2xl bg-navy-800 border border-electric/40 flex items-center justify-center font-mono text-electric text-sm glow-soft">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div className="md:mt-6 max-w-xs">
                      <h3 className="text-xl font-semibold tracking-tight">{s.title}</h3>
                      <p className="mt-2 text-[15px] text-mute leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 sm:py-24 border-t border-white/5 bg-navy-950/40">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <div className="text-center mb-12">
              <div className="text-xs font-mono uppercase tracking-[0.18em] text-electric">04 — FAQ</div>
              <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
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
