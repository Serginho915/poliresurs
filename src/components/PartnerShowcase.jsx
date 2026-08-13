const asset = (name) => `${import.meta.env.BASE_URL}images/${name}`

const retailers = [
  ['metro', 'METRO'],
  ['auchan', 'Auchan'],
  ['sobeys', 'Sobeys'],
  ['lidl', 'Lidl'],
  ['freshco', 'FreshCo'],
  ['amazon', 'Amazon'],
  ['edeka', 'Edeka'],
  ['rewe', 'Rewe'],
]

const countries = [
  ['germany', 'Германия', 'Germany'],
  ['uk', 'Великобритания', 'United Kingdom'],
  ['canada', 'Канада', 'Canada'],
  ['usa', 'САЩ', 'USA'],
  ['france', 'Франция', 'France'],
  ['slovenia', 'Словения', 'Slovenia'],
  ['poland', 'Полша', 'Poland'],
  ['slovakia', 'Словакия', 'Slovakia'],
]

export default function PartnerShowcase({ lang }) {
  const bg = lang === 'bg'

  return (
    <section className="streetsoup-showcase" aria-label="Street Soup B2B presentation">
      <h2 className="sr-only">
        Street Soup products, retail partners and export markets
      </h2>

      <figure className="streetsoup-product-image reveal">
        <img
          src={asset('streetsoup-page-1.jpg')}
          alt="Street Soup B2B product range"
          width="2400"
          height="1350"
          loading="lazy"
        />
      </figure>

      <div className="streetsoup-partners reveal">
        <header className="partners-heading">
          <span>B2B / RETAIL / EXPORT</span>
          <h3>{bg ? 'Партньори и експортни пазари' : 'Partners and export markets'}</h3>
          <p>
            {bg
              ? 'Street Soup присъства в международни търговски вериги и се доставя до пазари в Европа и Северна Америка.'
              : 'Street Soup is present in international retail chains and supplied to markets across Europe and North America.'}
          </p>
        </header>

        <div className="partner-panels">
          <article className="partner-panel">
            <header>
              <p>
                {bg
                  ? 'Нашите продукти се продават в основните търговски вериги —'
                  : 'Our products are selling in the main retail chains —'}
              </p>
              <strong>METRO, Auchan, Lidl, FreshCo, Sobeys, Amazon, Edeka, Rewe.</strong>
            </header>
            <div className="retailer-grid">
              {retailers.map(([file, name]) => (
                <div className="partner-logo" key={file}>
                  <img src={asset(`partners/${file}.png`)} alt={name} loading="lazy" />
                </div>
              ))}
            </div>
          </article>

          <article className="partner-panel">
            <header>
              <p>
                {bg
                  ? 'Нашите продукти се изнасят в много страни —'
                  : 'Our products are exported to many countries —'}
              </p>
              <strong>
                {bg
                  ? 'Германия, Великобритания, Канада, САЩ, Франция, Словения, Полша, Словакия и други.'
                  : 'Germany, United Kingdom, Canada, USA, France, Slovenia, Poland, Slovakia and others.'}
              </strong>
            </header>
            <div className="country-logo-grid">
              {countries.map(([file, bgName, enName]) => (
                <div className="country-logo" key={file}>
                  <img
                    src={asset(`partners/${file}.png`)}
                    alt={bg ? bgName : enName}
                    loading="lazy"
                  />
                  <span>{bg ? bgName : enName}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
