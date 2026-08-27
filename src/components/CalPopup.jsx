import { useEffect } from 'react'

export const CALENDAR_URL = 'https://cal.com/neutralstudio/30min?overlayCalendar=true'

const CAL_LINK = 'neutralstudio/30min'
const CAL_NAMESPACE = '30min'
const EMBED_SCRIPT_URL = 'https://app.cal.com/embed/embed.js'
const MODAL_CONFIG = {
  layout: 'month_view',
  useSlotsViewOnSmallScreen: 'true',
}

let embedStarted = false
let embedReady = false

function installCalLoader() {
  if (window.Cal) return window.Cal

  ;((scope, scriptUrl, initCommand) => {
    const push = (api, args) => api.q.push(args)

    scope.Cal = function calQueue() {
      const cal = scope.Cal
      const args = arguments

      if (!cal.loaded) {
        cal.ns = {}
        cal.q = cal.q || []
        const script = document.createElement('script')
        script.src = scriptUrl
        script.async = true
        document.head.appendChild(script)
        cal.loaded = true
      }

      if (args[0] === initCommand) {
        const api = function namespacedQueue() {
          push(api, arguments)
        }
        const namespace = args[1]
        api.q = api.q || []

        if (typeof namespace === 'string') {
          cal.ns[namespace] = cal.ns[namespace] || api
          push(cal.ns[namespace], args)
          push(cal, ['initNamespace', namespace])
        } else {
          push(cal, args)
        }
        return
      }

      push(cal, args)
    }
  })(window, EMBED_SCRIPT_URL, 'init')

  return window.Cal
}

function startCalEmbed() {
  if (embedStarted || typeof window === 'undefined') return
  embedStarted = true

  const cal = installCalLoader()
  cal('init', CAL_NAMESPACE, { origin: 'https://cal.com' })
  cal.ns[CAL_NAMESPACE]('ui', {
    theme: 'light',
    styles: { branding: { brandColor: '#15251d' } },
    hideEventTypeDetails: false,
    layout: 'month_view',
  })

  const script = document.querySelector(`script[src="${EMBED_SCRIPT_URL}"]`)
  if (!script) return
  script.addEventListener('load', () => { embedReady = true }, { once: true })
}

export function openCalPopup(event) {
  const modifiedClick = event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey
  if (modifiedClick) return

  startCalEmbed()
  if (!embedReady) return

  event.preventDefault()
  window.Cal.ns[CAL_NAMESPACE]('modal', {
    calLink: CAL_LINK,
    config: MODAL_CONFIG,
  })
}

export const CAL_POPUP_PROPS = {
  'data-cal-popup': CAL_NAMESPACE,
  onClick: openCalPopup,
}

export default function CalPopup() {
  useEffect(() => {
    startCalEmbed()
  }, [])

  return null
}
