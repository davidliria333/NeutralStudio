import { useEffect, useRef, useState } from 'react'
import { UXUI_SCENES } from '../data/portfolio.js'
import './HomeScrollcraft.css'

const CALENDAR_URL = 'https://cal.com/neutralstudio/30min?overlayCalendar=true'

const chapters = [
  ['opening', 'Position'], ['fragmentation', 'The problem'], ['system', 'One system'],
  ['portfolio', 'Selected UX/UI'], ['philosophy', 'The principle'], ['personality', 'Personality'],
  ['offer', 'Working together'], ['contact', 'Start a conversation'],
]

const portfolioGroups = [
  { label: 'Play meets utility', note: 'Rewards, wallets and interfaces with enough character to earn attention.', images: [UXUI_SCENES[0].images[0]], tone: 'mint' },
  { label: 'Everyday decisions', note: 'Food and nutrition flows made direct, legible and easy to act on.', images: [UXUI_SCENES[1].images[0], UXUI_SCENES[1].images[1]], tone: 'paper' },
  { label: 'Money, without the fog', note: 'A calmer interface language for accounts, movement and control.', images: [UXUI_SCENES[2].images[0]], tone: 'blue' },
  { label: 'Different products. Different voices.', note: 'Education, connected homes and health each get their own visual logic.', images: [UXUI_SCENES[3].images[0], UXUI_SCENES[3].images[1], UXUI_SCENES[4].images[0]], tone: 'signal' },
]

const personalities = [
  { id: 'structure', name: 'Structure', image: '/generated/neutral/personality-structure.jpg', mobileImage: '/generated/neutral/personality-structure-mobile.jpg', width: 1536, line: 'The invisible rules.', detail: 'Grid, hierarchy, proportion and relationships before style enters the room.' },
  { id: 'human', name: 'Human', image: '/generated/neutral/personality-human.jpg', mobileImage: '/generated/neutral/personality-human-mobile.jpg', width: 1537, line: 'Precision with fingerprints.', detail: 'The system loosens, keeps its logic and starts to sound like somebody real.' },
  { id: 'play', name: 'Play', image: '/generated/neutral/personality-play.jpg', mobileImage: '/generated/neutral/personality-play-mobile.jpg', width: 1448, line: 'Rules that know when to bend.', detail: 'Scale, colour and rhythm move together without losing the underlying order.' },
  { id: 'edge', name: 'Edge', image: '/generated/neutral/personality-edge.jpg', mobileImage: '/generated/neutral/personality-edge-mobile.jpg', width: 1536, line: 'A sharper point of view.', detail: 'The same structure becomes restrained, tense and difficult to ignore.' },
]

function FolioNav({ active }) {
  return (
    <aside className="ns2-folio" aria-label="Page chapters">
      <a className="ns2-folio-brand" href="#opening" aria-label="Neutral Studio home">
        <img src="/brand-logo.svg" alt="Neutral" width="113" height="24" /><span>Studio</span>
      </a>
      <nav>{chapters.map(([id, label], index) => (
        <a href={`#${id}`} key={id} className={active === id ? 'is-active' : ''}>
          <span>{String(index + 1).padStart(2, '0')}</span><b>{label}</b>
        </a>
      ))}</nav>
      <a className="ns2-folio-cta" href={CALENDAR_URL} target="_blank" rel="noreferrer">Tell us your idea</a>
    </aside>
  )
}

function RegistrationMarks() {
  return <div className="ns2-registration" aria-hidden="true"><i /><i /><i /><i /></div>
}

export default function Home() {
  const rootRef = useRef(null)
  const personalityRef = useRef(null)
  const [activeChapter, setActiveChapter] = useState('opening')
  const [personality, setPersonality] = useState(0)
  const [manualPersonality, setManualPersonality] = useState(false)

  useEffect(() => {
    const root = rootRef.current
    if (!root || root.dataset.scMounted || !window.ScrollCraft) return
    window.ScrollCraft.mount(root)
    root.dataset.scMounted = 'true'
  }, [])

  useEffect(() => {
    const sections = chapters.map(([id]) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActiveChapter(visible.target.id)
    }, { rootMargin: '-34% 0px -50% 0px', threshold: [0, 0.2, 0.5] })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    let frame = 0
    const update = () => {
      const stage = personalityRef.current
      if (stage) {
        const act = stage.closest('[data-sc-act]')
        const progress = Number.parseFloat(getComputedStyle(act).getPropertyValue('--sc-p')) || 0
        const next = Math.min(personalities.length - 1, Math.floor(progress * personalities.length))
        if (!manualPersonality) setPersonality((current) => current === next ? current : next)
        stage.dataset.scVerifyState = `${next}:${Math.round(progress * 20)}`
      }
      const fragmentStage = rootRef.current?.querySelector('.ns2-fragment-stage')
      if (fragmentStage) {
        const act = fragmentStage.closest('[data-sc-act]')
        const progress = Number.parseFloat(getComputedStyle(act).getPropertyValue('--sc-p')) || 0
        fragmentStage.dataset.scVerifyState = String(Math.round(progress * 20))
      }
    }
    const schedule = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }
    schedule()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [manualPersonality])

  const currentPersonality = personalities[personality]

  return (
    <div className="ns2" ref={rootRef}>
      <FolioNav active={activeChapter} />
      <span className="ns2-progress" data-sc-progress aria-hidden="true" />

      <section className="ns2-title" id="opening" aria-labelledby="home-title" data-sc-act="flow">
        <RegistrationMarks />
        <div className="ns2-title-meta"><span>Independent design studio</span><span>Barcelona · Working worldwide</span></div>
        <h1 id="home-title">Neutral doesn’t mean <em>everything should look the same.</em></h1>
        <p>We build the system. Your company gets the personality.</p>
        <a href={CALENDAR_URL} target="_blank" rel="noreferrer">Tell us your idea <span aria-hidden="true">↗</span></a>
      </section>

      <section className="ns2-fragment" id="fragmentation" data-sc-act="pin" data-sc-span="1.75" aria-labelledby="fragment-title">
        <div className="ns2-fragment-stage" data-sc-stage data-sc-verify-state="0">
          <RegistrationMarks />
          <div className="ns2-fragment-copy"><p>One company.</p><h2 id="fragment-title">Five visual languages.</h2></div>
          <div className="ns2-fragment-pieces" aria-hidden="true">
            <span className="piece-a">A logo designer.</span><span className="piece-b">A deck designer.</span>
            <span className="piece-c">A web studio.</span><span className="piece-d">A product freelancer.</span>
            <span className="piece-e">Someone for everything else.</span>
          </div>
          <p className="ns2-fragment-result">The founder becomes the design system.</p>
        </div>
      </section>

      <section className="ns2-system" id="system" data-sc-act="flow" aria-labelledby="system-title">
        <div className="ns2-system-visual" data-sc-in data-sc-reveal="right">
          <img src="/generated/neutral/personality-structure.jpg" srcSet="/generated/neutral/personality-structure-mobile.jpg 900w, /generated/neutral/personality-structure.jpg 1536w" sizes="(max-width: 900px) 100vw, 45vw" alt="Registration sheets, rulers and calibration marks arranged on a studio table." width="1536" height="1024" loading="lazy" />
        </div>
        <div className="ns2-system-copy" data-sc-in data-sc-stagger="55">
          <p>Neutral enters here.</p><h2 id="system-title">One idea.<br />One system.<br />Every expression connected.</h2>
          <ol>
            <li><span>Identity</span><b>sets the language</b></li><li><span>Pitch</span><b>makes the case</b></li>
            <li><span>Product</span><b>keeps the promise</b></li><li><span>Web</span><b>opens the door</b></li>
            <li><span>Launch</span><b>moves as one</b></li>
          </ol>
        </div>
      </section>

      <section className="ns2-work" id="portfolio" data-sc-act="pan" data-sc-span="3.2" aria-labelledby="work-title">
        <div className="ns2-work-stage" data-sc-stage>
          <div className="ns2-work-rail" data-sc-pan="0.04">
            <header className="ns2-work-intro"><p>Selected UX/UI</p><h2 id="work-title">The system changes.<br />The decisions hold.</h2><span>Product design across different needs, tones and levels of complexity.</span></header>
            {portfolioGroups.map((group, index) => (
              <article className={`ns2-work-card ns2-work-card--${group.tone}`} key={group.label}>
                <div className={`ns2-work-images ns2-work-images--${group.images.length}`}>{group.images.map((image) => (
                  <img key={image.src} src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" />
                ))}</div>
                <footer><span>{String(index + 1).padStart(2, '0')} / UXUI</span><h3>{group.label}</h3><p>{group.note}</p></footer>
              </article>
            ))}
            <aside className="ns2-work-outro"><strong>No house style.</strong><p>Just a better system for finding the right one.</p></aside>
          </div>
        </div>
      </section>

      <section className="ns2-philosophy" id="philosophy" data-sc-act="flow" aria-labelledby="philosophy-title">
        <RegistrationMarks /><p className="ns2-philosophy-side">A quiet chapter before the page asks you to touch it.</p>
        <div data-sc-in><h2 id="philosophy-title">Neutral is not an aesthetic.</h2><p>It is the invisible logic that lets a company become recognisable without becoming predictable.</p></div>
        <img data-sc-parallax="0.55" src="/generated/neutral/personality-human.jpg" srcSet="/generated/neutral/personality-human-mobile.jpg 900w, /generated/neutral/personality-human.jpg 1537w" sizes="(max-width: 900px) 100vw, 58vw" alt="A hand arranging a tactile collage of paper shapes on a dark worktable." width="1537" height="1023" loading="lazy" />
      </section>

      <section className={`ns2-personality is-${currentPersonality.id}`} id="personality" data-sc-act="pin" data-sc-span="3.4" aria-labelledby="personality-title">
        <div className="ns2-personality-stage" data-sc-stage data-sc-verify-state="0" ref={personalityRef}>
          <div className="ns2-personality-head"><p>Calibration tool</p><h2 id="personality-title">Personality</h2><span>Same system. Different point of view.</span></div>
          <div className="ns2-personality-canvas">
            <div className="ns2-personality-frame"><img src={currentPersonality.image} srcSet={`${currentPersonality.mobileImage} 900w, ${currentPersonality.image} ${currentPersonality.width}w`} sizes="(max-width: 900px) 100vw, 65vw" alt="" width={currentPersonality.width} height="1024" loading="lazy" /><div className="ns2-personality-guides" aria-hidden="true"><i /><i /><i /><i /></div></div>
            <div className="ns2-personality-copy"><span>{currentPersonality.name}</span><strong>{currentPersonality.line}</strong><p>{currentPersonality.detail}</p></div>
          </div>
          <div className="ns2-personality-control">
            <label htmlFor="personality-control">Move the personality</label>
            <input id="personality-control" type="range" min="0" max={personalities.length - 1} step="1" value={personality}
              onPointerDown={() => setManualPersonality(true)} onKeyDown={() => setManualPersonality(true)}
              onChange={(event) => setPersonality(Number(event.target.value))} aria-valuetext={currentPersonality.name} />
            <div aria-hidden="true">{personalities.map((item) => <span key={item.id}>{item.name}</span>)}</div>
          </div>
        </div>
      </section>

      <section className="ns2-offer" id="offer" data-sc-act="flow" aria-labelledby="offer-title">
        <aside className="ns2-proof" aria-label="Portfolio proof"><span>Proof, not promises</span><p>Seven supplied UX/UI studies. Seven different product problems. The work above is the evidence.</p></aside>
        <div className="ns2-offer-lead" data-sc-in><p>For founders building, launching or changing something that matters.</p><h2 id="offer-title">One design partner.<br />The whole picture in view.</h2></div>
        <div className="ns2-offer-grid" data-sc-in data-sc-stagger="60">
          <article><span>01</span><h3>Find the idea</h3><p>We frame the real problem and the position worth building around.</p></article>
          <article><span>02</span><h3>Build the system</h3><p>Identity, pitch, product and web evolve from the same set of decisions.</p></article>
          <article><span>03</span><h3>Make it usable</h3><p>You leave with a system your team can apply, extend and explain.</p></article>
        </div>
      </section>

      <section className="ns2-close" id="contact" data-sc-act="flow" aria-labelledby="close-title">
        <div className="ns2-close-collage" aria-hidden="true">{personalities.map((item) => <img src={item.image} srcSet={`${item.mobileImage} 900w, ${item.image} ${item.width}w`} sizes="(max-width: 900px) 50vw, 25vw" alt="" key={item.id} loading="lazy" />)}</div>
        <div className="ns2-close-copy" data-sc-in><p>Colophon / Neutral Studio / Barcelona</p><h2 id="close-title">What are you building?</h2><a href={CALENDAR_URL} target="_blank" rel="noreferrer">Tell us your idea <span aria-hidden="true">↗</span></a></div>
        <footer><span>Independent design studio</span><span>Strategy · Identity · Product · Web</span><span>© 2026</span></footer>
      </section>
    </div>
  )
}
