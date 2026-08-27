import ServiceLayout from '../../components/ServiceLayout.jsx'

export default function AppDevelopment() {
  return (
    <ServiceLayout
      badge="App design & development"
      title="One product process."
      accent="From logic to release."
      intro="A connected design and development engagement for teams that need a production-ready application, not a prototype stranded between suppliers."
      currentPath="/services/app-development"
      overview={[
        'Application work starts by reducing the idea to a release that can be understood, built and validated. We define users, core jobs, platform constraints, data boundaries and operational responsibilities before turning a feature list into interface screens.',
        'Design and implementation evolve together. Product flows are reviewed against technical reality, while the build preserves the interaction and visual decisions that make the experience understandable. The result is a scoped release with clear ownership, known limitations and a path for iteration.',
      ]}
      painPoints={[
        'The roadmap mixes launch requirements with ideas that can wait.',
        'Design and development suppliers make decisions in isolation.',
        'Important permissions, states and data boundaries are discovered late.',
        'A polished prototype exists but has no realistic implementation path.',
        'The team cannot estimate release scope because requirements remain implicit.',
        'Ownership, environments and post-launch support are unclear.',
      ]}
      deliverables={[
        { t: 'Release definition', d: 'Users, core flows, platform, constraints and acceptance criteria for the agreed version.' },
        { t: 'Product design', d: 'Responsive or native interface flows with states, content and interaction behaviour.' },
        { t: 'Technical architecture', d: 'A documented implementation approach for client, data, integrations and environments.' },
        { t: 'Production build', d: 'The agreed application scope implemented with version control and reviewable milestones.' },
        { t: 'Quality assurance', d: 'Functional, responsive and release checks against the agreed acceptance criteria.' },
        { t: 'Handoff and release', d: 'Deployment or submission support, ownership notes and a defined stabilisation period.' },
      ]}
      process={[
        { title: 'Define the release', description: 'We turn the product idea into flows, constraints and acceptance criteria, separating launch requirements from later opportunities.' },
        { title: 'Design and build in slices', description: 'Priority journeys move from interaction design into implementation in reviewable slices, keeping product and technical decisions connected.' },
        { title: 'Validate and release', description: 'We test the agreed behaviours and environments, document known boundaries and support the defined deployment or store submission.' },
      ]}
      engagement={{
        title: 'A scoped route to production',
        paragraphs: [
          'The starting price reflects a focused application, not every possible product. Final scope depends on platforms, accounts, integrations, data sensitivity, content and the responsibilities retained by the client.',
          'Infrastructure, third-party fees, legal compliance and ongoing operations are made explicit before work begins. Where specialist review is required, it remains a separate responsibility rather than an implied promise.',
        ],
        points: ['Written scope, assumptions and acceptance criteria', 'Client-owned accounts, repositories and production access', 'Reviewable design and development milestones', 'Release checklist and defined stabilisation support'],
      }}
      questions={[
        { question: 'Which platforms can you build for?', answer: 'The platform is chosen from the product and operational requirements. Web, iOS or cross-platform approaches are considered before the technical scope is confirmed.' },
        { question: 'Does the starting price include every integration?', answer: 'No. Third-party integrations, migrations, complex administration and regulated data handling are scoped explicitly after their requirements are known.' },
        { question: 'Who owns the code and accounts?', answer: 'Client ownership is the default. Repositories, hosting and store accounts should be created or transferred in a way that leaves the client in control.' },
        { question: 'What happens after release?', answer: 'A stabilisation period and handoff are defined in the proposal. Ongoing maintenance or product iteration can continue under a separate agreement.' },
      ]}
    />
  )
}
