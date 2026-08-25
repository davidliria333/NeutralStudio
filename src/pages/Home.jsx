import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import PricingLever from '../components/PricingLever'
import { UXUI_SCENES } from '../data/portfolio.js'
import './HomeScrollcraft.css'

const LiquidGlass = lazy(() => import('liquid-glass-react'))
const MetalFx = lazy(() => import('metal-fx').then((module) => ({ default: module.MetalFx })))
const SplitText = lazy(() => import('../components/SplitText'))

const CALENDAR_URL = 'https://cal.com/neutralstudio/30min?overlayCalendar=true'
const MASTER_VIDEO = '/generated/neutral-landscape/TensorPix - neutral-landscape-master-1440p-scrub.mp4'
const MASTER_VIDEO_MOBILE = '/generated/neutral-landscape/neutral-landscape-mobile-scrub.mp4'
const MASTER_POSTER = '/generated/neutral-landscape/tensorpix-poster-4k.jpg'
const MASTER_POSTER_MOBILE = '/generated/neutral-landscape/neutral-landscape-mobile-poster.jpg'
const WORLD_SPAN = 8.4

const landmarks = [
  { id: 'arrival', label: 'Home', progress: 0 },
  { id: 'approach', label: 'Approach', progress: 0.19 },
  { id: 'work', label: 'Work', progress: 0.39 },
  { id: 'services', label: 'Services', progress: 0.69 },
  { id: 'contact', label: 'Contact', progress: 0.87 },
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
        id: 'circlehome-lockup',
        title: 'CircleHome identity',
        src: '/Portfolio%20Projects/CIRCLEHOME/Logos-01.png',
        alt: 'CircleHome green symbol and wordmark on a white identity board.',
        width: 4000,
        height: 2250,
        background: '#f4f8f5',
      },
      {
        id: 'circlehome-system',
        title: 'CircleHome brand system',
        src: '/Portfolio%20Projects/CIRCLEHOME/Logos-05.png',
        alt: 'CircleHome symbol, wordmark and tagline arranged vertically in green.',
        width: 2252,
        height: 2252,
        background: '#f4f8f5',
      },
      {
        id: 'vira-identity',
        title: 'VIRA identity',
        src: '/Portfolio%20Projects/VIRA/00_logo.png',
        alt: 'VIRA white flower symbol and wordmark over a violet gradient field.',
        width: 2292,
        height: 2292,
        background: '#b77af1',
      },
      {
        id: 'galeon-identity',
        title: 'Galeón identity',
        src: '/Galeon/Treball-01.png',
        alt: 'Galeón heritage navigation wordmark presented on a deep mineral background.',
        width: 4500,
        height: 5625,
        background: '#30494e',
      },
      {
        id: 'symbol-study',
        title: 'Symbol study',
        src: '/Logos/00_logo_Mesa%20de%20trabajo%2016%20copia%202.png',
        alt: 'Interlocking orange, red and yellow geometric brand symbol on white.',
        width: 719,
        height: 300,
        background: '#f7f6f2',
      },
    ],
  },
  {
    id: 'web',
    label: 'Web',
    slides: [
      {
        id: 'galeon-tablet',
        title: 'Galeón digital archive',
        src: '/Galeon/Treball_Mesa%20de%20trabajo%201%20copia.png',
        alt: 'Galeón digital heritage archive shown on a tablet in a dark photographic scene.',
        width: 4500,
        height: 5625,
        background: '#0a0b12',
      },
      {
        id: 'galeon-experience',
        title: 'Heritage navigation',
        src: '/Galeon/Treball_Mesa%20de%20trabajo%201%20copia%202.png',
        alt: 'Galeón web experience combining museum imagery, navigation and editorial typography.',
        width: 4500,
        height: 5625,
        background: '#30494e',
      },
      {
        id: 'circlehome-launch',
        title: 'CircleHome launch',
        src: '/Portfolio%20Projects/CIRCLEHOME/We%20are%20live.jpg',
        alt: 'CircleHome Spanish launch composition with two mobile interface mockups.',
        width: 2160,
        height: 2160,
        background: '#f7f8f6',
      },
      {
        id: 'circlehome-detail',
        title: 'CircleHome property detail',
        src: '/Portfolio%20Projects/CIRCLEHOME/flatten.jpg',
        alt: 'CircleHome property detail interface shown on a phone with community portraits.',
        width: 2134,
        height: 1200,
        background: '#f7f8f6',
      },
      {
        id: 'circlehome-community',
        title: 'CircleHome community',
        src: '/Portfolio%20Projects/CIRCLEHOME/MockUp_3.png',
        alt: 'CircleHome mobile property experience surrounded by community portraits.',
        width: 4000,
        height: 3200,
        background: '#f7f8f6',
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
  { value: '100+', label: 'Projects shipped' },
  { value: String(uxuiSlides.length), label: 'Interface studies selected' },
  { value: '5', label: 'Disciplines connected' },
]

export default function Home() {
  const rootRef = useRef(null)
  const lenisRef = useRef(null)
  const activeRef = useRef(0)
  const surfaceRef = useRef('hero')
  const activeCategoryRef = useRef('ux-ui')
  const portfolioRef = useRef(0)
  const portfolioManualRef = useRef(false)
  const [activeLandmark, setActiveLandmark] = useState(0)
  const [activeSurface, setActiveSurface] = useState('hero')
  const [activeCategory, setActiveCategory] = useState('ux-ui')
  const [activeProject, setActiveProject] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [isMobile, setIsMobile] = useState(() => window.matchMedia('(max-width: 800px)').matches)

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
      const carouselProgress = Math.min(1, Math.max(0, (progress - 0.31) / 0.34))
      const activeCollection = portfolioCollections.find(({ id }) => id === activeCategoryRef.current)
      const slideCount = activeCollection?.slides.length || 1
      const nextProject = Math.min(
        slideCount - 1,
        Math.floor(carouselProgress * slideCount),
      )
      const next = landmarks.reduce((current, landmark, index) => (
        progress >= landmark.progress ? index : current
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
        if (surfaceRef.current === 'portfolio' && nextSurface !== 'portfolio') {
          portfolioManualRef.current = false
        }
        surfaceRef.current = nextSurface
        setActiveSurface(nextSurface)
      }

      if (!portfolioManualRef.current && nextProject !== portfolioRef.current) {
        portfolioRef.current = nextProject
        setActiveProject(nextProject)
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
    const target = top + landmark.progress * WORLD_SPAN * window.innerHeight
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, { lerp: 0.1 })
      return
    }

    window.scrollTo({ top: target, behavior: 'smooth' })
  }

  const activeCollection = portfolioCollections.find(({ id }) => id === activeCategory)

  const selectCategory = (categoryId) => {
    portfolioManualRef.current = true
    activeCategoryRef.current = categoryId
    portfolioRef.current = 0
    setActiveCategory(categoryId)
    setActiveProject(0)
  }

  const stepProject = (direction) => {
    portfolioManualRef.current = true
    setActiveProject((current) => {
      const next = (current + direction + activeCollection.slides.length) % activeCollection.slides.length
      portfolioRef.current = next
      return next
    })
  }

  return (
    <main className="landscape-page" ref={rootRef} data-sc-verify-state="0:0" data-active-surface="hero">
      <div className="landscape-flight" data-sc-mode="worldflight" data-sc-seam="0.02">
        <div className="landscape-world" data-sc-world aria-hidden="true">
          <div
            className="landscape-world__segment"
            data-sc-segment
            data-sc-w={WORLD_SPAN}
            data-sc-waypoint="Neutral Studio journey"
          >
            <img
              className="sc-world__poster"
              src={isMobile ? MASTER_POSTER_MOBILE : MASTER_POSTER}
              alt=""
              loading="eager"
              fetchpriority="high"
              decoding="async"
            />
            <video
              data-sc-src={MASTER_VIDEO}
              data-sc-src-mobile={MASTER_VIDEO_MOBILE}
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

        <div className="landscape-copy" data-sc-world-copy>
          <div className="landscape-copy__wash sc-world__scrim" />

          <header className="landscape-header">
            <div className="landscape-menu">
              <button
                className="landscape-brand"
                type="button"
                onClick={() => goToLandmark(landmarks[0])}
                aria-label="Neutral Studio home"
              >
                <span className="landscape-brand__wordmark">Neutral</span>
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

              <a className="landscape-menu__cta" href={CALENDAR_URL} target="_blank" rel="noreferrer">
                <span>Start your path</span>
                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M4 12L12 4M6 4h6v6" />
                </svg>
              </a>
            </div>
          </header>

          <section
            className="landscape-copy__hero"
            data-sc-copy
            data-sc-window="0 0.19 0 0.32"
            aria-labelledby="home-title"
            inert={activeSurface === 'hero' ? undefined : ''}
          >
            <div className="landscape-hero__center">
              {isMobile ? (
                <h1 id="home-title" className="landscape-hero__title" aria-label="Neutral Studio">NeutralStudio</h1>
              ) : (
                <Suspense fallback={<h1 id="home-title" className="landscape-hero__title" aria-label="Neutral Studio">NeutralStudio</h1>}>
                  <SplitText
                    id="home-title"
                    aria-label="Neutral Studio"
                    text="NeutralStudio"
                    className="landscape-hero__title"
                    delay={70}
                    duration={0.65}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="0px"
                    textAlign="center"
                    tag="h1"
                    reducedMotion={reducedMotion}
                    style={{ whiteSpace: 'nowrap' }}
                  />
                </Suspense>
              )}
              <p className="landscape-hero__declaration">One clear direction for your brand, product and website.</p>
              {isMobile ? (
                <div className="landscape-hero__metal landscape-hero__metal--static">
                  <div className="landscape-hero__cta-host">
                    <div className="landscape-hero__cta-glass landscape-hero__cta-glass--static">
                      <a className="landscape-hero__cta" href={CALENDAR_URL} target="_blank" rel="noreferrer">
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
                    <a className="landscape-hero__cta" href={CALENDAR_URL} target="_blank" rel="noreferrer">
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
            className="landscape-copy__approach"
            data-sc-copy
            data-sc-window="0.16 0.34 0.22 0.28"
            aria-labelledby="approach-title"
          >
            <div className="landscape-approach__statement landscape-panel">
              <h2 id="approach-title">When every piece has a different owner, the founder becomes the design system.</h2>
              <p>We make the decisions behind identity, product and website together, so every piece belongs to the same company.</p>
            </div>

            <div className="landscape-approach__map">
              <svg viewBox="0 0 1000 430" preserveAspectRatio="none" aria-hidden="true">
                <path
                  className="landscape-approach__track"
                  pathLength="1"
                  d="M20 312C128 246 203 364 318 286C424 215 421 108 552 128C680 147 674 334 797 299C889 273 910 151 985 92"
                />
                <path
                  className="landscape-approach__progress"
                  pathLength="1"
                  d="M20 312C128 246 203 364 318 286C424 215 421 108 552 128C680 147 674 334 797 299C889 273 910 151 985 92"
                />
              </svg>

              <ol className="landscape-approach__steps">
                <li>
                  <span className="landscape-approach__marker" aria-hidden="true">01</span>
                  <div className="landscape-approach__card landscape-panel">
                    <strong>Find the idea</strong>
                    <span>Name the problem, choose a position and decide what the work needs to communicate.</span>
                  </div>
                </li>
                <li>
                  <span className="landscape-approach__marker" aria-hidden="true">02</span>
                  <div className="landscape-approach__card landscape-panel">
                    <strong>Build the system</strong>
                    <span>Shape brand, product and web from the same set of decisions.</span>
                  </div>
                </li>
                <li>
                  <span className="landscape-approach__marker" aria-hidden="true">03</span>
                  <div className="landscape-approach__card landscape-panel">
                    <strong>Make it usable</strong>
                    <span>Leave your team with rules they can apply, extend and explain.</span>
                  </div>
                </li>
              </ol>
            </div>
          </section>

          <section
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
                <p>One connected approach, never a house style. A selection of interface systems shaped around different products and audiences.</p>
              </div>

              <dl className="landscape-portfolio__metrics" aria-label="Studio metrics">
                {portfolioMetrics.map((metric) => (
                  <div key={metric.label}>
                    <dd>{metric.value}</dd>
                    <dt>{metric.label}</dt>
                  </div>
                ))}
              </dl>
            </div>

            <div
              className="landscape-carousel"
              data-sc-copy
              data-sc-window="0.31 0.65 0.13 0.13"
              role="region"
              aria-roledescription="carousel"
              aria-label={`Selected ${activeCollection.label} work`}
              style={{ '--portfolio-slide': activeProject }}
            >
              <div className="landscape-carousel__categories" role="group" aria-label="Portfolio categories">
                {portfolioCollections.map((collection) => (
                  <button
                    type="button"
                    key={collection.id}
                    className={activeCategory === collection.id ? 'is-active' : ''}
                    aria-pressed={activeCategory === collection.id}
                    onClick={() => selectCategory(collection.id)}
                  >
                    {collection.label}
                    <span>{String(collection.slides.length).padStart(2, '0')}</span>
                  </button>
                ))}
              </div>

              <div className="landscape-carousel__viewport">
                <div className="landscape-carousel__track" key={activeCollection.id}>
                  {activeCollection.slides.map((project, index) => (
                    <figure
                      className="landscape-carousel__slide"
                      key={project.id}
                      aria-hidden={index !== activeProject}
                      style={{ '--slide-bg': project.background }}
                    >
                      <img
                        src={project.src}
                        alt={index === activeProject ? project.alt : ''}
                        width={project.width}
                        height={project.height}
                        loading={index === 0 ? 'eager' : 'lazy'}
                        decoding="async"
                      />
                    </figure>
                  ))}
                </div>
              </div>

              <div className="landscape-carousel__footer">
                <div className="landscape-carousel__caption" aria-atomic="true">
                  <span>{String(activeProject + 1).padStart(2, '0')} / {String(activeCollection.slides.length).padStart(2, '0')}</span>
                  <strong>{activeCollection.slides[activeProject].title}</strong>
                </div>

                <div className="landscape-carousel__controls" aria-label="Carousel controls">
                  <button type="button" onClick={() => stepProject(-1)} aria-label="Previous project">
                    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path d="M12.5 4.5L7 10l5.5 5.5" />
                    </svg>
                  </button>
                  <button type="button" onClick={() => stepProject(1)} aria-label="Next project">
                    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path d="M7.5 4.5L13 10l-5.5 5.5" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section
            className="landscape-copy__services"
            data-sc-copy
            data-sc-window="0.65 0.86 0.2 0.22"
            aria-labelledby="services-title"
            inert={activeSurface === 'services' ? undefined : ''}
          >
            <PricingLever ctaHref={CALENDAR_URL} staticGlass={isMobile} />
          </section>

          <section
            className="landscape-copy__contact landscape-panel"
            data-sc-copy
            data-sc-window="0.84 1 0.28 0"
            aria-labelledby="contact-title"
            inert={activeSurface === 'contact' ? undefined : ''}
          >
            <h2 id="contact-title">What are you building?</h2>
            <p className="landscape-contact__lead">For founders at a decision point: launching, changing direction or making disconnected pieces work together.</p>
            <a href={CALENDAR_URL} target="_blank" rel="noreferrer">
              Tell us your idea <span aria-hidden="true">↗</span>
            </a>
            <p className="landscape-contact__note">Neutral Studio, Barcelona<br />Branding · Web · UX/UI · Motion · Strategy</p>
          </section>
        </div>

        <div data-sc-spacer aria-hidden="true" />
      </div>
    </main>
  )
}
