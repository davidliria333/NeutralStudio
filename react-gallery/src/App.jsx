import DomeGallery from './components/DomeGallery';

const portfolioImages = [
  {
    src: new URL('../../assets/hero-cards/algo_2-15-21c9f4dc-2f52-499a-bb67-e6412ed61a27.png', import.meta.url).href,
    alt: 'Neutral Studio portfolio preview'
  },
  {
    src: new URL('../../assets/hero-cards/algo_2-20-93aad289-d918-470d-ab61-e11f174e2a32.png', import.meta.url).href,
    alt: 'Brand system presentation'
  },
  {
    src: new URL('../../assets/hero-cards/algo_2-06-de3767e1-241e-488d-b041-f62bd5701b17.png', import.meta.url).href,
    alt: 'Website design composition'
  },
  {
    src: new URL('../../assets/hero-cards/algo_2-17-c6fcd7a6-898c-4067-9f03-85fd450e2d34.png', import.meta.url).href,
    alt: 'Editorial deck spread'
  },
  {
    src: new URL('../../assets/hero-cards/algo_2-10-a4cdd1ff-b2dd-4fbb-8355-32645226fe07.png', import.meta.url).href,
    alt: 'Mobile product mockup'
  },
  {
    src: new URL('../../assets/hero-cards/algo_2-12-4f3e0557-1609-4658-b763-5264375269d3.png', import.meta.url).href,
    alt: 'Identity detail board'
  },
  {
    src: new URL('../../assets/hero-cards/algo_2-13-c687ff5f-8bbf-44b3-ad70-eb7b66a5f6f2.png', import.meta.url).href,
    alt: 'Landing page exploration'
  },
  {
    src: new URL('../../assets/hero-cards/algo_2-14-020cf5a3-e3bb-44e3-a70f-257d7b588305.png', import.meta.url).href,
    alt: 'Presentation mockup'
  },
  {
    src: new URL('../../assets/hero-cards/algo_2-11-10a9067f-7d42-45ab-bb51-a7074c9ce042.png', import.meta.url).href,
    alt: 'Startup brand visuals'
  },
  {
    src: new URL('../../assets/hero-cards/algo_2-07-59833d53-7a11-4633-9d74-3fa077d4e98a.png', import.meta.url).href,
    alt: 'Product marketing artwork'
  }
];

export default function App() {
  return (
    <div className="app-shell">
      <div className="app-copy">
        <p className="app-kicker">React Bits Integration</p>
        <h1>DomeGallery wired into a standalone React module for Neutral Studio.</h1>
        <p>
          This isolated Vite app lets you reuse the gallery with local portfolio imagery without changing the current
          static landing page.
        </p>
      </div>

      <div className="gallery-panel">
        <DomeGallery
          images={portfolioImages}
          fit={0.7}
          segments={22}
          grayscale={false}
          padFactor={0.18}
          overlayBlurColor="#0d0b12"
          openedImageWidth="320px"
          openedImageHeight="440px"
          imageBorderRadius="24px"
          openedImageBorderRadius="28px"
        />
      </div>
    </div>
  );
}
