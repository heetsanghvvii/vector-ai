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
    if (honeypotRef.current?.value) return

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
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          message: form.message,
          source: 'partha.ai contact form',
          submittedAt: new Date().toISOString(),
        }),
      })
    } catch { /* network failure — show success anyway */ }

    setStatus('success')
    setToastMsg(`Thanks ${form.name.split(' ')[0] || 'there'} — we'll be in touch within 24 hours.`)
    setForm({ name: '', email: '', company: '', message: '' })
    setTimeout(() => setStatus('idle'), 4500)
  }

  return (
    <>
      <form onSubmit={submit} className="rounded-2xl border border-[#1e1e1e] bg-black-card p-7 sm:p-9">
        {/* Honeypot */}
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
            <span className="text-[#555555] font-medium tracking-wide">Name</span>
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
            <span className="text-[#555555] font-medium tracking-wide">Email</span>
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
          <span className="text-[#555555] font-medium tracking-wide">Company</span>
          <input
            value={form.company}
            onChange={set('company')}
            type="text"
            placeholder="Acme Corp"
            className="input-base rounded-lg px-3.5 py-2.5 text-[15px] transition-shadow"
          />
        </label>

        <label className="mt-4 flex flex-col gap-1.5 text-sm">
          <span className="text-[#555555] font-medium tracking-wide">How can we help?</span>
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
          className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm disabled:opacity-60 btn-primary"
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
              Book a Call
              <Icon name="arrow" className="h-4 w-4" />
            </>
          )}
        </button>

        <p className="mt-3 text-xs text-[#555555] text-center">No spam. We reply within 24 hours.</p>
      </form>

      {toastMsg && <Toast msg={toastMsg} onDone={() => setToastMsg(null)} />}
    </>
  )
}
