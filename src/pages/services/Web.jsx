import ServiceLayout from '../../components/ServiceLayout.jsx'

export default function Web() {
  return (
    <ServiceLayout
      badge="Web & digital"
      title="A marketing site"
      accent="that matches your deck and product."
      intro="Launch-ready web design with information architecture, responsive layouts, and component thinking, organized so engineering can ship without guessing."
      currentPath="/services/web"
      overview={[
        'A startup website has to explain the product, establish trust and move the right visitor towards a useful next step. We begin with the questions a buyer, user or investor needs answered, then organise the page structure and narrative before deciding how the interface should look.',
        'Design and development decisions stay connected. Content hierarchy, responsive behaviour, motion, accessibility and performance are considered together, which reduces late compromises and produces a site that can be maintained after launch instead of becoming a one-off campaign asset.',
      ]}
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
      process={[
        { title: 'Structure the story', description: 'We define audiences, page goals, navigation and content hierarchy so each page has one clear job before visual design begins.' },
        { title: 'Design the responsive system', description: 'Priority pages are designed across key breakpoints with reusable sections, purposeful motion and real content rather than placeholder blocks.' },
        { title: 'Build, test and launch', description: 'The site is implemented or handed to engineering with responsive specifications, edge cases, performance checks and a clear launch checklist.' },
      ]}
      engagement={{
        title: 'A website with a maintainable core',
        paragraphs: [
          'The first phase establishes the pages and decisions required for launch. Additional content, integrations and experiments are separated from the core scope so the project can move without hiding complexity.',
          'When Neutral Studio builds the site, the implementation includes responsive testing, semantic HTML and a review of crawlability, metadata and loading behaviour. When another team builds it, we provide structured files and direct handoff context.',
        ],
        points: ['Information architecture and conversion path', 'Responsive design using real approved content', 'Reusable page and component patterns', 'SEO, accessibility and performance launch checks'],
      }}
      questions={[
        { question: 'Do you design and develop the website?', answer: 'Yes. The engagement can include both design and implementation, or stop at an engineering-ready handoff when an internal development team is already in place.' },
        { question: 'Which platform do you use?', answer: 'The platform follows the content, integration and maintenance needs. We agree the technical approach before scope and price are confirmed.' },
        { question: 'Is copywriting included?', answer: 'Narrative structure and interface copy direction are part of the process. Full copywriting, research or multilingual content can be included as a defined workstream.' },
        { question: 'What happens after launch?', answer: 'We can provide a short stabilisation period, documentation and an agreed maintenance option. Ownership and access remain clear in the handoff.' },
      ]}
    />
  )
}
