import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import PricingLever from '../components/PricingLever'
import { CALENDAR_URL, CAL_POPUP_PROPS } from '../components/CalPopup.jsx'
import { UXUI_SCENES } from '../data/portfolio.js'
import { SERVICE_LINKS } from '../seo/site.js'
import './HomeScrollcraft.css'

const LiquidGlass = lazy(() => import('liquid-glass-react'))
const MetalFx = lazy(() => import('metal-fx').then((module) => ({ default: module.MetalFx })))

const MASTER_VIDEO = '/generated/neutral-landscape/neutral-landscape-desktop-seek.mp4'
const MASTER_VIDEO_MOBILE = '/generated/neutral-landscape/neutral-landscape-mobile-seek.mp4'
const MASTER_POSTER = '/generated/neutral-landscape/neutral-landscape-desktop-poster.webp'
const MASTER_POSTER_MOBILE = '/generated/neutral-landscape/neutral-landscape-mobile-poster.jpg'
const WORLD_SPAN = 8.4

function getResponsivePortfolioSrcSet(src) {
  if (!src?.startsWith('/portfolio/branding/')) return undefined
  const filename = src.split('/').pop().replace(/\.webp$/, '')
  return `/portfolio/branding/responsive/${filename}-560.webp 560w, /portfolio/branding/responsive/${filename}-800.webp 800w, ${src} 2048w`
}

const NAV_PROGRESS_NUDGE = 0.001

const landmarks = [
  { id: 'home', label: 'Home', progress: 0, activation: 0 },
  { id: 'approach', label: 'Approach', progress: 0.275, activation: 0.16 },
  { id: 'work', label: 'Work', progress: 0.39, activation: 0.31 },
  { id: 'services', label: 'Services', progress: 0.69, activation: 0.65 },
  { id: 'contact', label: 'Contact', progress: 0.87, activation: 0.84 },
]

const uxuiTitles = [
  'Rewards and wallet',
  'Food delivery',
  'Nutrition tracking',
  'Digital banking',
  'Learning platform',
  'Smart home',
  'Connected health',
]

const uxuiSlides = UXUI_SCENES
  .flatMap((scene) => scene.images.map((image) => ({ ...image, sceneId: scene.id })))
  .map((image, index) => ({
    ...image,
    id: `${image.sceneId}-${index + 1}`,
    title: uxuiTitles[index],
    background: '#eef3f0',
  }))

const portfolioCollections = [
  {
    id: 'branding',
    label: 'Branding',
    slides: [
      {
        id: 'pocket-voice-identity',
        title: 'Pocket Voice identity',
        src: '/portfolio/branding/pocket-voice-identity.webp',
        alt: 'Pocket Voice symbol and wordmark on a bright blue field.',
        width: 2048,
        height: 1541,
        background: '#168fc3',
      },
      {
        id: 'pocket-voice-campaign',
        title: 'Pocket Voice campaign',
        src: '/portfolio/branding/pocket-voice-campaign.webp',
        alt: 'Three Pocket Voice campaign posters presenting the product across mobile interfaces.',
        width: 2048,
        height: 1541,
        background: '#f3f6f8',
      },
      {
        id: 'vira-identity',
        title: 'VIRA identity',
        src: '/portfolio/branding/vira-identity.webp',
        alt: 'VIRA white flower symbol and wordmark over a violet gradient field.',
        width: 2048,
        height: 1541,
        background: '#b77af1',
      },
      {
        id: 'vira-wearable',
        title: 'VIRA wearable experience',
        src: '/portfolio/branding/vira-wearable.webp',
        alt: 'VIRA character experience displayed on an Apple Watch over a violet composition.',
        width: 2048,
        height: 1541,
        background: '#ae77ed',
      },
      {
        id: 'circlehome-identity',
        title: 'CircleHome identity',
        src: '/portfolio/branding/circlehome-identity.webp',
        alt: 'CircleHome green symbol and wordmark on a white field.',
        width: 2048,
        height: 1541,
        background: '#f7faf7',
      },
      {
        id: 'circlehome-launch',
        title: 'CircleHome launch',
        src: '/portfolio/branding/circlehome-launch.webp',
        alt: 'CircleHome launch composition presenting the Spanish product on two mobile screens.',
        width: 2048,
        height: 1541,
        background: '#f7faf7',
      },
    ],
  },
  {
    id: 'web',
    label: 'Web',
    slides: [
      {
        id: 'pocket-voice-web',
        type: 'video',
        title: 'Pocket Voice website',
        src: '/portfolio/web/pocket-voice.mp4',
        poster: '/portfolio/web/pocket-voice-poster.jpg',
        alt: 'Scroll-through of the Pocket Voice product website.',
        width: 1920,
        height: 872,
        background: '#168fc3',
      },
      {
        id: 'busy-bar-web',
        type: 'video',
        title: 'BUSY Bar website',
        src: '/portfolio/web/busy-bar.mp4',
        poster: '/portfolio/web/busy-bar-poster.jpg',
        alt: 'Scroll-through of the BUSY Bar product website.',
        width: 1920,
        height: 872,
        background: '#f2f1ef',
      },
      {
        id: 'five-pathways-web',
        type: 'video',
        title: 'Five Pathways Financial',
        src: '/portfolio/web/five-pathways.mp4',
        poster: '/portfolio/web/five-pathways-poster.jpg',
        alt: 'Scroll-through of the Five Pathways Financial website.',
        width: 1920,
        height: 872,
        background: '#f7f0e4',
      },
    ],
  },
  {
    id: 'ux-ui',
    label: 'UX/UI',
    slides: uxuiSlides,
  },
]

const portfolioMetrics = [
  { value: 100, suffix: '+', label: 'Projects shipped' },
  { text: 'YC', label: 'Startups backed by Y Combinator' },
  { value: 100, prefix: '$', suffix: 'M+', label: 'Raised by teams we\'ve supported' },
]

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
  const [activeCategory, setActiveCategory] = useState('branding')
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

  const activeCollection = portfolioCollections.find(({ id }) => id === activeCategory)

  const selectCategory = (categoryId) => {
    setActiveCategory(categoryId)
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
                <p>One connected approach, never a house style. This selection shows identity, interface and launch systems shaped around different products and audiences. Each expression changes with its context while hierarchy, repeatability and implementation remain visible design criteria.</p>
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
              role="region"
              aria-label={`Selected ${activeCollection.label} work`}
              data-category={activeCollection.id}
            >
              <div className="landscape-carousel__categories" role="group" aria-label="Portfolio categories">
                {portfolioCollections.map((collection) => (
                  <button
                    type="button"
                    key={collection.id}
                    className={activeCategory === collection.id ? 'is-active' : ''}
                    aria-pressed={activeCategory === collection.id}
                    onClick={() => selectCategory(collection.id)}
                    data-umami-event="portfolio_category_selected"
                    data-umami-event-category={collection.id}
                  >
                    {collection.label}
                    <span>{String(collection.slides.length).padStart(2, '0')}</span>
                  </button>
                ))}
              </div>

              <div
                className="landscape-portfolio__grid-scroll"
                tabIndex="0"
                aria-label={`${activeCollection.label} project grid`}
              >
                <div className="landscape-portfolio__grid" key={activeCollection.id}>
                  {activeCollection.slides.map((project, index) => (
                    <figure
                      className="landscape-portfolio__project"
                      key={project.id}
                      style={{ '--slide-bg': project.background }}
                    >
                      <div className="landscape-portfolio__media">
                        <img
                          src={project.poster || project.src}
                          srcSet={project.poster ? undefined : getResponsivePortfolioSrcSet(project.src)}
                          sizes="(max-width: 800px) 44vw, (max-width: 1500px) 24vw, 20vw"
                          alt={project.alt}
                          width={project.width}
                          height={project.height}
                          loading={index < 4 ? 'eager' : 'lazy'}
                          fetchpriority={index === 0 ? 'high' : 'low'}
                          decoding="async"
                        />
                      </div>
                      <figcaption>
                        <span>{String(index + 1).padStart(2, '0')}</span>
                        <strong>{project.title}</strong>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
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
              <Link to="/work">Selected work</Link>
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
