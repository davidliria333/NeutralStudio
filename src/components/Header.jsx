import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import FluidGlassMenu from './FluidGlassMenu.jsx'

const NAV = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Why us', href: '#compare' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export default function Header() {
  const navigate = useNavigate()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.hash])

  const onNavClick = (href) => {
    if (location.pathname === '/') {
      if (window.location.hash !== href) {
        window.history.replaceState(null, '', href)
      }
      const target = document.querySelector(href)
      if (target) {
        const headerOffset = 112
        const top = target.getBoundingClientRect().top + window.scrollY - headerOffset
        window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
      }
      return
    }
    navigate({ pathname: '/', hash: href })
  }

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
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--ink)' }}>
          <img src="/brand-favicon.svg" alt="" width="26" height="26" style={{ borderRadius: 6, display: 'block' }} />
          <img src="/brand-logo.svg" alt="Neutral" height="20" style={{ display: 'block', filter: 'invert(1)' }} className="brand-word" />
          <span style={{ fontSize: 11, color: 'var(--ink-3)', fontFamily: 'var(--mono)', marginLeft: 2, letterSpacing: '0.04em' }}>STUDIO</span>
        </Link>

        <nav className="desktop-nav" style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          <FluidGlassMenu items={NAV} onNavClick={onNavClick} />
        </nav>

        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <a href="https://cal.com/neutralstudio/30min" target="_blank" rel="noreferrer" className="btn btn--primary" style={{ padding: '10px 18px', fontSize: 13 }}>
            Book a call <span className="arrow">→</span>
          </a>
          <button className="mobile-toggle" onClick={() => setOpen(o => !o)} aria-label="Menu" aria-expanded={open ? 'true' : 'false'} aria-controls="mobile-nav" style={{
            display: 'none', background: 'transparent', border: '1px solid var(--line-2)', color: 'var(--ink)',
            width: 38, height: 38, borderRadius: 999,
          }}>
            {open ? (
              <span style={{ fontSize: 18, lineHeight: 1 }}>×</span>
            ) : (
              <>
                <span style={{ display: 'block', width: 14, height: 1, background: 'var(--ink)', margin: '0 auto 4px' }} />
                <span style={{ display: 'block', width: 14, height: 1, background: 'var(--ink)', margin: '0 auto' }} />
              </>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-nav" style={{
          position: 'fixed', inset: 0, top: 70, background: 'rgba(10,10,11,0.96)',
          backdropFilter: 'blur(20px)', padding: 'var(--gut)', zIndex: 79,
        }} onClick={() => setOpen(false)}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginTop: 24 }}>
            {NAV.map(n => (
              <button key={n.href} type="button" onClick={() => onNavClick(n.href)} style={{
                fontSize: 28, fontWeight: 500, padding: '14px 0', borderBottom: '1px solid var(--line)',
                letterSpacing: '-0.02em',
                background: 'transparent', color: 'var(--ink)', textAlign: 'left', borderTop: 'none', borderLeft: 'none', borderRight: 'none',
              }}>{n.label}</button>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 880px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; align-items: center; justify-content: center; flex-direction: column; }
        }
        @media (max-width: 480px) {
          .brand-word { display: none !important; }
          header .btn--primary { padding: 8px 14px !important; font-size: 12px !important; }
        }
      `}</style>
    </header>
  )
}
