import Link from 'next/link'
import { SmallIcon } from './Icon'
import type { PricingRow, PricingRowWithCategory } from '@/content/services'

interface PricingTableProps {
  rows: PricingRow[] | PricingRowWithCategory[]
  showCategory?: boolean
}

function hasCategory(row: PricingRow | PricingRowWithCategory): row is PricingRowWithCategory {
  return 'category' in row
}

export function PricingTable({ rows, showCategory = false }: PricingTableProps) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-navy-800/40 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-navy-850 text-mute text-xs uppercase tracking-wider font-mono">
              {showCategory && <th className="text-left font-medium px-5 py-3.5 whitespace-nowrap">Category</th>}
              <th className="text-left font-medium px-5 py-3.5 whitespace-nowrap">Deliverable</th>
              <th className="text-left font-medium px-5 py-3.5 whitespace-nowrap">What&apos;s included</th>
              <th className="text-left font-medium px-5 py-3.5 whitespace-nowrap">Turnaround</th>
              <th className="text-left font-medium px-5 py-3.5 whitespace-nowrap">India Price</th>
              <th className="text-left font-medium px-5 py-3.5 whitespace-nowrap">Intl Price</th>
              <th className="text-right font-medium px-5 py-3.5 whitespace-nowrap" />
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr
                key={i}
                className={`border-t border-white/5 ${i % 2 === 1 ? 'bg-white/[0.015]' : ''} hover:bg-electric/[0.04] transition-colors`}
              >
                {showCategory && hasCategory(r) && (
                  <td className="px-5 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center rounded-full bg-electric/10 text-electric-200 px-2.5 py-0.5 text-[11px] font-medium border border-electric/20">
                      {r.category}
                    </span>
                  </td>
                )}
                <td className="px-5 py-4 font-medium text-white whitespace-nowrap">{r.deliverable}</td>
                <td className="px-5 py-4 text-mute min-w-[220px]">{r.includes}</td>
                <td className="px-5 py-4 text-white/85 font-mono text-[13px] whitespace-nowrap">{r.turnaround}</td>
                <td className="px-5 py-4 text-white/85 whitespace-nowrap">{r.inr}</td>
                <td className="px-5 py-4 text-white/85 whitespace-nowrap">{r.intl}</td>
                <td className="px-5 py-4 text-right">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-1.5 rounded-full bg-electric hover:bg-electric-600 text-white text-xs font-medium px-3.5 py-2 transition-colors whitespace-nowrap"
                  >
                    Get this <SmallIcon name="arrow" className="h-3 w-3" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
