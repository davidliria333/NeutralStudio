import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'
import { getRouteMeta, INDEXABLE_ROUTES, SITE_URL } from '../src/seo/site.js'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const failures = []
const titles = new Map()
const descriptions = new Map()
const knownRoutes = new Set([...INDEXABLE_ROUTES, '/'])

function fail(route, message) {
  failures.push(`${route}: ${message}`)
}

function outputPath(route) {
  return route === '/'
    ? resolve(projectRoot, 'dist/index.html')
    : resolve(projectRoot, `dist${route}.html`)
}

function matchOne(html, pattern) {
  return html.match(pattern)?.[1]?.trim()
}

function internalPaths(html) {
  return [...html.matchAll(/\shref="([^"]+)"/gi)]
    .map((match) => match[1])
    .filter((href) => href.startsWith('/') && !href.startsWith('//'))
    .map((href) => href.split('#')[0].split('?')[0] || '/')
    .filter((href) => !/\.[a-z0-9]{2,5}$/i.test(href))
}

const sitemap = await readFile(resolve(projectRoot, 'public/sitemap.xml'), 'utf8')
const robots = await readFile(resolve(projectRoot, 'public/robots.txt'), 'utf8')
const llms = await readFile(resolve(projectRoot, 'public/llms.txt'), 'utf8')
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1])

for (const route of INDEXABLE_ROUTES) {
  const html = await readFile(outputPath(route), 'utf8')
  const meta = getRouteMeta(route)
  const title = matchOne(html, /<title>([^<]*)<\/title>/i)
  const description = matchOne(html, /<meta\s+name="description"\s+content="([^"]*)"/i)
  const canonical = matchOne(html, /<link\s+rel="canonical"\s+href="([^"]*)"/i)
  const robotsMeta = matchOne(html, /<meta\s+name="robots"\s+content="([^"]*)"/i)
  const ogUrl = matchOne(html, /<meta\s+property="og:url"\s+content="([^"]*)"/i)
  const h1Count = (html.match(/<h1\b/gi) || []).length
  const expected = `${SITE_URL}${route === '/' ? '/' : route}`

  if (!html.includes('<html lang="en-US">')) fail(route, 'document language is not en-US')
  if (!title || title.length > 65) fail(route, `title length is ${title?.length ?? 0}, expected 1–65`)
  if (!description || description.length < 70 || description.length > 160) fail(route, `description length is ${description?.length ?? 0}, expected 70–160`)
  if (titles.has(title)) fail(route, `duplicates title from ${titles.get(title)}`)
  if (descriptions.has(description)) fail(route, `duplicates description from ${descriptions.get(description)}`)
  titles.set(title, route)
  descriptions.set(description, route)
  if (h1Count !== 1) fail(route, `contains ${h1Count} H1 elements`)
  if (canonical !== expected || canonical !== meta.canonical) fail(route, `canonical mismatch: ${canonical}`)
  if (ogUrl !== expected) fail(route, `og:url mismatch: ${ogUrl}`)
  if (!robotsMeta?.includes('index') || robotsMeta.includes('noindex')) fail(route, `robots meta is not indexable: ${robotsMeta}`)
  if (!sitemapUrls.includes(expected)) fail(route, 'missing from sitemap')
  if (!llms.includes(expected) && !['/privacy', '/legal'].includes(route)) fail(route, 'missing from llms.txt')
  if (/<style[^>]*>[\s\S]*?&gt;[\s\S]*?<\/style>/i.test(html)) fail(route, 'escaped child selector in SSR style can cause hydration mismatch')

  const schemas = [...html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)]
  if (!schemas.length) fail(route, 'missing JSON-LD')
  for (const [index, schema] of schemas.entries()) {
    try {
      JSON.parse(schema[1])
    } catch (error) {
      fail(route, `JSON-LD block ${index + 1} is invalid: ${error.message}`)
    }
  }

  for (const path of internalPaths(html)) {
    const normalized = path.length > 1 ? path.replace(/\/+$/, '') : path
    if (!knownRoutes.has(normalized) && normalized !== '/services/consulting') {
      fail(route, `links to unknown internal route ${path}`)
    }
  }
}

if (sitemapUrls.length !== INDEXABLE_ROUTES.length) {
  fail('sitemap.xml', `contains ${sitemapUrls.length} URLs for ${INDEXABLE_ROUTES.length} indexable routes`)
}

if (!robots.includes(`Sitemap: ${SITE_URL}/sitemap.xml`)) {
  fail('robots.txt', 'sitemap host does not match SITE_URL')
}

const notFound = await readFile(resolve(projectRoot, 'dist/404.html'), 'utf8')
if (!/<meta\s+name="robots"\s+content="[^"]*noindex/i.test(notFound)) fail('/404', 'missing noindex')
if (/<link\s+rel="canonical"/i.test(notFound)) fail('/404', 'must not contain a canonical')
if ((notFound.match(/<h1\b/gi) || []).length !== 1) fail('/404', 'must contain exactly one H1')

if (failures.length) {
  console.error(`SEO validation failed with ${failures.length} issue(s):`)
  failures.forEach((failure) => console.error(`- ${failure}`))
  process.exit(1)
}

console.log(`SEO validation passed: ${INDEXABLE_ROUTES.length} indexable routes + 404.`)
