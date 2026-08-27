import { Link } from 'react-router-dom'
import './InfoPage.css'

export default function NotFound() {
  return (
    <article className="info-page">
      <div className="container info-page__header">
        <div className="eyebrow">404</div>
        <h1 className="h1">This path ends here.</h1>
        <p className="lead">The page may have moved or never existed. Return to the studio to explore the work and services.</p>
        <Link className="btn btn--primary" to="/" style={{ marginTop: 28 }}>Return to Neutral Studio <span className="arrow">→</span></Link>
      </div>
    </article>
  )
}
