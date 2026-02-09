const ADDRESS = '65 John Street, Cabramatta NSW 2166'
const EMAIL = 'fengwenye00@gmail.com'
const ABN = '22 639 805 511'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">AXE.F Capital Pty Ltd</div>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#offerings">Offerings</a>
          <a href="#visit">Visit</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-details">
          <p>{ADDRESS}</p>
          <p><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
          <p className="footer-abn">ABN {ABN}</p>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} AXE.F Capital Pty Ltd. All rights reserved.</p>
      </div>
      <style>{`
        .footer {
          background: var(--color-text);
          color: #e8e4de;
          padding: var(--space-2xl) var(--space-lg);
        }
        .footer-inner {
          max-width: 72rem;
          margin: 0 auto;
          text-align: center;
        }
        .footer-brand {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: var(--space-lg);
        }
        .footer-links {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: var(--space-md);
          margin-bottom: var(--space-lg);
        }
        .footer-links a {
          color: #e8e4de;
        }
        .footer-links a:hover { color: #fff; }
        .footer-details {
          font-size: 0.9rem;
          color: #b8b4ae;
          margin-bottom: var(--space-lg);
        }
        .footer-details p { margin-bottom: var(--space-xs); }
        .footer-details a { color: #c8e6d0; }
        .footer-abn { font-size: 0.85rem; }
        .footer-copy { font-size: 0.85rem; color: #888; }
      `}</style>
    </footer>
  )
}
