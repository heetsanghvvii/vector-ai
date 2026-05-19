// Service-area icons (larger, used in nav cards and hero chips)
const common = { fill: 'none' as const, stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

export function Icon({ name, className = 'h-5 w-5' }: { name: string; className?: string }) {
  switch (name) {
    case 'content':
      return <svg viewBox="0 0 24 24" className={className} {...common}><path d="M5 4h11l3 3v13H5z"/><path d="M16 4v3h3"/><path d="M8 11h8M8 14h8M8 17h5"/></svg>
    case 'research':
      return <svg viewBox="0 0 24 24" className={className} {...common}><circle cx="11" cy="11" r="6"/><path d="M20 20l-4.2-4.2"/><path d="M11 8v6M8 11h6"/></svg>
    case 'creative':
      return <svg viewBox="0 0 24 24" className={className} {...common}><path d="M4 19l5-1 9-9-4-4-9 9z"/><path d="M14 5l4 4"/><circle cx="6" cy="18" r="0.6" fill="currentColor"/></svg>
    case 'ops':
      return <svg viewBox="0 0 24 24" className={className} {...common}><rect x="4" y="5" width="16" height="14" rx="2"/><path d="M8 5V3M16 5V3M4 10h16M9 14h3"/></svg>
    case 'data':
      return <svg viewBox="0 0 24 24" className={className} {...common}><path d="M4 19V6M9 19v-7M14 19V9M19 19v-4"/><path d="M3 19h18"/></svg>
    case 'bot':
      return <svg viewBox="0 0 24 24" className={className} {...common}><rect x="4" y="7" width="16" height="11" rx="2.5"/><path d="M12 4v3M9 12v1M15 12v1M9 18l-1 2M15 18l1 2"/></svg>
    case 'whatsapp':
      return <svg viewBox="0 0 24 24" className={className} fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.3.3-.5.1-.2.1-.4 0-.5-.1-.2-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1.1 1.1-1.1 2.6 1.1 3 1.3 3.2c.2.2 2.3 3.5 5.6 4.8.8.3 1.4.5 1.9.6.8.2 1.5.2 2.1.1.6-.1 1.7-.7 2-1.4.3-.7.3-1.2.2-1.3-.1-.2-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.7.4 3.4 1.3 4.9L2 22l5.3-1.3c1.4.8 3 1.3 4.7 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>
    case 'arrow':
      return <svg viewBox="0 0 24 24" className={className} {...common}><path d="M5 12h14M13 6l6 6-6 6"/></svg>
    case 'check':
      return <svg viewBox="0 0 24 24" className={className} {...common}><path d="M5 12.5l4 4 10-10"/></svg>
    case 'spark':
      return <svg viewBox="0 0 24 24" className={className} {...common}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/></svg>
    case 'mail':
      return <svg viewBox="0 0 24 24" className={className} {...common}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 7 9-7"/></svg>
    case 'globe':
      return <svg viewBox="0 0 24 24" className={className} {...common}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>
    case 'zap':
      return <svg viewBox="0 0 24 24" className={className} {...common}><path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z"/></svg>
    default:
      return null
  }
}

// Small inline icons (used in pricing tables, FAQ, cards)
export function SmallIcon({ name, className = 'h-5 w-5' }: { name: string; className?: string }) {
  switch (name) {
    case 'doc':
      return <svg viewBox="0 0 24 24" className={className} {...common}><path d="M6 3h9l3 3v15H6z"/><path d="M15 3v3h3"/><path d="M9 12h6M9 16h6"/></svg>
    case 'pen':
      return <svg viewBox="0 0 24 24" className={className} {...common}><path d="M4 20l4-1 11-11-3-3L5 16z"/><path d="M14 6l3 3"/></svg>
    case 'mail':
      return <svg viewBox="0 0 24 24" className={className} {...common}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 7 9-7"/></svg>
    case 'calendar':
      return <svg viewBox="0 0 24 24" className={className} {...common}><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M8 3v4M16 3v4"/></svg>
    case 'tag':
      return <svg viewBox="0 0 24 24" className={className} {...common}><path d="M4 12V5h7l9 9-7 7z"/><circle cx="8" cy="9" r="1" fill="currentColor"/></svg>
    case 'chat':
      return <svg viewBox="0 0 24 24" className={className} {...common}><path d="M4 5h16v11H8l-4 4z"/><path d="M8 10h8M8 13h5"/></svg>
    case 'video':
      return <svg viewBox="0 0 24 24" className={className} {...common}><rect x="3" y="6" width="13" height="12" rx="2"/><path d="M16 10l5-3v10l-5-3z"/></svg>
    case 'book':
      return <svg viewBox="0 0 24 24" className={className} {...common}><path d="M5 4h10a3 3 0 013 3v13H8a3 3 0 01-3-3z"/><path d="M5 17h13"/></svg>
    case 'chart':
      return <svg viewBox="0 0 24 24" className={className} {...common}><path d="M4 19V5"/><path d="M4 19h16"/><path d="M8 16v-5M12 16V8M16 16v-3"/></svg>
    case 'arrow':
      return <svg viewBox="0 0 24 24" className={className} {...common}><path d="M5 12h14M13 6l6 6-6 6"/></svg>
    case 'back':
      return <svg viewBox="0 0 24 24" className={className} {...common}><path d="M19 12H5M11 18l-6-6 6-6"/></svg>
    case 'check':
      return <svg viewBox="0 0 24 24" className={className} {...common}><path d="M5 12.5l4 4 10-10"/></svg>
    case 'plus':
      return <svg viewBox="0 0 24 24" className={className} {...common}><path d="M12 5v14M5 12h14"/></svg>
    case 'whatsapp':
      return <svg viewBox="0 0 24 24" className={className} fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.3.3-.5.1-.2.1-.4 0-.5-.1-.2-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1.1 1.1-1.1 2.6 1.1 3 1.3 3.2c.2.2 2.3 3.5 5.6 4.8.8.3 1.4.5 1.9.6.8.2 1.5.2 2.1.1.6-.1 1.7-.7 2-1.4.3-.7.3-1.2.2-1.3-.1-.2-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.7.4 3.4 1.3 4.9L2 22l5.3-1.3c1.4.8 3 1.3 4.7 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>
    default:
      return null
  }
}
