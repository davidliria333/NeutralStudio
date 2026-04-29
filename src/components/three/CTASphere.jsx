import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import { useRef } from 'react'

function Blob() {
  const ref = useRef()
  useFrame((s) => {
    if (!ref.current) return
    ref.current.rotation.x = s.clock.elapsedTime * 0.2
    ref.current.rotation.y = s.clock.elapsedTime * 0.15
  })
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={0.8}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[1.4, 32]} />
        <MeshDistortMaterial
          color="#d8ff3e"
          distort={0.45}
          speed={1.6}
          roughness={0.15}
          metalness={0.2}
          emissive="#d8ff3e"
          emissiveIntensity={0.15}
        />
      </mesh>
    </Float>
  )
}

export default function CTASphere() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 45 }}
      style={{ position: 'absolute', inset: 0 }}
      dpr={[1, 2]}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 3, 3]} intensity={1.2} />
      <pointLight position={[-3, 2, 2]} intensity={0.6} color="#ff5b29" />
      <Blob />
    </Canvas>
  )
}
