import { useEffect, useState } from 'react'

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim()
const storageKey = 'poliresurs-analytics-consent'

const copy = {
  bg: {
    title: 'Поверителност и статистика',
    text: 'Използваме Google Analytics само с Вашето съгласие, за да разберем как се използва сайтът и да го подобряваме.',
    accept: 'Приемам',
    decline: 'Само необходимите',
    settings: 'Настройки за cookies',
  },
  en: {
    title: 'Privacy and analytics',
    text: 'We use Google Analytics only with your consent to understand how the website is used and improve it.',
    accept: 'Accept',
    decline: 'Necessary only',
    settings: 'Cookie settings',
  },
}

export default function AnalyticsConsent({ lang }) {
  const [choice, setChoice] = useState(() => localStorage.getItem(storageKey))
  const [open, setOpen] = useState(() => !localStorage.getItem(storageKey))
  const [ready, setReady] = useState(false)
  const t = copy[lang]

  useEffect(() => {
    if (!measurementId || choice !== 'granted') return

    window.dataLayer = window.dataLayer || []
    window.gtag = window.gtag || function gtag() {
      window.dataLayer.push(arguments)
    }

    window.gtag('consent', 'default', {
      analytics_storage: 'granted',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    })
    window.gtag('js', new Date())
    window.gtag('config', measurementId, {
      send_page_view: false,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    })

    const existing = document.querySelector(`script[data-ga-id="${measurementId}"]`)
    if (existing) {
      setReady(true)
      return
    }

    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
    script.dataset.gaId = measurementId
    script.addEventListener('load', () => setReady(true), { once: true })
    document.head.appendChild(script)
  }, [choice])

  useEffect(() => {
    if (!ready || choice !== 'granted') return
    window.gtag?.('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: `${window.location.pathname}${window.location.search}`,
      language: lang,
    })
  }, [choice, lang, ready])

  const save = (value) => {
    localStorage.setItem(storageKey, value)
    setChoice(value)
    setOpen(false)
  }

  if (!measurementId) return null

  return (
    <>
      {open && (
        <aside className="cookie-banner" aria-label={t.title} role="dialog" aria-live="polite">
          <div>
            <strong>{t.title}</strong>
            <p>{t.text}</p>
          </div>
          <div className="cookie-actions">
            <button type="button" className="cookie-secondary" onClick={() => save('denied')}>
              {t.decline}
            </button>
            <button type="button" className="cookie-primary" onClick={() => save('granted')}>
              {t.accept}
            </button>
          </div>
        </aside>
      )}
      {!open && (
        <button type="button" className="cookie-settings" onClick={() => setOpen(true)}>
          {t.settings}
        </button>
      )}
    </>
  )
}
