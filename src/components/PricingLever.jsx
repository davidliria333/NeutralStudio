import { lazy, Suspense, useState } from 'react'
import { Link } from 'react-router-dom'
import { CAL_POPUP_PROPS } from './CalPopup.jsx'
import './PricingLever.css'

const LiquidGlass = lazy(() => import('liquid-glass-react'))

const SERVICES = [
  {
    id: 'web',
    name: 'Web',
    detail: 'A responsive studio or product website designed and built around one clear story, useful search intent and a maintainable component system.',
    price: '€1,990',
    path: '/services/web',
  },
  {
    id: 'brand',
    name: 'Brand only',
    detail: 'A clear identity system with positioning translated into the essential visual rules, launch applications and production assets your team can use.',
    price: '€2,990',
    path: '/services/brand',
  },
  {
    id: 'ux-ui',
    name: 'UX/UI',
    detail: 'Product flows, responsive interfaces and edge states shaped around real user tasks, business priorities and engineering constraints.',
    price: '€3,990',
    path: '/services/ux-ui',
  },
  {
    id: 'brand-web',
    name: 'Brand + Web + Assets',
    detail: 'Identity, website and core launch assets designed as one connected system, so the market promise and digital experience reinforce each other.',
    price: '€4,990',
    path: '/services/brand',
  },
  {
    id: 'app',
    name: 'App development',
    detail: 'A production-ready application from release definition and product logic through interface design, implementation, quality assurance and handoff.',
    price: '€9,990',
    path: '/services/app-development',
  },
]

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M5 15 15 5M7 5h8v8" />
    </svg>
  )
}

export default function PricingLever({ ctaHref, staticGlass = false }) {
  const [activeId, setActiveId] = useState('brand-web')
  const activeService = SERVICES.find((service) => service.id === activeId) ?? SERVICES[0]

  const card = (
    <article className="pricing-card" aria-labelledby="services-title">
          <div className="pricing-card__intro">
            <div>
              <h2 id="services-title">One studio. Five ways to start.</h2>
              <p>Choose the part that needs clarity now. Every starting point connects strategy with execution, while scope, responsibilities, timing and final price are agreed before the work begins.</p>
            </div>

            <div className="pricing-card__selection" aria-live="polite" aria-atomic="true" key={activeService.id}>
              <h3>{activeService.name}</h3>
              <p>{activeService.detail}</p>
              <div className="pricing-card__selected-price">
                <span>From</span>
                <strong>{activeService.price}</strong>
              </div>
              <Link className="pricing-card__service-link" to={activeService.path}>Explore {activeService.name.toLowerCase()} <span aria-hidden="true">↗</span></Link>
            </div>

            <a
              className="pricing-card__cta"
              href={ctaHref}
              {...CAL_POPUP_PROPS}
              target="_blank"
              rel="noreferrer"
              data-umami-event="calendar_opened"
              data-umami-event-placement="services"
              data-umami-event-service={activeService.id}
            >
              <span>Book a call</span>
              <ArrowUpRight />
            </a>
          </div>

          <div className="pricing-card__services" aria-label="Services and starting prices">
            {SERVICES.map((service) => {
              const isActive = service.id === activeId

              return (
                <button
                  className={isActive ? 'is-active' : ''}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveId(service.id)}
                  data-umami-event="service_selected"
                  data-umami-event-service={service.id}
                  key={service.id}
                >
                  <span className="pricing-card__service-copy">
                    <strong>{service.name}</strong>
                    <small>{service.detail}</small>
                  </span>
                  <span className="pricing-card__service-price">
                    <small>From</small>
                    <strong>{service.price}</strong>
                  </span>
                  <span className="pricing-card__service-state" aria-hidden="true">
                    <i />
                  </span>
                </button>
              )
            })}
          </div>
    </article>
  )

  return (
    <div className="pricing-glass-shell">
      {staticGlass ? (
        <div className="pricing-glass pricing-glass--static">{card}</div>
      ) : (
        <Suspense fallback={<div className="pricing-glass pricing-glass--static">{card}</div>}>
          <LiquidGlass
            className="pricing-glass"
            displacementScale={46}
            blurAmount={0.1}
            saturation={132}
            aberrationIntensity={1.1}
            elasticity={0.06}
            cornerRadius={24}
            padding="0"
            overLight
            style={{ width: '100%', height: '100%' }}
          >
            {card}
          </LiquidGlass>
        </Suspense>
      )}
    </div>
  )
}
