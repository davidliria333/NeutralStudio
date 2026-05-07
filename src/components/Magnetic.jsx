import { useEffect, useRef } from 'react'

/**
 * Magnetic cursor wrapper. Translates the wrapped element toward the cursor
 * within `radius` px, scaled by `strength`. Sets CSS custom props --mx/--my
 * on the child; pair with `.btn` (which already consumes them via translate3d).
 *
 * Respects pointer:coarse and prefers-reduced-motion.
 */
export default function Magnetic({
  children,
  radius = 90,
  strength = 0.32,
  className,
  style,
  as: Tag = 'span',
  ...rest
}) {
  const wrapRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(pointer: coarse)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const wrap = wrapRef.current
    if (!wrap) return
    const target = wrap.firstElementChild
    if (!target) return

    let raf = 0
    let curX = 0, curY = 0, tarX = 0, tarY = 0
    let active = false

    const setVars = (x, y) => {
      target.style.setProperty('--mx', `${x.toFixed(2)}px`)
      target.style.setProperty('--my', `${y.toFixed(2)}px`)
    }

    const tick = () => {
      curX += (tarX - curX) * 0.18
      curY += (tarY - curY) * 0.18
      setVars(curX, curY)
      if (active || Math.abs(curX - tarX) > 0.05 || Math.abs(curY - tarY) > 0.05) {
        raf = requestAnimationFrame(tick)
      } else {
        setVars(0, 0)
      }
    }

    const onMove = (e) => {
      const r = target.getBoundingClientRect()
      const cx = r.left + r.width / 2
      const cy = r.top + r.height / 2
      const dx = e.clientX - cx
      const dy = e.clientY - cy
      const dist = Math.hypot(dx, dy)
      if (dist < radius) {
        active = true
        const pull = (1 - dist / radius) * strength
        tarX = dx * pull
        tarY = dy * pull
      } else if (active) {
        active = false
        tarX = 0
        tarY = 0
      } else {
        return
      }
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(tick)
    }

    const onLeave = () => {
      active = false
      tarX = 0
      tarY = 0
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseleave', onLeave)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [radius, strength])

  return (
    <Tag
      ref={wrapRef}
      className={className}
      style={{ display: 'inline-flex', ...style }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
