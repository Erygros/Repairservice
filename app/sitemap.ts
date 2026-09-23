import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://repairservice.vercel.app'
  const paths = ['', '/reparaturen', '/kamera-reparatur', '/audio-reparatur', '/elektronik-reparatur', '/platinen-reparatur', '/netzteil-reparatur', '/versand', '/ablauf', '/preise', '/faq']
  return paths.map(path => ({url: `${base}${path}`}))
}
