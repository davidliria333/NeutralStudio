import { PORTFOLIO_CATEGORIES, UXUI_SCENES } from '../data/portfolio.js'
import './PortfolioShowcase.css'

export default function PortfolioShowcase() {
  return (
    <section
      className="ns-portfolio"
      id="portfolio"
      data-sc-act="pin"
      data-sc-span="2.6"
      data-sc-drift="#0b0c0f"
      aria-labelledby="portfolio-title"
    >
      <div className="ns-portfolio-stage" data-sc-stage>
        <div className="ns-portfolio-grid" aria-hidden="true" />

        <div className="ns-portfolio-categories" aria-label="Portfolio categories">
          <span className="ns-portfolio-label">Portfolio</span>
          <ul>
            {PORTFOLIO_CATEGORIES.map((category) => (
              <li key={category.id}>
                {category.available ? (
                  <span className="ns-portfolio-category-active" aria-current="page">
                    {category.label}
                  </span>
                ) : (
                  <span>{category.label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="ns-portfolio-intro" data-sc-cue="0 0.18 0 0.2">
          <p className="ns-index">Selected UX/UI</p>
          <h2 id="portfolio-title">Interfaces that make the idea tangible.</h2>
          <p>Digital products shaped with clarity, character and enough energy to be remembered.</p>
        </div>

        <div className="ns-portfolio-media" id="portfolio-uxui">
          {UXUI_SCENES.map((scene) => (
            <figure
              className={`ns-portfolio-scene${scene.images.length > 1 ? ' ns-portfolio-scene--pair' : ''}`}
              data-sc-cue={scene.cue}
              data-sc-rise="0"
              key={scene.id}
            >
              <div className="ns-portfolio-frame">
                {scene.images.map((image) => (
                  <div className="ns-portfolio-image" key={image.src}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      decoding="sync"
                    />
                  </div>
                ))}
              </div>
            </figure>
          ))}
        </div>

        <div className="ns-portfolio-foot" aria-hidden="true">
          <span>Product thinking</span>
          <span>Interface systems</span>
          <span>Interaction direction</span>
        </div>
      </div>
    </section>
  )
}
