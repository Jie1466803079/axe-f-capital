export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1 className="hero-title">Fresh food, local heart</h1>
        <p className="hero-tagline">
          Quality groceries from AXE.F Capital. Visit us at 65 John Street, Cabramatta.
        </p>
        <a href="#visit" className="btn btn-primary hero-cta">Visit us</a>
      </div>
      <div className="hero-bg" aria-hidden />
      <style>{`
        .hero {
          position: relative;
          min-height: 70vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: var(--space-3xl) var(--space-lg);
          overflow: hidden;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(74, 124, 89, 0.15) 0%, rgba(193, 127, 89, 0.12) 100%);
        }
        .hero-content {
          position: relative;
          z-index: 1;
          text-align: center;
          max-width: 32rem;
        }
        .hero-title {
          font-size: clamp(2rem, 6vw, 3rem);
          margin-bottom: var(--space-md);
          color: var(--color-text);
        }
        .hero-tagline {
          font-size: 1.125rem;
          color: var(--color-text-muted);
          margin-bottom: var(--space-xl);
        }
        .hero-cta { font-size: 1rem; }
      `}</style>
    </section>
  )
}
