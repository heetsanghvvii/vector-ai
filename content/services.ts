export type IconKey = 'doc' | 'pen' | 'mail' | 'calendar' | 'tag' | 'chat' | 'video' | 'book' | 'chart'

export interface Included {
  icon: IconKey
  title: string
  desc: string
}

export interface PricingRow {
  deliverable: string
  includes: string
  turnaround: string
  inr: string
  intl: string
}

export interface Step {
  title: string
  desc: string
}

export interface FaqItem {
  q: string
  a: string
}

export interface ServiceData {
  name: string
  tagline: string
  badge: string
  iconKey: string
  tools: string[]
  included: Included[]
  pricing: PricingRow[]
  steps: Step[]
  faq: FaqItem[]
}

export type ServiceSlug =
  | 'content-copywriting'
  | 'research-intelligence'
  | 'creative-visual'
  | 'business-operations'
  | 'data-analysis'
  | 'chatbots-automation'

export const SERVICES_ORDER: ServiceSlug[] = [
  'content-copywriting',
  'research-intelligence',
  'creative-visual',
  'business-operations',
  'data-analysis',
  'chatbots-automation',
]

export const SERVICES: Record<ServiceSlug, ServiceData> = {
  'content-copywriting': {
    name: 'Content & Copywriting',
    tagline: 'Words that work as hard as you do.',
    badge: 'Content',
    iconKey: 'content',
    tools: ['Claude', 'ChatGPT', 'Gemini', 'Canva AI'],
    included: [
      { icon: 'doc',      title: 'Website Copy',          desc: 'Full homepage, about, services, contact. SEO meta included. Conversion-focused structure.' },
      { icon: 'pen',      title: 'Blog Articles',          desc: '1,000–1,500 words. Keyword-researched. Google-ready. Bulk pricing available.' },
      { icon: 'mail',     title: 'Email Sequences',        desc: 'Welcome flows, drip campaigns, sales sequences. 5–10 emails with subject lines.' },
      { icon: 'calendar', title: 'Social Media Calendar',  desc: '30 posts/month. Captions, hooks, hashtags for Instagram, LinkedIn, Twitter.' },
      { icon: 'tag',      title: 'Product Descriptions',   desc: 'Bulk ecommerce copy. Tone-matched. 50–500 products.' },
      { icon: 'chat',     title: 'WhatsApp & DM Scripts',  desc: 'Cold outreach, follow-ups, broadcast templates. High open-rate language.' },
      { icon: 'video',    title: 'Video & Reel Scripts',   desc: 'Hook + body + CTA format. 30–90 seconds. Bulk friendly.' },
      { icon: 'book',     title: 'Brand Voice Guide',      desc: "Full tone-of-voice document. Vocabulary, do's and don'ts, examples." },
    ],
    pricing: [
      { deliverable: 'Website Copy',         includes: 'Full site, 4 pages + SEO meta',     turnaround: '48 hrs',   inr: '₹4,000–₹8,000',  intl: '$100–$200' },
      { deliverable: 'Blog Article',          includes: '1,000–1,500 words, sourced',        turnaround: '12 hrs',   inr: '₹1,500/article', intl: '$30/article' },
      { deliverable: 'Email Sequence',        includes: '5–10 emails + subject lines',       turnaround: '24 hrs',   inr: '₹3,000–₹6,000',  intl: '$80–$150' },
      { deliverable: 'Social Calendar',       includes: '30 posts + captions + hashtags',    turnaround: '48 hrs',   inr: '₹5,000/mo',      intl: '$120/mo' },
      { deliverable: 'Product Descriptions',  includes: 'Per product, bulk pricing',         turnaround: '6–24 hrs', inr: '₹100/product',   intl: '$2.50/product' },
      { deliverable: 'WhatsApp Scripts',      includes: 'Outreach + follow-up set',          turnaround: '12 hrs',   inr: '₹2,000–₹4,000',  intl: '$60–$100' },
      { deliverable: 'Reel Scripts',          includes: 'Per script, hook+body+CTA',         turnaround: '6 hrs',    inr: '₹500–₹1,000',    intl: '$15/script' },
      { deliverable: 'Brand Voice Guide',     includes: 'Full tone document',                turnaround: '48 hrs',   inr: '₹5,000–₹10,000', intl: '$150–$250' },
    ],
    steps: [
      { title: 'Brief us',          desc: 'Share your brand, audience, goals via a 10-minute form.' },
      { title: 'We write & review', desc: 'AI drafts, human-reviewed for tone and quality.' },
      { title: 'You publish',       desc: 'Delivered in 24–48 hrs. One revision round included.' },
    ],
    faq: [
      { q: 'Will it sound like AI wrote it?',     a: "No. Everything is prompted with your brand voice and reviewed before delivery. Clients say it sounds more like them than what they'd write themselves." },
      { q: 'Can you match our existing tone?',    a: 'Yes — send us 3–5 content samples you love and we replicate the style precisely.' },
      { q: 'How many revisions are included?',    a: 'One full revision round. Additional revisions at ₹500 each.' },
      { q: 'Can you write in Hindi or Hinglish?', a: 'Yes. Regional language support also available on request.' },
      { q: 'Do you need a briefing call?',        a: 'No. Our form captures everything. Most projects start within 2 hours of submission.' },
    ],
  },

  'research-intelligence': {
    name: 'Research & Intelligence',
    tagline: 'Know your market before your competitors do.',
    badge: 'Research',
    iconKey: 'research',
    tools: ['NotebookLM', 'Perplexity', 'Claude', 'ChatGPT'],
    included: [
      { icon: 'doc',  title: 'Market Research Report',       desc: '10–20 page PDF. Industry size, trends, key players, opportunities. Executive summary included.' },
      { icon: 'chart',title: 'Competitor Analysis',          desc: '5–10 competitors. Pricing, positioning, strengths, gaps. Teardown format.' },
      { icon: 'pen',  title: 'Document Analysis',            desc: 'Contracts, reports, PDFs — key insights, red flags, and summaries extracted in hours.' },
      { icon: 'chat', title: 'Customer Interview Synthesis', desc: 'Upload 10–20 transcripts. Get themes, patterns, quotes, recommendations.' },
      { icon: 'tag',  title: 'Trend Report',                 desc: "What's happening in your industry right now. Sources, data points, business implications." },
      { icon: 'book', title: 'Due Diligence Pack',           desc: 'For investors and partners. Company background, financials, news, risk factors.' },
    ],
    pricing: [
      { deliverable: 'Market Research Report', includes: '10–20 page PDF + exec summary', turnaround: '48 hrs',    inr: '₹7,500–₹15,000', intl: '$200–$400' },
      { deliverable: 'Competitor Analysis',    includes: '5–10 competitors, teardown',    turnaround: '48 hrs',    inr: '₹5,000–₹10,000', intl: '$150–$300' },
      { deliverable: 'Document Analysis',      includes: 'Contracts/reports/PDFs',        turnaround: '12–24 hrs', inr: '₹3,000–₹8,000',  intl: '$80–$200' },
      { deliverable: 'Interview Synthesis',    includes: 'Up to 20 transcripts',          turnaround: '24 hrs',    inr: '₹4,000–₹7,000',  intl: '$120–$200' },
      { deliverable: 'Trend Report',           includes: 'Industry trends + implications', turnaround: '48 hrs',   inr: '₹5,000–₹12,000', intl: '$150–$350' },
      { deliverable: 'Due Diligence Pack',     includes: 'Full company research pack',    turnaround: '3–5 days',  inr: '₹10,000–₹25,000', intl: '$300–$700' },
    ],
    steps: [
      { title: 'Share your brief',         desc: 'Tell us what decisions this research needs to support.' },
      { title: 'We research & synthesise', desc: 'Multi-source research using AI + verified databases.' },
      { title: 'You decide faster',        desc: 'Clean PDF with executive summary, findings, and recommendations.' },
    ],
    faq: [
      { q: 'How accurate is AI research?',                a: 'We cross-verify all key data points across multiple sources. Every claim is sourced. Uncertainty is flagged clearly.' },
      { q: 'Can you research niche industries?',          a: 'Yes. If data exists publicly, we find and synthesise it.' },
      { q: 'What format are reports delivered in?',       a: 'PDF with executive summary + editable Google Docs version.' },
      { q: 'Can you analyse confidential documents?',     a: 'Yes. Private, non-training AI sessions. Files deleted after delivery.' },
      { q: 'How is this different from a Google search?', a: 'We synthesise 50–100 sources, extract what is relevant to your specific question, and deliver it in a format you can act on — in hours.' },
    ],
  },

  'creative-visual': {
    name: 'Creative & Visual',
    tagline: 'Designs that close deals.',
    badge: 'Creative',
    iconKey: 'creative',
    tools: ['Claude', 'ChatGPT', 'Canva AI', 'Gemini'],
    included: [
      { icon: 'doc',      title: 'Brochures & One-Pagers',     desc: 'Print and digital ready. Copy + design. Tri-fold, bifold, A4. PDF + editable Canva file.' },
      { icon: 'chart',    title: 'Pitch Decks',                desc: '10–15 slides. Investor-ready narrative + design. Data visualisation included.' },
      { icon: 'pen',      title: 'Brand Naming & Taglines',    desc: '10+ name options, rationale, availability check, tagline variations.' },
      { icon: 'calendar', title: 'Social Media Templates',     desc: '5–10 reusable Canva templates. On-brand, all platform sizes.' },
      { icon: 'book',     title: 'Case Studies',               desc: 'Problem → solution → result. Designed for sales teams. PDF + web format.' },
      { icon: 'tag',      title: 'Brand Voice & Visual Guide', desc: "Colors, fonts, tone, logo usage, do's and don'ts." },
    ],
    pricing: [
      { deliverable: 'Brochure / One-Pager', includes: 'Copy + design, PDF + Canva',      turnaround: '24 hrs',    inr: '₹2,500–₹5,000',  intl: '$70–$130' },
      { deliverable: 'Pitch Deck',           includes: '10–15 slides, investor-ready',    turnaround: '48–72 hrs', inr: '₹8,000–₹20,000', intl: '$200–$500' },
      { deliverable: 'Brand Naming',         includes: '10+ names + rationale + check',   turnaround: '24 hrs',    inr: '₹3,000–₹6,000',  intl: '$80–$150' },
      { deliverable: 'Social Templates',     includes: '5–10 Canva templates',            turnaround: '24–48 hrs', inr: '₹3,000–₹6,000',  intl: '$80–$150' },
      { deliverable: 'Case Study',           includes: 'PDF + web format',                turnaround: '24 hrs',    inr: '₹3,000–₹6,000',  intl: '$80–$150' },
      { deliverable: 'Brand Guide',          includes: 'Full visual + voice document',    turnaround: '48 hrs',    inr: '₹5,000–₹10,000', intl: '$150–$250' },
    ],
    steps: [
      { title: 'Share brief & assets',   desc: 'Logo, colors, audience, purpose of the asset.' },
      { title: 'We design & write',      desc: 'Copy and design produced together for coherence.' },
      { title: 'You receive ready files', desc: 'PDF, Canva, and web-optimised versions delivered.' },
    ],
    faq: [
      { q: 'Do you need our brand guidelines?',          a: 'If you have them, great. If not, we derive a style from your existing materials.' },
      { q: 'Can you redesign an existing deck?',         a: 'Yes. Send your current deck and brief — we redesign and rewrite from scratch.' },
      { q: 'What file formats do you deliver?',          a: 'PDF (print-ready), Canva (editable), PNG (web), PowerPoint on request.' },
      { q: 'How many design concepts do you provide?',   a: 'One direction executed fully, with one revision round. Keeps turnaround fast.' },
      { q: "Can you match a competitor's design style?", a: 'We match the aesthetic (clean, bold, minimal) without copying specific brand identities.' },
    ],
  },

  'business-operations': {
    name: 'Business Operations',
    tagline: 'Run tighter. Scale faster.',
    badge: 'Operations',
    iconKey: 'ops',
    tools: ['Claude', 'ChatGPT', 'NotebookLM', 'Gemini'],
    included: [
      { icon: 'doc',  title: 'SOPs',                      desc: '5–10 processes documented. Step-by-step, with decision trees, roles, and tools. Team-ready.' },
      { icon: 'book', title: 'HR Policy Documents',       desc: 'Leave policy, code of conduct, onboarding guide, performance review framework.' },
      { icon: 'tag',  title: 'Job Descriptions',          desc: 'Clear, structured, ready to post on LinkedIn or Naukri. Culture fit signals included.' },
      { icon: 'pen',  title: 'Meeting Summaries',         desc: 'Upload any transcript. Receive decisions, action items, owners, deadlines. Same day.' },
      { icon: 'chat', title: 'Customer Support Templates', desc: '50–100 response templates for queries, complaints, escalations. Brand-matched.' },
      { icon: 'chart',title: 'Business Plans',            desc: 'Executive summary to full plan. Market context, financials, strategy. Investor-ready.' },
    ],
    pricing: [
      { deliverable: 'SOP Writing',       includes: '5–10 processes + decision trees',      turnaround: '24–48 hrs', inr: '₹3,000–₹8,000',  intl: '$80–$200' },
      { deliverable: 'HR Policy Docs',    includes: 'Leave, conduct, onboarding, review',   turnaround: '48 hrs',    inr: '₹5,000–₹12,000', intl: '$150–$300' },
      { deliverable: 'Job Description',   includes: 'Per JD, ready to post',                turnaround: '6 hrs',     inr: '₹1,000–₹1,500/JD', intl: '$25–$40/JD' },
      { deliverable: 'Meeting Summary',   includes: 'Per transcript/recording',             turnaround: '2 hrs',     inr: '₹500–₹1,000',    intl: '$15–$25' },
      { deliverable: 'Support Templates', includes: '50–100 response templates',            turnaround: '24 hrs',    inr: '₹3,000–₹6,000',  intl: '$80–$150' },
      { deliverable: 'Business Plan',     includes: 'Executive summary to full plan',       turnaround: '3–5 days',  inr: '₹10,000–₹20,000', intl: '$300–$500' },
    ],
    steps: [
      { title: 'Tell us how you operate',     desc: 'Share current processes, team structure, pain points.' },
      { title: 'We document & structure',     desc: 'AI-assisted, reviewed for clarity and completeness.' },
      { title: 'You receive team-ready docs', desc: 'Google Docs + PDF. Editable, shareable, immediately usable.' },
    ],
    faq: [
      { q: 'Are your HR documents legally compliant?',          a: 'Written to Indian labour law best practices. Recommend one-time legal review for critical policies.' },
      { q: "Can you document processes you haven't seen?",      a: "Yes — we interview you via form and reconstruct the process accurately." },
      { q: 'What format are SOPs delivered in?',                a: 'Google Docs (editable), PDF (final), Notion template on request.' },
      { q: 'Can you handle confidential business information?', a: 'Yes. Private AI sessions. NDAs available on request.' },
      { q: 'How detailed are the SOPs?',                        a: 'Every decision point, tool, and responsible role covered. Nothing left to interpretation.' },
    ],
  },

  'data-analysis': {
    name: 'Data & Analysis',
    tagline: 'Your data is telling you something. We translate it.',
    badge: 'Data',
    iconKey: 'data',
    tools: ['ChatGPT', 'Gemini', 'Google Sheets AI', 'Looker Studio'],
    included: [
      { icon: 'chart', title: 'Survey & Form Analysis',   desc: 'Raw responses from Typeform, Google Forms, Excel → themes, charts, findings, recommendations.' },
      { icon: 'doc',   title: 'Google Sheets Automation', desc: 'AI-powered formulas, pivot tables, dashboards, Apps Script. Eliminates manual work.' },
      { icon: 'tag',   title: 'Sales & Ops Dashboard',    desc: 'Looker Studio dashboard, live data, visual KPIs, shareable with your team.' },
      { icon: 'book',  title: 'Financial Model',          desc: 'Revenue projections, P&L, unit economics, break-even. Editable Excel/Sheets. Investor-ready.' },
      { icon: 'pen',   title: 'Data Cleaning',            desc: 'Messy CSVs, duplicates, inconsistent formats — cleaned, structured, ready to use.' },
    ],
    pricing: [
      { deliverable: 'Survey Analysis',   includes: 'Themes, charts, recommendations', turnaround: '24 hrs',    inr: '₹4,000–₹8,000',  intl: '$100–$200' },
      { deliverable: 'Sheets Automation', includes: 'Formulas, dashboards, scripts',   turnaround: '24–48 hrs', inr: '₹3,000–₹7,000',  intl: '$80–$180' },
      { deliverable: 'Sales Dashboard',   includes: 'Looker Studio, live data',        turnaround: '48–72 hrs', inr: '₹5,000–₹12,000', intl: '$150–$300' },
      { deliverable: 'Financial Model',   includes: 'P&L, projections, unit economics', turnaround: '48–72 hrs',inr: '₹8,000–₹18,000', intl: '$200–$450' },
      { deliverable: 'Data Cleaning',     includes: 'CSVs/sheets structured',          turnaround: '24 hrs',    inr: '₹2,000–₹5,000',  intl: '$60–$130' },
    ],
    steps: [
      { title: 'Share your data',          desc: 'Upload files or connect your sheet. Tell us the question to answer.' },
      { title: 'We analyse & build',       desc: 'Models, dashboards, insights built on your actual numbers.' },
      { title: 'You decide with confidence', desc: 'Delivered with a plain-English explanation of what it means.' },
    ],
    faq: [
      { q: 'Do I need to know Excel to use the dashboards?', a: 'No. Built so anyone can read them. 5-minute walkthrough video included.' },
      { q: 'Can you work with our existing Google Sheets?',  a: 'Yes. Share access and we build on what you already have.' },
      { q: 'How accurate are the financial models?',         a: 'As accurate as your inputs. We build the structure — you provide business assumptions. We guide you through what to use.' },
      { q: 'Can you handle bilingual forms?',                a: 'Yes — we handle bilingual data and translate before analysis.' },
      { q: 'Is my data confidential?',                       a: 'Yes. Private sessions, never stored, deleted after delivery.' },
    ],
  },

  'chatbots-automation': {
    name: 'Chatbots & Automation',
    tagline: 'Your business, working 24/7 without you.',
    badge: 'Automation',
    iconKey: 'bot',
    tools: ['Claude API', 'Voiceflow', 'ManyChat', 'Interakt', 'Make.com', 'Zapier'],
    included: [
      { icon: 'chat', title: 'WhatsApp Business Chatbot', desc: 'Automated responses, lead qualification, order updates, FAQs. Handles 80% of incoming messages. Built on Interakt or Wati.' },
      { icon: 'doc',  title: 'Website Chatbot',           desc: 'Lead gen + FAQ bot embedded on your site. Trained on your content. Hands off to human when needed. Built on Voiceflow or Botpress.' },
      { icon: 'tag',  title: 'Instagram DM Automation',   desc: 'Auto-reply to story mentions, DM keywords, new followers. Lead capture built in. Built on ManyChat.' },
      { icon: 'book', title: 'Custom AI Assistant',       desc: 'Trained on your docs, FAQs, product catalogue, tone of voice. Deployed on website, WhatsApp, or internal tool. Powered by Claude API.' },
      { icon: 'chart',title: 'Automation Workflows',      desc: 'Connect your tools. Form → WhatsApp → Sheet → email. Zero manual steps. Built on Make.com or Zapier.' },
    ],
    pricing: [
      { deliverable: 'WhatsApp Chatbot',        includes: 'Setup + training + 30-day support', turnaround: '3–5 days',  inr: '₹8,000–₹20,000',  intl: '$200–$500' },
      { deliverable: 'Website Chatbot',         includes: 'Lead gen + FAQ, embedded',          turnaround: '5–7 days',  inr: '₹10,000–₹25,000', intl: '$250–$600' },
      { deliverable: 'Instagram DM Automation', includes: 'ManyChat setup + flows',            turnaround: '3–5 days',  inr: '₹5,000–₹15,000',  intl: '$150–$400' },
      { deliverable: 'Custom AI Assistant',     includes: 'Trained on docs, deployed',         turnaround: '1–2 weeks', inr: '₹15,000–₹40,000', intl: '$400–$1,000' },
      { deliverable: 'Automation Workflows',    includes: 'Make.com/Zapier multi-step',        turnaround: '3–5 days',  inr: '₹5,000–₹15,000',  intl: '$150–$400' },
    ],
    steps: [
      { title: 'Map your workflow',      desc: 'We identify exactly where automation saves the most time and money.' },
      { title: 'We build & train',       desc: 'Bot built, trained on your content, tested before handover.' },
      { title: 'You get a 24/7 system',  desc: 'Full handover with docs. First month of issues handled free.' },
    ],
    faq: [
      { q: 'Do I need technical knowledge to manage it after handover?', a: 'No. Simple dashboard to update responses and view conversations. No code needed.' },
      { q: "What happens when the bot can't answer?",                    a: 'Escalates to a human seamlessly. You set the trigger.' },
      { q: 'How long does setup take?',                                  a: 'WhatsApp bots: 3–5 days. Custom AI assistants: 1–2 weeks. Full suites: 2–3 weeks.' },
      { q: 'Can the bot handle payments?',                               a: 'Yes — Razorpay (India) or Stripe (international) integration available.' },
      { q: 'What if I want to change responses later?',                  a: 'Full access given. Monthly maintenance retainer at ₹3,000/mo available.' },
    ],
  },
}

export interface Bundle {
  name: string
  items: string[]
  originalInr: string
  bundleInr: string
  saveInr: string
  originalIntl: string
  bundleIntl: string
  saveIntl: string
  featured?: boolean
}

export const BUNDLES: Bundle[] = [
  {
    name: 'Starter Bundle',
    items: ['Website copy (4 pages)', '2 blog articles', '1 month social calendar'],
    originalInr: '₹15,000',
    bundleInr: '₹12,000',
    saveInr: '₹3,000',
    originalIntl: '$370',
    bundleIntl: '$300',
    saveIntl: '$70',
  },
  {
    name: 'Growth Bundle',
    items: ['Market research report', 'Competitor analysis', 'Investor pitch deck'],
    originalInr: '₹30,500',
    bundleInr: '₹25,000',
    saveInr: '₹5,500',
    originalIntl: '$800',
    bundleIntl: '$650',
    saveIntl: '$150',
    featured: true,
  },
  {
    name: 'Full Stack Bundle',
    items: ['Content retainer', 'Chatbot setup', 'Monthly dashboard'],
    originalInr: '₹53,000/mo',
    bundleInr: '₹45,000/mo',
    saveInr: '₹8,000',
    originalIntl: '$1,300/mo',
    bundleIntl: '$1,100/mo',
    saveIntl: '$200',
  },
]

export const CATEGORY_FILTERS = ['All', 'Content', 'Research', 'Creative', 'Operations', 'Data', 'Chatbots'] as const
export type CategoryFilter = typeof CATEGORY_FILTERS[number]

export const CATEGORY_BY_SLUG: Record<ServiceSlug, string> = {
  'content-copywriting':   'Content',
  'research-intelligence': 'Research',
  'creative-visual':       'Creative',
  'business-operations':   'Operations',
  'data-analysis':         'Data',
  'chatbots-automation':   'Chatbots',
}

export interface PricingRowWithCategory extends PricingRow {
  category: string
}

export const ALL_PRICING_ROWS: PricingRowWithCategory[] = SERVICES_ORDER.flatMap((slug) => {
  const cat = CATEGORY_BY_SLUG[slug]
  return SERVICES[slug].pricing.map((r) => ({ ...r, category: cat }))
})

export const WHATSAPP_URL = 'https://wa.me/918879955291'
