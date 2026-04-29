import ServiceLayout from '../../components/ServiceLayout.jsx'

export default function Brand() {
  return (
    <ServiceLayout
      badge="Brand & identity"
      title="A visual system"
      accent="investors and users believe."
      intro="Identity that scales with the company: logo, type, color, and patterns documented as a system you can hand to engineering, marketing, or your next hire."
      painPoints={[
        'Outdated identity that no longer matches the product.',
        'Mismatched styles between deck, web, and social.',
        'No documented system, every new asset reinvents the wheel.',
        'Scattered files across tools, drives, and contractors.',
        'Scope uncertainty when an agency quotes a brand sprint.',
        'Hiring a senior brand designer takes months you don\'t have.',
      ]}
      deliverables={[
        { t: 'Logo & wordmark', d: 'Primary mark, monogram, lockups, and lockup spacing rules.' },
        { t: 'Typography system', d: 'Display + text pair, scale, weights, and usage tokens.' },
        { t: 'Color palette', d: 'Brand colors, neutrals, accessibility-checked tokens for product + marketing.' },
        { t: 'Brand patterns', d: 'Visual motifs, photography direction, illustration system if needed.' },
        { t: 'Social & deck templates', d: 'Editable masters for organic, ads, and investor decks.' },
        { t: 'File handoff', d: 'Source files, exports, and a lightweight guideline doc.' },
      ]}
      results={[
        { metric: 'Aligned', quote: 'Deck, site, and social finally read like the same company.', who: 'B2B SaaS founder' },
        { metric: 'Tokens', quote: 'Engineering picked up the brand colors and shipped them in a sprint.', who: 'DevTools head of product' },
        { metric: 'Predictable', quote: 'Fixed scope, fixed price. We knew what we were getting.', who: 'AI infra CEO' },
      ]}
    />
  )
}
