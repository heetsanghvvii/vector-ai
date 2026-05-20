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
                ? 'btn-primary text-black'
                : 'bg-black-card border border-[#1e1e1e] text-[#555555] hover:text-[#F0F0F0] hover:border-[#333]'
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <PricingTable rows={filtered} showCategory={true} />
      <div className="mt-4 text-xs text-[#555555] font-mono">
        Showing {filtered.length} of {ALL_PRICING_ROWS.length} deliverables.
      </div>
    </>
  )
}
