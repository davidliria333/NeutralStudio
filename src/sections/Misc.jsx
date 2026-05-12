import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHead } from './Services.jsx'
import Magnetic from '../components/Magnetic.jsx'

/* ===== TOOLING ===== */
const TOOLS = [
  {
    name: 'Figma',
    use: 'Identity, UI, design systems',
    color: '#F24E1E',
    Icon: () => (
      <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none">
        <path d="M8 24c2.2 0 4-1.79 4-4v-4H8c-2.21 0-4 1.79-4 4s1.79 4 4 4z" fill="#0ACF83"/>
        <path d="M4 12c0-2.21 1.79-4 4-4h4v8H8c-2.21 0-4-1.79-4-4z" fill="#A259FF"/>
        <path d="M4 4c0-2.21 1.79-4 4-4h4v8H8C5.79 8 4 6.21 4 4z" fill="#F24E1E"/>
        <path d="M12 0h4c2.21 0 4 1.79 4 4s-1.79 4-4 4h-4V0z" fill="#FF7262"/>
        <path d="M20 12c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4z" fill="#1ABCFE"/>
      </svg>
    ),
  },
  {
    name: 'Adobe CC',
    use: 'Print, illustration, finals',
    color: '#FF61F6',
    Icon: () => (
      <svg viewBox="0 0 24 24" width="100%" height="100%">
        <rect width="24" height="24" rx="4" fill="#FA0F00"/>
        <path d="M7.3 16.2l-.83-2.5h-2.7l-.83 2.5H1l3-9h2L9 16.2H7.3zM5.13 8.7l-1 3h2l-1-3zm9.97 7.5V8.65c.3-.13.86-.25 1.6-.3.93-.06 1.7.16 2.25.7.55.55.83 1.36.83 2.45 0 1.2-.34 2.16-.97 2.74-.6.56-1.5.85-2.43.85-.46 0-.84-.02-1.28-.1zm1.34-1.27c.13.03.3.04.55.04.5 0 1-.16 1.34-.5.36-.36.55-.95.55-1.6 0-1.27-.66-2-1.83-2-.32 0-.55.04-.6.07v3.99z" fill="#fff"/>
      </svg>
    ),
  },
  {
    name: 'Keynote / Slides',
    use: 'Investor decks, pitches',
    color: '#FBBC04',
    Icon: () => (
      <svg viewBox="0 0 24 24" width="100%" height="100%">
        <rect x="3" y="4" width="18" height="14" rx="2" fill="#FBBC04"/>
        <rect x="6" y="7" width="12" height="1.6" rx="0.8" fill="#fff" opacity="0.95"/>
        <rect x="6" y="10.5" width="9" height="1.4" rx="0.7" fill="#fff" opacity="0.75"/>
        <rect x="6" y="13.5" width="6.5" height="1.4" rx="0.7" fill="#fff" opacity="0.55"/>
        <rect x="10" y="18.5" width="4" height="1.4" rx="0.7" fill="#FBBC04"/>
      </svg>
    ),
  },
  {
    name: 'Webflow',
    use: 'Marketing sites, handoff',
    color: '#146EF5',
    Icon: () => (
      <svg viewBox="0 0 24 24" width="100%" height="100%">
        <rect width="24" height="24" rx="4" fill="#146EF5"/>
        <path d="M5 8l2 8h2l1.5-4.5L12 16h2l2-8h-2l-1 5-1.5-5h-1.4L8.5 13 7.5 8H5z" fill="#fff"/>
      </svg>
    ),
  },
  {
    name: 'Notion',
    use: 'Docs, briefs, handoff',
    color: '#ffffff',
    Icon: () => (
      <svg viewBox="0 0 24 24" width="100%" height="100%">
        <rect width="24" height="24" rx="4" fill="#fff"/>
        <path d="M7.5 6h2l5 7V6h2v12h-2l-5-7v7h-2V6z" fill="#0a0a0b"/>
      </svg>
    ),
  },
  {
    name: 'Google Workspace',
    use: 'Async collab, sharing',
    color: '#4285F4',
    Icon: () => (
      <svg viewBox="0 0 24 24" width="100%" height="100%">
        <circle cx="12" cy="12" r="9" fill="none" stroke="#4285F4" strokeWidth="2.4"/>
        <path d="M12 7v5l3.5 2" stroke="#4285F4" strokeWidth="2.4" strokeLinecap="round" fill="none"/>
        <circle cx="12" cy="12" r="1.6" fill="#34A853"/>
      </svg>
    ),
  },
]

export function Tooling() {
  return (
    <section className="section section--tight">
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
          <SectionHead eyebrow="Tooling" title="Built in the tools your team already uses"
            desc="Modern stacks, so files are easy to share with contractors, agencies, and your internal team." />
          <div style={{
            fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-3)',
            letterSpacing: '0.12em', textTransform: 'uppercase',
            display: 'inline-flex', alignItems: 'center', gap: 10,
          }}>
            <span style={{ color: 'var(--ink-4)' }}>Stack /</span>
            <span className="tabular" style={{ color: 'var(--ink-2)' }}>{String(TOOLS.length).padStart(2, '0')} tools</span>
          </div>
        </div>

        <div style={{
          marginTop: 56,
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 18,
        }} className="tools-grid">
          {TOOLS.map((tool, i) => (
            <ToolCard key={tool.name} tool={tool} index={i} />
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) { .tools-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px) { .tools-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}

function ToolCard({ tool, index }) {
  const { Icon } = tool
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'relative',
        borderRadius: 'var(--r-l)',
        border: '1px solid var(--line)',
        background: 'linear-gradient(180deg, var(--bg-1) 0%, var(--bg) 100%)',
        padding: 26,
        overflow: 'hidden',
        cursor: 'default',
        transition: 'border-color 260ms var(--ease)',
        '--brand': tool.color,
      }}
      className="tool-card"
      data-hover
    >
      {/* Brand-color halo behind icon — only visible on hover */}
      <span aria-hidden style={{
        position: 'absolute',
        top: -30, left: -30,
        width: 160, height: 160,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${tool.color}40 0%, transparent 60%)`,
        filter: 'blur(20px)',
        opacity: 0,
        transition: 'opacity 320ms var(--ease)',
        pointerEvents: 'none',
      }} className="tool-halo" />

      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 22 }}>
        <div style={{
          width: 40, height: 40,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'transform 320ms cubic-bezier(0.34, 1.56, 0.64, 1)',
        }} className="tool-icon">
          <Icon />
        </div>
        <div>
          <h3 style={{
            margin: '0 0 6px',
            fontSize: 16, fontWeight: 500, color: 'var(--ink)',
            letterSpacing: '-0.01em',
          }}>{tool.name}</h3>
          <p style={{
            margin: 0,
            fontSize: 12.5, color: 'var(--ink-3)',
            fontFamily: 'var(--mono)', letterSpacing: '0.01em',
            lineHeight: 1.5,
          }}>{tool.use}</p>
        </div>
      </div>

      <style>{`
        .tool-card:hover { border-color: var(--line-3) !important; }
        .tool-card:hover .tool-halo { opacity: 1 !important; }
        .tool-card:hover .tool-icon { transform: translateY(-2px) !important; }
      `}</style>
    </motion.article>
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
            <a className="btn btn--primary" data-magnet href="https://cal.com/neutralstudio/30min?overlayCalendar=true" target="_blank" rel="noreferrer">
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
