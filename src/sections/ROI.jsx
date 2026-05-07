import { SectionHead } from './Services.jsx'

const STATS = [
  { k: '100+', label: 'projects', desc: 'Shipped with founders: identity, deck, and web in focused engagements.' },
  { k: '$100M+', label: 'raised', desc: 'Collective funding raised by teams we\'ve supported on brand and narrative.' },
  { k: 'Weeks', label: 'turnaround', desc: 'Most launch packages land in a few weeks when feedback stays tight.' },
  { k: 'Fixed', label: 'price', desc: 'Know the number before you sign, with no surprise invoices mid-sprint.' },
  { k: '50+ yr', label: 'experience', desc: 'Combined experience across exited founders and senior designers.' },
  { k: 'Days', label: 'to direction', desc: 'From kickoff to direction you can share with investors and engineering.' },
]

export default function ROI() {
  return (
    <section className="section" id="roi" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        background: 'radial-gradient(70% 60% at 50% 0%, rgba(216,255,62,0.08), transparent 70%)',
      }} />
      <div className="container" style={{ position: 'relative' }}>
        <SectionHead eyebrow="ROI" title="Success in numbers"
          desc="Design that pays for itself when you ship faster and raise with confidence." />

        <div style={{
          marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1,
          background: 'var(--line)', border: '1px solid var(--line)', borderRadius: 'var(--r-l)', overflow: 'hidden',
        }} className="roi-grid">
          {STATS.map(s => (
            <div key={s.label} style={{ background: 'var(--bg)', padding: '36px 28px' }}>
              <div className="serif tabular" style={{ fontSize: 'clamp(48px, 6vw, 80px)', lineHeight: 1, letterSpacing: '-0.02em', color: 'var(--ink)' }}>
                {s.k}
              </div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-3)', letterSpacing: '0.16em', textTransform: 'uppercase', marginTop: 12, marginBottom: 14 }}>
                {s.label}
              </div>
              <div style={{ color: 'var(--ink-3)', fontSize: 13, lineHeight: 1.55, maxWidth: '34ch' }}>{s.desc}</div>
            </div>
          ))}
        </div>

        <p style={{ textAlign: 'center', color: 'var(--ink-3)', marginTop: 48, fontSize: 15 }}>
          Supporting founders from messy brief to launch-ready brand.
        </p>
      </div>
      <style>{`
        @media (max-width: 880px) { .roi-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 560px) { .roi-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
