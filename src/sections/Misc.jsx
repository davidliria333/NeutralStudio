import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHead } from './Services.jsx'
import Magnetic from '../components/Magnetic.jsx'

/* ===== TOOLING ===== */
export function Tooling() {
  const tools = ['Figma', 'Adobe CC', 'Slides', 'Webflow', 'Framer', 'Notion', 'Workspace', 'Linear']
  return (
    <section className="section section--tight">
      <div className="container">
        <SectionHead eyebrow="Tooling" title="Built in the tools your team already uses"
          desc="We design in modern stacks, so files are easy to share with contractors, agencies, and your internal team." />
        <div style={{
          marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: 1,
          background: 'var(--line)', border: '1px solid var(--line)', borderRadius: 'var(--r-l)', overflow: 'hidden',
        }} className="tools-grid">
          {tools.map(t => (
            <div key={t} style={{
              background: 'var(--bg)', padding: '32px 16px', textAlign: 'center',
              fontSize: 13, color: 'var(--ink-2)', fontFamily: 'var(--mono)', letterSpacing: '0.04em',
            }}>{t}</div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) { .tools-grid { grid-template-columns: repeat(4, 1fr) !important; } }
        @media (max-width: 480px) { .tools-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </section>
  )
}

/* ===== PARTNERSHIP ===== */
export function Partnership() {
  const list = [
    'Direct access to the designer on the account',
    'Async updates with predictable checkpoints',
    'Practical feedback loops for busy teams',
    'Packaged handoff so engineering can move',
    'Investor-ready narrative support in the deck',
    'Scope discipline, we protect your runway',
    'Optional follow-on sprints when you scale',
  ]
  return (
    <section className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="partner-grid">
          <div>
            <SectionHead eyebrow="Collaboration" title="Embedded with founders, not a ticket queue"
              desc="Startups change their minds. We stay close to product and the raise so design decisions stay coherent." />
            <ul style={{ listStyle: 'none', padding: 0, margin: '36px 0 32px', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {list.map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, color: 'var(--ink-2)', fontSize: 14 }}>
                  <span style={{
                    width: 22, height: 22, borderRadius: 999, background: 'var(--bg-elev)',
                    color: 'var(--ink)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 11, flexShrink: 0, marginTop: 1,
                    border: '1px solid var(--line-2)',
                  }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a className="btn btn--ghost" href="mailto:arnaupinyolwork@gmail.com?subject=Neutral%20Studio%20-%20Intro">
              Email to start <span className="arrow">→</span>
            </a>
          </div>
          <div style={{
            position: 'relative', borderRadius: 'var(--r-l)', overflow: 'hidden',
            border: '1px solid var(--line)', background: 'var(--bg-1)', aspectRatio: '4/5',
          }}>
            <img src="/partnership.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', mixBlendMode: 'luminosity', opacity: 0.85 }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 60%, var(--bg) 100%)' }} />
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 880px) { .partner-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  )
}

/* ===== OWNERSHIP ===== */
export function Ownership() {
  const items = [
    { title: 'You own the outputs', desc: 'Source files and exports are yours, logos, fonts, color tokens, and slide masters included.' },
    { title: 'Organized handoff', desc: 'Naming, folders, and specs structured so product and marketing can reuse without guesswork.' },
    { title: 'Flexible stack', desc: 'We meet you in Figma, slides, or web tools, whatever fits your team and contractors.' },
  ]
  return (
    <section className="section section--tight" style={{ background: 'var(--bg-1)' }}>
      <div className="container">
        <SectionHead eyebrow="Ownership & clarity" title="Your brand. Your files. No lock-in."
          desc="We deliver work you can actually operate, so you are not dependent on us for every tweak." />
        <div style={{
          marginTop: 48, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1,
          background: 'var(--line)', border: '1px solid var(--line)', borderRadius: 'var(--r-l)', overflow: 'hidden',
        }} className="own-grid">
          {items.map((it, i) => (
            <div key={it.title} style={{ background: 'var(--bg)', padding: 32 }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12, background: 'var(--bg-elev)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 22,
                fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--ink-3)',
              }}>0{i + 1}</div>
              <h3 className="h5" style={{ margin: '0 0 10px' }}>{it.title}</h3>
              <p style={{ margin: 0, color: 'var(--ink-3)', fontSize: 14, lineHeight: 1.6 }}>{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 880px) { .own-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  )
}

/* ===== TEAM ===== */
export function Team() {
  const cards = [
    { mono: 'EF', tag: 'Exited founders', body: 'People who have built and sold companies, so runway, urgency, and shipping are second nature.' },
    { mono: 'CD', tag: 'Former chiefs of design', body: 'Leaders who have owned brand and product design inside high-growth teams, not theory from the sidelines.' },
    { mono: 'SD', tag: 'Senior designers', body: 'Hands-on craft across typography, color, layout, and digital, so deliverables stay coherent end to end.' },
    { mono: '50', tag: 'Years combined', body: 'Depth across stages, categories, and markets, without the agency layers.' },
  ]
  return (
    <section className="section" id="team">
      <div className="container">
        <SectionHead eyebrow="Our team" title="Founders, design leaders, makers"
          desc="Exited startup founders, former chiefs of design, and senior designers, over 50 years combined experience, still small enough to move fast." />
        <div style={{
          marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20,
        }} className="team-grid">
          {cards.map((c, i) => (
            <div key={c.tag} className="card" style={{ padding: 28, display: 'flex', gap: 22, alignItems: 'flex-start' }}>
              <div style={{
                width: 54, height: 54, borderRadius: 14, flexShrink: 0,
                background: i % 2 === 0
                  ? 'linear-gradient(135deg, var(--bg-elev), var(--bg-2))'
                  : 'linear-gradient(135deg, var(--bg-2), var(--bg-1))',
                border: '1px solid var(--line-2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--sans)', fontWeight: 500, fontSize: 18,
                letterSpacing: '-0.02em', color: 'var(--ink)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)',
              }}>{c.mono}</div>
              <div style={{ flex: 1 }}>
                <h3 className="h5" style={{ margin: '0 0 8px' }}>{c.tag}</h3>
                <p style={{ margin: 0, color: 'var(--ink-3)', fontSize: 14, lineHeight: 1.6 }}>{c.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 32, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {['Remote-first', 'EU & US', '& more'].map(p => (
            <span key={p} style={{
              padding: '8px 16px', borderRadius: 999, border: '1px solid var(--line-2)',
              fontSize: 12, color: 'var(--ink-3)', fontFamily: 'var(--mono)', letterSpacing: '0.04em',
            }}>{p}</span>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 760px) { .team-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  )
}

/* ===== FAQ ===== */
const FAQS = [
  ['Who is Neutral Studio for?', 'Early-stage startups that need a credible identity, pitch, and web presence quickly, without hiring a full agency roster.'],
  ['Do I need a full brand brief?', 'No. Bring what you have, notes, product screenshots, competitor links, and we\'ll shape the brief through conversation.'],
  ['How long does a project take?', 'Most launch packages land in a few weeks, faster when feedback is tight. We agree milestones at kickoff.'],
  ['What do I receive at the end?', 'Source files and exports for identity, deck, and web, organized for your team and contractors.'],
  ['What if we need more than the package?', 'We can scope add-ons after the first delivery, extra pages, motion, or campaign templates, without renegotiating.'],
  ['Why is pricing so straightforward?', 'Startups need predictability. One fixed price keeps everyone aligned on what ships and when.'],
]

export function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section className="section" id="faq">
      <div className="container" style={{ maxWidth: 880 }}>
        <SectionHead eyebrow="FAQ" title="Frequently asked questions" align="center" />
        <div style={{ marginTop: 56, borderTop: '1px solid var(--line)' }}>
          {FAQS.map(([q, a], i) => (
            <div key={q} style={{ borderBottom: '1px solid var(--line)' }}>
              <button onClick={() => setOpen(open === i ? -1 : i)}
                style={{
                  width: '100%', textAlign: 'left', padding: '24px 0', background: 'transparent',
                  border: 0, color: 'var(--ink)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24,
                }}>
                <span className="h5" style={{ margin: 0, fontWeight: 500 }}>{q}</span>
                <span style={{
                  width: 32, height: 32, borderRadius: 999, border: '1px solid var(--line-2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  background: open === i ? 'var(--ink)' : 'transparent',
                  position: 'relative',
                  transition: 'background-color 320ms cubic-bezier(0.34, 1.56, 0.64, 1), border-color 280ms var(--ease)',
                }}>
                  <span style={{
                    position: 'absolute', width: 11, height: 1.5, borderRadius: 1,
                    background: open === i ? 'var(--bg)' : 'var(--ink-3)',
                    transition: 'background-color 240ms var(--ease)',
                  }} />
                  <span style={{
                    position: 'absolute', width: 11, height: 1.5, borderRadius: 1,
                    background: open === i ? 'var(--bg)' : 'var(--ink-3)',
                    transform: open === i ? 'rotate(0deg)' : 'rotate(90deg)',
                    transition: 'transform 360ms cubic-bezier(0.34, 1.56, 0.64, 1), background-color 240ms var(--ease)',
                  }} />
                </span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    style={{ overflow: 'hidden' }}>
                    <p style={{ margin: 0, padding: '0 0 24px', color: 'var(--ink-2)', maxWidth: '60ch', lineHeight: 1.6 }}>
                      {a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ===== SMASH CTA ===== */
export function SmashCTA() {
  return (
    <section style={{
      position: 'relative', padding: 'clamp(100px, 12vw, 180px) var(--gut)',
      background: '#070708', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.95,
        pointerEvents: 'none',
        background: 'radial-gradient(56% 58% at 50% 42%, rgba(216,255,62,0.14), transparent 72%), radial-gradient(40% 36% at 70% 65%, rgba(106,140,255,0.10), transparent 76%)',
      }} />
      <div style={{ position: 'relative', maxWidth: 880, margin: '0 auto', textAlign: 'center' }}>
        <div className="eyebrow" style={{ justifyContent: 'center', marginBottom: 24 }}>Ready</div>
        <h2 className="h1" style={{ fontSize: 'clamp(44px, 7vw, 96px)', margin: '0 0 32px', letterSpacing: '-0.04em' }}>
          Stop looking like a <span className="serif" style={{ color: 'var(--acc)', fontWeight: 400 }}>rough draft.</span>
        </h2>
        <p className="lead" style={{ margin: '0 auto 40px', maxWidth: '52ch' }}>
          Tell us what you're building and when you need to show up. We reply with next steps and timing.
        </p>
        <div style={{ display: 'inline-flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Magnetic radius={100} strength={0.36}>
            <a className="btn btn--primary" data-magnet href="https://cal.com/neutralstudio/30min" target="_blank" rel="noreferrer">
              Pick a slot <span className="arrow">→</span>
            </a>
          </Magnetic>
          <Magnetic radius={70} strength={0.22}>
            <a className="btn btn--ghost" data-magnet href="mailto:arnaupinyolwork@gmail.com?subject=Neutral%20Studio%20-%20Project%20inquiry">
              Email to start
            </a>
          </Magnetic>
        </div>
        <p className="serif" style={{ marginTop: 56, fontSize: 22, color: 'var(--ink-3)' }}>
          Reply within a working day.
        </p>
      </div>
    </section>
  )
}
