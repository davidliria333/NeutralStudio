import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Top progress bar on every route change. 1px high, accent-colored.
 * Vercel/Linear pattern. Active prop forces visible state for Suspense fallback.
 */
export default function RouteProgress({ active = false }) {
  const { pathname } = useLocation()
  const [show, setShow] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (active) {
      setShow(true)
      setProgress(70)
      return
    }
    setShow(true)
    setProgress(20)
    const t1 = setTimeout(() => setProgress(70), 80)
    const t2 = setTimeout(() => setProgress(95), 280)
    const t3 = setTimeout(() => {
      setProgress(100)
      setTimeout(() => { setShow(false); setProgress(0) }, 240)
    }, 480)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [pathname, active])

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, height: 1, zIndex: 100,
      pointerEvents: 'none',
    }}>
      <div style={{
        height: '100%',
        width: `${progress}%`,
        background: 'var(--acc)',
        boxShadow: '0 0 8px var(--acc)',
        transition: show ? 'width 320ms cubic-bezier(0.22,1,0.36,1), opacity 240ms' : 'opacity 240ms',
        opacity: show ? 1 : 0,
      }} />
    </div>
  )
}
