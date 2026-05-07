import { SectionHead } from './Services.jsx'

const PLANS = [
  {
    name: 'Complete Visual Identity',
    price: '$3,000',
    sub: 'A full identity system built to scale, without web design or pitch deck.',
    features: ['Logo system & brand marks', 'Typography & color palette', 'Core identity assets & templates', 'Brand guidelines (lightweight)'],
    cta: 'Email to book',
    href: 'mailto:arnaupinyolwork@gmail.com?subject=Neutral%20Studio%20-%20%243%2C000%20identity%20package',
    badge: 'Identity only',
    featured: false,
  },
  {
    name: 'Full Launch Package',
    price: '$5,500',
    sub: 'Identity + pitch deck + web design, built to ship together, fast.',
    features: ['Complete visual identity', 'Investor-ready pitch deck', 'Marketing website design & key layouts', 'Organized handoff + export specs'],
    cta: 'Email to book',
    href: 'mailto:arnaupinyolwork@gmail.com?subject=Neutral%20Studio%20-%20%245%2C500%20full%20package',
    badge: 'Most popular',
    featured: true,
  },
]

export default function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <SectionHead eyebrow="Pricing" title="Two packs. Pick your launch speed."
          desc="Transparent pricing for early-stage teams, no surprises, no bloated scope." />

        {/* One-week ribbon */}
        <div style={{
          marginTop: 40,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16,
          padding: '14px 22px',
          borderRadius: 999,
          border: '1px solid rgba(216,255,62,0.35)',
          background: 'linear-gradient(90deg, rgba(216,255,62,0.07), rgba(216,255,62,0.01))',
        }} className="price-ribbon">
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
            <span style={{
              width: 6, height: 6, borderRadius: 999, background: 'var(--acc)',
              boxShadow: '0 0 10px var(--acc)',
              animation: 'pulse-dot-pricing 3.6s ease-in-out infinite',
            }} />
            <span style={{
              fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--acc)',
              letterSpacing: '0.14em', textTransform: 'uppercase',
            }}>
              Launch in 1 week
            </span>
            <span style={{ color: 'var(--ink-2)', fontSize: 13.5, lineHeight: 1.5 }}>
              Limited slots this month for sprint engagements.
            </span>
          </span>
          <a href="mailto:arnaupinyolwork@gmail.com?subject=Neutral%20Studio%20-%201-week%20launch%20sprint"
             style={{
               fontSize: 13, fontWeight: 500, color: 'var(--ink)',
               display: 'inline-flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap',
             }}>
            Reserve a slot <span style={{ color: 'var(--acc)' }}>→</span>
          </a>
        </div>

        <style>{`
          @keyframes pulse-dot-pricing {
            0%, 100% { box-shadow: 0 0 8px var(--acc); }
            50% { box-shadow: 0 0 16px var(--acc); }
          }
          @media (max-width: 640px) {
            .price-ribbon { padding: 14px 18px !important; }
          }
        `}</style>

        <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }} className="price-grid">
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
                  <span className="eyebrow" style={{ color: 'var(--ink-3)' }}>
                    {p.badge}
                  </span>
                  {p.featured && (
                    <span style={{
                      padding: '4px 10px', borderRadius: 999, background: 'var(--ink)', color: 'var(--bg)',
                      fontSize: 10, fontFamily: 'var(--mono)', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600,
                    }}>Featured</span>
                  )}
                </div>
                <h3 className="h4" style={{ margin: '0 0 10px' }}>{p.name}</h3>
                <p style={{ color: 'var(--ink-3)', fontSize: 14, margin: '0 0 28px', maxWidth: '36ch' }}>{p.sub}</p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 28 }}>
                  <span className="serif tabular" style={{ fontSize: 'clamp(56px, 6vw, 80px)', lineHeight: 1, color: 'var(--ink)' }}>{p.price}</span>
                  <span style={{ color: 'var(--ink-3)', fontSize: 13 }}>fixed price</span>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {p.features.map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14, color: 'var(--ink-2)' }}>
                      <span style={{
                        width: 18, height: 18, borderRadius: 999, background: 'var(--bg-elev)',
                        color: 'var(--ink)',
                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 11, flexShrink: 0,
                        border: '1px solid var(--line-2)',
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

        {/* Third tier: custom / open conversation */}
        <article style={{
          marginTop: 24,
          position: 'relative',
          padding: '40px 48px',
          borderRadius: 'var(--r-l)',
          border: '1px solid var(--line-2)',
          background: 'var(--bg-1)',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 40,
        }} className="price-custom">
          {/* Subtle noise texture overlay */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.018,
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
            backgroundSize: '200px 200px',
          }} />

          <div style={{ position: 'relative', maxWidth: 560 }}>
            <span className="eyebrow" style={{ color: 'var(--ink-3)', marginBottom: 14, display: 'block' }}>Custom</span>
            <h3 className="h4" style={{ margin: '0 0 10px' }}>
              New upcoming launch? Specific needs?{' '}
              <span className="serif" style={{ color: 'var(--acc)' }}>Let's talk.</span>
            </h3>
            <p style={{ color: 'var(--ink-3)', fontSize: 14, margin: 0, maxWidth: '52ch', lineHeight: 1.65 }}>
              Pre-launch, niche scope, or somewhere between the two packs above. Send us a note and we'll tell you honestly if we're the right fit.
            </p>
          </div>

          <div style={{ position: 'relative', display: 'flex', gap: 12, flexShrink: 0, flexWrap: 'wrap' }} className="price-custom-ctas">
            <a href="mailto:arnaupinyolwork@gmail.com?subject=Neutral%20Studio%20-%20Custom%20project"
              className="btn btn--ghost" style={{ whiteSpace: 'nowrap' }}>
              Send a note <span className="arrow">→</span>
            </a>
            <a href="https://cal.com/neutralstudio/30min?overlayCalendar=true" target="_blank" rel="noreferrer"
              className="btn btn--ghost" style={{ whiteSpace: 'nowrap' }}>
              Book a call
            </a>
          </div>
        </article>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .price-grid { grid-template-columns: 1fr !important; }
          .price-custom { flex-direction: column !important; padding: 32px 24px !important; align-items: flex-start !important; }
          .price-custom-ctas { width: 100%; }
          .price-custom-ctas .btn { flex: 1; justify-content: center; }
        }
      `}</style>
    </section>
  )
}
