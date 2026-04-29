import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'

const ACCENT = '#d8ff3e'
const SHEEN = '#f6ffd0'
const SHADOW = '#6b7c23'

function TorusMesh() {
  const groupRef = useRef(null)
  const torusRef = useRef(null)
  const shellRef = useRef(null)
  const highlightRef = useRef(null)
  const glowCoreRef = useRef(null)
  const glowHaloRef = useRef(null)

  useFrame((state) => {
    if (!groupRef.current || !torusRef.current || !shellRef.current || !highlightRef.current || !glowCoreRef.current || !glowHaloRef.current) return

    const t = state.clock.elapsedTime
    const targetX = state.pointer.y * 0.28
    const targetY = state.pointer.x * 0.42

    groupRef.current.position.x += ((state.pointer.x * 0.22) - groupRef.current.position.x) * 0.04
    groupRef.current.position.y += ((state.pointer.y * 0.16) + 0.15 - groupRef.current.position.y) * 0.04

    torusRef.current.rotation.x += (targetX - torusRef.current.rotation.x) * 0.08
    torusRef.current.rotation.y += (targetY + t * 0.1 - torusRef.current.rotation.y) * 0.08
    torusRef.current.rotation.z = Math.sin(t * 0.42) * 0.08

    shellRef.current.rotation.x = torusRef.current.rotation.x
    shellRef.current.rotation.y = torusRef.current.rotation.y
    shellRef.current.rotation.z = torusRef.current.rotation.z
    highlightRef.current.rotation.x = torusRef.current.rotation.x + 0.08
    highlightRef.current.rotation.y = torusRef.current.rotation.y - 0.14
    highlightRef.current.rotation.z = torusRef.current.rotation.z

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
    <group ref={groupRef} position={[0, 0.15, 0]}>
      <mesh ref={glowHaloRef}>
        <torusGeometry args={[1.78, 0.2, 18, 72]} />
        <meshBasicMaterial color={ACCENT} transparent opacity={0.08} depthWrite={false} />
      </mesh>
      <mesh ref={glowCoreRef}>
        <torusGeometry args={[1.75, 0.19, 22, 96]} />
        <meshBasicMaterial color={ACCENT} transparent opacity={0.16} depthWrite={false} />
      </mesh>
      <mesh ref={shellRef} scale={1.015}>
        <torusGeometry args={[1.72, 0.155, 20, 96]} />
        <meshPhysicalMaterial
          color={SHADOW}
          roughness={0.56}
          metalness={0.02}
          clearcoat={0.12}
          clearcoatRoughness={0.4}
          reflectivity={0.18}
          side={1}
        />
      </mesh>
      <mesh ref={torusRef}>
        <torusGeometry args={[1.72, 0.15, 20, 96]} />
        <meshPhysicalMaterial
          color={ACCENT}
          emissive={ACCENT}
          emissiveIntensity={0.18}
          roughness={0.22}
          metalness={0.12}
          clearcoat={0.85}
          clearcoatRoughness={0.16}
          reflectivity={0.72}
          sheen={0.18}
          sheenColor={SHEEN}
        />
      </mesh>
      <mesh ref={highlightRef} scale={[1.005, 1.005, 1.005]}>
        <torusGeometry args={[1.72, 0.145, 16, 96]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.07} depthWrite={false} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.7, -0.3]} scale={[1.8, 1, 1]}>
        <circleGeometry args={[1.45, 48]} />
        <meshBasicMaterial color={ACCENT} transparent opacity={0.05} depthWrite={false} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.72, -0.32]} scale={[2.15, 1.1, 1]}>
        <circleGeometry args={[1.45, 48]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.02} depthWrite={false} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.84, -0.4]} scale={[1.4, 0.75, 1]}>
        <ringGeometry args={[0.72, 1.12, 48]} />
        <meshBasicMaterial color="#000000" transparent opacity={0.1} depthWrite={false} />
      </mesh>
      <mesh position={[0, 0, -1.8]}>
        <planeGeometry args={[8, 8]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>
      <mesh position={[0, 0.15, -0.45]}>
        <torusGeometry args={[1.48, 0.04, 12, 72]} />
        <meshBasicMaterial
          color={SHEEN}
          transparent
          opacity={0.045}
          depthWrite={false}
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
      <ambientLight intensity={0.4} />
      <hemisphereLight intensity={0.6} groundColor="#060607" color="#f7f5e8" />
      <directionalLight position={[2.5, 2.8, 3.2]} intensity={1.35} color="#fff7dd" />
      <directionalLight position={[-3.2, -1.4, 1.8]} intensity={0.26} color="#6a8cff" />
      <pointLight position={[0, 1.4, 1.5]} intensity={0.95} color={ACCENT} />
      <pointLight position={[1.8, 0.2, 2.4]} intensity={0.42} color="#ffffff" />
      <TorusMesh />
    </Canvas>
  )
}
