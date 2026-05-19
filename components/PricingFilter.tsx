'use client'

import { useState } from 'react'
import { PricingTable } from './PricingTable'
import { CATEGORY_FILTERS, ALL_PRICING_ROWS, type CategoryFilter } from '@/content/services'

export function PricingFilter() {
  const [filter, setFilter] = useState<CategoryFilter>('All')

  const filtered =
    filter === 'All' ? ALL_PRICING_ROWS : ALL_PRICING_ROWS.filter((r) => r.category === filter)

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-8">
        {CATEGORY_FILTERS.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              filter === c
                ? 'bg-electric text-white'
                : 'bg-white/5 border border-white/10 text-mute hover:text-white hover:border-white/25'
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <PricingTable rows={filtered} showCategory={true} />
      <div className="mt-4 text-xs text-mute font-mono">
        Showing {filtered.length} of {ALL_PRICING_ROWS.length} deliverables.
      </div>
    </>
  )
}
