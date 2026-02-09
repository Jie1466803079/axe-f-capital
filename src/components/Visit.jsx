const ADDRESS = '65 John Street, Cabramatta NSW 2166'
const MAP_URL = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(ADDRESS)

export default function Visit() {
  return (
    <section className="section" id="visit">
      <h2 className="section-title">Visit us</h2>
      <div className="visit-content">
        <p className="visit-address">{ADDRESS}</p>
        <p className="visit-hours">
          <strong>Hours:</strong> Mon–Sun 8:00 am – 8:00 pm (hours may vary; call or visit for current times)
        </p>
        <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Get directions
        </a>
      </div>
      <style>{`
        .visit-content { max-width: 32rem; }
        .visit-address {
          font-size: 1.125rem;
          margin-bottom: var(--space-sm);
        }
        .visit-hours {
          color: var(--color-text-muted);
          margin-bottom: var(--space-lg);
        }
      `}</style>
    </section>
  )
}
