import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'

function TorusMesh() {
  const torusRef = useRef(null)
  const glowRef = useRef(null)

  useFrame((state) => {
    if (!torusRef.current || !glowRef.current) return

    const t = state.clock.elapsedTime
    const targetX = state.pointer.y * 0.35
    const targetY = state.pointer.x * 0.6

    torusRef.current.rotation.x += (targetX - torusRef.current.rotation.x) * 0.06
    torusRef.current.rotation.y += (targetY + t * 0.12 - torusRef.current.rotation.y) * 0.06
    torusRef.current.rotation.z = Math.sin(t * 0.45) * 0.12

    glowRef.current.rotation.x = torusRef.current.rotation.x * 0.7
    glowRef.current.rotation.y = torusRef.current.rotation.y * 0.7
    glowRef.current.scale.x = 1 + Math.sin(t * 0.8) * 0.03
    glowRef.current.scale.y = 1 + Math.cos(t * 0.8) * 0.03
  })

  return (
    <group position={[0, 0.15, 0]}>
      <mesh ref={glowRef} scale={1.08}>
        <torusGeometry args={[1.75, 0.18, 24, 120]} />
        <meshBasicMaterial color="#d8ff3e" transparent opacity={0.08} />
      </mesh>
      <mesh ref={torusRef}>
        <torusGeometry args={[1.72, 0.16, 28, 160]} />
        <meshStandardMaterial
          color="#f5f4ee"
          emissive="#6a8cff"
          emissiveIntensity={0.16}
          roughness={0.28}
          metalness={0.18}
        />
      </mesh>
    </group>
  )
}

export default function HeroTorus() {
  return (
    <Canvas
      dpr={[1, 1.25]}
      camera={{ position: [0, 0, 5.4], fov: 34 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ position: 'absolute', inset: 0 }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[2.5, 2.5, 3]} intensity={1.2} color="#fff8ea" />
      <pointLight position={[-2, -1, 2]} intensity={0.8} color="#6a8cff" />
      <pointLight position={[0, 1.2, 1.5]} intensity={0.45} color="#d8ff3e" />
      <TorusMesh />
    </Canvas>
  )
}
