import ServiceLayout from '../../components/ServiceLayout.jsx'

export default function Consulting() {
  return (
    <ServiceLayout
      badge="Pitch & narrative"
      title="A deck investors"
      accent="actually read."
      intro="Investor and sales decks built around story spine, slide architecture, and exec polish, so the room stays focused on the company, not the slides."
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
      results={[
        { metric: 'Read', quote: 'The first deck our advisors actually finished.', who: 'DevTools CEO' },
        { metric: 'Closed', quote: 'Two rounds raised after the deck redesign.', who: 'IoT founder' },
        { metric: '78%', quote: 'Faster turnaround on follow-up decks using the master template.', who: 'Strategy lead' },
      ]}
    />
  )
}
