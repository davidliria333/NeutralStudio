import CaseLayout from '../../components/CaseLayout.jsx'

export default function Arkuos() {
  return (
    <CaseLayout
      title="Arkuos"
      tags={['Nonprofit', 'Education', 'Identity', 'Campaign', 'Social impact']}
      hero="/David/ARKUOS/campaign-hero.png"
      intro="Arkuos is a socio-educational action space. We built a visual identity around its warm symbol: yellow, orange, and red strokes that meet in a clear centre, black wordmark, and a tagline that states the mission in one line. Deliverables include the full logo lockup, the geometric mark, campaign art direction, and digital-ready assets aligned with arkuos.org."
      externalUrl="https://www.arkuos.org"
      domeImages={[
        { src: '/David/ARKUOS/campaign-hero.png', alt: 'Arkuos campaign visual' },
        { src: '/David/ARKUOS/logo-lockup.png', alt: 'Arkuos logo lockup' },
        { src: '/David/ARKUOS/mark-geometry.png', alt: 'Arkuos symbol geometry' },
        { src: '/David/ARKUOS/collaboration.png', alt: 'Arkuos collaboration artwork' },
      ]}
      sections={[
        { label: 'Logo', title: 'Logo & wordmark', cols: 1, aspect: '21/9', images: ['/David/ARKUOS/logo-lockup.png'] },
        { label: 'Symbol', title: 'Symbol & geometry', cols: 1, aspect: '21/9', images: ['/David/ARKUOS/mark-geometry.png'] },
        { label: 'Campaign', title: 'Campaign & photography', cols: 1, aspect: '21/9', images: ['/David/ARKUOS/campaign-hero.png'] },
      ]}
    />
  )
}
