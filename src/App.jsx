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

export default function App() {
  const [lang, setLanguage] = useState(
    () => localStorage.getItem('poliresurs-lang') || 'bg',
  )
  const t = content[lang]
  const additionalProducts =
    lang === 'bg'
      ? [
          ['Бял боб', asset('white-beans.jpeg')],
          ['Кафяв лен', asset('brown-flax.jpeg')],
          ['Дафинов лист', asset('bay-leaf.jpeg')],
          ['Дива шипка', asset('rosehip.jpeg')],
          ['Орехови ядки', asset('walnuts.jpg')],
        ]
      : [
          ['White beans', asset('white-beans.jpeg')],
          ['Brown flaxseed', asset('brown-flax.jpeg')],
          ['Bay leaves', asset('bay-leaf.jpeg')],
          ['Wild rosehip', asset('rosehip.jpeg')],
          ['Walnut kernels', asset('walnuts.jpg')],
        ]
  const setLang = (value) => {
    setLanguage(value)
    localStorage.setItem('poliresurs-lang', value)
  }
  useEffect(() => {
    document.documentElement.lang = lang
    document.title =
      lang === 'bg'
        ? 'Полиресурс — натурални суровини'
        : 'Poliresurs — natural ingredients'
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
              <img src={asset('facility-exterior.jpeg')} alt={t.heroEyebrow} />
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
        <section className="visual-catalog reveal" aria-label="Additional products">
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
            {additionalProducts.map(([name, image], index) => (
              <article className={`visual-product item-${index + 1}`} key={name}>
                <img src={image} alt={name} loading="lazy" />
                <div>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{name}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="about reveal" id="about">
          <div className="about-label">
            <p>{t.aboutLabel}</p>
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
            <img src={asset('cleaning-line.jpeg')} alt={t.hand} />
            <span>{t.hand}</span>
            <div className="facility-inset" aria-hidden="true">
              <img src={asset('silos.jpeg')} alt="" />
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
            <div className="contact-details">
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
            </div>
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
