import { useEffect, useRef, useState } from 'react'
import './HomeScrollcraft.css'

const CALENDAR_URL = 'https://cal.com/neutralstudio/30min?overlayCalendar=true'

const chapters = [
  ['opening', 'Position'], ['portfolio', 'Selected UX/UI'], ['fragmentation', 'The problem'],
  ['system', 'Services'], ['pricing', 'Pricing'], ['philosophy', 'The principle'], ['personality', 'Personality'],
  ['offer', 'Working together'], ['contact', 'Start a conversation'],
]

const selectedFrames = [1, 2, 3, 4, 6, 7, 8, 9, 11, 12, 14, 15, 17, 18, 19]
const portfolioFrames = selectedFrames.map((number, index) => {
  const column = index % 5
  const row = Math.floor(index / 5)
  return {
    src: `/generated/neutral/uxui-frames/frame-${String(number).padStart(2, '0')}.png`,
    alt: `Selected mobile UX/UI screen ${index + 1} of ${selectedFrames.length}.`,
    x: 4 + column * 19,
    y: 3 + row * 33,
    width: index % 4 === 0 ? 16 : 14,
    mobileX: 3 + (index % 3) * 32,
    mobileY: 1 + Math.floor(index / 3) * 20,
    mobileWidth: index % 4 === 0 ? 29 : 27,
    motion: [((index * 5) % 7) - 3, ((index * 7) % 13) - 6, ((index * 5) % 9) - 4],
  }
})

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
  const workRef = useRef(null)
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
    let pointerX = 0
    let pointerY = 0
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
      const work = workRef.current
      if (work) {
        const rect = work.getBoundingClientRect()
        const progress = Math.min(1, Math.max(0, (window.innerHeight - rect.top) / (rect.height + window.innerHeight)))
        const alignment = Math.max(0, 1 - Math.abs(progress - .5) * 3.8)
        work.querySelectorAll('.ns2-work-frame[data-wow-item]').forEach((item, index) => {
          const scatter = 1 - alignment
          item.style.setProperty('--wow-x', `${Number(item.dataset.wowX || 0) * scatter}vw`)
          const drift = Math.sin(progress * 13 + index * 1.7) * 2.4 * scatter
          item.style.setProperty('--wow-y', `${Number(item.dataset.wowY || 0) * scatter + drift}vh`)
          item.style.setProperty('--wow-r', `${Number(item.dataset.wowR || 0) * scatter}deg`)
        })
        const phase = progress * 2 - 1
        const forms = work.querySelectorAll('.ns2-form')
        const formMotion = [
          { x: phase * 13, y: Math.sin(progress * Math.PI * 1.8) * -8, r: -18 + progress * 48, s: .84 + alignment * .2, depth: 1 },
          { x: phase * -11, y: Math.sin(progress * Math.PI * 2.2 + .8) * 7, r: 16 - progress * 42, s: .9 + alignment * .14, depth: -.65 },
          { x: phase * 9, y: Math.sin(progress * Math.PI * 1.45 + 2.1) * 9, r: -28 + progress * 66, s: .86 + alignment * .18, depth: .45 },
        ]
        forms.forEach((form, index) => {
          const motion = formMotion[index]
          form.style.setProperty('--form-x', `${motion.x + pointerX * motion.depth}vw`)
          form.style.setProperty('--form-y', `${motion.y + pointerY * motion.depth}vh`)
          form.style.setProperty('--form-r', `${motion.r}deg`)
          form.style.setProperty('--form-s', motion.s.toFixed(3))
        })
        work.style.setProperty('--wow-a', alignment.toFixed(3))
        work.dataset.scVerifyState = String(Math.round(alignment * 10))
      }
    }
    const schedule = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }
    const trackPointer = (event) => {
      pointerX = (event.clientX / window.innerWidth - .5) * 2.2
      pointerY = (event.clientY / window.innerHeight - .5) * 1.8
      schedule()
    }
    const resetPointer = () => {
      pointerX = 0
      pointerY = 0
      schedule()
    }
    schedule()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    window.addEventListener('pointermove', trackPointer, { passive: true })
    document.documentElement.addEventListener('pointerleave', resetPointer)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      window.removeEventListener('pointermove', trackPointer)
      document.documentElement.removeEventListener('pointerleave', resetPointer)
    }
  }, [manualPersonality])

  const currentPersonality = personalities[personality]

  return (
    <div className="ns2" ref={rootRef}>
      <FolioNav active={activeChapter} />
      <span className="ns2-progress" data-sc-progress aria-hidden="true" />

      <section className="ns2-title" id="opening" aria-labelledby="home-title" data-sc-act="flow">
        <div className="ns2-title-lockup">
          <h1 id="home-title"><span>Neutral</span><em>Studio</em></h1>
          <p>Brand systems with structure, character and room to move.</p>
        </div>
      </section>

      <section className="ns2-work" id="portfolio" data-sc-act="flow" aria-labelledby="work-title" ref={workRef} data-sc-verify-state="0">
        <header className="ns2-work-head" data-sc-in>
          <p>Selected UX/UI</p>
          <h2 id="work-title">Seven products.<br />No house style.</h2>
          <span>Different problems deserve different expressions.</span>
        </header>
        <div className="ns2-work-canvas" aria-label="Seven selected UX/UI studies brought into one visual system">
          {portfolioFrames.map((image, index) => (
            <figure className="ns2-work-frame" key={image.src} data-wow-item data-wow-x={image.motion[0]} data-wow-y={image.motion[1]} data-wow-r={image.motion[2]}
              style={{ '--frame-x': `${image.x}%`, '--frame-y': `${image.y}%`, '--frame-w': `${image.width}%`, '--frame-mx': `${image.mobileX}%`, '--frame-my': `${image.mobileY}%`, '--frame-mw': `${image.mobileWidth}%` }}>
              <img src={image.src} alt={image.alt} loading={index < 4 ? 'eager' : 'lazy'} />
              <figcaption>{String(index + 1).padStart(2, '0')}</figcaption>
            </figure>
          ))}
          <img className="ns2-form ns2-form--torus" src="/generated/neutral/form-torus.png" alt="" width="900" height="935" loading="eager" />
          <img className="ns2-form ns2-form--prism" src="/generated/neutral/form-prism.png" alt="" width="700" height="1050" loading="lazy" />
          <img className="ns2-form ns2-form--orbit" src="/generated/neutral/form-orbit.png" alt="" width="900" height="960" loading="lazy" />
          <p className="ns2-work-statement">One system.<br /><em>Different expressions.</em></p>
        </div>
        <p className="ns2-work-release">Built to fit the idea, not the studio.</p>
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
        <header className="ns2-system-intro" data-sc-in>
          <p>What we do</p>
          <h2 id="system-title">One partner.<br />Five connected<br /><em>disciplines.</em></h2>
          <span>From the first decision to the thing people finally see, use and remember.</span>
        </header>
        <ol className="ns2-services" data-sc-in data-sc-stagger="70">
          <li><span>01</span><h3>Branding</h3><p>Distinct identities with the structure to stay recognisable as they grow.</p></li>
          <li><span>02</span><h3>Web</h3><p>Editorial websites where story, interface and technology work as one.</p></li>
          <li><span>03</span><h3>UX/UI</h3><p>Digital products shaped around real people, behaviour and business needs.</p></li>
          <li><span>04</span><h3>Motion</h3><p>Movement that clarifies hierarchy, builds rhythm and gives the system life.</p></li>
          <li><span>05</span><h3>Strategy</h3><p>Position, narrative and the decisions that give every expression direction.</p></li>
        </ol>
      </section>

      <section className="ns2-pricing" id="pricing" data-sc-act="flow" aria-labelledby="pricing-title">
        <RegistrationMarks />
        <header className="ns2-pricing-head" data-sc-in>
          <p>Clear scope. Clear starting point.</p>
          <h2 id="pricing-title">Pricing,<br /><em>without the fog.</em></h2>
          <span>Focused engagements for founders who need momentum, not a six-month discovery phase.</span>
        </header>
        <div className="ns2-pricing-list" data-sc-in data-sc-stagger="65">
          <article><span>01</span><h3>Web</h3><p>Design and build for a focused studio or product website.</p><strong>€2K</strong></article>
          <article><span>02</span><h3>Brand only</h3><p>A clear identity system with the essentials ready to use.</p><strong>€3K</strong></article>
          <article><span>03</span><h3>UX/UI</h3><p>Product flows and interfaces shaped into a coherent experience.</p><strong>€4K</strong></article>
          <article className="is-bundle"><span>04</span><h3>Brand + Web + Assets</h3><p>One connected launch system across identity, site and core materials.</p><strong>€5K</strong></article>
          <article><span>05</span><h3>App development</h3><p>A production-ready application built from product logic to release.</p><strong>€10K</strong></article>
        </div>
        <p className="ns2-pricing-note">Prices in EUR. Final scope is agreed before the work starts.</p>
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
        <footer><span>Independent design studio</span><span>Branding · Web · UX/UI · Motion · Strategy</span><span>© 2026</span></footer>
      </section>
    </div>
  )
}
