import './InfoPage.css'

export default function Privacy() {
  return (
    <article className="info-page">
      <div className="container info-page__header">
        <div className="eyebrow">Last updated 27 August 2026</div>
        <h1 className="h1">Privacy policy.</h1>
        <p className="lead">This policy explains what information Neutral Studio receives through this website, why it is used and how to ask a privacy question.</p>
      </div>

      <div className="container info-page__body">
        <section className="info-page__section">
          <h2>Who is responsible</h2>
          <p>Neutral Studio, an independent design practice based in Barcelona, is responsible for the website at neutraldesign.es. Privacy and data requests can be sent to <a href="mailto:arnaupinyolwork@gmail.com">arnaupinyolwork@gmail.com</a>.</p>
        </section>

        <section className="info-page__section">
          <h2>Website analytics</h2>
          <p>The site uses Umami Cloud to measure aggregate visits and interactions such as opening the booking link, selecting a service, changing a portfolio category or using an email link. The analytics script is configured to respect the browser Do Not Track preference.</p>
          <p>Neutral Studio uses this information to understand whether the website works and which content helps visitors. It is not used for advertising profiles, and Neutral Studio does not sell website analytics data.</p>
        </section>

        <section className="info-page__section">
          <h2>Email and project enquiries</h2>
          <p>If you contact the studio by email, the message, contact details and any information you choose to send are used to answer the enquiry, prepare a proposal or manage a potential or active project. Please do not send confidential credentials, regulated personal data or production secrets through an initial email.</p>
          <p>Enquiry and project records are kept only for as long as they are needed for the conversation, contractual responsibilities, legitimate business records and applicable legal obligations.</p>
        </section>

        <section className="info-page__section">
          <h2>External services</h2>
          <p>Booking links open Cal.com in a separate service. Email links open the visitor’s chosen mail application. LinkedIn links open LinkedIn. Those providers process information under their own terms and privacy policies; Neutral Studio does not control their independent processing.</p>
        </section>

        <section className="info-page__section">
          <h2>Your choices and rights</h2>
          <p>Depending on applicable law, you may ask for access, correction, deletion, restriction or portability of personal information, or object to a use based on legitimate interests. You can also enable Do Not Track in your browser before visiting the site.</p>
          <p>Send requests to <a href="mailto:arnaupinyolwork@gmail.com?subject=Privacy%20request%20-%20Neutral%20Studio">arnaupinyolwork@gmail.com</a>. A request may require reasonable identity verification before information is disclosed or changed.</p>
        </section>
      </div>
    </article>
  )
}
