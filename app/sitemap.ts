import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://naizo.in'

  const routes = [
    '',
    '/about',
    '/services',
    '/pricing',
    '/case-studies',
    '/blogs',
    '/contact',
    '/legal'
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}
