import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const NAV = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Why us', href: '#compare' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 80,
      padding: scrolled ? '14px var(--gut)' : '20px var(--gut)',
      transition: 'padding .35s var(--ease)',
    }}>
      <div style={{
        maxWidth: 'var(--maxw)', margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(10,10,11,0.7)' : 'rgba(10,10,11,0.0)',
        backdropFilter: scrolled ? 'blur(20px) saturate(160%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(160%)' : 'none',
        border: '1px solid',
        borderColor: scrolled ? 'var(--line)' : 'transparent',
        borderRadius: 999,
        padding: '10px 14px 10px 20px',
        transition: 'all .35s var(--ease)',
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Logomark />
          <span style={{ fontSize: 14, fontWeight: 600, letterSpacing: '-0.01em' }}>Neutral Studio</span>
          <span style={{ fontSize: 11, color: 'var(--ink-3)', fontFamily: 'var(--mono)', marginLeft: 4 }}>® 26</span>
        </Link>

        <nav className="desktop-nav" style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          {NAV.map(n => (
            <a key={n.href} href={n.href} style={{
              fontSize: 13, padding: '8px 14px', color: 'var(--ink-2)',
              borderRadius: 999, transition: 'all .2s var(--ease)',
            }} onMouseEnter={e => { e.currentTarget.style.color = 'var(--ink)'; e.currentTarget.style.background = 'var(--bg-elev)' }}
               onMouseLeave={e => { e.currentTarget.style.color = 'var(--ink-2)'; e.currentTarget.style.background = 'transparent' }}>
              {n.label}
            </a>
          ))}
        </nav>

        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <a href="https://cal.com/neutralstudio/30min" target="_blank" rel="noreferrer" className="btn btn--primary" style={{ padding: '10px 18px', fontSize: 13 }}>
            Book a call <span className="arrow">→</span>
          </a>
          <button className="mobile-toggle" onClick={() => setOpen(o => !o)} aria-label="Menu" style={{
            display: 'none', background: 'transparent', border: '1px solid var(--line-2)', color: 'var(--ink)',
            width: 38, height: 38, borderRadius: 999,
          }}>
            <span style={{ display: 'block', width: 14, height: 1, background: 'var(--ink)', margin: '0 auto 4px' }} />
            <span style={{ display: 'block', width: 14, height: 1, background: 'var(--ink)', margin: '0 auto' }} />
          </button>
        </div>
      </div>

      {open && (
        <div style={{
          position: 'fixed', inset: 0, top: 70, background: 'rgba(10,10,11,0.96)',
          backdropFilter: 'blur(20px)', padding: 'var(--gut)', zIndex: 79,
        }} onClick={() => setOpen(false)}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginTop: 24 }}>
            {NAV.map(n => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} style={{
                fontSize: 28, fontWeight: 500, padding: '14px 0', borderBottom: '1px solid var(--line)',
                letterSpacing: '-0.02em',
              }}>{n.label}</a>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 880px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; align-items: center; justify-content: center; flex-direction: column; }
        }
      `}</style>
    </header>
  )
}

function Logomark() {
  return (
    <div style={{
      width: 26, height: 26, borderRadius: 8,
      background: 'linear-gradient(135deg, var(--acc) 0%, var(--acc-2) 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: '0 4px 12px -4px rgba(216, 255, 62, 0.4)',
    }}>
      <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#0a0a0b' }} />
    </div>
  )
}
