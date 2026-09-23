import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://example.com'
  const paths = ['', '/reparaturen', '/kamera-reparatur', '/audio-reparatur', '/elektronik-reparatur', '/platinen-reparatur', '/netzteil-reparatur', '/versand', '/ablauf', '/preise', '/faq']
  return paths.map(path => ({url: `${base}${path}`}))
}
