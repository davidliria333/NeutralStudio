import CaseLayout from '../../components/CaseLayout.jsx'

export default function Vira() {
  return (
    <CaseLayout
      title="Vira"
      tags={['Startup', 'App UI & content', 'Identity', 'Promo & app', 'Typography']}
      hero="/David/VIRA/PDF-04.png"
      intro="For Vira we designed the app and all of its content, every screen and in-product message, alongside a complete identity and full brand applications across touchpoints. We also created promotional and in-app presentation materials: disciplined typography, layout grids, and slide-by-slide storytelling that stays legible in the room and on a laptop."
      sections={[
        { label: 'Logo', title: 'Logo system', cols: 1, aspect: '16/9', images: ['/David/VIRA/00_logo.png'] },
        {
          label: 'App + Promo',
          title: 'Promotional & app content',
          cols: 1,
          aspect: '16/10',
          images: [
            '/David/VIRA/PDF-04.png',
            '/David/VIRA/PDF-05.png',
            '/David/VIRA/PDF-07.png',
            '/David/VIRA/PDF-08.png',
            '/David/VIRA/PDF-09.png',
            '/David/VIRA/PDF-10.png',
            '/David/VIRA/PDF-12.png',
            '/David/VIRA/PDF-13.png',
          ],
        },
      ]}
    />
  )
}
