import { useEffect, useRef, useState } from 'react'
import LiquidGlass from 'liquid-glass-react'
import './HomeScrollcraft.css'

const CALENDAR_URL = 'https://cal.com/neutralstudio/30min?overlayCalendar=true'
const MASTER_VIDEO = '/generated/neutral-landscape/TensorPix - neutral-landscape-master-1440p-scrub.mp4'
const MASTER_VIDEO_MOBILE = '/generated/neutral-landscape/TensorPix - neutral-landscape-master-scrub.mp4'
const MASTER_POSTER = '/generated/neutral-landscape/tensorpix-poster-4k.jpg'
const WORLD_SPAN = 8.4

const landmarks = [
  { id: 'arrival', label: 'Home', progress: 0 },
  { id: 'approach', label: 'Approach', progress: 0.19 },
  { id: 'work', label: 'Work', progress: 0.39 },
  { id: 'services', label: 'Services', progress: 0.69 },
  { id: 'contact', label: 'Contact', progress: 0.87 },
]

const projectPlaceholders = [
  { id: '01', x: '-34px', y: '20px', rotation: '-3deg' },
  { id: '02', x: '28px', y: '-24px', rotation: '4deg' },
  { id: '03', x: '-18px', y: '-12px', rotation: '-2deg' },
  { id: '04', x: '38px', y: '24px', rotation: '3deg' },
  { id: '05', x: '-26px', y: '30px', rotation: '-4deg' },
  { id: '06', x: '42px', y: '-18px', rotation: '4deg' },
]

const engagements = [
  {
    name: 'Web',
    detail: 'A focused studio or product website, designed and built as one coherent story.',
    price: '€1,990',
  },
  {
    name: 'Brand only',
    detail: 'A clear identity system with the essential rules and assets ready to use.',
    price: '€2,990',
  },
  {
    name: 'UX/UI',
    detail: 'Product flows and interfaces shaped around real behaviour and business needs.',
    price: '€3,990',
  },
  {
    name: 'Brand + Web + Assets',
    detail: 'One connected launch system across identity, site and core materials.',
    price: '€4,990',
  },
  {
    name: 'App development',
    detail: 'A production-ready application built from product logic through release.',
    price: '€9,990',
  },
]

export default function Home() {
  const rootRef = useRef(null)
  const activeRef = useRef(0)
  const [activeLandmark, setActiveLandmark] = useState(0)

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
      const portfolioProgress = Math.min(1, Math.max(0, (progress - 0.31) / 0.2))
      const next = landmarks.reduce((current, landmark, index) => (
        progress >= landmark.progress ? index : current
      ), 0)

      root.style.setProperty('--journey-p', progress.toFixed(4))
      root.style.setProperty('--portfolio-p', portfolioProgress.toFixed(4))
      root.dataset.scVerifyState = `${next}:${Math.round(progress * 40)}`

      if (next !== activeRef.current) {
        activeRef.current = next
        setActiveLandmark(next)
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
    window.scrollTo({
      top: top + landmark.progress * WORLD_SPAN * window.innerHeight,
      behavior: 'smooth',
    })
  }

  return (
    <main className="landscape-page" ref={rootRef} data-sc-verify-state="0:0">
      <div className="landscape-flight" data-sc-mode="worldflight" data-sc-seam="0.02">
        <div className="landscape-world" data-sc-world aria-hidden="true">
          <div
            className="landscape-world__segment"
            data-sc-segment
            data-sc-w={WORLD_SPAN}
            data-sc-waypoint="Neutral Studio journey"
          >
            <img className="sc-world__poster" src={MASTER_POSTER} alt="" />
            <video
              data-sc-src={MASTER_VIDEO}
              data-sc-src-mobile={MASTER_VIDEO_MOBILE}
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
            <button
              className="landscape-brand"
              type="button"
              onClick={() => goToLandmark(landmarks[0])}
              aria-label="Neutral Studio home"
            >
              <span className="landscape-brand__wordmark">Neutral</span>
              <span className="landscape-brand__studio">Studio</span>
            </button>
            <a className="landscape-header__cta" href={CALENDAR_URL} target="_blank" rel="noreferrer">
              Start the journey
            </a>
          </header>

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

          <section
            className="landscape-copy__hero"
            data-sc-copy
            data-sc-window="0 0.19 0 0.32"
            aria-labelledby="home-title"
          >
            <h1 id="home-title" aria-label="Neutral Studio">
              <span>Neutral</span><span>Studio</span>
            </h1>
            <div className="landscape-hero__lower">
              <div className="landscape-hero__promise">
                <strong>Start your path to a world-class brand.</strong>
                <p>Brand, product and web shaped as one working system.</p>
              </div>
              <a className="landscape-hero__cta" href={CALENDAR_URL} target="_blank" rel="noreferrer">
                <span>Start your journey</span>
                <i aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="none">
                    <path d="M5 15L15 5M7 5h8v8" />
                  </svg>
                </i>
              </a>
              <p className="landscape-hero__scope">Branding · Web · UX/UI<br />Motion · Strategy</p>
            </div>
          </section>

          <section
            className="landscape-copy__approach landscape-panel"
            data-sc-copy
            data-sc-window="0.16 0.34 0.22 0.28"
            aria-labelledby="approach-title"
          >
            <h2 id="approach-title">When every piece has a different owner, the founder becomes the design system.</h2>
            <p>We connect the decisions behind identity, product and website, giving the whole company one clear direction.</p>
            <ol className="landscape-approach__steps">
              <li>
                <strong>Find the idea</strong>
                <span>Define the problem and the position the work must hold together.</span>
              </li>
              <li>
                <strong>Build the system</strong>
                <span>Shape brand, product and web from the same set of decisions.</span>
              </li>
              <li>
                <strong>Make it usable</strong>
                <span>Leave your team with rules they can apply, extend and explain.</span>
              </li>
            </ol>
          </section>

          <section
            className="landscape-copy__portfolio"
            aria-labelledby="portfolio-title"
          >
            <div
              className="landscape-portfolio__intro landscape-panel"
              data-sc-copy
              data-sc-window="0.31 0.65 0.13 0.13"
            >
              <h2 id="portfolio-title">Different problems deserve different expressions.</h2>
              <p>One connected approach, never a house style. Selected case studies are being prepared for these spaces.</p>
            </div>
            <div className="landscape-projects" aria-label="Portfolio placeholders">
              {projectPlaceholders.map((project) => (
                <div
                  className="landscape-card-cue"
                  key={project.id}
                  data-sc-copy
                  data-sc-window="0.31 0.65 0.13 0.13"
                >
                  <div
                    className="liquid-card-shell"
                    style={{
                      '--card-x': project.x,
                      '--card-y': project.y,
                      '--card-r': project.rotation,
                    }}
                  >
                    <LiquidGlass
                      className="landscape-project"
                      displacementScale={36}
                      blurAmount={0.09}
                      saturation={135}
                      aberrationIntensity={1.2}
                      elasticity={0.08}
                      cornerRadius={16}
                      padding="0"
                      overLight
                      style={{ width: '100%', height: '100%' }}
                    >
                      <div className="landscape-project__content">
                        <span>Selected work {project.id}</span>
                        <strong>Project placeholder</strong>
                        <i aria-hidden="true" />
                      </div>
                    </LiquidGlass>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section
            className="landscape-copy__services landscape-panel"
            data-sc-copy
            data-sc-window="0.65 0.86 0.2 0.22"
            aria-labelledby="services-title"
          >
            <div className="landscape-services__intro">
              <h2 id="services-title">Clear scope. A clear starting point.</h2>
              <p>Start with one focused engagement or connect the whole system. Scope and final price are agreed before work begins.</p>
            </div>
            <div className="landscape-services__list">
              {engagements.map(({ name, detail, price }) => (
                <div key={name}>
                  <div className="landscape-services__copy">
                    <span>{name}</span>
                    <p>{detail}</p>
                  </div>
                  <strong><small>From</small>{price}</strong>
                </div>
              ))}
            </div>
          </section>

          <section
            className="landscape-copy__contact landscape-panel"
            data-sc-copy
            data-sc-window="0.84 1 0.28 0"
            aria-labelledby="contact-title"
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
