import { Link } from 'react-router-dom'
import { CALENDAR_URL, CAL_POPUP_PROPS } from '../components/CalPopup.jsx'
import { CONTACT_EMAIL } from '../seo/site.js'
import './InfoPage.css'

const projectSubject = encodeURIComponent('Project inquiry — Neutral Studio')
const emailHref = `mailto:${CONTACT_EMAIL}?subject=${projectSubject}`

export default function Contact() {
  return (
    <article className="info-page contact-page">
      <div className="container info-page__header">
        <div className="eyebrow">Remote collaboration · US and worldwide</div>
        <h1 className="h1">Tell us what needs to become clear.</h1>
        <p className="lead">Share the company change, product decision or release that is difficult to resolve. You do not need a finished brief—only enough context to decide whether Neutral Studio can help.</p>
        <div className="contact-page__actions">
          <a className="btn btn--primary" href={CALENDAR_URL} {...CAL_POPUP_PROPS} target="_blank" rel="noreferrer" data-umami-event="calendar_opened" data-umami-event-placement="contact_page">Book a call <span className="arrow">→</span></a>
          <a className="btn btn--ghost" href={emailHref} data-umami-event="email_clicked" data-umami-event-placement="contact_page">Email the studio</a>
        </div>
      </div>

      <div className="container info-page__body">
        <section className="info-page__section contact-page__direct">
          <div>
            <div className="eyebrow">Direct contact</div>
            <h2>One conversation, no agency relay.</h2>
          </div>
          <div>
            <p>Neutral Studio is led by Arnau Piñol. The person reviewing the inquiry remains involved in framing, designing and preparing the work for use. There is no automated qualification sequence and no invented promise that every inquiry is a fit.</p>
            <p>Email works best for detailed context and across time zones. Calls use the availability shown in the booking calendar, so US and international teams can select a workable overlap without exchanging scheduling messages.</p>
            <p><a href={emailHref}>{CONTACT_EMAIL}</a></p>
          </div>
        </section>

        <section className="info-page__section">
          <div className="eyebrow">Useful context</div>
          <h2>What to include in a first message</h2>
          <p>A short inquiry is enough. The following details make the first response more useful, but none is required to start the conversation:</p>
          <ul>
            <li>What is changing in the company, product or market.</li>
            <li>The audience or user journey that matters most right now.</li>
            <li>Existing websites, product links, decks, research or design files that can be reviewed.</li>
            <li>The decision, launch or handoff the project needs to support.</li>
            <li>A real deadline, dependency or budget boundary, when one exists.</li>
            <li>Who will approve the work and who will use or implement it afterward.</li>
          </ul>
          <p>Sensitive materials do not belong in an unsolicited first message. Begin with public or non-confidential context; appropriate access and confidentiality can be agreed before private files are shared.</p>
        </section>

        <section className="info-page__section">
          <div className="eyebrow">What happens next</div>
          <h2>A fit decision before a proposal.</h2>
          <p>The first step is understanding whether the need matches the studio’s services, current availability and the level of responsibility the release requires. If it does, a focused call can clarify the decision, source material, collaborators, timing and unknowns.</p>
          <p>A proposal then states the intended outcome, deliverables, responsibilities, review rhythm, timing, ownership, third-party costs and price. Work does not begin—and the scope does not silently expand—until those terms are agreed in writing.</p>
          <p>If the need is not a fit, Neutral Studio will not turn an unrelated request into a generic package. The aim of the first exchange is a useful next decision, not a sales process that assumes the answer.</p>
        </section>

        <section className="info-page__section contact-page__grid">
          <div>
            <div className="eyebrow">Common starting points</div>
            <h2>Bring the current constraint.</h2>
          </div>
          <div className="info-page__links">
            <Link className="card" to="/services/brand">Brand identity <span aria-hidden="true">↗</span></Link>
            <Link className="card" to="/services/web">Startup websites <span aria-hidden="true">↗</span></Link>
            <Link className="card" to="/services/ux-ui">UX/UI design <span aria-hidden="true">↗</span></Link>
            <Link className="card" to="/services/app-development">App development <span aria-hidden="true">↗</span></Link>
            <Link className="card" to="/services/systems">Design systems <span aria-hidden="true">↗</span></Link>
            <Link className="card" to="/services/pitch-deck">Pitch decks <span aria-hidden="true">↗</span></Link>
          </div>
          <p className="contact-page__grid-note">Not sure which output is appropriate? Review the <Link to="/services">services overview</Link> or the <Link to="/guides/startup-design-costs">startup design pricing guide</Link>. Both explain how scope follows the decision rather than a predetermined package.</p>
        </section>

        <section className="info-page__section contact-page__privacy">
          <h2>Contact and privacy</h2>
          <p>Email messages are used to respond to the inquiry and manage any resulting professional relationship. The booking service loads only after deliberate interaction. Read the <Link to="/privacy">privacy policy</Link> for analytics, booking and data-request details.</p>
          <div className="contact-page__actions">
            <a className="btn btn--primary" href={emailHref} data-umami-event="email_clicked" data-umami-event-placement="contact_page_final">Start by email <span className="arrow">→</span></a>
            <Link className="btn btn--ghost" to="/work">Inspect selected work</Link>
          </div>
        </section>
      </div>

      <style>{`
        .contact-page h1,.contact-page h2{hyphens:none;word-break:normal;overflow-wrap:normal}.contact-page__actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:30px}.contact-page__direct,.contact-page__grid{display:grid;grid-template-columns:minmax(0,.85fr) minmax(0,1.15fr);gap:clamp(36px,7vw,90px)}.contact-page__direct h2,.contact-page__grid h2{max-width:12ch}.contact-page__direct p:first-child{margin-top:0}.contact-page__grid-note{grid-column:2}.contact-page__privacy{text-align:center}.contact-page__privacy p{margin-left:auto;margin-right:auto}.contact-page__privacy .contact-page__actions{justify-content:center}@media(max-width:720px){.contact-page__direct,.contact-page__grid{grid-template-columns:1fr}.contact-page__grid-note{grid-column:auto}}@media(max-width:480px){.contact-page__actions .btn{width:100%}}
      `}</style>
    </article>
  )
}
