import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

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
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 50 }}
      style={{ position: 'absolute', inset: 0 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: false }}
    >
      <ParticleCloud count={density} />
    </Canvas>
  )
}
