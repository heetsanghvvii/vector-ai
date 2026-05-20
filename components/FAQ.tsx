'use client'

import { useState } from 'react'
import { SmallIcon } from './Icon'
import type { FaqItem } from '@/content/services'

function FAQItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-[#1e1e1e]">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-[17px] font-medium text-[#F0F0F0] pr-4">{q}</span>
        <span
          className={`shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#1e1e1e] text-[#555555] transition-transform duration-300 ${
            open ? 'rotate-45 text-gold border-gold/40 bg-gold/10' : ''
          }`}
        >
          <SmallIcon name="plus" className="h-4 w-4" />
        </span>
      </button>
      <div className={`accordion-grid ${open ? 'open' : ''}`}>
        <div className="overflow-hidden">
          <p className="pb-6 pr-12 text-[15px] text-[#555555] leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  )
}

export function FAQ({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="rounded-2xl border border-[#1e1e1e] bg-black-card px-6 sm:px-8">
      {items.map((f, i) => (
        <FAQItem
          key={i}
          q={f.q}
          a={f.a}
          open={open === i}
          onToggle={() => setOpen(open === i ? -1 : i)}
        />
      ))}
    </div>
  )
}
