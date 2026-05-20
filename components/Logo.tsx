import Link from 'next/link'

export function Logo({ className = '' }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-3 ${className}`}>
      {/* Place logo.png in /public/logo.png */}
      <img src="/logo.png" alt="Partha AI" height={36} className="h-9 w-auto" />
      <span
        className="font-sans font-semibold text-[15px] text-[#F0F0F0] tracking-[3px] uppercase"
      >
        PARTHA <span className="text-[#FF6B00]">AI</span>
      </span>
    </Link>
  )
}
