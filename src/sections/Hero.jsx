import { lazy, Suspense, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const HeroScene = lazy(() => import('../components/three/HeroScene.jsx'))

function useIsSmall() {
  const [small, setSmall] = useState(false)
  useEffect(() => {
    const m = window.matchMedia('(max-width: 760px)')
    const on = () => setSmall(m.matches)
    on()
    m.addEventListener('change', on)
    return () => m.removeEventListener('change', on)
  }, [])
  return small
}

export default function Hero() {
  const isSmall = useIsSmall()

  return (
    <section style={{
      position: 'relative', minHeight: '100svh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      paddingTop: 'clamp(110px, 14vh, 160px)',
      paddingBottom: 'clamp(60px, 10vh, 100px)',
      paddingInline: 'var(--gut)',
      overflow: 'hidden',
      background: 'radial-gradient(120% 80% at 50% 20%, #18181f 0%, #0a0a0b 60%)',
    }}>
      {!isSmall && (
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.85 }}>
          <Suspense fallback={null}><HeroScene /></Suspense>
        </div>
      )}

      {/* Strong center vignette that protects text legibility */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: isSmall
          ? 'none'
          : 'radial-gradient(60% 50% at 50% 50%, rgba(10,10,11,0.85) 0%, rgba(10,10,11,0.55) 40%, transparent 75%)',
      }} />

      {/* Top + bottom fade for header / scroll cue */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: 'linear-gradient(180deg, rgba(10,10,11,0.6) 0%, transparent 18%, transparent 80%, rgba(10,10,11,0.9) 100%)',
      }} />

      {/* Mobile-only static decoration */}
      {isSmall && <MobileDecor />}

      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', width: '100%', maxWidth: 880 }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 10, padding: '7px 14px',
            border: '1px solid var(--line-2)', borderRadius: 999,
            background: 'rgba(10,10,11,0.6)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
            fontSize: 11, fontFamily: 'var(--mono)', letterSpacing: '0.06em',
            color: 'var(--ink-2)', marginBottom: 'clamp(20px, 4vh, 36px)',
          }}>
          <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--acc)', boxShadow: '0 0 12px var(--acc)' }} />
          Fast · agile · early-stage teams
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            margin: '0 auto 24px',
            maxWidth: '14ch',
            fontSize: 'clamp(40px, 8.5vw, 116px)',
            fontWeight: 500,
            lineHeight: 0.96,
            letterSpacing: '-0.045em',
            color: 'var(--ink)',
            textShadow: '0 2px 30px rgba(10,10,11,0.6)',
          }}>
          Make your startup look{' '}
          <span className="serif" style={{
            color: 'var(--acc)', fontWeight: 400,
            textShadow: '0 0 40px rgba(216,255,62,0.35)',
          }}>inevitable.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          style={{
            color: 'var(--ink-2)',
            fontSize: 'clamp(15px, 1.6vw, 19px)',
            maxWidth: '52ch',
            margin: '0 auto clamp(28px, 4vh, 40px)',
            lineHeight: 1.55,
            textShadow: '0 1px 20px rgba(10,10,11,0.6)',
          }}>
          The #1 design studio for early-stage startups. Identity, pitch, and web,
          built as one system, by senior designers and exited founders.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'inline-flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
          <a className="btn btn--primary" href="https://cal.com/neutralstudio/30min" target="_blank" rel="noreferrer">
            Book a call <span className="arrow">→</span>
          </a>
          <a className="btn btn--ghost" href="mailto:arnaupinyolwork@gmail.com?subject=Neutral%20Studio%20-%20Question"
            style={{ background: 'rgba(10,10,11,0.5)', backdropFilter: 'blur(8px)' }}>
            Email us
          </a>
        </motion.div>
      </div>

      {!isSmall && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          style={{
            position: 'absolute', left: '50%', bottom: 28, transform: 'translateX(-50%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
            color: 'var(--ink-3)', fontSize: 10, fontFamily: 'var(--mono)', letterSpacing: '0.16em',
            zIndex: 2,
          }}>
          <span>SCROLL</span>
          <div style={{ width: 1, height: 30, background: 'linear-gradient(180deg, var(--ink-3), transparent)' }} />
        </motion.div>
      )}
    </section>
  )
}

function MobileDecor() {
  return (
    <>
      <div style={{
        position: 'absolute', top: '15%', right: '-30%', width: 360, height: 360, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(216,255,62,0.18) 0%, transparent 70%)',
        filter: 'blur(20px)', zIndex: 0, pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', left: '-30%', width: 320, height: 320, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,91,41,0.12) 0%, transparent 70%)',
        filter: 'blur(20px)', zIndex: 0, pointerEvents: 'none',
      }} />
    </>
  )
}
