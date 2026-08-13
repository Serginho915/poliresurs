import React, { useEffect, useState } from 'react'
import { ArrowDown, Check, Leaf, PackageCheck, Sprout } from 'lucide-react'
import Header from './components/Header'
import ProductCard from './components/ProductCard'
import ContactForm from './components/ContactForm'
import { content } from './data.jsx'

const email = import.meta.env.VITE_CONTACT_EMAIL || 'poliresurs.kh@gmail.com'
const phoneDisplay = '+359 892 987 604'
const phoneHref = '+359892987604'
const asset = (name) => `${import.meta.env.BASE_URL}images/${name}`
const siteUrl = 'https://serginho915.github.io/poliresurs/'

const seo = {
  bg: {
    title: 'Poliresurs — земеделски суровини за индустрията',
    description:
      'Poliresurs доставя, почиства и калибрира кориандър, горчица, нахут, червена леща и червен пипер за индустриални клиенти в Европа.',
    locale: 'bg_BG',
  },
  en: {
    title: 'Poliresurs — agricultural commodities for industry',
    description:
      'Poliresurs sources, cleans, grades and supplies coriander, mustard, chickpeas, red lentils and paprika to industrial buyers across Europe.',
    locale: 'en_GB',
  },
}

const updateMeta = (selector, value) => {
  document.querySelector(selector)?.setAttribute('content', value)
}

export default function App() {
  const [lang, setLanguage] = useState(() => {
    const urlLanguage = new URLSearchParams(window.location.search).get('lang')
    if (urlLanguage === 'en' || urlLanguage === 'bg') return urlLanguage
    return localStorage.getItem('poliresurs-lang') === 'en' ? 'en' : 'bg'
  })
  const t = content[lang]
  const additionalProducts =
    lang === 'bg'
      ? [
          ['Бял боб', 'Бобови култури', asset('PHOTO-2026-08-13-11-30-58.jpg')],
          ['Кафяв лен', 'Маслодайни семена', asset('brown-flax.jpeg')],
          ['Златист лен', 'Маслодайни семена', asset('golden-flax.jpg')],
          ['Дафинов лист', 'Подправки', asset('bay-leaf.jpeg')],
          ['Дива шипка', 'Ръчен сбор', asset('rosehip.jpeg')],
          ['Див чесън', 'Ръчен сбор', asset('wildGarlic.jpg')],
          ['Мащерка', 'Ръчен сбор', asset('thyme.jpg')],
          ['Липов цвят', 'Суровини за фиточай', asset('linden-blossom.jpg')],
          ['Цвят от бъз', 'Суровини за фиточай', asset('elderflower.jpg')],
        ]
      : [
          ['White beans', 'Pulses', asset('PHOTO-2026-08-13-11-30-58.jpg')],
          ['Brown flaxseed', 'Oilseeds', asset('brown-flax.jpeg')],
          ['Golden flaxseed', 'Oilseeds', asset('golden-flax.jpg')],
          ['Bay leaves', 'Spices', asset('bay-leaf.jpeg')],
          ['Wild rosehip', 'Hand-picked', asset('rosehip.jpeg')],
          ['Wild garlic', 'Hand-picked', asset('wildGarlic.jpg')],
          ['Thyme', 'Hand-picked', asset('thyme.jpg')],
          ['Linden blossom', 'Herbal tea ingredients', asset('linden-blossom.jpg')],
          ['Elderflower', 'Herbal tea ingredients', asset('elderflower.jpg')],
        ]
  const setLang = (value) => {
    setLanguage(value)
    localStorage.setItem('poliresurs-lang', value)
    const url = new URL(window.location.href)
    if (value === 'en') url.searchParams.set('lang', 'en')
    else url.searchParams.delete('lang')
    window.history.replaceState({}, '', url)
  }
  useEffect(() => {
    const metadata = seo[lang]
    const canonicalUrl = lang === 'en' ? `${siteUrl}?lang=en` : siteUrl

    document.documentElement.lang = lang
    document.title = metadata.title
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonicalUrl)
    updateMeta('meta[name="description"]', metadata.description)
    updateMeta('meta[property="og:title"]', metadata.title)
    updateMeta('meta[property="og:description"]', metadata.description)
    updateMeta('meta[property="og:locale"]', metadata.locale)
    updateMeta('meta[property="og:url"]', canonicalUrl)
    updateMeta('meta[name="twitter:title"]', metadata.title)
    updateMeta('meta[name="twitter:description"]', metadata.description)
  }, [lang])
  useEffect(() => {
    const els = document.querySelectorAll('.reveal,.reveal-item')
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach((el) => el.classList.add('visible'))
      return
    }
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        }),
      { threshold: 0.12, rootMargin: '0px 0px -50px' },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [lang])
  return (
    <div className="site-shell" id="top">
      <div className="topline">
        <span>LLC POLIRESURS</span>
        <span>{lang === 'bg' ? 'София · България' : 'Sofia · Bulgaria'}</span>
        <div className="topline-contacts">
          <a href={`tel:${phoneHref}`}>{phoneDisplay}</a>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
      </div>
      <Header lang={lang} setLang={setLang} t={t} />
      <main>
        <section className="hero">
          <div className="hero-copy hero-animate">
            <div className="hero-edition">
              {lang === 'bg' ? 'НАД 20 ГОДИНИ ОПИТ' : 'EST. 20+ YEARS EXPERIENCE'}
            </div>
            <p className="eyebrow">
              <span />
              {t.heroEyebrow}
            </p>
            <h1>{t.heroTitle}</h1>
            <p className="hero-lead">{t.heroLead}</p>
            <div className="hero-actions">
              <a className="button primary" href="#products">
                {t.productsButton}
              </a>
              <a className="text-link" href="#about">
                {t.aboutLink}
                <ArrowDown size={17} />
              </a>
            </div>
            <div className="hero-points">
              <span>
                <Check />
                {t.quality}
              </span>
              <span>
                <Check />
                {t.supply}
              </span>
            </div>
          </div>
          <div className="hero-visual hero-image-animate">
            <div className="hero-photo">
              <img
                src={asset('facility-exterior.jpeg')}
                alt={t.heroEyebrow}
                width="1280"
                height="720"
                fetchPriority="high"
              />
            </div>
            <div className="hero-number">01</div>
            <div className="hero-badge">
              <Leaf />
              <span>
                <b>{t.clean}</b>
                {t.processing}
              </span>
            </div>
            <p className="vertical-note">POLIRESURS · NATURAL INGREDIENTS</p>
            <div className="hero-caption">
              <span>UKRAINE</span>
              <i />
              <span>BULGARIA</span>
              <i />
              <span>EUROPE</span>
            </div>
          </div>
        </section>
        <section className="trust-strip reveal">
          <div>
            <PackageCheck />
            <span>
              <b>{t.selected}</b>
              {t.stages}
            </span>
          </div>
          <div>
            <Sprout />
            <span>
              <b>{t.origin}</b>
              {t.countries}
            </span>
          </div>
        </section>
        <section className="section reveal" id="products">
          <div className="section-heading">
            <div>
              <span className="section-number">02 / 06</span>
              <p className="eyebrow">
                <span />
                {t.assortment}
              </p>
              <h2>{t.productsTitle}</h2>
            </div>
            <p>{t.productsIntro}</p>
          </div>
          <div className="product-grid">
            {t.products.map((p, i) => (
              <ProductCard key={i} product={p} request={t.request} />
            ))}
          </div>
        </section>
        <section
          className="visual-catalog reveal"
          aria-label={lang === 'bg' ? 'Допълнителни продукти' : 'Additional products'}
        >
          <div className="visual-catalog-intro">
            <span>03 / 06</span>
            <p>{lang === 'bg' ? 'Допълнителни категории' : 'Additional categories'}</p>
            <h2>
              {lang === 'bg' ? 'Подбрани натурални' : 'Selected natural'}
              <br />
              <em>{lang === 'bg' ? 'суровини' : 'ingredients'}</em>
            </h2>
          </div>
          <div className="visual-catalog-grid">
            {additionalProducts.map(([name, category, image], index) => (
              <article className={`visual-product item-${index + 1}`} key={name}>
                <img src={image} alt={name} loading="lazy" />
                <div>
                  <span>{category}</span>
                  <div>
                    <small>{String(index + 1).padStart(2, '0')}</small>
                    <h3>{name}</h3>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="about reveal" id="about">
          <div className="about-label">
            <p>{t.aboutLabel}</p>
          </div>
          <div className="production-deck" aria-hidden="true">
            <figure className="production-card production-card-back">
              <img src={asset('warehouse.jpeg')} alt="" loading="lazy" />
            </figure>
            <figure className="production-card production-card-middle">
              <img
                src={asset('WhatsApp Image 2026-08-11 at 12.39.20 (1).jpeg')}
                alt=""
                loading="lazy"
              />
            </figure>
            <figure className="production-card production-card-front">
              <img
                src={asset('WhatsApp Image 2026-08-11 at 12.39.20 (3).jpeg')}
                alt=""
                loading="lazy"
              />
            </figure>
          </div>
          <div className="about-main">
            <p className="eyebrow light">
              <span />
              {t.approach}
            </p>
            <h2>{t.aboutTitle}</h2>
            <p>{t.aboutText}</p>
            <div className="values">
              {t.values.map((v, i) => (
                <div className="reveal-item" key={v[0]}>
                  <b>0{i + 1}</b>
                  <h3>{v[0]}</h3>
                  <p>{v[1]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="wild section reveal" id="wild">
          <div className="wild-image">
            <img
              src={asset('cleaning-line.jpeg')}
              alt={t.hand}
              width="2048"
              height="946"
              loading="lazy"
            />
            <span>{t.hand}</span>
            <div className="facility-inset" aria-hidden="true">
              <img
                src={asset('silos.jpeg')}
                alt=""
                width="720"
                height="1280"
                loading="lazy"
              />
            </div>
          </div>
          <div className="wild-copy">
            <p className="eyebrow">
              <span />
              {t.gifts}
            </p>
            <h2>{t.wildTitle}</h2>
            <p>{t.wildText}</p>
            <ul>
              {t.wildItems.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <a className="button secondary" href="#contact">
              {t.availability}
            </a>
          </div>
        </section>
        <section className="section faq reveal" id="faq">
          <div>
            <p className="eyebrow">
              <span />
              {t.questions}
            </p>
            <h2>{t.faqTitle}</h2>
            <p className="faq-intro">{t.faqIntro}</p>
            <a href={`mailto:${email}`}>{email}</a>
          </div>
          <div className="accordion">
            {t.faqs.map(([q, a], i) => (
              <details key={q} open={i === 0}>
                <summary>
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  {q}
                  <i />
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>
        <section className="contact reveal" id="contact">
          <div className="contact-copy">
            <p className="eyebrow light">
              <span />
              {t.contactEyebrow}
            </p>
            <h2>{t.contactTitle}</h2>
            <p>{t.contactText}</p>
            <address className="contact-details">
              <div>
                <span>{lang === 'bg' ? 'Офис' : 'Office'}</span>
                <strong>Sofia, Bulgaria</strong>
              </div>
              <div>
                <span>{lang === 'bg' ? 'Телефон' : 'Phone'}</span>
                <a href={`tel:${phoneHref}`}>{phoneDisplay}</a>
              </div>
              <div>
                <span>Email</span>
                <a href={`mailto:${email}`}>{email}</a>
              </div>
            </address>
          </div>
          <ContactForm t={t.form} />
        </section>
      </main>
      <footer>
        <a className="brand footer-brand" href="#top">
          <span>П</span>Poliresurs
        </a>
        <div className="footer-contacts">
          <span>Sofia, Bulgaria</span>
          <a href={`tel:${phoneHref}`}>{phoneDisplay}</a>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
        <a href="#top">{t.top}</a>
        <small>© {new Date().getFullYear()} Poliresurs</small>
      </footer>
    </div>
  )
}
