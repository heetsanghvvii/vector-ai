import type { MetadataRoute } from 'next'
import { SERVICES_ORDER } from '@/content/services'

const BASE = 'https://vectorai.co'

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceUrls = SERVICES_ORDER.map((slug) => ({
    url: `${BASE}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    { url: BASE, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/pricing`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    ...serviceUrls,
  ]
}
