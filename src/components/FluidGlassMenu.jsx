import { useMemo } from 'react'

export default function FluidGlassMenu({ items }) {
  const templateColumns = useMemo(() => `repeat(${items.length}, max-content)`, [items.length])

  return (
    <div
      className="fluid-glass-menu"
      style={{
        position: 'relative',
        minWidth: 560,
        minHeight: 58,
        display: 'grid',
        placeItems: 'center',
        padding: 4,
        borderRadius: 999,
        border: '1px solid rgba(255,255,255,0.1)',
        background:
          'linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 100%)',
        boxShadow:
          'inset 0 1px 0 rgba(255,255,255,0.12), 0 18px 40px -28px rgba(0,0,0,0.68)',
        backdropFilter: 'blur(22px) saturate(145%)',
        WebkitBackdropFilter: 'blur(22px) saturate(145%)',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 999,
          overflow: 'hidden',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 1,
            borderRadius: 999,
            background:
              'radial-gradient(circle at 18% 0%, rgba(255,255,255,0.22), transparent 28%), radial-gradient(circle at 82% 100%, rgba(106,140,255,0.14), transparent 24%)',
          }}
        />
      </div>

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'grid',
          gridTemplateColumns: templateColumns,
          gap: 6,
          alignItems: 'center',
          padding: '0 8px',
        }}
      >
        {items.map(item => (
          <a
            key={item.href}
            href={item.href}
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
          </a>
        ))}
      </div>
    </div>
  )
}
