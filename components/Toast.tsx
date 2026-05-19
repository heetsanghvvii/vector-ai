'use client'

import { useEffect } from 'react'
import { Icon } from './Icon'

interface ToastProps {
  msg: string
  onDone: () => void
}

export function Toast({ msg, onDone }: ToastProps) {
  useEffect(() => {
    const t = setTimeout(onDone, 4200)
    return () => clearTimeout(t)
  }, [msg, onDone])

  return (
    <div className="fixed z-[100] bottom-6 left-1/2 -translate-x-1/2 toast-enter">
      <div className="flex items-center gap-3 rounded-full border border-electric/40 bg-navy-800/95 backdrop-blur-md px-4 py-2.5 glow-soft">
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-electric text-white">
          <Icon name="check" className="h-3.5 w-3.5" />
        </span>
        <span className="text-sm">{msg}</span>
      </div>
    </div>
  )
}
