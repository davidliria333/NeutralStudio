import { Link } from 'react-router-dom'
import { CALENDAR_URL, CAL_POPUP_PROPS } from '../components/CalPopup.jsx'
import { SERVICE_LINKS } from '../seo/site.js'
import './InfoPage.css'

const serviceSummaries = {
  '/services/brand': {
    problem: 'For a company whose product, story and visual identity no longer feel like the same business.',
    outcome: 'Positioning translated into a recognizable identity, practical applications and a system the team can continue using.',
    price: 'From €2,990',
  },
  '/services/systems': {
    problem: 'For teams repeating interface and brand decisions across products, campaigns or codebases.',
    outcome: 'Shared foundations, components, documentation and contribution rules shaped around real adoption needs.',
  },
  '/services/web': {
    problem: 'For a startup website that does not yet explain the product, establish trust or guide the right next action.',
    outcome: 'A responsive, accessible and search-ready site built around a clear narrative and maintainable components.',
    price: 'From €1,990',
  },
  '/services/pitch-deck': {
    problem: 'For an investor, sales or partnership story whose evidence is difficult to follow or update.',
    outcome: 'A focused argument, credible data hierarchy and reusable slide patterns prepared for the way the deck is presented.',
  },
  '/services/ux-ui': {
    problem: 'For a product journey that has grown through patches, hides important actions or lacks implementation detail.',
    outcome: 'Validated flows, responsive interfaces, edge states and reusable foundations ready for engineering.',
    price: 'From €3,990',
  },
  '/services/app-development': {
    problem: 'For a product that needs one connected path from release definition and interaction design to a working application.',
    outcome: 'A scoped production build with explicit data boundaries, acceptance criteria, ownership and release support.',
    price: 'From €9,990',
  },
}

export default function Services() {
  return (
    <article className="info-page services-hub">
      <div className="container info-page__header">
        <div className="eyebrow">Design services · US startups and global teams</div>
        <h1 className="h1">One design studio for the whole startup idea.</h1>
        <p className="lead">Neutral Studio connects brand identity, product design, websites, pitch decks and application development. Start with the decision that matters now, while keeping the promise, interface and launch system moving in one direction.</p>
        <div className="services-hub__actions">
          <a className="btn btn--primary" href={CALENDAR_URL} {...CAL_POPUP_PROPS} target="_blank" rel="noreferrer">Discuss your project <span className="arrow">→</span></a>
          <Link className="btn btn--ghost" to="/work">Inspect selected work</Link>
        </div>
      </div>

      <div className="container info-page__body">
        <section className="info-page__section">
          <h2>Design services for startups at a decision point</h2>
          <p>Founders rarely experience branding, product design and web development as separate problems. A new position changes the pitch. The pitch changes the website. The website creates an expectation the product has to fulfil. When those parts move independently, teams spend time translating between suppliers and correcting contradictions at the moment they most need momentum.</p>
          <p>Neutral Studio is an independent remote design studio built around that connection. An engagement can remain focused on one deliverable or extend across the system when there is a practical reason to do so. Scope, timing, ownership and final price are agreed before work starts; no package silently expands because another discipline becomes relevant.</p>
        </section>

        <section className="info-page__section">
          <div className="eyebrow">Six focused starting points</div>
          <h2>Choose the part that needs clarity first.</h2>
          <div className="services-hub__grid">
            {SERVICE_LINKS.map(({ path, label }) => {
              const summary = serviceSummaries[path]
              return (
                <article className="card services-hub__card" key={path}>
                  <div className="services-hub__card-header">
                    <h3>{label}</h3>
                    {summary.price && <strong className="services-hub__price">{summary.price}</strong>}
                  </div>
                  <p><b>Useful when:</b> {summary.problem}</p>
                  <p><b>Built toward:</b> {summary.outcome}</p>
                  <Link to={path}>Explore {label.toLowerCase()} <span aria-hidden="true">↗</span></Link>
                </article>
              )
            })}
          </div>
        </section>

        <section className="info-page__section services-hub__split">
          <div>
            <div className="eyebrow">How to choose</div>
            <h2>The output follows the business decision.</h2>
          </div>
          <div>
            <h3>Launching something new</h3>
            <p>Begin with the smallest credible release. That may be a positioning and identity foundation, a focused marketing website, a prototype that can answer a product question or an application scope that separates launch requirements from later ideas. The goal is not to commission every possible asset; it is to make the next important decision with enough quality and evidence.</p>
            <h3>Making disconnected pieces coherent</h3>
            <p>When a company already has a product, website and sales material, the starting point is usually diagnosis. We identify which promise, visual rule, content hierarchy or interface pattern is causing the most expensive inconsistency. The engagement can then repair that point and define how the rest of the system should follow, rather than redesigning everything by default.</p>
            <h3>Preparing for growth or a new market</h3>
            <p>Growth introduces more contributors, formats and edge cases. Brand and design-system work becomes valuable when it reduces repeated decisions without freezing the company in its current form. Web, UX/UI and development scopes account for new content, permissions, localisation, analytics and operational ownership before those requirements become launch blockers.</p>
          </div>
        </section>

        <section className="info-page__section">
          <h2>What happens before a proposal</h2>
          <p>The first conversation is used to understand the company, audience, current evidence, constraints and the decision the work needs to unlock. If existing materials are relevant, the studio reviews them before recommending scope. A proposal then states what is included, what the client needs to provide, how reviews work, what the handoff contains and which dependencies remain outside the engagement.</p>
          <p>Projects are not priced by hiding uncertainty inside a generic package. Starting prices on this site describe a typical minimum investment for the named service; final scope depends on deliverables, readiness, technical risk, collaborators and timing. Any external costs or specialist responsibilities are identified before approval.</p>
        </section>

        <section className="info-page__section services-hub__split">
          <div>
            <div className="eyebrow">Independent studio model</div>
            <h2>Direct decisions, explicit ownership.</h2>
          </div>
          <div>
            <p>Neutral Studio is led by Arnau Piñol and works remotely with startups and product teams. Strategy stays close to execution: the person helping frame the problem remains involved while the identity, interface, website or release is shaped and prepared for use.</p>
            <p>Client repositories, production accounts and final source files remain under clear client ownership. When a project requires specialist context, responsibilities and external costs are made visible instead of being presented as an invisible agency layer. The studio does not publish anonymous business metrics, testimonials or client outcomes as proof.</p>
            <p><Link to="/about">Read how Neutral Studio works</Link> or <Link to="/work">inspect the decisions visible in selected work</Link>.</p>
          </div>
        </section>

        <section className="info-page__section services-hub__final">
          <h2>Bring the current decision.</h2>
          <p>You do not need to arrive with a finished brief. Bring the product, company change or launch constraint that is difficult to resolve, plus the evidence and materials that already exist. The first step is deciding what the project genuinely needs to prove or ship.</p>
          <p>Still planning the budget? Read the <Link to="/guides/startup-design-costs">2026 startup design pricing guide</Link> for public starting prices and the scope decisions that change them.</p>
          <a className="btn btn--primary" href={CALENDAR_URL} {...CAL_POPUP_PROPS} target="_blank" rel="noreferrer">Tell us what you are building <span className="arrow">→</span></a>
        </section>
      </div>

      <style>{`
        .services-hub__actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:32px}.services-hub__grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;margin-top:28px}.services-hub__card{display:flex;flex-direction:column;align-items:flex-start;padding:26px}.services-hub__card-header{width:100%;display:flex;align-items:flex-start;justify-content:space-between;gap:20px}.services-hub__card h3{font-size:22px;margin:0}.services-hub__price{color:var(--acc);font-size:13px;white-space:nowrap}.services-hub__card p{font-size:14px}.services-hub__card b{color:var(--ink);font-weight:600}.services-hub__card a{margin-top:auto;padding-top:10px}.services-hub__split{display:grid;grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr);gap:clamp(40px,8vw,110px)}.services-hub__split h2{max-width:12ch}.services-hub__split h3:first-child{margin-top:0}.services-hub__final{text-align:center}.services-hub__final p{margin-left:auto;margin-right:auto}.services-hub__final .btn{margin-top:18px}@media(max-width:760px){.services-hub__grid,.services-hub__split{grid-template-columns:1fr}.services-hub__split h2{max-width:16ch}}@media(max-width:480px){.services-hub__actions .btn{width:100%}}
      `}</style>
    </article>
  )
}
