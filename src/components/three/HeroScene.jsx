import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { Float, MeshTransmissionMaterial, Environment, Text, RoundedBox } from '@react-three/drei'
import { Suspense, useMemo, useRef } from 'react'
import * as THREE from 'three'

const CARDS = Array.from({ length: 14 }, (_, i) => i + 1)

function PortfolioCard({ index, total }) {
  const ref = useRef()
  const angle = (index / total) * Math.PI * 2
  const radius = 2.6
  const baseX = Math.cos(angle) * radius
  const baseZ = Math.sin(angle) * radius
  const baseY = (Math.sin(index * 1.1) * 0.6)
  const hue = (index / total)

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime
    ref.current.rotation.y = t * 0.08 + index
    ref.current.position.y = baseY + Math.sin(t * 0.6 + index) * 0.08
  })

  const color = useMemo(() => new THREE.Color().setHSL(hue * 0.12 + 0.05, 0.0, 0.94), [hue])

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
      <group position={[baseX, baseY, baseZ]} rotation={[0, -angle + Math.PI / 2, 0]}>
        <RoundedBox ref={ref} args={[0.9, 1.2, 0.04]} radius={0.06} smoothness={4}>
          <meshStandardMaterial color={color} roughness={0.3} metalness={0.1} />
        </RoundedBox>
      </group>
    </Float>
  )
}

function CenterMark() {
  const ref = useRef()
  useFrame((s) => {
    if (!ref.current) return
    ref.current.rotation.y = s.clock.elapsedTime * 0.18
    ref.current.rotation.x = Math.sin(s.clock.elapsedTime * 0.3) * 0.18
  })
  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={ref}>
        <torusGeometry args={[0.7, 0.22, 64, 128]} />
        <MeshTransmissionMaterial
          backside
          thickness={0.6}
          roughness={0.1}
          chromaticAberration={0.04}
          anisotropy={0.3}
          distortion={0.2}
          distortionScale={0.4}
          temporalDistortion={0.1}
          ior={1.4}
          color="#ffffff"
        />
      </mesh>
    </Float>
  )
}

function SignalSphere() {
  const ref = useRef()
  useFrame((s) => {
    if (!ref.current) return
    const t = s.clock.elapsedTime
    ref.current.position.x = Math.sin(t * 0.4) * 1.8
    ref.current.position.z = Math.cos(t * 0.4) * 1.8 - 1
    ref.current.position.y = Math.sin(t * 0.7) * 0.4 + 0.5
  })
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.18, 32, 32]} />
      <meshStandardMaterial
        color="#d8ff3e" emissive="#d8ff3e" emissiveIntensity={1.5} toneMapped={false}
      />
    </mesh>
  )
}

function CameraRig() {
  useFrame((state) => {
    const x = (state.pointer.x * 0.6)
    const y = (state.pointer.y * 0.4)
    state.camera.position.x += (x - state.camera.position.x) * 0.05
    state.camera.position.y += (y - state.camera.position.y) * 0.05
    state.camera.lookAt(0, 0, 0)
  })
  return null
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.2], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
      style={{ position: 'absolute', inset: 0 }}
    >
      <color attach="background" args={['#0a0a0b']} />
      <fog attach="fog" args={['#0a0a0b', 4, 11]} />
      <ambientLight intensity={0.25} />
      <directionalLight position={[3, 4, 2]} intensity={1.0} color="#fffaee" />
      <directionalLight position={[-4, -2, -2]} intensity={0.4} color="#6a8cff" />
      <pointLight position={[0, 0, 2]} intensity={0.8} color="#d8ff3e" distance={4} />
      <Suspense fallback={null}>
        <Environment preset="studio" background={false} />
        <CenterMark />
        <SignalSphere />
        {CARDS.map((c, i) => (
          <PortfolioCard key={c} index={i} total={CARDS.length} />
        ))}
      </Suspense>
      <CameraRig />
    </Canvas>
  )
}
