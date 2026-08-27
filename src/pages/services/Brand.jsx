import ServiceLayout from '../../components/ServiceLayout.jsx'

export default function Brand() {
  return (
    <ServiceLayout
      badge="Brand & identity"
      title="A visual system"
      accent="investors and users believe."
      intro="Identity that scales with the company: logo, type, color, and patterns documented as a system you can hand to engineering, marketing, or your next hire."
      currentPath="/services/brand"
      overview={[
        'Brand identity is useful when it helps people recognise the company and helps the team make consistent decisions. We start with positioning, audience and practical constraints before choosing a visual direction. The goal is not a collection of polished files; it is a system that can survive the next landing page, product release and investor conversation.',
        'The engagement connects verbal direction, identity and application. Early concepts are tested where the brand will actually live, from product screens and websites to decks and launch assets. That keeps the work grounded and makes the final handoff easier to use without constant design supervision.',
      ]}
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
      process={[
        { title: 'Frame the position', description: 'We clarify the audience, category, promise and practical contexts the identity must support. This creates a shared brief and criteria for judging the work.' },
        { title: 'Build and test', description: 'We develop a focused visual direction, then test it across the website, product, deck and launch materials instead of approving a logo in isolation.' },
        { title: 'Document and hand over', description: 'We prepare production files, reusable templates and concise rules so internal teams and external partners can extend the identity consistently.' },
      ]}
      engagement={{
        title: 'A focused identity engagement',
        paragraphs: [
          'A typical project begins with existing product and business context, not a blank moodboard. We review what already works, where the company is changing and which touchpoints create the most visible inconsistency.',
          'Scope is agreed before design begins. Timing depends on the number of applications, decision-makers and rounds of refinement, and is confirmed in the proposal.',
        ],
        points: ['One decision-making group and clear feedback rhythm', 'Identity tested in real priority applications', 'Editable source files and practical usage guidance', 'Optional continuation into web, product or launch assets'],
      }}
      questions={[
        { question: 'Do we need a complete rebrand?', answer: 'Not always. If the existing identity has recognition or useful elements, the project can strengthen the system around it rather than replace everything.' },
        { question: 'Can you work with an existing logo?', answer: 'Yes. We can improve typography, colour, layout, image direction and templates while preserving a logo that still serves the company.' },
        { question: 'What do we receive?', answer: 'The exact handoff follows the agreed scope and can include logo files, typography and colour rules, graphic elements, templates and a concise guideline document.' },
        { question: 'Can the identity continue into product and web?', answer: 'Yes. Brand, product and website can be planned as one connected engagement or sequenced in phases with shared decisions and files.' },
      ]}
    />
  )
}
