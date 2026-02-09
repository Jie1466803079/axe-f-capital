import { useState } from 'react'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Offerings', href: '#offerings' },
  { label: 'Visit', href: '#visit' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-inner">
        <a href="#" className="logo">AXE.F Capital</a>
        <button
          type="button"
          className="menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="menu-toggle-bar" />
          <span className="menu-toggle-bar" />
          <span className="menu-toggle-bar" />
        </button>
        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
      <style>{`
        .header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: var(--color-surface);
          border-bottom: 1px solid var(--color-border);
          box-shadow: var(--shadow);
        }
        .header-inner {
          max-width: 72rem;
          margin: 0 auto;
          padding: var(--space-md) var(--space-lg);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .logo {
          font-family: var(--font-display);
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--color-text);
          text-decoration: none;
        }
        .logo:hover { text-decoration: none; color: var(--color-accent); }
        .menu-toggle {
          display: flex;
          flex-direction: column;
          gap: 5px;
          padding: var(--space-sm);
          background: none;
          border: none;
        }
        .menu-toggle-bar {
          width: 22px;
          height: 2px;
          background: var(--color-text);
        }
        .nav {
          display: none;
          gap: var(--space-lg);
        }
        .nav-open { display: flex; flex-direction: column; position: absolute; top: 100%; left: 0; right: 0; background: var(--color-surface); padding: var(--space-lg); border-bottom: 1px solid var(--color-border); }
        .nav-link {
          color: var(--color-text);
          font-weight: 500;
        }
        .nav-link:hover { color: var(--color-accent); }
        @media (min-width: 640px) {
          .menu-toggle { display: none; }
          .nav { display: flex; flex-direction: row; position: static; padding: 0; border: none; }
        }
      `}</style>
    </header>
  )
}
