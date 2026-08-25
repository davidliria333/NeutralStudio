import { useEffect } from 'react'

const WEBSITE_ID = import.meta.env.VITE_UMAMI_WEBSITE_ID || 'e6be8a73-b55b-474e-b04e-ae3822a81e2d'
const SCRIPT_URL = import.meta.env.VITE_UMAMI_SCRIPT_URL || 'https://cloud.umami.is/script.js'
const TRACKED_DOMAINS = import.meta.env.VITE_UMAMI_DOMAINS || 'neutraldesign.es,www.neutraldesign.es'

export default function Analytics() {
  useEffect(() => {
    const allowedDomains = TRACKED_DOMAINS.split(',').map((domain) => domain.trim())
    const isProductionDomain = allowedDomains.includes(window.location.hostname)
    if (!WEBSITE_ID || !isProductionDomain || document.querySelector('script[data-neutral-analytics]')) return undefined

    const script = document.createElement('script')
    script.defer = true
    script.src = SCRIPT_URL
    script.dataset.websiteId = WEBSITE_ID
    script.dataset.domains = TRACKED_DOMAINS
    script.dataset.doNotTrack = 'true'
    script.dataset.neutralAnalytics = 'umami'
    document.head.appendChild(script)

    return () => script.remove()
  }, [])

  return null
}
