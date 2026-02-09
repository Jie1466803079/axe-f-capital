export default function About() {
  return (
    <section className="section" id="about">
      <h2 className="section-title">About us</h2>
      <div className="about-content">
        <p>
          We’re your neighbourhood grocery store in Cabramatta, here to bring you fresh produce,
          pantry staples, and everyday essentials. We focus on quality and value so you can
          shop with confidence.
        </p>
        <p>
          Whether you’re stocking up for the week or picking up a few items, we’re here to help.
          Drop in and say hello—we’d love to see you.
        </p>
      </div>
      <style>{`
        .about-content { max-width: 42rem; }
        .about-content p {
          margin-bottom: var(--space-md);
          color: var(--color-text-muted);
        }
        .about-content p:last-child { margin-bottom: 0; }
      `}</style>
    </section>
  )
}
