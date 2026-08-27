import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { cp, mkdir } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'

const publicAssets = [
  'Logo-01.png',
  'brand-favicon.svg',
  'neutral-cursor.svg',
  'scrollcraft.js',
  'robots.txt',
  'sitemap.xml',
  'llms.txt',
  'fonts/Cy-SemiBold.woff2',
  'generated/neutral-landscape/neutral-landscape-desktop-seek.mp4',
  'generated/neutral-landscape/neutral-landscape-mobile-seek.mp4',
  'generated/neutral-landscape/neutral-landscape-desktop-poster.jpg',
  'generated/neutral-landscape/neutral-landscape-desktop-poster.webp',
  'generated/neutral-landscape/neutral-landscape-mobile-poster.jpg',
  'portfolio/branding',
  'portfolio/web',
]

function copyPublishedAssets() {
  return {
    name: 'copy-published-assets',
    apply: 'build',
    async closeBundle() {
      for (const relativePath of publicAssets) {
        const source = resolve('public', relativePath)
        const destination = resolve('dist', relativePath)
        await mkdir(dirname(destination), { recursive: true })
        await cp(source, destination, { recursive: true })
      }
    },
  }
}

export default defineConfig({
  publicDir: false,
  plugins: [react(), copyPublishedAssets()],
  server: { port: 5173 },
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 1500,
  },
})
