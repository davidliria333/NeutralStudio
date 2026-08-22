export default function Hero() {
  return (
    <section className="otherkind-hero" aria-label="Neutral Studio">
      <img
        className="otherkind-hero__art"
        src="/otherkind-hero.svg"
        alt="Neutral Studio"
      />

      <style>{`
        .otherkind-hero {
          position: relative;
          display: flex;
          width: 100%;
          min-height: 100svh;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #f5f3ed;
        }

        .otherkind-hero__art {
          display: block;
          width: 100%;
          height: auto;
          aspect-ratio: 8 / 3;
          max-width: none;
          flex: none;
        }

        @media (max-width: 760px) {
          .otherkind-hero__art {
            width: 178%;
          }
        }
      `}</style>
    </section>
  )
}

