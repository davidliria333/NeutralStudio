import './InfoPage.css'

export default function Legal() {
  return (
    <article className="info-page">
      <div className="container info-page__header">
        <div className="eyebrow">Legal information</div>
        <h1 className="h1">Legal notice.</h1>
        <p className="lead">Terms for using the Neutral Studio website and the ownership of its content.</p>
      </div>

      <div className="container info-page__body">
        <section className="info-page__section">
          <h2>Website operator</h2>
          <p>This website is operated by Neutral Studio, an independent design practice based in Barcelona and led by Arnau Piñol. Contact: <a href="mailto:arnaupinyolwork@gmail.com">arnaupinyolwork@gmail.com</a>.</p>
          <p>Requests for additional statutory identification connected to a formal engagement can be made through the same contact address.</p>
        </section>

        <section className="info-page__section">
          <h2>Purpose and acceptable use</h2>
          <p>The site presents Neutral Studio’s services, working approach and selected design work. Visitors may browse and share links to public pages for lawful informational purposes.</p>
          <p>Automated access must not disrupt the service, attempt to bypass security, collect personal information, reproduce protected project materials at scale or present Neutral Studio’s work as another party’s work.</p>
        </section>

        <section className="info-page__section">
          <h2>Intellectual property</h2>
          <p>Unless a project credit states otherwise, the website design, written content and Neutral Studio identity are protected by applicable intellectual-property law. Portfolio materials may also contain rights belonging to clients, collaborators, product owners, photographers or other creators.</p>
          <p>Viewing work on this site does not grant permission to reuse, modify, sell, train a commercial asset library on, or redistribute that work. Permission requests can be sent by email.</p>
        </section>

        <section className="info-page__section">
          <h2>Information and external links</h2>
          <p>Neutral Studio aims to keep public information accurate, but service descriptions and starting prices are not binding proposals. Scope, timing, responsibilities, third-party costs and final price are confirmed in a written agreement.</p>
          <p>External services such as Cal.com and LinkedIn operate independently. A link does not make Neutral Studio responsible for their availability, security, content or data practices.</p>
        </section>

        <section className="info-page__section">
          <h2>Changes and contact</h2>
          <p>This notice may change when the website, services or legal requirements change. Material updates will be reflected by the revision date where appropriate. Questions about the website or use of its content can be sent to <a href="mailto:arnaupinyolwork@gmail.com?subject=Legal%20question%20-%20Neutral%20Studio">arnaupinyolwork@gmail.com</a>.</p>
        </section>
      </div>
    </article>
  )
}
