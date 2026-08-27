import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CALENDAR_URL, CAL_POPUP_PROPS } from './CalPopup.jsx'

const NAV = [
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'Approach', href: '/#approach' },
  { label: 'About', href: '/about' },
]

export default function Header() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location.pathname, location.hash])

  useEffect(() => {
    document.body.classList.toggle('has-open-menu', open)
    return () => document.body.classList.remove('has-open-menu')
  }, [open])

  const isCurrent = (href) => href.startsWith('/#')
    ? false
    : location.pathname === href || (href !== '/' && location.pathname.startsWith(`${href}/`))

  return (
    <header className={`subpage-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="subpage-header__bar">
        <Link className="subpage-header__brand" to="/" aria-label="Neutral Studio home">
          <img src="/Logo-01.png" alt="Neutral" width="209" height="58" />
          <span>Studio</span>
        </Link>

        <nav className="subpage-header__nav" aria-label="Primary navigation">
          {NAV.map((item) => (
            <Link className={isCurrent(item.href) ? 'is-current' : ''} aria-current={isCurrent(item.href) ? 'page' : undefined} to={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="subpage-header__actions">
          <a
            className="subpage-header__cta"
            href={CALENDAR_URL}
            {...CAL_POPUP_PROPS}
            target="_blank"
            rel="noreferrer"
            data-umami-event="calendar_opened"
            data-umami-event-placement="service_header"
          >
            Tell us your idea <span aria-hidden="true">↗</span>
          </a>
          <button
            className="subpage-header__toggle"
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <nav id="mobile-nav" className={`subpage-mobile-nav${open ? ' is-open' : ''}`} aria-label="Mobile navigation" inert={open ? undefined : ''}>
        {NAV.map((item) => (
          <Link className={isCurrent(item.href) ? 'is-current' : ''} to={item.href} key={item.href}>
            <span>{item.label}</span><span aria-hidden="true">↗</span>
          </Link>
        ))}
        <Link to="/contact"><span>Contact</span><span aria-hidden="true">↗</span></Link>
      </nav>
    </header>
  )
}
