import { useLocation, useNavigate } from 'react-router-dom'

export default function Footer() {
  const navigate = useNavigate()
  const location = useLocation()

  const onSectionClick = (href) => {
    if (location.pathname === '/') {
      if (window.location.hash !== href) {
        window.history.replaceState(null, '', href)
      }
      window.dispatchEvent(new HashChangeEvent('hashchange'))
      return
    }
    navigate(`/${href}`)
  }

  return (
    <footer style={{ background: '#070708', color: 'var(--ink)', borderTop: '1px solid var(--line)' }}>
      <div className="container" style={{ padding: 'clamp(60px, 8vw, 110px) var(--gut) 40px' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 48,
          paddingBottom: 64, borderBottom: '1px solid var(--line)',
        }} className="footer-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
              <div style={{
                width: 28, height: 28, borderRadius: 8,
                background: 'linear-gradient(135deg, var(--acc) 0%, var(--acc-2) 100%)',
              }} />
              <span style={{ fontWeight: 600, fontSize: 16 }}>Neutral Studio</span>
            </div>
            <p style={{ color: 'var(--ink-3)', fontSize: 14, maxWidth: 320, lineHeight: 1.6 }}>
              Graphic design for early-stage startups, identity, deck, and web, fast and fairly priced.
            </p>
            <p className="serif" style={{ fontSize: 32, marginTop: 36, color: 'var(--ink-2)' }}>
              Make it <span style={{ color: 'var(--acc)' }}>inevitable.</span>
            </p>
          </div>

          <FCol title="Product" items={[
            ['Portfolio', '#portfolio'], ['Services', '#services'], ['Why us', '#compare'],
            ['ROI', '#roi'], ['Process', '#process'], ['Pricing', '#pricing'],
          ]} onSectionClick={onSectionClick} />
          <FCol title="Company" items={[
            ['Team', '#team'], ['FAQ', '#faq'],
          ]} onSectionClick={onSectionClick} />
          <FCol title="Contact" items={[
            ['Book a call', 'https://cal.com/neutralstudio/30min', true],
            ['arnaupinyolwork@gmail.com', 'mailto:arnaupinyolwork@gmail.com', true],
            ['LinkedIn', 'https://www.linkedin.com/in/arnau-pi%C3%B1ol-olabegoya-722329158/', true],
          ]} onSectionClick={onSectionClick} />
        </div>

        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          paddingTop: 28, fontSize: 12, color: 'var(--ink-3)', fontFamily: 'var(--mono)',
        }} className="footer-bottom">
          <span>© 2026 Neutral Studio. All rights reserved.</span>
          <span>Built with care · React · Three.js</span>
        </div>
      </div>

      <BigType />

      <style>{`
        @media (max-width: 760px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
          .footer-grid > div:first-child { grid-column: span 2; }
          .footer-bottom { flex-direction: column; gap: 12px; align-items: flex-start !important; }
        }
      `}</style>
    </footer>
  )
}

function FCol({ title, items, onSectionClick }) {
  return (
    <div>
      <div className="eyebrow" style={{ marginBottom: 18 }}>{title}</div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {items.map(([label, href, ext]) => (
          <li key={label}>
            {ext ? (
              <a href={href} target="_blank" rel="noreferrer"
                 style={{ fontSize: 14, color: 'var(--ink-2)', transition: 'color .2s' }}
                 onMouseEnter={e => e.currentTarget.style.color = 'var(--acc)'}
                 onMouseLeave={e => e.currentTarget.style.color = 'var(--ink-2)'}>
                {label}
              </a>
            ) : (
              <button type="button"
                 onClick={() => onSectionClick(href)}
                 style={{ fontSize: 14, color: 'var(--ink-2)', transition: 'color .2s', background: 'transparent', border: 'none', padding: 0, textAlign: 'left' }}
                 onMouseEnter={e => e.currentTarget.style.color = 'var(--acc)'}
                 onMouseLeave={e => e.currentTarget.style.color = 'var(--ink-2)'}>
                {label}
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

function BigType() {
  return (
    <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', padding: '20px 0 8px', userSelect: 'none' }}>
      <div style={{
        fontFamily: 'var(--sans)', fontWeight: 600, letterSpacing: '-0.06em',
        fontSize: 'clamp(80px, 19vw, 280px)',
        lineHeight: 0.85,
        background: 'linear-gradient(180deg, rgba(245,245,244,0.12) 0%, rgba(245,245,244,0.02) 100%)',
        WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
        textAlign: 'center',
      }}>
        NEUTRAL<span className="serif" style={{ color: 'var(--acc)', WebkitTextFillColor: 'currentcolor' }}>·</span>STUDIO
      </div>
    </div>
  )
}
