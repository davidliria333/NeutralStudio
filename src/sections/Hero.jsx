import { lazy, Suspense, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Magnetic from '../components/Magnetic.jsx'

const Prism = lazy(() => import('../components/Prism.jsx'))

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

const SPRING = { type: 'spring', stiffness: 180, damping: 22 }

export default function Hero() {
  const isSmall = useIsSmall()

  return (
    <section style={{
      position: 'relative',
      minHeight: '100svh',
      paddingTop: 'clamp(110px, 14vh, 150px)',
      paddingBottom: 'clamp(48px, 8vh, 80px)',
      paddingInline: 0,
      overflow: 'hidden',
      background: 'radial-gradient(120% 90% at 75% 30%, #15151c 0%, #0a0a0b 65%)',
      display: 'flex', flexDirection: 'column', justifyContent: 'flex-start',
      width: '100%',
    }}>
      {!isSmall && <DesktopDecor />}
      {isSmall && <MobileDecor />}

      {/* Anchor-left vignette so type reads */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: isSmall
          ? 'none'
          : 'linear-gradient(90deg, rgba(10,10,11,0.86) 0%, rgba(10,10,11,0.55) 38%, rgba(10,10,11,0) 62%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: 'linear-gradient(180deg, rgba(10,10,11,0.55) 0%, transparent 14%, transparent 82%, rgba(10,10,11,0.92) 100%)',
      }} />

      <div className="hero-grid" style={{
        position: 'relative', zIndex: 2,
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: 24,
        marginTop: 'clamp(28px, 6vh, 64px)',
        width: '100%', maxWidth: 'var(--maxw)', marginInline: 'auto',
        paddingInline: 'var(--gut)',
      }}>
        {/* TOP-LEFT META */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: 0.05 }}
          style={{
            gridColumn: '1 / span 5',
            display: 'flex', flexDirection: 'column', gap: 8,
            fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-3)',
            letterSpacing: '0.12em', textTransform: 'uppercase',
          }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <span style={{
              width: 6, height: 6, borderRadius: 999, background: 'var(--acc)',
              boxShadow: '0 0 12px var(--acc)',
              animation: 'pulse-dot 3.6s ease-in-out infinite',
            }} />
            Available now · Launch in 1 week
          </span>
          <span style={{ color: 'var(--ink-4)' }}>BCN · 2026</span>
        </motion.div>

        {/* HEADLINE — asymmetric, mixed scale */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            gridColumn: '1 / span 9',
            margin: 'clamp(20px, 5vh, 56px) 0 0',
            fontFamily: 'var(--sans)',
            fontWeight: 500,
            color: 'var(--ink)',
            letterSpacing: '-0.052em',
            lineHeight: 0.92,
            fontSize: 'clamp(44px, 9vw, 132px)',
            display: 'flex', flexDirection: 'column', gap: '0.04em',
          }}>
          <Word delay={0.15} style={{ fontSize: '0.62em', alignSelf: 'flex-start', color: 'var(--ink-2)', fontWeight: 400 }}>
            Make
          </Word>
          <Word delay={0.25} style={{ alignSelf: 'flex-start' }}>
            your startup look
          </Word>
          <Word delay={0.4} style={{
            alignSelf: 'flex-start',
            fontFamily: 'var(--serif)',
            fontStyle: 'italic',
            fontWeight: 400,
            color: 'var(--acc)',
            fontSize: '0.92em',
            marginLeft: '0.6em',
            letterSpacing: '-0.03em',
            textShadow: '0 0 30px rgba(216,255,62,0.25)',
          }}>
            inevitable.
          </Word>
        </motion.h1>

        {/* SUB + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: 0.55 }}
          style={{
            gridColumn: '1 / span 5',
            marginTop: 'clamp(28px, 6vh, 48px)',
            display: 'flex', flexDirection: 'column', gap: 24,
          }}>
          <p style={{
            margin: 0,
            color: 'var(--ink-2)',
            fontSize: 'clamp(15px, 1.4vw, 17px)',
            lineHeight: 1.55,
            maxWidth: '40ch',
            textShadow: '0 1px 16px rgba(10,10,11,0.55)',
          }}>
            The #1 design studio for early-stage startups. Identity, pitch,
            and web, built as one system, by senior designers and exited founders.
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <Magnetic radius={90} strength={0.34}>
              <a className="btn btn--primary" data-magnet href="https://cal.com/neutralstudio/30min?overlayCalendar=true" target="_blank" rel="noreferrer">
                Book a call <span className="arrow">→</span>
              </a>
            </Magnetic>
            <Magnetic radius={70} strength={0.22}>
              <a className="btn btn--ghost" data-magnet href="mailto:arnaupinyolwork@gmail.com?subject=Neutral%20Studio%20-%20Question"
                style={{ background: 'rgba(10,10,11,0.5)', backdropFilter: 'blur(8px)' }}>
                Email us
              </a>
            </Magnetic>
          </div>
        </motion.div>

        {/* BOTTOM-RIGHT spec block — recipe-style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          style={{
            gridColumn: '10 / span 3',
            alignSelf: 'end',
            marginTop: 'clamp(28px, 6vh, 48px)',
            paddingTop: 16,
            borderTop: '1px solid var(--line)',
            fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--ink-3)',
            letterSpacing: '0.14em', textTransform: 'uppercase',
            display: 'flex', flexDirection: 'column', gap: 6,
          }} className="hero-spec">
          <span>Output / Identity · Pitch · Web</span>
          <span>Lead time / 1–4 weeks</span>
          <span>From / $3,000</span>
        </motion.div>
      </div>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { box-shadow: 0 0 8px var(--acc); }
          50% { box-shadow: 0 0 18px var(--acc); }
        }
        @media (max-width: 880px) {
          .hero-grid { gap: 16px !important; }
          .hero-grid > * { grid-column: 1 / -1 !important; }
          .hero-spec { display: none !important; }
        }
      `}</style>
    </section>
  )
}

function Word({ children, style, delay = 0 }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: '0.6em' }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 160, damping: 22, delay }}
      style={{ display: 'inline-block', ...style }}
    >
      {children}
    </motion.span>
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

function DesktopDecor() {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      {/* Prism — bleed to the right edge */}
      <div style={{
        position: 'absolute',
        inset: '-6% -8% -10% 28%',
        zIndex: 0,
        opacity: 0.95,
      }}>
        <Suspense fallback={null}>
          <Prism
            animationType="rotate"
            timeScale={0.42}
            height={3.2}
            baseWidth={5.2}
            scale={3.0}
            hueShift={0.28}
            colorFrequency={0.82}
            noise={0.18}
            glow={1.3}
            bloom={1.1}
            offset={{ x: 0, y: -8 }}
            suspendWhenOffscreen
          />
        </Suspense>
      </div>
      {/* Halo — anchored right, off-center */}
      <div style={{
        position: 'absolute',
        top: '6%',
        right: '-8%',
        width: 'min(72vw, 980px)',
        height: 'min(72vw, 980px)',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(216,255,62,0.10) 0%, rgba(106,140,255,0.07) 38%, transparent 70%)',
        filter: 'blur(26px)',
      }} />
      {/* Hairline rule — right side only */}
      <div style={{
        position: 'absolute',
        inset: '20% 6% auto 50%',
        height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.14), transparent)',
      }} />
    </div>
  )
}
