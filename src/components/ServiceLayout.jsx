import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { lazy, Suspense } from 'react'

const AmbientField = lazy(() => import('./three/AmbientField.jsx'))

export default function ServiceLayout({ badge, title, accent, intro, painPoints, deliverables, results, beforeAfter }) {
  return (
    <>
      <section style={{ padding: '140px var(--gut) 80px', position: 'relative', overflow: 'hidden' }}>
        <Suspense fallback={null}>
          <div style={{ position: 'absolute', inset: 0, opacity: 0.4, pointerEvents: 'none' }}>
            <AmbientField density={120} />
          </div>
        </Suspense>
        <div className="container" style={{ position: 'relative', maxWidth: 880 }}>
          <Link to="/" style={{ fontSize: 12, fontFamily: 'var(--mono)', color: 'var(--ink-3)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            ← Back to studio
          </Link>
          <div style={{
            display: 'inline-flex', marginTop: 28, padding: '6px 14px', borderRadius: 999,
            border: '1px solid var(--line-2)', fontSize: 11, fontFamily: 'var(--mono)',
            color: 'var(--acc)', letterSpacing: '0.1em', textTransform: 'uppercase',
          }}>{badge}</div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="h1"
            style={{ marginTop: 24, marginBottom: 24, fontSize: 'clamp(48px, 7vw, 92px)' }}>
            {title} <span className="serif" style={{ color: 'var(--acc)', fontWeight: 400 }}>{accent}</span>
          </motion.h1>
          <p className="lead" style={{ fontSize: 'var(--fs-lead)', maxWidth: '54ch' }}>{intro}</p>
          <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a className="btn btn--primary" href="https://cal.com/neutralstudio/30min" target="_blank" rel="noreferrer">
              Book a call <span className="arrow">→</span>
            </a>
            <a className="btn btn--ghost" href="mailto:arnaupinyolwork@gmail.com">Email us</a>
          </div>
        </div>
      </section>

      <section className="section section--tight" style={{ background: 'var(--bg-1)' }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 18 }}>The challenge</div>
          <h2 className="h3" style={{ margin: '0 0 36px', maxWidth: 720 }}>Where teams lose momentum.</h2>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 1,
            background: 'var(--line)', border: '1px solid var(--line)', borderRadius: 'var(--r-l)', overflow: 'hidden',
          }}>
            {painPoints.map((p, i) => (
              <div key={i} style={{ background: 'var(--bg)', padding: 28 }}>
                <div style={{ width: 8, height: 8, borderRadius: 999, background: 'var(--acc-2)', marginBottom: 18 }} />
                <p style={{ margin: 0, color: 'var(--ink-2)', fontSize: 14, lineHeight: 1.55 }}>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 18 }}>What we deliver</div>
          <h2 className="h3" style={{ margin: '0 0 48px', maxWidth: 720 }}>One coherent system.</h2>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18,
          }} className="srv-grid">
            {deliverables.map((d, i) => (
              <motion.div key={d.t} className="card" style={{ padding: 28 }}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10, background: 'var(--bg-elev)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20,
                  fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--acc)',
                }}>{String(i + 1).padStart(2, '0')}</div>
                <h3 style={{ margin: '0 0 8px', fontSize: 17, fontWeight: 500 }}>{d.t}</h3>
                <p style={{ margin: 0, color: 'var(--ink-3)', fontSize: 13.5, lineHeight: 1.55 }}>{d.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 880px){ .srv-grid{ grid-template-columns: 1fr 1fr !important; } } @media (max-width:560px){ .srv-grid{ grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {results && (
        <section className="section section--tight" style={{ background: 'var(--bg-1)' }}>
          <div className="container">
            <div className="eyebrow" style={{ marginBottom: 18 }}>Proof</div>
            <h2 className="h3" style={{ margin: '0 0 36px' }}>What teams report</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }} className="res-grid">
              {results.map((r, i) => (
                <div key={i} className="card" style={{ padding: 28 }}>
                  <div className="serif" style={{ fontSize: 'clamp(40px, 4vw, 56px)', color: 'var(--acc)', lineHeight: 1, marginBottom: 16 }}>
                    {r.metric}
                  </div>
                  <p style={{ margin: 0, color: 'var(--ink-2)', fontSize: 14, lineHeight: 1.55 }}>"{r.quote}"</p>
                  <div style={{ marginTop: 18, fontSize: 12, color: 'var(--ink-3)', fontFamily: 'var(--mono)', letterSpacing: '0.04em' }}>
                    — {r.who}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media (max-width: 880px){ .res-grid{ grid-template-columns: 1fr !important; } }`}</style>
        </section>
      )}

      {beforeAfter && (
        <section className="section">
          <div className="container">
            <div className="eyebrow" style={{ marginBottom: 18 }}>Before / after</div>
            <h2 className="h3" style={{ margin: '0 0 48px' }}>Typical timelines</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: 'var(--line)', border: '1px solid var(--line)', borderRadius: 'var(--r-l)', overflow: 'hidden' }}>
              {beforeAfter.map((b, i) => (
                <div key={i} style={{
                  background: 'var(--bg)', padding: '24px 28px',
                  display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24, alignItems: 'center',
                }} className="ba-row">
                  <div style={{ fontSize: 14, color: 'var(--ink-3)' }}>{b.what}</div>
                  <div style={{ fontSize: 14, color: 'var(--ink-2)', textDecoration: 'line-through' }}>{b.before}</div>
                  <div style={{ fontSize: 14, color: 'var(--acc)', fontWeight: 500 }}>→ {b.after}</div>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media (max-width: 760px){ .ba-row{ grid-template-columns: 1fr !important; } }`}</style>
        </section>
      )}

      <section className="section" style={{ textAlign: 'center', background: '#070708' }}>
        <div className="container" style={{ maxWidth: 640 }}>
          <h2 className="h2" style={{ margin: '0 0 24px' }}>
            Ready? <span className="serif" style={{ color: 'var(--acc)' }}>Let's start.</span>
          </h2>
          <a className="btn btn--primary" href="https://cal.com/neutralstudio/30min" target="_blank" rel="noreferrer">
            Book a call <span className="arrow">→</span>
          </a>
        </div>
      </section>
    </>
  )
}
