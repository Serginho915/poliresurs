const asset = (name) => `${import.meta.env.BASE_URL}images/${name}`

export default function PartnerShowcase() {
  return (
    <section className="streetsoup-showcase" aria-label="Street Soup B2B presentation">
      <h2 className="sr-only">
        Street Soup products, retail partners and export markets
      </h2>

      <figure className="streetsoup-product-image reveal">
        <img
          src={asset('streetsoup-page-1.jpg')}
          alt="Street Soup B2B product range: tomato, yellow pea, chickpea, lentil, mushroom, spinach, Mexican cream and mushroom noodle soups"
          width="2400"
          height="1350"
          loading="lazy"
        />
      </figure>

      <div className="streetsoup-partners reveal">
        <header>
          <span>B2B / RETAIL / EXPORT</span>
          <h3>Retail partners &amp; export markets</h3>
          <p>
            METRO, Auchan, Lidl, FreshCo, Sobeys, Amazon, Edeka and Rewe. Exported to
            Germany, United Kingdom, Canada, USA, France, Slovenia, Poland and Slovakia.
          </p>
        </header>
        <figure>
          <img
            src={asset('streetsoup-page-3.jpg')}
            alt="Street Soup retail partners Metro, Auchan, Sobeys, Lidl, FreshCo, Amazon, Edeka and Rewe; export markets Germany, United Kingdom, Canada, USA, France, Slovenia, Poland and Slovakia"
            width="2400"
            height="1350"
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  )
}
