import React from 'react'
import { Helmet } from 'react-helmet-async'

const DEFAULTS = {
  title: 'Lohitaksh Bisen — Portfolio',
  description: 'Lohitaksh Bisen — web developer building clean, fast websites and small web apps.',
  image: '/og-image.png'
}

export default function Head({ title, description, url, image, jsonLd }) {
  const t = title || DEFAULTS.title
  const d = description || DEFAULTS.description
  const img = image || DEFAULTS.image
  const u = url || (typeof window !== 'undefined' ? window.location.href : '')

  const defaultJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Lohitaksh Bisen',
    url: u,
    sameAs: [
      'https://github.com/lohitakshcodes',
      'https://linkedin.com/in/lohitakshbisen'
    ]
  }

  return (
    <Helmet>
      <title>{t}</title>
      <meta name="description" content={d} />
      <meta name="keywords" content="portfolio, web developer, Lohitaksh Bisen, React, Tailwind" />
      <link rel="canonical" href={u} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={t} />
      <meta property="og:description" content={d} />
      <meta property="og:url" content={u} />
      <meta property="og:image" content={img} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={t} />
      <meta name="twitter:description" content={d} />
      <meta name="twitter:image" content={img} />

      <script type="application/ld+json">
        {JSON.stringify(jsonLd || defaultJsonLd)}
      </script>
    </Helmet>
  )
}
