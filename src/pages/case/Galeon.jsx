import CaseLayout from '../../components/CaseLayout.jsx'

export default function Galeon() {
  return (
    <CaseLayout
      title="Galeón"
      tags={['Heritage & culture', 'Public sector', 'Identity', 'Motion & video', 'Spain']}
      hero="/Galeon/Treball-01.png"
      intro="Visual identity and brand applications for Galeón, within the context of Patrimonio Nacional, Spain's public institution for the Crown's historic and artistic heritage. The project covers the full identity system and its applications across touchpoints."
      sections={[
        {
          label: 'Identity',
          title: 'A system rooted in heritage',
          cols: 2,
          aspect: '4/3',
          images: [
            '/Galeon/Treball_Mesa%20de%20trabajo%201%20copia.png',
            '/Galeon/Treball_Mesa%20de%20trabajo%201%20copia%202.png',
            '/Galeon/Treball_Mesa%20de%20trabajo%201%20copia%204.png',
            '/Galeon/Treball-01.png',
          ],
        },
      ]}
    />
  )
}
