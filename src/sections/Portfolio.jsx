import { useRef } from 'react'
import { useMotionValue, useSpring, motion } from 'framer-motion'
import './Portfolio.css'

const PROOFS = [
  {
    type: 'Identity system',
    caption: 'Marks, type, color, and launch rules packaged for founder teams.',
    accent: '01',
    kind: 'matrix',
  },
  {
    type: 'Pitch narrative',
    caption: 'Investor-facing story architecture, sharpened into a useful deck.',
    accent: '02',
    kind: 'deck',
  },
  {
    type: 'Web presence',
    caption: 'Landing pages and key flows designed to look credible fast.',
    accent: '03',
    kind: 'browser',
  },
  {
    type: 'Product surface',
    caption: 'Interface language that keeps brand and product moving together.',
    accent: '04',
    kind: 'signal',
  },
]

export default function Portfolio() {
  return (
    <section className="section proof-lab" id="portfolio">
      <div className="container">
        <div className="proof-lab__intro">
          <div>
            <div className="eyebrow" style={{ marginBottom: 18 }}>Private portfolio</div>
            <h2 className="h2 proof-lab__title">
              No public case studies. Just the signal you need.
            </h2>
          </div>
          <div className="proof-lab__note">
            <p>
              We keep client work off the open web. Send a short note and we will reply with the closest-fit references for your category, stage, and deadline.
            </p>
            <a className="btn btn--primary" href="mailto:arnaupinyolwork@gmail.com?subject=Curated%20portfolio%20request%20-%20Neutral%20Studio">
              Request private proof <span className="arrow">→</span>
            </a>
          </div>
        </div>

        <div className="proof-lab__stage" aria-label="Private portfolio proof system">
          <div className="proof-lab__rail">
            <span>Identity</span>
            <span>Deck</span>
            <span>Web</span>
            <span>Product</span>
          </div>

          <div className="proof-lab__grid">
            {PROOFS.map((item, index) => (
              <ProofTile key={item.type} item={item} index={index} />
            ))}
          </div>
        </div>

        <div className="proof-lab__footer">
          <span>01 · Curated privately</span>
          <span>02 · Shared by fit</span>
          <span>03 · Walked through on a call</span>
        </div>
      </div>


    </section>
  )
}

const SPRING_TILT = { stiffness: 280, damping: 28, mass: 0.6 }

function ProofTile({ item, index }) {
  const ref = useRef(null)
  const href = `mailto:arnaupinyolwork@gmail.com?subject=${encodeURIComponent(`Private portfolio request: ${item.type}`)}`

  const rotX = useMotionValue(0)
  const rotY = useMotionValue(0)
  const lift = useMotionValue(0)
  const springRotX = useSpring(rotX, SPRING_TILT)
  const springRotY = useSpring(rotY, SPRING_TILT)
  const springLift = useSpring(lift, SPRING_TILT)

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = e.clientX - r.left
    const y = e.clientY - r.top
    const px = x / r.width - 0.5
    const py = y / r.height - 0.5
    el.style.setProperty('--px', `${x}px`)
    el.style.setProperty('--py', `${y}px`)
    rotX.set(-py * 4)
    rotY.set(px * 5)
    lift.set(-4)
  }

  const onLeave = () => {
    if (!ref.current) return
    ref.current.style.removeProperty('--px')
    ref.current.style.removeProperty('--py')
    rotX.set(0)
    rotY.set(0)
    lift.set(0)
  }

  return (
    <motion.a
      ref={ref}
      className="proof-lab__tile"
      href={href}
      aria-label={`Request private proof for ${item.type}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        rotateX: springRotX,
        rotateY: springRotY,
        y: springLift,
        transformPerspective: 1200,
      }}
    >
      <Visual kind={item.kind} />
      <div className="proof-lab__meta">
        <div>
          <div className="proof-lab__kicker">{String(index + 1).padStart(2, '0')} · Private proof</div>
          <h3 className="h4">{item.type}</h3>
          <p>{item.caption}</p>
        </div>
        <span className="proof-lab__badge">{item.accent}</span>
      </div>
    </motion.a>
  )
}

function Visual({ kind }) {
  if (kind === 'matrix') {
    return (
      <div className="proof-lab__visual proof-lab__matrix" aria-hidden="true">
        {Array.from({ length: 30 }, (_, i) => <span className="proof-lab__cell" style={{ '--i': i }} key={i} />)}
      </div>
    )
  }

  if (kind === 'deck') {
    return (
      <div className="proof-lab__visual proof-lab__deck" aria-hidden="true">
        {Array.from({ length: 4 }, (_, i) => <span className="proof-lab__slide" style={{ '--i': i }} key={i} />)}
      </div>
    )
  }

  if (kind === 'browser') {
    return (
      <div className="proof-lab__visual proof-lab__browser" aria-hidden="true">
        <div className="proof-lab__browser-grid">
          <span />
          <span />
          <span />
        </div>
      </div>
    )
  }

  return (
    <div className="proof-lab__visual proof-lab__signal" aria-hidden="true">
      <span className="proof-lab__orbit" />
      <span className="proof-lab__orbit" />
      <span className="proof-lab__core" />
    </div>
  )
}
