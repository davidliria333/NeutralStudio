import rewardsWallet from '../../UXUI/111e0525ab9e35701b9658e05f7dd408.webp'
import foodDelivery from '../../UXUI/2cf1e97f902a3f48fc5dcaf8b191f2f4.webp'
import nutrition from '../../UXUI/3c397b0bfe179f21d1619e6b83076935.webp'
import banking from '../../UXUI/3e5df3f14ce4d721d7a349aedfc7450a.webp'
import academy from '../../UXUI/469b0e47e5c3968cf6f6d718a017aa6f.webp'
import smartHome from '../../UXUI/73af2fada3b8db9e9e05beed86559843.webp'
import health from '../../UXUI/e988f543eb494eccd7dd549cfd933223.webp'

export const PORTFOLIO_CATEGORIES = [
  { id: 'ux-ui', label: 'UX/UI', available: true },
  { id: 'web', label: 'Web', available: false },
  { id: 'branding', label: 'Branding', available: false },
  { id: 'motion', label: 'Motion', available: false },
]

export const UXUI_SCENES = [
  {
    id: 'rewards-wallet',
    cue: '0.08 0.35 0.25 0.35',
    images: [
      {
        src: rewardsWallet,
        alt: 'Reward, gaming and wallet mobile interfaces presented across four screens.',
        width: 2048,
        height: 1536,
      },
    ],
  },
  {
    id: 'food-systems',
    cue: '0.27 0.52 0.25 0.35',
    images: [
      {
        src: foodDelivery,
        alt: 'Food delivery interface showing discovery, product details and order tracking.',
        width: 2048,
        height: 1723,
      },
      {
        src: nutrition,
        alt: 'Nutrition interface showing daily intake and a detailed meal view.',
        width: 2048,
        height: 1536,
      },
    ],
  },
  {
    id: 'digital-banking',
    cue: '0.47 0.72 0.25 0.35',
    images: [
      {
        src: banking,
        alt: 'Digital banking interface showing onboarding, balances and account management.',
        width: 2048,
        height: 1723,
      },
    ],
  },
  {
    id: 'character-and-control',
    cue: '0.67 0.91 0.25 0.35',
    images: [
      {
        src: academy,
        alt: 'Bold academy application with yellow, cyan and black interface screens.',
        width: 2048,
        height: 1536,
      },
      {
        src: smartHome,
        alt: 'Smart home interface showing onboarding, room controls and connected devices.',
        width: 2048,
        height: 1536,
      },
    ],
  },
  {
    id: 'connected-health',
    cue: '0.86 1 0.25 0',
    images: [
      {
        src: health,
        alt: 'Connected health interface showing status, diagnostics and appointment booking.',
        width: 2048,
        height: 1536,
      },
    ],
  },
]
