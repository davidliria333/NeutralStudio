import { useRef } from 'react'

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

      <style>{`
        .proof-lab {
          overflow: hidden;
          background:
            radial-gradient(58% 52% at 85% 18%, rgba(216,255,62,0.08), transparent 72%),
            linear-gradient(180deg, rgba(245,245,244,0.025), transparent 22%);
        }

        .proof-lab__intro {
          display: grid;
          grid-template-columns: minmax(0, 1.18fr) minmax(280px, 0.82fr);
          gap: clamp(28px, 5vw, 84px);
          align-items: end;
        }

        .proof-lab__title {
          margin: 0;
          max-width: 820px;
        }

        .proof-lab__note {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 22px;
          padding-bottom: 8px;
        }

        .proof-lab__note p {
          margin: 0;
          color: var(--ink-2);
          line-height: 1.6;
          max-width: 46ch;
        }

        .proof-lab__stage {
          position: relative;
          margin-top: clamp(48px, 7vw, 90px);
          border: 1px solid var(--line);
          border-radius: clamp(28px, 4vw, 54px);
          background:
            linear-gradient(135deg, rgba(245,245,244,0.055), rgba(245,245,244,0.012)),
            radial-gradient(80% 90% at 12% 8%, rgba(216,255,62,0.12), transparent 54%),
            var(--bg-1);
          box-shadow: inset 0 1px 0 rgba(245,245,244,0.08);
          padding: clamp(14px, 2vw, 24px);
          overflow: hidden;
        }

        .proof-lab__stage::before {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(245,245,244,0.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245,245,244,0.055) 1px, transparent 1px);
          background-size: 44px 44px;
          mask-image: radial-gradient(circle at 38% 20%, black, transparent 72%);
          opacity: 0.46;
        }

        .proof-lab__rail {
          position: relative;
          z-index: 1;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          padding: 0 0 clamp(14px, 2vw, 22px);
          color: var(--ink-3);
          font-family: var(--mono);
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .proof-lab__rail span {
          border: 1px solid var(--line);
          border-radius: 999px;
          padding: 6px 10px;
          background: rgba(10,10,11,0.36);
        }

        .proof-lab__grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(0, 0.92fr);
          grid-auto-rows: clamp(250px, 22vw, 360px);
          gap: clamp(12px, 1.5vw, 18px);
        }

        .proof-lab__tile {
          position: relative;
          min-width: 0;
          border: 1px solid rgba(245,245,244,0.11);
          border-radius: clamp(22px, 2.6vw, 34px);
          background: linear-gradient(180deg, rgba(18,18,21,0.94), rgba(10,10,11,0.92));
          overflow: hidden;
          isolation: isolate;
          color: var(--ink);
          transition: transform 220ms cubic-bezier(0.23, 1, 0.32, 1), border-color 180ms ease-out;
          will-change: transform;
        }

        .proof-lab__tile:nth-child(1) {
          grid-row: span 2;
        }

        .proof-lab__tile:nth-child(2) {
          grid-column: auto;
        }

        .proof-lab__tile:nth-child(4) {
          grid-column: 1 / -1;
        }

        .proof-lab__tile:active {
          transform: scale(0.985);
        }

        .proof-lab__tile::before {
          content: '';
          position: absolute;
          inset: -1px;
          z-index: -1;
          background:
            radial-gradient(circle at var(--px, 50%) var(--py, 50%), rgba(216,255,62,0.18), transparent 34%),
            linear-gradient(135deg, rgba(245,245,244,0.08), transparent 46%);
          opacity: 0.72;
          transition: opacity 180ms ease-out;
        }

        .proof-lab__tile::after {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(180deg, transparent 46%, rgba(10,10,11,0.84) 100%);
        }

        .proof-lab__visual {
          position: absolute;
          inset: clamp(16px, 2vw, 28px);
          bottom: 104px;
        }

        .proof-lab__meta {
          position: absolute;
          left: clamp(18px, 2vw, 28px);
          right: clamp(18px, 2vw, 28px);
          bottom: clamp(18px, 2vw, 26px);
          z-index: 2;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 18px;
          align-items: end;
        }

        .proof-lab__kicker {
          font-family: var(--mono);
          font-size: 11px;
          color: var(--acc);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .proof-lab__meta h3 {
          margin: 0;
          color: var(--ink);
        }

        .proof-lab__meta p {
          margin: 8px 0 0;
          color: var(--ink-2);
          font-size: 13px;
          line-height: 1.45;
          max-width: 36ch;
        }

        .proof-lab__badge {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1px solid rgba(216,255,62,0.36);
          display: grid;
          place-items: center;
          color: var(--acc);
          font-family: var(--mono);
          font-size: 11px;
          background: rgba(216,255,62,0.08);
        }

        .proof-lab__matrix {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          grid-template-rows: repeat(6, 1fr);
          gap: 8px;
          height: 100%;
        }

        .proof-lab__cell {
          border-radius: 12px;
          border: 1px solid rgba(245,245,244,0.09);
          background: rgba(245,245,244,0.045);
          animation: proofPulse 4.8s ease-in-out infinite;
          animation-delay: calc(var(--i) * -120ms);
        }

        .proof-lab__cell:nth-child(4n),
        .proof-lab__cell:nth-child(11),
        .proof-lab__cell:nth-child(23) {
          background: rgba(216,255,62,0.2);
          border-color: rgba(216,255,62,0.24);
        }

        .proof-lab__deck {
          height: 100%;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          align-items: center;
          gap: 12px;
          perspective: 900px;
        }

        .proof-lab__slide {
          height: min(170px, 70%);
          border-radius: 18px;
          border: 1px solid rgba(245,245,244,0.12);
          background:
            linear-gradient(180deg, rgba(245,245,244,0.1), rgba(245,245,244,0.02)),
            var(--bg-2);
          transform: rotateY(calc((var(--i) - 1.5) * -9deg)) translateY(calc(var(--i) * 7px));
          position: relative;
          overflow: hidden;
        }

        .proof-lab__slide::before,
        .proof-lab__slide::after {
          content: '';
          position: absolute;
          left: 18%;
          right: 18%;
          height: 2px;
          background: rgba(245,245,244,0.24);
        }

        .proof-lab__slide::before {
          top: 34%;
          box-shadow: 0 18px 0 rgba(245,245,244,0.12), 0 36px 0 rgba(245,245,244,0.08);
        }

        .proof-lab__slide::after {
          bottom: 18%;
          background: var(--acc);
          opacity: 0.55;
        }

        .proof-lab__browser {
          height: 100%;
          border-radius: 24px;
          border: 1px solid rgba(245,245,244,0.12);
          background: rgba(245,245,244,0.04);
          overflow: hidden;
          position: relative;
        }

        .proof-lab__browser::before {
          content: '';
          position: absolute;
          inset: 0 0 auto;
          height: 38px;
          border-bottom: 1px solid rgba(245,245,244,0.09);
          background:
            radial-gradient(circle at 20px 50%, rgba(216,255,62,0.76) 0 4px, transparent 5px),
            radial-gradient(circle at 38px 50%, rgba(245,245,244,0.22) 0 4px, transparent 5px),
            radial-gradient(circle at 56px 50%, rgba(245,245,244,0.16) 0 4px, transparent 5px);
        }

        .proof-lab__browser-grid {
          position: absolute;
          inset: 58px 18px 18px;
          display: grid;
          grid-template-columns: 0.7fr 1fr;
          grid-template-rows: 0.72fr 1fr;
          gap: 10px;
        }

        .proof-lab__browser-grid span {
          border-radius: 16px;
          background: rgba(245,245,244,0.055);
          border: 1px solid rgba(245,245,244,0.08);
        }

        .proof-lab__browser-grid span:first-child {
          grid-row: span 2;
          background: linear-gradient(180deg, rgba(216,255,62,0.22), rgba(245,245,244,0.04));
        }

        .proof-lab__signal {
          height: 100%;
          display: grid;
          place-items: center;
          position: relative;
        }

        .proof-lab__orbit {
          position: absolute;
          width: min(230px, 72%);
          aspect-ratio: 1;
          border-radius: 50%;
          border: 1px solid rgba(245,245,244,0.12);
          animation: proofOrbit 16s linear infinite;
        }

        .proof-lab__orbit:nth-child(2) {
          width: min(150px, 50%);
          animation-direction: reverse;
          animation-duration: 12s;
        }

        .proof-lab__orbit::before {
          content: '';
          position: absolute;
          top: 10%;
          left: 50%;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--acc);
          box-shadow: 0 0 0 6px rgba(216,255,62,0.08);
        }

        .proof-lab__core {
          width: min(86px, 28%);
          aspect-ratio: 1;
          border-radius: 28%;
          border: 1px solid rgba(216,255,62,0.28);
          background:
            linear-gradient(135deg, rgba(216,255,62,0.28), rgba(245,245,244,0.03)),
            var(--bg-2);
          transform: rotate(18deg);
        }

        .proof-lab__footer {
          margin-top: clamp(34px, 5vw, 58px);
          padding-top: 22px;
          border-top: 1px solid var(--line);
          display: flex;
          flex-wrap: wrap;
          gap: 10px 28px;
          color: var(--ink-3);
          font-family: var(--mono);
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        @media (hover: hover) and (pointer: fine) {
          .proof-lab__tile:hover {
            border-color: rgba(216,255,62,0.34);
          }
        }

        @keyframes proofPulse {
          0%, 100% { transform: scale(1); opacity: 0.58; }
          48% { transform: scale(0.94); opacity: 1; }
        }

        @keyframes proofOrbit {
          to { transform: rotate(360deg); }
        }

        @media (max-width: 980px) {
          .proof-lab__intro {
            grid-template-columns: 1fr;
          }

          .proof-lab__grid {
            grid-template-columns: 1fr 1fr;
            grid-auto-rows: minmax(260px, auto);
          }

          .proof-lab__tile:nth-child(1) {
            grid-row: span 2;
          }

          .proof-lab__tile:nth-child(2) {
            grid-column: auto;
          }

          .proof-lab__tile:nth-child(4) {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 640px) {
          .proof-lab__stage {
            border-radius: 28px;
            padding: 12px;
          }

          .proof-lab__grid {
            grid-template-columns: 1fr;
            grid-auto-rows: minmax(280px, auto);
          }

          .proof-lab__tile:nth-child(1),
          .proof-lab__tile:nth-child(2),
          .proof-lab__tile:nth-child(4) {
            grid-column: auto;
            grid-row: auto;
          }

          .proof-lab__meta {
            grid-template-columns: 1fr;
          }

          .proof-lab__badge {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .proof-lab__cell,
          .proof-lab__orbit {
            animation: none;
          }
        }
      `}</style>
    </section>
  )
}

function ProofTile({ item, index }) {
  const ref = useRef(null)
  const href = `mailto:arnaupinyolwork@gmail.com?subject=${encodeURIComponent(`Private portfolio request: ${item.type}`)}`

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
    el.style.transform = `perspective(1200px) rotateX(${-py * 4}deg) rotateY(${px * 5}deg) translateY(-3px)`
  }

  const onLeave = () => {
    if (!ref.current) return
    ref.current.style.transform = ''
    ref.current.style.removeProperty('--px')
    ref.current.style.removeProperty('--py')
  }

  return (
    <a
      ref={ref}
      className="proof-lab__tile"
      href={href}
      aria-label={`Request private proof for ${item.type}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
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
    </a>
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
