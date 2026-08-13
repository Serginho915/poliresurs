const asset = (name) => `${import.meta.env.BASE_URL}images/${name}`

const products = [
  ['Coriander', '99.7% purity', 'coriander.jpg', 'yellow'],
  ['White mustard', 'Industrial grade', 'mustard.jpg', 'cream'],
  ['Chickpeas', '8+ mm grade', 'nut.jpg', 'orange'],
  ['Lentils', 'Selected batch', 'lentils.jpeg', 'red'],
  ['White beans', 'Calibrated', 'PHOTO-2026-08-13-11-30-58.jpg', 'blue'],
  ['Golden flax', 'Natural oilseed', 'golden-flax.jpg', 'green'],
]

const markets = [
  ['DE', 'Germany'],
  ['GB', 'United Kingdom'],
  ['CA', 'Canada'],
  ['US', 'USA'],
  ['FR', 'France'],
  ['SI', 'Slovenia'],
  ['PL', 'Poland'],
  ['SK', 'Slovakia'],
]

export default function PartnerShowcase({ lang }) {
  return (
    <div className="partner-showcase">
      <section className="soup-cover reveal" aria-label="B2B product presentation">
        <div className="soup-cover-copy">
          <p>
            {lang === 'bg'
              ? 'ПРЕЗЕНТАЦИЯ ЗА B2B ПАРТНЬОРИ'
              : 'PRESENTATION FOR B2B PARTNERS'}
          </p>
          <h2>
            {lang === 'bg' ? 'СУРОВИНИ' : 'AGRICULTURAL'}
            <br />
            {lang === 'bg' ? 'ЗА ПРОИЗВОДСТВО' : 'RAW MATERIALS'}
          </h2>
          <strong>
            {lang === 'bg'
              ? 'Натурални земеделски продукти за индустрията'
              : 'Natural agricultural ingredients for industry'}
          </strong>
        </div>

        <div className="soup-mark" aria-label="Poliresurs">
          POLI
          <br />
          RESURS
        </div>

        <div className="pack-line">
          {products.map(([name, detail, image, color]) => (
            <article className={`ingredient-pack pack-${color}`} key={name}>
              <div className="pack-brand">POLIRESURS</div>
              <div className="pack-name">{name}</div>
              <div className="pack-detail">{detail}</div>
              <img src={asset(image)} alt={name} loading="lazy" />
            </article>
          ))}
        </div>
      </section>

      <section
        className="market-slide reveal"
        aria-label="Sales and export markets"
        style={{ '--market-image': `url("${asset('market-field.jpg')}")` }}
      >
        <div className="market-panels">
          <article className="market-panel">
            <header>
              {lang === 'bg'
                ? 'Нашите продукти се продават в основните търговски вериги —'
                : 'Our products are selling in the main retail chains —'}
              <strong>
                METRO, Auchan, Lidl, FreshCo, Sobeys, Amazon, Edeka, Rewe, etc.
              </strong>
            </header>
            <div className="retail-names" aria-label="Retail chains">
              {[
                'METRO',
                'Auchan',
                'Sobeys',
                'LIDL',
                'FRESHCO',
                'amazon.de',
                'EDEKA',
                'REWE',
              ].map((name) => (
                <b key={name}>{name}</b>
              ))}
            </div>
          </article>

          <article className="market-panel">
            <header>
              {lang === 'bg'
                ? 'Нашите продукти се изнасят в много страни —'
                : 'Our products are exported to many countries —'}
              <strong>
                {lang === 'bg'
                  ? 'Германия, Великобритания, Канада, САЩ, Франция, Словения, Полша, Словакия и други.'
                  : 'Germany, United Kingdom, Canada, USA, France, Slovenia, Poland, Slovakia and others.'}
              </strong>
            </header>
            <div className="country-grid">
              {markets.map(([code, name]) => (
                <div key={code} title={name}>
                  <span className={`flag flag-${code.toLowerCase()}`} />
                  <small>{name}</small>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}
