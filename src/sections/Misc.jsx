import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHead } from './Services.jsx'
import Magnetic from '../components/Magnetic.jsx'

/* ===== TOOLING ===== */
// Monochrome icons (Simple Icons / Lucide paths) — colored via currentColor.
// Brand color only used for the hover halo behind the icon.
const TOOLS = [
  {
    name: 'Figma',
    use: 'Identity, UI, design systems',
    color: '#F24E1E',
    Icon: () => (
      <svg viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
        <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117zm0 1.471H8.148c-2.476 0-4.49-2.015-4.49-4.491S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588zM8.148 9.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V9.981zm7.704 6.038c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49 4.49 2.014 4.49 4.49-2.014 4.49-4.49 4.49zm0-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019 3.019-1.355 3.019-3.019-1.354-3.019-3.019-3.019zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.509c-1.665 0-3.019 1.355-3.019 3.019S6.483 22.529 8.148 22.529c1.705 0 3.117-1.387 3.117-3.068v-2.97z"/>
      </svg>
    ),
  },
  {
    name: 'Adobe CC',
    use: 'Print, illustration, finals',
    color: '#FA0F00',
    Icon: () => (
      <svg viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
        <path d="M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425zM8.884 1.376H0v21.248zm15.116 0h-8.884L24 22.624z"/>
      </svg>
    ),
  },
  {
    name: 'Keynote',
    use: 'Investor decks, pitches',
    color: '#1E91E6',
    Icon: () => (
      <svg viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
        <path d="M11.999 0c-3.6 0-5.7.4-7.5 1.4C2.699 2.4 1.299 3.8.399 5.6c-.9 1.7-1.3 3.8-1.3 7.4v.001c0 3.6.4 5.7 1.4 7.5.9 1.7 2.3 3.1 4.1 4 1.7 1 3.9 1.4 7.5 1.4 3.6 0 5.7-.4 7.5-1.4 1.7-.9 3.1-2.3 4.1-4 1-1.8 1.4-3.9 1.4-7.5 0-3.6-.4-5.7-1.4-7.5-.9-1.7-2.3-3.1-4.1-4-1.8-1-3.9-1.4-7.5-1.4zm0 4.8c.7 0 1.3.6 1.3 1.3v8.4l3.2-3.2c.5-.5 1.4-.5 1.9 0s.5 1.4 0 1.9l-5.4 5.4c-.5.5-1.4.5-1.9 0l-5.4-5.4c-.5-.5-.5-1.4 0-1.9s1.4-.5 1.9 0l3.2 3.2V6.1c0-.7.6-1.3 1.2-1.3z"/>
      </svg>
    ),
  },
  {
    name: 'Webflow',
    use: 'Marketing sites, handoff',
    color: '#146EF5',
    Icon: () => (
      <svg viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
        <path d="M24 4.515l-7.658 14.97H9.149l3.205-6.204h-.144C9.566 16.713 5.621 18.93 0 19.485v-6.118s3.596-.213 5.71-2.436H0V4.515h6.417v5.278l.144-.001 2.622-5.277h4.854v5.244h.144l2.72-5.244Z"/>
      </svg>
    ),
  },
  {
    name: 'Notion',
    use: 'Docs, briefs, handoff',
    color: '#ffffff',
    Icon: () => (
      <svg viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.094-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.635-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06C.42 18.43.187 17.823.187 17.077V3.96c0-.84.374-1.54 1.75-1.913z"/>
      </svg>
    ),
  },
  {
    name: 'Google Workspace',
    use: 'Async collab, sharing',
    color: '#4285F4',
    Icon: () => (
      <svg viewBox="0 0 24 24" width="100%" height="100%" fill="currentColor">
        <path d="M11.84 8.79V13.5h6.41c-.27 1.79-2.07 5.25-6.41 5.25-3.86 0-7.01-3.19-7.01-7.13 0-3.93 3.15-7.13 7.01-7.13 2.2 0 3.67.94 4.51 1.74l3.07-2.96C17.43 1.5 14.91.5 11.84.5 5.6.5.5 5.5.5 11.62s5.1 11.13 11.34 11.13c6.55 0 10.89-4.6 10.89-11.07 0-.74-.08-1.31-.18-1.88H11.84z"/>
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

      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div style={{
          width: 36, height: 36,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'var(--ink-2)',
          transition: 'color 320ms var(--ease), transform 320ms cubic-bezier(0.34, 1.56, 0.64, 1)',
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
        .tool-card:hover .tool-icon { transform: translateY(-2px) !important; color: ${tool.color} !important; }
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
