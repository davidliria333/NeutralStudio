import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import PricingLever from '../components/PricingLever'
import { CALENDAR_URL, CAL_POPUP_PROPS } from '../components/CalPopup.jsx'
import { SERVICE_LINKS } from '../seo/site.js'
import './HomeScrollcraft.css'

const LiquidGlass = lazy(() => import('liquid-glass-react'))
const MetalFx = lazy(() => import('metal-fx').then((module) => ({ default: module.MetalFx })))

const MASTER_VIDEO = '/generated/neutral-landscape/neutral-landscape-desktop-seek.mp4'
const MASTER_VIDEO_MOBILE = '/generated/neutral-landscape/neutral-landscape-mobile-seek.mp4'
const MASTER_POSTER = '/generated/neutral-landscape/neutral-landscape-desktop-poster.webp'
const MASTER_POSTER_MOBILE = '/generated/neutral-landscape/neutral-landscape-mobile-poster.jpg'
const WORLD_SPAN = 8.4

const NAV_PROGRESS_NUDGE = 0.001

const landmarks = [
  { id: 'home', label: 'Home', progress: 0, activation: 0 },
  { id: 'approach', label: 'Approach', progress: 0.275, activation: 0.16 },
  { id: 'work', label: 'Work', progress: 0.39, activation: 0.31 },
  { id: 'services', label: 'Services', progress: 0.69, activation: 0.65 },
  { id: 'contact', label: 'Contact', progress: 0.87, activation: 0.84 },
]

const privatePortfolioPreviews = [
  {
    id: 'identity-system',
    label: 'Identity system',
    src: '/generated/private-portfolio/identity-system.webp',
    background: '#178ab8',
  },
  {
    id: 'campaign-system',
    label: 'Campaign system',
    src: '/generated/private-portfolio/campaign-system.webp',
    background: '#cad9df',
  },
  {
    id: 'product-interface',
    label: 'Product interface',
    src: '/generated/private-portfolio/product-interface.webp',
    background: '#9160b4',
  },
  {
    id: 'launch-system',
    label: 'Launch system',
    src: '/generated/private-portfolio/launch-system.webp',
    background: '#b9d5c1',
  },
  {
    id: 'product-website',
    label: 'Product website',
    src: '/generated/private-portfolio/product-website.webp',
    background: '#a89a86',
  },
  {
    id: 'financial-platform',
    label: 'Digital platform',
    src: '/generated/private-portfolio/digital-platform.webp',
    background: '#c8b99f',
  },
]

const portfolioMetrics = [
  { value: 100, suffix: '+', label: 'Projects shipped' },
  { text: 'YC', label: 'Startups backed by Y Combinator' },
  { value: 100, prefix: '$', suffix: 'M+', label: 'Raised by teams we\'ve supported' },
]

function PrivatePortfolioArchive({ active, reducedMotion }) {
  const [activePreview, setActivePreview] = useState(0)
  const [userPaused, setUserPaused] = useState(false)
  const [pageVisible, setPageVisible] = useState(true)

  useEffect(() => {
    const syncVisibility = () => setPageVisible(!document.hidden)
    syncVisibility()
    document.addEventListener('visibilitychange', syncVisibility)
    return () => document.removeEventListener('visibilitychange', syncVisibility)
  }, [])

  useEffect(() => {
    if (reducedMotion) {
      setActivePreview(0)
      return undefined
    }

    if (!active || userPaused || !pageVisible) return undefined

    const interval = window.setInterval(() => {
      setActivePreview((current) => (current + 1) % privatePortfolioPreviews.length)
    }, 4200)

    return () => window.clearInterval(interval)
  }, [active, pageVisible, reducedMotion, userPaused])

  const preview = privatePortfolioPreviews[activePreview]

  return (
    <div
      className="landscape-private-archive"
      role="region"
      aria-label="Private portfolio preview"
    >
      <div className="landscape-private-archive__topbar">
        <span className="landscape-private-archive__status">
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <rect x="3.25" y="7" width="9.5" height="6.75" rx="1.75" />
            <path d="M5.4 7V5.35a2.6 2.6 0 0 1 5.2 0V7" />
          </svg>
          Private portfolio
        </span>
        <span className="landscape-private-archive__type" aria-hidden="true">{preview.label}</span>
        {!reducedMotion && (
          <button
            className="landscape-private-archive__pause"
            type="button"
            aria-label={userPaused ? 'Resume private portfolio preview' : 'Pause private portfolio preview'}
            aria-pressed={userPaused}
            onClick={() => setUserPaused((paused) => !paused)}
          >
            {userPaused ? (
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="m5.3 3.8 6 4.2-6 4.2V3.8Z" />
              </svg>
            ) : (
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M5.5 4v8M10.5 4v8" />
              </svg>
            )}
          </button>
        )}
      </div>

      <div className="landscape-private-archive__stage">
        <div className="landscape-private-archive__slides" aria-hidden="true">
          {privatePortfolioPreviews.map((item, index) => (
            <div
              className={`landscape-private-archive__slide${activePreview === index ? ' is-active' : ''}`}
              key={item.id}
              style={{ '--archive-bg': item.background }}
            >
              <img src={item.src} alt="" width="1440" height="960" decoding="async" />
            </div>
          ))}
        </div>
        <div className="landscape-private-archive__veil" aria-hidden="true" />
        <div className="landscape-private-archive__message">
          <strong>A portfolio chosen for your brief.</strong>
          <p>Project imagery is intentionally obscured.</p>
        </div>
        <div className="landscape-private-archive__progress" aria-hidden="true">
          <span>{String(activePreview + 1).padStart(2, '0')}</span>
          <div>
            {privatePortfolioPreviews.map((item, index) => (
              <i className={activePreview === index ? 'is-active' : ''} key={item.id} />
            ))}
          </div>
          <span>{String(privatePortfolioPreviews.length).padStart(2, '0')}</span>
        </div>
      </div>

      <div className="landscape-private-archive__request">
        <p>Selected work is shared privately, in a short walkthrough.</p>
        <a
          href={CALENDAR_URL}
          {...CAL_POPUP_PROPS}
          target="_blank"
          rel="noreferrer"
          data-umami-event="calendar_opened"
          data-umami-event-placement="portfolio_private"
        >
          Book a portfolio call
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M4 12L12 4M6 4h6v6" />
          </svg>
        </a>
      </div>
    </div>
  )
}

function AnimatedMetric({ value = 0, text = '', prefix = '', suffix = '', label, active, reducedMotion, delay }) {
  const [displayValue, setDisplayValue] = useState(reducedMotion || text ? value : 0)

  useEffect(() => {
    if (text || !active || reducedMotion) {
      setDisplayValue(active || reducedMotion ? value : 0)
      return undefined
    }

    let animationFrame = 0
    let timeout = 0
    const duration = 850

    setDisplayValue(0)
    timeout = window.setTimeout(() => {
      const startedAt = window.performance.now()

      const tick = (now) => {
        const elapsed = Math.min(1, (now - startedAt) / duration)
        const eased = 1 - ((1 - elapsed) ** 4)
        setDisplayValue(Math.round(value * eased))

        if (elapsed < 1) animationFrame = window.requestAnimationFrame(tick)
      }

      animationFrame = window.requestAnimationFrame(tick)
    }, delay)

    return () => {
      window.clearTimeout(timeout)
      window.cancelAnimationFrame(animationFrame)
    }
  }, [active, delay, reducedMotion, text, value])

  const visibleValue = text || `${prefix}${displayValue}${suffix}`
  const accessibleValue = text || `${prefix}${value}${suffix}`

  return (
    <div>
      <dd aria-label={`${accessibleValue} ${label}`}>
        <span aria-hidden="true">{visibleValue}</span>
      </dd>
      <dt>{label}</dt>
    </div>
  )
}

export default function Home() {
  const rootRef = useRef(null)
  const lenisRef = useRef(null)
  const activeRef = useRef(0)
  const surfaceRef = useRef('hero')
  const [activeLandmark, setActiveLandmark] = useState(0)
  const [activeSurface, setActiveSurface] = useState('hero')
  const [reducedMotion, setReducedMotion] = useState(false)
  const [isMobile, setIsMobile] = useState(null)

  useEffect(() => {
    const media = window.matchMedia('(max-width: 800px)')
    const sync = () => setIsMobile(media.matches)
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReducedMotion(media.matches)
    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')
    if (reducedMotion.matches || !finePointer.matches) return undefined

    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.11,
      smoothWheel: true,
      syncTouch: false,
    })

    lenisRef.current = lenis

    return () => {
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  useEffect(() => {
    const root = rootRef.current
    if (!root) return undefined

    if (!root.dataset.scMounted && window.ScrollCraft) {
      window.__sc = window.ScrollCraft.mount(root)
      root.dataset.scMounted = 'true'
    }

    const flight = root.querySelector('[data-sc-mode="worldflight"]')
    let frame = 0

    const update = () => {
      frame = 0
      if (!flight) return

      const top = flight.getBoundingClientRect().top + window.scrollY
      const travel = WORLD_SPAN * window.innerHeight
      const progress = Math.min(1, Math.max(0, (window.scrollY - top) / Math.max(travel, 1)))
      const approachProgress = Math.min(1, Math.max(0, (progress - 0.155) / 0.17))
      const portfolioProgress = Math.min(1, Math.max(0, (progress - 0.31) / 0.2))
      const next = landmarks.reduce((current, landmark, index) => (
        progress >= landmark.activation ? index : current
      ), 0)
      const nextSurface = progress >= 0.84
        ? 'contact'
        : progress >= 0.65
          ? 'services'
          : progress >= 0.31
            ? 'portfolio'
            : progress >= 0.16
              ? 'approach'
              : 'hero'

      root.style.setProperty('--journey-p', progress.toFixed(4))
      root.style.setProperty('--approach-p', approachProgress.toFixed(4))
      root.style.setProperty('--portfolio-p', portfolioProgress.toFixed(4))
      root.dataset.scVerifyState = `${next}:${Math.round(progress * 40)}`
      root.dataset.activeSurface = nextSurface

      if (next !== activeRef.current) {
        activeRef.current = next
        setActiveLandmark(next)
      }

      if (nextSurface !== surfaceRef.current) {
        surfaceRef.current = nextSurface
        setActiveSurface(nextSurface)
      }
    }

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }

    const relayout = () => {
      window.dispatchEvent(new Event('resize'))
      schedule()
    }

    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    window.addEventListener('load', relayout)
    document.fonts?.ready?.then(relayout)
    update()

    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      window.removeEventListener('load', relayout)
    }
  }, [])

  const goToLandmark = (landmark) => {
    const flight = rootRef.current?.querySelector('[data-sc-mode="worldflight"]')
    if (!flight) return
    const top = flight.getBoundingClientRect().top + window.scrollY
    const targetProgress = Math.min(1, landmark.progress + (landmark.progress > 0 ? NAV_PROGRESS_NUDGE : 0))
    const target = top + targetProgress * WORLD_SPAN * window.innerHeight
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, { lerp: 0.1 })
      return
    }

    window.scrollTo({ top: target, behavior: 'smooth' })
  }

  return (
    <div className="landscape-page" ref={rootRef} data-sc-verify-state="0:0" data-active-surface="hero">
      <div className="landscape-flight" data-sc-mode="worldflight" data-sc-seam="0.02">
        <div className="landscape-world sc-world" data-sc-world aria-hidden="true">
          <div
            className="landscape-world__segment sc-world__seg"
            data-sc-segment
            data-sc-w={WORLD_SPAN}
            data-sc-waypoint="Neutral Studio journey"
            style={{ opacity: 1 }}
          >
            <picture className="sc-world__poster-frame">
              <source media="(max-width: 800px)" srcSet={MASTER_POSTER_MOBILE} />
              <img
                className="sc-world__poster"
                src={MASTER_POSTER}
                alt=""
                loading="eager"
                fetchpriority="high"
                decoding="async"
              />
            </picture>
            <video
              data-sc-src={MASTER_VIDEO}
              data-sc-src-mobile={MASTER_VIDEO_MOBILE}
              data-sc-native
              data-sc-native-mobile
              width="2560"
              height="1440"
              playsInline
              muted
              preload="none"
              aria-hidden="true"
            />
          </div>

          <svg className="landscape-contours" viewBox="0 0 1600 900" preserveAspectRatio="none">
            <path d="M-70 744C220 621 352 820 568 706S900 430 1110 545s274 183 570 40" />
            <path d="M-42 786C244 681 383 850 602 741s315-242 520-131 267 156 516 69" />
          </svg>
        </div>

        <div className="landscape-copy sc-world__copy" data-sc-world-copy>
          <div className="landscape-copy__wash sc-world__scrim" />

          <header className="landscape-header">
            <div className="landscape-menu">
              <button
                className="landscape-brand"
                type="button"
                onClick={() => goToLandmark(landmarks[0])}
                aria-label="Neutral Studio home"
              >
                <img
                  className="landscape-brand__wordmark"
                  src="/Logo-01.png"
                  alt=""
                  width="209"
                  height="58"
                  decoding="sync"
                  draggable="false"
                />
                <span className="landscape-brand__studio">Studio</span>
              </button>

              <nav className="landscape-route" aria-label="Neutral Studio sections">
                {landmarks.map((landmark, index) => (
                  <button
                    key={landmark.id}
                    type="button"
                    className={activeLandmark === index ? 'is-active' : ''}
                    aria-current={activeLandmark === index ? 'step' : undefined}
                    onClick={() => goToLandmark(landmark)}
                  >
                    <span>{landmark.label}</span>
                    <i aria-hidden="true" />
                  </button>
                ))}
              </nav>

              <a
                className="landscape-menu__cta"
                href={CALENDAR_URL}
                {...CAL_POPUP_PROPS}
                target="_blank"
                rel="noreferrer"
                data-umami-event="calendar_opened"
                data-umami-event-placement="header"
              >
                <span>Start your path</span>
                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M4 12L12 4M6 4h6v6" />
                </svg>
              </a>
            </div>
          </header>

          <section
            id="home"
            className="landscape-copy__hero"
            data-sc-copy
            data-sc-window="0 0.19 0 0.32"
            aria-labelledby="home-title"
            inert={activeSurface === 'hero' ? undefined : ''}
          >
            <div className="landscape-hero__center">
              <h1 id="home-title" className="landscape-hero__title" aria-label="Neutral Studio">
                <span aria-hidden="true">Neutral</span>
              </h1>
              <p className="landscape-hero__declaration">One clear direction for your brand, product and website—from the promise people first understand to the clear experience they use every day.</p>
              {isMobile !== false ? (
                <div className="landscape-hero__metal landscape-hero__metal--static">
                  <div className="landscape-hero__cta-host">
                    <div className="landscape-hero__cta-glass landscape-hero__cta-glass--static">
                      <a
                        className="landscape-hero__cta"
                        href={CALENDAR_URL}
                        {...CAL_POPUP_PROPS}
                        target="_blank"
                        rel="noreferrer"
                        data-umami-event="calendar_opened"
                        data-umami-event-placement="hero_mobile"
                      >
                        <span>Start your path</span>
                        <i aria-hidden="true">
                          <svg viewBox="0 0 20 20" fill="none">
                            <path d="M5 15L15 5M7 5h8v8" />
                          </svg>
                        </i>
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <Suspense fallback={null}>
                  <MetalFx
                    className="landscape-hero__metal"
                    variant="button"
                    preset="chromatic"
                    theme="dark"
                    strength={1}
                    borderRadius={18}
                    paused={reducedMotion}
                    normalizeHostStyles={false}
                  >
                  <div className="landscape-hero__cta-host">
                    <LiquidGlass
                    className="landscape-hero__cta-glass"
                    displacementScale={30}
                    blurAmount={0.08}
                    saturation={130}
                    aberrationIntensity={1.1}
                    elasticity={0.06}
                    cornerRadius={18}
                    padding="0"
                  >
                    <a
                      className="landscape-hero__cta"
                      href={CALENDAR_URL}
                      {...CAL_POPUP_PROPS}
                      target="_blank"
                      rel="noreferrer"
                      data-umami-event="calendar_opened"
                      data-umami-event-placement="hero_desktop"
                    >
                      <span>Start your path</span>
                      <i aria-hidden="true">
                        <svg viewBox="0 0 20 20" fill="none">
                          <path d="M5 15L15 5M7 5h8v8" />
                        </svg>
                      </i>
                    </a>
                    </LiquidGlass>
                  </div>
                  </MetalFx>
                </Suspense>
              )}
            </div>
          </section>

          <section
            id="approach"
            className="landscape-copy__approach"
            data-sc-copy
            data-sc-window="0.16 0.34 0.22 0.28"
            aria-labelledby="approach-title"
            aria-hidden={activeSurface === 'approach' ? undefined : true}
            inert={activeSurface === 'approach' ? undefined : ''}
          >
            <div className="landscape-approach__statement landscape-panel">
              <h2 id="approach-title">Many touchpoints. One company.</h2>
              <p>Neutral Studio connects positioning, identity, product behavior and website narrative before those decisions drift apart. The result is one promise people can recognize from their first impression through to daily product use, with practical rules your team can continue applying. <span className="landscape-approach__supplement">That shared direction gives founders, designers and engineers one test for every new touchpoint: does it clarify the same idea, or create another version of the company?</span></p>
            </div>

            <div className="landscape-approach__instrument">
              <div className="landscape-approach__field">
                <ol className="landscape-approach__translations" aria-label="Four connected design translations">
                <li className="landscape-approach__translation landscape-approach__translation--position">
                  <span className="landscape-approach__translation-copy">
                    <strong>Position</strong>
                    <small>What the company stands for</small>
                  </span>
                  <span className="landscape-approach__study landscape-approach__study--position" aria-hidden="true">
                    <i /><i /><i />
                  </span>
                </li>
                <li className="landscape-approach__translation landscape-approach__translation--identity">
                  <span className="landscape-approach__translation-copy">
                    <strong>Identity</strong>
                    <small>How it becomes recognizable</small>
                  </span>
                  <span className="landscape-approach__study landscape-approach__study--identity" aria-hidden="true">
                    {'Neutral'.split('').map((letter, index) => <i key={`${letter}-${index}`}>{letter}</i>)}
                  </span>
                </li>
                <li className="landscape-approach__translation landscape-approach__translation--product">
                  <span className="landscape-approach__translation-copy">
                    <strong>Product</strong>
                    <small>How the promise works</small>
                  </span>
                  <span className="landscape-approach__study landscape-approach__study--product" aria-hidden="true">
                    <i><b /></i><span />
                  </span>
                </li>
                <li className="landscape-approach__translation landscape-approach__translation--website">
                  <span className="landscape-approach__translation-copy">
                    <strong>Website</strong>
                    <small>How people understand and act</small>
                  </span>
                  <span className="landscape-approach__study landscape-approach__study--website" aria-hidden="true">
                    <span>Start your path</span>
                    <i>
                      <svg viewBox="0 0 16 16" fill="none"><path d="M4 12L12 4M6 4h6v6" /></svg>
                    </i>
                  </span>
                </li>
                </ol>
                <span className="landscape-approach__translation-node" aria-hidden="true" />
              </div>

              <div className="landscape-approach__spine" aria-hidden="true"><i /></div>

              <div className="landscape-approach__outcome">
                <span className="landscape-approach__one" aria-hidden="true">ONE</span>
                <div>
                  <strong>One clear direction.</strong>
                  <p>The same promise, from first impression to daily use.</p>
                </div>
              </div>
            </div>
          </section>

          <section
            id="work"
            className="landscape-copy__portfolio"
            aria-labelledby="portfolio-title"
            inert={activeSurface === 'portfolio' ? undefined : ''}
          >
            <div
              className="landscape-portfolio__proof landscape-panel"
              data-sc-copy
              data-sc-window="0.31 0.65 0.13 0.13"
            >
              <div className="landscape-portfolio__intro">
                <h2 id="portfolio-title">Different problems deserve different expressions.</h2>
                <p>The full work is shared privately, in context. Book a call and we’ll bring the identity, product and web projects most relevant to what you’re building.</p>
              </div>

              <dl className="landscape-portfolio__metrics" aria-label="Studio metrics">
                {portfolioMetrics.map((metric, index) => (
                  <AnimatedMetric
                    key={metric.label}
                    {...metric}
                    active={activeSurface === 'portfolio'}
                    reducedMotion={reducedMotion}
                    delay={index * 90}
                  />
                ))}
              </dl>
            </div>

            <div
              className="landscape-portfolio__gallery"
              data-sc-copy
              data-sc-window="0.31 0.65 0.13 0.13"
            >
              <PrivatePortfolioArchive
                active={activeSurface === 'portfolio'}
                reducedMotion={reducedMotion}
              />
            </div>
          </section>

          <section
            id="services"
            className="landscape-copy__services"
            data-sc-copy
            data-sc-window="0.65 0.86 0.2 0.22"
            aria-labelledby="services-title"
            inert={activeSurface === 'services' ? undefined : ''}
          >
            <PricingLever ctaHref={CALENDAR_URL} staticGlass={isMobile !== false} />
          </section>

          <section
            id="contact"
            className="landscape-copy__contact landscape-panel"
            data-sc-copy
            data-sc-window="0.84 1 0.28 0"
            aria-labelledby="contact-title"
            inert={activeSurface === 'contact' ? undefined : ''}
          >
            <h2 id="contact-title">What are you building?</h2>
            <p className="landscape-contact__lead">For founders at a decision point: launching a new company, changing direction, preparing a product release or making disconnected brand, web and interface pieces work together. Bring the current constraint and the evidence you already have; the first task is defining what the project genuinely needs to prove or ship.</p>
            <a
              href={CALENDAR_URL}
              {...CAL_POPUP_PROPS}
              target="_blank"
              rel="noreferrer"
              data-umami-event="calendar_opened"
              data-umami-event-placement="contact"
            >
              Tell us your idea <span aria-hidden="true">↗</span>
            </a>
            <p className="landscape-contact__note">Neutral Studio · Remote worldwide<br />Branding · Web · UX/UI · Motion · Strategy</p>
            <nav className="landscape-contact__links" aria-label="Studio links">
              <Link to="/services">Services overview</Link>
              {SERVICE_LINKS.map(({ path, label }) => <Link key={path} to={path}>{label}</Link>)}
              <a
                href={CALENDAR_URL}
                {...CAL_POPUP_PROPS}
                target="_blank"
                rel="noreferrer"
                data-umami-event="calendar_opened"
                data-umami-event-placement="contact_private_portfolio"
              >Private portfolio</a>
              <Link to="/about">About</Link>
              <Link to="/privacy">Privacy</Link>
              <Link to="/legal">Legal</Link>
            </nav>
          </section>
        </div>

        <div className="sc-world__spacer" data-sc-spacer aria-hidden="true" style={{ height: `${WORLD_SPAN * 100}vh` }} />
      </div>
    </div>
  )
}
