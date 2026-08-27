import { Link } from 'react-router-dom'
import { CALENDAR_URL, CAL_POPUP_PROPS } from '../components/CalPopup.jsx'
import './InfoPage.css'

const priceRows = [
  ['Brand identity', 'From €2,990', 'Positioning translation, identity foundations, applications and practical guidance.'],
  ['Startup website', 'From €1,990', 'Narrative, responsive design, reusable components and launch-ready development.'],
  ['UX/UI design', 'From €3,990', 'Product flows, interface states, prototypes and implementation-ready foundations.'],
  ['App design and development', 'From €9,990', 'Release scope, interaction design, production build and launch support.'],
  ['Design system', 'Scoped after review', 'Tokens, components, documentation and adoption work depend on the existing product.'],
  ['Pitch deck', 'Scoped after review', 'The effort depends on whether the story, evidence and slide structure already exist.'],
]

export default function StartupDesignCosts() {
  return (
    <article className="info-page design-cost-guide">
      <div className="container info-page__header">
        <div className="eyebrow">Independent pricing guide · Updated August 2026</div>
        <h1 className="h1">What does professional startup design cost?</h1>
        <p className="lead">A practical guide to budgeting brand identity, websites, UX/UI, design systems, pitch decks and app development—using Neutral Studio’s real starting prices and the decisions that change a final scope.</p>
      </div>

      <div className="container info-page__body">
        <section className="info-page__section design-cost-guide__answer">
          <div className="eyebrow">The short answer</div>
          <h2>Focused projects start at €1,990; connected product work starts higher.</h2>
          <p>At Neutral Studio, a focused startup website starts at €1,990, brand identity at €2,990, UX/UI design at €3,990 and app design plus development at €9,990. These are starting prices, not fixed promises for every brief. The final figure depends on what already exists, how many decisions remain unresolved, how much content or product logic must be created, and what has to be ready at handoff.</p>
          <p>A useful budget is therefore attached to a release decision rather than a list of screens. A five-page website with an approved identity and finished copy is a different project from a five-page website that must also establish positioning, write the narrative, produce imagery and connect a CMS. The page count may match; the uncertainty and responsibility do not.</p>
        </section>

        <section className="info-page__section">
          <h2>Neutral Studio’s public starting prices</h2>
          <p>The table below is a planning reference for US founders comparing independent remote design support. Neutral Studio’s public starting prices are stated in euros; billing currency, applicable taxes, paid software, fonts, stock assets, hosting and specialist external production are confirmed before approval rather than silently assumed.</p>
          <div className="design-cost-guide__table-wrap">
            <table className="design-cost-guide__table">
              <thead><tr><th>Engagement</th><th>Planning figure</th><th>What shapes the scope</th></tr></thead>
              <tbody>
                {priceRows.map(([service, price, scope]) => (
                  <tr key={service}><th scope="row">{service}</th><td>{price}</td><td>{scope}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>Review the complete <Link to="/services">startup design services overview</Link> for deliverables, fit and constraints, or open the relevant service page from the comparisons below.</p>
        </section>

        <section className="info-page__section">
          <div className="eyebrow">US market context</div>
          <h2>Compare the scope before comparing the number.</h2>
          <p>Clutch’s August 2026 pricing data places most reviewed branding projects between $10,000 and $49,999, with US branding agencies commonly listed at $100–$149 per hour. Its web design data says most reviewed projects cost under $10,000 while typical specialist rates are also $100–$149 per hour. Its US UX/UI directory reports the same $100–$149 hourly band.</p>
          <p>Those figures describe a broad marketplace, not a quote for your project. They include suppliers with different team structures, overhead, research depth, deliverables and timelines. Neutral Studio publishes focused starting prices so a founder can identify whether the minimum engagement is plausible before spending time on a proposal.</p>
          <p>Sources: <a href="https://clutch.co/agencies/branding/pricing" target="_blank" rel="noreferrer">Clutch 2026 branding pricing guide</a>, <a href="https://clutch.co/web-designers/pricing" target="_blank" rel="noreferrer">web design pricing guide</a> and <a href="https://clutch.co/agencies/ui-ux/pricing" target="_blank" rel="noreferrer">UX/UI pricing guide</a>. Figures should be rechecked when planning a later budget because market data changes.</p>
        </section>

        <section className="info-page__section">
          <div className="eyebrow">Cost driver 01</div>
          <h2>How much of the strategic decision is already made?</h2>
          <p>Design moves faster when the team can state who the product is for, which problem matters, what must be believed and what the next release needs to achieve. When those answers conflict, visual execution alone will not resolve the project. The engagement first needs enough strategy to make later choices coherent.</p>
          <p>For <Link to="/services/brand">brand identity</Link>, this changes whether the work begins with a clear positioning or must help articulate one. For a <Link to="/services/web">startup website</Link>, it changes whether supplied copy can be structured or the narrative must be built from interviews and fragmented source material. For a pitch deck, it separates visual refinement from the harder work of deciding the argument, evidence order and missing information.</p>
          <p>This does not mean every project needs a long discovery phase. It means uncertainty should be named and scoped. A short, focused decision sprint can be more economical than pushing unclear assumptions into dozens of screens and revising them later.</p>
        </section>

        <section className="info-page__section">
          <div className="eyebrow">Cost driver 02</div>
          <h2>What must be produced, and what must only be designed?</h2>
          <p>A design file, a working website and a production application are different handoffs. A website budget changes when the studio is responsible for development, content migration, analytics, forms, accessibility checks, redirects or CMS configuration. An app budget changes with authentication, data models, integrations, roles, offline behavior, payments, moderation and release requirements.</p>
          <p>The same principle applies inside <Link to="/services/ux-ui">UX/UI design</Link>. A happy-path prototype can answer an early product question. Engineering-ready interface work also needs loading, empty, error, permission and responsive states. Those states are not decorative extras; they describe how the product behaves when real conditions replace the ideal demo.</p>
          <p>Ask every supplier what “done” means. The economical proposal is the one whose handoff matches the next team’s actual needs—not automatically the proposal with the smallest number at the bottom.</p>
        </section>

        <section className="info-page__section">
          <div className="eyebrow">Cost driver 03</div>
          <h2>How many people and systems need to keep using the work?</h2>
          <p>A founder-led launch can often work with a compact identity or interface foundation. A growing team needs decisions that remain understandable when marketing, product and engineering work in parallel. That may require templates, tokens, reusable components, naming rules, documentation and an ownership model.</p>
          <p>A <Link to="/services/systems">design system</Link> is valuable when repeated inconsistency is already creating cost, or when several contributors need a shared product language. It is poor value when it becomes an abstract component catalogue before the product has stable patterns. Neutral Studio reviews the existing interface, code and team workflow before pricing this work because the adoption problem is as important as the component count.</p>
        </section>

        <section className="info-page__section">
          <h2>Three realistic ways to allocate a startup design budget</h2>
          <h3>1. Launch the smallest credible story</h3>
          <p>When the product is early and the immediate need is to explain it, concentrate spending on the promise, essential visual foundation and one focused website or deck. Avoid commissioning a large identity universe before the team knows which channels and assets will genuinely be used.</p>
          <h3>2. Remove friction from an existing product</h3>
          <p>When users already encounter the product, prioritize the journey that blocks adoption, activation or completion. Research the uncertainty, redesign the critical flow and give engineering complete states. A broad rebrand may wait unless trust or positioning is part of the product problem.</p>
          <h3>3. Align a company that has outgrown its first system</h3>
          <p>When product, brand and marketing no longer feel related, budget for shared foundations before polishing isolated outputs. The deliverable may connect a sharper position, refreshed identity, web narrative and reusable interface rules. Phasing can control risk, but each phase should anticipate the next rather than create another disconnected layer.</p>
        </section>

        <section className="info-page__section">
          <h2>Independent studio, subscription or larger agency?</h2>
          <p>An independent studio is usually a strong fit when direct access to the person framing and making the work matters, the decision set is connected and the company wants a compact senior collaboration. A design subscription can suit a stable stream of defined production requests. A larger agency can be appropriate when a program needs several specialist teams working concurrently, extensive research operations or formal procurement capacity.</p>
          <p>The label alone does not determine quality or value. Compare who will actually do the work, how decisions are documented, what the price includes, how feedback is handled, which source files and accounts you own, and whether the proposed team has understood the present constraint. Neutral Studio keeps scope, responsibilities, third-party costs and ownership visible before work begins.</p>
        </section>

        <section className="info-page__section">
          <h2>Questions to ask before accepting a design proposal</h2>
          <ul>
            <li>Which business or product decision is this scope expected to resolve?</li>
            <li>What information, copy, assets and access must the client supply?</li>
            <li>Which responsive, edge and implementation states are included?</li>
            <li>Who performs the work and who makes final decisions?</li>
            <li>What will be editable, reusable or owned after handoff?</li>
            <li>Which costs sit outside the proposal?</li>
            <li>How are changes handled when new information affects the agreed scope?</li>
            <li>What evidence will show that the release is ready, even when long-term outcomes cannot yet be known?</li>
          </ul>
          <p>A credible proposal can answer these without manufacturing certainty. No studio can guarantee investment, adoption, ranking or revenue from design alone. It can define the quality of the decisions, outputs and validation it is responsible for.</p>
        </section>

        <section className="info-page__section design-cost-guide__final">
          <div className="eyebrow">Plan the next release</div>
          <h2>Bring the constraint, not a perfect brief.</h2>
          <p>Share what is changing, what already exists, the deadline or dependency that is real, and the decision the work must support. Neutral Studio can then identify whether a focused service is enough, where uncertainty needs to be reduced and what a responsible scope should include.</p>
          <div className="design-cost-guide__actions">
            <a className="btn btn--primary" href={CALENDAR_URL} {...CAL_POPUP_PROPS} target="_blank" rel="noreferrer">Discuss your project <span className="arrow">→</span></a>
            <Link className="btn btn--ghost" to="/work">Inspect selected work</Link>
          </div>
        </section>
      </div>

      <style>{`
        .design-cost-guide h1,.design-cost-guide h2{hyphens:none;word-break:normal;overflow-wrap:normal}.design-cost-guide .info-page__section{min-width:0}.design-cost-guide__table-wrap{width:100%;max-width:100%;min-width:0;overflow-x:auto;margin:1.75rem 0;-webkit-overflow-scrolling:touch}.design-cost-guide__table{width:100%;min-width:680px;border-collapse:collapse;text-align:left}.design-cost-guide__table th,.design-cost-guide__table td{padding:16px;border-bottom:1px solid var(--line);vertical-align:top;color:var(--ink-2);line-height:1.55}.design-cost-guide__table thead th{font-family:var(--mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-3)}.design-cost-guide__table tbody th{width:22%;color:var(--ink);font-weight:600}.design-cost-guide__table td:nth-child(2){width:20%;color:var(--acc);font-weight:600;white-space:nowrap}.design-cost-guide__actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:28px}@media(max-width:480px){.design-cost-guide__actions .btn{width:100%}}
      `}</style>
    </article>
  )
}
