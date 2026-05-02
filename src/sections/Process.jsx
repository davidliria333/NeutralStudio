import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionHead } from './Services.jsx'

const STEPS = [
  { tag: 'Day 1', title: 'Focus', desc: 'We lock audience, positioning, offer, and what the website must prove before anyone designs pixels.', out: ['Call + notes', 'Sprint timeline', 'Decision criteria'] },
  { tag: 'Days 2-3', title: 'Direction', desc: 'Identity and narrative routes move quickly; you pick a lane and we tighten it with founder-level feedback.', out: ['Visual direction', 'Messaging spine', 'Route selection'] },
  { tag: 'Days 4-5', title: 'Build', desc: 'Logo, type, color, core pages, and launch visuals are produced as one connected system.', out: ['Identity kit', 'Web key pages', 'Launch assets'] },
  { tag: 'Days 6-7', title: 'Launch', desc: 'Files, exports, and a working website are handed over with the decisions documented clearly.', out: ['Source files', 'Live-ready site', 'Specs + notes'] },
]

export default function Process() {
  const [active, setActive] = useState(0)
  return (
    <section className="section" id="process" style={{ background: 'var(--bg-1)' }}>
      <div className="container">
        <SectionHead eyebrow="Process" title="From messy brief to live in under a week"
          desc="A tight loop for early-stage constraints: fast feedback, clear milestones, and no theatre." />

        <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56 }} className="proc-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {STEPS.map((s, i) => (
              <button key={s.title} onClick={() => setActive(i)}
                style={{
                  textAlign: 'left', padding: '22px 24px', borderRadius: 'var(--r-m)', border: '1px solid',
                  borderColor: active === i ? 'var(--line-3)' : 'var(--line)',
                  background: active === i ? 'var(--bg-elev)' : 'transparent',
                  color: 'var(--ink)', cursor: 'pointer', transition: 'all .3s var(--ease)',
                  display: 'flex', alignItems: 'center', gap: 18,
                }}>
                <span style={{
                  width: 36, height: 36, borderRadius: 999, flexShrink: 0,
                  background: active === i ? 'var(--acc)' : 'transparent',
                  border: '1px solid', borderColor: active === i ? 'var(--acc)' : 'var(--line-2)',
                  color: active === i ? '#0a0a0b' : 'var(--ink-3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--mono)', fontSize: 12, fontWeight: 600,
                }}>{String(i + 1).padStart(2, '0')}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-3)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 4 }}>
                    {s.tag}
                  </div>
                  <div style={{ fontSize: 18, fontWeight: 500, letterSpacing: '-0.015em' }}>{s.title}</div>
                </div>
              </button>
            ))}
          </div>

          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
              padding: 36, borderRadius: 'var(--r-l)', border: '1px solid var(--line-2)',
              background: 'linear-gradient(180deg, var(--bg-2), var(--bg))',
              position: 'sticky', top: 110, alignSelf: 'start',
            }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--acc)', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 12 }}>
              Step {active + 1} / {STEPS.length}
            </div>
            <h3 className="h3" style={{ margin: '0 0 16px' }}>{STEPS[active].title}</h3>
            <p style={{ color: 'var(--ink-2)', fontSize: 16, lineHeight: 1.6, margin: 0 }}>{STEPS[active].desc}</p>
            <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div className="eyebrow">Outputs</div>
              {STEPS[active].out.map(o => (
                <div key={o} style={{
                  display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderBottom: '1px solid var(--line)',
                }}>
                  <span style={{ width: 4, height: 4, borderRadius: 999, background: 'var(--acc)' }} />
                  <span style={{ fontSize: 14, color: 'var(--ink-2)' }}>{o}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div style={{ marginTop: 56, textAlign: 'center' }}>
          <a className="btn btn--primary" href="mailto:arnaupinyolwork@gmail.com?subject=Neutral%20Studio%20-%20Project%20inquiry">
            Start your timeline <span className="arrow">→</span>
          </a>
        </div>
      </div>

      <style>{`@media (max-width: 880px) { .proc-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  )
}
