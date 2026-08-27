import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createServer } from 'vite'
import { getRouteMeta, getSchemas, INDEXABLE_ROUTES, OG_IMAGE, OG_IMAGE_HEIGHT, OG_IMAGE_WIDTH, SITE_NAME } from '../src/seo/site.js'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const templatePath = resolve(projectRoot, 'dist/index.html')
const template = await readFile(templatePath, 'utf8')
const vite = await createServer({
  root: projectRoot,
  appType: 'custom',
  server: { middlewareMode: true },
})

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function replaceMeta(html, selector, value) {
  const pattern = new RegExp(`(<meta\\s+${escapeRegExp(selector)}\\s+content=")[^"]*(")`, 'i')
  return html.replace(pattern, `$1${escapeHtml(value)}$2`)
}

function outputPath(route) {
  if (route === '/') return templatePath
  if (route === '/__not-found__') return resolve(projectRoot, 'dist/404.html')
  return resolve(projectRoot, `dist${route}.html`)
}

function applyHead(html, route) {
  const browserPath = route === '/__not-found__' ? '/page-that-does-not-exist' : route
  const meta = getRouteMeta(browserPath)
  const robots = meta.noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'
  const schemas = getSchemas(browserPath)

  let output = html
    .replace(/<title>[^<]*<\/title>/i, `<title>${escapeHtml(meta.title)}</title>`)
  output = meta.noCanonical
    ? output.replace(/\s*<link rel="canonical" href="[^"]*"\s*\/?>/i, '')
    : output.replace(/<link rel="canonical" href="[^"]*"\s*\/?>/i, `<link rel="canonical" href="${escapeHtml(meta.canonical)}" />`)
  output = replaceMeta(output, 'name="description"', meta.description)
  output = replaceMeta(output, 'name="robots"', robots)
  output = replaceMeta(output, 'property="og:title"', meta.title)
  output = replaceMeta(output, 'property="og:description"', meta.description)
  output = replaceMeta(output, 'property="og:url"', meta.canonical)
  output = replaceMeta(output, 'property="og:image"', OG_IMAGE)
  output = replaceMeta(output, 'property="og:image:width"', OG_IMAGE_WIDTH)
  output = replaceMeta(output, 'property="og:image:height"', OG_IMAGE_HEIGHT)
  output = replaceMeta(output, 'name="twitter:title"', meta.title)
  output = replaceMeta(output, 'name="twitter:description"', meta.description)
  output = replaceMeta(output, 'name="twitter:image"', OG_IMAGE)

  const jsonLd = schemas
    .map((schema) => `<script type="application/ld+json">${JSON.stringify(schema).replaceAll('<', '\\u003c')}</script>`)
    .join('')
  return output.replace('</head>', `${jsonLd}</head>`)
}

try {
  const { render } = await vite.ssrLoadModule('/src/entry-server.jsx')
  const routes = [...INDEXABLE_ROUTES, '/__not-found__']

  for (const route of routes) {
    const browserPath = route === '/__not-found__' ? '/page-that-does-not-exist' : route
    const appHtml = render(browserPath)
    if (!appHtml.includes('<h1')) throw new Error(`Prerendered ${route} has no H1`)

    let html = applyHead(template, route)
    html = html.replace(
      '<div id="root"></div>',
      `<div id="root" data-prerender-path="${escapeHtml(browserPath)}">${appHtml}</div>`,
    )

    const destination = outputPath(route)
    await mkdir(dirname(destination), { recursive: true })
    await writeFile(destination, html)
  }

  console.log(`Prerendered ${routes.length} HTML routes for ${SITE_NAME}.`)
} finally {
  await vite.close()
}
