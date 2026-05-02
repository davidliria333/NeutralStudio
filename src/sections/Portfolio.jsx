import { useEffect, useRef, useState } from 'react'

const ITEMS = [
  {
    slug: 'vira',
    title: 'Vira',
    category: 'Product Design',
    tag: 'App identity',
    scope: 'UI, promo, presentation',
    img: '/David/VIRA/PDF-04.png',
  },
  {
    slug: 'galeon',
    title: 'Galeon',
    category: 'Marketing',
    tag: 'Heritage platform',
    scope: 'Identity, deck, web',
    img: '/Galeon/Treball-01.png',
  },
  {
    slug: 'arkuos',
    title: 'Arkuos',
    category: 'Personal Identity',
    tag: 'Nonprofit identity',
    scope: 'Brand system, campaign',
    img: '/David/ARKUOS/campaign-hero.png',
  },
  {
    slug: 'circlehome',
    title: 'CircleHome',
    category: 'New Launches',
    tag: 'IoT launch',
    scope: 'Pitch, web, product story',
    img: '/David/CIRCLEHOME/We%20are%20live.jpg',
  },
]

export default function Portfolio() {
  return (
    <section className="section portfolio-private" id="portfolio">
      <div className="container">
        <div className="portfolio-private__intro">
          <div>
            <div className="eyebrow" style={{ marginBottom: 18 }}>Private portfolio</div>
            <h2 className="h2" style={{ margin: 0, maxWidth: 760 }}>
              One example per category. Full cases on request.
            </h2>
          </div>
          <div className="portfolio-private__note">
            <p>
              Public pages stay intentionally limited. Tell us what you are building and we will send the closest-fit identity, deck, web, and product references.
            </p>
            <a className="btn btn--primary" href="mailto:arnaupinyolwork@gmail.com?subject=Curated%20portfolio%20request%20-%20Neutral%20Studio">
              Request curated examples <span className="arrow">→</span>
            </a>
          </div>
        </div>

        <div className="portfolio-private__grid">
          {ITEMS.map((it, i) => <Card key={it.slug} item={it} index={i} variant={i === 0 ? 'hero' : i === 3 ? 'wide' : 'stack'} />)}
        </div>

        <div className="portfolio-private__footer">
          <span>01 · Shortlist by sector</span>
          <span>02 · Send private PDF or Loom</span>
          <span>03 · Walk through decisions on a call</span>
        </div>
      </div>

      <style>{`
        .portfolio-private {
          background:
            linear-gradient(180deg, rgba(245,245,244,0.025), transparent 18%),
            radial-gradient(80% 70% at 76% 18%, rgba(216,255,62,0.055), transparent 72%);
        }

        .portfolio-private__intro {
          display: grid;
          grid-template-columns: minmax(0, 1.25fr) minmax(280px, 0.75fr);
          gap: clamp(28px, 5vw, 84px);
          align-items: end;
        }

        .portfolio-private__note {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 22px;
          padding-bottom: 8px;
        }

        .portfolio-private__note p {
          margin: 0;
          color: var(--ink-2);
          line-height: 1.6;
          max-width: 44ch;
        }

        .portfolio-private__grid {
          margin-top: clamp(48px, 7vw, 88px);
          display: grid;
          grid-template-columns: repeat(12, minmax(0, 1fr));
          grid-auto-rows: clamp(176px, 18vw, 246px);
          gap: clamp(14px, 1.6vw, 22px);
          align-items: stretch;
        }

        .portfolio-private__card--hero {
          display: block;
          grid-column: span 7;
          grid-row: span 2;
        }

        .portfolio-private__card--stack {
          display: block;
          grid-column: span 5;
          grid-row: span 1;
        }

        .portfolio-private__card--wide {
          display: block;
          grid-column: 1 / -1;
          grid-row: span 1;
          width: 100%;
          max-width: min(860px, 72vw);
          justify-self: end;
        }

        .portfolio-private__cover {
          position: relative;
          height: 100%;
          border-radius: var(--r-l);
          overflow: hidden;
          border: 1px solid var(--line);
          background: var(--bg-1);
          transition: transform 240ms cubic-bezier(0.23, 1, 0.32, 1), border-color 180ms ease-out;
          will-change: transform;
        }

        .portfolio-private__cover:active {
          transform: scale(0.985);
        }

        .portfolio-private__cover img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          padding: clamp(8px, 1vw, 14px);
          background: var(--bg);
        }

        .portfolio-private__cover::after {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(10,10,11,0.02) 0%, rgba(10,10,11,0.2) 46%, rgba(10,10,11,0.88) 100%),
            linear-gradient(90deg, rgba(10,10,11,0.36), transparent 38%);
          pointer-events: none;
        }

        .portfolio-private__meta {
          position: absolute;
          left: clamp(18px, 2vw, 28px);
          right: clamp(18px, 2vw, 28px);
          bottom: clamp(18px, 2vw, 26px);
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 18px;
          align-items: end;
          z-index: 1;
        }

        .portfolio-private__category {
          display: inline-flex;
          align-items: center;
          padding: 3px 10px;
          border-radius: 999px;
          border: 1px solid rgba(245,245,244,0.15);
          background: rgba(245,245,244,0.1);
          color: rgba(245,245,244,0.75);
          font-family: var(--mono);
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .portfolio-private__label {
          font-family: var(--mono);
          font-size: 11px;
          color: var(--ink-3);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 7px;
        }

        .portfolio-private__title {
          margin: 0;
          color: var(--ink);
          line-height: 1.05;
        }

        .portfolio-private__scope {
          margin: 8px 0 0;
          color: var(--ink-2);
          font-size: 13px;
        }

        .portfolio-private__request {
          min-width: 104px;
          padding: 10px 13px;
          border-radius: 999px;
          border: 1px solid rgba(245,245,244,0.2);
          color: var(--ink);
          background: rgba(10,10,11,0.58);
          font-size: 12px;
          text-align: center;
          transition: transform 180ms cubic-bezier(0.23, 1, 0.32, 1), background 180ms ease-out;
        }

        .portfolio-private__card:hover .portfolio-private__request {
          transform: translateY(-2px);
          background: rgba(216,255,62,0.14);
        }

        .portfolio-private__footer {
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
          .portfolio-private__card:hover .portfolio-private__cover {
            transform: translateY(-4px);
          }
        }

        @media (max-width: 900px) {
          .portfolio-private__intro,
          .portfolio-private__grid {
            grid-template-columns: 1fr;
            grid-auto-rows: auto;
          }

          .portfolio-private__card--hero,
          .portfolio-private__card--stack,
          .portfolio-private__card--wide {
            grid-row: auto;
            grid-column: auto;
            max-width: none;
            justify-self: stretch;
          }

          .portfolio-private__cover {
            height: auto;
            min-height: 0;
          }
        }

        @media (max-width: 560px) {
          .portfolio-private__meta {
            grid-template-columns: 1fr;
          }

          .portfolio-private__request {
            width: max-content;
          }
        }
      `}</style>
    </section>
  )
}

function Card({ item, index, variant }) {
  const ref = useRef(null)
  const [aspectRatio, setAspectRatio] = useState(4 / 3)

  useEffect(() => {
    const img = new window.Image()
    img.src = item.img
    img.onload = () => {
      if (!img.naturalWidth || !img.naturalHeight) return
      setAspectRatio(img.naturalWidth / img.naturalHeight)
    }
  }, [item.img])

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `perspective(1100px) rotateX(${-py * 6}deg) rotateY(${px * 8}deg) translateY(-4px)`
  }
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = ''
  }
  const href = `mailto:arnaupinyolwork@gmail.com?subject=${encodeURIComponent(`Portfolio request: ${item.title}`)}`

  return (
    <a className={`portfolio-private__card portfolio-private__card--${variant}`} href={href} aria-label={`Request more information about ${item.title}`}>
      <div
        ref={ref}
        className="portfolio-private__cover"
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ aspectRatio: variant === 'hero' ? '4 / 5' : variant === 'wide' ? '16 / 7' : `${Math.max(1.2, Math.min(aspectRatio, 1.9))}` }}
      >
        <img src={item.img} alt={`${item.title} portfolio cover`} />
        <div className="portfolio-private__meta">
          <div>
            <div className="portfolio-private__category">{item.category}</div>
            <div className="portfolio-private__label">
              {String(index + 1).padStart(2, '0')} · {item.tag}
            </div>
            <h3 className="h4 portfolio-private__title">{item.title}</h3>
            <p className="portfolio-private__scope">{item.scope}</p>
          </div>
          <span className="portfolio-private__request">Request info</span>
        </div>
      </div>
    </a>
  )
}
