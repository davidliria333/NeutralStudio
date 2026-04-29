import ServiceLayout from '../../components/ServiceLayout.jsx'

export default function Systems() {
  return (
    <ServiceLayout
      badge="Systems & guidelines"
      title="One system."
      accent="Every touchpoint aligned."
      intro="A documented design system that keeps deck, site, and product visually coherent: tokens, components, and rules your team can actually follow."
      painPoints={[
        'Consistency issues across deck, web, and product.',
        'Mismatched styles between marketing and in-product UI.',
        'No documented system, decisions live in someone\'s head.',
        'Scattered assets, contractors guess at brand standards.',
        'Unclear guidance on type, color, or spacing.',
      ]}
      deliverables={[
        { t: 'Type & hierarchy', d: 'Display, headline, body, and micro scales with line-height tokens.' },
        { t: 'Color & accessibility', d: 'Tokens that pass contrast checks for product and marketing.' },
        { t: 'UI components', d: 'Buttons, inputs, cards, modals — primitives ready for engineering.' },
        { t: 'Logo & spacing', d: 'Clear-space rules, minimum sizes, lockup variants.' },
        { t: 'Deck & web alignment', d: 'Shared tokens between Figma slides and the site.' },
        { t: 'Handoff format', d: 'Tokens exported as JSON / CSS variables, ready to paste.' },
      ]}
      results={[
        { metric: '85%', quote: 'Faster compliance checks across new pages and assets.', who: 'Marketing lead' },
        { metric: '23%', quote: 'More inconsistencies caught earlier with documented rules.', who: 'Design ops' },
        { metric: '60%', quote: 'Less manual work because contractors finally have a source of truth.', who: 'Head of brand' },
      ]}
      beforeAfter={[
        { what: 'Page rebuild', before: 'Days of style drift', after: 'Hours with token system' },
        { what: 'Brand audit', before: 'Manual case-by-case', after: 'Automated against tokens' },
        { what: 'New hire onboarding', before: 'Weeks of context', after: 'A doc + a Figma file' },
      ]}
    />
  )
}
