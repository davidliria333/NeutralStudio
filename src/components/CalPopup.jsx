export const CALENDAR_URL = 'https://cal.com/neutralstudio/30min?overlayCalendar=true'

const CAL_LINK = 'neutralstudio/30min'
const CAL_NAMESPACE = '30min'
const EMBED_SCRIPT_URL = 'https://app.cal.com/embed/embed.js'
const MODAL_CONFIG = {
  layout: 'month_view',
  useSlotsViewOnSmallScreen: 'true',
}

let embedReady = false
let embedPromise

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
  if (typeof window === 'undefined') return Promise.resolve(false)
  if (embedPromise) return embedPromise

  embedPromise = new Promise((resolve) => {
    if (embedReady) {
      resolve(true)
      return
    }

    const cal = installCalLoader()
    cal('init', CAL_NAMESPACE, { origin: 'https://cal.com' })
    cal.ns[CAL_NAMESPACE]('ui', {
      theme: 'light',
      styles: { branding: { brandColor: '#15251d' } },
      hideEventTypeDetails: false,
      layout: 'month_view',
    })

    const script = document.querySelector(`script[src="${EMBED_SCRIPT_URL}"]`)
    if (!script) {
      resolve(false)
      return
    }

    script.addEventListener('load', () => {
      embedReady = true
      resolve(true)
    }, { once: true })
    script.addEventListener('error', () => resolve(false), { once: true })
  })

  return embedPromise
}

export async function openCalPopup(event) {
  const modifiedClick = (event.button != null && event.button !== 0) || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey
  if (modifiedClick) return

  event.preventDefault()
  const ready = await startCalEmbed()
  if (!ready || !window.Cal?.ns?.[CAL_NAMESPACE]) {
    window.location.assign(CALENDAR_URL)
    return
  }

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
  return null
}
