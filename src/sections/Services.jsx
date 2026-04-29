import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const PRIMARY = [
  { n: '01', title: 'Brand Identity', desc: 'Logo systems, typography, color, and guidelines that scale with your company.', detail: 'Wordmarks, monograms, type pairings, color tokens, motion principles, and a lightweight guideline doc your team can actually use.' },
  { n: '02', title: 'Web Design', desc: 'Marketing sites and key pages, responsive layouts and launch-ready UI.', detail: 'Information architecture, layout systems, art direction, component thinking, and handoff specs aligned with your engineering stack.' },
  { n: '03', title: 'UI/UX Design', desc: 'Flows, components, and systems for products people actually use.', detail: 'Onboarding flows, key product surfaces, design tokens, and a component library scoped to your nearest milestones.' },
  { n: '04', title: 'Deck Design', desc: 'Investor and sales decks with clear hierarchy and narrative structure.', detail: 'Story spine, slide architecture, data viz, master templates, and exec polish: the deck advisors actually read.' },
]

const SECONDARY = [
  ['Motion Design', 'Logo animation, promos, and social-first motion that matches the brand.'],
  ['Social & Ad Creatives', 'Paid social, organic, and display formats that stay on-message.'],
  ['Print Design', 'Editorial, posters, and collateral, print-ready files and specs.'],
  ['Packaging & Merch', 'Boxes, labels, and swag, designed for production and shelf impact.'],
]

export default function Services() {
  const [open, setOpen] = useState(0)
  return (
    <section className="section" id="services">
      <div className="container">
        <SectionHead eyebrow="Services" title="What we design for teams"
          desc="End-to-end brand and digital craft: identity, product, narrative, and campaign-ready assets in one coherent system." />

        <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 48 }} className="svc-grid">
          <div style={{ borderTop: '1px solid var(--line)' }}>
            {PRIMARY.map((s, i) => (
              <div key={s.n}
                onClick={() => setOpen(i)}
                style={{
                  borderBottom: '1px solid var(--line)', padding: '28px 0',
                  cursor: 'pointer', transition: 'all .3s var(--ease)',
                }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 24 }}>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: open === i ? 'var(--acc)' : 'var(--ink-3)', minWidth: 28 }}>
                    {s.n}
                  </span>
                  <div style={{ flex: 1 }}>
                    <h3 className="h4" style={{ margin: 0, color: open === i ? 'var(--ink)' : 'var(--ink-2)' }}>
                      {s.title}
                    </h3>
                    <p style={{ margin: '6px 0 0', color: 'var(--ink-3)', fontSize: 14, maxWidth: '50ch' }}>{s.desc}</p>
                    <AnimatePresence>
                      {open === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, marginTop: 0 }}
                          animate={{ height: 'auto', opacity: 1, marginTop: 14 }}
                          exit={{ height: 0, opacity: 0, marginTop: 0 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          style={{ overflow: 'hidden' }}>
                          <p style={{ margin: 0, color: 'var(--ink-2)', fontSize: 14, maxWidth: '54ch', lineHeight: 1.6 }}>
                            {s.detail}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <span style={{
                    width: 32, height: 32, borderRadius: 999, border: '1px solid var(--line-2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all .3s var(--ease)',
                    background: open === i ? 'var(--acc)' : 'transparent',
                    color: open === i ? '#0a0a0b' : 'var(--ink-3)',
                  }}>
                    {open === i ? '−' : '+'}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            borderRadius: 'var(--r-l)', border: '1px solid var(--line)', padding: 28,
            background: 'linear-gradient(180deg, var(--bg-1), var(--bg))',
            position: 'sticky', top: 110, alignSelf: 'start', height: 'fit-content',
          }}>
            <div className="eyebrow" style={{ marginBottom: 18 }}>Also</div>
            <div style={{ display: 'grid', gap: 16 }}>
              {SECONDARY.map(([t, d]) => (
                <div key={t} style={{ paddingBottom: 16, borderBottom: '1px solid var(--line)' }}>
                  <div style={{ fontWeight: 500, fontSize: 15, marginBottom: 4 }}>{t}</div>
                  <div style={{ color: 'var(--ink-3)', fontSize: 13, lineHeight: 1.55 }}>{d}</div>
                </div>
              ))}
            </div>
            <p className="serif" style={{ fontSize: 22, color: 'var(--ink-2)', marginTop: 24, marginBottom: 0 }}>
              One studio, every surface.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 920px) {
          .svc-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
        }
      `}</style>
    </section>
  )
}

export function SectionHead({ eyebrow, title, desc, align = 'left' }) {
  return (
    <div style={{ textAlign: align, maxWidth: 720, marginInline: align === 'center' ? 'auto' : 0 }}>
      <div className="eyebrow" style={{ marginBottom: 18 }}>{eyebrow}</div>
      <h2 className="h2" style={{ margin: '0 0 18px' }}>{title}</h2>
      {desc && <p className="lead" style={{ margin: 0, marginInline: align === 'center' ? 'auto' : 0 }}>{desc}</p>}
    </div>
  )
}
