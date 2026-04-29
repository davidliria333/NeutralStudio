import ServiceLayout from '../../components/ServiceLayout.jsx'

export default function Web() {
  return (
    <ServiceLayout
      badge="Web & digital"
      title="A marketing site"
      accent="that matches your deck and product."
      intro="Launch-ready web design with information architecture, responsive layouts, and component thinking, organized so engineering can ship without guessing."
      painPoints={[
        'Fragmented layouts that don\'t feel like one site.',
        'Poor visual hierarchy, no clear scroll story.',
        'Mobile experience falls apart at smaller breakpoints.',
        'Unclear handoff specs slow engineering down.',
        'Scope creep mid-build when "just one more page" appears.',
        'Inconsistent decisions between hero, pricing, and footer.',
      ]}
      deliverables={[
        { t: 'Information architecture', d: 'Page list, scroll plan, and navigation logic before pixels.' },
        { t: 'Responsive layouts', d: 'Mobile, tablet, desktop, and ultrawide breakpoints designed.' },
        { t: 'Component thinking', d: 'Reusable blocks so the next page doesn\'t start from scratch.' },
        { t: 'Art direction', d: 'Photography, illustration, and motion guidance per section.' },
        { t: 'Handoff notes', d: 'Specs, edge cases, and copy variants for engineering.' },
        { t: 'Launch-ready scope', d: 'A defined v1 you can actually ship in weeks.' },
      ]}
      results={[
        { metric: 'Clear', quote: 'Specs were the cleanest handoff our team has had.', who: 'Engineering lead' },
        { metric: '+38%', quote: 'Mobile bounce dropped after the rebuild.', who: 'Growth marketer' },
        { metric: 'One', quote: 'Visual story across deck, site, and product, finally.', who: 'CMO, B2B' },
      ]}
    />
  )
}
