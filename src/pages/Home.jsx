import { useEffect, useRef } from 'react'
import Hero from '../sections/Hero.jsx'
import PortfolioShowcase from '../sections/PortfolioShowcase.jsx'
import './HomeScrollcraft.css'

const disciplines = [
  ['Strategy', 'Find the idea worth building around.'],
  ['Brand', 'Give it a voice people recognise.'],
  ['Product', 'Make the promise work in the real world.'],
  ['Web', 'Turn attention into understanding.'],
  ['Motion', 'Give the system rhythm and memory.'],
]

export default function Home() {
  const rootRef = useRef(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root || root.dataset.scMounted || !window.ScrollCraft) return
    window.ScrollCraft.mount(root)
    root.dataset.scMounted = 'true'
  }, [])

  return (
    <div className="ns-story" ref={rootRef}>
      <span className="ns-progress" data-sc-progress aria-hidden="true" />
      <div className="sc-grain" aria-hidden="true" />

      <section className="ns-hero-act" data-sc-act="pin" data-sc-span="1.8" data-sc-drift="#0a0a0b" aria-labelledby="ns-hero-title">
        <div className="ns-hero-stage" data-sc-stage data-sc-spotlight>
          <Hero />
          <div className="ns-hero-plate" aria-hidden="true" />
          <div className="ns-hero-scan" aria-hidden="true"><span>Identity revealed</span></div>
          <div className="ns-hero-status" aria-hidden="true">
            <span />
            Strategy / Brand / Product / Web
          </div>
          <div className="ns-hero-copy" data-sc-cue="0 0.44 0 0.54">
            <p className="ns-kicker">NeutralStudio / Independent creative team</p>
            <h1 id="ns-hero-title">Make the idea<br />feel real.</h1>
            <p>Strategy, brand, product and web. Built together from day one.</p>
          </div>
        </div>
      </section>

      <section className="ns-tension sc-section" data-sc-act="flow" data-sc-drift="#101014" id="services">
        <div className="sc-wrap ns-tension-grid" data-sc-in data-sc-stagger="60">
          <p className="ns-index">The founder problem</p>
          <h2>A good idea gets blurry when five different teams pull it apart.</h2>
          <p className="ns-body">One person shapes the strategy. Another draws the brand. Product goes elsewhere. The website arrives last and tries to make the fragments look intentional.</p>
          <p className="ns-aside">You end up managing the joins instead of building the thing.</p>
        </div>
      </section>

      <section className="ns-range" data-sc-act="pan" data-sc-span="3" data-sc-drift="#111215">
        <div className="ns-range-stage" data-sc-stage>
          <div className="ns-range-rail" data-sc-pan="0.05">
            <div className="ns-range-lead">
              <p className="ns-index">One idea. One system.</p>
              <h2>Neutral keeps the whole thing in the room.</h2>
            </div>
            {disciplines.map(([name, description], index) => (
              <article className="ns-discipline" key={name} style={{ '--item': index + 1 }}>
                <span>{name}</span>
                <p>{description}</p>
              </article>
            ))}
            <div className="ns-range-end">
              <strong>No handoff theatre.</strong>
              <p>The expression and the logic move together.</p>
            </div>
          </div>
        </div>
      </section>

      <PortfolioShowcase />

      <section className="ns-method sc-section" data-sc-act="flow" data-sc-drift="#0c0d0f" id="process">
        <div className="sc-wrap ns-method-grid" data-sc-in data-sc-stagger="70">
          <div>
            <p className="ns-index">How we work</p>
            <h2>Enough structure to move fast. Enough room to find the better answer.</h2>
          </div>
          <ol>
            <li data-sc-reveal="left" data-sc-reveal-at="0.08 0.32"><span>Frame</span><p>We agree on the real problem before choosing the output.</p></li>
            <li data-sc-reveal="left" data-sc-reveal-at="0.26 0.50"><span>Make</span><p>Strategy and execution evolve together, through visible decisions.</p></li>
            <li data-sc-reveal="left" data-sc-reveal-at="0.44 0.68"><span>Ship</span><p>The system leaves ready to use, extend and explain.</p></li>
          </ol>
        </div>
      </section>

      <section className="ns-assembly" data-sc-act="pin" data-sc-span="3.4" data-sc-drift="#090a0b" aria-labelledby="assembly-title">
        <div className="ns-assembly-stage" data-sc-stage>
          <div className="ns-assembly-pieces" aria-hidden="true">
            <span className="ns-piece ns-piece--strategy">Strategy</span>
            <span className="ns-piece ns-piece--brand">Brand</span>
            <span className="ns-piece ns-piece--product">Product</span>
            <span className="ns-piece ns-piece--web">Web</span>
            <span className="ns-piece ns-piece--motion">Motion</span>
          </div>
          <svg className="ns-assembly-lines" viewBox="0 0 1000 600" preserveAspectRatio="none" aria-hidden="true">
            <path d="M45 80 C230 90 295 300 500 300 S770 130 955 82" />
            <path d="M40 510 C250 500 315 300 500 300 S760 480 960 520" />
            <path d="M500 20 C500 180 500 220 500 300 S500 450 500 580" />
          </svg>
          <div className="ns-assembly-word" data-sc-cue="0.46 1 0.08 0">
            <p>Everything clicks into place.</p>
            <h2 id="assembly-title">NeutralStudio</h2>
          </div>
        </div>
      </section>

      <section className="ns-close sc-section" data-sc-act="flow" data-sc-drift="#d8ff3e" id="contact">
        <div className="sc-wrap ns-close-inner" data-sc-in data-sc-stagger="65">
          <p className="ns-index">Have an idea with potential?</p>
          <h2>Hagamos que se sienta real.</h2>
          <a className="ns-close-link" href="https://cal.com/neutralstudio/30min?overlayCalendar=true" target="_blank" rel="noreferrer">
            Cuéntanos tu idea <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </div>
  )
}
