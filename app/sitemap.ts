import { NextResponse } from 'next/server'

export function GET(){
  const base = 'https://example.com'
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${base}</loc>
    </url>
  </urlset>`
  return new NextResponse(xml, {headers: {'Content-Type':'application/xml'}})
}
