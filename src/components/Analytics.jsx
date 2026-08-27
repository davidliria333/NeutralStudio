import { Analytics as VercelAnalytics } from '@vercel/analytics/react'

const PRODUCTION_HOSTS = new Set(['neutralstudio.co', 'www.neutralstudio.co'])

function filterAnalyticsEvent(event) {
  try {
    const url = new URL(event.url)
    if (!PRODUCTION_HOSTS.has(url.hostname)) return null

    url.search = ''
    url.hash = ''
    return { ...event, url: url.toString() }
  } catch {
    return null
  }
}

export default function Analytics() {
  return <VercelAnalytics beforeSend={filterAnalyticsEvent} />
}
