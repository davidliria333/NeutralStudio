import { SectionHead } from './Services.jsx'

const QUOTES = [
  { name: 'Maya Chen', role: 'Co-founder, B2B SaaS', q: 'We went from "rough draft" to investor-ready in days. The deck and site finally feel like the same story.', img: '/assets/avatars/avatar-1.jpg', tag: 'Founder' },
  { name: 'Lucas Martín', role: 'CEO, Fintech', q: 'Fast turnaround without sacrificing taste. Every iteration got cleaner and more coherent.', img: '/assets/avatars/avatar-2.jpg', tag: 'CEO' },
  { name: 'Aisha Patel', role: 'Head of Product, DevTools', q: 'They connected brand, web, and slides into one system. Handoff was organized and engineering-friendly.', img: '/assets/avatars/avatar-3.jpg', tag: 'Product' },
  { name: 'Daniel Rossi', role: 'Founder, AI Infra', q: 'The website instantly increased trust. Demos felt easier because the visuals matched our ambition.', img: '/assets/avatars/avatar-4.jpg', tag: 'Founder' },
  { name: 'Noah Stein', role: 'Growth, Marketplace', q: 'Best part: consistency. The brand rules actually held up across everything we shipped.', img: '/assets/avatars/avatar-6.jpg', tag: 'Growth' },
  { name: 'Hana Kim', role: 'Founder, Consumer', q: 'We asked for "premium but simple" and they nailed it. The site feels custom, not templated.', img: '/assets/avatars/avatar-7.jpg', tag: 'Founder' },
  { name: 'Oliver Grant', role: 'Founder, Security', q: 'Ridiculously pragmatic. One call and they understood positioning, then the visuals followed without drift.', img: '/assets/avatars/avatar-8.jpg', tag: 'Founder' },
  { name: 'Leila Haddad', role: 'CMO, B2B', q: 'We shipped a clean site refresh mid-sprint and it didn\'t slow product. The system approach really helps.', img: '/assets/avatars/avatar-9.jpg', tag: 'CMO' },
  { name: 'Kenji Sato', role: 'CEO, DevTools', q: 'The deck is the first one our advisors actually read. Clear hierarchy, tight narrative, zero fluff.', img: '/assets/avatars/avatar-10.jpg', tag: 'CEO' },
]

export default function Testimonials() {
  const row1 = QUOTES.slice(0, 5)
  const row2 = QUOTES.slice(4)
  return (
    <section className="section">
      <div className="container">
        <SectionHead eyebrow="Wall of love" title="Loved by founders worldwide"
          desc="Real feedback from early-stage teams who needed speed, clarity, and a studio that ships like a product team." />
      </div>

      <div style={{ marginTop: 64, display: 'flex', flexDirection: 'column', gap: 20, overflow: 'hidden' }}>
        <Row items={row1} duration={50} />
        <Row items={row2} duration={62} reverse />
      </div>
    </section>
  )
}

function Row({ items, duration, reverse }) {
  const list = [...items, ...items, ...items]
  return (
    <div style={{ overflow: 'hidden', maskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)' }}>
      <div style={{
        display: 'flex', gap: 18, width: 'max-content',
        animation: `marquee-x ${duration}s linear infinite${reverse ? ' reverse' : ''}`,
      }}>
        {list.map((q, i) => (
          <article key={i} style={{
            width: 380, padding: 26, borderRadius: 'var(--r-l)', border: '1px solid var(--line)',
            background: 'var(--bg-1)', display: 'flex', flexDirection: 'column', gap: 18, flexShrink: 0,
          }}>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: 'var(--ink)' }}>"{q.q}"</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 'auto' }}>
              <img src={q.img} alt={q.name} loading="lazy" style={{
                width: 38, height: 38, borderRadius: 999, objectFit: 'cover',
                border: '1px solid var(--line-2)',
              }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 500, fontSize: 14 }}>{q.name}</div>
                <div style={{ color: 'var(--ink-3)', fontSize: 12 }}>{q.role}</div>
              </div>
              <span style={{
                padding: '4px 10px', borderRadius: 999, border: '1px solid var(--line-2)',
                fontSize: 10, color: 'var(--ink-3)', fontFamily: 'var(--mono)', letterSpacing: '0.08em', textTransform: 'uppercase',
              }}>{q.tag}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
