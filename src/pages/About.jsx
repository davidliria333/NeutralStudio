import { Link } from 'react-router-dom'
import { LINKEDIN_URL, SERVICE_LINKS } from '../seo/site.js'
import './InfoPage.css'

export default function About() {
  return (
    <article className="info-page">
      <div className="container info-page__header">
        <div className="eyebrow">About Neutral Studio</div>
        <h1 className="h1">One room for the whole idea.</h1>
        <p className="lead">Neutral Studio is an independent design practice based in Barcelona. We connect strategy, identity, product, web and motion so a promising idea can become one coherent experience.</p>
      </div>

      <div className="container info-page__body">
        <section className="info-page__section">
          <h2>Why the studio exists</h2>
          <p>Early-stage teams rarely experience design as separate disciplines. A positioning decision changes the pitch. The pitch changes the website. The product has to deliver the promise that the brand makes. When each piece is handled independently, founders spend time translating between suppliers and repairing the gaps.</p>
          <p>Neutral Studio keeps those decisions connected. The work can begin with one urgent need—a brand identity, a product flow, a website or a deck—while considering the system around it. This creates clearer scope now and fewer contradictions later.</p>
        </section>

        <section className="info-page__section">
          <h2>How we work</h2>
          <h3>Frame the real decision</h3>
          <p>Before choosing an output, we clarify the audience, business context, constraints and the change the work needs to create. A shared brief gives everyone criteria for judging the design beyond personal preference.</p>
          <h3>Make strategy and execution together</h3>
          <p>Concepts are tested in realistic applications. Brand work appears in product and web contexts; interface work uses real content and edge cases; decks use supplied facts rather than invented proof. This keeps the work practical while there is still room to change direction.</p>
          <h3>Leave a usable system</h3>
          <p>The handoff is organised around the people who will continue the work. Depending on scope, that can include source files, reusable components, design tokens, templates, implementation notes and a defined period of support.</p>
        </section>

        <section className="info-page__section">
          <h2>Independent by design</h2>
          <p>Neutral Studio is led by Arnau Piñol and brings in the right specialist context when a project requires it. Scope, responsibilities and external costs are agreed before work begins. Client repositories, production accounts and final source files remain under clear client ownership.</p>
          <p>We do not present anonymous outcomes as proof. Project results, testimonials or business metrics are published only when they can be attributed and used with permission. The portfolio focuses on the decisions and craft visible in the work.</p>
          <p><a href={LINKEDIN_URL} target="_blank" rel="noreferrer">View Arnau Piñol on LinkedIn</a> or <a href="mailto:arnaupinyolwork@gmail.com">contact the studio by email</a>.</p>
        </section>

        <section className="info-page__section">
          <h2>Explore the services</h2>
          <p>Each engagement has a focused starting point and can connect to the next part of the system when the project needs it.</p>
          <nav className="info-page__links" aria-label="Neutral Studio services">
            {SERVICE_LINKS.map(({ path, label }) => <Link className="card" key={path} to={path}>{label}<span aria-hidden="true">↗</span></Link>)}
          </nav>
        </section>
      </div>
    </article>
  )
}
