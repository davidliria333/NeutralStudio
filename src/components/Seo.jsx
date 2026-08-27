import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getRouteMeta, getSchemas, OG_IMAGE, SITE_NAME } from '../seo/site.js'

function setMeta(selector, attributes) {
  let element = document.head.querySelector(selector)
  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }
  Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value))
  element.dataset.seoManaged = 'true'
}

export default function Seo() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = getRouteMeta(pathname)
    document.title = meta.title
    document.documentElement.lang = 'en'

    setMeta('meta[name="description"]', { name: 'description', content: meta.description })
    setMeta('meta[name="robots"]', { name: 'robots', content: meta.noindex ? 'noindex,follow' : 'index,follow,max-image-preview:large' })
    setMeta('meta[property="og:title"]', { property: 'og:title', content: meta.title })
    setMeta('meta[property="og:description"]', { property: 'og:description', content: meta.description })
    setMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' })
    setMeta('meta[property="og:url"]', { property: 'og:url', content: meta.canonical })
    setMeta('meta[property="og:image"]', { property: 'og:image', content: OG_IMAGE })
    setMeta('meta[property="og:image:alt"]', { property: 'og:image:alt', content: `${SITE_NAME} Mediterranean landscape` })
    setMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: SITE_NAME })
    setMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
    setMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: meta.title })
    setMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: meta.description })
    setMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: OG_IMAGE })

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = meta.canonical
    canonical.dataset.seoManaged = 'true'

    document.head.querySelectorAll('script[data-seo-schema]').forEach((script) => script.remove())
    getSchemas(pathname).forEach((schema) => {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.dataset.seoSchema = 'true'
      script.textContent = JSON.stringify(schema).replace(/</g, '\\u003c')
      document.head.appendChild(script)
    })
  }, [pathname])

  return null
}
