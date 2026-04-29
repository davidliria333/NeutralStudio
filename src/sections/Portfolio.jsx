import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { SectionHead } from './Services.jsx'

const ITEMS = [
  { slug: 'galeon', title: 'Galeón', tag: 'Patrimonio Nacional · Heritage', img: '/Galeon/Treball-01.png' },
  { slug: 'arkuos', title: 'Arkuos', tag: 'Nonprofit · Identity', img: '/David/ARKUOS/campaign-hero.png' },
  { slug: 'circlehome', title: 'CircleHome', tag: 'IoT · Launch system', img: '/David/CIRCLEHOME/We%20are%20live.jpg' },
  { slug: 'vira', title: 'Vira', tag: 'App · Identity', img: '/David/VIRA/PDF-04.png' },
]

const LOGOS = [
  '/Logos/00_logo-14.png',
  '/Logos/00_logo_Mesa de trabajo 16 copia.png',
  '/Logos/00_logo_Mesa de trabajo 16 copia 2.png',
  '/Logos/00_logo_Mesa de trabajo 16 copia 3.png',
  '/Logos/00_logo_Mesa de trabajo 16 copia 4.png',
]

export default function Portfolio() {
  return (
    <section className="section" id="portfolio">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}>
          <SectionHead eyebrow="Portfolio" title="A portfolio built for diligence"
            desc="We don't publish full case studies. Below: featured projects. Ask for a curated deck tailored to your sector and stage." />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
            <span className="serif" style={{ fontSize: 32, color: 'var(--ink)' }}>+100</span>
            <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-3)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              projects · $100M+ raised
            </span>
          </div>
        </div>

        <div style={{
          marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 28,
        }} className="port-grid">
          {ITEMS.map((it, i) => <Card key={it.slug} item={it} index={i} />)}
        </div>

        <div style={{
          marginTop: 80, padding: '32px 0', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)',
          overflow: 'hidden', position: 'relative',
        }}>
          <div style={{ display: 'flex', gap: 80, animation: 'marquee-x 40s linear infinite', width: 'max-content' }}>
            {[...LOGOS, ...LOGOS, ...LOGOS].map((l, i) => (
              <img key={i} src={l} alt="" style={{ height: 32, opacity: 0.55, filter: 'brightness(0) invert(1)' }} />
            ))}
          </div>
        </div>

        <div style={{ marginTop: 48, display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
          <a className="btn btn--primary" href="mailto:arnaupinyolwork@gmail.com?subject=Portfolio%20request%20-%20Neutral%20Studio">
            Request full portfolio <span className="arrow">→</span>
          </a>
          <a className="btn btn--ghost" href="https://cal.com/neutralstudio/30min" target="_blank" rel="noreferrer">Book a call</a>
          <span style={{ color: 'var(--ink-3)', fontSize: 13, marginLeft: 8 }}>
            Prefer async? PDF, slides, or short Loom walkthrough.
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .port-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function Card({ item, index }) {
  const ref = useRef(null)
  const onMove = (e) => {
    const el = ref.current; if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `perspective(1100px) rotateX(${-py * 6}deg) rotateY(${px * 8}deg) translateY(-4px)`
  }
  const onLeave = () => { if (ref.current) ref.current.style.transform = '' }
  return (
    <Link to={`/case/${item.slug}`} style={{ display: 'block' }}>
      <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}
        style={{
          position: 'relative', borderRadius: 'var(--r-l)', overflow: 'hidden',
          border: '1px solid var(--line)', background: 'var(--bg-1)',
          aspectRatio: '4/3', transition: 'transform .35s var(--ease)',
          willChange: 'transform',
        }}>
        <img src={item.img} alt={item.title} style={{
          width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .8s var(--ease)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, transparent 40%, rgba(10,10,11,0.85) 100%)',
        }} />
        <div style={{
          position: 'absolute', left: 24, right: 24, bottom: 22,
          display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16,
        }}>
          <div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-3)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>
              {String(index + 1).padStart(2, '0')} · {item.tag}
            </div>
            <div className="h4" style={{ margin: 0, fontWeight: 500 }}>{item.title}</div>
          </div>
          <div style={{
            width: 44, height: 44, borderRadius: 999, background: 'var(--acc)', color: '#0a0a0b',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 500,
          }}>→</div>
        </div>
      </div>
    </Link>
  )
}
