import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'

const ACCENT = '#d8ff3e'

function TorusMesh() {
  const torusRef = useRef(null)
  const glowCoreRef = useRef(null)
  const glowHaloRef = useRef(null)

  useFrame((state) => {
    if (!torusRef.current || !glowCoreRef.current || !glowHaloRef.current) return

    const t = state.clock.elapsedTime
    const targetX = state.pointer.y * 0.28
    const targetY = state.pointer.x * 0.42

    torusRef.current.rotation.x += (targetX - torusRef.current.rotation.x) * 0.08
    torusRef.current.rotation.y += (targetY + t * 0.1 - torusRef.current.rotation.y) * 0.08
    torusRef.current.rotation.z = Math.sin(t * 0.42) * 0.08

    glowCoreRef.current.rotation.x = torusRef.current.rotation.x
    glowCoreRef.current.rotation.y = torusRef.current.rotation.y
    glowCoreRef.current.rotation.z = torusRef.current.rotation.z
    glowHaloRef.current.rotation.x = torusRef.current.rotation.x * 0.92
    glowHaloRef.current.rotation.y = torusRef.current.rotation.y * 0.92
    glowHaloRef.current.rotation.z = torusRef.current.rotation.z

    const pulse = 1 + Math.sin(t * 0.75) * 0.02
    glowCoreRef.current.scale.setScalar(pulse)
    glowHaloRef.current.scale.setScalar(1.12 + Math.cos(t * 0.75) * 0.025)
  })

  return (
    <group position={[0, 0.15, 0]}>
      <mesh ref={glowHaloRef}>
        <torusGeometry args={[1.78, 0.2, 18, 72]} />
        <meshBasicMaterial color={ACCENT} transparent opacity={0.08} depthWrite={false} />
      </mesh>
      <mesh ref={glowCoreRef}>
        <torusGeometry args={[1.75, 0.19, 22, 96]} />
        <meshBasicMaterial color={ACCENT} transparent opacity={0.18} depthWrite={false} />
      </mesh>
      <mesh ref={torusRef}>
        <torusGeometry args={[1.72, 0.15, 20, 96]} />
        <meshStandardMaterial
          color={ACCENT}
          emissive={ACCENT}
          emissiveIntensity={0.42}
          roughness={0.34}
          metalness={0.08}
        />
      </mesh>
    </group>
  )
}

export default function HeroTorus() {
  return (
    <Canvas
      dpr={[1, 1]}
      camera={{ position: [0, 0, 5.4], fov: 34 }}
      gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
      style={{ position: 'absolute', inset: 0 }}
    >
      <ambientLight intensity={0.65} />
      <directionalLight position={[2.5, 2.5, 3]} intensity={1.2} color="#fff8ea" />
      <pointLight position={[-2, -1, 2]} intensity={0.35} color="#6a8cff" />
      <pointLight position={[0, 1.2, 1.5]} intensity={0.8} color={ACCENT} />
      <TorusMesh />
    </Canvas>
  )
}
