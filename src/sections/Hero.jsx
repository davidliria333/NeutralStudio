import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'

const HeroScene = lazy(() => import('../components/three/HeroScene.jsx'))

export default function Hero() {
  return (
    <section style={{
      position: 'relative', minHeight: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      paddingTop: 90, paddingBottom: 40, overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Suspense fallback={null}><HeroScene /></Suspense>
      </div>

      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(10,10,11,0.85) 90%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 10, padding: '8px 16px',
            border: '1px solid var(--line-2)', borderRadius: 999, marginBottom: 36,
            background: 'rgba(245,245,244,0.04)', backdropFilter: 'blur(10px)',
            fontSize: 12, fontFamily: 'var(--mono)', letterSpacing: '0.04em',
          }}>
          <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--acc)', boxShadow: '0 0 12px var(--acc)' }} />
          Fast · agile · built for early-stage teams
        </motion.div>

        <motion.h1
          className="h1"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginTop: 0, marginBottom: 24, maxWidth: '14ch', marginInline: 'auto' }}>
          Make your startup look <span className="serif" style={{ color: 'var(--acc)', fontWeight: 400 }}>inevitable.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          style={{
            color: 'var(--ink-2)', fontSize: 'var(--fs-lead)', maxWidth: '54ch',
            margin: '0 auto 40px', lineHeight: 1.55,
          }}>
          The #1 design studio for early-stage startups. Identity, pitch, and web,
          built as one system, by senior designers and exited founders.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'inline-flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
          <a className="btn btn--primary" href="https://cal.com/neutralstudio/30min" target="_blank" rel="noreferrer">
            Book a call <span className="arrow">→</span>
          </a>
          <a className="btn btn--ghost" href="mailto:arnaupinyolwork@gmail.com?subject=Neutral%20Studio%20-%20Question">
            Email us
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          style={{
            position: 'absolute', left: '50%', bottom: '-90px', transform: 'translateX(-50%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
            color: 'var(--ink-3)', fontSize: 11, fontFamily: 'var(--mono)', letterSpacing: '0.16em',
          }}>
          <span>SCROLL</span>
          <div style={{
            width: 1, height: 36, background: 'linear-gradient(180deg, var(--ink-3), transparent)',
          }} />
        </motion.div>
      </div>
    </section>
  )
}
