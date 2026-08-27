import ServiceLayout from '../../components/ServiceLayout.jsx'

export default function Systems() {
  return (
    <ServiceLayout
      badge="Systems & guidelines"
      title="One system."
      accent="Every touchpoint aligned."
      intro="A documented design system that keeps deck, site, and product visually coherent: tokens, components, and rules your team can actually follow."
      currentPath="/services/systems"
      decisionGuide={{
        title: 'What a design system must make easier.',
        paragraphs: [
          'A design system is worth building when repeated product and brand decisions are slowing delivery or creating visible inconsistency. The starting point is not a component inventory; it is evidence about where teams duplicate work, where implementation diverges and which changes are hardest to propagate. That evidence helps define a system with a real adoption purpose instead of an abstract library project.',
          'We also clarify the products, technologies and contributors the system must support. A small product team may need a focused foundation and a handful of proven patterns, while a multi-product organization may need contribution rules, versioning and clearer governance. The right scope balances consistency with the cost of maintaining another internal product.',
          'Adoption is planned as part of delivery. We decide whether existing interfaces will be migrated immediately, improved when touched or left outside the first system boundary. Documentation examples use the team\'s real content and implementation patterns, so designers and engineers can judge when to reuse a component, when to extend it and when a new pattern is justified.',
          'The result should shorten ordinary product decisions while making exceptional ones easier to discuss, review and document consistently across disciplines.',
        ],
        points: [
          'The interfaces, brands and codebases that share decisions today.',
          'The highest-cost inconsistencies and the workflows causing them.',
          'Token, component, documentation and accessibility requirements.',
          'Ownership, contribution, release and adoption responsibilities after delivery.',
        ],
      }}
      overview={[
        'A useful design system reduces repeated decisions without forcing every surface to look identical. We identify the patterns shared by brand, marketing and product, then define the smallest set of tokens, components and rules that can keep those surfaces aligned.',
        'The work is shaped around how the team already designs and builds. A lightweight system for a small startup should not imitate an enterprise library. It should make current work faster, clarify ownership and leave a clear path for the system to grow as new pages, flows and contributors appear.',
      ]}
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
        { t: 'UI components', d: 'Buttons, inputs, cards, modals: primitives ready for engineering.' },
        { t: 'Logo & spacing', d: 'Clear-space rules, minimum sizes, lockup variants.' },
        { t: 'Deck & web alignment', d: 'Shared tokens between Figma slides and the site.' },
        { t: 'Handoff format', d: 'Tokens exported as JSON / CSS variables, ready to paste.' },
      ]}
      process={[
        { title: 'Audit the current system', description: 'We map repeated styles, components, files and handoff points across brand, marketing and product to find duplication and conflicting rules.' },
        { title: 'Define the foundations', description: 'We establish naming, typography, color, spacing and component principles, then test them against representative screens and content.' },
        { title: 'Package adoption', description: 'We organize the library, documentation and technical tokens around the tools and responsibilities of the people who will maintain them.' },
      ]}
      engagement={{
        title: 'Built for adoption, not display',
        paragraphs: [
          'The most complete library is not automatically the most useful. We prioritize foundations and components that remove real friction now, then document how new patterns should be evaluated and added later.',
          'Design and engineering stakeholders review the system together. This keeps visual decisions realistic, exposes edge cases early and avoids a handoff that exists only inside a design file.',
        ],
        points: ['Audit of current files and implementation', 'Shared naming and token structure', 'Representative responsive components and states', 'Maintenance rules, ownership and handoff notes'],
      }}
      questions={[
        { question: 'Is this a brand system or a product design system?', answer: 'It can cover either or connect both. Scope starts with the surfaces creating the most inconsistency and defines which foundations should be shared.' },
        { question: 'Do you deliver code?', answer: 'Technical tokens and implementation-ready specifications can be included. A coded component library is scoped separately based on the product stack and required states.' },
        { question: 'Can you work with our existing Figma library?', answer: 'Yes. We can audit and restructure an existing library, preserve useful components and remove duplication before adding new patterns.' },
        { question: 'How do we keep the system current?', answer: 'The handoff includes practical contribution and maintenance rules. We can also support a defined adoption period after the initial delivery.' },
      ]}
    />
  )
}
