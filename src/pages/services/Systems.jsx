import ServiceLayout from '../../components/ServiceLayout.jsx'

export default function Systems() {
  return (
    <ServiceLayout
      badge="Systems & guidelines"
      title="One system."
      accent="Every touchpoint aligned."
      intro="A documented design system that keeps deck, site, and product visually coherent: tokens, components, and rules your team can actually follow."
      currentPath="/services/systems"
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
        { title: 'Define the foundations', description: 'We establish naming, typography, colour, spacing and component principles, then test them against representative screens and content.' },
        { title: 'Package adoption', description: 'We organise the library, documentation and technical tokens around the tools and responsibilities of the people who will maintain them.' },
      ]}
      engagement={{
        title: 'Built for adoption, not display',
        paragraphs: [
          'The most complete library is not automatically the most useful. We prioritise foundations and components that remove real friction now, then document how new patterns should be evaluated and added later.',
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
