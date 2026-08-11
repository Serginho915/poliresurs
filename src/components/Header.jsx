import React from 'react'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header({ lang, setLang, t }) {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <header className="header">
      <a className="brand" href="#top" aria-label="Полиресурс — на главную">
        <span>П</span>Полиресурс
      </a>
      <button
        className="menu-button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="nav"
      >
        <span className="sr-only">Меню</span>
        {open ? <X /> : <Menu />}
      </button>
      <nav id="nav" className={open ? 'nav open' : 'nav'} aria-label="Main navigation">
        {['#products', '#about', '#wild', '#faq'].map((href, i) => (
          <a key={href} href={href} onClick={close}>
            {t.nav[i]}
          </a>
        ))}
        <div className="language" aria-label="Language">
          <button className={lang === 'bg' ? 'active' : ''} onClick={() => setLang('bg')}>
            BG
          </button>
          <span>/</span>
          <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>
            EN
          </button>
        </div>
        <a className="nav-cta" href="#contact" onClick={close}>
          {t.cta}
        </a>
      </nav>
    </header>
  )
}
