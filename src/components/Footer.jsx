import { Link } from 'react-router-dom'
import { CALENDAR_URL, CAL_POPUP_PROPS } from './CalPopup.jsx'

const SERVICES = [
  ['Brand identity', '/services/brand'],
  ['Web design', '/services/web'],
  ['UX/UI design', '/services/ux-ui'],
  ['App development', '/services/app-development'],
  ['Design systems', '/services/systems'],
  ['Pitch decks', '/services/pitch-deck'],
]

const STUDIO = [
  ['Services', '/services'],
  ['Selected work', '/work'],
  ['About', '/about'],
  ['Startup design costs', '/guides/startup-design-costs'],
  ['Contact', '/contact'],
  ['Privacy', '/privacy'],
  ['Legal', '/legal'],
]

function LinkColumn({ title, items }) {
  return (
    <div className="subpage-footer__column">
      <h3>{title}</h3>
      <ul>
        {items.map(([label, href]) => <li key={href}><Link to={href}>{label}</Link></li>)}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="subpage-footer">
      <div className="container subpage-footer__panel">
        <div className="subpage-footer__lead">
          <div>
            <p className="subpage-footer__availability"><span /> Independent studio · Remote worldwide</p>
            <h2>Make the next decision feel <em>inevitable.</em></h2>
            <p>Strategy, identity, product and web shaped as one coherent system.</p>
          </div>
          <div className="subpage-footer__actions">
            <a href={CALENDAR_URL} {...CAL_POPUP_PROPS} target="_blank" rel="noreferrer" data-umami-event="calendar_opened" data-umami-event-placement="footer">
              Book a call <span aria-hidden="true">↗</span>
            </a>
            <a href="mailto:arnaupinyolwork@gmail.com?subject=Portfolio%20request%20-%20Neutral%20Studio" data-umami-event="email_clicked" data-umami-event-placement="footer_portfolio">
              Request portfolio
            </a>
          </div>
        </div>

        <div className="subpage-footer__links">
          <div className="subpage-footer__identity">
            <img src="/Logo-01.png" alt="Neutral Studio" width="209" height="58" />
            <p>Independent design studio by Arnau Piñol for ambitious ideas, products and teams.</p>
          </div>
          <LinkColumn title="Services" items={SERVICES} />
          <LinkColumn title="Studio" items={STUDIO} />
          <div className="subpage-footer__column">
            <h3>Contact</h3>
            <ul>
              <li><a href="mailto:arnaupinyolwork@gmail.com" data-umami-event="email_clicked" data-umami-event-placement="footer_navigation">Email</a></li>
              <li><a href="https://www.linkedin.com/in/arnau-pi%C3%B1ol-olabegoya-722329158/" target="_blank" rel="noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="subpage-footer__bottom">
          <span>© 2026 Neutral Studio</span>
          <span>Barcelona · Working worldwide</span>
        </div>
      </div>
    </footer>
  )
}
