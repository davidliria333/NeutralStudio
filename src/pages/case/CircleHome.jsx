import CaseLayout from '../../components/CaseLayout.jsx'

export default function CircleHome() {
  return (
    <CaseLayout
      title="CircleHome"
      tags={['IoT & smart home', 'Startup', 'Identity', 'Web & launch', 'Pitch deck']}
      hero="/David/CIRCLEHOME/We%20are%20live.jpg"
      intro="We built the full identity system for this connected-home startup: mockups, investor pitch deck, and web, alongside a flexible logo system, product-line art direction for CirclePass and CircleSafe, and launch-ready campaign visuals so the brand reads clearly everywhere. With our design and redesign, the team has closed two funding rounds."
      sections={[
        {
          label: 'Logos',
          title: 'Logos & marks',
          cols: 3, aspect: '4/3',
          images: ['/David/CIRCLEHOME/Logos-01.png', '/David/CIRCLEHOME/Logos-05.png', '/David/CIRCLEHOME/Logos-06.png'],
        },
        {
          label: 'Launch',
          title: 'Launch & key visuals',
          cols: 2, aspect: '4/3',
          images: [
            '/David/CIRCLEHOME/We%20are%20live.jpg',
            '/David/CIRCLEHOME/MockUp_3.png',
            '/David/CIRCLEHOME/003.jpg',
            '/David/CIRCLEHOME/2-02.jpg',
            '/David/CIRCLEHOME/flatten.jpg',
          ],
        },
        {
          label: 'CirclePass',
          title: 'CirclePass product art direction',
          cols: 2, aspect: '4/3',
          images: [
            '/David/CIRCLEHOME/CirclePass/009_Treball%204-01.jpg',
            '/David/CIRCLEHOME/CirclePass/009_Treball%204-02.jpg',
            '/David/CIRCLEHOME/CirclePass/009_Treball%204-03.jpg',
            '/David/CIRCLEHOME/CirclePass/009_Treball%204-04.jpg',
            '/David/CIRCLEHOME/CirclePass/009_Treball%204-05.jpg',
          ],
        },
        {
          label: 'CircleSafe',
          title: 'CircleSafe product art direction',
          cols: 3, aspect: '4/3',
          images: [
            '/David/CIRCLEHOME/CircleSafe/1.jpg',
            '/David/CIRCLEHOME/CircleSafe/2.jpg',
            '/David/CIRCLEHOME/CircleSafe/3.jpg',
            '/David/CIRCLEHOME/CircleSafe/4.jpg',
            '/David/CIRCLEHOME/CircleSafe/5.jpg',
          ],
        },
      ]}
    />
  )
}
