import ServiceLayout from '../../components/ServiceLayout.jsx'

export default function UXUI() {
  return (
    <ServiceLayout
      badge="UX/UI design"
      title="A product people"
      accent="can understand and use."
      intro="Product flows, interfaces and prototypes shaped around real user tasks, business priorities and a system engineering can implement."
      currentPath="/services/ux-ui"
      overview={[
        'UX/UI work begins by understanding what the product must help someone accomplish and what the business needs to learn or deliver. We map the critical flows, remove avoidable decisions and use prototypes to test structure before investing in complete visual coverage.',
        'The interface grows from shared foundations rather than isolated screens. States, content behaviour, responsive rules and accessibility are considered alongside visual character, creating a product that feels distinctive without becoming difficult to build or maintain.',
      ]}
      painPoints={[
        'Core flows have grown through patches and no longer feel coherent.',
        'Important actions are hidden behind unclear hierarchy or terminology.',
        'Design files show ideal screens but omit loading, empty and error states.',
        'Brand and product feel like two different companies.',
        'Engineering receives screens without reusable patterns or behaviour notes.',
        'The team needs a prototype before committing to a larger build.',
      ]}
      deliverables={[
        { t: 'Flow architecture', d: 'Core tasks, entry points, decisions and edge cases mapped before detailed screens.' },
        { t: 'Wireframes', d: 'Low-fidelity structure for testing hierarchy, content and product logic.' },
        { t: 'Interface design', d: 'Responsive screens with clear hierarchy, visual character and real content.' },
        { t: 'Interactive prototype', d: 'A focused prototype for reviews, user conversations or development alignment.' },
        { t: 'States and behaviour', d: 'Loading, empty, error, validation and transition states for priority flows.' },
        { t: 'Design foundations', d: 'Reusable tokens and components organised for implementation and future extension.' },
      ]}
      process={[
        { title: 'Frame the product problem', description: 'We align on users, priority tasks, business constraints and what the current phase needs to prove or ship.' },
        { title: 'Prototype the flow', description: 'We explore structure and interaction at the right fidelity, review edge cases and test important assumptions before polishing every screen.' },
        { title: 'Systemise and hand over', description: 'Approved flows become responsive interfaces, documented states and reusable foundations ready for engineering.' },
      ]}
      engagement={{
        title: 'Designed around the next product decision',
        paragraphs: [
          'The scope can focus on one critical journey, a product redesign or a new application foundation. We identify the smallest coherent surface that creates useful evidence or can move into development.',
          'Product owners and engineering are involved early enough to expose constraints. This reduces speculative design and makes the final handoff a shared implementation plan rather than a static presentation.',
        ],
        points: ['Priority flows and measurable product questions', 'Responsive and accessible interaction patterns', 'Real content, states and edge cases', 'Implementation notes and direct handoff review'],
      }}
      questions={[
        { question: 'Do you conduct user research?', answer: 'Research can be included when access to representative users and a clear decision are available. We agree the method and recruitment responsibility before starting.' },
        { question: 'Can you redesign only one flow?', answer: 'Yes. A focused flow can be the right first engagement when it has clear boundaries and the surrounding product context is available.' },
        { question: 'Will we receive a design system?', answer: 'Every engagement includes the reusable foundations required by its scope. A broader product-wide system is planned separately when needed.' },
        { question: 'Can you work with our developers?', answer: 'Yes. Engineering reviews are encouraged during the work, and the handoff can include implementation support for an agreed period.' },
      ]}
    />
  )
}
