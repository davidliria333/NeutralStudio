import { SectionHead } from './Services.jsx'

const PLANS = [
  {
    name: 'Complete Visual Identity',
    price: '$3,000',
    sub: 'A full identity system built to scale, without web design or pitch deck.',
    features: ['Logo system & brand marks', 'Typography & color palette', 'Core identity assets & templates', 'Brand guidelines (lightweight)'],
    cta: 'Email to book',
    href: 'mailto:arnaupinyolwork@gmail.com?subject=Neutral%20Studio%20-%20%243%2C000%20identity%20package',
    featured: false,
  },
  {
    name: 'Full Launch Package',
    price: '$5,500',
    sub: 'Identity + pitch deck + web design, built to ship together, fast.',
    features: ['Complete visual identity', 'Investor-ready pitch deck', 'Marketing website design & key layouts', 'Organized handoff + export specs'],
    cta: 'Email to book',
    href: 'mailto:arnaupinyolwork@gmail.com?subject=Neutral%20Studio%20-%20%245%2C500%20full%20package',
    featured: true,
  },
]

export default function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <SectionHead eyebrow="Pricing" title="Two packs. Pick your launch speed."
          desc="Transparent pricing for early-stage teams, no surprises, no bloated scope." />

        <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }} className="price-grid">
          {PLANS.map(p => (
            <article key={p.name} style={{
              position: 'relative', padding: 36, borderRadius: 'var(--r-l)',
              border: '1px solid', borderColor: p.featured ? 'var(--acc)' : 'var(--line-2)',
              background: p.featured ? 'linear-gradient(180deg, rgba(216,255,62,0.06), rgba(216,255,62,0.01))' : 'var(--bg-1)',
              overflow: 'hidden',
            }}>
              {p.featured && (
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  opacity: 0.9,
                  pointerEvents: 'none',
                  background: 'radial-gradient(60% 60% at 50% 35%, rgba(216,255,62,0.12), transparent 72%)',
                }} />
              )}
              <div style={{ position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
                  <span className="eyebrow" style={{ color: p.featured ? 'var(--acc)' : 'var(--ink-3)' }}>
                    {p.featured ? 'Most popular' : 'Identity only'}
                  </span>
                  {p.featured && (
                    <span style={{
                      padding: '4px 10px', borderRadius: 999, background: 'var(--acc)', color: '#0a0a0b',
                      fontSize: 10, fontFamily: 'var(--mono)', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600,
                    }}>Featured</span>
                  )}
                </div>
                <h3 className="h4" style={{ margin: '0 0 10px' }}>{p.name}</h3>
                <p style={{ color: 'var(--ink-3)', fontSize: 14, margin: '0 0 28px', maxWidth: '36ch' }}>{p.sub}</p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 28 }}>
                  <span className="serif" style={{ fontSize: 'clamp(56px, 6vw, 80px)', lineHeight: 1, color: 'var(--ink)' }}>{p.price}</span>
                  <span style={{ color: 'var(--ink-3)', fontSize: 13 }}>fixed price</span>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {p.features.map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14, color: 'var(--ink-2)' }}>
                      <span style={{
                        width: 18, height: 18, borderRadius: 999, background: p.featured ? 'var(--acc)' : 'var(--bg-elev)',
                        color: p.featured ? '#0a0a0b' : 'var(--acc)',
                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 11, flexShrink: 0,
                      }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href={p.href} className={p.featured ? 'btn btn--primary' : 'btn btn--ghost'} style={{ width: '100%', justifyContent: 'center' }}>
                  {p.cta} <span className="arrow">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 760px) { .price-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  )
}
