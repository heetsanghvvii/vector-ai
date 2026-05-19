import Link from 'next/link'

export function Logo({ className = '' }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2.5 ${className}`}>
      <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg bg-electric/15 ring-1 ring-electric/40">
        <svg viewBox="0 0 24 24" className="h-4 w-4 text-electric" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 4l9 16 9-16" />
          <path d="M8 4l4 7 4-7" opacity=".55" />
        </svg>
      </span>
      <span className="font-semibold tracking-tight text-[17px]">
        Vector <span className="text-electric">AI</span>
      </span>
    </Link>
  )
}
