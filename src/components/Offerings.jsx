import { OFFERINGS } from '../data/offerings'

export default function Offerings() {
  return (
    <section className="section offerings" id="offerings">
      <h2 className="section-title">What we offer</h2>
      <div className="offerings-grid">
        {OFFERINGS.map(({ id, title, description, icon }) => (
          <article key={id} className="offering-card">
            <span className="offering-icon" aria-hidden>{icon}</span>
            <h3 className="offering-title">{title}</h3>
            <p className="offering-desc">{description}</p>
          </article>
        ))}
      </div>
      <style>{`
        .offerings { background: var(--color-surface); }
        .offerings-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-lg);
        }
        @media (min-width: 640px) {
          .offerings-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 900px) {
          .offerings-grid { grid-template-columns: repeat(4, 1fr); }
        }
        .offering-card {
          padding: var(--space-xl);
          background: var(--color-bg);
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          transition: box-shadow 0.2s;
        }
        .offering-card:hover { box-shadow: var(--shadow-lg); }
        .offering-icon { font-size: 2rem; display: block; margin-bottom: var(--space-md); }
        .offering-title { font-size: 1.2rem; margin-bottom: var(--space-sm); }
        .offering-desc { font-size: 0.95rem; color: var(--color-text-muted); }
      `}</style>
    </section>
  )
}
