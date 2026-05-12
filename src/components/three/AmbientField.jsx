import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef, useEffect, useState } from 'react'

function ParticleCloud({ count = 220, color = '#f5f5f4' }) {
  const ref = useRef()
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 12
      arr[i * 3 + 1] = (Math.random() - 0.5) * 8
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6
    }
    return arr
  }, [count])

  useFrame((s) => {
    if (!ref.current) return
    ref.current.rotation.y = s.clock.elapsedTime * 0.02
    ref.current.rotation.x = Math.sin(s.clock.elapsedTime * 0.05) * 0.1
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={count} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.012} color={color} transparent opacity={0.5} sizeAttenuation />
    </points>
  )
}

export default function AmbientField({ density = 220 }) {
  // Mount only when near-viewport, unmount when far away; respect reduced-motion + coarse pointers
  const wrapRef = useRef(null)
  const [active, setActive] = useState(false)
  const [allowed, setAllowed] = useState(true)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const small = window.matchMedia('(max-width: 760px)').matches
    if (reduced || small) { setAllowed(false); return }

    const el = wrapRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { rootMargin: '120px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={wrapRef} style={{ position: 'absolute', inset: 0 }}>
      {allowed && active && (
        <Canvas
          camera={{ position: [0, 0, 4], fov: 50 }}
          style={{ position: 'absolute', inset: 0 }}
          dpr={[1, 1.5]}
          gl={{ alpha: true, antialias: false, powerPreference: 'low-power' }}
          frameloop="always"
        >
          <ParticleCloud count={density} />
        </Canvas>
      )}
    </div>
  )
}
