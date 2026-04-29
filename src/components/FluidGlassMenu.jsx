import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { MeshTransmissionMaterial, RoundedBox } from '@react-three/drei'
import { easing } from 'maath'
import { useMemo, useRef } from 'react'

function GlassBar() {
  const ref = useRef(null)
  const { pointer, viewport, camera } = useThree()

  useFrame((state, delta) => {
    if (!ref.current) return
    const view = viewport.getCurrentViewport(camera, [0, 0, 0])
    const x = pointer.x * view.width * 0.08
    const y = pointer.y * view.height * 0.05
    easing.damp3(ref.current.position, [x, y, 0], 0.2, delta)
    easing.dampE(ref.current.rotation, [pointer.y * 0.08, pointer.x * -0.12, pointer.x * -0.04], 0.2, delta)
  })

  return (
    <group ref={ref}>
      <RoundedBox args={[8.8, 1.18, 0.24]} radius={0.38} smoothness={10}>
        <MeshTransmissionMaterial
          transmission={1}
          roughness={0.08}
          thickness={1.2}
          ior={1.14}
          chromaticAberration={0.08}
          anisotropy={0.08}
          backside
          samples={8}
          resolution={256}
          clearcoat={1}
          clearcoatRoughness={0.1}
          color="#dfe8ff"
          attenuationColor="#d8ff3e"
          attenuationDistance={1.6}
        />
      </RoundedBox>
      <RoundedBox args={[8.2, 0.92, 0.03]} radius={0.32} smoothness={8} position={[0, 0, 0.135]}>
        <meshBasicMaterial color="#ffffff" transparent opacity={0.08} />
      </RoundedBox>
    </group>
  )
}

export default function FluidGlassMenu({ items, onNavClick }) {
  const templateColumns = useMemo(() => `repeat(${items.length}, max-content)`, [items.length])

  return (
    <div
      className="fluid-glass-menu"
      style={{
        position: 'relative',
        minWidth: 560,
        height: 58,
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 999,
          overflow: 'hidden',
          boxShadow: '0 24px 60px -34px rgba(0,0,0,0.65)',
        }}
      >
        <Canvas camera={{ position: [0, 0, 8], fov: 20 }} dpr={[1, 1.5]} gl={{ alpha: true, antialias: true }}>
          <color attach="background" args={['#000000']} />
          <ambientLight intensity={0.8} />
          <directionalLight position={[2, 3, 4]} intensity={1.2} color="#ffffff" />
          <directionalLight position={[-3, -2, 3]} intensity={0.6} color="#6a8cff" />
          <GlassBar />
        </Canvas>
      </div>

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'grid',
          gridTemplateColumns: templateColumns,
          gap: 6,
          alignItems: 'center',
          padding: '0 12px',
        }}
      >
        {items.map(item => (
          <button
            key={item.href}
            type="button"
            onClick={() => onNavClick(item.href)}
            style={{
              border: 'none',
              background: 'transparent',
              color: 'rgba(245,245,244,0.84)',
              padding: '10px 14px',
              borderRadius: 999,
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: '-0.01em',
              transition: 'background .2s var(--ease), color .2s var(--ease), transform .2s var(--ease)',
              cursor: 'pointer',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
              e.currentTarget.style.color = 'var(--ink)'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = 'rgba(245,245,244,0.84)'
              e.currentTarget.style.transform = 'none'
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  )
}
