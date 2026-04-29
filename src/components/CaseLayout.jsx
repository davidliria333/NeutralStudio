import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import DomeGallery from './DomeGallery.jsx'

export default function CaseLayout({ title, tags, hero, intro, sections, externalUrl, domeImages = [] }) {
  const galleryImages = domeImages.length
    ? domeImages
    : sections.flatMap(section => section.images.map(img => ({ src: img, alt: `${title} — ${section.title}` })))

  return (
    <>
      <section style={{ padding: '140px var(--gut) 60px' }}>
        <div className="container">
          <Link to="/" style={{ fontSize: 12, fontFamily: 'var(--mono)', color: 'var(--ink-3)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            ← Back to studio
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="h1"
            style={{ marginTop: 28, marginBottom: 24, fontSize: 'clamp(56px, 8vw, 120px)' }}>
            {title}
          </motion.h1>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32 }}>
            {tags.map(t => (
              <span key={t} style={{
                padding: '6px 14px', borderRadius: 999, border: '1px solid var(--line-2)',
                fontSize: 11, color: 'var(--ink-3)', fontFamily: 'var(--mono)', letterSpacing: '0.08em', textTransform: 'uppercase',
              }}>{t}</span>
            ))}
          </div>
        </div>

        {hero && (
          <div style={{ marginTop: 32, padding: '0 var(--gut)' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{
                maxWidth: 'var(--maxw)', margin: '0 auto', borderRadius: 'var(--r-l)',
                overflow: 'hidden', border: '1px solid var(--line)', aspectRatio: '16/9',
                background: 'var(--bg-1)',
              }}>
              <img src={hero} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>
          </div>
        )}
      </section>

      <section style={{ padding: '40px var(--gut) 80px' }}>
        <div className="container" style={{ maxWidth: 720 }}>
          <p className="lead" style={{ fontSize: 'clamp(19px, 1.6vw, 22px)', color: 'var(--ink-2)' }}>
            {intro}
          </p>
          <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a className="btn btn--primary" href="https://cal.com/neutralstudio/30min" target="_blank" rel="noreferrer">
              Book a call <span className="arrow">→</span>
            </a>
            {externalUrl && (
              <a className="btn btn--ghost" href={externalUrl} target="_blank" rel="noreferrer">Visit site →</a>
            )}
            <a className="btn btn--ghost" href="mailto:arnaupinyolwork@gmail.com">Email us</a>
          </div>
        </div>
      </section>

      {galleryImages.length > 0 && (
        <section className="section section--tight">
          <div className="container">
            <div className="eyebrow" style={{ marginBottom: 18 }}>Immersive gallery</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 18, flexWrap: 'wrap', marginBottom: 28 }}>
              <h2 className="h3" style={{ margin: 0, maxWidth: 12 }}>
                Explore the system in motion.
              </h2>
              <p style={{ margin: 0, maxWidth: 420, color: 'var(--ink-3)' }}>
                Drag to rotate the dome and open any frame for a closer look at the case study details.
              </p>
            </div>
            <div style={{
              height: 'min(78vh, 860px)',
              minHeight: 520,
              border: '1px solid var(--line)',
              borderRadius: 'var(--r-xl)',
              overflow: 'hidden',
              background:
                'radial-gradient(circle at 50% 28%, rgba(216,255,62,0.10), transparent 32%), linear-gradient(180deg, rgba(15,15,17,0.98) 0%, rgba(10,10,11,1) 100%)',
            }}>
              <DomeGallery
                images={galleryImages}
                fit={0.7}
                segments={22}
                grayscale={false}
                minRadius={420}
                padFactor={0.18}
                overlayBlurColor="#0a0a0b"
                openedImageWidth="320px"
                openedImageHeight="440px"
                imageBorderRadius="24px"
                openedImageBorderRadius="28px"
              />
            </div>
          </div>
        </section>
      )}

      {sections.map((s, i) => (
        <section key={i} className="section section--tight" style={{ background: i % 2 === 0 ? 'var(--bg-1)' : 'var(--bg)' }}>
          <div className="container">
            <div className="eyebrow" style={{ marginBottom: 18 }}>{String(i + 1).padStart(2, '0')} · {s.label}</div>
            <h2 className="h3" style={{ margin: '0 0 36px' }}>{s.title}</h2>
            <div style={{
              display: 'grid', gridTemplateColumns: s.cols === 1 ? '1fr' : `repeat(${s.cols || 2}, 1fr)`, gap: 18,
            }}>
              {s.images.map((img, j) => (
                <motion.div
                  key={j}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: j * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    borderRadius: 'var(--r-m)', overflow: 'hidden', border: '1px solid var(--line)',
                    background: 'var(--bg)', aspectRatio: s.aspect || '4/3',
                  }}>
                  <img src={img} alt="" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 640 }}>
          <h2 className="h2" style={{ margin: '0 0 24px' }}>
            Want a project like this? <span className="serif" style={{ color: 'var(--acc)' }}>Let's talk.</span>
          </h2>
          <a className="btn btn--primary" href="https://cal.com/neutralstudio/30min" target="_blank" rel="noreferrer">
            Book a call <span className="arrow">→</span>
          </a>
        </div>
      </section>
    </>
  )
}
