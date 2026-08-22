import { useMemo, useRef, useState } from 'react'

const ANCHORS = [
  [25, 312], [25, 40], [160, 312], [160, 40],
  [190, 312], [190, 105], [300, 40], [405, 105], [405, 312],
  [440, 312], [440, 40], [575, 40], [575, 312],
  [605, 40], [770, 40], [688, 312],
  [790, 40], [955, 40], [872, 312],
  [985, 40], [985, 312], [1135, 312],
  [1165, 105], [1238, 40], [1310, 105], [1238, 176], [1310, 247], [1238, 312], [1165, 247],
  [1340, 40], [1340, 312], [1495, 312],
  [1525, 40], [1685, 40], [1605, 312],
  [1715, 40], [1715, 312], [1875, 312], [1875, 40],
]

const HANDLES = [
  [190, 105, 238, 70], [405, 105, 357, 70],
  [605, 40, 652, 18], [770, 40, 723, 18],
  [790, 40, 837, 18], [955, 40, 908, 18],
  [1165, 105, 1193, 62], [1310, 105, 1282, 62],
  [1238, 176, 1290, 176], [1310, 247, 1282, 290],
  [1238, 312, 1193, 332], [1165, 247, 1193, 290],
  [1525, 40, 1572, 18], [1685, 40, 1638, 18],
]

function strength(point, cursor) {
  if (!cursor) return 0
  const distance = Math.hypot(point[0] - cursor.x, point[1] - cursor.y)
  if (distance <= 60) return 1
  if (distance >= 120) return 0
  return 1 - ((distance - 60) / 60)
}

export default function Hero() {
  const svgRef = useRef(null)
  const [cursor, setCursor] = useState(null)
  const anchorStrengths = useMemo(
    () => ANCHORS.map(point => strength(point, cursor)),
    [cursor],
  )

  const trackPointer = (event) => {
    const matrix = svgRef.current?.getScreenCTM()
    if (!matrix) return
    const point = new DOMPoint(event.clientX, event.clientY).matrixTransform(matrix.inverse())
    setCursor({ x: point.x, y: point.y })
  }

  return (
    <section className="vector-hero" aria-labelledby="hero-title">
      <h1 id="hero-title" className="sr-only">NeutralStudio</h1>

      <svg
        ref={svgRef}
        className="vector-hero__art"
        viewBox="-240 -257 2400 900"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="NeutralStudio"
        onPointerMove={trackPointer}
        onPointerLeave={() => setCursor(null)}
      >
        <text
          x="960"
          y="312"
          textAnchor="middle"
          textLength="1920"
          lengthAdjust="spacingAndGlyphs"
          className="vector-hero__word"
        >
          NeutralStudio
        </text>

        <g aria-hidden="true" pointerEvents="none">
          {HANDLES.map(([x1, y1, x2, y2], index) => {
            const opacity = Math.max(strength([x1, y1], cursor), strength([x2, y2], cursor))
            return (
              <g key={`handle-${index}`} opacity={opacity}>
                <line x1={x1} y1={y1} x2={x2} y2={y2} className="vector-hero__line" />
                <circle cx={x2} cy={y2} r="6" className="vector-hero__control" />
              </g>
            )
          })}

          {ANCHORS.map(([x, y], index) => (
            <rect
              key={`anchor-${index}`}
              x={x - 5}
              y={y - 5}
              width="10"
              height="10"
              className="vector-hero__anchor"
              opacity={anchorStrengths[index]}
            />
          ))}
        </g>
      </svg>

      <style>{`
        @font-face {
          font-family: 'Monument Grotesk Hero';
          src: url('https://www.otherkind.design/_next/static/media/MonumentGrotesk_Regular-s.p.13ayw4crpmuz7.ttf') format('truetype');
          font-style: normal;
          font-weight: 400;
          font-display: swap;
        }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        .vector-hero {
          position: relative;
          display: flex;
          width: 100%;
          min-height: 100svh;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #f7f7f7;
        }

        .vector-hero__art {
          display: block;
          width: 100%;
          height: auto;
          aspect-ratio: 8 / 3;
          max-width: none;
          flex: none;
          overflow: hidden;
          touch-action: pan-y;
          cursor: default;
        }

        .vector-hero__word {
          fill: #0f0e0c;
          font-family: 'Monument Grotesk Hero', Arial, sans-serif;
          font-size: 360px;
          font-weight: 400;
          letter-spacing: -8px;
        }

        .vector-hero__line {
          stroke: #2d9cdb;
          stroke-width: 2;
        }

        .vector-hero__control {
          fill: #2d9cdb;
          stroke: #fff;
          stroke-width: 1.5;
        }

        .vector-hero__anchor {
          fill: #fff;
          stroke: #0f0e0c;
          stroke-width: 1.5;
        }

        @media (max-width: 760px) {
          .vector-hero__art {
            width: 178%;
          }
        }

        @media (hover: none) {
          .vector-hero__line,
          .vector-hero__control,
          .vector-hero__anchor {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}

