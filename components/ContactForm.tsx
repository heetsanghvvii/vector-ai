'use client'

import { useState, useRef } from 'react'
import { Icon } from './Icon'
import { Toast } from './Toast'

const APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL!

type Status = 'idle' | 'loading' | 'success' | 'error'

export function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')
  const [toastMsg, setToastMsg] = useState<string | null>(null)
  const honeypotRef = useRef<HTMLInputElement>(null)

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value })

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Honeypot: silently drop if a bot filled the hidden field
    if (honeypotRef.current?.value) return

    // Client-side validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setToastMsg('Please enter a valid email address.')
      return
    }
    if (form.message.trim().length < 10) {
      setToastMsg('Message must be at least 10 characters.')
      return
    }

    setStatus('loading')

    try {
      // text/plain Content-Type dodges the CORS preflight — required for Apps Script
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          message: form.message,
          source: 'vectorai.co contact form',
          submittedAt: new Date().toISOString(),
        }),
      })

      setStatus('success')
      setToastMsg(`Thanks ${form.name.split(' ')[0] || 'there'} — we'll be in touch within 24 hours.`)
      setForm({ name: '', email: '', company: '', message: '' })
      setTimeout(() => setStatus('idle'), 4500)
    } catch {
      setStatus('error')
      setToastMsg('Something went wrong — please try WhatsApp or email instead.')
      setTimeout(() => setStatus('idle'), 4500)
    }
  }

  return (
    <>
      {/* Honeypot — hidden from real users, bots will fill it */}
      <form onSubmit={submit} className="rounded-2xl border border-white/[0.08] bg-navy-800/70 p-7 sm:p-9">
        <input
          ref={honeypotRef}
          type="text"
          name="website"
          tabIndex={-1}
          aria-hidden="true"
          className="absolute opacity-0 pointer-events-none h-0 w-0 overflow-hidden"
          autoComplete="off"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className="flex flex-col gap-1.5 text-sm">
            <span className="text-mute font-medium">Name</span>
            <input
              required
              value={form.name}
              onChange={set('name')}
              type="text"
              placeholder="Ada Lovelace"
              className="input-base rounded-lg px-3.5 py-2.5 text-[15px] transition-shadow"
            />
          </label>
          <label className="flex flex-col gap-1.5 text-sm">
            <span className="text-mute font-medium">Email</span>
            <input
              required
              value={form.email}
              onChange={set('email')}
              type="email"
              placeholder="ada@company.com"
              className="input-base rounded-lg px-3.5 py-2.5 text-[15px] transition-shadow"
            />
          </label>
        </div>

        <label className="mt-4 flex flex-col gap-1.5 text-sm">
          <span className="text-mute font-medium">Company</span>
          <input
            value={form.company}
            onChange={set('company')}
            type="text"
            placeholder="Analytical Engines Ltd."
            className="input-base rounded-lg px-3.5 py-2.5 text-[15px] transition-shadow"
          />
        </label>

        <label className="mt-4 flex flex-col gap-1.5 text-sm">
          <span className="text-mute font-medium">What do you need?</span>
          <textarea
            required
            value={form.message}
            onChange={set('message')}
            rows={5}
            placeholder="A 20-slide investor deck by Friday."
            className="input-base rounded-lg px-3.5 py-2.5 text-[15px] transition-shadow resize-none"
          />
        </label>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-electric hover:bg-electric-600 disabled:opacity-60 text-white font-medium rounded-full px-5 py-3.5 transition-colors"
        >
          {status === 'loading' ? (
            <>
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" strokeOpacity=".25" />
                <path d="M12 2a10 10 0 0110 10" />
              </svg>
              Sending…
            </>
          ) : (
            <>
              Send brief
              <Icon name="arrow" className="h-4 w-4" />
            </>
          )}
        </button>

        <p className="mt-3 text-xs text-mute text-center">No spam. We reply within 24 hours.</p>
      </form>

      {toastMsg && <Toast msg={toastMsg} onDone={() => setToastMsg(null)} />}
    </>
  )
}
