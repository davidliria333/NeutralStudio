import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduced) return
    setEnabled(true)

    let mx = 0, my = 0, rx = 0, ry = 0
    let raf = 0
    let hovering = false

    const onMove = (e) => { mx = e.clientX; my = e.clientY }
    const onOver = (e) => {
      const t = e.target
      hovering = !!t.closest('a, button, [data-hover]')
      if (ring.current) ring.current.dataset.hover = hovering ? 'true' : 'false'
    }

    const tick = () => {
      rx += (mx - rx) * 0.18
      ry += (my - ry) * 0.18
      if (dot.current) dot.current.style.transform = `translate3d(${mx - 3}px, ${my - 3}px, 0)`
      if (ring.current) ring.current.style.transform = `translate3d(${rx - 18}px, ${ry - 18}px, 0)`
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    raf = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      cancelAnimationFrame(raf)
    }
  }, [])

  if (!enabled) return null
  return (
    <>
      <div ref={dot} style={{
        position: 'fixed', left: 0, top: 0, width: 6, height: 6, borderRadius: 999,
        background: 'var(--ink)', pointerEvents: 'none', zIndex: 9999, mixBlendMode: 'difference',
      }} />
      <div ref={ring} style={{
        position: 'fixed', left: 0, top: 0, width: 36, height: 36, borderRadius: 999,
        border: '1px solid var(--ink-3)', pointerEvents: 'none', zIndex: 9999,
        transition: 'width .25s var(--ease), height .25s var(--ease), border-color .25s var(--ease)',
        mixBlendMode: 'difference',
      }} />
      <style>{`
        @media (pointer: fine) { body { cursor: none; } }
      `}</style>
    </>
  )
}
