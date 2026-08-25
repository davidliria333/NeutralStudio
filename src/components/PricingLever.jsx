import { useRef, useState } from 'react'
import './PricingLever.css'

const BASE_FEATURES = [
  'One request at a time',
  'Unlimited brands',
  'Web & app UI design',
  'Design systems',
  'Landing & pitch design',
  'Unlimited revisions',
  'Dedicated design manager',
  'Avg. 48 hour delivery',
]

const DEV_FEATURES = [
  'Webflow & Framer build',
  'Interactive prototypes',
  'Custom animations',
  'HTML email development',
  'Technical SEO',
  'Two requests at a time',
]

const PLANS = {
  design: {
    amount: '1,499',
    was: '$1,699',
    name: 'Design',
    requests: 'One request at a time',
    count: 8,
  },
  dev: {
    amount: '1,999',
    was: '$2,499',
    name: 'Design + Development',
    requests: 'Two requests at a time',
    count: 14,
  },
}

function CheckIcon({ strokeWidth = 2.6 }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

function Feature({ children }) {
  return (
    <li>
      <span className="pricing-lever__mark"><CheckIcon strokeWidth={3.2} /></span>
      <span>{children}</span>
    </li>
  )
}

function LockIcon({ open = false }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="5" y="11" width="14" height="9" rx="2" />
      {open ? <path d="M8 11V8a4 4 0 0 1 7.5-1.6" /> : <path d="M8 11V8a4 4 0 0 1 8 0v3" />}
    </svg>
  )
}

export default function PricingLever({ ctaHref }) {
  const [planKey, setPlanKey] = useState('dev')
  const [dragState, setDragState] = useState(null)
  const trackRef = useRef(null)
  const draggedRef = useRef(false)

  const plan = PLANS[planKey]
  const isDev = planKey === 'dev'
  const visuallyUnlocked = dragState ? dragState.progress >= 0.5 : isDev

  const choosePlan = (nextPlan) => {
    setDragState(null)
    setPlanKey(nextPlan)
  }

  const positionFromPointer = (clientX) => {
    const track = trackRef.current
    if (!track) return { progress: isDev ? 1 : 0, handleLeft: 5 }

    const rect = track.getBoundingClientRect()
    const handleWidth = Math.min(88, Math.max(58, rect.width * 0.18))
    const minLeft = 5
    const maxLeft = Math.max(minLeft, rect.width - handleWidth - 5)
    const handleLeft = Math.min(maxLeft, Math.max(minLeft, clientX - rect.left - handleWidth / 2))
    const progress = maxLeft === minLeft ? 0 : (handleLeft - minLeft) / (maxLeft - minLeft)
    return { progress, handleLeft }
  }

  const handleTrackClick = (event) => {
    if (draggedRef.current) {
      draggedRef.current = false
      return
    }

    const rect = event.currentTarget.getBoundingClientRect()
    choosePlan(event.clientX - rect.left > rect.width / 2 ? 'dev' : 'design')
  }

  const handlePointerDown = (event) => {
    draggedRef.current = false
    event.currentTarget.setPointerCapture(event.pointerId)
    setDragState(positionFromPointer(event.clientX))
    event.stopPropagation()
  }

  const handlePointerMove = (event) => {
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) return
    draggedRef.current = true
    setDragState(positionFromPointer(event.clientX))
  }

  const handlePointerUp = (event) => {
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) return
    const next = positionFromPointer(event.clientX)
    event.currentTarget.releasePointerCapture(event.pointerId)
    setDragState(null)
    setPlanKey(next.progress >= 0.5 ? 'dev' : 'design')
  }

  const handleKeyDown = (event) => {
    if (['ArrowLeft', 'ArrowDown', 'Home'].includes(event.key)) {
      event.preventDefault()
      choosePlan('design')
    }
    if (['ArrowRight', 'ArrowUp', 'End'].includes(event.key)) {
      event.preventDefault()
      choosePlan('dev')
    }
  }

  const trackStyle = dragState
    ? {
        '--pricing-fill': `${52 + dragState.progress * 48}%`,
        '--pricing-handle-left': `${dragState.handleLeft}px`,
      }
    : {
        '--pricing-fill': isDev ? '100%' : '52%',
        '--pricing-handle-left': isDev ? 'calc(100% - clamp(63px, 8vw, 93px))' : '5px',
      }

  return (
    <div className={`pricing-lever ${isDev ? 'is-dev' : 'is-design'} ${visuallyUnlocked ? 'is-unlocked' : 'is-locked'}`}>
      <div className="pricing-lever__card">
        <div className="pricing-lever__display">
          <div className="pricing-lever__price-block">
            <div className="pricing-lever__gauge" aria-live="polite">
              <span className="pricing-lever__currency">$</span>
              <span className="pricing-lever__amount">{plan.amount}</span>
              <span className="pricing-lever__per">/month</span>
            </div>
            <div className="pricing-lever__plan-name">
              <b>{plan.name}</b> · billed monthly <span>{plan.was}</span>
            </div>
          </div>

          <div className="pricing-lever__hero-side">
            <span className="pricing-lever__badge"><i aria-hidden="true" />Founding rate, ends soon</span>
            <div className="pricing-lever__summary">
              <div><CheckIcon /><b>{plan.requests}</b></div>
              <div><CheckIcon /><span><b>{plan.count} things</b> included</span></div>
              <div><CheckIcon /><span>Avg 48 hour delivery</span></div>
            </div>
            <div className="pricing-lever__proof">
              <span className="pricing-lever__avatars" aria-hidden="true">
                <span>😍</span><span>🥳</span><span>😎</span>
              </span>
              <span>Loved by <b>40+</b> founders &amp; teams</span>
            </div>
          </div>
        </div>

        <div className="pricing-lever__lower">
          <div className="pricing-lever__ends">
            <button type="button" className={!isDev ? 'is-active' : ''} onClick={() => choosePlan('design')} aria-pressed={!isDev}>
              <span>Just design</span><b>$1,499</b>
            </button>
            <button type="button" className={isDev ? 'is-active' : ''} onClick={() => choosePlan('dev')} aria-pressed={isDev}>
              <i>Most picked</i><span>Design + Dev</span><b>$1,999</b>
            </button>
          </div>

          <div
            ref={trackRef}
            className="pricing-lever__track"
            style={trackStyle}
            role="slider"
            tabIndex="0"
            aria-label="Choose pricing plan"
            aria-valuemin="0"
            aria-valuemax="1"
            aria-valuenow={isDev ? 1 : 0}
            aria-valuetext={plan.name}
            onClick={handleTrackClick}
            onKeyDown={handleKeyDown}
          >
            <span className="pricing-lever__fill" aria-hidden="true" />
            <span className="pricing-lever__midpoint" aria-hidden="true" />
            <span
              className="pricing-lever__handle"
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              aria-hidden="true"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 6-6 6 6 6" /></svg>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 6 6 6-6 6" /></svg>
            </span>
          </div>
          <p className="pricing-lever__hint">slide the lever, or tap a side</p>
          <hr />

          <ul className="pricing-lever__features pricing-lever__features--base">
            {BASE_FEATURES.map((feature) => <Feature key={feature}>{feature}</Feature>)}
          </ul>

          <div className="pricing-lever__unlock">
            <span />
            <strong><i><LockIcon open={visuallyUnlocked} /></i>{visuallyUnlocked ? 'Design + Dev unlocked' : 'Unlocks with Design + Dev'}</strong>
            <span />
          </div>

          <ul className="pricing-lever__features pricing-lever__features--dev" aria-label="Design and development features">
            {DEV_FEATURES.map((feature) => <Feature key={feature}>{feature}</Feature>)}
          </ul>

          <div className="pricing-lever__cta-row">
            <a href={ctaHref} target="_blank" rel="noreferrer">
              Start today
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
            </a>
            <span>No contracts. Cancel or pause anytime.</span>
          </div>
        </div>
      </div>
    </div>
  )
}
