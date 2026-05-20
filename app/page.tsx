import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { Icon } from '@/components/Icon'
import { ContactForm } from '@/components/ContactForm'
import { WHATSAPP_URL } from '@/content/services'

export const metadata: Metadata = {
  title: 'Partha AI — Your unfair advantage.',
  description:
    'Partha AI delivers agency-quality AI work in 24–48 hours. Content, research, decks, automation — at a fraction of the cost.',
}

/* ---- Hero ---- */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden hero-radial">
      <div className="absolute inset-0 grid-bg opacity-60 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-36 pb-24 sm:pt-44 sm:pb-32">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-xs font-medium text-gold">
            <span className="relative inline-flex">
              <span className="absolute inline-flex h-2 w-2 rounded-full bg-brand-orange opacity-60 pulse-dot" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-orange" />
            </span>
            Now booking projects for Q3 2026
          </div>

          <h1 className="mt-6 font-display text-[44px] leading-[1.05] sm:text-6xl lg:text-7xl font-semibold tracking-tight text-balance">
            Your AI team.
            <br />
            <span className="gradient-text">Your unfair advantage.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-[#555555] leading-relaxed">
            We use Claude, ChatGPT, Gemini &amp; NotebookLM to deliver agency-quality
            content, research, decks, and automation — in 24–48 hours.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm btn-primary"
            >
              Book a Call →
            </Link>
            <Link
              href="/#services"
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm btn-outline"
            >
              Explore Services
            </Link>
          </div>

          {/* Locale pills */}
          <div className="mt-10 flex items-center gap-3 text-xs font-mono text-[#555555]">
            {['INDIA', 'USA', 'EUROPE'].map((l) => (
              <span key={l} className="inline-flex items-center gap-2 rounded-full border border-[#1e1e1e] bg-black-card px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
                {l}
              </span>
            ))}
          </div>
        </div>

        {/* Floating model chips — desktop only */}
        <div className="hidden lg:flex flex-col gap-3 absolute right-8 top-44 w-72">
          {[
            { k: 'Claude',     v: 'Long-form writing & analysis' },
            { k: 'ChatGPT',    v: 'Ops, code, structured output' },
            { k: 'Gemini',     v: 'Multimodal research' },
            { k: 'NotebookLM', v: 'Source-grounded briefs' },
          ].map((m, i) => (
            <div
              key={m.k}
              className="rounded-xl border border-[#1e1e1e] bg-black-card/80 backdrop-blur-sm px-4 py-3 glow-soft"
              style={{ transform: `translateX(${i % 2 ? -8 : 8}px)` }}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-[#F0F0F0]">{m.k}</span>
                <Icon name="spark" className="h-3.5 w-3.5 text-gold" />
              </div>
              <div className="text-xs text-[#555555] mt-0.5">{m.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---- Social Proof ---- */
function SocialProof() {
  const cities = ['Mumbai', 'New York', 'London', 'Berlin', 'Dubai']
  return (
    <section className="border-y border-[#1e1e1e] bg-[#080808]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
          <p className="text-xs font-sans font-medium uppercase tracking-[3px] text-[#555555] shrink-0">
            Trusted by businesses in
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {cities.map((c) => (
              <div key={c} className="flex items-center gap-2">
                <Icon name="globe" className="h-4 w-4 text-brand-orange/80" />
                <span className="text-[15px] font-medium text-[#F0F0F0]/70">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---- Services ---- */
const SERVICE_CARDS = [
  { slug: 'content-copywriting',   icon: 'content',  title: 'Content & Copywriting',  desc: 'Website copy, blogs, email sequences, social calendars — written to convert, not to fill space.' },
  { slug: 'research-intelligence', icon: 'research', title: 'Research & Intelligence', desc: 'Market reports, competitor analysis, document analysis with sources you can verify.' },
  { slug: 'creative-visual',       icon: 'creative', title: 'Creative & Visual',       desc: 'Brochures, pitch decks, brand naming, social templates — investor-ready in days.' },
  { slug: 'business-operations',   icon: 'ops',      title: 'Business Operations',     desc: 'SOPs, HR docs, meeting summaries, support templates — your back office, sharpened.' },
  { slug: 'data-analysis',         icon: 'data',     title: 'Data & Analysis',         desc: 'Survey analysis, Sheets automation, financial models — answers from your messiest data.' },
  { slug: 'chatbots-automation',   icon: 'bot',      title: 'Chatbots & Automation',   desc: 'WhatsApp bots, website chatbots, Instagram DM automation, custom AI assistants.' },
]

function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="text-xs font-sans font-medium uppercase tracking-[3px] text-brand-orange mb-3">01 — Services</div>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight max-w-2xl text-[#F0F0F0]">
              Six practices. One AI-native team.
            </h2>
          </div>
          <p className="text-[#555555] max-w-md">
            Every engagement is run by humans who use frontier models as a lever — not a crutch.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICE_CARDS.map((it) => (
            <div key={it.slug} className="card-hover group rounded-2xl border border-[#1e1e1e] bg-black-card p-6 sm:p-7 flex flex-col">
              <div className="h-11 w-11 rounded-xl bg-gold/10 ring-1 ring-gold/20 flex items-center justify-center text-gold mb-5">
                <Icon name={it.icon} className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-[#F0F0F0]">{it.title}</h3>
              <p className="mt-2 text-[15px] text-[#555555] leading-relaxed">{it.desc}</p>
              <Link
                href={`/services/${it.slug}`}
                className="mt-6 inline-flex items-center gap-1.5 text-sm text-gold/60 group-hover:text-gold transition-colors"
              >
                Explore <Icon name="arrow" className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---- How It Works ---- */
const HOW_STEPS = [
  { n: '01', title: 'Brief us',    desc: 'A 20-minute call or a WhatsApp message. Tell us the outcome you need.' },
  { n: '02', title: 'We build it', desc: 'Our team pairs with Claude, ChatGPT, Gemini & NotebookLM to draft, refine, and ship.' },
  { n: '03', title: 'You grow',    desc: 'Receive deliverables in 24–48 hours. Iterate fast, or put us on retainer.' },
]

function HowItWorks() {
  return (
    <section className="py-24 sm:py-32 bg-[#080808] border-y border-[#1e1e1e]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-sans font-medium uppercase tracking-[3px] text-brand-orange mb-3">02 — How it works</div>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-[#F0F0F0]">
            From brief to live in 48 hours.
          </h2>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-0 right-0 top-7 h-px dashed-line" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 relative">
            {HOW_STEPS.map((s) => (
              <div key={s.n} className="flex md:flex-col items-start md:items-center gap-5 md:gap-0 md:text-center">
                <div className="shrink-0 h-14 w-14 rounded-2xl bg-black-card border border-gold/30 flex items-center justify-center font-mono text-gold text-sm relative z-10 glow-soft">
                  {s.n}
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
  )
}

/* ---- Pricing Tiers ---- */
const TIERS = [
  {
    name: 'Starter',
    price: '₹2,000 – ₹10,000',
    cadence: 'per project',
    blurb: 'One-off deliverables. Perfect for testing the waters.',
    features: ['Single-scope deliverable', 'Turnaround in 24–48 hrs', 'One round of revisions', 'WhatsApp + email support'],
    cta: 'Start a project',
    featured: false,
  },
  {
    name: 'Retainer',
    price: '₹15,000 – ₹40,000',
    cadence: 'per month',
    blurb: 'Ongoing AI work for teams that ship every week.',
    features: ['Dedicated AI strategist', 'Unlimited briefs in scope', 'Priority 24-hr turnaround', 'Monthly performance review'],
    cta: 'Book a Call',
    featured: true,
  },
  {
    name: 'International',
    price: '$200 – $800',
    cadence: 'per month',
    blurb: 'For US & Europe clients. Billed in USD, delivered in your timezone.',
    features: ['Timezone-aligned standups', 'USD or EUR invoicing', 'NDA & DPA on request', 'Slack / Notion collaboration'],
    cta: 'Talk to us',
    featured: false,
  },
]

function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-sans font-medium uppercase tracking-[3px] text-brand-orange mb-3">03 — Pricing</div>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-[#F0F0F0]">Simple pricing. No agency markup.</h2>
          <p className="mt-4 text-[#555555]">Pay per project, or put us on retainer. Cancel anytime.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl p-7 flex flex-col ${
                t.featured ? 'bg-black-card glow-gold' : 'bg-black-card border border-[#1e1e1e]'
              }`}
            >
              {t.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide text-black btn-primary">
                  <Icon name="zap" className="h-3 w-3" />
                  MOST POPULAR
                </div>
              )}
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold tracking-tight text-[#F0F0F0]">{t.name}</h3>
                {t.featured && <span className="text-[11px] font-mono text-gold">RETAINER</span>}
              </div>
              <div className="mt-5">
                <span className="font-display text-3xl font-semibold tracking-tight text-[#F0F0F0]">{t.price}</span>
              </div>
              <div className="text-sm text-[#555555] mt-1">{t.cadence}</div>
              <p className="mt-4 text-[15px] text-[#555555]">{t.blurb}</p>
              <ul className="mt-6 space-y-3 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span className={`mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full ${t.featured ? 'bg-gradient-to-r from-brand-orange to-gold text-black' : 'bg-gold/10 text-gold'}`}>
                      <Icon name="check" className="h-2.5 w-2.5" />
                    </span>
                    <span className="text-[#F0F0F0]/70">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/#contact"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors ${
                  t.featured ? 'btn-primary' : 'btn-outline'
                }`}
              >
                {t.cta}
                <Icon name="arrow" className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---- Why Partha AI ---- */
const WHY_ITEMS = [
  { stat: '4 models',    statLabel: 'used in every project', title: 'AI-native, not AI-curious',      desc: 'We were built on frontier models from day one. While other agencies bolt on AI, we work inside it.' },
  { stat: '36 hrs',      statLabel: 'median turnaround',     title: 'Delivered in 24–48 hrs',          desc: 'Briefs in by morning ship by next standup. No three-week timelines for a landing page.' },
  { stat: '3 continents',statLabel: 'served, one team',      title: 'India-built, globally trusted',   desc: 'Headquartered in Mumbai with clients across the US and Europe. INR rates, global standards.' },
]

function Why() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#080808] border-y border-[#1e1e1e]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-sans font-medium uppercase tracking-[3px] text-brand-orange mb-3">04 — Why Partha AI</div>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-[#F0F0F0]">Built different. On purpose.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {WHY_ITEMS.map((it) => (
            <div key={it.title} className="rounded-2xl border border-[#1e1e1e] bg-black-card p-7">
              <div className="flex items-baseline gap-3">
                <div className="font-display text-4xl font-semibold tracking-tight gradient-text">{it.stat}</div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#555555]">{it.statLabel}</div>
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-[#F0F0F0]">{it.title}</h3>
              <p className="mt-2 text-[15px] text-[#555555] leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---- Contact ---- */
function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <div className="text-xs font-sans font-medium uppercase tracking-[3px] text-brand-orange mb-3">05 — Contact</div>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-[#F0F0F0]">
              Let&apos;s build the future together.
            </h2>
            <p className="mt-5 text-[#555555] text-lg max-w-md leading-relaxed">
              Have a project in mind? We&apos;ll reply within 24 hours with a free audit and a quote.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a href={WHATSAPP_URL} className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm btn-primary">
                <Icon name="whatsapp" className="h-4 w-4" />
                Chat on WhatsApp
              </a>
              <a href="mailto:hello@partha.ai" className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm btn-outline">
                <Icon name="mail" className="h-4 w-4 text-gold" />
                hello@partha.ai
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              {[
                { l: 'Mumbai',   s: 'IST · 09:00 – 19:00' },
                { l: 'New York', s: 'EST · async' },
                { l: 'Berlin',   s: 'CET · async' },
              ].map((p) => (
                <div key={p.l} className="rounded-xl border border-[#1e1e1e] bg-black-card p-3">
                  <div className="text-sm font-medium text-[#F0F0F0]">{p.l}</div>
                  <div className="text-[11px] text-[#555555] font-mono mt-0.5">{p.s}</div>
                </div>
              ))}
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  )
}

/* ---- Page ---- */
export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <HowItWorks />
        <Pricing />
        <Why />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
