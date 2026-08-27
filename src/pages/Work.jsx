import { Link } from 'react-router-dom'
import './InfoPage.css'

const projects = [
  {
    id: 'pocket-voice',
    title: 'Pocket Voice',
    discipline: 'Identity, campaign and digital product',
    image: '/portfolio/branding/pocket-voice-identity.webp',
    imageSmall: '/portfolio/branding/responsive/pocket-voice-identity-800.webp',
    alt: 'Pocket Voice symbol and wordmark on a bright blue field.',
    summary: 'The published work connects a compact voice-led identity with campaign compositions and a mobile product context. A reduced symbol, direct typography and a recognizable blue field create continuity across very different formats.',
    detail: 'The useful design question is consistency: can the same idea remain legible as an app mark, a wordmark, a product screen and a campaign asset? The system shown here uses a small set of repeatable decisions instead of relying on a different visual trick for every placement.',
  },
  {
    id: 'vira',
    title: 'VIRA',
    discipline: 'Identity and wearable experience',
    image: '/portfolio/branding/vira-wearable.webp',
    imageSmall: '/portfolio/branding/responsive/vira-wearable-800.webp',
    alt: 'VIRA character experience displayed on an Apple Watch over a violet composition.',
    summary: 'VIRA combines a soft flower-like symbol, a violet color world and a character-led wearable interface. The identity and interface are presented as parts of one experience rather than separate branding and product exercises.',
    detail: 'On a watch, hierarchy and recognition have to survive a very small surface. The visual language therefore depends on clear silhouettes, controlled color contrast and a character that can communicate state without adding interface density. The same elements also give launch material a distinctive point of view.',
  },
  {
    id: 'human-archive',
    title: 'Human Archive',
    discipline: 'Identity and editorial application',
    image: '/portfolio/branding/human-archive-application.webp',
    imageSmall: '/portfolio/branding/responsive/human-archive-application-800.webp',
    alt: 'Human Archive identity applied to an editorial digital composition.',
    summary: 'Human Archive explores how an identity can organize memory, culture and collected material without becoming visually nostalgic. The selection pairs a restrained mark with an editorial application built around content and sequence.',
    detail: 'Archive-oriented products need a strong framework but should not compete with the material they contain. The visible system uses typography, spacing and modular composition to provide structure while leaving room for different kinds of imagery and narrative. That balance is relevant to cultural platforms, knowledge products and content-rich digital services.',
  },
  {
    id: 'circlehome',
    title: 'Circlehome',
    discipline: 'Identity and launch system',
    image: '/portfolio/branding/circlehome-launch.webp',
    imageSmall: '/portfolio/branding/responsive/circlehome-launch-800.webp',
    alt: 'Circlehome launch applications using a circular identity system.',
    summary: 'Circlehome turns a circular motif into a flexible identity and launch language. The shape can act as a mark, a frame and an organising device, helping product and marketing material feel related without forcing every composition to look identical.',
    detail: 'The work demonstrates a practical principle behind design systems: useful repetition creates recognition, while controlled variation keeps the system alive. A launch set needs enough structure for a team to produce new assets quickly, plus enough range to support different messages, formats and levels of detail.',
  },
]

export default function Work() {
  return (
    <article className="info-page work-page">
      <div className="container info-page__header">
        <div className="eyebrow">Selected work · Brand and product systems</div>
        <h1 className="h1">Design decisions you can inspect.</h1>
        <p className="lead">A selection of identity, interface and launch work from Neutral Studio. The notes focus on what is visible in the published artefacts: the problem each system addresses, the design logic connecting its parts and how that logic can travel across formats.</p>
      </div>

      <div className="container info-page__body">
        <section className="info-page__section">
          <h2>What this selection proves</h2>
          <p>Neutral Studio works across brand identity, websites and digital products, but the underlying task is consistent: turn an idea into a set of decisions that other people can understand and use. The work below shows range in expression while keeping hierarchy, repeatability and implementation in view.</p>
          <p>These are visual and process examples, not anonymous claims about commercial outcomes. Client testimonials, conversion figures and business results are published only when they can be attributed and used with permission. Where that evidence is not public, the page stays specific about the craft rather than inventing a success story.</p>
          <p>The selection is also intentionally concrete about its limits. It does not imply that one image represents an entire engagement or that a visual system alone created a business result. Instead, each example points to choices a prospective client can evaluate directly: whether the hierarchy is clear, whether related touchpoints feel connected, whether the expression fits its context and whether the underlying idea can support more than one composition. Those are the qualities Neutral Studio can demonstrate from published material without asking a visitor to trust an unsupported number.</p>
          <p>Additional process or implementation detail can be discussed when project permissions allow it.</p>
        </section>

        {projects.map((project) => (
          <section className="info-page__section work-page__project" id={project.id} key={project.id}>
            <div className="eyebrow">{project.discipline}</div>
            <h2>{project.title}</h2>
            <figure>
              <img
                src={project.imageSmall}
                srcSet={`${project.imageSmall} 800w, ${project.image} 2048w`}
                sizes="(max-width: 960px) 92vw, 820px"
                width="2048"
                height="1541"
                loading="lazy"
                decoding="async"
                alt={project.alt}
              />
            </figure>
            <p>{project.summary}</p>
            <p>{project.detail}</p>
          </section>
        ))}

        <section className="info-page__section">
          <h2>How the work is evaluated</h2>
          <h3>Clarity before decoration</h3>
          <p>Each engagement starts by defining the audience, the decision the work must support and the environments where it will appear. A compelling visual direction is valuable, but it also has to explain the right thing, at the right moment, to the right person.</p>
          <h3>One logic across touchpoints</h3>
          <p>Identity, interface and marketing are tested together where the scope requires it. This exposes contradictions early: a mark that fails at app-icon size, a campaign language that cannot extend to product screens, or a website whose promise does not match the product experience.</p>
          <h3>A system another team can use</h3>
          <p>Final work is organized around reusable rules, production files and explicit behavior. The exact handoff depends on scope, but the standard is the same: the result should reduce future guesswork rather than make the studio a permanent bottleneck.</p>
        </section>

        <section className="info-page__section">
          <h2>Choose the relevant next step</h2>
          <p>If the current problem is a fragmented identity, an unclear website, an interface that has grown through patches or an application that needs one connected design and development process, the service pages explain scope, deliverables and working method in detail.</p>
          <div className="info-page__links">
            <Link className="card" to="/services/brand">Brand identity <span aria-hidden="true">↗</span></Link>
            <Link className="card" to="/services/web">Web design <span aria-hidden="true">↗</span></Link>
            <Link className="card" to="/services/ux-ui">UX/UI design <span aria-hidden="true">↗</span></Link>
            <Link className="card" to="/services/app-development">App development <span aria-hidden="true">↗</span></Link>
          </div>
        </section>
      </div>

      <style>{`
        .work-page__project figure{margin:1.5rem 0 1.75rem;border-radius:var(--r-m);overflow:hidden;background:var(--bg-elev)}
        .work-page__project img{display:block;width:100%;height:auto;aspect-ratio:2048/1541;object-fit:cover}
      `}</style>
    </article>
  )
}
