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
    <div className="rounded-2xl border border-[#1e1e1e] bg-black-card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#0A0A0A] text-[#555555] text-xs uppercase tracking-[3px] font-sans font-medium">
              {showCategory && <th className="text-left px-5 py-3.5 whitespace-nowrap">Category</th>}
              <th className="text-left px-5 py-3.5 whitespace-nowrap">Deliverable</th>
              <th className="text-left px-5 py-3.5 whitespace-nowrap">What&apos;s included</th>
              <th className="text-left px-5 py-3.5 whitespace-nowrap">Turnaround</th>
              <th className="text-left px-5 py-3.5 whitespace-nowrap">India Price</th>
              <th className="text-left px-5 py-3.5 whitespace-nowrap">Intl Price</th>
              <th className="text-right px-5 py-3.5 whitespace-nowrap" />
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr
                key={i}
                className={`border-t border-[#1e1e1e] ${i % 2 === 1 ? 'bg-[#0D0D0D]' : ''} hover:bg-gold/[0.03] transition-colors`}
              >
                {showCategory && hasCategory(r) && (
                  <td className="px-5 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center rounded-full bg-gold/10 text-gold px-2.5 py-0.5 text-[11px] font-medium border border-gold/20">
                      {r.category}
                    </span>
                  </td>
                )}
                <td className="px-5 py-4 font-medium text-[#F0F0F0] whitespace-nowrap">{r.deliverable}</td>
                <td className="px-5 py-4 text-[#555555] min-w-[220px]">{r.includes}</td>
                <td className="px-5 py-4 text-[#F0F0F0]/70 font-mono text-[13px] whitespace-nowrap">{r.turnaround}</td>
                <td className="px-5 py-4 text-[#F0F0F0]/70 whitespace-nowrap">{r.inr}</td>
                <td className="px-5 py-4 text-[#F0F0F0]/70 whitespace-nowrap">{r.intl}</td>
                <td className="px-5 py-4 text-right">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-1.5 rounded-full text-black text-xs font-semibold px-3.5 py-2 btn-primary whitespace-nowrap"
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
