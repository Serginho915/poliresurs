import React from 'react'
import { useState } from 'react'
import { CheckCircle2, LoaderCircle } from 'lucide-react'

const email = import.meta.env.VITE_CONTACT_EMAIL || 'poliresurs.kh@gmail.com'
const endpoint =
  import.meta.env.VITE_CONTACT_FORM_ENDPOINT || `https://formsubmit.co/ajax/${email}`

export default function ContactForm({ t }) {
  const [status, setStatus] = useState('idle')
  async function submit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    setStatus('loading')
    try {
      const payload = {
        name: data.get('name'),
        company: data.get('company'),
        phone: data.get('phone'),
        email: data.get('email'),
        message: data.get('message'),
        _subject: `New Poliresurs enquiry: ${data.get('company') || data.get('name')}`,
        _template: 'table',
        _honey: data.get('_honey'),
      }
      const response = await fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      if (!response.ok) throw new Error()
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }
  return (
    <form className="contact-form" onSubmit={submit}>
      <input
        className="honeypot"
        type="text"
        name="_honey"
        tabIndex="-1"
        autoComplete="off"
      />
      <div className="field-row">
        <label>
          {t.name}
          <input name="name" autoComplete="name" required placeholder={t.namePh} />
        </label>
        <label>
          {t.company}
          <input name="company" autoComplete="organization" placeholder={t.companyPh} />
        </label>
      </div>
      <div className="field-row">
        <label>
          {t.phone}
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            placeholder="+359 00 000 0000"
          />
        </label>
        <label>
          {t.email}
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="name@company.com"
          />
        </label>
      </div>
      <label>
        {t.message}
        <textarea name="message" required rows="4" placeholder={t.messagePh} />
      </label>
      <label className="consent">
        <input type="checkbox" required /> <span>{t.consent}</span>
      </label>
      <button className="submit" disabled={status === 'loading'}>
        {status === 'loading' ? (
          <>
            <LoaderCircle className="spin" /> {t.sending}
          </>
        ) : (
          t.send
        )}
      </button>
      {status === 'sent' && (
        <p className="form-status success">
          <CheckCircle2 /> {t.sent}
        </p>
      )}
      {status === 'error' && (
        <p className="form-status error">
          {t.error} <a href={`mailto:${email}`}>{email}</a>
        </p>
      )}
    </form>
  )
}
