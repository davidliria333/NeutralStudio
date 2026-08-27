import ServiceLayout from '../../components/ServiceLayout.jsx'

export default function Consulting() {
  return (
    <ServiceLayout
      badge="Pitch & narrative"
      title="A deck investors"
      accent="actually read."
      intro="Investor and sales decks built around story spine, slide architecture, and exec polish, so the room stays focused on the company, not the slides."
      currentPath="/services/pitch-deck"
      overview={[
        'A strong deck is a decision-making document, not a compressed website. We work from the audience, meeting context and evidence available, then decide what the room needs to understand, believe and remember. That produces a narrative before visual polish begins.',
        'The design system supports the story instead of competing with it. Hierarchy, pacing, diagrams and data visuals are developed as reusable patterns, so the team can update important numbers and create follow-up versions without rebuilding every slide.',
      ]}
      painPoints={[
        'Story buried under tables, screenshots, and bullet points.',
        'Inconsistent typography and spacing slide to slide.',
        'Data viz that obscures the metric instead of revealing it.',
        'No reusable master template for follow-up decks.',
        'Time wasted re-aligning text boxes before every meeting.',
        'Advisors stop reading after slide three.',
      ]}
      deliverables={[
        { t: 'Story spine', d: 'A narrative arc you can defend in any room or format.' },
        { t: 'Slide architecture', d: 'Sections, transitions, and a logical order from problem to ask.' },
        { t: 'Data visualization', d: 'Charts and metrics designed for clarity, not decoration.' },
        { t: 'Master templates', d: 'Reusable slide masters for the next deck and the one after.' },
        { t: 'Exec polish', d: 'Typography, spacing, and visual rhythm at boardroom standards.' },
        { t: 'Source files', d: 'Editable Keynote / Slides / Figma masters with style tokens.' },
      ]}
      process={[
        { title: 'Clarify the room', description: 'We define the audience, meeting, ask and available evidence, then identify the questions the deck must answer without overclaiming.' },
        { title: 'Shape the narrative', description: 'We build the story spine, slide sequence and information hierarchy before refining diagrams, charts and visual direction.' },
        { title: 'Polish and prepare', description: 'We test readability, tighten transitions and deliver editable masters with repeatable layouts for updates and follow-up versions.' },
      ]}
      engagement={{
        title: 'A deck grounded in real evidence',
        paragraphs: [
          'The company supplies the facts, numbers and source material. We help decide what belongs in the main narrative, what needs clearer explanation and what should move to an appendix or follow-up document.',
          'We do not invent traction, customer proof or market evidence. If a claim cannot be supported, the deck either qualifies it, sources it or uses a different form of argument.',
        ],
        points: ['Investor, sales or partnership narrative', 'Editable slide architecture and master layouts', 'Clear charts, diagrams and information hierarchy', 'Presentation and PDF export checks'],
      }}
      questions={[
        { question: 'Can you write the whole deck?', answer: 'We can shape the narrative and rewrite slide copy from supplied business context. Founders remain responsible for factual claims, forecasts and source data.' },
        { question: 'Which tools do you deliver in?', answer: 'The editable format is agreed before the project begins and can include Keynote, Google Slides, PowerPoint or Figma depending on the team workflow.' },
        { question: 'Can you work from an existing deck?', answer: 'Yes. We can restructure and redesign an existing deck, preserving useful evidence while removing repetition and improving the story.' },
        { question: 'Do you support presentation practice?', answer: 'Presentation notes and a structured review session can be included. Ongoing fundraising or sales advice is outside the design engagement unless explicitly scoped.' },
      ]}
    />
  )
}
