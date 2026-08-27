import ServiceLayout from '../../components/ServiceLayout.jsx'

export default function Web() {
  return (
    <ServiceLayout
      badge="Web & digital"
      title="A marketing site"
      accent="that matches your deck and product."
      intro="Launch-ready web design with information architecture, responsive layouts, and component thinking, organized so engineering can ship without guessing."
      currentPath="/services/web"
      startingPrice={1990}
      decisionGuide={{
        title: 'What a startup website must decide before visual design.',
        paragraphs: [
          'A website brief is stronger when it identifies the visitor, the question that brought them to the page and the action that would count as useful progress. A founder, buyer, candidate and investor do not need the same sequence of proof. Defining primary and secondary journeys gives the information architecture a job and stops the homepage from becoming a list of everything the company could say.',
          'Content readiness, ownership and technical boundaries matter just as much as visual ambition. We establish who can approve copy, which integrations are essential, how pages will be updated and what performance or accessibility requirements apply. That makes the launch scope credible and reveals whether the project needs a focused marketing site, a larger content system or an initial conversion page that can grow later.',
          'Search visibility is treated as part of the page architecture rather than a checklist added after launch. Priority services and questions need their own crawlable destinations, descriptive titles and useful internal links. Technical delivery then protects that content with semantic HTML, responsive media, canonical URLs, structured data where it is supported and a sitemap that reflects the pages people can actually use.',
        ],
        points: [
          'Primary search intent, audience questions and the page that should answer each one.',
          'Required proof: product detail, work, team, process, pricing or technical documentation.',
          'Content management, analytics, consent and integration responsibilities.',
          'Responsive, accessibility, performance and launch acceptance criteria.',
        ],
      }}
      overview={[
        'A startup website has to explain the product, establish trust and move the right visitor toward a useful next step. We begin with the questions a buyer, user or investor needs answered, then organize the page structure and narrative before deciding how the interface should look.',
        'Design and development decisions stay connected. Content hierarchy, responsive behavior, motion, accessibility and performance are considered together, which reduces late compromises and produces a site that can be maintained after launch instead of becoming a one-off campaign asset.',
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
          'When Neutral Studio builds the site, the implementation includes responsive testing, semantic HTML and a review of crawlability, metadata and loading behavior. When another team builds it, we provide structured files and direct handoff context.',
        ],
        points: ['Information architecture and conversion path', 'Responsive design using real approved content', 'Reusable page and component patterns', 'SEO, accessibility and performance launch checks'],
      }}
      questions={[
        { question: 'Do you design and develop the website?', answer: 'Yes. The engagement can include both design and implementation, or stop at an engineering-ready handoff when an internal development team is already in place.' },
        { question: 'Which platform do you use?', answer: 'The platform follows the content, integration and maintenance needs. We agree the technical approach before scope and price are confirmed.' },
        { question: 'Is copywriting included?', answer: 'Narrative structure and interface copy direction are part of the process. Full copywriting, research or multilingual content can be included as a defined workstream.' },
        { question: 'What happens after launch?', answer: 'We can provide a short stabilization period, documentation and an agreed maintenance option. Ownership and access remain clear in the handoff.' },
      ]}
    />
  )
}
