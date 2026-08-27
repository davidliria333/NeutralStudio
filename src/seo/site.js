export const SITE_URL = 'https://www.neutralstudio.co'
export const SITE_NAME = 'Neutral Studio'
export const CONTACT_EMAIL = 'arnaupinyolwork@gmail.com'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/arnau-pi%C3%B1ol-olabegoya-722329158/'
export const PALSEC_LINKEDIN_URL = 'https://www.linkedin.com/company/palsec-agency/'
export const OG_IMAGE = `${SITE_URL}/generated/neutral-landscape/neutral-landscape-desktop-poster.jpg`
export const OG_IMAGE_WIDTH = '1920'
export const OG_IMAGE_HEIGHT = '1080'

export const ROUTE_META = {
  '/': {
    title: 'Brand, Product & Web Design Studio | Neutral Studio',
    description: 'Neutral Studio brings strategy, brand, product and web into one clear system for startups launching, evolving or finding their next direction.',
    label: 'Home',
    type: 'home',
  },
  '/services': {
    title: 'Design Services for US Startups | Neutral Studio',
    description: 'Explore connected brand, product, web, pitch deck and app development services for startups in the United States and worldwide.',
    label: 'Services',
    type: 'services-hub',
  },
  '/services/brand': {
    title: 'Startup Brand Identity Design | Neutral Studio',
    description: 'Build a coherent startup identity across logo, typography, color, launch assets and practical brand guidelines your whole team can use.',
    label: 'Brand identity',
    type: 'service',
    serviceType: 'Brand identity design',
    price: 2990,
  },
  '/services/systems': {
    title: 'Design Systems for Startups | Neutral Studio',
    description: 'Align brand, product and marketing with reusable design tokens, interface components and clear guidelines for teams and partners.',
    label: 'Design systems',
    type: 'service',
    serviceType: 'Design systems and brand guidelines',
  },
  '/services/web': {
    title: 'Startup Web Design & Development | Neutral Studio',
    description: 'Plan, design and build a responsive startup website with a clear narrative, reusable components and a launch-ready technical handoff.',
    label: 'Web design',
    type: 'service',
    serviceType: 'Web design and development',
    price: 1990,
  },
  '/services/pitch-deck': {
    title: 'Pitch Deck Design for Startups | Neutral Studio',
    description: 'Turn your strategy into a focused investor or sales deck with a clear story, credible data visuals and reusable slide templates.',
    label: 'Pitch deck design',
    type: 'service',
    serviceType: 'Pitch deck design',
  },
  '/services/ux-ui': {
    title: 'UX/UI Design for US Startups | Neutral Studio',
    description: 'Shape product flows, interfaces and prototypes around real user needs, business priorities and a design system ready for development.',
    label: 'UX/UI design',
    type: 'service',
    serviceType: 'UX and UI design',
    price: 3990,
  },
  '/services/app-development': {
    title: 'App Design & Development for Startups | Neutral Studio',
    description: 'Take a digital product from scope and interaction design to a production-ready app with one connected design and development process.',
    label: 'App development',
    type: 'service',
    serviceType: 'Application design and development',
    price: 9990,
  },
  '/about': {
    title: 'About the Independent Design Studio | Neutral Studio',
    description: 'Meet Neutral Studio, an independent remote design practice connecting strategy, identity, digital products, websites and motion.',
    label: 'About',
    type: 'about',
  },
  '/work': {
    title: 'Selected Brand, Product & Web Design Work | Neutral Studio',
    description: 'Inspect selected Neutral Studio identity, interface and launch work, with clear notes on the design decisions connecting each system.',
    label: 'Selected work',
    type: 'work',
  },
  '/guides/startup-design-costs': {
    title: 'Startup Design Costs: 2026 Pricing Guide | Neutral Studio',
    description: 'Compare real starting prices for startup branding, websites, UX/UI and app development, plus the scope decisions that change the final cost.',
    label: 'Startup design costs',
    type: 'article',
    datePublished: '2026-08-27',
    dateModified: '2026-08-27',
  },
  '/contact': {
    title: 'Contact the Startup Design Studio | Neutral Studio',
    description: 'Contact Neutral Studio about brand, product, web, pitch deck or app work for a US startup or international product team.',
    label: 'Contact',
    type: 'contact',
  },
  '/privacy': {
    title: 'Privacy Policy | Neutral Studio',
    description: 'How Neutral Studio handles website analytics, email enquiries, external booking links and privacy requests.',
    label: 'Privacy policy',
    type: 'policy',
  },
  '/legal': {
    title: 'Legal Notice | Neutral Studio',
    description: 'Website ownership, acceptable use, intellectual property and contact information for Neutral Studio.',
    label: 'Legal notice',
    type: 'policy',
  },
}

export const INDEXABLE_ROUTES = Object.keys(ROUTE_META)

export const SERVICE_LINKS = INDEXABLE_ROUTES
  .filter((path) => ROUTE_META[path].type === 'service')
  .map((path) => ({ path, ...ROUTE_META[path] }))

export function normalizePath(pathname = '/') {
  const withoutTrailingSlash = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname
  if (withoutTrailingSlash === '/services/consulting') return '/services/pitch-deck'
  return withoutTrailingSlash || '/'
}

export function getRouteMeta(pathname) {
  const path = normalizePath(pathname)
  const meta = ROUTE_META[path]
  if (meta) return { ...meta, path, canonical: `${SITE_URL}${path === '/' ? '/' : path}` }
  return {
    title: 'Page not found | Neutral Studio',
    description: 'The requested page could not be found. Return to Neutral Studio to explore our design services and selected work.',
    label: 'Page not found',
    type: 'not-found',
    path,
    canonical: `${SITE_URL}${path}`,
    noCanonical: true,
    noindex: true,
  }
}

const organization = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: 'Neutral Studio by Arnau Piñol',
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/brand-favicon.svg`,
  email: CONTACT_EMAIL,
  description: 'Independent design studio connecting strategy, brand, product, web and motion.',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    email: CONTACT_EMAIL,
    url: `${SITE_URL}/contact`,
    availableLanguage: 'English',
    areaServed: [
      { '@type': 'Country', name: 'United States' },
      'Worldwide',
    ],
  },
  founder: {
    '@type': 'Person',
    '@id': `${SITE_URL}/about#arnau-pinol`,
    name: 'Arnau Piñol',
    jobTitle: 'Designer and founder of Neutral Studio',
    url: `${SITE_URL}/about`,
    sameAs: [LINKEDIN_URL],
    knowsAbout: ['Brand identity design', 'UX and UI design', 'Web design', 'Digital product design'],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'ESDAP - Escola Superior de Disseny i d’Arts Plàstiques',
    },
    affiliation: {
      '@type': 'Organization',
      name: 'Palsec Agency',
      sameAs: PALSEC_LINKEDIN_URL,
    },
  },
}

export function getSchemas(pathname) {
  const meta = getRouteMeta(pathname)
  const graph = []

  if (meta.type === 'home') {
    graph.push(organization, {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'en-US',
    })
  }

  if (meta.type === 'service') {
    const service = {
      '@type': 'Service',
      '@id': `${meta.canonical}#service`,
      name: meta.serviceType,
      serviceType: meta.serviceType,
      description: meta.description,
      url: meta.canonical,
      provider: organization,
      areaServed: [
        { '@type': 'Country', name: 'United States' },
        'Worldwide',
      ],
    }
    if (meta.price) {
      service.offers = {
        '@type': 'Offer',
        priceCurrency: 'EUR',
        price: String(meta.price),
        description: `Projects start from €${meta.price.toLocaleString('en-US')}. Final scope and price are agreed before work begins.`,
        url: meta.canonical,
      }
    }
    graph.push(service, {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
        { '@type': 'ListItem', position: 3, name: meta.label, item: meta.canonical },
      ],
    })
  }

  if (meta.type === 'services-hub') {
    graph.push({
      '@type': 'CollectionPage',
      '@id': `${meta.canonical}#page`,
      name: meta.title,
      description: meta.description,
      url: meta.canonical,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: 'Design services for startups',
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: SERVICE_LINKS.map(({ path, label, description }, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: label,
          description,
          url: `${SITE_URL}${path}`,
        })),
      },
      inLanguage: 'en-US',
    })
  }

  if (meta.type === 'about') {
    graph.push({
      '@type': 'AboutPage',
      '@id': `${meta.canonical}#page`,
      name: meta.title,
      description: meta.description,
      url: meta.canonical,
      about: organization,
      mainEntity: organization.founder,
      inLanguage: 'en-US',
    })
  }

  if (meta.type === 'work') {
    graph.push({
      '@type': 'CollectionPage',
      '@id': `${meta.canonical}#page`,
      name: meta.title,
      description: meta.description,
      url: meta.canonical,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: ['Brand identity design', 'UX and UI design', 'Web design'],
      inLanguage: 'en-US',
    })
  }

  if (meta.type === 'article') {
    graph.push({
      '@type': 'Article',
      '@id': `${meta.canonical}#article`,
      headline: meta.title.replace(` | ${SITE_NAME}`, ''),
      description: meta.description,
      url: meta.canonical,
      mainEntityOfPage: meta.canonical,
      datePublished: meta.datePublished,
      dateModified: meta.dateModified,
      author: organization.founder,
      publisher: organization,
      image: OG_IMAGE,
      inLanguage: 'en-US',
      about: ['Startup design costs', 'Brand identity design', 'Web design', 'UX and UI design', 'App development'],
    }, {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
        { '@type': 'ListItem', position: 3, name: meta.label, item: meta.canonical },
      ],
    })
  }

  if (meta.type === 'contact') {
    graph.push({
      '@type': 'ContactPage',
      '@id': `${meta.canonical}#page`,
      name: meta.title,
      description: meta.description,
      url: meta.canonical,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: organization,
      mainEntity: organization.contactPoint,
      inLanguage: 'en-US',
    })
  }

  if (meta.type === 'policy') {
    graph.push({
      '@type': 'WebPage',
      '@id': `${meta.canonical}#page`,
      name: meta.label,
      description: meta.description,
      url: meta.canonical,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      inLanguage: 'en-US',
    })
  }

  if (!graph.length) return []
  return [{ '@context': 'https://schema.org', '@graph': graph }]
}
