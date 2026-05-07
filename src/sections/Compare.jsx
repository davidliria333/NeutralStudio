import { SectionHead } from './Services.jsx'

const ROWS = [
  ['Kick off speed', 'Days with fixed scope', '4–8+ weeks to hire', 'Varies wildly', 'Long onboarding cycles'],
  ['Pricing', 'Fixed project price', 'Salary + overhead', 'Hourly creep', 'Retainers + fees'],
  ['Team quality', 'Senior designers', 'Junior-heavy behind partner', 'Variable quality', 'Partner pitch myth'],
  ['System coherence', 'Identity, deck, web aligned', 'One person\'s bandwidth', 'Fragmented across people', 'Narrative drift'],
  ['File ownership', 'You own; clean handoff', 'You manage HR + setup', 'Context lost in handoffs', 'Rigid contracts'],
  ['Timeline fit', 'Pre-seed to Series A', 'Hard to scale down', 'No single owner', 'Many meetings'],
]

const COLS = ['Neutral Studio', 'In-house hire', 'Freelancers', 'Agencies']

export default function Compare() {
  return (
    <section className="section" id="compare" style={{ background: 'var(--bg-1)' }}>
      <div className="container">
        <SectionHead eyebrow="Compare" title="Why founders choose us"
          desc="Neutral Studio vs. the usual alternatives for early-stage identity, deck, and web." />

        <div style={{ marginTop: 56, overflowX: 'auto', borderRadius: 'var(--r-l)', border: '1px solid var(--line)' }}>
          <table style={{
            width: '100%', minWidth: 760, borderCollapse: 'collapse', fontSize: 14,
          }}>
            <thead>
              <tr>
                <th style={th}></th>
                {COLS.map((c, i) => (
                  <th key={c} style={{
                    ...th,
                    background: i === 0 ? 'rgba(245,245,244,0.04)' : 'transparent',
                    color: i === 0 ? 'var(--ink)' : 'var(--ink-3)',
                    fontFamily: i === 0 ? 'var(--sans)' : 'var(--mono)',
                    fontSize: i === 0 ? 14 : 11,
                    letterSpacing: i === 0 ? '-0.005em' : '0.12em',
                    textTransform: i === 0 ? 'none' : 'uppercase',
                    fontWeight: i === 0 ? 600 : 500,
                  }}>
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, r) => (
                <tr key={r}>
                  <td style={{ ...td, color: 'var(--ink-3)', fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                    {row[0]}
                  </td>
                  {row.slice(1).map((cell, c) => (
                    <td key={c} style={{
                      ...td,
                      background: c === 0 ? 'rgba(245,245,244,0.025)' : 'transparent',
                      color: c === 0 ? 'var(--ink)' : 'var(--ink-2)',
                    }}>
                      <span style={{
                        display: 'inline-flex', alignItems: 'center', gap: 8,
                      }}>
                        <span style={{
                          width: 14, height: 14, borderRadius: 999, flexShrink: 0,
                          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                          background: c === 0 ? 'var(--ink)' : 'transparent',
                          border: c === 0 ? 'none' : '1px solid var(--line-3)',
                          color: c === 0 ? 'var(--bg)' : 'var(--ink-3)', fontSize: 9, fontWeight: 700,
                        }}>{c === 0 ? '✓' : '×'}</span>
                        {cell}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

const th = {
  textAlign: 'left', padding: '20px 22px', borderBottom: '1px solid var(--line)',
  fontWeight: 500, color: 'var(--ink-3)', fontFamily: 'var(--mono)', fontSize: 11,
  letterSpacing: '0.12em', textTransform: 'uppercase',
}
const td = {
  padding: '18px 22px', borderTop: '1px solid var(--line)', verticalAlign: 'middle',
}
