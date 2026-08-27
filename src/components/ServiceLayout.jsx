import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { lazy, Suspense, useEffect, useState } from 'react'
import { SERVICE_LINKS } from '../seo/site.js'
import { CALENDAR_URL, CAL_POPUP_PROPS } from './CalPopup.jsx'

const AmbientField = lazy(() => import('./three/AmbientField.jsx'))

export default function ServiceLayout({
  badge,
  title,
  accent,
  intro,
  overview,
  painPoints,
  deliverables,
  process,
  engagement,
  questions,
  currentPath,
}) {
  const [showAmbient, setShowAmbient] = useState(false)
  const relatedServices = SERVICE_LINKS.filter(({ path }) => path !== currentPath).slice(0, 4)

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setShowAmbient(true))
    return () => window.cancelAnimationFrame(frame)
  }, [])

  return (
    <>
      <section style={{ padding: '140px var(--gut) 80px', position: 'relative', overflow: 'hidden' }}>
        {showAmbient && (
          <Suspense fallback={null}>
            <div style={{ position: 'absolute', inset: 0, opacity: 0.4, pointerEvents: 'none' }}>
              <AmbientField density={120} />
            </div>
          </Suspense>
        )}
        <div className="container" style={{ position: 'relative', maxWidth: 880 }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: 12, fontFamily: 'var(--mono)', color: 'var(--ink-3)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            <Link to="/">Studio</Link> <span aria-hidden="true">/</span> <span>{badge}</span>
          </nav>
          <div style={{
            display: 'inline-flex', marginTop: 28, padding: '6px 14px', borderRadius: 999,
            border: '1px solid var(--line-2)', fontSize: 11, fontFamily: 'var(--mono)',
            color: 'var(--ink-3)', letterSpacing: '0.1em', textTransform: 'uppercase',
          }}>{badge}</div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="h1"
            style={{ marginTop: 24, marginBottom: 24, fontSize: 'clamp(48px, 7vw, 92px)' }}>
            {title} <span className="serif" style={{ color: 'var(--acc)', fontWeight: 400 }}>{accent}</span>
          </motion.h1>
          <p className="lead" style={{ fontSize: 'var(--fs-lead)', maxWidth: '54ch' }}>{intro}</p>
          {overview?.map((paragraph) => (
            <p key={paragraph} style={{ maxWidth: '68ch', color: 'var(--ink-2)', lineHeight: 1.75, margin: '18px 0 0' }}>{paragraph}</p>
          ))}
          <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a className="btn btn--primary" href={CALENDAR_URL} {...CAL_POPUP_PROPS} target="_blank" rel="noreferrer">
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
                  fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--ink-3)',
                }}>{String(i + 1).padStart(2, '0')}</div>
                <h3 style={{ margin: '0 0 8px', fontSize: 17, fontWeight: 500 }}>{d.t}</h3>
                <p style={{ margin: 0, color: 'var(--ink-3)', fontSize: 13.5, lineHeight: 1.55 }}>{d.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 880px){ .srv-grid{ grid-template-columns: 1fr 1fr !important; } } @media (max-width:560px){ .srv-grid{ grid-template-columns: 1fr !important; } }`}</style>
      </section>

      <section className="section section--tight" style={{ background: 'var(--bg-1)' }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 18 }}>How the work moves</div>
          <h2 className="h3" style={{ margin: '0 0 42px', maxWidth: 760 }}>A visible process, from the first decision to a usable system.</h2>
          <ol className="service-process">
            {process.map((step, index) => (
              <li key={step.title} className="card">
                <span className="mono">{String(index + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container service-detail-grid">
          <div>
            <div className="eyebrow" style={{ marginBottom: 18 }}>Working together</div>
            <h2 className="h3" style={{ margin: '0 0 24px' }}>{engagement.title}</h2>
            {engagement.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <ul>
              {engagement.points.map((point) => <li key={point}>{point}</li>)}
            </ul>
          </div>
          <div>
            <div className="eyebrow" style={{ marginBottom: 18 }}>Common questions</div>
            <div className="service-questions">
              {questions.map((question) => (
                <details key={question.question}>
                  <summary>{question.question}</summary>
                  <p>{question.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="related-services-title" style={{ background: 'var(--bg-1)' }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 18 }}>Related services</div>
          <h2 id="related-services-title" className="h3" style={{ margin: '0 0 34px' }}>Build the next part from the same direction.</h2>
          <nav className="service-related" aria-label="Related services">
            {relatedServices.map(({ path, label }) => <Link className="card" to={path} key={path}>{label}<span aria-hidden="true">↗</span></Link>)}
          </nav>
        </div>
      </section>

      <section className="section" style={{ textAlign: 'center', background: '#070708' }}>
        <div className="container" style={{ maxWidth: 640 }}>
          <h2 className="h2" style={{ margin: '0 0 24px' }}>
            Ready? <span className="serif" style={{ color: 'var(--ink-2)' }}>Let's start.</span>
          </h2>
          <a className="btn btn--primary" href={CALENDAR_URL} {...CAL_POPUP_PROPS} target="_blank" rel="noreferrer">
            Book a call <span className="arrow">→</span>
          </a>
        </div>
      </section>
      <style>{`
        .service-process{list-style:none;padding:0;margin:0;display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.service-process li span{font-size:12px;color:var(--ink-3)}.service-process h3{font-size:20px;margin:28px 0 10px}.service-process p,.service-detail-grid p,.service-detail-grid li{color:var(--ink-2);line-height:1.7}.service-detail-grid{display:grid;grid-template-columns:1fr 1fr;gap:clamp(48px,8vw,120px)}.service-detail-grid ul{padding-left:20px}.service-questions{border-top:1px solid var(--line-2)}.service-questions details{border-bottom:1px solid var(--line-2);padding:18px 0}.service-questions summary{font-size:16px;font-weight:600;cursor:pointer}.service-questions p{margin:12px 0 0}.service-related{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}.service-related a{display:flex;align-items:center;justify-content:space-between;font-weight:600}.service-related a span{color:var(--acc)}@media(max-width:900px){.service-process{grid-template-columns:1fr}.service-detail-grid{grid-template-columns:1fr}.service-related{grid-template-columns:1fr 1fr}}@media(max-width:560px){.service-related{grid-template-columns:1fr}}
      `}</style>
    </>
  )
}
