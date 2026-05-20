'use client'

import { useEffect } from 'react'
import { Icon } from './Icon'

export function Toast({ msg, onDone }: { msg: string; onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 4200)
    return () => clearTimeout(t)
  }, [msg, onDone])

  return (
    <div className="fixed z-[100] bottom-6 left-1/2 -translate-x-1/2 toast-enter">
      <div className="flex items-center gap-3 rounded-full border border-gold/30 bg-black-card backdrop-blur-md px-4 py-2.5 glow-soft">
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-brand-orange to-gold text-black">
          <Icon name="check" className="h-3.5 w-3.5" />
        </span>
        <span className="text-sm text-[#F0F0F0]">{msg}</span>
      </div>
    </div>
  )
}
