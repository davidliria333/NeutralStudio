import { CALENDAR_URL, CAL_POPUP_PROPS } from './CalPopup.jsx'

export default function Footer() {
  return (
    <footer style={{ background: '#070708', color: 'var(--ink)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>

      {/* CTA block */}
      <div className="container" style={{ padding: 'clamp(80px, 10vw, 130px) var(--gut) 0' }}>
        <div style={{
          display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
          gap: 48, flexWrap: 'wrap',
          paddingBottom: 'clamp(60px, 8vw, 96px)',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
        }} className="footer-cta-row">
          <div style={{ flex: '1 1 480px' }}>
            {/* Studio descriptor */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 14px', borderRadius: 999,
              border: '1px solid rgba(255,255,255,0.1)',
              marginBottom: 32,
            }}>
              <span style={{
                width: 7, height: 7, borderRadius: 999,
                background: '#4ade80',
                boxShadow: '0 0 0 3px rgba(74,222,128,0.18)',
                animation: 'footer-pulse 2.4s ease-in-out infinite',
                flexShrink: 0,
              }} />
              <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Independent design practice · Barcelona
              </span>
            </div>

            <h2 style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(42px, 6vw, 88px)',
              lineHeight: 1.0,
              letterSpacing: '-0.02em',
              color: 'rgba(245,245,244,0.92)',
              margin: 0,
              fontWeight: 400,
            }}>
              Make it{' '}
              <span style={{ color: 'var(--acc)' }}>inevitable.</span>
            </h2>

            <p style={{
              marginTop: 20, marginBottom: 0,
              fontSize: 16, color: 'rgba(255,255,255,0.4)',
              maxWidth: '44ch', lineHeight: 1.6,
            }}>
              Strategy, identity, product and web shaped as one coherent system.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flexShrink: 0 }} className="footer-ctas">
            <a href={CALENDAR_URL} {...CAL_POPUP_PROPS} target="_blank" rel="noreferrer"
              data-umami-event="calendar_opened" data-umami-event-placement="footer"
              style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                padding: '14px 28px', borderRadius: 'var(--r-m)',
                background: 'var(--acc)', color: '#0a0a0b',
                fontSize: 14, fontWeight: 600, textDecoration: 'none',
                transition: 'opacity .18s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              Book a call <span>→</span>
            </a>
            <a href="mailto:arnaupinyolwork@gmail.com?subject=Portfolio%20request%20-%20Neutral%20Studio"
              data-umami-event="email_clicked" data-umami-event-placement="footer_portfolio"
              style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                padding: '14px 28px', borderRadius: 'var(--r-m)',
                background: 'transparent', color: 'rgba(255,255,255,0.55)',
                border: '1px solid rgba(255,255,255,0.1)',
                fontSize: 14, fontWeight: 400, textDecoration: 'none',
                transition: 'border-color .18s, color .18s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.color = 'rgba(255,255,255,0.8)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(255,255,255,0.55)' }}
            >
              Request portfolio
            </a>
          </div>
        </div>

        {/* Nav columns */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: 40,
          padding: 'clamp(48px, 6vw, 72px) 0 40px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }} className="footer-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 26, height: 26, borderRadius: 7,
                background: 'linear-gradient(135deg, var(--acc) 0%, var(--acc-2) 100%)',
                flexShrink: 0,
              }} />
              <span style={{ fontWeight: 600, fontSize: 15, color: 'rgba(245,245,244,0.9)' }}>Neutral Studio</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 13, maxWidth: 260, lineHeight: 1.65, margin: 0 }}>
              Independent design studio for ambitious ideas: brand, product, web, motion and strategy.
            </p>
          </div>

          <FCol title="Product" items={[
            ['Brand identity', '/services/brand'], ['Web design', '/services/web'],
            ['UX/UI design', '/services/ux-ui'], ['App development', '/services/app-development'],
            ['Design systems', '/services/systems'], ['Pitch decks', '/services/pitch-deck'],
          ]} />
          <FCol title="Studio" items={[
            ['About', '/about'], ['Selected work', '/#work'],
            ['Privacy', '/privacy'], ['Legal', '/legal'],
          ]} />
          <FCol title="Contact" items={[
            ['Book a call', CALENDAR_URL, true],
            ['arnaupinyolwork@gmail.com', 'mailto:arnaupinyolwork@gmail.com', true],
            ['LinkedIn', 'https://www.linkedin.com/in/arnau-pi%C3%B1ol-olabegoya-722329158/', true],
          ]} />
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          paddingTop: 24, paddingBottom: 40,
          fontSize: 11, color: 'rgba(255,255,255,0.25)', fontFamily: 'var(--mono)',
          letterSpacing: '0.06em',
        }} className="footer-bottom">
          <span>© 2026 Neutral Studio</span>
          <span>React · Three.js · Vercel</span>
        </div>
      </div>

      <BigType />

      <style>{`
        @keyframes footer-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.45; }
        }
        @media (max-width: 900px) {
          .footer-cta-row { align-items: flex-start !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
          .footer-grid div:first-child { grid-column: span 2; }
        }
        @media (max-width: 620px) {
          .footer-ctas { flex-direction: row !important; flex-wrap: wrap; }
          .footer-ctas a { flex: 1; }
          .footer-bottom { flex-direction: column; gap: 10px; align-items: flex-start !important; }
        }
      `}</style>
    </footer>
  )
}

function FCol({ title, items }) {
  return (
    <div>
      <div style={{
        fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.3)', marginBottom: 18,
      }}>{title}</div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
        {items.map(([label, href, ext]) => (
          <li key={label}>
            <a href={href} target={ext ? '_blank' : undefined} rel={ext ? 'noreferrer' : undefined}
                {...(href === CALENDAR_URL ? CAL_POPUP_PROPS : {})}
                data-umami-event={href.startsWith('mailto:') ? 'email_clicked' : undefined}
                data-umami-event-placement={href.startsWith('mailto:') ? 'footer_navigation' : undefined}
                style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color .18s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.88)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}>
                {label}
              </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function BigType() {
  return (
    <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', paddingBottom: 0, userSelect: 'none', lineHeight: 1 }}>
      <div style={{
        fontFamily: 'var(--sans)', fontWeight: 700, letterSpacing: '-0.055em',
        fontSize: 'clamp(80px, 19vw, 280px)',
        lineHeight: 0.82,
        background: 'linear-gradient(180deg, rgba(245,245,244,0.07) 0%, rgba(245,245,244,0.015) 100%)',
        WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
        textAlign: 'center',
      }}>
        NEUTRAL<span className="serif" style={{ color: 'rgba(216,255,62,0.18)', WebkitTextFillColor: 'rgba(216,255,62,0.18)' }}>·</span>STUDIO
      </div>
    </div>
  )
}
